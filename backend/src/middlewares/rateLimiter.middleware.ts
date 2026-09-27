import rateLimit from 'express-rate-limit';
import { env } from '../config';

// Global API Rate Limiter
export const apiRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      message: 'تعداد درخواست‌های ارسالی بیش از حد مجاز است. لطفاً دقایقی دیگر تلاش نمایید.',
      statusCode: 429,
    },
  },
});

// Strict Rate Limiter for Authentication & Sensitive Public Forms (Booking / Newsletter)
export const strictRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // max 15 requests per 15 min per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      message: 'تعداد دفعات ارسال فرم یا ورود بیش از حد مجاز است. لطفاً ۱۵ دقیقه دیگر مجدداً اقدام فرمایید.',
      statusCode: 429,
    },
  },
});
