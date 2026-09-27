import { prisma } from '../../database/prisma';
import { AppError } from '../../core/errors/AppError';
import { CreateFaqInput, UpdateFaqInput } from './faq.schemas';

export class FaqService {
  static async getFaqs(category?: string) {
    const where: any = {};
    if (category && category !== 'all') {
      where.category = category;
    }

    return prisma.fAQ.findMany({
      where,
      orderBy: { displayOrder: 'asc' },
    });
  }

  static async createFaq(input: CreateFaqInput) {
    return prisma.fAQ.create({ data: input });
  }

  static async updateFaq(id: string, input: UpdateFaqInput) {
    const existing = await prisma.fAQ.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('سوال متداول یافت نشد');
    }

    return prisma.fAQ.update({
      where: { id },
      data: input,
    });
  }

  static async deleteFaq(id: string) {
    const existing = await prisma.fAQ.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('سوال متداول یافت نشد');
    }

    await prisma.fAQ.delete({ where: { id } });
    return { message: 'سوال متداول با موفقیت حذف گردید' };
  }
}
