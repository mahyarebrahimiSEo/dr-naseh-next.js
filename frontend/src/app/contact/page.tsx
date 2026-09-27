// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const contactFaqs = [
  {
    q: "آیا برای ویزیت باید مدارک پزشکی قبلی را به همراه داشته باشیم؟",
    a: "بله، همراه داشتن عکس‌های رادیولوژی، MRI اخیر، نوار عصب قدیمی یا آزمایش‌های مرتبط، روند تشخیص و ارائه پروتکل درمان را سرعت می‌بخشد.",
  },
  {
    q: "آیا انجام نوار عصب و عضله در همان روز امکان‌پذیر است؟",
    a: "در صورت هماهنگی تلفنی پیش از ویزیت و داشتن آمادگی‌های لازم (تمیز بودن موضع و عدم استفاده از کرم)، امکان انجام هم‌زمان تست الکترودیاگنوزیس فراهم است.",
  },
];

const contactMethods = [
  { id: "call", label: "تماس تلفنی", iconType: "material", icon: "call" },
  { id: "sms", label: "پیامک", iconType: "material", icon: "sms" },
  { id: "whatsapp", label: "واتساپ", iconType: "whatsapp" },
  { id: "telegram", label: "تلگرام", iconType: "telegram" },
  { id: "rubika", label: "روبیکا", iconType: "rubika" },
  { id: "bale", label: "بله", iconType: "bale" },
];

function renderContactIcon(method: { id: string; iconType: string; icon?: string }) {
  if (method.iconType === "material") {
    return <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">{method.icon}</span>;
  }
  if (method.iconType === "whatsapp") {
    return (
      <svg className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24c-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.21 8.21 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24zm-2.94 3.41c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.21 0 1.31.96 2.57 1.09 2.74.13.17 1.86 3 4.61 4.07 2.29.89 2.75.71 3.24.67.49-.04 1.57-.64 1.79-1.27.22-.62.22-1.16.15-1.27-.07-.11-.24-.17-.5-.3-.26-.13-1.54-.76-1.78-.85-.24-.08-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.37-.49-2.67-1.65-1.02-.91-1.71-2.03-1.91-2.37-.2-.34-.02-.53.11-.66.12-.12.27-.32.4-.47.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.07-.12-.58-1.37-.79-1.88-.21-.5-.42-.43-.58-.44-.15-.01-.32-.01-.49-.01z"/>
      </svg>
    );
  }
  if (method.iconType === "telegram") {
    return (
      <svg className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.18 3.35-1.39 3.73-1.39.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
      </svg>
    );
  }
  if (method.iconType === "rubika") {
    return (
      <svg className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2L3.5 7.1v9.8L12 21.8l8.5-4.9V7.1L12 2.2zm0 2.3l6.5 3.75-2.7 1.55-6.5-3.75L12 4.5zM5.5 8.65l6 3.45v7.2l-6-3.45V8.65zm8 10.65v-7.2l6-3.45v7.2l-6 3.45z"/>
      </svg>
    );
  }
  if (method.iconType === "bale") {
    return (
      <svg className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.08-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.55 0-3.02-.42-4.28-1.17l-.31-.18-3.17.84.85-3.09-.2-.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm-1-5.5h2v-5h-2v5zm0-7h2V6h-2v1.5z"/>
      </svg>
    );
  }
  return null;
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedContact, setSelectedContact] = useState<string>("call");

  useEffect(() => {
    function handleFormSubmission() {
      const btn = document.getElementById('submit-btn');
      const successBanner = document.getElementById('form-success-banner');
      const nameInput = document.getElementById('full-name');
      const phoneInput = document.getElementById('phone-number');

      if (!nameInput?.value || !phoneInput?.value) {
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-outlined text-[22px] animate-spin">progress_activity</span><span>در حال ثبت...</span>';

      setTimeout(() => {
        btn.innerHTML = '<span class="material-symbols-outlined text-[22px]">check</span><span>درخواست ثبت شد</span>';
        btn.classList.remove('bg-secondary', 'hover:bg-secondary/90');
        btn.classList.add('bg-status-success', 'text-on-primary');
        
        successBanner?.classList.remove('hidden');
        successBanner?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 750);
    }

    const form = document.getElementById('clinic-contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmission();
      });
    }
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col w-full">
{/*  Top Atmospheric Lighting Elements  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 right-1/4 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-48 left-12 w-80 h-80 bg-surface-variant/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
{/*  Editorial Header Section  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-10 w-full" data-aos="fade-up"><div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto"><div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary mx-auto"><span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span><span className="font-label-md text-label-md">پاسخگویی سریع و هماهنگی مراجعین</span></div><div className="flex flex-col items-center justify-center text-center gap-3 w-full"><h1 className="font-display-lg text-display-lg text-primary-container tracking-tight text-center">ارتباط مستقیم و تعیین وقت مشاوره</h1><p className="font-body-lg text-body-lg text-on-surface-variant mt-3 leading-relaxed text-center mx-auto">ما آماده پاسخگویی تخصصی به سوالات شما پیرامون راهکارهای نوین طب فیزیکی، بازتوانی مفاصل، نوار عصب و تزریقات بازساختی (PRP) هستیم.</p></div></div></section>
{/*  Main Two-Column Split Architecture  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Left Side: Clinic Information, Direct Channels & Working Hours (5 Cols)  */}
<div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
{/*  Direct Communication Channels Card  */}
<div className="bg-surface-pure rounded-3xl p-7 shadow-sm flex flex-col gap-6">
<div className="flex items-center justify-between pb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">contact_phone</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary-container">مسیرهای تماس مطب</h2>
</div>
<span className="font-label-sm text-label-sm text-status-success bg-status-success/10 px-3 py-1 rounded-full flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
                خطوط فعال
              </span>
</div>
<div className="flex flex-col gap-4">
{/*  Clinic Landline  */}
<div className="bg-surface-subtle p-4 rounded-2xl flex items-center justify-between group hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-surface-pure text-primary-container flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[20px]">call</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">تلفن مستقیم کلینیک</span>
<span className="font-title-md text-title-md text-primary-container text-right tracking-wider font-semibold" dir="ltr">۰۲۱-۶۶۰۲۰۳۰۸</span>
</div>
</div>
<Link className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-container text-on-primary hover:bg-secondary transition-all shadow-sm" href="tel:02166020308">
<span className="material-symbols-outlined text-[18px]">phone_forwarded</span>
</Link>
</div>
{/*  Dedicated Mobile & WhatsApp  */}
<div className="bg-surface-subtle p-4 rounded-2xl flex items-center justify-between group hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-surface-pure text-secondary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[20px]">chat</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">مشاوره پیام‌رسان و همراه</span>
<span className="font-title-md text-title-md text-primary-container text-right tracking-wider font-semibold" dir="ltr">۰۹۱۲ ۰۰۰ ۰۰۰۰</span>
</div>
</div>
<Link className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/15 text-secondary hover:bg-secondary hover:text-on-secondary transition-all" href="https://wa.me/989120000000" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">send</span>
</Link>
</div>
{/*  Clinic Address  */}
<div className="bg-surface-subtle p-4 rounded-2xl flex flex-col gap-2.5">
<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-xl bg-surface-pure text-primary-container flex items-center justify-center shadow-sm shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">pin_drop</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">موقعیت کلینیک در تهران</span>
<p className="font-title-md text-title-md text-primary-container leading-relaxed">
                      تهران، خیابان آزادی، روبروی ایستگاه مترو شادمان، ساختمان پزشکان فجر، طبقه ۳، کلینیک دکتر ناصح یوسفی
                    </p>
</div>
</div>
<div className="mr-13 pr-1 pt-1 flex items-center gap-2 text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">directions_subway</span>
<span className="">دسترسی مستقیم و پیاده: دقیقاً ۳۰ ثانیه از خروجی مترو شادمان</span>
</div>
</div>
</div>
</div>
{/*  Working Hours Elevated Architectural Box  */}
<div className="bg-primary-container text-surface-pure rounded-3xl p-7 shadow-md relative overflow-hidden flex flex-col gap-5">
{/*  Subtle background accent shape  */}
<div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-secondary/20 blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between border-b border-surface-pure/10 pb-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-surface-pure/10 flex items-center justify-center text-accent-highlight">
<span className="material-symbols-outlined text-[20px]">alarm</span>
</div>
<span className="font-headline-sm text-headline-sm">ساعات پذیرش و ویزیت</span>
</div>
<span className="font-label-sm text-label-sm text-accent-highlight bg-secondary/30 px-3 py-1 rounded-full">نوبت‌دهی قطعی</span>
</div>
<div className="flex flex-col gap-3.5">
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-pure/5">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-accent-highlight"></span>
<span className="font-title-md text-title-md">شنبه، دوشنبه و چهارشنبه</span>
</div>
<span className="font-label-lg text-label-lg tracking-wider text-surface-container-high" dir="ltr">12:00 – 19:00</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-pure/5">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-accent-highlight"></span>
<span className="font-title-md text-title-md">یکشنبه، سه‌شنبه و پنجشنبه</span>
</div>
<span className="font-label-lg text-label-lg tracking-wider text-surface-container-high" dir="ltr">11:00 – 15:00</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-error/10 text-on-error">
<div className="flex items-center gap-2.5 text-error-container">
<span className="material-symbols-outlined text-[16px]">do_not_disturb_on</span>
<span className="font-body-sm text-body-sm">جمعه‌ها و روزهای تعطیل رسمی</span>
</div>
<span className="font-label-sm text-label-sm text-error-container">کلینیک تعطیل است</span>
</div>
</div>
<p className="font-label-sm text-label-sm text-surface-container-highest/80 leading-relaxed pt-1">
              جهت حفظ سلامت، جلوگیری از ازدحام و آرامش کامل شما، پذیرش مراجعین با تعیین نوبت و پرونده الکترونیک از قبل امکان‌پذیر است.
            </p>
</div>
{/*  Doctor Profile Quote Strip  */}

</div>
{/*  Right Side: Clean Medical Contact & Consultation Form (7 Cols)  */}
<div className="lg:col-span-7 order-1 lg:order-2">
<div className="bg-primary-container text-surface-pure rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col gap-6 sm:gap-8 relative overflow-hidden border border-surface-pure/10">
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl pointer-events-none"></div>
  <div className="flex flex-col gap-2 relative z-10">
    <div className="flex items-center justify-between">
      <h2 className="font-headline-lg text-headline-lg text-surface-pure">فرم درخواست مشاوره و رزرو ویزیت</h2>
      <div className="w-10 h-10 rounded-2xl bg-surface-pure/10 flex items-center justify-center text-accent-highlight shadow-sm">
        <span className="material-symbols-outlined text-[22px]">assignment</span>
      </div>
    </div>
    <p className="font-body-md text-body-md text-surface-container-high/90">
      اطلاعات بیمار و خلاصه مشکل خود را درج فرمایید؛ تیم درمان در کوتاه‌ترین زمان جهت تعیین نوبت دقیق با شما تماس خواهند گرفت.
    </p>
  </div>

  <form className="flex flex-col gap-5 sm:gap-6 relative z-10" id="clinic-contact-form" onSubmit={(e) => e.preventDefault()}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Patient Name */}
      <div className="flex flex-col gap-2">
        <label className="font-label-lg text-label-lg text-surface-pure flex items-center justify-between" htmlFor="full-name">
          <span>نام و نام خانوادگی بیمار</span>
          <span className="font-label-sm text-label-sm text-accent-highlight">* الزامی</span>
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full h-12 pr-4 pl-11 rounded-xl bg-surface-pure/10 border border-surface-pure/15 text-surface-pure placeholder:text-surface-container-high/50 focus:bg-surface-pure/20 focus:outline-none focus:shadow-[0_0_0_2px_rgba(78,142,162,0.5)] transition-all font-body-md text-body-md"
            id="full-name"
            placeholder="مثال: دکتر سهراب سهرابی"
            required={true}
            type="text"
          />
          <span className="material-symbols-outlined absolute left-3.5 text-surface-container-high/70 text-[20px] pointer-events-none">
            person
          </span>
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="font-label-lg text-label-lg text-surface-pure flex items-center justify-between" htmlFor="phone-number">
          <span>شماره تلفن همراه</span>
          <span className="font-label-sm text-label-sm text-accent-highlight">* الزامی جهت هماهنگی</span>
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-pure/10 border border-surface-pure/15 text-surface-pure placeholder:text-surface-container-high/50 focus:bg-surface-pure/20 focus:outline-none focus:shadow-[0_0_0_2px_rgba(78,142,162,0.5)] transition-all text-left font-body-md text-body-md tracking-wider"
            dir="ltr"
            id="phone-number"
            placeholder="0912 345 6789"
            required={true}
            type="tel"
          />
          <span className="material-symbols-outlined absolute left-3.5 text-surface-container-high/70 text-[20px] pointer-events-none">
            smartphone
          </span>
        </div>
      </div>
    </div>

    {/* Preferred Contact Method Selection */}
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <label className="font-label-lg text-label-lg text-surface-pure flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-highlight text-[18px]">contact_support</span>
          <span>نحوه ترجیحی برقراری ارتباط و هماهنگی</span>
        </label>
        <span className="font-label-sm text-label-sm text-accent-highlight bg-surface-pure/10 px-2.5 py-0.5 rounded-full">
          کانال پاسخگویی
        </span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
        {contactMethods.map((method) => {
          const isSelected = selectedContact === method.id;
          return (
            <label
              key={method.id}
              className="cursor-pointer group relative"
              onClick={() => setSelectedContact(method.id)}
            >
              <input
                type="radio"
                name="contact_channel"
                value={method.id}
                checked={isSelected}
                onChange={() => setSelectedContact(method.id)}
                className="peer sr-only"
              />
              <div
                className={`py-3 px-2 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-center gap-1.5 active:scale-[0.98] ${
                  isSelected
                    ? "bg-secondary text-on-secondary shadow-md ring-2 ring-accent-highlight/40 font-semibold"
                    : "bg-surface-pure/5 border border-surface-pure/10 text-surface-container-high hover:bg-surface-pure/10 hover:border-surface-pure/20"
                }`}
              >
                {renderContactIcon(method)}
                <span className="font-label-sm text-[12px] sm:text-[13px] leading-tight whitespace-nowrap">
                  {method.label}
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </div>

    {/* Consultation Topic */}
    <div className="flex flex-col gap-2">
      <label className="font-label-lg text-label-lg text-surface-pure" htmlFor="consultation-topic">
        زمینه درمانی یا علت مراجعه
      </label>
      <div className="relative flex items-center">
        <select
          className="w-full h-12 px-4 pl-11 appearance-none rounded-xl bg-primary-container border border-surface-pure/15 text-surface-pure focus:bg-surface-pure/20 focus:outline-none focus:shadow-[0_0_0_2px_rgba(78,142,162,0.5)] transition-all font-body-md text-body-md cursor-pointer"
          id="consultation-topic"
        >
          <option className="bg-primary-container text-surface-pure" value="knee-joint">درمان تخصصی آرتروز و درد زانو (تزریق سلولی و PRP)</option>
          <option className="bg-primary-container text-surface-pure" value="spine-disc">درمان‌های غیرجراحی دیسک کمر، سیاتیک و ستون فقرات</option>
          <option className="bg-primary-container text-surface-pure" value="nerve-conduction">نوار عصب و عضله (EMG / NCV) با تجهیزات تشخیصی پیشرفته</option>
          <option className="bg-primary-container text-surface-pure" value="shoulder-pain">سندروم شانه یخ‌زده، تاندونیت و مفاصل فوقانی</option>
          <option className="bg-primary-container text-surface-pure" value="rehabilitation">توانبخشی اسکلتی عضلانی و طب سوزنی درمانی</option>
          <option className="bg-primary-container text-surface-pure" value="general-consultation">ویزیت تخصصی عمومی طب فیزیکی</option>
        </select>
        <span className="material-symbols-outlined absolute left-3.5 text-surface-container-high/80 text-[22px] pointer-events-none">
          expand_more
        </span>
      </div>
    </div>

    {/* Preferred Shift */}
    <div className="flex flex-col gap-2.5">
      <span className="font-label-lg text-label-lg text-surface-pure">بازه زمانی ترجیحی برای حضور در مطب</span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <label className="cursor-pointer">
          <input defaultChecked={true} className="peer sr-only" name="shift" type="radio" value="afternoon" />
          <div className="p-3 rounded-xl bg-surface-pure/5 border border-surface-pure/10 peer-checked:bg-secondary peer-checked:text-on-secondary text-surface-container-high text-center transition-all flex flex-col items-center gap-1 hover:bg-surface-pure/10">
            <span className="material-symbols-outlined text-[20px]">wb_twilight</span>
            <span className="font-label-md text-label-md font-semibold">شیفت عصرگاهی</span>
            <span className="font-label-sm text-label-sm opacity-80">۱۲ الی ۱۹</span>
          </div>
        </label>
        <label className="cursor-pointer">
          <input className="peer sr-only" name="shift" type="radio" value="morning" />
          <div className="p-3 rounded-xl bg-surface-pure/5 border border-surface-pure/10 peer-checked:bg-secondary peer-checked:text-on-secondary text-surface-container-high text-center transition-all flex flex-col items-center gap-1 hover:bg-surface-pure/10">
            <span className="material-symbols-outlined text-[20px]">wb_sunny</span>
            <span className="font-label-md text-label-md font-semibold">شیفت صبح</span>
            <span className="font-label-sm text-label-sm opacity-80">۱۱ الی ۱۵</span>
          </div>
        </label>
        <label className="cursor-pointer col-span-2 sm:col-span-1">
          <input className="peer sr-only" name="shift" type="radio" value="first_available" />
          <div className="p-3 rounded-xl bg-surface-pure/5 border border-surface-pure/10 peer-checked:bg-secondary peer-checked:text-on-secondary text-surface-container-high text-center transition-all flex flex-col items-center gap-1 hover:bg-surface-pure/10">
            <span className="material-symbols-outlined text-[20px]">bolt</span>
            <span className="font-label-md text-label-md font-semibold">اولین وقت آزاد</span>
            <span className="font-label-sm text-label-sm opacity-80">سریع‌ترین موعد</span>
          </div>
        </label>
      </div>
    </div>

    {/* Patient Message */}
    <div className="flex flex-col gap-2">
      <label className="font-label-lg text-label-lg text-surface-pure flex items-center justify-between" htmlFor="patient-message">
        <span>شرح حال کوتاه یا سوالات بالینی</span>
        <span className="font-label-sm text-label-sm text-surface-container-high/70">اختیاری</span>
      </label>
      <textarea
        className="w-full p-4 rounded-xl bg-surface-pure/10 border border-surface-pure/15 text-surface-pure placeholder:text-surface-container-high/50 focus:bg-surface-pure/20 focus:outline-none focus:shadow-[0_0_0_2px_rgba(78,142,162,0.5)] transition-all font-body-md text-body-md leading-relaxed resize-none"
        id="patient-message"
        placeholder="در صورت داشتن سابقه جراحی، ام‌آر‌آی (MRI) یا علائم مشخص درد، لطفاً خلاصه‌ای بنویسید..."
        rows={4}
      ></textarea>
    </div>

    {/* Submit Button & Assurance */}
    <div className="flex flex-col gap-4 pt-2">
      <button
        className="w-full rounded-xl bg-secondary hover:bg-secondary/90 text-on-secondary font-headline-sm text-headline-sm flex items-center justify-center gap-3 transition-all shadow-md group active:scale-[0.99] h-14"
        id="submit-btn"
        type="submit"
      >
        <span className="material-symbols-outlined text-[22px] group-hover:-translate-x-1 transition-transform">send</span>
        <span>ارسال درخواست و هماهنگی نوبت</span>
      </button>
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-surface-pure/5 border border-surface-pure/10 text-surface-container-high">
        <span className="material-symbols-outlined text-accent-highlight text-[20px] shrink-0">lock</span>
        <span className="font-label-sm text-label-sm leading-relaxed text-surface-container-highest/90">
          اطلاعات پزشکی و هویتی شما کاملاً محرمانه است. دستیار ارشد کلینیک ظرف مدت کمتر از ۲ ساعت از طریق کانال انتخابی با شما ارتباط حاصل خواهد کرد.
        </span>
      </div>
    </div>

    {/* Success Banner */}
    <div className="hidden p-4 rounded-2xl bg-status-success/20 border border-status-success/30 text-surface-pure flex items-start gap-3" id="form-success-banner">
      <span className="material-symbols-outlined text-[24px] text-accent-highlight shrink-0">task_alt</span>
      <div className="flex flex-col">
        <span className="font-title-md text-title-md font-semibold text-surface-pure">پیام شما با موفقیت ثبت گردید</span>
        <span className="font-body-sm text-body-sm mt-0.5 text-surface-container-high">همکاران بخش پذیرش به زودی از طریق روش ارتباطی انتخابی شما جهت هماهنگی نهایی تماس حاصل خواهند نمود.</span>
      </div>
    </div>
  </form>
</div>
</div>
</div>
</section>
{/*  Interactive Map & Comprehensive Transit Hub  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20 w-full" data-aos="fade-up">
<div className="bg-surface-pure rounded-3xl p-6 lg:p-10 shadow-sm flex flex-col gap-8">
{/*  Section Title & Routing Badges  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold">دسترسی شهری آسان</span>
<h2 className="font-headline-md text-headline-md text-primary-container">موقعیت جغرافیایی و راهنمای مسیر</h2>
</div>
{/*  Rapid Navigation Shortcuts  */}
<div className="flex flex-wrap items-center gap-2.5">
<Link className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-surface-subtle hover:bg-secondary/15 hover:text-secondary text-primary-container font-label-md text-label-md transition-colors" href="https://nshn.ir" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">near_me</span>
<span className="">مسیریابی با نشان</span>
</Link>
<Link className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-surface-subtle hover:bg-secondary/15 hover:text-secondary text-primary-container font-label-md text-label-md transition-colors" href="https://balad.ir" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">turn_right</span>
<span className="">مسیریابی با بلد</span>
</Link>
<Link className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md transition-colors shadow-sm" href="https://maps.google.com/?q=Tehran+Shadman+Metro" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">map</span>
<span className="">گوگل مپ (Google Maps)</span>
</Link>
</div>
</div>
{/*  Integrated Map Container with Interactive Pin Overlay  */}
<div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-inner">
<div className="w-full h-full bg-cover bg-center" data-location="Tehran, Shadman Metro Station, Dr. Naseh Yousefi Clinic" style={{}}></div>
{/*  Floating Architectural Location Card  */}
<div className="absolute bottom-5 right-5 left-5 sm:left-auto sm:max-w-md bg-surface-pure/95 backdrop-blur-xl p-5 rounded-2xl shadow-lg flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-primary-container text-accent-highlight flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">local_hospital</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary-container">ساختمان پزشکان فجر</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">مطب دکتر ناصح یوسفی - طبقه سوم</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              واقع در محور اصلی خیابان آزادی، با دسترسی بدون پله و آسانسور دوطرفه مناسب برای بیماران دارای آرتروز و صندلی چرخدار.
            </p>
</div>
</div>
{/*  Transit Connectivity 3-Column Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
<div className="bg-surface-subtle p-5 rounded-2xl flex items-start gap-4">
<div className="w-11 h-11 rounded-xl bg-surface-pure text-secondary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[22px]">subway</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary-container">مترو خط ۲ و خط ۴</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                تقاطع خطوط اصلی، ایستگاه شادمان. با خروج از گیت‌های مترو و عبور از خط عابر، ساختمان دقیقاً روبروی شماست.
              </p>
</div>
</div>
<div className="bg-surface-subtle p-5 rounded-2xl flex items-start gap-4">
<div className="w-11 h-11 rounded-xl bg-surface-pure text-secondary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[22px]">directions_bus</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary-container">سامانه تندرو (BRT)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                خط ۱ بی‌آرتی (تهرانپارس - میدان آزادی)، ایستگاه بهبودی / شادمان با پیاده‌روی کمتر از ۲ دقیقه تا مطب.
              </p>
</div>
</div>
<div className="bg-surface-subtle p-5 rounded-2xl flex items-start gap-4">
<div className="w-11 h-11 rounded-xl bg-surface-pure text-secondary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[22px]">local_parking</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-title-md text-title-md text-primary-container">پارکینگ خودروی شخصی</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                پارکینگ عمومی طبقاتی آزادی و پارکینگ‌های خیابان بهبودی جهت رفاه حال همراهان عزیز در مجاورت کلینیک مهیاست.
              </p>
</div>
</div>
</div>
</div>
</section>
{/*  Comprehensive FAQ Section for Peace of Mind  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pb-16" data-aos="fade-up">
<div className="bg-surface-pure rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-border-crisp/60 flex flex-col gap-6">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-container-high/60">
    <div className="flex items-center gap-3.5">
      <div className="w-11 h-11 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 shadow-sm">
        <span className="material-symbols-outlined text-[24px]">help_center</span>
      </div>
      <div>
        <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">پرسش‌های متداول پیش از مراجعه به مطب</h3>
        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">پاسخ به سوالات پرتکرار مراجعین جهت آمادگی و هماهنگی بهتر برای ویزیت</p>
      </div>
    </div>
    <span className="self-start sm:self-center font-label-sm text-label-sm text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full font-medium flex items-center gap-1.5 shrink-0">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      پاسخ به سوالات رایج
    </span>
  </div>

  <div className="flex flex-col gap-3.5" id="contact-faq-accordion">
    {contactFaqs.map((faq, idx) => {
      const isOpen = openFaq === idx;
      return (
        <div
          key={idx}
          className={`rounded-2xl transition-all duration-300 border ${
            isOpen
              ? "bg-surface-subtle/80 border-secondary/40 shadow-sm ring-1 ring-secondary/20"
              : "bg-surface-pure hover:bg-surface-subtle/40 border-border-crisp/70 hover:border-secondary/30"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpenFaq(isOpen ? null : idx)}
            className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-right cursor-pointer select-none focus:outline-none"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                  isOpen
                    ? "bg-secondary text-on-secondary shadow-sm"
                    : "bg-surface-container-low text-secondary"
                }`}
              >
                <span className="font-label-sm text-label-sm font-bold">۰{idx + 1}</span>
              </span>
              <h4
                className={`font-title-md text-title-md font-semibold transition-colors ${
                  isOpen ? "text-secondary" : "text-primary-container"
                }`}
              >
                {faq.q}
              </h4>
            </div>
            <span
              className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                isOpen
                  ? "bg-secondary text-on-secondary rotate-180"
                  : "bg-surface-container-low text-on-surface-variant hover:text-secondary"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-5 pt-2 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-border-crisp/50">
                <p className="pr-10 text-justify text-[15px] sm:text-[16px] text-on-surface/85">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
</section>
</div>
{/*  Client-side Interactive Script  */}

</div>
    </div>
  );
}
