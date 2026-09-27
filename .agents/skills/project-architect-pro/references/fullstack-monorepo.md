# 📦 معماری مونو‌ریپو و فول‌استک (Fullstack & Monorepo Architectures)

این سند نحوه سازماندهی پروژه‌های یکپارچه چندبرنامه‌ای (Monorepo) و ساختارهای فول‌استک مدرن را شرح می‌دهد.

---

## ۱. ساختار مونو‌ریپو مدرن با pnpm Workspaces و Turborepo

این ساختار برای تیم‌هایی که همزمان فرانت‌اند (وب + ادمین)، بک‌اند و پکیج‌های اشتراکی دارند ایده‌آل است.

```text
my-monorepo/
├── .github/                    # پایپ‌لاین‌های CI/CD
├── apps/                       # اپلیکیشن‌های مستقل و قابل اجرا
│   ├── web/                    # وب‌اپلیکیشن اصلی (Next.js / Vite React)
│   ├── admin-panel/            # پنل مدیریت حسابداری
│   ├── mobile/                 # اپلیکیشن موبایل (React Native / Expo)
│   └── api/                    # سرور بک‌اند (NestJS / FastAPI / Express)
│
├── packages/                   # پکیج‌ها و کتابخانه‌های اشتراکی داخلی
│   ├── ui/                     # دیزاین سیستم و کامپوننت‌های مشترک UI
│   │   ├── src/
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Card.tsx
│   │   └── package.json
│   │
│   ├── types/                  # تایپ‌ها و اینترفیس‌های مشترک بین فرانت و بک
│   │   ├── src/
│   │   │   ├── user.ts
│   │   │   └── invoice.ts
│   │   └── package.json
│   │
│   ├── utils/                  # توابع اشتراکی (فرمت پول، محاسبات مالی، تاریخ جلالی)
│   ├── eslint-config/          # کانفیگ مشترک لینتر
│   └── tailwind-config/        # پالت و تم اشتراکی Tailwind CSS
│
├── pnpm-workspace.yaml         # تعریف مسیرهای پکیج‌ها در pnpm
├── turbo.json                  # تنظیمات خط لوله و کش‌سازی Turborepo
└── package.json                # اسکریپت‌های ریشه (dev, build, lint)
```

---

## ۲. ساختار فول‌استک جمع‌وجور (Single-Repo Fullstack)

برای پروژه‌های چابک و تکی:

```text
project-root/
├── client/                     # کل کدهای فرانت‌اند (React, Tailwind, Vite)
├── server/                     # کل کدهای بک‌اند (Node.js Express / Python FastAPI)
├── shared/                     # تایپ‌ها و ثابت‌های اشتراکی
└── docker-compose.yml          # اجرای همزمان فرانت، بک و دیتابیس با داکر
```
