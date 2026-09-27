import { z } from 'zod';
import { normalizeIranianPhone } from '../../utils/phone';

export const createAppointmentSchema = z.object({
  fullName: z.string().min(3, 'نام و نام خانوادگی بیمار باید حداقل ۳ کاراکتر باشد'),
  phoneNumber: z
    .string()
    .min(10, 'شماره تلفن همراه معتبر نمی‌باشد')
    .refine((val) => normalizeIranianPhone(val) !== null, {
      message: 'فرمت شماره موبایل نامعتبر است (مثال: 09123456789)',
    }),
  consultationTopic: z.string().min(2, 'انتخاب زمینه درمانی یا علت مراجعه الزامی است'),
  shift: z.enum(['morning', 'afternoon', 'first_available']).default('afternoon'),
  patientMessage: z.string().optional(),
});

export const updateAppointmentStatusSchema = z.object({
  status: z.enum(['PENDING', 'CONTACTED', 'CONFIRMED', 'COMPLETED', 'CANCELLED']),
  appointmentDate: z.string().datetime().optional().nullable(),
  internalNotes: z.string().optional().nullable(),
});

export const appointmentQuerySchema = z.object({
  page: z.string().optional().transform((val) => (val ? Math.max(1, parseInt(val, 10)) : 1)),
  limit: z.string().optional().transform((val) => (val ? Math.min(100, Math.max(1, parseInt(val, 10))) : 10)),
  status: z.enum(['PENDING', 'CONTACTED', 'CONFIRMED', 'COMPLETED', 'CANCELLED']).optional(),
  search: z.string().optional(),
});

export type CreateAppointmentInput = z.infer<typeof createAppointmentSchema>;
export type UpdateAppointmentStatusInput = z.infer<typeof updateAppointmentStatusSchema>;
export type AppointmentQueryInput = z.infer<typeof appointmentQuerySchema>;
