# 🎨 سیستم طراحی و توکن‌های بصری (Design System & Visual Tokens)

این سند مرجع جامع توکن‌های طراحی، رنگ‌بندی، سایه‌ها، فواصل و تایپوگرافی را برای تولید رابط‌های کاربری چشم‌نواز، مدرن و هماهنگ مشخص می‌کند.

---

## ۱. پالت رنگی معنایی (Semantic Color Palette)

تمامی رنگ‌ها بر اساس کاربرد معنایی (Semantic Role) دسته‌بندی می‌شوند تا کاربر احساس شفافیت و امنیت ذهنی داشته باشد.

| نقش رنگ | نام توکن | Tailwind (حالت روشن) | Tailwind (حالت تاریک) | کاربرد |
| :--- | :--- | :--- | :--- | :--- |
| **برند / اصلی** | `primary` | `indigo-600` / `indigo-700` | `indigo-500` / `indigo-400` | دکمه‌های اصلی، تب فعال، حلقه‌های فوکوس |
| **موفقیت / واریز** | `success` | `emerald-600` / `bg-emerald-50` | `emerald-400` / `dark:bg-emerald-950/40` | واریز، درآمد، سود، وضعیت پرداخت‌شده |
| **خطر / بدهی** | `danger` | `rose-600` / `bg-rose-50` | `rose-400` / `dark:bg-rose-950/40` | برداشت، بدهکاری، ضرر، دکمه‌های حذف |
| **هشدار / معلق** | `warning` | `amber-600` / `bg-amber-50` | `amber-400` / `dark:bg-amber-950/40` | چک‌های در آستانه سررسید، فاکتور معلق |
| **اطلاعات / راهنما**| `info` | `sky-600` / `bg-sky-50` | `sky-400` / `dark:bg-sky-950/40` | نکات آموزشی، آمار جانبی، بنر اطلاع‌رسانی |

### سطوح خنثی و لایه‌بندی پس‌زمینه (Surface Layering)

برای ایجاد حس عمق و ساختار مدرن به جای صفحات تخت و یکنواخت، از ۳ لایه سطوح خنثی استفاده می‌شود:

- **سطح پایه (Canvas - Level 0)**:
  - حالت روشن: `bg-slate-50` یا `bg-zinc-50`
  - حالت تاریک: `dark:bg-slate-950` یا `dark:bg-zinc-950`
- **سطح کارت‌ها و پنل‌ها (Cards - Level 1)**:
  - حالت روشن: `bg-white border border-slate-200/80 shadow-xs`
  - حالت تاریک: `dark:bg-slate-900 dark:border-slate-800/80`
- **سطح عناصر شناور و مودال‌ها (Elevated / Overlays - Level 2)**:
  - حالت روشن: `bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl`
  - حالت تاریک: `dark:bg-slate-900/95 dark:border-slate-700/80`

---

## ۲. سیستم سایه‌ها و ارتفاع (Elevation & Shadows)

سایه‌های نرم و طبیعی حس مدرن بودن نرم‌افزار را چند برابر می‌کنند:

- **سایه بسیار ملایم برای کارت‌ها**:
  `shadow-xs` یا `shadow-sm border border-slate-200/80`
- **سایه هاور (Hover Elevation)**:
  `hover:shadow-md hover:border-slate-300 transition-all duration-200`
- **سایه المان‌های شناور، منوهای کشویی (Dropdowns)**:
  `shadow-lg shadow-slate-900/5 ring-1 ring-black/5`
- **سایه مودال‌ها و پنجره‌های اصلی**:
  `shadow-2xl shadow-slate-900/20`

---

## ۳. گوشه‌ها و انحناها (Border Radius System)

- **دکمه‌ها، ورودی‌ها (Inputs) و فرم‌ها**: `rounded-xl` (12px) - تعادل کامل بین ارگونومی و تمیزی.
- **کارت‌ها، پنل‌ها و بخش‌های اصلی**: `rounded-2xl` (16px) - مدرن و نرم.
- **مودال‌ها و دیالوگ‌ها**: `rounded-2xl` یا `rounded-3xl` (20-24px).
- **بج‌ها (Badges)، تگ‌ها و چیپ‌ها**: `rounded-full` یا `rounded-lg` (8px).

---

## ۴. سیستم فاصله‌گذاری و گرید (8pt Spacing Grid)

تمام فواصل باید بر مبنای مضارب ۴ یا ۸ باشند:

- `gap-1.5` / `p-1.5` (6px): فاصله‌های فشرده داخل بج‌ها و آیکون‌ها
- `gap-2` / `p-2` (8px): فاصله بین آیکون و متن
- `gap-3` / `p-3` (12px): فاصله داخلی فیلدهای ورودی و دکمه‌ها
- `gap-4` / `p-4` (16px): پدینگ داخلی کارت‌های کوچک و فاصله‌گذاری گرید
- `gap-6` / `p-6` (24px): پدینگ کارت‌های اصلی داشبورد و فواصل بین سکشن‌ها
- `gap-8` / `p-8` (32px): فواصل بین بلوک‌های اصلی صفحه

---

## ۵. مقیاس تایپوگرافی (Typography Scale)

| نام نقش | کلاس اندازه | وزن فونت | فاصله خطوط (Leading) | کاربرد |
| :--- | :--- | :--- | :--- | :--- |
| **Display Heading** | `text-2xl` تا `text-3xl` | `font-bold` | `leading-tight` | اعداد شاخص اصلی، سرفصل داشبورد |
| **Section Title** | `text-lg` تا `text-xl` | `font-bold` | `leading-snug` | عنوان کارت‌ها و جدول‌ها |
| **Card / Field Label**| `text-sm` | `font-semibold` / `font-medium` | `leading-normal` | برچسب فیلدها، سرستون‌های جدول |
| **Body Text** | `text-sm` / `text-base` | `font-normal` | `leading-relaxed` | متون توضیحی، داده‌های جدول |
| **Caption / Meta** | `text-xs` | `font-medium` | `leading-normal` | تاریخ‌ها، واحدهای پولی، زیرنویس‌ها |
