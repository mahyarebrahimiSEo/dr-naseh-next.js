import { z } from 'zod';

export const createServiceSchema = z.object({
  title: z.string().min(2, 'عنوان خدمت الزامی است'),
  latinTitle: z.string().optional().nullable(),
  slug: z.string().min(2, 'نامک (Slug) الزامی است'),
  category: z.enum(['biologic', 'electro', 'spine', 'rehab']),
  badge: z.string().optional().nullable(),
  summary: z.string().min(10, 'خلاصه خدمت الزامی است'),
  description: z.string().optional().nullable(),
  benefits: z.string().optional().nullable(), // JSON string or line separated
  duration: z.string().optional().nullable(),
  icon: z.string().optional().nullable(),
  imageUrl: z.string().url('آدرس تصویر معتبر نمی‌باشد').optional().nullable(),
  displayOrder: z.number().int().default(0),
  isActive: z.boolean().default(true),
});

export const updateServiceSchema = createServiceSchema.partial();

export const serviceQuerySchema = z.object({
  category: z.string().optional(),
  isActive: z.string().optional().transform((val) => (val !== undefined ? val === 'true' : undefined)),
});

export type CreateServiceInput = z.infer<typeof createServiceSchema>;
export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;
export type ServiceQueryInput = z.infer<typeof serviceQuerySchema>;
