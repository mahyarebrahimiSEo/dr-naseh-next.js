// @ts-nocheck
"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "آیا تزریقات بازساختی مانند پی‌آرپی یا اوزون دردناک هستند؟",
      a: "خیر، قبل از انجام تزریق، موضع با لیدوکائین موضعی بی‌حس می‌گردد. علاوه بر این، به کارگیری سرسوزن‌های بسیار نازک میکرو و انجام فرایند تحت هدایت زنده و میلی‌متری سونوگرافی موجب می‌شود تا بیمار کمترین حس درد و ناراحتی را تجربه نماید."
    },
    {
      q: "برای دستیابی به نتیجه درمانی مطلوب، چند جلسه درمانی نیاز است؟",
      a: "تعداد جلسات به شدت تخریب بافت و پاسخ بیولوژیک بدن بستگی دارد. به طور معمول برای PRP بین ۱ الی ۳ جلسه با فاصله یک ماه، برای اوزون‌تراپی بین ۳ تا ۵ جلسه و برای روش‌هایی مانند ارتوکین طبق پروتکل استاندارد، معمولاً ۴ تا ۶ تزریق متوالی تجویز می‌شود."
    },
    {
      q: "کیت‌های استاندارد PRP چه تفاوتی با لوله‌های معمولی آزمایشگاه دارند؟",
      a: "لوله‌های ساده آزمایشگاهی تنها برای تست‌های خون‌شناسی هستند و غلظت پلاکت کافی یا جداسازی سلول‌های قرمز و گلبول‌های سفید ملتهب‌کننده را فراهم نمی‌کنند. در کلینیک دکتر ناصح یوسفی صرفاً از کیت‌های اختصاصی بسته درمانی (Closed System) دارای مجوز وزارت بهداشت استفاده می‌شود تا غلظت بالای پلاکت سالم بدون تماس با هوای محیط تضمین شود."
    },
    {
      q: "آیا تست نوار عصب و عضله (EMG/NCS) نیاز به آمادگی قبلی خاصی دارد؟",
      a: "آمادگی پیچیده‌ای نیاز نیست؛ تنها توصیه می‌شود پوست اندام مورد بررسی تمیز و فاقد هرگونه لوسیون یا کرم چرب باشد. همچنین لباس‌های راحت و گشاد بپوشید تا دسترسی به بازوها یا پاها به سادگی میسر باشد. در صورت داشتن ضربان‌ساز قلب (Pacemaker) پیش از آزمون پزشک را مطلع نمایید."
    }
  ];
  return (
    <div className="w-full flex flex-col pt-12 pb-24 bg-surface">
      <div className="flex flex-col w-full">
{/*  Top Ambient Glow Layers  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 right-1/4 w-96 h-96 bg-secondary-container/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-20 left-10 w-80 h-80 bg-surface-container-high/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
{/*  Hero Section  */}

</div>
{/*  Interactive Category Filter Tabs  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-4 w-full">
<div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 lg:mb-16">
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary mb-6 shadow-sm">
    <span className="w-2 h-2 rounded-full bg-accent-highlight animate-pulse"></span>
    <span className="font-label-md text-label-md font-semibold">پروتکل‌های پیشرفته ارتوپدی بازساختی و طب فیزیکی</span>
  </div>
  <h1 className="font-display-lg text-display-lg text-primary-container tracking-tight leading-tight mb-6 text-center">
    خدمات تخصصی و <span className="text-secondary">روش‌های درمانی غیرجراحی</span>
  </h1>
  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8 text-center mx-auto">
    رویکرد بالینی دکتر ناصح یوسفی بر مهار ریشه‌ای آرتروز زانو، فتق دیسک گردن و کمر، آسیب‌های ورزشی و تاندونوپاتی‌های مزمن بدون نیاز به بیهوشی یا تیغ جراحی متمرکز است. در این مرکز، نوآوری‌های سلول‌درمانی، ارتوپدی بازساختی و سونوگرافی مداخله‌ای (MSK Sonography) به کار گرفته می‌شوند تا آناتومی و عملکرد طبیعی اندام‌ها با حداکثر دقت بازسازی شود.
  </p>
  <div className="flex flex-wrap items-center gap-4 justify-center pt-2">
    <Link className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-primary-container text-white font-label-lg text-label-lg shadow-md hover:bg-primary-container/90 hover:shadow-lg transition-all active:scale-[0.98]" href="#booking-section">
      <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
      <span>درخواست ارزیابی تشخیصی</span>
    </Link>
    <Link className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-surface-pure text-primary-container border border-border-crisp font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-all active:scale-[0.98]" href="tel:02166020308">
      <span className="material-symbols-outlined text-secondary text-[20px]">headset_mic</span>
      <span dir="ltr">۰۲۱-۶۶۰۲۰۳۰۸</span>
    </Link>
  </div>
</div>

{/*  Filter Buttons Scrollable Container with Distinct Separation  */}
<div className="w-full mt-6 pt-6 border-t border-surface-container-high/60">
  <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 px-2 scrollbar-none justify-start md:justify-center w-full" id="service-tabs">
    {[
      { id: 'all', label: 'همه خدمات' },
      { id: 'biologic', label: 'تزریقات بازساختی و بیولوژیک' },
      { id: 'electro', label: 'تشخیص و هدایت الکتروفیزیولوژی' },
      { id: 'spine', label: 'درمان‌های ستون فقرات و دیسک' },
      { id: 'rehab', label: 'توانبخشی و ورزش‌درمانی' },
    ].map((tab) => (
      <button
        key={tab.id}
        type="button"
        onClick={() => setActiveTab(tab.id)}
        className={`tab-btn px-5 h-11 rounded-xl font-label-lg text-label-lg whitespace-nowrap transition-all shrink-0 cursor-pointer ${
          activeTab === tab.id
            ? 'bg-primary-container text-white shadow-md font-semibold'
            : 'bg-surface-pure text-on-surface-variant hover:bg-surface-container-high border border-border-crisp/60'
        }`}
        data-filter={tab.id}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>
</section>
{/*  Detailed Service Showcase (5 Core Services)  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 w-full space-y-12" id="services-container" data-aos="fade-up">
{/*  1. PRP Service Card  */}
<div className="service-card group bg-surface-pure rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-lg transition-all" data-category="biologic" style={{ display: activeTab === 'all' || activeTab === 'biologic' ? 'block' : 'none' }}>
<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
<div className="w-full lg:w-5/12 overflow-hidden rounded-2xl relative">
<img className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Laboratory grade PRP centrifuge process with specialized yellow plasma tubes and platelet concentration preparation in clinical pristine atmosphere, soft lighting, calm sterile colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgK6BfB9wpZ8Ouh9F8E5i0adBGhtz8nPhZfn87UIEc6sXYwe-BzVm-rptfToGRVWep9x3Q7vqLE25VJBI__gI3zlJXGoxGymiewHPmBSz_Xe22Q6sMjAv_54fQ6fIIdKmlNYDWYz7SXFFJWCUevjqZCXrIxRhUV9zhEBoDmegxPxCI-jO6L1INfmoHhT7_tLwaV-YwKVTz9bu5gdYqY_5_rQF6VVGrMiYhMPHn41ccIJpWc613H95rjg" />
<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-container/90 text-on-primary font-label-sm text-label-sm backdrop-blur-sm">
            تزریق بیولوژیک پلاکت غلیظ
          </div>
</div>
<div className="w-full lg:w-7/12 flex flex-col text-right">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold">پروتکل درمانی شماره ۰۱</span>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="">ماندگاری: ۹ الی ۱۸ ماه</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary-container mb-3">
            پی‌آرپی زانو و مفاصل (Platelet Rich Plasma)
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify mb-6">
            درمان آرتروز و آسیب‌های غضروفی با فاکتورهای رشد اتولوگ استخراج شده از خون خود بیمار. این فرآیند با بهره‌گیری از کیت‌های بسته دارای گواهینامه معتبر، غلظت ۵ برابری پلاکت را فراهم آورده و فرایند بازسازی طبیعی فیبروبلاست‌ها و سلول‌های غضروفی را تحریک می‌کند.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">ترمیم غضروف آسیب‌دیده و منیسک</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">کاهش چشمگیر اصطکاک و خشکی مفصلی</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">تزریق تحت گاید سونوگرافی بدون خطا</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">بدون هیچ‌گونه ریسک آلرژی یا پس‌زدگی</span>
</div>
</div>
<div className="flex items-center gap-4 pt-4 mt-auto">
<Link className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-sm" href="tel:02166020308">

<span className="">مشاهده جزئیات</span>
</Link>
<span className="font-label-sm text-label-sm text-on-surface-variant">طول دوره: ۱ الی ۳ جلسه به فواصل ماهیانه</span>
</div>
</div>
</div>
</div>
{/*  2. Ozone Therapy Card  */}
<div className="service-card group bg-surface-pure rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-lg transition-all" data-category="spine biologic" style={{ display: activeTab === 'all' || activeTab === 'biologic' || activeTab === 'spine' ? 'block' : 'none' }}>
<div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
<div className="w-full lg:w-5/12 overflow-hidden rounded-2xl relative">
<img className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Medical oxygen-ozone generator device in medical physical rehabilitation clinic, medical staff preparing micro injection with precise millimeter syringes, slate and pristine clinical ambiance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdIJv3ZbxOyxHin0sz_qpC5yRYP-0BXwPBvTgmXGGB3XmtitU1CQ_MQJjZCfA5dly3ZiKHW1nDYQUlFdKRfIV59HBtcTnK_7D3hyzyuK_K0sjgES9GNVRwwSr73XQTqs6nPPYy2Byb-94v2LNhbIxWk00sz1p3_0vO5XYpS_Yqe2n5uFb1GYcxixfSOsA19uH7cWvg3WKivrL_ppHT7XPOpPFNAh0MycSqUMZpTAIWoFBSNbNiighLxg" />
<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-container/90 text-on-primary font-label-sm text-label-sm backdrop-blur-sm">
            ضدالتهاب بیوشیمیایی قدرتمند
          </div>
</div>
<div className="w-full lg:w-7/12 flex flex-col text-right">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold">پروتکل درمانی شماره ۰۲</span>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="">تسکین سریع درد در ساعات اولیه</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary-container mb-3">
            اوزون‌تراپی تخصصی (Medical Ozone Therapy)
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify mb-6">
            استفاده از ترکیب فعال O2-O3 با غلظت دارویی کالیبره‌شده برای کاهش سریع ادم پری‌رادیکولار در دیسک‌های کمری و گردنی، مهار واسطه‌های التهابی و اکسیژن‌رسانی عمیق به بافت‌های دچار ایسکمی اسکلتی-عضلانی.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">آزادسازی ریشه‌های عصب سیاتیک درگیر</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">افزایش متابولیسم و پاکسازی رادیکال‌های آزاد</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">مناسب بورسیت، شانه منجمد و تنیس البو</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">قابلیت ترکیب هم‌افزا با پلاسمای غنی</span>
</div>
</div>
<div className="flex items-center gap-4 pt-4 mt-auto">
<Link className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-sm" href="tel:02166020308">

<span className="">مشاهده جزئیات</span>
</Link>
<span className="font-label-sm text-label-sm text-on-surface-variant">انجام در مطب بدون نیاز به استراحت طولانی</span>
</div>
</div>
</div>
</div>
{/*  3. Stem Cell Card  */}
<div className="service-card group bg-surface-pure rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-lg transition-all" data-category="biologic" style={{ display: activeTab === 'all' || activeTab === 'biologic' ? 'block' : 'none' }}>
<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
<div className="w-full lg:w-5/12 overflow-hidden rounded-2xl relative">
<img className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Advanced regenerative stem cell medicine laboratory background, high-tech microscopic view of mesenchymal cells differentiating into cartilage, aesthetic deep cyan and teal hues" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwboHzW_4EZOZ_HvFhgbEqgOIb-Agh4SpXHj6ko40avZfFmgniFkrEL6pKNdM5ayyvIKj4Sd95j00rMjnV7Lfpx38kVvqWRdNWDHLVHPFAanOb41KFN7Jiz07918WtldTdL0RqIT8D29qnMnBvsg96MP29Eo887YvonyVDJxPHLAdY4DHxTMEssdRrU3DmATLdKCmG6ZQNQOo_m49wUPF_gk7_JSA0Fy67EJIz4K3JE47_5J84E2IdcA" />
<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-container/90 text-on-primary font-label-sm text-label-sm backdrop-blur-sm">
            قله طب بازساختی مفاصل
          </div>
</div>
<div className="w-full lg:w-7/12 flex flex-col text-right">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold">پروتکل درمانی شماره ۰۳</span>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="">ماندگاری طولانی‌مدت (چندین سال)</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary-container mb-3">
            تزریق سلول‌های بنیادی و طب بازساختی (Regenerative Stem Cell)
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify mb-6">
            پیشرفته‌ترین متد ارتوپدی مداخله‌ای جهت احیای بافت‌های تحلیل‌رفته مفصلی. مناسب مراجعینی که به علت آرتروز گرید ۳ و ۴ کاندید عمل سنگین تعویض مفصل زانو (آرتروپلاستی) هستند ولی در پی حفظ مفصل بیولوژیک و طبیعی خود می‌باشند.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">جایگزین ایمن برای جراحی‌های تهاجمی باز</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">استفاده از منابع مزانشیمی اتولوگ</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">تحریک ترشح ماتریکس خارج سلولی غضروف</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">ارزیابی پیشرفته MRI قبل و بعد از درمان</span>
</div>
</div>
<div className="flex items-center gap-4 pt-4 mt-auto">
<Link className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-sm" href="tel:02166020308">

<span className="">مشاهده جزئیات</span>
</Link>
<span className="font-label-sm text-label-sm text-on-surface-variant">نیازمند معاینه و بررسی دقیق کلیشه‌های رادیولوژی</span>
</div>
</div>
</div>
</div>
{/*  4. Orthokine Therapy Card  */}
<div className="service-card group bg-surface-pure rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-lg transition-all" data-category="biologic spine" style={{ display: activeTab === 'all' || activeTab === 'biologic' || activeTab === 'spine' ? 'block' : 'none' }}>
<div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
<div className="w-full lg:w-5/12 overflow-hidden rounded-2xl relative">
<img className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Orthokine therapy medical device incubating patient autologous conditioned serum in precise 37 degree temperature incubator, clean clinical setting with cool grey and teal accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGwBGVEze0Y4QMEbQzFtzUDU7oNeSGFAaipAg5eArl6atTwPdWBqNcb6Dk9Y4wC5jYtEh6buiMRnuSvMUyfmsilfXbGjir12X0k8amH9YIy4b5OnblcpARQxAyCx83fnBI22tcgbxRnSE2hHIq94YMHU4MMA1SaJlzOtvUPoiZ_-qDwGo8moy-tKkXllZ9A2fh3flqmskw0KmdPK3Cej_BrvLMso0sblGcnzmZAoxxELNl-dLcxA_7Ug" />
<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-container/90 text-on-primary font-label-sm text-label-sm backdrop-blur-sm">
            مهار بیولوژیک اینترلوکین-۱
          </div>
</div>
<div className="w-full lg:w-7/12 flex flex-col text-right">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold">پروتکل درمانی شماره ۰۴</span>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="">توقف روند تخریب غضروف</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary-container mb-3">
            ارتوکین‌تراپی (Orthokine Therapy)
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify mb-6">
            سرم شرطی‌شده اتولوگ (ACS) حاوی غلظت بالای آنتاگونیست گیرنده اینترلوکین-۱ (IL-1Ra). این فناوری نوین آلمانی به طور مستقیم روند التهاب مخرب آرتروز را خاموش کرده و درد مفاصل زانو، لگن و دیسکوپاتی‌های گردنی را به شکل بادوام مهار می‌کند.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">مهارکننده پروتئین اصلی مسئول تخریب بافت</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">استخراج شده منحصراً از خون خود بیمار</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">مناسب ورزشکاران حرفه‌ای و آسیب‌های لیگامانی</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">تسکین علائم تا بیش از ۲ سال</span>
</div>
</div>
<div className="flex items-center gap-4 pt-4 mt-auto">
<Link className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-sm" href="tel:02166020308">

<span className="">مشاهده جزئیات</span>
</Link>
<span className="font-label-sm text-label-sm text-on-surface-variant">برنامه تزریق منظم هفتگی طبق پروتکل استاندارد</span>
</div>
</div>
</div>
</div>
{/*  5. EMG / NCS Card  */}
<div className="service-card group bg-surface-pure rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-lg transition-all" data-category="electro spine" style={{ display: activeTab === 'all' || activeTab === 'electro' || activeTab === 'spine' ? 'block' : 'none' }}>
<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
<div className="w-full lg:w-5/12 overflow-hidden rounded-2xl relative">
<img className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Neurological examination using electromyography EMG machine, patient hand being tested with precise electrodes, digital nerve conduction waves on computer monitor, clean medical office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzzE6Mk8v0s9c7NBFaYFhlDi4ceJSnvKmDLQIgLph2mRLcxSUORZt0AQ4-_7CWfkYQbwF8mx8ZNvT7fVTCTLZ67Y8umgmDZ3de6TisdxO0oImTGBT_ux3jfC0gj2zje5U2EbAaXhILuO4NZ27P5EPiLWoZgkaMIOG4dqmoKcH_buSmyqYiMXROG0eimF1YOImT5Ctj79z8JNPu0-4r7MHAkUxGzjjj6Z6Da0vBhoVZwP5CwdR4102PAg" />
<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-container/90 text-on-primary font-label-sm text-label-sm backdrop-blur-sm">
            تست تشخیصی فوق‌تخصصی
          </div>
</div>
<div className="w-full lg:w-7/12 flex flex-col text-right">
<div className="flex items-center justify-between mb-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold">پروتکل درمانی شماره ۰۵</span>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="">تفسیر مستقیم توسط متخصص</span>
</div>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary-container mb-3">
            نوار عصب و عضله (EMG / NCS)
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify mb-6">
            آزمون الکترودیاگنوستیک کامل جهت تعیین محل دقیق تحت فشار قرار گرفتن عصب‌ها، تشخیص تمایزی دیسک ستون فقرات از درگیری‌های موضعی مانند سندروم تونل کارپال (گیر افتادگی عصب مچ دست)، نوروپاتی‌های دیابتی و آسیب‌های شبکه بازویی.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">تشخیص قطعی شدت درگیری ریشه‌های نخاعی</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">سنجش دقیق سرعت هدایت عصبی حرکتی و حسی</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">تحویل گزارش تحلیلی کامل در همان جلسه</span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded-full bg-status-success/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-status-success text-[14px]">check</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface">استفاده از سوزن‌های یک‌بار مصرف فوق‌العاده ظریف</span>
</div>
</div>
<div className="flex items-center gap-4 pt-4 mt-auto">
<Link className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-sm" href="tel:02166020308">

<span className="">مشاهده جزئیات</span>
</Link>
<span className="font-label-sm text-label-sm text-on-surface-variant">انجام تست در محیطی آرام و بدون معطلی</span>
</div>
</div>
</div>
</div>
</section>
{/*  Comparison Section: Non-Surgical vs Open Surgery  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 w-full" data-aos="fade-up">
<div className="bg-surface-pure rounded-3xl p-8 sm:p-12 shadow-sm overflow-hidden relative">
<div className="max-w-2xl mb-10 text-right">
<span className="font-label-sm text-label-sm text-secondary tracking-wide uppercase font-bold">انتخاب هوشمندانه برای سلامتی</span>
<h2 className="font-headline-xl text-headline-xl text-primary-container mt-1">
          چرا رویکرد غیرجراحی ارجحیت دارد؟
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
          جدول مقایسه‌ای مزایای درمان‌های بازساختی کلینیک دکتر ناصح یوسفی در مقایسه با اعمال جراحی باز تهاجمی
        </p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-right border-collapse">
<thead>
<tr className="bg-surface-container-low rounded-xl">
<th className="p-4 font-title-md text-title-md text-primary-container rounded-r-xl">شاخص مقایسه</th>
<th className="p-4 font-title-md text-title-md text-secondary">روش‌های بازساختی و طب فیزیکی</th>
<th className="p-4 font-title-md text-title-md text-on-surface-variant rounded-l-xl">جراحی‌های باز مفصل و ستون فقرات</th>
</tr>
</thead>
<tbody className="divide-y-0">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-4 font-label-lg text-label-lg text-primary-container flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">healing</span>
                بیهوشی و بستری بیمارستانی
              </td>
<td className="p-4 font-body-md text-body-md text-status-success font-semibold">
                بدون نیاز به بستری، انجام سرپایی با بی‌حسی موضعی
              </td>
<td className="p-4 font-body-md text-body-md text-on-surface-variant">
                بیهوشی عمومی، بستری چند روزه و ریسک عوارض تنفسی
              </td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-surface-container-low/50 transition-colors">
<td className="p-4 font-label-lg text-label-lg text-primary-container flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">pace</span>
                دوره نقاهت و بازگشت به کار
              </td>
<td className="p-4 font-body-md text-body-md text-status-success font-semibold">
                فوری تا ۴۸ ساعت، بازگشت روز بعد به فعالیت‌های عادی
              </td>
<td className="p-4 font-body-md text-body-md text-on-surface-variant">
                دوره استراحت طولانی ۲ الی ۶ ماه به همراه درد شدید
              </td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="p-4 font-label-lg text-label-lg text-primary-container flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">fingerprint</span>
                حفظ آناتومی و بافت طبیعی
              </td>
<td className="p-4 font-body-md text-body-md text-status-success font-semibold">
                حفظ ۱۰۰٪ ساختار طبیعی استخوان و مفصل با تحریک خودترمیمی
              </td>
<td className="p-4 font-body-md text-body-md text-on-surface-variant">
                برش غضروف و جایگزینی با قطعات فلزی مصنوعی (پروتز)
              </td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-surface-container-low/50 transition-colors">
<td className="p-4 font-label-lg text-label-lg text-primary-container flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">shield</span>
                ریسک عفونت و خطرات جانبی
              </td>
<td className="p-4 font-body-md text-body-md text-status-success font-semibold">
                تقریباً صفر به دلیل استفاده از سلول‌های خود بیمار و کیت‌های استریل
              </td>
<td className="p-4 font-body-md text-body-md text-on-surface-variant">
                ریسک ترومبوز ورید عمقی (DVT)، چسبندگی و عفونت بیمارستانی
              </td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  FAQ Accordion Section  */}
<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full" data-aos="fade-up">
<div className="text-center mb-10">
<span className="font-label-sm text-label-sm text-secondary tracking-wide uppercase font-bold">پاسخ به ابهامات متداول مراجعین</span>
<h2 className="font-headline-xl text-headline-xl text-primary-container mt-1">
        پرسش‌های پرتکرار در مورد درمان‌ها
      </h2>
</div>
<div className="space-y-4" id="faq-accordion">
  {faqs.map((faq, idx) => {
    const isOpen = openFaq === idx;
    return (
      <div
        key={idx}
        className={`bg-surface-pure rounded-2xl p-5 sm:p-6 shadow-sm border transition-all duration-300 ${
          isOpen
            ? 'border-secondary/40 shadow-md ring-1 ring-secondary/20'
            : 'border-border-crisp/60 hover:border-secondary/30 hover:shadow'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpenFaq(isOpen ? null : idx)}
          className="w-full flex items-center justify-between gap-4 text-right cursor-pointer select-none focus:outline-none"
          aria-expanded={isOpen}
        >
          <h4 className="font-title-md text-[15px] sm:text-[17px] text-primary-container font-semibold">
            {faq.q}
          </h4>
          <span
            className={`material-symbols-outlined text-secondary transition-transform duration-300 shrink-0 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            expand_more
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-surface-container-high'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-justify font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
</section>
{/*  Big Call to Action (CTA Banner)  */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full" id="booking-section" data-aos="fade-up">
<div className="bg-primary-container rounded-3xl p-8 sm:p-14 text-on-primary shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10"><div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary/20 blur-2xl pointer-events-none"></div><div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-surface-pure/5 blur-3xl pointer-events-none"></div><div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10"><div className="lg:col-span-6 flex flex-col text-right"><span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-md bg-surface-pure/10 text-accent-highlight font-label-sm text-label-sm mb-4 border border-surface-pure/10"><span className="material-symbols-outlined text-[16px]">calendar_clock</span><span className="">نوبت‌دهی آنلاین و مشاوره تخصصی</span></span><h2 className="font-headline-xl sm:font-display-lg text-headline-xl sm:text-display-lg text-surface-pure leading-tight mb-4">آماده بازگشت به زندگی بدون درد هستید؟</h2><p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-surface-container-highest/80 leading-relaxed text-justify mb-8">پیش از تصمیم‌گیری برای جراحی‌های سنگین مفصلی و ستون فقرات، مدارک و سوابق پزشکی خود را توسط دکتر ناصح یوسفی در کلینیک تخصصی بررسی نمایید تا از کم‌تهاجم‌ترین و جدیدترین روش‌های طب بازساختی بهره‌مند شوید.</p><div className="flex flex-wrap items-center gap-4 pt-2 border-t border-surface-pure/10"><Link className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-surface-pure/10 hover:bg-surface-pure/20 text-surface-pure font-label-lg text-label-lg transition-all border border-surface-pure/20" href="tel:02166020308"><span className="material-symbols-outlined text-accent-highlight text-[20px]">call</span><span dir="ltr" className="">۰۲۱-۶۶۰۲۰۳۰۸</span></Link><div className="inline-flex items-center gap-2 text-surface-container-highest/80 font-label-md text-label-md"><span className="material-symbols-outlined text-accent-highlight text-[18px]">place</span><span className="">تهران، روبروی مترو شادمان، ساختمان پزشکان فجر</span></div></div></div><div className="lg:col-span-6 w-full"><form className="bg-surface-pure/10 backdrop-blur-xl border border-surface-pure/15 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-xl text-right" onSubmit={(e) => e.preventDefault()}><div className="flex items-center justify-between pb-3 border-b border-surface-pure/10"><h3 className="font-headline-sm text-headline-sm text-surface-pure flex items-center gap-2"><span className="material-symbols-outlined text-accent-highlight text-[22px]">edit_calendar</span><span className="">درخواست نوبت و مشاوره فوری</span></h3><span className="font-label-sm text-label-sm text-accent-highlight bg-surface-pure/10 px-2.5 py-1 rounded-full">پاسخگویی سریع</span></div><div className="flex flex-col gap-1.5"><label className="font-label-md text-label-md text-surface-container-high">نام و نام خانوادگی</label><div className="relative flex items-center"><input className="w-full h-11 px-4 pr-10 rounded-xl bg-surface-pure/15 text-surface-pure placeholder-surface-container-highest/50 border border-surface-pure/20 focus:outline-none focus:border-accent-highlight text-body-sm transition-all" placeholder="مثال: علی محمدی" type="text" /><span className="material-symbols-outlined absolute right-3 text-surface-container-highest/60 text-[18px]">person</span></div></div><div className="flex flex-col gap-1.5"><label className="font-label-md text-label-md text-surface-container-high">شماره موبایل</label><div className="relative flex items-center"><input className="w-full h-11 px-4 pr-10 rounded-xl bg-surface-pure/15 text-surface-pure placeholder-surface-container-highest/50 border border-surface-pure/20 focus:outline-none focus:border-accent-highlight text-body-sm transition-all text-right" dir="rtl" placeholder="۰۹۱۲۳۴۵۶۷۸۹" type="tel" /><span className="material-symbols-outlined absolute right-3 text-surface-container-highest/60 text-[18px]">smartphone</span></div></div><div className="flex flex-col gap-1.5"><label className="font-label-md text-label-md text-surface-container-high">انتخاب خدمت یا درمان مورد نظر</label><div className="relative flex items-center"><select className="w-full h-11 px-4 pr-10 rounded-xl bg-surface-container-high/20 text-surface-pure border border-surface-pure/20 focus:outline-none focus:border-accent-highlight text-body-sm transition-all appearance-none cursor-pointer"><option className="bg-primary-container text-surface-pure" value="">انتخاب درمان یا خدمت مورد نظر...</option><option className="bg-primary-container text-surface-pure" value="prp">تزریق پی‌آرپی زانو و مفاصل (PRP)</option><option className="bg-primary-container text-surface-pure" value="ozone">اوزون‌تراپی تخصصی دیسک و مفاصل</option><option className="bg-primary-container text-surface-pure" value="stem-cell">تزریق سلول‌های بنیادی و بازساختی</option><option className="bg-primary-container text-surface-pure" value="orthokine">سرم ارتوکین‌تراپی آلمانی (Orthokine)</option><option className="bg-primary-container text-surface-pure" value="emg">نوار عصب و عضله (EMG / NCS)</option><option className="bg-primary-container text-surface-pure" value="consultation">مشاوره و معاینه عمومی طب فیزیکی</option></select><span className="material-symbols-outlined absolute right-3 text-surface-container-highest/60 text-[18px] pointer-events-none">medical_services</span><span className="material-symbols-outlined absolute left-3 text-surface-container-highest/60 text-[18px] pointer-events-none">expand_more</span></div></div><button className="w-full h-12 mt-2 rounded-xl bg-accent-highlight text-tertiary-container font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.99] transition-all shadow-lg" type="submit"><span className="material-symbols-outlined text-[20px]">send</span><span className="">ثبت درخواست مشاوره و نوبت سریع</span></button><div className="flex items-center justify-center gap-1.5 pt-1 text-surface-container-highest/70 font-label-sm text-label-sm"><span className="material-symbols-outlined text-[15px] text-accent-highlight">shield</span><span className="">اطلاعات شما کاملاً محرمانه نزد کلینیک محفوظ است. تماس حداکثر ظرف ۲ ساعت کاری.</span></div></form></div></div></div>
</section>
</div>
{/*  Simple Vanilla Micro-interactions  */}

    </div>
  );
}
