import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('ایمیل وارد شده معتبر نمی‌باشد'),
  password: z.string().min(6, 'کلمه عبور باید حداقل ۶ کاراکتر باشد'),
});

export const registerSchema = z.object({
  email: z.string().email('ایمیل وارد شده معتبر نمی‌باشد'),
  fullName: z.string().min(3, 'نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد'),
  password: z.string().min(6, 'کلمه عبور باید حداقل ۶ کاراکتر باشد'),
  role: z.enum(['ADMIN', 'SECRETARY', 'STAFF']).default('SECRETARY'),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'کلمه عبور فعلی الزامی است'),
  newPassword: z.string().min(6, 'کلمه عبور جدید باید حداقل ۶ کاراکتر باشد'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
