import { z } from 'zod';

export const createArticleSchema = z.object({
  title: z.string().min(5, 'عنوان مقاله باید حداقل ۵ کاراکتر باشد'),
  slug: z.string().min(3, 'نامک (Slug) باید حداقل ۳ کاراکتر باشد'),
  summary: z.string().min(10, 'خلاصه مقاله باید حداقل ۱۰ کاراکتر باشد'),
  content: z.string().min(20, 'متن مقاله باید حداقل ۲۰ کاراکتر باشد'),
  category: z.string().min(2, 'دسته‌بندی الزامی است'),
  readTime: z.string().default('۵ دقیقه'),
  author: z.string().default('دکتر ناصح یوسفی'),
  imageUrl: z.string().url('آدرس تصویر معتبر نمی‌باشد').optional().nullable(),
  imageAlt: z.string().optional().nullable(),
  isPublished: z.boolean().default(true),
});

export const updateArticleSchema = createArticleSchema.partial();

export const articleQuerySchema = z.object({
  page: z.string().optional().transform((val) => (val ? Math.max(1, parseInt(val, 10)) : 1)),
  limit: z.string().optional().transform((val) => (val ? Math.min(100, Math.max(1, parseInt(val, 10))) : 9)),
  category: z.string().optional(),
  search: z.string().optional(),
  isPublished: z
    .string()
    .optional()
    .transform((val) => (val !== undefined ? val === 'true' : undefined)),
});

export type CreateArticleInput = z.infer<typeof createArticleSchema>;
export type UpdateArticleInput = z.infer<typeof updateArticleSchema>;
export type ArticleQueryInput = z.infer<typeof articleQuerySchema>;
