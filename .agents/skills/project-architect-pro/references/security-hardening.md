# 🛡️ راهنمای جامع تقویت امنیت سیستم و کدبیس (Security Hardening Guide)

این سند مرجع تخصصی برای مقاوم‌سازی و ایمن‌سازی انواع نرم‌افزارها، سیستم‌های وب، فرانت‌اند و بک‌اند در برابر آسیب‌پذیری‌های امنیتی (از جمله استانداردهای OWASP Top 10 و استانداردهای بانکی و مالی) است.

---

## ۱. مدیریت متغیرهای محیطی و کلیدهای محرمانه (Secrets Management)

- **اصل صفر-کلید در کد (Zero Hardcoded Secrets)**:
  - هرگز کلیدهای API، رمزهای دیتابیس، Private Keyها، و JWT Secretها را در کدهای پروژه یا کامیت‌های گیت قرار ندهید.
  - همیشه از فایل `.env` برای ذخیره اسرار و از فایل `.env.example` برای معرفی نام متغیرها بدون مقادیر واقعی استفاده کنید.
- **اطمینان از وجود در `.gitignore`**:
  ```gitignore
  .env
  .env.local
  .env.production
  *.pem
  *.key
  id_rsa
  ```

---

## ۲. هدرهای امنیتی HTTP و محافظت مرورگر (Secure HTTP Headers)

در تمام برنامه‌های وب و سرورها باید هدرهای امنیتی زیر فعال شوند (با پکیج‌هایی مانند `helmet` در Node.js یا Middlewareهای مشابه):

```javascript
// نمونه پیکربندی امنیتی هدرها (Express / Fastify / Next.js)
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://api.yourdomain.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
  crossOriginEmbedderPolicy: false,
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true }, // اجبار HTTPS به مدت یک سال
  noSniff: true, // جلوگیری از MIME Sniffing
  frameguard: { action: 'deny' }, // جلوگیری از Clickjacking
  xssFilter: true, // محافظت پایه XSS
}));
```

---

## ۳. اعتبارسنجی و پاک‌سازی ورودی‌ها (Input Validation & Sanitization)

- **اعتبارسنجی با شمای سخت‌گیرانه (Strict Schema Validation)**:
  - استفاده از کتابخانه‌هایی مانند `Zod` یا `Joi` در جاوااسکریپت/تایپ‌اسکریپت و `Pydantic` در پایتون برای تمام داده‌های ورودی کاربر (Body, Query, Params).
- **جلوگیری از تزریق کد (SQL Injection / NoSQL Injection)**:
  - هرگز از الحاق مستقیم رشته‌ها (String Concatenation) در کوئری‌های دیتابیس استفاده نکنید. همیشه از ORM/Query Builder (مانند Prisma, Drizzle, TypeORM, SQLAlchemy) یا Parameterized Queries استفاده شود.
- **جلوگیری از XSS در فرانت‌اند**:
  - از استفاده از `dangerouslySetInnerHTML` در React یا `v-html` در Vue بدون پاک‌سازی با کتابخانه `DOMPurify` اکیداً خودداری کنید.

---

## ۴. احراز هویت و مدیریت توکن‌ها (Authentication & Token Security)

1. **ذخیره‌سازی امن JWT**:
   - توکن‌های احراز هویت را در `localStorage` ذخیره نکنید (خطر سرقت از طریق حملات XSS).
   - توکن‌ها را در کوکی‌های امن با فلگ‌های `httpOnly: true`, `secure: true`, `sameSite: 'strict'` یا `'lax'` ذخیره کنید.
2. **چرخش و انقضای کوتاه توکن (Token Rotation & Short Expiry)**:
   - توکن دسترسی (Access Token) باید کوتاه‌مدت (مثلاً ۱۵ دقیقه) و توکن تازه‌سازی (Refresh Token) محافظت‌شده با قابلیت ابطال (Revocation) باشد.
3. **هش کردن امن کلمات عبور**:
   - استفاده از الگوریتم‌های قوی با نمک‌گذاری تصادفی مانند `bcrypt` (با حداقل Round 12) یا `Argon2id`.

---

## ۵. محدودسازی نرخ درخواست‌ها و مهار حملات (Rate Limiting & DDoS/Brute-force)

- تمام اندپوینت‌های عمومی، به‌ویژه لاگین، ثبت‌نام، بازیابی رمز و ارسال OTP باید به Rate Limiter مجهز باشند:
```javascript
import rateLimit from 'express-rate-limit';

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ۱۵ دقیقه
  max: 5, // حداکثر ۵ تلاش ناموفق
  message: { error: 'تعداد تلاش‌های ناموفق بیش از حد مجاز است. لطفاً ۱۵ دقیقه دیگر تلاش کنید.' },
  standardHeaders: true,
  legacyHeaders: false,
});
```

---

## ۶. تنظیمات امنیتی CORS

- در محیط Production، هرگز از `origin: '*'` همراه با اعتبارسنجی (Credentials) استفاده نکنید:
```javascript
import cors from 'cors';

const allowedOrigins = [
  'https://yourdomain.com',
  'https://admin.yourdomain.com'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS Policy: دسترسی از این دامنه غیرمجاز است.'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));
```

---

## ۷. پاسخ‌های ایمن خطا و عدم افشای اطلاعات سیستم (Safe Error Handling)

- هرگز جزئیات خطای سرور، Stack Trace، مسیرهای سیستمی و کوئری‌های خطادار دیتابیس را به کلاینت بازنگردانید:
```javascript
// Global Error Handler
app.use((err, req, res, next) => {
  const isDev = process.env.NODE_ENV === 'development';
  // لاگ امن در سرور
  console.error(`[Error] ${err.name}: ${err.message}`);
  
  res.status(err.statusCode || 500).json({
    success: false,
    message: isDev ? err.message : 'خطای داخلی در سرور رخ داده است. لطفاً بعداً تلاش کنید.',
    ...(isDev && { stack: err.stack }),
  });
});
```
