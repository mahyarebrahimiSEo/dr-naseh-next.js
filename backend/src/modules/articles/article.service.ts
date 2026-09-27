import { prisma } from '../../database/prisma';
import { AppError } from '../../core/errors/AppError';
import { CreateArticleInput, UpdateArticleInput, ArticleQueryInput } from './article.schemas';

export class ArticleService {
  static async getArticles(query: ArticleQueryInput) {
    const page = query.page || 1;
    const limit = query.limit || 9;
    const skip = (page - 1) * limit;

    const where: any = {};

    if (query.isPublished !== undefined) {
      where.isPublished = query.isPublished;
    } else {
      where.isPublished = true;
    }

    if (query.category && query.category !== 'all') {
      where.category = { contains: query.category };
    }

    if (query.search) {
      const s = query.search.trim();
      where.OR = [
        { title: { contains: s } },
        { summary: { contains: s } },
        { content: { contains: s } },
      ];
    }

    const [total, articles] = await Promise.all([
      prisma.article.count({ where }),
      prisma.article.findMany({
        where,
        skip,
        take: limit,
        orderBy: { publishedAt: 'desc' },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      articles,
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

  static async getArticleBySlug(slug: string, incrementView = true) {
    const article = await prisma.article.findUnique({
      where: { slug },
    });

    if (!article) {
      throw AppError.notFound('مقاله مورد نظر یافت نشد');
    }

    if (incrementView) {
      await prisma.article.update({
        where: { slug },
        data: { viewsCount: { increment: 1 } },
      });
      article.viewsCount += 1;
    }

    return article;
  }

  static async createArticle(input: CreateArticleInput) {
    const existing = await prisma.article.findUnique({
      where: { slug: input.slug },
    });

    if (existing) {
      throw AppError.conflict('مقاله‌ای با این نامک (Slug) قبلاً ثبت شده است');
    }

    return prisma.article.create({
      data: input,
    });
  }

  static async updateArticle(id: string, input: UpdateArticleInput) {
    const existing = await prisma.article.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('مقاله مورد نظر یافت نشد');
    }

    if (input.slug && input.slug !== existing.slug) {
      const slugTaken = await prisma.article.findUnique({ where: { slug: input.slug } });
      if (slugTaken) {
        throw AppError.conflict('نامک جدید قبلاً برای مقاله دیگری استفاده شده است');
      }
    }

    return prisma.article.update({
      where: { id },
      data: input,
    });
  }

  static async deleteArticle(id: string) {
    const existing = await prisma.article.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('مقاله مورد نظر یافت نشد');
    }

    await prisma.article.delete({ where: { id } });
    return { message: 'مقاله با موفقیت حذف گردید' };
  }

  static async getCategories() {
    const categories = [
      { id: 'all', title: 'همه مقالات' },
      { id: 'knee', title: 'درمان‌های نوین زانو' },
      { id: 'spine', title: 'دیسک و ستون فقرات' },
      { id: 'prp', title: 'پی‌آرپی و سلول‌درمانی' },
      { id: 'emg', title: 'نوار عصب و عضله' },
      { id: 'exercise', title: 'حرکات اصلاحی و ورزش‌درمانی' },
    ];

    const counts = await Promise.all(
      categories.map(async (cat) => {
        const count =
          cat.id === 'all'
            ? await prisma.article.count({ where: { isPublished: true } })
            : await prisma.article.count({
                where: { isPublished: true, category: { contains: cat.id } },
              });
        return { ...cat, count };
      })
    );

    return counts;
  }
}
