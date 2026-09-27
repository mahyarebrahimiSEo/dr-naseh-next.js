// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {

    const searchInput = document.getElementById('article-search-input');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.article-card');
    const emptyState = document.getElementById('empty-state');
    const countEl = document.getElementById('articles-count');
    const resetBtn = document.getElementById('reset-filter-btn');

    let currentCategory = "all";
    let currentQuery = "";

    function filterArticles() {
      let visibleCount = 0;

      articles.forEach(card => {
        const cardCategories = (card.getAttribute('data-category') || "").toLowerCase();
        const cardText = card.innerText.toLowerCase();

        const matchesCategory = (currentCategory === "all") || cardCategories.includes(currentCategory);
        const matchesQuery = !currentQuery || cardText.includes(currentQuery);

        if (matchesCategory && matchesQuery) {
          card.style.display = "flex";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (countEl) {
        countEl.textContent = `${visibleCount} مقاله یافت شد`;
      }

      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.remove('hidden');
          emptyState.classList.add('flex');
        } else {
          emptyState.classList.add('hidden');
          emptyState.classList.remove('flex');
        }
      }
    }

    // Search event
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentQuery = e.target.value.trim().toLowerCase();
        filterArticles();
      });
    }

    // Category tab click
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => {
          b.classList.remove('bg-primary-container', "text-on-primary");
          b.classList.add('bg-surface-pure', "text-on-surface-variant");
        });

        btn.classList.remove('bg-surface-pure', "text-on-surface-variant");
        btn.classList.add('bg-primary-container', "text-on-primary");

        currentCategory = btn.getAttribute('data-cat') || "all";
        filterArticles();
      });
    });

    // Reset Button on empty state
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = "";
        currentQuery = "";
        const firstCat = document.querySelector('.category-btn[data-cat="all"]');
        if (firstCat) firstCat.click();
      });
    }
  
}, []);
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col w-full">
{/*  Top Hero & Search / Taxonomy Area  */}
<section className="relative w-full overflow-hidden bg-surface-container-low/60 pt-10 pb-16">
<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-accent-highlight/15 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col gap-8">
{/*  Breadcrumb & Badge  */}
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">



</div>
{/*  Title & Editorial Subtext  */}
<div className="flex flex-col items-center justify-center text-center gap-6"><div className="max-w-3xl flex flex-col items-center gap-3 text-center"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm"><span className="material-symbols-outlined text-[16px]">medical_services</span><span className="">دانش‌نامه بالینی و ارتوپدی بازساختی</span></div><h1 className="font-headline-xl text-headline-xl text-primary-container tracking-tight text-center">مقالات آموزشی و پزشکی</h1><p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-center">تازه‌ترین دستاوردها، پروتکل‌های علمی و راهنماهای کاربردی طب فیزیکی، توانبخشی و ارتوپدی بازساختی به قلم و نظارت مستقیم دکتر ناصح یوسفی جهت افزایش آگاهی مراجعین و بیماران گرامی.</p></div></div>
{/*  Search & Filter Controls  */}
<div className="flex flex-col items-center justify-center gap-4 pt-4"><div className="relative w-full max-w-xl"><input className="w-full h-12 pr-11 pl-4 rounded-xl bg-surface-pure text-primary-container font-body-sm text-body-sm shadow-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/25 transition-all" id="article-search-input" placeholder="جستجوی عنوان بیماری، روش درمان، علائم بالینی..." type="text" /><span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px]">search</span></div><div className="flex items-center gap-2 self-center"></div></div>
{/*  Horizontal Filter Pills  */}
<div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-2 px-4 scrollbar-none justify-start sm:justify-center w-full" id="categories-container">
<button className="category-btn whitespace-nowrap px-4 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all" data-cat="all">
          همه مقالات
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2.5 rounded-xl bg-surface-pure hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shadow-sm transition-all" data-cat="knee">
          درمان‌های نوین زانو
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2.5 rounded-xl bg-surface-pure hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shadow-sm transition-all" data-cat="spine">
          دیسک و ستون فقرات
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2.5 rounded-xl bg-surface-pure hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shadow-sm transition-all" data-cat="prp">
          پی‌آرپی و سلول‌درمانی
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2.5 rounded-xl bg-surface-pure hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shadow-sm transition-all" data-cat="emg">
          نوار عصب و عضله
        </button>
<button className="category-btn whitespace-nowrap px-4 py-2.5 rounded-xl bg-surface-pure hover:bg-surface-container text-on-surface-variant font-label-md text-label-md shadow-sm transition-all" data-cat="exercise">
          حرکات اصلاحی و ورزش‌درمانی
        </button>
</div>
</div>
</section>
{/*  Main Grid Section  */}
<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12" data-aos="fade-up">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-grid">
{/*  Article Card 1  */}
<article className="article-card group flex flex-col bg-surface-pure rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/30 border border-transparent transition-all duration-300" data-category="prp knee">
<div className="relative w-full h-56 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Doctor preparing high-concentration autologous platelet rich plasma PRP injection for knee joint osteoarthritis under modern ultrasound guidance in a luxury sterile clinical procedure room, gentle teal and navy ambient medical lighting, professional medical photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjmXc19icFrkXuv3bbP0__qX4L5ghxDhlduH1eWdYSiJPOg8Urqq-2KGDkwGlfI7fYXnif1KcpKOZc9RzAc42g7h1VfySJ8OcXFNb-E5F1yWex6cfzwUG_GbrtsM0qv5FdwU7NEaNHu-jvU-2VluDQHJOvSKQlxaNhhs7rF-Jj3l7BMdWop_GtX0o8NDW5RuCNVQMD6OU1N21KAu_BhrP0kyl8uwZSmh7OQmUvQMoqB1WWGn3b_wnUpg" />
<div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md font-label-sm text-label-sm text-secondary font-semibold shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent-highlight"></span>
<span className="">پی‌آرپی و سلول‌درمانی</span>
</div>
<div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-lg bg-primary-container/85 text-on-primary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="">۶ دقیقه</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-5">
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span className="">۱۵ اردیبهشت ۱۴۰۳</span>
<span className="">•</span>
<span className="">دکتر ناصح یوسفی</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary-container group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
              درمان غیرجراحی پارگی و آرتروز زانو با تزریق پی‌آرپی (PRP) با خلوص بالا
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3 text-justify">
              مقایسه اثربخشی بالینی پلاسمای غنی از پلاکت با سایر روش‌های محافظه‌کارانه و بررسی نقش آن در کاهش نیاز به جراحی تعویض مفصل بر اساس آخرین شواهد بالینی سال ۲۰۲۴.
            </p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-surface-container">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-secondary/30 bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all shadow-sm group-hover:translate-x-[-4px]"><span className="">مطالعه مقاله تخصصی</span><span className="material-symbols-outlined text-[18px]">arrow_back</span></div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors text-[20px]">bookmark_border</span>
</div>
</div>
</article>
{/*  Article Card 2  */}
<article className="article-card group flex flex-col bg-surface-pure rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/30 border border-transparent transition-all duration-300" data-category="emg">
<div className="relative w-full h-56 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of a modern electrodiagnostic EMG nerve conduction study equipment monitor with neurological diagnostic waveform graphs, clinical physician placing sensitive electrodes on patient wrist and forearm, pristine high-tech aesthetic medical suite" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYtSW_GziS50Bfmvj5NM3cBe9Cx-laA-xTw42EUVhxhxu9flO3F4YSwYnFevxOdl6wk1Nhyxni9dlTt9_xwrluwwfp4IAmrUjIxkfkqd_GopO9Kqm7Z3i7eKP8IUZzeuw9H0tnMXjxQs5OeTGBJJ5vDyGv7lJQrPPCulQSoUFN0ptcI-zzETNYb8zor5GVwwBm4eZ7NBZ4XCgHBVuGevp_r_yUvVW_NFIy74Pg8jytqZqqoUxWEfPDnQ" />
<div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md font-label-sm text-label-sm text-secondary font-semibold shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent-highlight"></span>
<span className="">نوار عصب و عضله</span>
</div>
<div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-lg bg-primary-container/85 text-on-primary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="">۸ دقیقه</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-5">
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span className="">۲۸ فروردین ۱۴۰۳</span>
<span className="">•</span>
<span className="">دکتر ناصح یوسفی</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary-container group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
              نوار عصب و عضله (EMG/NCS) چه زمانی برای بیمار ضروری است؟
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3 text-justify">
              راهنمای کامل تشخیصی درگیری عصب سیاتیک، سندرم تونل کارپال مچ دست و دیسکوپاتی‌های گردنی همراه با تحلیل نحوه تفسیر نتایج الکترودیاگنوز در مطب.
            </p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-surface-container">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-secondary/30 bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all shadow-sm group-hover:translate-x-[-4px]"><span className="">مطالعه مقاله تخصصی</span><span className="material-symbols-outlined text-[18px]">arrow_back</span></div>

</div>
</div>
</article>
{/*  Article Card 3  */}
<article className="article-card group flex flex-col bg-surface-pure rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/30 border border-transparent transition-all duration-300" data-category="spine">
<div className="relative w-full h-56 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="3D luminous medical anatomical model of human lumbar vertebrae showing herniated intervertebral disc with nerve root compression and targeted epidural therapeutic intervention path, clean studio lighting with soft slate and teal highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3zbFfZO-iZsOPkVAaiW7MJ2O8S7t8BR0Gj93Ja-sXcX5QwXAKFT4c9nxKnvjnqGN1L4ovTISr7j8iuwvSOYynNYT1lnnbG1UV6kOFXogAI-RPvTYntM__htyia1a7GgwYaHc6FM9gjjiByYy3qPZozLRqU34ixXvq_2SnhFlKvKDnR9W0GTx7ZUzdDxaAMiQx0PbR0stws--dsFkZaHTL7RU74wOnn6hjbTF2smQEmaX3O3EWZ8PPw" />
<div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md font-label-sm text-label-sm text-secondary font-semibold shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent-highlight"></span>
<span className="">دیسک و ستون فقرات</span>
</div>
<div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-lg bg-primary-container/85 text-on-primary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="">۵ دقیقه</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-5">
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span className="">۱۰ فروردین ۱۴۰۳</span>
<span className="">•</span>
<span className="">دکتر ناصح یوسفی</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary-container group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
              درمان بدون جراحی فتق دیسک کمر: روش‌های مداخله‌ای کم‌تهاجمی
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3 text-justify">
              مروری بر تزریقات اپیدورال ترنس‌فورامینال، پرولوتراپی تخصصی و توانبخشی هدفمند عضلات مرکزی ستون فقرات برای رفع فشار مستقیم از ریشه‌های عصبی ملتهب.
            </p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-surface-container">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-secondary/30 bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all shadow-sm group-hover:translate-x-[-4px]"><span className="">مطالعه مقاله تخصصی</span><span className="material-symbols-outlined text-[18px]">arrow_back</span></div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors text-[20px]">bookmark_border</span>
</div>
</div>
</article>
{/*  Article Card 4  */}
<article className="article-card group flex flex-col bg-surface-pure rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/30 border border-transparent transition-all duration-300" data-category="prp">
<div className="relative w-full h-56 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Microscopic conceptual visualization of biological tendon regeneration, collagen fiber bundle proliferation and ligament healing induced by prolotherapy glucose solution, serene teal medical science backdrop with crystalline molecular clarity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9a2-5G9sr41gERH34ZK5nJJZcfB_UAh0hrA5m9VUGMMCmT1J1A4e6MYG9hK4nZdRLf-aBC34eyyk7_L-Tboku-_4Id1OH9ep7dqdxd5F5QTb9nBN5SNOyT5vx2iZ-jGXaYs1RhyhjUk2ASNlQsJ3scag3gwI7pSx0sWTJ5nO67eKU9NVS_lkL5-j0i9M0w0OZv8s6Yn9v1Y5MC6GFNrvpArOlo79UVE0MQ7nU5EuvB1btr0qrXig2dw" />
<div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md font-label-sm text-label-sm text-secondary font-semibold shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent-highlight"></span>
<span className="">پرولوتراپی و تاندون</span>
</div>
<div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-lg bg-primary-container/85 text-on-primary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="">۷ دقیقه</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-5">
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span className="">۲۰ اسفند ۱۴۰۲</span>
<span className="">•</span>
<span className="">دکتر ناصح یوسفی</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary-container group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
              پرولوتراپی (Prolotherapy) چیست و چگونه به ترمیم رباط و تاندون کمک می‌کند؟
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3 text-justify">
              مکانیسم بیولوژیک تحریک بازسازی بافت همبند در آسیب‌های شانه، تاندونوپاتی آشیل، آسیب‌های ورزشی مزمن و تسریع ترمیم بافت‌های بدون خونرسانی کافی.
            </p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-surface-container">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-secondary/30 bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all shadow-sm group-hover:translate-x-[-4px]"><span className="">مطالعه مقاله تخصصی</span><span className="material-symbols-outlined text-[18px]">arrow_back</span></div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors text-[20px]">bookmark_border</span>
</div>
</div>
</article>
{/*  Article Card 5  */}
<article className="article-card group flex flex-col bg-surface-pure rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/30 border border-transparent transition-all duration-300" data-category="knee spine">
<div className="relative w-full h-56 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Doctor performing high-resolution musculoskeletal ultrasound evaluation on a patient's shoulder and rotatory cuff in an elegant modern clinical office, live acoustic anatomy visible on the premium monitor, pristine atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUfs9EJ-Tu8XHFwBmlYUQvdZcb5fveMCigKovjn3wRlLSyRh3AFcvotZY2Gd0Qaz3C6sIq4nQ2DpGDkAg5KJoaGT0V1uq77WDJ6KrDvYvE7sOP4bByXWCVB13S-o6w4-c13_0QRvdbuCy0yEmFGWz1mDesAcNjizMvmDeUVt0YZOVw5EDi0sOeI0Rrx4UO07Iau3sE23kRZm3vhEyh8TvBOY2emDhuWNrACesD97VpV4jCxmCRRD5xJA" />
<div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md font-label-sm text-label-sm text-secondary font-semibold shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent-highlight"></span>
<span className="">سونوگرافی مفاصل</span>
</div>
<div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-lg bg-primary-container/85 text-on-primary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="">۴ دقیقه</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-5">
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span className="">۵ اسفند ۱۴۰۲</span>
<span className="">•</span>
<span className="">دکتر ناصح یوسفی</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary-container group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
              اهمیت سونوگرافی اسکلتی-عضلانی در ارزیابی دقیق دردهای مفصلی
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3 text-justify">
              چرا تزریقات هدفمند مفاصل باید همواره تحت هدایت مستقیم دستگاه اولتراسوند انجام شوند تا ضریب خطای درمان به صفر رسیده و محل دقیق آسیب هدف‌گیری شود؟
            </p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-surface-container">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-secondary/30 bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all shadow-sm group-hover:translate-x-[-4px]"><span className="">مطالعه مقاله تخصصی</span><span className="material-symbols-outlined text-[18px]">arrow_back</span></div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors text-[20px]">bookmark_border</span>
</div>
</div>
</article>
{/*  Article Card 6  */}
<article className="article-card group flex flex-col bg-surface-pure rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/30 border border-transparent transition-all duration-300" data-category="exercise spine">
<div className="relative w-full h-56 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Person performing gentle clinical corrective physical therapy exercises for neck and cervical spine posture improvement in a minimalist bright rehabilitation studio, ergonomic stretching posture with soft neutral tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZxb5Ah1LPbdh6FKX6Hj3Km2mRgx3kx95aEmUT5isMJQ1n7N_v2bWuHxvdu0zyOQW4LHsUS-k-Kp6d-r43qYljujZkCaN5IiIgKAtW9NTlilAcb-07TGAumMbcwZeH0LIYLCssouudXz5c-lpJoOmQNGqd4ikvKernPH-yIpQfZn3yucgLUQYXKFuZvFOIECxpCas19xzPfeF1AoXps2ZRdn1OTBvh3mTtNa-7mlVk44uiEtbqTtvB3w" />
<div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md font-label-sm text-label-sm text-secondary font-semibold shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent-highlight"></span>
<span className="">حرکات اصلاحی و توانبخشی</span>
</div>
<div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-lg bg-primary-container/85 text-on-primary font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="">۵ دقیقه</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-5">
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span className="">۱۸ بهمن ۱۴۰۲</span>
<span className="">•</span>
<span className="">دکتر ناصح یوسفی</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary-container group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
              تمرین‌درمانی و برنامه توانبخشی خانگی برای تسکین قطعی درد گردن
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3 text-justify">
              پروتکل‌های ارگونومی محیط کار و حرکات کششی موثر جهت برطرف کردن اسپاسم عضلانی مکرر و اصلاح پوسچر ناشی از کار مداوم با رایانه و تلفن همراه.
            </p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-surface-container">
<div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-secondary/30 bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all shadow-sm group-hover:translate-x-[-4px]"><span className="">مطالعه مقاله تخصصی</span><span className="material-symbols-outlined text-[18px]">arrow_back</span></div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors text-[20px]">bookmark_border</span>
</div>
</div>
</article>
</div>
{/*  Empty State (Hidden by default)  */}
<div className="hidden flex-col items-center justify-center py-20 px-4 text-center bg-surface-pure rounded-2xl mt-8" id="empty-state">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-4">
<span className="material-symbols-outlined text-[32px]">article</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary-container mb-2">مقاله‌ای با این مشخصات یافت نشد</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mb-6">
        لطفاً واژه کلیدی دیگری را جستجو کنید یا فیلتر دسته‌بندی را بر روی «همه مقالات» قرار دهید.
      </p>
<button className="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-colors" id="reset-filter-btn">
        مشاهده تمام مقالات
      </button>
</div>
{/*  Interactive Pagination  */}
<div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-surface-container">
<div className="font-label-md text-label-md text-on-surface-variant order-2 sm:order-1">
        صفحه <span className="font-bold text-primary-container">۱</span> از ۳ (مجموعه مقالات آرشیو کلینیک)
      </div>
<div className="flex items-center gap-2 order-1 sm:order-2" id="pagination-controls">
<button className="w-10 h-10 rounded-xl bg-surface-pure text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed" disabled={true}>
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
<button className="w-10 h-10 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md flex items-center justify-center shadow-sm">
          ۱
        </button>
<button className="w-10 h-10 rounded-xl bg-surface-pure text-primary-container hover:bg-surface-container font-label-md text-label-md flex items-center justify-center shadow-sm transition-colors">
          ۲
        </button>
<button className="w-10 h-10 rounded-xl bg-surface-pure text-primary-container hover:bg-surface-container font-label-md text-label-md flex items-center justify-center shadow-sm transition-colors">
          ۳
        </button>
<button className="w-10 h-10 rounded-xl bg-surface-pure text-primary-container hover:bg-surface-container flex items-center justify-center transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
</div>
</div>
</section>
{/*  Editorial Medical Newsletter & Consultation Callout  */}
<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20" data-aos="fade-up">
<div className="relative overflow-hidden rounded-3xl bg-primary-container text-on-primary p-8 md:p-12 shadow-xl">
{/*  Background Ambient Glow  */}
<div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-secondary/30 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-accent-highlight/20 blur-3xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/*  Text & Authority Info  */}
<div className="lg:col-span-7 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-pure/10 text-accent-highlight font-label-sm text-label-sm self-start">
<span className="material-symbols-outlined text-[16px]">mark_email_read</span>
<span className="">خبرنامه تخصصی سلامت مفاصل و اسکلت</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-surface-pure leading-tight">
            دریافت جدیدترین یافته‌های علمی و دستورالعمل‌های توانبخشی در ایمیل شما
          </h2>
<p className="font-body-sm text-body-sm text-surface-container-highest/80 leading-relaxed text-justify sm:text-right">
            با عضویت در خبرنامه ماهانه کلینیک دکتر ناصح یوسفی، مقالات جدید، ویدئوهای تمرین‌درمانی و توصیه‌های پیشگیرانه مرتبط با آرتروز، دیسک کمر و تاندون‌ها را بدون هرزنامه دریافت کنید.
          </p>
<div className="flex flex-wrap items-center gap-6 pt-2 font-label-md text-label-md text-surface-container-high">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-accent-highlight text-[18px]">verified</span>
<span className="">نظارت مستقیم متخصص طب فیزیکی</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-accent-highlight text-[18px]">shield</span>
<span className="">حفظ کامل حریم خصوصی</span>
</div>
</div>
</div>
{/*  Form Submission Box  */}
<div className="lg:col-span-5 bg-surface-pure/10 backdrop-blur-xl p-6 rounded-2xl flex flex-col gap-4">
<h4 className="font-title-md text-title-md text-surface-pure font-semibold">عضویت رایگان در خبرنامه</h4>
<form className="flex flex-col gap-3" id="newsletter-form" onSubmit={(e) => e.preventDefault()}>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-surface-container-high">نام و نام خانوادگی:</label>
<input className="w-full h-11 px-4 rounded-xl bg-surface-pure text-primary-container font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-accent-highlight placeholder:text-outline" placeholder="مثال: علیرضا محمدی" required={true} type="text" />
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-surface-container-high">ایمیل یا شماره همراه:</label>
<input className="w-full h-11 px-4 text-right rounded-xl bg-surface-pure text-primary-container font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-accent-highlight placeholder:text-outline" dir="ltr" placeholder="0912... یا email@example.com" required={true} type="text" />
</div>
<button className="w-full h-12 mt-2 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shadow-md" type="submit">
<span className="">ثبت نام و دریافت مقالات</span>
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</form>
</div>
</div>
</div>
</section>
{/*  Interactive Client-side Script  */}

</div>
    </div>
  );
}
