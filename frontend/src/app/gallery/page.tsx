// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {

  (function initGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('gallery-lightbox');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalCounter = document.getElementById('modal-counter');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentVisibleItems = Array.from(galleryItems);
    let currentIndex = 0;

    // Filter Logic
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterButtons.forEach(b => {
          b.classList.remove('active-tab', 'text-on-secondary', 'bg-secondary', 'shadow-sm');
          b.classList.add('text-on-surface-variant');
        });
        btn.classList.add('active-tab', 'text-on-secondary', 'bg-secondary', 'shadow-sm');
        btn.classList.remove('text-on-surface-variant');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });

        currentVisibleItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
      });
    });

    // Lightbox Open Logic
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const activeList = currentVisibleItems.length > 0 ? currentVisibleItems : Array.from(galleryItems);
        currentIndex = activeList.indexOf(item);
        if (currentIndex === -1) currentIndex = 0;
        updateModal(activeList, currentIndex);

        lightbox.classList.remove('hidden','pointer-events-none');
        setTimeout(() => {
          lightbox.classList.remove('opacity-0');
        }, 10);
      });
    });

    function updateModal(list, idx) {
      const targetItem = list[idx];
      if (!targetItem) return;

      const imgTag = targetItem.querySelector('img');
      modalImage.src = imgTag ? imgTag.src :'placeholder';
      modalTitle.textContent = targetItem.getAttribute('data-title') || '';
      modalDesc.textContent = targetItem.getAttribute('data-desc') || '';
      modalCounter.textContent = (idx + 1) +" /" + list.length;
    }

    function closeModal() {
      lightbox.classList.add('opacity-0');
      setTimeout(() => {
        lightbox.classList.add('hidden','pointer-events-none');
      }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeModal();
      }
    });

    // Next / Prev Controls (RTL aware)
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const list = currentVisibleItems.length > 0 ? currentVisibleItems : Array.from(galleryItems);
      currentIndex = (currentIndex - 1 + list.length) % list.length;
      updateModal(list, currentIndex);
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const list = currentVisibleItems.length > 0 ? currentVisibleItems : Array.from(galleryItems);
      currentIndex = (currentIndex + 1) % list.length;
      updateModal(list, currentIndex);
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('hidden')) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") nextBtn.click();
      if (e.key === "ArrowRight") prevBtn.click();
    });
  })();

}, []);
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col w-full">
{/*  Section 1: Editorial Header & Atmospheric Intro  */}
<section className="relative w-full bg-surface-pure pt-10 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
<div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-surface-container-high/40 blur-3xl pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
{/*  Clinical Overline Badge  */}
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-secondary font-label-md text-label-md mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-accent-highlight animate-pulse"></span>
<span className="">تصاویر و مستندات بالینی</span>
</div>
{/*  Main Headline  */}
<h1 className="font-headline-xl text-headline-xl text-primary-container mb-4 tracking-tight max-w-3xl">
        گالری تصاویر کلینیک
      </h1>
{/*  Refined Medical Subtitle  */}
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed text-center">
        مروری بر فضای درمانی آرامش‌بخش، مجهزترین دستگاه‌های سونوگرافی و الکترودیاگنوز، و استانداردهای بهداشتی کلینیک دکتر ناصح یوسفی
      </p>
{/*  Key Clinical Metrics Strip (Inline Minimal)  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 w-full max-w-4xl p-6 rounded-2xl bg-surface-subtle shadow-sm mx-auto">
<div className="flex flex-col items-center justify-center p-2 text-center">
<span className="font-headline-lg text-headline-lg text-secondary" dir="ltr">+۲,۵۰۰</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">تزریق موفق هدایت سونوگرافی</span>
</div>
<div className="flex flex-col items-center justify-center p-2 text-center">
<span className="font-headline-lg text-headline-lg text-secondary" dir="ltr">۹۸٪</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">رضایت‌مندی مراجعین</span>
</div>
<div className="flex flex-col items-center justify-center p-2 text-center">
<span className="font-headline-lg text-headline-lg text-secondary" dir="ltr">۱۰۰٪</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">پروتکل استریل پیشرفته</span>
</div>
<div className="flex flex-col items-center justify-center p-2 text-center">
<span className="font-headline-lg text-headline-lg text-secondary" dir="ltr">۱۵+ سال</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">سابقه طبابت تخصصی PM&amp;R</span>
</div>
</div>
</div>
</section>
{/*  Section 2: Filter Tabs (Pill Structure)  */}
<section className="w-full bg-surface-pure pb-8 px-4 sm:px-6 lg:px-12 sticky top-20 z-30 shadow-sm bg-surface-pure/95 backdrop-blur-md" data-aos="fade-up">
<div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto py-2 scrollbar-none px-2">
<div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-surface-container shadow-inner">
<button className="filter-btn active-tab px-5 py-2.5 rounded-xl font-label-lg text-label-lg transition-all text-on-secondary bg-secondary shadow-sm" data-filter="all" type="button">
          همه تصاویر
        </button>
<button className="filter-btn px-5 py-2.5 rounded-xl font-label-lg text-label-lg transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-pure/80" data-filter="clinic" type="button">
          محیط کلینیک و اتاق ویزیت
        </button>
<button className="filter-btn px-5 py-2.5 rounded-xl font-label-lg text-label-lg transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-pure/80" data-filter="equipment" type="button">
          تجهیزات تخصصی و سونوگرافی
        </button>
<button className="filter-btn px-5 py-2.5 rounded-xl font-label-lg text-label-lg transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-pure/80" data-filter="procedures" type="button">
          مراحل ارزیابی و درمان
        </button>
<button className="filter-btn px-5 py-2.5 rounded-xl font-label-lg text-label-lg transition-all text-on-surface-variant hover:text-on-surface hover:bg-surface-pure/80" data-filter="certs" type="button">
          رویدادهای علمی و گواهینامه‌ها
        </button>
</div>
</div>
</section>
{/*  Section 3: Bento & Mosaic Image Grid  */}
<section className="w-full bg-surface-subtle py-12 px-4 sm:px-6 lg:px-12" data-aos="fade-up">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
{/*  Image Card 1: Consultation Room (Hero Item)  */}
<div className="gallery-item group relative rounded-2xl overflow-hidden shadow-md bg-surface-pure cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80" data-category="clinic" data-desc="محیط مشاوره تخصصی دکتر ناصح یوسفی با دیزاین ارگونومیک، نورپردازی طبیعی و سیستم پرونده دیجیتال سلامت." data-img-index="0" data-title="اتاق مشاوره و ویزیت تخصصی">
<img alt="اتاق ویزیت و مشاوره" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern serene physician consultation office with warm architectural sunlight, ergonomic minimalist doctor desk, spine and knee anatomic models, subtle clinical decor in soft white and muted teal tones, ultra realistic high-end medical interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_cU-kdmldhWovVUBsL2ZNypRRXJpMA1PQtQWYgNdhmseKj9vL5chsOU_cUXc_0lbe40vvgXX_f9Uskdyzj879SGrub6LU2o1INWWu82P8XDgyeATCqLEelKnu5tYVXvH7CFpNoTo_tRa0ZEfCQ-LS5VL0Jm3_Mh2TpLx8L9SvE44AszIxLt6WdKKBmm_AkG3I90gGXU13OKEb7qbGryercE-U-oWPol3ih4EjdMvYfXhxactwbbrQSA" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 right-4 z-10">
<span className="px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm shadow-sm">فضای کلینیک</span>
</div>
<div className="absolute bottom-0 right-0 left-0 p-6 z-10 flex items-end justify-between">
<div className="flex flex-col text-right">
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">اتاق مشاوره و ویزیت تخصصی</h3>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">طراحی مینیمال و آرامش‌بخش به دور از اضطراب بالینی</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-pure/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</div>
{/*  Image Card 2: Ultrasound Device  */}
<div className="gallery-item group relative rounded-2xl overflow-hidden shadow-md bg-surface-pure cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80" data-category="equipment" data-desc="دستگاه سونوگرافی کالر داپلر با پروب‌های خطی با فرکانس فوق‌العاده بالا جهت تزریقات مفصلی میلی‌متری." data-img-index="1" data-title="سونوگرافی پیشرفته عضلانی-اسکلتی">
<img alt="دستگاه سونوگرافی اسکلتی-عضلانی" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="State-of-the-art musculoskeletal ultrasound system in a modern clean medical clinic, glowing display showing joint scan, high-frequency probe resting on sleek metallic dock, cleanroom lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdphnUaGi_wCa92ddb7v8CnC8gmeH7t0h8h32OjkS5mLHlpsHhTBx_QVP1eGcQLJEFJvh3z4kqZZYkdVGPGORNgk4Tnm0b8T8aNPhbSHMRSYEeIAE2O0vFtUIowBjIzeGOJ7WHNmfwNUtbrxRJxDWA1NC9cW-gxu14QaJTSSxHvpxd5gyUNyNkJSsaMKM80YtGpZ63z04CR3CU4uIKwsUWBD0mpZptKHb1X6PFOellfEdNx_LMdhuvBQ" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 right-4 z-10">
<span className="px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm shadow-sm">تجهیزات مدرن</span>
</div>
<div className="absolute bottom-0 right-0 left-0 p-6 z-10 flex items-end justify-between">
<div className="flex flex-col text-right">
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">سونوگرافی عضلانی-اسکلتی</h3>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">تصویربرداری دقیق دینامیک تاندون‌ها و مفاصل</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-pure/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</div>
{/*  Image Card 3: PRP Centrifuge & Sterile Kits  */}
<div className="gallery-item group relative rounded-2xl overflow-hidden shadow-md bg-surface-pure cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80" data-category="equipment" data-desc="فرایند جداسازی پلاکت غلیظ در سیستم بسته کاملاً استریل جهت حداکثر فاکتورهای رشد سلولی." data-img-index="2" data-title="کیت‌های اختصاصی و سیستم PRP">
<img alt="کیت و سانتریفیوژ پی‌آرپی" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Sterile medical laboratory setup for platelet-rich plasma PRP preparation, high-speed centrifuge machine with amber platelet separation tubes, pristine medical stainless steel and teal lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX8bCZsH2GmonXEh506XhjC4OVm8Zu79jSzDlYF-_3OB61hMZR6icFOcWqoI9B0NCgxJWhnz9KtGSkm1RDSGE67SQz5VFNOFTErwRPU4K5Dt11K1JOJJ3-m6A9BVC342zFRknEs5Nnl0_nU7NkA3_-Yp2p4SlHPJRz6tJsAnWQShV0CzvdsTPuxqE4NTpU2cmrjN1oI1QVWHgiLrUJXHP6iCC0pR8IaEu7IE0bLK3mN16wDXftN51ouA" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 right-4 z-10">
<span className="px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm shadow-sm">طب بازساختی</span>
</div>
<div className="absolute bottom-0 right-0 left-0 p-6 z-10 flex items-end justify-between">
<div className="flex flex-col text-right">
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">کیت‌های بیولوژیک پی‌آرپی</h3>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">سیستم تمام‌بسته با رعایت زنجیره استریلیزاسیون</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-pure/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</div>
{/*  Image Card 4: EMG / NCS Nerve Conduction Suite  */}
<div className="gallery-item group relative rounded-2xl overflow-hidden shadow-md bg-surface-pure cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80" data-category="procedures" data-desc="بررسی جامع ریشه‌های عصبی و دردهای ارجاعی با دستگاه مدرن الکترومیوگرافی دیجیتال." data-img-index="3" data-title="اتاق تست نوار عصب و عضله (EMG)">
<img alt="دستگاه نوار عصب و عضله" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern clinical EMG and NCS diagnostic suite, electromyography monitor displaying neural waveforms, ergonomic patient exam bed, organized sterile probe cart in pristine medical center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgSnIvvg_vpHmEtSUl9Jawky11ue4yPhnbekZoaprXupGMngDzrCky_6wdq7YSFzU8vqgbTInaLMXfEV-7VKmP7hou2cmR28CUM8UFRM4w3HR5tImGi2nD23b392QW1SBiK8HajcOu567TUI4R8HkQ0bm_kkW6WOJ1edUVfHiZ4NGg5DCAI8jq6frxLFU8ExlpOFAhfQLg3fFbhOYOuRNrIt5BdL-wboaMicQIvm_P6jqftNH3H4IjMg" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 right-4 z-10">
<span className="px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm shadow-sm">الکترودیاگنوزیس</span>
</div>
<div className="absolute bottom-0 right-0 left-0 p-6 z-10 flex items-end justify-between">
<div className="flex flex-col text-right">
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">سیستم نوار عصب و عضله (EMG / NCS)</h3>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">ارزیابی دقیق درگیری دیسک کمر، گردن و سندرم تونل کارپال</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-pure/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</div>
{/*  Image Card 5: Relaxing Waiting Lounge  */}
<div className="gallery-item group relative rounded-2xl overflow-hidden shadow-md bg-surface-pure cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80" data-category="clinic" data-desc="فضایی بدون استرس با موسیقی ملایم و صندلی‌های طبی ارگونومیک جهت آرامش مراجعین گرامی." data-img-index="4" data-title="سالن انتظار اختصاصی مراجعین">
<img alt="سالن انتظار کلینیک" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="High-end medical lounge waiting area with contemporary architectural furniture in warm muted tones, indoor plants, soft ambient lighting, clean minimal aesthetics for luxury physical medicine clinic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKoAMoFAfuhyJt70hEzuQaenHYOP18-6Qe4MXO1WQopguQNDLaNZHvmFgIy0DCHn7QxZtK3abzH0Z0n2sQkB6VRcksoth7Q6Uq1jEu7lQQSQMIjgKN64TSZG_FnK7xzPgXNz0tRLd0ENZxrHPD-jPnRl5tk9Xhtw3qh0E4KQ0dGWZj--W6W0JtibnBYrnGScCEbTGvn0rC-HXO3FKWBthJOGHpDd2pWpMT4RdUQJThwNKHxxw1LRloBQ" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 right-4 z-10">
<span className="px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm shadow-sm">فضای کلینیک</span>
</div>
<div className="absolute bottom-0 right-0 left-0 p-6 z-10 flex items-end justify-between">
<div className="flex flex-col text-right">
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">سالن پذیرش و انتظار</h3>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">محیطی آرام‌بخش با پذیرایی استاندارد</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-pure/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</div>
{/*  Image Card 6: Guided Injection Procedure  */}
<div className="gallery-item group relative rounded-2xl overflow-hidden shadow-md bg-surface-pure cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80" data-category="procedures" data-desc="هدایت دقیق سوزن تزریق در فضای زانو و تاندون شانه با مشاهده بلادرنگ بافت در مانیتور." data-img-index="5" data-title="تزریق تحت هدایت سونوگرافی">
<img alt="تزریق با سونوگرافی" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Doctor performing ultrasound guided joint injection on knee joint, sterile draping, medical monitor showing real-time needle visualization, physician hands in sterile surgical gloves with precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN_azumwUflHRhEBu6nkKJTC7RG1xPy5K9NpFvfbKS0WRo_y1D04Y7099YiEyBug0EYzyUX8jtfsQXMngz362MkRqsEcskzPCT5z4tTNybq51DJk_KMSfIYVPmZCk2GaQNt-kgZZlFuKFMdWy3LclX7OeF8zSOjPowS9wwLsVeXam1TwVu06tPenDKxfqE-tTcFK98JYuzZTqb6YzbQDOOzugaucihNlAzGfMaWS5O_Zo1avN5jdpydw" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 right-4 z-10">
<span className="px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm shadow-sm">مراحل درمان</span>
</div>
<div className="absolute bottom-0 right-0 left-0 p-6 z-10 flex items-end justify-between">
<div className="flex flex-col text-right">
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">هدایت سونوگرافی سونوگایدد</h3>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">رسیدن مستقیم ماده درمانی به بافت آسیب‌دیده</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-pure/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</div>
{/*  Image Card 7: Clinical Consultation & Spine Evaluation  */}
<div className="gallery-item group relative rounded-2xl overflow-hidden shadow-md bg-surface-pure cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80" data-category="procedures" data-desc="بررسی پوسچر بدنی، دامنه حرکتی مفاصل و توازن عضلانی در مرحله معاینه فیزیکی." data-img-index="6" data-title="معاینات اسکلتی و ارزیابی ستون فقرات">
<img alt="معاینات تخصصی ارتوپدی" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Specialist doctor carefully examining patient shoulder and spine posture in modern medical evaluation room, anatomical charts on walls, professional empathetic atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx_dFZIyTB3HMV9T-oAsyq_5RAMJTt1ZZe_N4O0e62sBYmJ5JGWHLF6zdGx1UIMiYGBGjriRa_X3hML7ttpWlByn5K6mi8dMveN0RtO-EfbgTPMqIlvcY_mO_ap9ZRIiEXxWuZ9TRvZ6P7uNV152aoMGFbXE80Eni8RM37pzHRS4QWclbZUSHcvgcnjzkL1tilmafH-IF2Tdqz--jZhDVuH9LCL34os5cYCLZKRM5XyDD28pkz3EHH-w" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 right-4 z-10">
<span className="px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm shadow-sm">ارزیابی بالینی</span>
</div>
<div className="absolute bottom-0 right-0 left-0 p-6 z-10 flex items-end justify-between">
<div className="flex flex-col text-right">
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">معاینات پوسچر و ستون فقرات</h3>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">شناسایی ریشه دردهای مزمن ستون فقرات و لگن</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-pure/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</div>
{/*  Image Card 8: Academic & Certifications Congress  */}
<div className="gallery-item group relative rounded-2xl overflow-hidden shadow-md bg-surface-pure cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-80" data-category="certs" data-desc="حضور مستمر در کنفرانس‌های فوق تخصصی طب فیزیکی، بازساختی و دوره‌های بین‌المللی سونوگرافی مفاصل." data-img-index="7" data-title="کنگره‌های علمی بین‌المللی">
<img alt="رویدادهای علمی" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Medical conference podium and symposium presentation on regenerative medicine and orthopedic physical rehabilitation, international keynote speaker, medical badges and certified documents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXIo6TgJDtEjm8iRrK3eJeOsIQyYx6A045f_ApwgNV9oajBsX_srBCp1hsJV3DcrZ_zmTvoEZR5r5M5LElxh3DUDGbA5ihpCXjrYAAThDnQ_EJexJavhtevxy31wHxcTq7JJpeXf31TxFlKFoOT0ppazotjnJausc_UpktvShFjGQKSMRZnqQ1HCVs1RvOaeP2oSTB_vGyn0s-KIZSXBi6VnAzBkJe9eWpiONHLKEiCKYkCjStCkPldw" />
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
<div className="absolute top-4 right-4 z-10">
<span className="px-3 py-1 rounded-full bg-surface-pure/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm shadow-sm">گواهی‌های علمی</span>
</div>
<div className="absolute bottom-0 right-0 left-0 p-6 z-10 flex items-end justify-between">
<div className="flex flex-col text-right">
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">گواهی‌های دوره‌های فوق‌تخصصی</h3>
<p className="font-body-sm text-body-sm text-surface-container-high line-clamp-1">به‌روزترین متدهای روز طب فیزیکی جهان</p>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-pure/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">zoom_in</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Section 4: Clinical Standards Spotlight (Visual Strip)  */}
<section className="w-full bg-surface-pure py-16 px-4 sm:px-6 lg:px-12" data-aos="fade-up">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Standard 1  */}
<div className="p-8 rounded-2xl bg-surface-subtle flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">biotech</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary-container">کیت‌های یک‌بار مصرف اختصاصی</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
          تمام فرایندهای تزریق PRP و هیالورونیک اسید با استفاده از کیت‌های استاندارد ایزوله و وکیوم در حضور خود مراجعه‌کننده آماده‌سازی و بازگشایی می‌شوند.
        </p>
</div>
{/*  Standard 2  */}
<div className="p-8 rounded-2xl bg-surface-subtle flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">monitor_heart</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary-container">دقت تصویری فوق‌العاده</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
          عدم انجام تزریقات کور؛ تمامی پروسیجرهای مداخله‌ای مفاصل شانه، لگن، زانو و ستون فقرات با تصویربرداری همزمان سونوگرافی هدایت می‌گردند.
        </p>
</div>
{/*  Standard 3  */}
<div className="p-8 rounded-2xl bg-surface-subtle flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">spa</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary-container">محیط آرام و بدون استرس</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
          طراحی معماری مرکز با تلفیق نور طبیعی، دمای تهویه مطبوع استریل و فواصل زمانی اختصاصی برای هر ویزیت مانع از شلوغی و انتظار طولانی می‌شود.
        </p>
</div>
</div>
</section>
{/*  Section 5: Consultation Call to Action  */}
<section className="w-full bg-primary-container text-on-primary py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden" data-aos="fade-up">
<div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-center md:text-right">
<div className="flex flex-col gap-2">
<h3 className="font-headline-lg text-headline-lg text-surface-pure">نیاز به ویزیت یا مشاوره تخصصی دارید؟</h3>
<p className="font-body-md text-body-md text-surface-container-high">امکان تعیین نوبت اینترنتی و تلفنی در کلینیک دکتر ناصح یوسفی فراهم است.</p>
</div>
<div className="flex items-center gap-4 shrink-0">
<Link className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-surface-pure text-primary-container font-label-lg text-label-lg hover:bg-surface-subtle transition-all shadow-md" href="tel:02166020308">
<span className="material-symbols-outlined text-[20px] text-secondary">call</span>
<span className="">تماس با مطب</span>
</Link>
<Link className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-md" data-path="appointment" href="/">
<span className="material-symbols-outlined text-[20px]">calendar_month</span>
<span className="">رزرو وقت ویزیت</span>
</Link>
</div>
</div>
</section>
{/*  Lightbox Modal (Glassmorphism & Full RTL Support)  */}
<div className="fixed inset-0 z-50 hidden flex items-center justify-center p-4 md:p-8 bg-primary-container/90 backdrop-blur-xl transition-all duration-300 opacity-0 pointer-events-none" id="gallery-lightbox">
<div className="relative w-full max-w-5xl bg-surface-pure rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
{/*  Modal Top Bar  */}
<div className="flex items-center justify-between px-6 py-4 bg-surface-subtle border-b border-surface-container">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[22px]">photo_library</span>
<span className="font-label-md text-label-md text-on-surface-variant" dir="ltr" id="modal-counter">1 / 8</span>
</div>
<button className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors" id="close-modal-btn" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
{/*  Modal Main Image View Area  */}
<div className="relative flex-1 bg-primary/95 flex items-center justify-center min-h-[320px] md:min-h-[460px] overflow-hidden">
<img alt="نمای بزرگ تصویر" className="w-full h-full max-h-[65vh] object-contain" data-alt="Detailed medical view modal displaying high precision regenerative and diagnostic procedures of Dr Naseh Yousefi PMR clinic" id="modal-image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMGFzquXYIjXOBlwh4RmE6sjwy1qAbEypEhmCPZkdrOVdSxg3W0xsyWGDPiuYHvr8g81l523yefQuTsIDCA-67_AjzwIedUc6UKfSAjfJ_WFI3fNbv8-MhiFlz1K1kNQGQLIBrDEDMvd1u-KeTAaA5-4zNrGZOZ-qPSs8V9BC7vGSb4BaSG-fl0Wf6pzvqiBM3fZIxpJyf4CvwF6a2rxLA6c-EZpzBME-sEFhR3i5ALKnpWz2wXPo9bQ" />
{/*  Navigation Buttons  */}
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-pure/80 hover:bg-surface-pure text-primary-container flex items-center justify-center shadow-lg transition-all backdrop-blur-md" id="prev-btn" type="button">
<span className="material-symbols-outlined text-[24px]">chevron_right</span>
</button>
<button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-pure/80 hover:bg-surface-pure text-primary-container flex items-center justify-center shadow-lg transition-all backdrop-blur-md" id="next-btn" type="button">
<span className="material-symbols-outlined text-[24px]">chevron_left</span>
</button>
</div>
{/*  Modal Bottom Information Bar  */}
<div className="p-6 bg-surface-pure flex flex-col gap-2">
<h4 className="font-headline-sm text-headline-sm text-primary-container" id="modal-title">عنوان تصویر</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed" id="modal-desc">توضیحات تکمیلی تصویر در این بخش نمایش داده می‌شود.</p>
</div>
</div>
</div>
</div>

    </div>
  );
}
