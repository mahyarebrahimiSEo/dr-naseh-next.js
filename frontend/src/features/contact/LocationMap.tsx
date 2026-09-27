"use client";
import React from 'react';

export function LocationMap() {
  return (
    <>
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
<div className="bg-surface-pure rounded-3xl p-6 lg:p-10 shadow-sm flex flex-col gap-8">
{/*  Section Title & Routing Badges  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-secondary uppercase font-semibold">دسترسی شهری آسان</span>
<h2 className="font-headline-md text-headline-md text-primary-container">موقعیت جغرافیایی و راهنمای مسیر</h2>
</div>
{/*  Rapid Navigation Shortcuts  */}
<div className="flex flex-wrap items-center gap-2.5">
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-surface-subtle hover:bg-secondary/15 hover:text-secondary text-primary-container font-label-md text-label-md transition-colors" href="https://nshn.ir" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">near_me</span>
<span className="">مسیریابی با نشان</span>
</a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-surface-subtle hover:bg-secondary/15 hover:text-secondary text-primary-container font-label-md text-label-md transition-colors" href="https://balad.ir" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">turn_right</span>
<span className="">مسیریابی با بلد</span>
</a>
<a className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md transition-colors shadow-sm" href="https://maps.google.com/?q=Tehran+Shadman+Metro" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">map</span>
<span className="">گوگل مپ (Google Maps)</span>
</a>
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
{/*  Comprehensive FAQ Snippet for Peace of Mind  */}

    </>
  );
}
