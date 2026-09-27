"use client";
import React from 'react';

export function AcademicAchievements() {
  return (
    <>
    <section className="w-full bg-surface py-16 lg:py-20 relative scroll-reveal revealed">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
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

    </>
  );
}
