// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {

  // Vanilla Slider Micro-interaction
  
    // React-safe Slider Logic
    const slides = document.querySelectorAll('.hero-slide');
    const tabs = document.querySelectorAll('.hero-tab');
    const totalSlides = slides.length;
    let currentSlide = 2; // Initialize to 2 because in HTML hero-slide-2 is opacity-100
    let autoSlideInterval;

    function goToSlide(index) {
      if (!slides.length) return;
      currentSlide = (index + totalSlides) % totalSlides;

      slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
          slide.classList.remove('opacity-0','pointer-events-none');
          slide.classList.add('opacity-100');
        } else {
          slide.classList.remove('opacity-100');
          slide.classList.add('opacity-0','pointer-events-none');
        }
      });

      tabs.forEach((tab, idx) => {
        const bar = tab.querySelector('.tab-indicator-bar');
        if (idx === currentSlide) {
          tab.classList.remove('bg-surface-container-low');
          tab.classList.add('bg-surface-pure','shadow-sm');
          if (bar) bar.classList.replace('bg-transparent', 'bg-secondary');
        } else {
          tab.classList.remove('bg-surface-pure', 'shadow-sm');
          tab.classList.add('bg-surface-container-low');
          if (bar) bar.classList.replace('bg-secondary', 'bg-transparent');
        }
      });
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5500);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    function handleTabClick(e) {
      const targetIdx = parseInt(e.currentTarget.getAttribute('data-slide-index') || '0', 10);
      goToSlide(targetIdx);
      startAutoSlide();
    }

    function handlePrevClick() {
      goToSlide(currentSlide - 1);
      startAutoSlide();
    }

    function handleNextClick() {
      goToSlide(currentSlide + 1);
      startAutoSlide();
    }

    tabs.forEach(tab => tab.addEventListener('click', handleTabClick));
    
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');
    
    if (prevBtn) prevBtn.addEventListener('click', handlePrevClick);
    if (nextBtn) nextBtn.addEventListener('click', handleNextClick);

    // Make sure slide 2 is actually active on mount
    goToSlide(2);
    startAutoSlide();

    return () => {
      stopAutoSlide();
      tabs.forEach(tab => tab.removeEventListener('click', handleTabClick));
      if (prevBtn) prevBtn.removeEventListener('click', handlePrevClick);
      if (nextBtn) nextBtn.removeEventListener('click', handleNextClick);
    };



}, []);
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col w-full">
{/*  Interactive Hero Slider Section  */}
<section className="relative w-full bg-surface-subtle overflow-hidden pb-16 lg:pb-24">
{/*  Ambient Backdrop Light Circles  */}
<div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
<div className="absolute -bottom-10 left-10 w-80 h-80 bg-surface-variant/40 rounded-full blur-2xl pointer-events-none -z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 lg:pt-14 relative z-10">
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
<Link className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-0.5 animate-cta-pulse" href="tel:02166020308">
<span className="material-symbols-outlined text-[20px]">calendar_today</span>
<span className="">رزرو آنلاین نوبت</span>
</Link>
<Link className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-surface-pure text-primary-container font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-all" href="#services-section">
<span className="">مشاهده خدمات و مقالات</span>
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</Link>
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
<section className="w-full bg-surface-pure py-16 lg:py-24 relative" data-aos="fade-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
{/*  Doctor Portrait Frame  */}
<div className="lg:col-span-5 relative">
{/*  Backing glow frame  */}
<div className="absolute inset-3 bg-secondary-container/40 rounded-3xl transform -rotate-2 -z-0"></div>
<div className="relative z-10 rounded-3xl overflow-hidden shadow-xl bg-surface-container aspect-[3/4] max-w-md mx-auto img-zoom">
<img alt="دکتر ناصح یوسفی متخصص طب فیزیکی و توانبخشی" className="w-full h-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6zjfIw1w4RbLskRhZq018qOnPRp9GE1mM5f9-Sr7kf0enScJ-oDQajXgQxWlHoH2u3pM8q7ACDDUD9tQMDv3nHqZjnb2iU-L0uVzIXD3h86JVcr6etMTHOaZVvMWZ3Uz7ziSbvMAXFndYKJV4jL_MrCyfibU7fdvE9t1W3m8Vi9urGqUT9aAc16xxS1We9J3aYqPE6J7Qba0Oo5I9Yo4OJPzNccSFQ5vW6mDhHvMGIIAB0lA0Os4OWMadFUWvdRGUX2g"/>
{/*  Float Floating Status Badge  */}
<div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-surface-pure/90 backdrop-blur-md shadow-lg flex items-center justify-between animate-soft-float">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">کد نظام پزشکی:</span>
<span className="font-title-md text-title-md text-primary-container font-bold" dir="ltr">IR-MC 132488</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-success/10 text-status-success font-label-md text-label-md font-medium">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="">پروانه مطب معتبر</span>
</div>
</div>
</div>
</div>
{/*  Bio Details and Focus Areas  */}
<div className="lg:col-span-7 flex flex-col items-start gap-6">
<div className="flex flex-col gap-2">
<div className="inline-flex items-center gap-1.5 text-secondary font-label-lg text-label-lg font-semibold">
<span className="material-symbols-outlined text-[18px]">person_check</span>
<span className="">آشنایی با پزشک معالج</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-primary-container font-bold">دکتر ناصح یوسفی</h2>
<p className="font-headline-sm text-headline-sm text-secondary font-medium">
              متخصص طب فیزیکی، توانبخشی و الکترودیاگنوز / عضو هیئت علمی دانشگاه علوم پزشکی ایران
            </p>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
            دکتر ناصح یوسفی با سال‌ها تجربه بالینی و دانشگاهی، تمرکز خود را بر پیاده‌سازی متدهای نوین و کم‌تهاجمی درمان قرار داده‌اند. در کلینیک ایشان، هدف اصلی پرهیز از اعمال جراحی پرریسک و تسکین پایدار علائم بیمار به کمک تلفیق «طب بازساختی»، «تزریقات هدفمند سونوگرافیک»، «نوار عصب و عضله دقیق» و «پروتکل‌های سفارشی توانبخشی» است.
          </p>
<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-subtle">
<div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container">مداخلات مفصلی و ستون فقرات</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">درمان دیسک، آرتروز زانو، شانه منجمد</span>
</div>
</div>
<div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-subtle">
<div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container">طب بازساختی و پی‌آرپی</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">استفاده از کیت‌های استاندارد سلولی</span>
</div>
</div>
<div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-subtle">
<div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container">معاینات صبورانه و بدون عجله</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">اختصاص زمان کافی به تفکیک هر پرونده</span>
</div>
</div>
<div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-subtle">
<div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container">نوار عصب و عضله (EMG)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">تشخیص موضع آسیب‌های عصبی دست و پا</span>
</div>
</div>
</div>
<div className="flex items-center gap-6 pt-2">
<Link className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-secondary text-on-secondary hover:bg-secondary/90 transition-all font-label-lg text-label-lg font-bold shadow-md w-fit" href="tel:02166020308">
<span className="">درخواست مشاوره تلفنی</span>
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/*  Academic Achievements & Memberships Grid  */}
<section className="w-full bg-surface py-16 lg:py-20 relative" data-aos="fade-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="flex flex-col gap-2 max-w-2xl">
<span className="font-label-lg text-label-lg text-secondary font-semibold">پیشینه علمی و تخصصی</span>
<h2 className="font-headline-xl text-headline-xl text-primary-container font-bold">افتخارات، صلاحیت‌ها و عضویت‌های بین‌المللی</h2>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-[20px]">school</span>
<span className="">تضمین استانداردهای روز درمانی</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Card 1  */}
<div className="p-6 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all card-hover-lift interactive-shimmer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors animate-soft-float">
<span className="material-symbols-outlined text-[24px]">workspace_premium</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-status-warning font-semibold">افتخار ملی</span>
<h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">رتبه ۳ بورد تخصصی کشوری</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              کسب رتبه سوم آزمون دانشنامه بورد تخصصی طب فیزیکی و توانبخشی ایران در سال ۱۳۹۷.
            </p>
</div>
</div>
{/*  Card 2  */}
<div className="p-6 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all card-hover-lift interactive-shimmer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors animate-soft-float">
<span className="material-symbols-outlined text-[24px]">menu_book</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary font-semibold">دانشگاه علوم پزشکی ایران</span>
<h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">عضو هیئت علمی دانشگاه</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              مشارکت فعال در آموزش و تربیت نسل آینده پزشکان و ارتقای متون علمی ارتوپدی فیزیکی.
            </p>
</div>
</div>
{/*  Card 3  */}
<div className="p-6 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all card-hover-lift interactive-shimmer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
<span className="material-symbols-outlined text-[24px]">public</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary font-semibold">جامعه جهانی ISPRM</span>
<h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">عضو انجمن جهانی توانبخشی</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              تطبیق مداوم پروتکل‌های کلینیک با استانداردهای فدراسیون‌های مرجع طب فیزیکی دنیا.
            </p>
</div>
</div>
{/*  Card 4  */}
<div className="p-6 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-4 group hover:shadow-md transition-all card-hover-lift interactive-shimmer">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
<span className="material-symbols-outlined text-[24px]">groups</span>
</div>
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-secondary font-semibold">سازمان‌های علمی ایران</span>
<h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">انجمن طب فیزیکی کشور</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              حضور مستمر در کنگره‌ها، سمپوزیوم‌های بازساختی و پانل‌های فوق‌تخصصی ستون فقرات.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  Featured Services Preview  */}
<section className="w-full bg-surface-pure py-16 lg:py-24" id="services-section" data-aos="fade-up"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12"><div className="flex flex-col md:flex-row md:items-end justify-between gap-6"><div className="flex flex-col gap-3 max-w-2xl"><div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary w-max"><span className="w-2 h-2 rounded-full bg-accent-highlight animate-pulse"></span><span className="font-label-md text-label-md font-semibold">روش‌های نوین ارتوپدی بازساختی و طب فیزیکی</span></div><h2 className="font-headline-xl text-headline-xl text-primary-container font-bold">خدمات تخصصی کلینیک</h2><p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">ارائه جامع‌ترین پروتکل‌های غیرجراحی و ترمیم بافت بر پایه گایدلاین‌های بالینی روز جهان و تجهیزات تشخیصی اولتراسوند در مطب دکتر ناصح یوسفی.</p></div><Link className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-sm self-start md:self-auto" href="tel:02166020308"><span className="material-symbols-outlined text-[18px]">call</span><span className="">دریافت نوبت معاینه</span></Link></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div className="border border-slate-200 shadow-sm bg-white rounded-2xl p-7 transition-all duration-300 relative group overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4E8EA2]/15 hover:border-[#4E8EA2]"><div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4E8EA2] via-[#7af6ee] to-[#4E8EA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="flex items-center justify-between gap-3 mb-5"><div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-sm group-hover:bg-[#4E8EA2] group-hover:text-white group-hover:scale-110 duration-300"><span className="material-symbols-outlined text-[26px]">bloodtype</span></div><span className="font-label-sm text-label-sm px-3.5 py-1 rounded-full bg-secondary/10 text-secondary font-semibold">پلاسمای تغلیظ‌شده</span></div><div className="flex flex-col gap-1 mb-3"><h3 className="font-headline-sm text-headline-sm text-primary-container font-bold group-hover:text-[#4E8EA2] transition-colors">پی آر پی (PRP)</h3><span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider font-medium" dir="ltr">Platelet-Rich Plasma</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify flex-1 mb-6">تزریق پلاسمای غنی از پلاکت با کیت‌های استاندارد بسته جهت بازسازی غضروف زانو، آرتروز و ترمیم تاندون‌های آسیب‌دیده.</p><Link className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-secondary font-label-md text-label-md font-semibold hover:text-primary transition-colors" href="tel:02166020308"><span className="">مشاهده جزئیات</span><span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1.5 transition-transform">arrow_back</span></Link></div><div className="border border-slate-200 shadow-sm bg-white rounded-2xl p-7 transition-all duration-300 relative group overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4E8EA2]/15 hover:border-[#4E8EA2]"><div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4E8EA2] via-[#7af6ee] to-[#4E8EA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="flex items-center justify-between gap-3 mb-5"><div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-sm group-hover:bg-[#4E8EA2] group-hover:text-white group-hover:scale-110 duration-300"><span className="material-symbols-outlined text-[26px]">air</span></div><span className="font-label-sm text-label-sm px-3.5 py-1 rounded-full bg-secondary/10 text-secondary font-semibold">ضدالتهاب بیولوژیک</span></div><div className="flex flex-col gap-1 mb-3"><h3 className="font-headline-sm text-headline-sm text-primary-container font-bold group-hover:text-[#4E8EA2] transition-colors">اوزون تراپی (Ozone Therapy)</h3><span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider font-medium" dir="ltr">Medical Ozone Therapy</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify flex-1 mb-6">تسکین سریع التهاب مفاصل و آزادسازی ریشه‌های عصبی درگیری دیسک با تزریق گاز اکسیژن-اوزون مدیکال.</p><Link className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-secondary font-label-md text-label-md font-semibold hover:text-primary transition-colors" href="tel:02166020308"><span className="">مشاهده جزئیات</span><span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1.5 transition-transform">arrow_back</span></Link></div><div className="border border-slate-200 shadow-sm bg-white rounded-2xl p-7 transition-all duration-300 relative group overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4E8EA2]/15 hover:border-[#4E8EA2]"><div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4E8EA2] via-[#7af6ee] to-[#4E8EA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="flex items-center justify-between gap-3 mb-5"><div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-sm group-hover:bg-[#4E8EA2] group-hover:text-white group-hover:scale-110 duration-300"><span className="material-symbols-outlined text-[26px]">biotech</span></div><span className="font-label-sm text-label-sm px-3.5 py-1 rounded-full bg-secondary/10 text-secondary font-semibold">طب بازساختی پیشرفته</span></div><div className="flex flex-col gap-1 mb-3"><h3 className="font-headline-sm text-headline-sm text-primary-container font-bold group-hover:text-[#4E8EA2] transition-colors">تزریق سلول بنیادی</h3><span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider font-medium" dir="ltr">Regenerative Stem Cell</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify flex-1 mb-6">پیشرفته‌ترین متد ارتوپدی بازساختی جهت ترمیم آسیب‌های ساختاری مفاصل و به تأخیر انداختن جراحی تعویض مفصل.</p><Link className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-secondary font-label-md text-label-md font-semibold hover:text-primary transition-colors" href="tel:02166020308"><span className="">مشاهده جزئیات</span><span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1.5 transition-transform">arrow_back</span></Link></div></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full"><div className="border border-slate-200 shadow-sm bg-white rounded-2xl p-7 transition-all duration-300 relative group overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4E8EA2]/15 hover:border-[#4E8EA2]"><div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4E8EA2] via-[#7af6ee] to-[#4E8EA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="flex items-center justify-between gap-3 mb-5"><div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-sm group-hover:bg-[#4E8EA2] group-hover:text-white group-hover:scale-110 duration-300"><span className="material-symbols-outlined text-[26px]">medication</span></div><span className="font-label-sm text-label-sm px-3.5 py-1 rounded-full bg-secondary/10 text-secondary font-semibold">سرم اتولوگ مهندسی‌شده</span></div><div className="flex flex-col gap-1 mb-3"><h3 className="font-headline-sm text-headline-sm text-primary-container font-bold group-hover:text-[#4E8EA2] transition-colors">ارتوکین تراپی (Orthokine)</h3><span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider font-medium" dir="ltr">Autologous Conditioned Serum</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify flex-1 mb-6">تولید و تزریق سروم آنتاگونیست گیرنده اینترلوکین-۱ برای مهار ریشه‌ای فاکتورهای تخریب‌کننده غضروف و تسکین درد پایدار.</p><Link className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-secondary font-label-md text-label-md font-semibold hover:text-primary transition-colors" href="tel:02166020308"><span className="">مشاهده جزئیات</span><span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1.5 transition-transform">arrow_back</span></Link></div><div className="border border-slate-200 shadow-sm bg-white rounded-2xl p-7 transition-all duration-300 relative group overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4E8EA2]/15 hover:border-[#4E8EA2]"><div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4E8EA2] via-[#7af6ee] to-[#4E8EA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><div className="flex items-center justify-between gap-3 mb-5"><div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-sm group-hover:bg-[#4E8EA2] group-hover:text-white group-hover:scale-110 duration-300"><span className="material-symbols-outlined text-[26px]">electric_bolt</span></div><span className="font-label-sm text-label-sm px-3.5 py-1 rounded-full bg-secondary/10 text-secondary font-semibold">تشخیص دقیق هدایت عصبی</span></div><div className="flex flex-col gap-1 mb-3"><h3 className="font-headline-sm text-headline-sm text-primary-container font-bold group-hover:text-[#4E8EA2] transition-colors">نوار عصب و عضله (EMG / NCS)</h3><span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider font-medium" dir="ltr">Electromyography &amp; NCS</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify flex-1 mb-6">بررسی دقیق الکترودیاگنوستیک دیسکوپاتی‌های گردن و کمر، درگیری عصب سیاتیک، سندرم تونل کارپال و آسیب‌های تاندونی.</p><Link className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-secondary font-label-md text-label-md font-semibold hover:text-primary transition-colors" href="tel:02166020308"><span className="">مشاهده جزئیات</span><span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1.5 transition-transform">arrow_back</span></Link></div></div></div></section>
{/*  Clinical Process Blueprint (Step by step reassurance)  */}
<section className="w-full bg-surface-container-low py-16" data-aos="fade-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
<div className="rounded-3xl bg-surface-pure p-8 lg:p-12 shadow-sm flex flex-col gap-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div>
<span className="font-label-lg text-label-lg text-secondary font-semibold">مراحل درمان در مطب دکتر ناصح یوسفی</span>
<h3 className="font-headline-lg text-headline-lg text-primary-container font-bold">مسیری شفاف از تشخیص تا بهبودی پایدار</h3>
</div>
<div className="flex items-center gap-2 text-status-success font-label-md text-label-md bg-status-success/10 px-3.5 py-1.5 rounded-full">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span className="">بیش از ۹۳٪ رضایت‌مندی بالینی</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
<div className="flex flex-col gap-2 p-4 rounded-xl bg-surface-subtle">
<span className="font-display-lg text-display-lg text-secondary/30 font-bold leading-none">۰۱</span>
<h4 className="font-headline-sm text-headline-sm text-primary-container font-bold">رزرو و تریاژ اولیه</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">ثبت نوبت تلفنی یا آنلاین و دریافت شرح حال مختصر جهت برنامه‌ریزی زمان کافی.</p>
</div>
<div className="flex flex-col gap-2 p-4 rounded-xl bg-surface-subtle">
<span className="font-display-lg text-display-lg text-secondary/30 font-bold leading-none">۰۲</span>
<h4 className="font-headline-sm text-headline-sm text-primary-container font-bold">معاینه جامع بالینی</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">ارزیابی ساختار حرکتی، تست‌های اختصاصی و در صورت لزوم نوار عصب یا سونوگرافی مطب.</p>
</div>
<div className="flex flex-col gap-2 p-4 rounded-xl bg-surface-subtle">
<span className="font-display-lg text-display-lg text-secondary/30 font-bold leading-none">۰۳</span>
<h4 className="font-headline-sm text-headline-sm text-primary-container font-bold">مداخله درمانی هدفمند</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">انجام درمان‌های بازساختی (PRP، پرولوتراپی) و توصیه‌های ارگونومی محیط کار و زندگی.</p>
</div>
<div className="flex flex-col gap-2 p-4 rounded-xl bg-surface-subtle">
<span className="font-display-lg text-display-lg text-secondary/30 font-bold leading-none">۰۴</span>
<h4 className="font-headline-sm text-headline-sm text-primary-container font-bold">پیگیری و تثبیت</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">پایش روند ترمیم بافت، تمرینات اصلاحی در منزل و جلوگیری از عود مجدد عارضه.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Patient Testimonials & Trust Score  */}
<section className="w-full bg-surface-pure py-16 lg:py-20" data-aos="fade-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
<div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
<h2 className="font-headline-xl text-headline-xl text-primary-container font-bold">تجربه مراجعین و بیماران</h2>
<p className="font-body-md text-body-md text-on-surface-variant">نظرات واقعی مراجعینی که روند بهبود و درمان بدون جراحی را در این کلینیک تجربه کرده‌اند</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Review 1  */}
<div className="p-6 rounded-2xl bg-surface-subtle shadow-sm flex flex-col justify-between gap-6"><div className="flex items-center gap-1 text-status-warning mb-1"><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span></div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            «برای دیسک گردن دو جراح به من پیشنهاد عمل باز داده بودند. به توصیه یکی از دوستان خدمت دکتر یوسفی رسیدم. با تشخیص دقیق و دو جلسه تزریق تخصصی و ورزش‌های اصلاحی، الان بیش از یک سال است که هیچ دردی در دست‌هایم حس نمی‌کنم.»
          </p>
<div className="flex items-center gap-3 pt-4 bg-surface-pure/40 p-2 rounded-xl">
<div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold">
              م.ر
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container font-semibold">محسن رضایی</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">درمان غیرجراحی دیسک گردن</span>
</div>
</div>
</div>
{/*  Review 2  */}
<div className="p-6 rounded-2xl bg-surface-subtle shadow-sm flex flex-col justify-between gap-6"><div className="flex items-center gap-1 text-status-warning mb-1"><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span></div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            «آرتروز شدید زانو مادرم را به سختی انداخته بود. پی‌آرپی انجام شده توسط دکتر با سونوگرافی انجام شد و واقعاً تفاوت کیفیت کارشان با مراکز دیگر چشمگیر بود. مادرم توانست دوباره پیاده‌روی روزانه‌اش را شروع کند.»
          </p>
<div className="flex items-center gap-3 pt-4 bg-surface-pure/40 p-2 rounded-xl">
<div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold">
              ف.س
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container font-semibold">فاطمه سهرابی</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">سلول‌درمانی و PRP زانو</span>
</div>
</div>
</div>
{/*  Review 3  */}
<div className="p-6 rounded-2xl bg-surface-subtle shadow-sm flex flex-col justify-between gap-6"><div className="flex items-center gap-1 text-status-warning mb-1"><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span><span className="material-symbols-outlined text-[18px]" style={{}}>star</span></div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            «نوار عصب دست من با دقت فوق‌العاده بالایی انجام شد. مهم‌تر از همه، دکتر با حوصله تمام یافته‌ها را برایم شرح دادند و برنامه درمانی مشخص کردند. برخورد کادر مطب نیز بسیار محترمانه و منظم است.»
          </p>
<div className="flex items-center gap-3 pt-4 bg-surface-pure/40 p-2 rounded-xl">
<div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold">
              ع.م
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container font-semibold">علیرضا میرزایی</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">سندرم تونل کارپال (نوار عصب و عضله)</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  High-Impact Reassurance & Call to Action Banner  */}
<section className="w-full bg-surface-subtle pb-16 lg:pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
<div className="rounded-3xl bg-primary-container text-surface-pure p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">{/*  Glow accents  */}
<div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent-highlight/15 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-6 relative z-10 w-full">
{/*  Header & Description  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-surface-pure/10">
<div className="flex flex-col gap-2 text-center lg:text-right">
<div className="inline-flex items-center gap-2 text-accent-highlight font-label-md text-label-md w-max mx-auto lg:mx-0">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
<span className="">مشاوره و تعیین وقت قبلی</span>
</div>
<h3 className="font-headline-xl text-headline-xl text-surface-pure font-bold whitespace-nowrap">آماده بازگشت به زندگی بدون درد هستید؟</h3>
<p className="font-body-md text-body-md text-surface-container-high leading-relaxed max-w-2xl">
        شماره تماس خود را وارد کنید تا کارشناسان کلینیک در اولین فرصت جهت هماهنگی و مشاوره رایگان با شما تماس بگیرند.
      </p>
</div>
<div className="flex items-center justify-center lg:justify-end gap-3 shrink-0">
<Link className="inline-flex items-center gap-2.5 h-12 px-6 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary/90 transition-all" href="tel:02166020308">
<span className="material-symbols-outlined text-[20px]">call</span>
<span className="tracking-wider" dir="ltr">۰۲۱-۶۶۰۲۰۳۰۸</span>
</Link>
<Link className="inline-flex items-center gap-1.5 h-12 px-5 rounded-xl bg-surface-pure/10 hover:bg-surface-pure/20 text-surface-pure font-label-lg text-label-lg transition-colors backdrop-blur-md" href="#services-section">
<span className="">آدرس و ساعات مطب</span>
<span className="material-symbols-outlined text-[18px]">location_on</span>
</Link>
</div>
</div>
{/*  Inline Quick Booking / Consultation Form  */}
<form className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 pt-2" onSubmit={(e) => e.preventDefault()}>
<div className="lg:col-span-4 relative">
<span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-container-highest/70 text-[20px]">person</span>
<input className="w-full h-12 pr-11 pl-4 rounded-xl bg-surface-pure/10 border border-surface-pure/15 text-surface-pure placeholder:text-surface-container-highest/60 focus:outline-none focus:border-accent-highlight focus:ring-1 focus:ring-accent-highlight transition-all font-body-sm text-body-sm" placeholder="نام و نام خانوادگی" type="text"/>
</div>
<div className="lg:col-span-4 relative">
<span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-container-highest/70 text-[20px]">phone_iphone</span>
<input className="w-full h-12 pr-11 pl-4 rounded-xl bg-surface-pure/10 border border-surface-pure/15 text-surface-pure placeholder:text-surface-container-highest/60 focus:outline-none focus:border-accent-highlight focus:ring-1 focus:ring-accent-highlight transition-all font-body-sm text-body-sm" dir="rtl" placeholder="شماره موبایل (مثال: ۰۹۱۲۳۴۵۶۷۸۹)" type="tel"/>
</div>
<div className="sm:col-span-2 lg:col-span-4">
<button className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-highlight text-primary font-headline-sm text-[16px] font-bold shadow-lg hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer" type="submit">
<span className="material-symbols-outlined text-[20px]">send</span>
<span className="">ثبت درخواست مشاوره سریع</span>
</button>
</div>
</form>
<div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-1 text-surface-container-highest/70 font-label-sm text-label-sm">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-accent-highlight text-[16px]">lock</span>اطلاعات شما کاملاً محرمانه نزد کلینیک محفوظ است</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-accent-highlight text-[16px]">schedule</span>تماس حداکثر ظرف ۲ ساعت کاری</span>
</div>
</div></div>
</div>
</section>
</div>

    </div>
  );
}
