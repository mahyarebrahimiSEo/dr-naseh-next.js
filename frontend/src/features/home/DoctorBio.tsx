"use client";
import React from 'react';

export function DoctorBio() {
  return (
    <>
    <section className="w-full bg-surface-pure py-16 lg:py-24 relative scroll-reveal revealed">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
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
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">روزهای ویزیت در مطب:</span>
<span className="font-title-md text-title-md text-primary-container font-semibold">شنبه الی پنجشنبه (با هماهنگی قبلی)</span>
</div>
<a className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-lg text-label-lg font-bold" href="tel:02166020308">
<span className="">درخواست مشاوره تلفنی</span>
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  Academic Achievements & Memberships Grid  */}

    </>
  );
}
