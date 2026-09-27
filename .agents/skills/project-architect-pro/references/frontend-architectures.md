# 🌐 معماری و پوشه‌بندی فرانت‌اند (Frontend Architectures)

این سند الگوهای استاندارد ساختاربندی و پوشه‌بندی برای انواع فریم‌ورک‌ها و پروژه‌های فرانت‌اند را تشریح می‌کند.

---

## ۱. معماری مدرن بر پایه ویژگی در React / Vite (Feature-First Architecture)

این الگو مقیاس‌پذیرترین و محبوب‌ترین روش ساختاربندی برای پروژه‌های React (مانند پروژه‌های مالی، اداری و داشبوردها) است.

```text
src/
├── app/                        # تنظیمات ریشه اپلیکیشن، Router، Providerها
│   ├── routes.jsx              # تعریف مسیرها
│   ├── App.jsx                 # کامپوننت اصلی و ارائه‌دهندگان Context/QueryClient
│   └── main.jsx                # نقطه ورود (Entry Point)
│
├── assets/                     # دارایی‌های استاتیک محلی
│   ├── images/                 # تصاویر، بنرها، لوگوها
│   ├── icons/                  # آیکون‌های SVG اختصاصی
│   └── fonts/                  # فونت‌های محلی (Vazirmatn, ...)
│
├── components/                 # کامپوننت‌های عمومی و اشتراکی (Shared / UI Kit)
│   ├── ui/                     # اتم‌های طراحی (Button, Input, Modal, Badge, Card)
│   ├── layout/                 # چیدمان‌های اصلی (Sidebar, Header, Navbar, Footer)
│   ├── feedback/               # لودرها، Toast، آلرت‌ها، EmptyState
│   └── data-display/           # جداول عمومی، نمودارهای پایه
│
├── features/                   # ماژول‌های مستقل بر اساس دامنه و ویژگی (Domains)
│   ├── auth/                   # احراز هویت و ورود
│   │   ├── api/                # توابع درخواست شبکه (loginApi, registerApi)
│   │   ├── components/         # کامپوننت‌های اختصاصی ورود (LoginForm, RegisterModal)
│   │   ├── hooks/              # هوک‌های مرتبط (useAuth, usePermissions)
│   │   ├── stores/             # مدیریت استیت این ویژگی (authStore.js)
│   │   ├── types/              # تعاریف تایپ‌ها
│   │   └── index.js            # دروازه خروجی ماژول (Public API)
│   │
│   ├── transactions/           # مدیریت تراکنش‌های مالی و اسناد
│   │   ├── api/                # درخواست‌های سرور
│   │   ├── components/         # فرم تراکنش، جدول ریزتراکنش‌ها
│   │   ├── hooks/              # هوک‌های پردازش مبالغ و فیلترها
│   │   └── index.js
│   │
│   └── reports/                # گزارش‌گیری و نمودارهای تحلیلی
│
├── hooks/                      # هوک‌های سراسری و جنریک (useDebounce, useMediaQuery, useTheme)
├── services/                   # کلاینت‌های شبکه و سرویس‌های بیرونی (apiClient.js, storage.js)
├── stores/                     # استورهای سراسری برنامه (themeStore, notificationStore)
├── utils/                      # توابع کمکی خالص (currencyFormatter, dateFormatter, validators)
├── constants/                  # مقادیر ثابت برنامه (endpoints, routes, config)
└── styles/                     # فایل‌های استایل سراسری (globals.css, tailwind.css)
```

### مزایای کلیدی:
- هر توسعه‌دهنده به راحتی می‌داند که تمام کدهای یک ویژگی (مثلاً `transactions`) در کجا قرار دارد.
- حذف یک ویژگی یا ویرایش آن به سایر بخش‌های اپلیکیشن آسیب نمی‌زند.

---

## ۲. ساختار استاندارد Next.js (App Router 14+)

```text
src/
├── app/                        # مسیردهی بر مبنای پوشه (File-system Routing)
│   ├── (auth)/                 # Route Group بدون تغییر در URL
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx          # چیدمان اشتراکی داشبورد
│   │   ├── page.tsx            # صفحه اصلی داشبورد
│   │   └── invoices/
│   │       ├── [id]/           # مسیر دینامیک
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── api/                    # Route Handlerها و اندپوینت‌های سروری
│   ├── favicon.ico
│   ├── layout.tsx              # Root Layout
│   └── global-error.tsx        # مدیریت خطاهای سراسری
│
├── components/                 # کامپوننت‌های عمومی
├── lib/                        # ابزارها، پایگاه‌داده، کلاینت‌ها (db.ts, auth.ts, utils.ts)
├── server/                     # Server Actions و لایه دسترسی به داده (DAL)
└── types/                      # تعاریف تایپ‌های TypeScript
```
