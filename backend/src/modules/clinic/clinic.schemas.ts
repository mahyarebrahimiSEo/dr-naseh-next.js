import { z } from 'zod';

export const updateClinicSettingSchema = z.object({
  key: z.string().min(1, 'کلید تنظیمات الزامی است'),
  value: z.string().min(1, 'مقدار تنظیمات الزامی است'),
  description: z.string().optional().nullable(),
});

export type UpdateClinicSettingInput = z.infer<typeof updateClinicSettingSchema>;
