"use client";
import React from 'react';

export function CallToAction() {
  return (
    <>
    <section className="w-full bg-surface-subtle pb-16 lg:pb-24 scroll-reveal revealed">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
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
<a className="inline-flex items-center gap-2.5 h-12 px-6 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary/90 transition-all" href="tel:02166020308">
<span className="material-symbols-outlined text-[20px]">call</span>
<span className="tracking-wider" dir="ltr">۰۲۱-۶۶۰۲۰۳۰۸</span>
</a>
<a className="inline-flex items-center gap-1.5 h-12 px-5 rounded-xl bg-surface-pure/10 hover:bg-surface-pure/20 text-surface-pure font-label-lg text-label-lg transition-colors backdrop-blur-md" href="#services-section">
<span className="">آدرس و ساعات مطب</span>
<span className="material-symbols-outlined text-[18px]">location_on</span>
</a>
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
    </>
  );
}
