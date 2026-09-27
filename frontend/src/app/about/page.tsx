// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const clinicalSpecialties = [
  {
    icon: "bloodtype",
    title: "پی‌آرپی (PRP) با خلوص بالا",
    desc: "تزریق پلاسمای غنی از پلاکت با کیت‌های استاندارد بین‌المللی جهت بازسازی غضروف و تسکین دردهای مفصلی",
    category: "پروتکل بازساختی",
    link: "/services",
  },
  {
    icon: "vital_signs",
    title: "آرتروز پیشرفته زانو و شانه",
    desc: "غضروف‌سازی و تسکین دردهای مکانیکی مفصلی با روش‌های نوین طب فیزیکی بدون نیاز به تعویض مفصل",
    category: "درمان غیرجراحی",
    link: "/services",
  },
  {
    icon: "accessibility_new",
    title: "توانبخشی ستون فقرات و گردن",
    desc: "درمان جامع دیسکوپاتی‌ها، فتق دیسک، دردهای سیاتیک و دردهای رادیکولار با رویکرد محافظه‌کارانه",
    category: "ستون فقرات",
    link: "/services",
  },
  {
    icon: "biotech",
    title: "ارتوپدی بازساختی و پرولوتراپی",
    desc: "ترمیم تاندون‌ها، رباط‌ها و درمان آسیب‌های ورزشی حاد و مزمن با تحریک تکثیر سلولی طبیعی",
    category: "پرولوتراپی تخصصی",
    link: "/services",
  },
];

export default function Page() {
  useEffect(() => {

    (function () {
      function animateCounter(id, target, prefix = "", suffix = "") {
        const el = document.getElementById(id);
        if (!el) return;
        let start = 0;
        const duration = 1200;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = prefix + target + suffix;
            clearInterval(timer);
          } else {
            el.textContent = prefix + Math.floor(start) + suffix;
          }
        }, stepTime);
      }

      animateCounter('stat-rank', 3);
      animateCounter('stat-experience', 12, '+');
    })();
  
}, []);
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col w-full">
<div className="relative w-full overflow-hidden bg-surface-subtle pb-16 pt-8">
<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-surface-variant/30 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
<nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-6">



</nav>
<div className="flex flex-col items-center justify-center text-center gap-6 pb-6 max-w-4xl mx-auto">
<div className="flex flex-col items-center text-center gap-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm w-fit mx-auto">
<span className="material-symbols-outlined text-[16px]">medical_services</span>
<span className="">معرفی پزشک و فلسفه درمانی</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight text-center">
            درباره دکتر ناصح یوسفی
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-center max-w-2xl mx-auto">
            متخصص طب فیزیکی و توانبخشی، استادیار و عضو هیئت علمی دانشگاه علوم پزشکی ایران
          </p>
</div>
<div className="flex items-center justify-center gap-4 mx-auto">
<div className="flex flex-col items-center bg-surface-pure px-5 py-3 rounded-2xl shadow-sm">
<span className="font-headline-lg text-headline-lg text-secondary font-bold" id="stat-rank">3</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">رتبه کشوری بورد تخصصی</span>
</div>
<div className="flex flex-col items-center bg-surface-pure px-5 py-3 rounded-2xl shadow-sm">
<span className="font-headline-lg text-headline-lg text-status-success font-bold" id="stat-experience">+12</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">سال تجربه و پژوهش</span>
</div>
</div>
</div>
</div>
</div>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 w-full" data-aos="fade-up">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 relative">
<div className="sticky top-28 flex flex-col gap-6">
<div className="relative group rounded-3xl overflow-hidden shadow-xl bg-surface-pure">
<img alt="دکتر ناصح یوسفی در کلینیک طب فیزیکی" className="w-full h-auto object-cover max-h-[580px] transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW6pX6RZZSOlO7Rn1HNPWXsmGiJHcIDbU6VB5NCHgkJa4_UC2IvRKYl5SBaP1_D2ijVoONB9_UlbzvLDHAsI0BIQKpySh7ClPrAu0rOWF7JGmbfCL43LRZB6ZGRWsXznIvzbEzBD0KuSQIeuptAE1XXmsEe-FktZCZtRzxCwLC2FeK5bLFtvJPeqyDXGmELwAPc28nCWs4cVDHuo8cShnk3Egh-YDHMnPKx2KT6k0A7N7OYDJzTdRWy6LHAsOFSdSSFSo" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 right-6 left-6 text-on-primary flex flex-col gap-1">
<span className="font-headline-sm text-headline-sm text-surface-pure font-bold">دکتر ناصح یوسفی</span>
<span className="font-label-md text-label-md text-secondary-fixed-dim">فلوشیپ و مستر دوره‌های پیشرفته تزریقات سونوگرافی و بازساختی</span>
</div>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-3 shadow-sm">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">workspace_premium</span>
<h3 className="font-title-md text-title-md font-bold">افتخار علمی ممتاز</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-justify">
              کسب رتبه ۳ آزمون بورد تخصصی کشوری در رشته طب فیزیکی و توانبخشی سال ۱۳۹۷ و برگزیده بنیاد ملی نخبگان در حیطه پژوهش‌های اسکلتی-عضلانی.
            </p>
</div>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-10">
<div className="p-8 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">school</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">سوابق تحصیلی و تجارب بالینی</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-loose text-justify">
            دکتر ناصح یوسفی، فارغ‌التحصیل دوره پزشکی عمومی با رتبه برتر و دانش‌آموخته دوره تخصصی طب فیزیکی و توانبخشی با احراز 
            <strong className="text-on-surface font-semibold">رتبه ۳ دانشنامه بورد تخصصی کشوری در سال ۱۳۹۷</strong> 
            می‌باشند. ایشان با پیوستن به کادر هیئت علمی دانشگاه علوم پزشکی ایران، علاوه بر تدریس تخصصی به دانشجویان پزشکی و دستیاران تخصصی، در حوزه‌های پژوهشی ارتوپدی ترمیمی و سونوگرافی مداخله‌ای به شکل مستمر فعالیت دارند.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-loose text-justify">
            تلاش علمی ایشان بر تلفیق دقیق‌ترین تکنولوژی‌های روز دنیا با فنون معاینه بالینی دقیق متمرکز است تا فرآیند درمان به دور از هرگونه شتاب‌زدگی و با استناد بر پزشکی مبتنی بر شواهد (Evidence-Based Medicine) رقم بخورد.
          </p>
</div>
<div className="p-8 rounded-2xl bg-surface-container-high/40 shadow-sm flex flex-col gap-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">favorite</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">فلسفه درمانی کلینیک</h2>
</div>
<p className="font-body-md text-body-md text-on-surface leading-loose text-justify">
            «باور بنیادین ما این است که بدن انسان توانایی شگفت‌انگیزی در خودترمیمی دارد، مشروط بر اینکه محیط بیولوژیک مناسب و تحریک سلولی دقیق فراهم شود. اولویت مطلق ما در کلینیک، اجتناب از جراحی‌های باز و پرعارضه تا آخرین حد ممکن و بهره‌گیری از رویکردهای کم‌تهاجمی، ایمن و هدفمند سلول‌درمانی و فیزیوتراپی پیشرفته است.»
          </p>
<div className="flex items-center gap-4 pt-2">
<div className="flex items-center gap-2 text-status-success font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span className="">درمان‌های کم‌تهاجمی</span>
</div>
<div className="flex items-center gap-2 text-status-success font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span className="">رویکرد محافظه‌کارانه</span>
</div>
<div className="flex items-center gap-2 text-status-success font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span className="">سلول‌های اتولوگ طبیعی</span>
</div>
</div>
</div>

</div>
</div>
</section>

{/* Clinical Focus Areas Section with Staggered Entrance and High-End Hover Micro-interactions */}
<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 pt-2" data-aos="fade-up">
  <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-surface-pure shadow-sm border border-crisp/80 flex flex-col gap-8 relative overflow-hidden">
    {/* Ambient Decorative Lighting */}
    <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
    <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-surface-variant/25 blur-3xl pointer-events-none"></div>

    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-crisp/70 pb-6 relative z-10" data-aos="fade-up" data-aos-delay="100">
      <div className="flex items-center gap-3.5">
        <div className="w-13 h-13 rounded-2xl bg-secondary-container/40 flex items-center justify-center text-secondary relative shadow-sm shrink-0">
          <span className="material-symbols-outlined text-[26px]">track_changes</span>
        </div>
        <div>
          <span className="font-label-sm text-label-sm text-secondary font-bold tracking-wide">تخصص‌های محوری</span>
          <h2 className="font-headline-md text-headline-md text-primary-container font-bold mt-0.5">حوزه‌های تمرکز تخصصی کلینیک</h2>
        </div>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md leading-relaxed text-right md:text-left">
        ارائه متدهای نوین پزشکی بازساختی و طب فیزیکی بدون نیاز به جراحی‌های تهاجمی
      </p>
    </div>

    {/* 4 Interactive Specialty Cards with Staggered Render Animation and Ultra-Smooth Hovers */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {clinicalSpecialties.map((item, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          data-aos-delay={(idx + 1) * 120}
          className="h-full"
        >
          <Link
            href={item.link}
            className="group relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-surface-subtle/80 hover:bg-surface-pure border border-crisp/80 hover:border-secondary/40 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transform-gpu will-change-transform transition-[transform,box-shadow,border-color,background-color] duration-700 ease-out hover:-translate-y-2 flex flex-col justify-between h-full cursor-pointer"
          >
            {/* Top highlight glow line */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-transparent group-hover:via-accent-highlight to-transparent transition-all duration-700 ease-out"></div>

            {/* Ambient corner light */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-secondary/0 group-hover:bg-secondary/10 blur-xl transition-all duration-700 ease-out pointer-events-none"></div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                {/* Icon Container with smooth hover transition */}
                <div className="w-13 h-13 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center transform-gpu transition-all duration-700 ease-out group-hover:bg-secondary group-hover:text-on-secondary group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md group-hover:shadow-secondary/30 shrink-0">
                  <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                </div>
                <span className="font-label-sm text-[11px] text-secondary/80 bg-secondary/10 group-hover:bg-secondary/15 px-2.5 py-1 rounded-full font-medium transition-colors duration-500">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-title-md text-title-md text-primary-container font-bold group-hover:text-secondary transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Bottom Interactive Action Cue */}
            <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm font-semibold opacity-70 group-hover:opacity-100 transition-all duration-700 ease-out pt-4 mt-4 border-t border-crisp/60 group-hover:border-secondary/20">
              <span>مشاهده جزئیات درمان</span>
              <span className="material-symbols-outlined text-[18px] transform-gpu transition-transform duration-700 ease-out group-hover:-translate-x-2">arrow_left_alt</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="w-full bg-surface-container-low py-16" data-aos="fade-up">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-12">
<div className="flex flex-col items-center text-center gap-3">
<span className="font-label-lg text-label-lg text-secondary font-semibold">سوابق و جایگاه‌های آکادمیک</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface">مسیر رشد علمی و دستاوردهای حرفه‌ای</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">domain</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">دانشگاه علوم پزشکی ایران</span>
<h3 className="font-title-md text-title-md text-on-surface font-bold">عضو هیئت علمی و استادیار</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            مسئولیت آموزش بالینی دستیاران تخصصی، تدریس تئوری و اجرای کارآزمایی‌های بالینی استاندارد دانشگاهی.
          </p>
</div>
<div className="p-6 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">public</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">انجمن بین‌المللی ISPRM</span>
<h3 className="font-title-md text-title-md text-on-surface font-bold">عضو جامعه بین‌المللی</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            عضو رسمی انجمن بین‌المللی طب فیزیکی و توانبخشی و حضور پیوسته در کنگره‌های سالیانه جهانی.
          </p>
</div>
<div className="p-6 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">co_present</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">سونوگرافی اسکلتی-عضلانی</span>
<h3 className="font-title-md text-title-md text-on-surface font-bold">مدرس کارگاه‌های تخصصی</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            آموزش دوره‌های تزریقات ارتوپدی و مفاصل تحت گاید سونوگرافی به پزشکان و متخصصین کشور.
          </p>
</div>
<div className="p-6 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">menu_book</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">نمایه شده در PubMed</span>
<h3 className="font-title-md text-title-md text-on-surface font-bold">انتشار مقالات بین‌المللی</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            نگارش مقالات پژوهشی متعدد در نشریات دارای رتبه ISI و پایگاه معتبر پزشکی پاب‌مد در زمینه درمان دیسک و مفاصل.
          </p>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 w-full" data-aos="fade-up">
<div className="flex flex-col gap-12">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div className="flex flex-col gap-3 max-w-2xl">
<span className="font-label-lg text-label-lg text-secondary font-semibold">ارزش‌های بنیادین مرکز</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface">استانداردهای مراقبتی و فناوری کلینیک</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            تمامی مراحل از نخستین جلسه معاینه تا درمان نهایی با به‌کارگیری تجهیزات روز و استانداردهای دقیق ایمنی صورت می‌پذیرد.
          </p>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">تضمین کیفیت و پروتکل‌های بین‌المللی</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-5 relative group hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 rounded-2xl bg-surface-variant/40 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[32px]">monitor_heart</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">دقت تشخیصی بالا با سونوگرافی مطب</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            انجام تصویربرداری در لحظه مفاصل و بافت نرم در حین ویزیت، امکان تشخیص دقیق کانون درد و تزریق با خطای صفر در محل آسیب را فراهم می‌سازد.
          </p>
<div className="mt-auto pt-4 flex items-center gap-2 text-secondary font-label-md text-label-md">
<span className="">Musculoskeletal Ultrasound Guidance</span>
</div>
</div>
<div className="p-8 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-5 relative group hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 rounded-2xl bg-surface-variant/40 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[32px]">sanitizer</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">پروتکل‌های استریل و ایمنی بسته</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            به‌کارگیری کیت‌های کاملاً بسته و یک‌بار مصرف استریل برای تهیه PRP و اتولوگ سروم، با حذف هرگونه ریسک آلودگی محیطی بر پایه راهنماهای بهداشتی.
          </p>
<div className="mt-auto pt-4 flex items-center gap-2 text-secondary font-label-md text-label-md">
<span className="">Closed-System Centrifugation</span>
</div>
</div>
<div className="p-8 rounded-2xl bg-surface-pure shadow-sm flex flex-col gap-5 relative group hover:-translate-y-1 transition-transform">
<div className="w-14 h-14 rounded-2xl bg-surface-variant/40 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[32px]">update</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">پیگیری فعال روند بهبودی</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
            فرآیند بازسازی با تزریق خاتمه نمی‌یابد؛ تیم درمانی با برنامه‌های تمرینی خانگی و ویزیت‌های ادواری، بازیابی دامنه حرکتی و کنترل درد را پایش می‌کند.
          </p>
<div className="mt-auto pt-4 flex items-center gap-2 text-secondary font-label-md text-label-md">
<span className="">Structured Rehabilitation Path</span>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20 w-full" data-aos="fade-up"><div className="rounded-3xl bg-primary-container text-on-primary p-8 md:p-12 shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"><div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div><div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent-highlight/10 blur-3xl pointer-events-none"></div><div className="lg:col-span-6 flex flex-col gap-6 relative z-10"><div className="flex flex-col gap-3"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-pure/10 text-accent-highlight font-label-sm text-label-sm w-fit"><span className="material-symbols-outlined text-[16px]">event_available</span><span className="">مشاوره و تعیین وقت قبلی</span></div><h2 className="font-headline-xl text-headline-xl text-surface-pure font-bold">رزرو وقت ویزیت و مشاوره حضوری</h2><p className="font-body-md text-body-md text-surface-container-highest/90 leading-relaxed text-justify">اگر از دردهای مزمن ستون فقرات، زانو یا آرتروز رنج می‌برید، پیش از تصمیم‌گیری برای جراحی‌های سنگین، برای بررسی امکان بازسازی و توانبخشی با ما مشورت کنید.</p></div><div className="flex flex-col gap-3.5 pt-2 border-t border-surface-pure/10"><div className="flex items-center gap-2.5 text-surface-pure font-title-md text-title-md"><span className="material-symbols-outlined text-accent-highlight text-[22px]">schedule</span><span className="">شنبه تا پنج‌شنبه بر اساس شیفت‌های مطب</span></div><div className="flex items-center gap-2.5 text-surface-pure font-title-md text-title-md"><span className="material-symbols-outlined text-accent-highlight text-[22px]">pin_drop</span><span className="">تهران، روبروی مترو شادمان، ساختمان پزشکان فجر</span></div></div><div className="pt-2"><Link className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-surface-pure/10 border border-surface-pure/20 text-surface-pure hover:bg-surface-pure/20 transition-all w-fit" href="tel:02166020308"><span className="material-symbols-outlined text-[22px] text-accent-highlight">phone_in_talk</span><span className="font-headline-sm text-headline-sm tracking-wider font-bold" dir="ltr">۰۲۱-۶۶۰۲۰۳۰۸</span><span className="font-label-sm text-label-sm text-surface-container-highest/80 border-r border-surface-pure/20 pr-3 mr-1">تماس مستقیم با پذیرش</span></Link></div></div><div className="lg:col-span-6 relative z-10"><div className="bg-surface-pure rounded-2xl p-6 md:p-8 shadow-2xl text-on-surface border border-crisp flex flex-col gap-5"><div className="flex flex-col gap-1.5 border-b border-crisp pb-4"><h3 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[24px]">edit_calendar</span><span className="">فرم ثبت درخواست نوبت</span></h3><p className="font-body-sm text-body-sm text-on-surface-variant">مشخصات خود را وارد نمایید تا کارشناسان پذیرش در اسرع وقت جهت هماهنگی تماس بگیرند.</p></div><form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}><div className="flex flex-col gap-1.5"><label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5" htmlFor="patient-name"><span className="material-symbols-outlined text-[16px] text-secondary">person</span><span className="">نام و نام خانوادگی بیمار</span></label><input className="h-12 px-4 rounded-xl border border-outline-variant bg-surface-subtle focus:bg-surface-pure focus:outline-none focus:border-secondary transition-all font-body-md text-body-md text-on-surface" id="patient-name" name="fullname" placeholder="مثال: علی رضایی" required={true} type="text" /></div><div className="flex flex-col gap-1.5"><label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5" htmlFor="patient-phone"><span className="material-symbols-outlined text-[16px] text-secondary">smartphone</span><span className="">شماره تلفن همراه</span></label><input className="h-12 px-4 rounded-xl border border-outline-variant bg-surface-subtle focus:bg-surface-pure focus:outline-none focus:border-secondary transition-all font-body-md text-body-md text-on-surface text-right" dir="ltr" id="patient-phone" name="phone" placeholder="۰۹۱۲۳۴۵۶۷۸۹" required={true} type="tel" /></div><button className="h-12 mt-1 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-md active:scale-[0.99]" type="submit"><span className="material-symbols-outlined text-[20px]">send</span><span className="">ارسال درخواست و مشاوره سریع</span></button><div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm pt-1"><span className="material-symbols-outlined text-status-success text-[16px] shrink-0">verified_user</span><span className="">اطلاعات شما کاملاً محرمانه نزد کلینیک محفوظ است. تماس حداکثر ظرف ۲ ساعت کاری.</span></div></form></div></div></div></section>

</div>
    </div>
  );
}
