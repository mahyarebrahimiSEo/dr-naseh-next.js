---
name: project-architect-pro
description: >-
  Expert software architect, codebase structuring, and system security hardening skill.
  Use this skill whenever designing, scaffolding, organizing, refactoring, or auditing project folder structures,
  software architectures (Clean Architecture, Feature-First, Hexagonal, Modular Monolith, Monorepo),
  system security hardening (OWASP Top 10, secrets management, secure HTTP headers, authentication, input sanitization, rate limiting),
  and directory layouts for any tech stack (React, Next.js, Vue, Node.js, Express, NestJS, FastAPI, Django, Go, Python, Full-Stack).
---

# 🏗️ مهارت جامع معماری، ساختاربندی و امنیت سیستم (Project Architect & Security Pro)

این مهارت (Skill) به عنوان یک **معمار ارشد نرم‌افزار و مهندس ارشد امنیت سیستم (Lead Architect & AppSec Engineer)** عمل می‌کند. وظیفه اصلی این مهارت، طراحی ساختارهای پوشه‌بندی استاندارد، تفکیک وظایف (Separation of Concerns)، ماژولارسازی، پاک‌سازی کدهای شلوغ و **مقاوم‌سازی امنیتی چندلایه‌ای (Security Hardening)** برای انواع استک‌های نرم‌افزاری (فرانت‌اند، بک‌اند، فول‌استک و میکروسرویس‌ها) است.

---

## 🧭 ۱. اصول بنیادین ساختاربندی و معماری (Core Architecture Principles)

1. **تفکیک وظایف و لایه‌بندی ماژولار (Separation of Concerns - SoC)**:
   - تفکیک مطلق لایه واسط کاربر (UI/Presentation)، لایه منطق بیزینس (Domain / Business Logic) و لایه دسترسی به داده/زیرساخت (Data / Infrastructure).
2. **رویکرد ویژگی‌محور (Feature-First Colocation)**:
   - در پروژه‌های مدرن، کامپوننت‌ها، هوک‌ها، APIها، تایپ‌ها و تست‌های مرتبط با یک ویژگی در یک پوشه قرار می‌گیرند (`src/features/auth/`, `src/features/invoices/`).
3. **شکستن فایل‌های غول‌پیکر (No God Files)**:
   - فایل‌های بیش از ۵۰۰ خط یا کامپوننت‌هایی با وظایف چندگانه باید به ساب‌کامپوننت‌ها و توابع ابزاری تفکیک شوند.
4. **نام‌گذاری استاندارد و یکپارچه (Consistent Naming Conventions)**:
   - رعایت قوانین بین‌المللی: `kebab-case` برای پوشه‌ها و فایل‌های ابزاری، `PascalCase` برای کامپوننت‌های React و کلاس‌ها، `camelCase` برای توابع و متغیرها.
5. **مسیرهای کوتاه و ماژولار (Path Aliases)**:
   - پیکربندی `@/*` برای جلوگیری از ایمپورت‌های کثیف و شکننده (`../../../../components`).

---

## 🛡️ ۲. اصول بنیادین ارتقای امنیت سیستم (Security Hardening Principles)

1. **مدیریت محرمانه بودن اطلاعات (Zero Hardcoded Secrets)**:
   - عدم قرار دادن هیچ‌گونه کلید API، رمز دیتابیس یا توکن JWT در کد. استفاده از `.env` و الزام وجود `.gitignore` و `.env.example`.
2. **دفاع در برابر حملات تزریق (Injection & XSS Defense)**:
   - اعتبارسنجی کلیه ورودی‌ها با شمای سخت‌گیرانه (Zod, Joi, Pydantic).
   - اجرای کوئری‌های دیتابیس منحصراً به صورت پارامتریک یا از طریق ORM.
   - پاک‌سازی کدهای HTML ورودی در فرانت‌اند با `DOMPurify`.
3. **امنیت هدرهای HTTP و مرورگر (Secure Headers & CSP)**:
   - فعال‌سازی هدرهای دفاعی با `Helmet`، اعمال Content-Security-Policy (CSP)، فعال‌سازی HSTS و محافظت در برابر Clickjacking (`X-Frame-Options: DENY`).
4. **احراز هویت و توکن‌های محافظت‌شده (Secure Auth & JWT)**:
   - ذخیره توکن‌ها در کوکی‌های `HttpOnly; Secure; SameSite` به جای `localStorage`.
   - رمزنگاری کلمات عبور با الگوریتم‌های قوی (`bcrypt` دور ۱۲+ یا `Argon2id`).
5. **محدودسازی نرخ درخواست و سیاست سخت‌گیرانه CORS (Rate Limiting & CORS)**:
   - مهار حملات Brute-force و DoS روی اندپوینت‌های حساس با Rate Limiter.
   - محدود کردن دامنه‌های مجاز در CORS به دامنه‌های رسمی Production.
6. **مدیریت امن خطاها و لاگ‌ها (Safe Error Handling)**:
   - عدم افشای Stack Trace، ساختار دیتابیس و مسیرهای سرور به کاربران نهایی.

---

## 📚 اسناد مرجع تخصصی (Reference Guides)

- 🛡️ **[راهنمای جامع تقویت امنیت سیستم (Security Hardening)](references/security-hardening.md)**: استانداردهای OWASP Top 10، هدرهای امنیتی، دفاع در برابر تزریق، پاک‌سازی ورودی‌ها و امنیت JWT.
- 🌐 **[معماری و پوشه‌بندی فرانت‌اند (Frontend Architectures)](references/frontend-architectures.md)**: استانداردهای React (Feature-First)، Next.js 14+ App Router، Vite، مدیریت State و کش.
- ⚙️ **[معماری و پوشه‌بندی بک‌اند (Backend Architectures)](references/backend-architectures.md)**: معماری تمیز (Clean Architecture)، معماری شش‌ضلعی (Hexagonal)، ساختار NestJS، Express، FastAPI، Django و Go.
- 📦 **[معماری مونو‌ریپو و فول‌استک (Fullstack Monorepo)](references/fullstack-monorepo.md)**: ساختار پروژه‌های ترکیبی (Turborepo, pnpm workspaces, Nx)، پکیج‌های اشتراکی UI و ابزارها.
- 🏷️ **[استانداردهای نام‌گذاری و قواعد اکسپورت (Naming & Conventions)](references/naming-and-conventions.md)**: شیوه‌نامه نام‌گذاری فایل‌ها، پوشه‌ها و پیشگیری از مشکلات Barrel Files.
- 🔄 **[دستورالعمل بازآرایی پروژه‌های نامنظم (Refactoring Playbook)](references/refactoring-playbook.md)**: راهنمای گام‌به‌گام تبدیل یک ساختار فلت و شلوغ به یک معماری مدرن و تمیز.

---

## 🛠️ اسکریپت‌ها و ابزارهای ممیزی و ساخت (Scripts & Resources)

- 🛡️ **[اسکریپت ممیزی امنیتی و معماری کدبیس (Security & Architecture Audit)](scripts/security-audit.js)**: اسکن خودکار پروژه برای کشف نشت اسرار، کدهای ناامن، فایل‌های شلوغ و آسیب‌پذیری‌ها با دستور:
  `node .agents/skills/project-architect-pro/scripts/security-audit.js`
- 🚀 **[اسکریپت ساختاردهی خودکار پروژه (Project Scaffolder)](scripts/scaffold-project.js)**: ساخت آنی پوشه‌ها و فایل‌های امنیتی استاندارد با دستور:
  `node .agents/skills/project-architect-pro/scripts/scaffold-project.js <template-name>`
- 🔍 **[اسکریپت ممیزی ساختار پوشه‌ها (Structure Analyzer)](scripts/analyze-structure.js)**: بررسی وضعیت تودرتویی و فایل‌های استاندارد با دستور:
  `node .agents/skills/project-architect-pro/scripts/analyze-structure.js`
- 🔐 **[شیت تقلب تنظیمات امنیتی (Security Cheatsheet)](resources/security-hardening-cheatsheet.md)**: قطعه‌کدهای آماده امنیتی برای Express, Next.js, FastAPI و React.
- ✅ **[چک‌لیست ۳۵ موردی ارزیابی امنیت و معماری](resources/security-audit-checklist.md)**: ممیزی نهایی پروژه پیش از عرضه نهایی.

---

## 🚀 دستورالعمل اقدام هنگام فراخوانی دستیار (Execution Workflow)

هنگامی که کاربر درخواستی برای ساخت نرم‌افزار جدید، پوشه‌بندی یا بازآرایی و ایمن‌سازی سیستم دارد:
1. **تشخیص استک و نیازمندی‌ها**: شناخت معماری بهینه متناسب با مقیاس پروژه (React، Next.js، Express، NestJS، FastAPI، و...).
2. **ترسیم دیاگرام درختی پوشه‌ها**: ارائه درخت ساختار منظم همراه با توضیح وظایف هر پوشه.
3. **تولید و تفکیک فایل‌ها با اصول ماژولار**: جلوگیری از کدهای فلت و تفکیک منطق به سرویس‌ها، هوک‌ها، کامپوننت‌ها و کنترلرها.
4. **تزریق تنظیمات امنیتی استاندارد**: ایجاد خودکار `.env.example`، هدرهای امنیتی، ولیدیتورهای Zod/Pydantic و تنظیمات بهینه CORS/Rate Limiting.
