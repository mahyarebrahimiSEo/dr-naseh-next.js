import { prisma } from '../../database/prisma';
import { AppError } from '../../core/errors/AppError';
import { normalizeDigits, normalizeIranianPhone } from '../../utils/phone';
import { SubscribeInput } from './newsletter.schemas';

export class NewsletterService {
  static async subscribe(input: SubscribeInput) {
    const rawContact = normalizeDigits(input.contact).trim().toLowerCase();
    const phone = normalizeIranianPhone(rawContact);
    const normalizedContact = phone || rawContact;

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { contact: normalizedContact },
    });

    if (existing) {
      if (!existing.isActive) {
        return prisma.newsletterSubscriber.update({
          where: { id: existing.id },
          data: { isActive: true },
        });
      }
      throw AppError.conflict('این ایمیل یا شماره همراه قبلاً در خبرنامه ثبت شده است');
    }

    return prisma.newsletterSubscriber.create({
      data: {
        fullName: input.fullName.trim(),
        contact: normalizedContact,
        isActive: true,
      },
    });
  }

  static async getSubscribers(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [total, subscribers] = await Promise.all([
      prisma.newsletterSubscriber.count(),
      prisma.newsletterSubscriber.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      subscribers,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    };
  }

  static async unsubscribe(id: string) {
    const existing = await prisma.newsletterSubscriber.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('عضویت مورد نظر یافت نشد');
    }

    await prisma.newsletterSubscriber.update({
      where: { id },
      data: { isActive: false },
    });

    return { message: 'اشتراک خبرنامه غیرفعال گردید' };
  }
}
