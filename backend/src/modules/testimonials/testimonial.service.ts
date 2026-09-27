import { prisma } from '../../database/prisma';
import { AppError } from '../../core/errors/AppError';
import { CreateTestimonialInput, UpdateTestimonialInput } from './testimonial.schemas';

export class TestimonialService {
  static async getTestimonials(onlyApproved = true) {
    const where: any = {};
    if (onlyApproved) {
      where.isApproved = true;
    }

    return prisma.testimonial.findMany({
      where,
      orderBy: { displayOrder: 'asc' },
    });
  }

  static async createTestimonial(input: CreateTestimonialInput) {
    return prisma.testimonial.create({ data: input });
  }

  static async updateTestimonial(id: string, input: UpdateTestimonialInput) {
    const existing = await prisma.testimonial.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('نظر بیمار یافت نشد');
    }

    return prisma.testimonial.update({
      where: { id },
      data: input,
    });
  }

  static async deleteTestimonial(id: string) {
    const existing = await prisma.testimonial.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('نظر بیمار یافت نشد');
    }

    await prisma.testimonial.delete({ where: { id } });
    return { message: 'نظر با موفقیت حذف گردید' };
  }
}
