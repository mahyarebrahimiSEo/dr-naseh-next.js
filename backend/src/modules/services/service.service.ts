import { prisma } from '../../database/prisma';
import { AppError } from '../../core/errors/AppError';
import { CreateServiceInput, UpdateServiceInput, ServiceQueryInput } from './service.schemas';

export class ClinicServicesService {
  static async getServices(query: ServiceQueryInput) {
    const where: any = {};

    if (query.isActive !== undefined) {
      where.isActive = query.isActive;
    } else {
      where.isActive = true;
    }

    if (query.category && query.category !== 'all') {
      where.category = query.category;
    }

    return prisma.service.findMany({
      where,
      orderBy: { displayOrder: 'asc' },
    });
  }

  static async getServiceBySlug(slug: string) {
    const service = await prisma.service.findUnique({
      where: { slug },
    });

    if (!service) {
      throw AppError.notFound('خدمت یا پروتکل درمانی مورد نظر یافت نشد');
    }

    return service;
  }

  static async createService(input: CreateServiceInput) {
    const existing = await prisma.service.findUnique({
      where: { slug: input.slug },
    });

    if (existing) {
      throw AppError.conflict('خدمتی با این نامک (Slug) قبلاً تعریف شده است');
    }

    return prisma.service.create({ data: input });
  }

  static async updateService(id: string, input: UpdateServiceInput) {
    const existing = await prisma.service.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('خدمت مورد نظر یافت نشد');
    }

    if (input.slug && input.slug !== existing.slug) {
      const slugTaken = await prisma.service.findUnique({ where: { slug: input.slug } });
      if (slugTaken) {
        throw AppError.conflict('نامک وارد شده برای خدمت دیگری استفاده شده است');
      }
    }

    return prisma.service.update({
      where: { id },
      data: input,
    });
  }

  static async deleteService(id: string) {
    const existing = await prisma.service.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('خدمت مورد نظر یافت نشد');
    }

    await prisma.service.delete({ where: { id } });
    return { message: 'خدمت درمانی با موفقیت حذف گردید' };
  }
}
