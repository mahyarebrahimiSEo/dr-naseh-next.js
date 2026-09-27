import { z } from 'zod';

export const createGalleryItemSchema = z.object({
  title: z.string().min(2, 'عنوان تصویر الزامی است'),
  description: z.string().optional().nullable(),
  category: z.string().default('clinic'), // clinic, equipment, procedures
  imageUrl: z.string().url('آدرس تصویر معتبر نمی‌باشد'),
  displayOrder: z.number().int().default(0),
});

export const updateGalleryItemSchema = createGalleryItemSchema.partial();

export type CreateGalleryItemInput = z.infer<typeof createGalleryItemSchema>;
export type UpdateGalleryItemInput = z.infer<typeof updateGalleryItemSchema>;
