# 📊 ماتریس انتخاب معماری و پوشه‌بندی (Architecture Decision Matrix)

این راهنما به شما کمک می‌کند بر اساس ابعاد پروژه، تعداد اعضای تیم و نیازمندی‌های سیستم، بهترین الگوی معماری را انتخاب کنید:

| نوع پروژه | ابعاد / تیم | الگوی معماری پیشنهادی | ساختار پیشنهادی |
| :--- | :--- | :--- | :--- |
| **داشبورد فرانت‌اند / اپ اداری (مانند حساب‌یار)** | متوسط تا بزرگ (۱ تا ۱۰ نفر) | **Feature-First Modular** | `src/features/*`, `src/components/ui/*`, `src/hooks/*`, `src/utils/*` |
| **سایت محتوایی / سئو محور / فروشگاهی** | هر اندازه | **Next.js App Router** | `src/app/(routes)/*`, `src/components/*`, `src/lib/*`, `src/server/*` |
| **سرویس بک‌اند سازمانی و مالی** | پیچیده و حیاتی | **Clean Architecture / DDD** | `src/core/entities/*`, `src/application/use-cases/*`, `src/infrastructure/*` |
| **میکروسرویس‌های چابک** | کوچک تا متوسط | **Modular NestJS / FastAPI** | `src/modules/*` یا `app/api/*`, `app/crud/*`, `app/models/*` |
| **پروژه جامع چندسکویی (وب + موبایل + ادمین + سرور)** | بزرگ (چند تیم) | **Turborepo Monorepo** | `apps/*` (web, admin, mobile, api), `packages/*` (ui, types, utils) |
| **اسکریپت، ابزار CLI یا پروژه‌های تک‌صفحه‌ای سبک** | بسیار کوچک | **Layered Flat** | `src/components/*`, `src/utils/*`, `src/main.jsx` |
