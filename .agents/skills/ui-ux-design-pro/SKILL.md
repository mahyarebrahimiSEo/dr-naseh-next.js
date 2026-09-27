---
name: ui-ux-design-pro
description: >-
  Comprehensive UI/UX design, visual hierarchy, frontend architecture, and interface engineering skill.
  Use this skill whenever designing, building, improving, refactoring, or reviewing user interfaces,
  web applications, Tailwind CSS styling, responsive dashboards, data tables, modals, micro-animations,
  Persian/RTL interfaces, forms, and financial accounting UX.
---

# 🎨 مهارت حرفه‌ای طراحی رابط و تجربه کاربری (UI/UX Design Pro)

این مهارت (Skill) راهنمای جامع و استاندارد برای طراحی، پیاده‌سازی و ارزیابی رابط کاربری (UI) و تجربه کاربری (UX) در بالاترین سطح کیفی است. با فعال‌سازی این مهارت، کلیه خروجی‌های کد و طراحی فرانت‌اند با استانداردهای مدرن بصری، دسترس‌پذیری (A11y)، ارگونومی کاربری، چیدمان واکنش‌گرا و هماهنگی کامل با رابط‌های فارسی و انگلیسی (به‌ویژه داشبوردهای مالی و اداری در React و Tailwind CSS) تولید می‌شوند.

---

## 🧭 ۶ اصل بنیادین در طراحی و پیاده‌سازی (Core Principles)

هنگام طراحی یا ویرایش هر بخش از رابط کاربری، رعایت این ۶ اصل الزامی است:

1. **سلسله‌مراتب بصری قدرتمند (Visual Hierarchy)**:
   - چشم کاربر باید در کسری از ثانیه مهم‌ترین المان (Primary Action، اعداد کلیدی مالی، وضعیت تراکنش) را تشخیص دهد.
   - ایجاد تمایز هوشمندانه با ترکیب اندازه فونت (`text-xs` تا `text-3xl`)، وزن قلم (`font-bold`, `font-semibold`, `font-medium`, `font-normal`) و کنتراست رنگی (`text-slate-900` در برابر `text-slate-500`).

2. **سیستم فاصله‌گذاری و گرید منظم (8pt Grid System)**:
   - فواصل (`padding`, `margin`, `gap`) همیشه مضاربی منظم از ۴ یا ۸ پیکسل باشند (`p-2`, `p-4`, `p-6`, `gap-3`, `gap-6`).
   - تنفس کافی به محتوا (Whitespace) برای جلوگیری از شلوغی و خستگی ذهنی کاربر.

3. **سیستم رنگی معنایی و کنتراست استاندارد (Semantic Colors)**:
   - **Primary / Brand**: رنگ شاخص و هویت نرم‌افزار (`indigo-600` / `blue-600` / `emerald-600`).
   - **Success (مثبت / واریز / سود)**: سبز زنده (`emerald-600` / `emerald-500` / `emerald-50`).
   - **Danger / Error (منفی / برداشت / بدهی / خطا)**: قرمز/رز (`rose-600` / `rose-500` / `rose-50`).
   - **Warning (هشدار / سررسید چک / معلق)**: زرد و کهربایی (`amber-500` / `amber-50`).
   - **Info (راهنما / اطلاعات)**: آبی ملایم (`sky-500` / `sky-50`).
   - **Surfaces & Neutrals**: تفکیک عمق با لایه‌بندی رنگ‌های خنثی (`bg-slate-50`, `bg-white`, `border-slate-200/80`, `dark:bg-slate-900`, `dark:bg-slate-800`).

4. **تخصص کامل در رابط کاربری فارسی و راست‌چین (RTL First & Persian Typography)**:
   - جهت‌بندی صحیح (`dir="rtl"`), استفاده از فونت‌های استاندارد فارسی (`Vazirmatn`, `IRANSansX`, `Dana`).
   - معکوس‌سازی مناسب آیکون‌های برداری جهت‌دار (مثل فلش‌های برگشت، گام‌ها و ناوبری).
   - فرمت‌بندی استاندارد مبالغ پولی با جداکننده سه‌رقمی هزارگان (`1,250,000 تومان`) و اعداد فارسی.

5. **طراحی واکنش‌گرا و سازگار با لمس (Mobile-First & Touch Ergonomics)**:
   - چیدمان سیال و منعطف در موبایل، تبلت و دسکتاپ (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).
   - دکمه‌ها و اهداف لمسی با حداقل ارتفاع و عرض استاندارد (`min-h-[44px]`, `min-w-[44px]`).

6. **میکرو-انیمیشن و پوشش کلیه حالت‌های کامپوننت (States & Micro-interactions)**:
   - تغییر حالت‌های نرم با `transition-all duration-200 ease-out`.
   - پوشش کامل حالت‌های: **Default**, **Hover**, **Active/Pressed**, **Focus-Visible**, **Disabled**, **Loading (Skeleton)**, **Empty**, **Error**.

---

## 📚 اسناد مرجع تخصصی (Reference Guides)

برای مشاهده جزئیات فنی، راهنماها و الگوها به اسناد زیر مراجعه کنید:

- 🎨 **[سیستم طراحی و توکن‌های بصری (Design System)](references/design-system.md)**: پالت‌های رنگی، گرادیانت‌ها، سایه‌ها، گردی گوشه‌ها، تایپوگرافی و تِم تاریک/روشن.
- 🇮🇷 **[استانداردهای رابط کاربری فارسی و مالی (RTL & Financial UX)](references/rtl-persian-ux.md)**: چیدمان راست‌به‌چپ، فونت‌های فارسی، فرمت‌بندی اعداد و مبالغ، الگوهای حسابداری و مالی.
- 🧩 **[الگوهای کامپوننت‌های پیشرفته (Component Patterns)](references/component-patterns.md)**: جداول داده (Data Tables)، فرم‌ها و اعتبارسنجی ارگونومیک، کارت‌های آماری، مودال‌ها، فیلترها و ویجت‌های تحلیلی.
- ✨ **[میکرو-انیمیشن‌ها و تعاملات Tailwind (Micro-Interactions)](references/micro-interactions.md)**: ترنزیشن‌های نرم، افکت‌های هاور، انیمیشن‌های ورود، فوکوس‌های دسترس‌پذیر.
- ♿ **[دسترس‌پذیری و استاندارد WCAG 2.1 (Accessibility & A11y)](references/accessibility.md)**: کنتراست رنگ‌ها، ناوبری کیبورد، برچسب‌های ARIA و خوانایی برای همه کاربران.

---

## 💻 نمونه کدهای آماده و ابزارها (Examples & Resources)

- 📦 **[کامپوننت‌های آماده React + Tailwind](examples/financial-components.jsx)**: پیاده‌سازی عملی کارت‌های شاخص (KPI)، جدول داده‌های مالی با فیلتر، مودال مدرن، فرم سریع ثبت تراکنش، نشان‌های وضعیت (Badges) و حالت خالی (Empty State).
- ✅ **[چک‌لیست ۲۵ موردی ارزیابی UI/UX](resources/ui-ux-checklist.md)**: ارزیابی سریع کیفیت قبل از تحویل کار به کاربر.
- ⚙️ **[اسکریپت اعتبارسنجی فرانت‌اند](scripts/validate-design.js)**: بررسی خودکار فایل‌های پروژه برای رعایت اصول پایه UX/UI.

---

## 🚀 دستورالعمل تولید خروجی (Output Generation Standard)

هنگامی که کاربر درخواستی برای ایجاد یا بهبود رابط کاربری، کامپوننت یا صفحه مطرح می‌کند:
1. **طراحی زیبا و تمیز**: از کلاس‌های استاندارد Tailwind و ساختار مدرن با پس‌زمینه‌های لایه‌بندی شده و سایه‌های لطیف استفاده کن.
2. **پشتیبانی کامل فارسی/RTL**: متون فارسی روان، واحدهای پولی دقیق (تومان/ریال)، و فرمت‌بندی استاندارد اعداد.
3. **پوشش حالت‌های خطا و لودینگ**: کامپوننت نباید در حالت لودینگ یا داده خالی خراب شود.
4. **کد ماژولار و بهینه‌سازی‌شده**: کد تمیز در React با تفکیک کامپوننت‌ها و قابلیت استفاده مجدد (Reusability).
