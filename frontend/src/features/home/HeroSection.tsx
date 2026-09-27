"use client";
import React from 'react';

export function HeroSection() {
  return (
    <>
    <section className="relative w-full bg-surface-subtle overflow-hidden pb-16 lg:pb-24">
{/*  Ambient Backdrop Light Circles  */}
<div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
<div className="absolute -bottom-10 left-10 w-80 h-80 bg-surface-variant/40 rounded-full blur-2xl pointer-events-none -z-0"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 lg:pt-14 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
{/*  Hero Copy (RTL Right-aligned)  */}
<div className="lg:col-span-6 flex flex-col items-start gap-6">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary">
<span className="w-2 h-2 rounded-full bg-accent-highlight animate-pulse"></span>
<span className="font-label-md text-label-md font-semibold">کلینیک تخصصی طب فیزیکی و توانبخشی</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary-container leading-tight">
            تلفیق دانش آکادمیک با تکنولوژی نوین پزشکی
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
            ما در این مرکز بر روش‌های غیرتهاجمی و بازسازی‌کننده تمرکز داریم تا بدون نیاز به جراحی‌های سنگین، کیفیت زندگی، دامنه حرکتی و آرامش بدون درد را به شما بازگردانیم.
          </p>
{/*  Interactive Action Buttons  */}
<div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
<a className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-0.5 animate-cta-pulse" href="tel:02166020308">
<span className="material-symbols-outlined text-[20px]">calendar_today</span>
<span className="">رزرو آنلاین نوبت</span>
</a>
<a className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-surface-pure text-primary-container font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-all" href="#services-section">
<span className="">مشاهده خدمات و مقالات</span>
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</a>
</div>
{/*  Trust Badges Pill Row  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 w-full">
<div className="flex items-center gap-3 p-3 rounded-xl bg-surface-pure shadow-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0 animate-soft-float">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container">۱۵+ سال سابقه بالینی</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">عضو هیئت علمی دانشگاه</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-surface-pure shadow-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-status-success shrink-0 animate-soft-float">
<span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container">تزریق با هدایت سونوگرافی</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">دقت میلی‌متری درمان</span>
</div>
</div>
</div>
</div>
{/*  Hero Carousel Display  */}
<div className="lg:col-span-6 flex flex-col h-full w-full justify-center">
<div className="relative w-full h-full min-h-[460px] lg:min-h-[500px] rounded-3xl overflow-hidden bg-primary-container shadow-xl">
{/*  Slide 1  */}
<div className="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none" id="hero-slide-0">
<img alt="ویزیت و مشاوره دقیق پزشکی" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbtKRH_ChWQzH5OfZw_NGzf9TgmRcoycxUe2NXoJD2Z1jEtEB2eFR2CJFeok9_XU8MyEJ89CKq0Zz2Fmv1C3oAND3rUkftTvXbpZx8B4z1PPU27T1hED6pHEhCSeYpH6ZCKdCxN9_UaAL4a28GkICJ90qkqkhC2B_lQFMalMu7wdrMiFPkZDkGrBPpm-Dz_3tE6mKeeo1_r8aDglAnLq7quHXbtsZpf3KdjoBanvc0_07jg9XX5ap0jXuW7WkGl3lpUIo"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-accent-highlight/20 text-accent-highlight w-max mb-1">گام اول درمان</span>
<h3 className="font-headline-sm text-headline-sm text-surface-pure">معاینه جامع و ارزیابی تشخیصی بدون شتاب‌زدگی</h3>
<p className="font-body-sm text-body-sm text-surface-container-high hidden sm:block mt-1">بررسی دقیق ام‌آر‌آی، سابقه بیماری و تدوین استراتژی درمان محافظه‌کارانه</p>
</div>
</div>
{/*  Slide 2  */}
<div className="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none" id="hero-slide-1">
<img alt="تزریق سونوگرافیک پی آر پی" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLOE_5Gi1jbY2DN00Ig7MCeLNvyIPCMtRHgRDdLTLZjUC8K8iFrJDYvfty-CaYO5pDWreSgnadm6gm07Dn6z7NhuHybegAPfIxurOmdwMMqCM8dSmr_f42-b8EVkJkri7uW4H16gGrryiVamcT8-VLryJP32vfowQnXKwqyYeJPr0-z7rdMLhcbr1dsU2Vr05grB0vTBsinyxPe2G-OdKv4rEBqwYjpc90rtliwgOOq1uMUZk86_2S_hmMsz_ZR33x70U"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-container/30 text-secondary-container w-max mb-1">طب بازساختی پیشرفته</span>
<h3 className="font-headline-sm text-headline-sm text-surface-pure">تزریقات تخصصی PRP و پرولوتراپی</h3>
<p className="font-body-sm text-body-sm text-surface-container-high hidden sm:block mt-1">تحت هدایت سونوگرافی عضلانی اسکلتی جهت ترمیم غضروف و بافت‌های مفصلی</p>
</div>
</div>
{/*  Slide 3  */}
<div className="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100" id="hero-slide-2">
<img alt="توانبخشی و ریکاوری فیزیکی" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUbrCjNQd4bOQ4QTfUNbNLNvysyN0IJSfJBCPWOdG0Y7afYYMIMyE39MHcTRYyApeHplruZGHtf6FhwyN26qbwDd9Nufyv_IhW5Xo7-bNWU1KbHWG0l6Ren2_xGrY63zwsRzJdtUIjC1gtTeW0i6YIkU-hXv4ZMmzd5cZQ-aEwEaBNa-NVmfP68kEdsXVR5jWGCQnIxnU_SAp1bp_-LTOZQNdUTOtv5zi_JeaXzYY8csYlv0nb-jQsMbA9tPWovTuTvxE"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-accent-highlight/20 text-accent-highlight w-max mb-1">پایداری نتایج درمان</span>
<h3 className="font-headline-sm text-headline-sm text-surface-pure">برنامه‌های اختصاصی توانبخشی و ورزش درمانی</h3>
<p className="font-body-sm text-body-sm text-surface-container-high hidden sm:block mt-1">تقویت عضلات تثبیت‌کننده ستون فقرات و بهبود عملکرد حرکتی مراجعین</p>
</div>
</div>
{/*  Carousel Controls  */}
<div className="absolute top-4 left-4 z-20 flex items-center gap-2">
<button aria-label="اسلاید قبلی" className="w-9 h-9 rounded-full bg-surface-pure/80 backdrop-blur-md text-primary-container flex items-center justify-center hover:bg-surface-pure transition-colors" id="slider-prev-btn">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
<button aria-label="اسلاید بعدی" className="w-9 h-9 rounded-full bg-surface-pure/80 backdrop-blur-md text-primary-container flex items-center justify-center hover:bg-surface-pure transition-colors" id="slider-next-btn">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
</div>
</div>
{/*  Carousel Quick Tabs / Indicators  */}
</div>
</div>
</div>
</section>
{/*  Post-Hero Doctor Bio (Split Screen)  */}

    </>
  );
}
