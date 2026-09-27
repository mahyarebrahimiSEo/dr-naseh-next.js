import { z } from 'zod';

export const createTestimonialSchema = z.object({
  patientName: z.string().min(2, 'نام بیمار الزامی است'),
  treatment: z.string().min(2, 'نوع درمان الزامی است'),
  comment: z.string().min(10, 'متن نظر الزامی است'),
  rating: z.number().int().min(1).max(5).default(5),
  isApproved: z.boolean().default(true),
  displayOrder: z.number().int().default(0),
});

export const updateTestimonialSchema = createTestimonialSchema.partial();

export type CreateTestimonialInput = z.infer<typeof createTestimonialSchema>;
export type UpdateTestimonialInput = z.infer<typeof updateTestimonialSchema>;
