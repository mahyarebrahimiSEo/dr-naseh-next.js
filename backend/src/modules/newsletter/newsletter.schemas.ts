import { z } from 'zod';
import { normalizeDigits, normalizeIranianPhone } from '../../utils/phone';

export const subscribeSchema = z.object({
  fullName: z.string().min(2, 'نام و نام خانوادگی الزامی است'),
  contact: z
    .string()
    .min(5, 'ایمیل یا شماره همراه معتبر وارد نمایید')
    .refine(
      (val) => {
        const cleaned = normalizeDigits(val).trim();
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned);
        const isPhone = normalizeIranianPhone(cleaned) !== null;
        return isEmail || isPhone;
      },
      {
        message: 'لطفاً یک ایمیل یا شماره موبایل معتبر ایرانی وارد فرمایید',
      }
    ),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
