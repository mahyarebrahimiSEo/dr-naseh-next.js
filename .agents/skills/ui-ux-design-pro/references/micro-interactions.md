# ✨ میکرو-انیمیشن‌ها و تعاملات پویا (Micro-Interactions & Transitions)

میکرو-انیمیشن‌ها و بازخوردهای حرکتی، رابط کاربری را زنده، پاسخگو و لذت‌بخش می‌کنند.

---

## ۱. بازخورد لمسی و فشرده شدن دکمه‌ها (Tactile Button Feedback)

هر دکمه یا کارت قابل کلیک باید حس فیزیکی کلیک شدن را به کاربر منتقل کند:

```html
<!-- دکمه اولیه با بازخورد فیزیکی -->
<button class="bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-medium px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
  ذخیره و ثبت سند
</button>
```

- `active:scale-[0.98]`: کوچک شدن نامحسوس دکمه هنگام فشرده شدن
- `transition-all duration-150 ease-out`: نرم شدن تمام تغییرات رنگ، سایه و اندازه

---

## ۲. افکت شناوری کارت‌ها (Card Hover Elevation)

کارت‌های مهم یا قابل کلیک هنگام حرکت ماوس، اندکی به سمت بالا حرکت کرده و سایه عمیق‌تری می‌گیرند:

```html
<div class="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer">
  <!-- محتوای کارت -->
</div>
```

---

## ۳. نشانگر وضعیت زنده (Live Pulse Status Indicator)

برای نمایش آنلاین بودن سامانه، وضعیت همگام‌سازی یا تراکنش‌های در حال پردازش:

```html
<span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</span>
```

---

## ۴. سطوح شیشه‌ای و مات (Glassmorphism & Frosted Glass)

برای نوارهای ناوبری بالا (Header)، هدرهای ثابت جدول‌ها و مودال‌ها:

```html
<header class="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60">
  <!-- محتوای هدر -->
</header>
```

---

## ۵. راهنماهای شناور (Tooltips)

برای آیکون‌های بدون متن یا ارقام فشرده، اضافه کردن تولتیپ با انیمیشن ملایم:

```html
<div class="relative group inline-block">
  <button class="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
    <!-- آیکون اطلاعات -->
  </button>
  <div class="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-slate-800 text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg z-50 pointer-events-none transition-opacity duration-200">
    توضیح کوتاه و راهنما
  </div>
</div>
```
