import { z } from 'zod';

export const createFaqSchema = z.object({
  question: z.string().min(5, 'متن پرسش الزامی است'),
  answer: z.string().min(10, 'متن پاسخ الزامی است'),
  category: z.string().default('general'), // general, treatments, booking
  displayOrder: z.number().int().default(0),
});

export const updateFaqSchema = createFaqSchema.partial();

export type CreateFaqInput = z.infer<typeof createFaqSchema>;
export type UpdateFaqInput = z.infer<typeof updateFaqSchema>;
