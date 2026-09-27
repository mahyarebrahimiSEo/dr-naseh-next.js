'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  const quickLinks = [
    { href: '/', label: 'صفحه اصلی' },
    { href: '/about', label: 'درباره پزشک' },
    { href: '/services', label: 'خدمات تخصصی' },
    { href: '/articles', label: 'مقالات علمی' },
    { href: '/gallery', label: 'گالری تصویر' },
    { href: '/contact', label: 'تماس با ما' },
  ];

  return (
    <footer className="w-full bg-primary-container text-white pt-16 pb-8 border-t border-surface-pure/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Doctor bio & phone */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-headline-sm text-[20px] lg:text-[22px] text-white font-bold tracking-tight">
                دکتر ناصح یوسفی
              </h3>
              <span className="text-[13px] text-accent-highlight font-medium">
                متخصص طب فیزیکی، توانبخشی و الکترودیاگنوز
              </span>
            </div>
            <p className="text-[13.5px] text-white/75 leading-relaxed text-justify">
              مرکز جامع طب بازساختی و درمان‌های غیرجراحی ارتوپدی. ارائه رویکردهای نوین
              سلول‌درمانی، پی‌آرپی تخصصی و پروتکل‌های توانبخشی با هدف تسکین پایدار درد و بازگشت
              به زندگی فعال.
            </p>
            <div className="pt-2">
              <a
                href="tel:02166020308"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-accent-highlight/50 transition-all duration-200 group"
              >
                <span className="material-symbols-outlined text-[20px] text-accent-highlight group-hover:scale-110 transition-transform">
                  call
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/60">پذیرش و هماهنگی مطب</span>
                  <span className="font-bold tracking-wider text-[14px] text-white" dir="ltr">
                    ۰۲۱-۶۶۰۲۰۳۰۸
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links - unified white colors and animated underline only under word */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-title-md text-[17px] text-white font-bold border-r-2 border-accent-highlight pr-2.5">
              دسترسی سریع
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 py-1 text-[14px] transition-all duration-200 group w-fit ${
                      isActive
                        ? 'text-accent-highlight font-bold'
                        : 'text-white/85 hover:text-white hover:-translate-x-1'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px] text-accent-highlight/60 group-hover:text-accent-highlight transition-colors shrink-0">
                      chevron_left
                    </span>
                    <span
                      className={`relative pb-0.5 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:bg-accent-highlight after:transition-all after:duration-300 after:ease-out ${
                        isActive
                          ? 'after:w-full'
                          : 'after:w-0 group-hover:after:w-full'
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Col 3: Contact details */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-title-md text-[17px] text-white font-bold border-r-2 border-accent-highlight pr-2.5">
              اطلاعات تماس و نشانی
            </h4>
            <div className="flex flex-col gap-3.5 text-[13.5px]">
              <div className="flex items-start gap-2.5 text-white/85">
                <span className="material-symbols-outlined text-[20px] text-accent-highlight shrink-0 mt-0.5">
                  location_on
                </span>
                <span className="leading-relaxed">
                  تهران، خیابان آزادی، روبروی مترو شادمان، ساختمان پزشکان فجر
                </span>
              </div>
              <a
                href="mailto:info@dr-yousefi.com"
                className="inline-flex items-center gap-2.5 text-white/85 hover:text-white transition-colors group w-fit"
              >
                <span className="material-symbols-outlined text-[20px] text-accent-highlight shrink-0 group-hover:scale-110 transition-transform">
                  mail
                </span>
                <span
                  dir="ltr"
                  className="relative pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent-highlight after:transition-all after:duration-300 after:ease-out after:w-0 group-hover:after:w-full"
                >
                  info@dr-yousefi.com
                </span>
              </a>
              <div className="flex items-center gap-2.5 text-white/85">
                <span className="material-symbols-outlined text-[20px] text-accent-highlight shrink-0">
                  support_agent
                </span>
                <span>مشاوره و تعیین نوبت قبلی</span>
              </div>
            </div>
          </div>

          {/* Col 4: Working hours card */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-title-md text-[17px] text-white font-bold border-r-2 border-accent-highlight pr-2.5">
              ساعات کاری مطب
            </h4>
            <div className="bg-white/[0.04] rounded-2xl p-4 border border-white/10 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-accent-highlight font-medium">
                  روزهای زوج (شنبه، دوشنبه، چهارشنبه):
                </span>
                <span className="text-[13px] font-semibold text-white tracking-wider" dir="ltr">
                  12:00 – 19:00
                </span>
              </div>
              <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
                <span className="text-[12px] text-accent-highlight font-medium">
                  روزهای فرد (یکشنبه، سه‌شنبه، پنجشنبه):
                </span>
                <span className="text-[13px] font-semibold text-white tracking-wider" dir="ltr">
                  11:00 – 15:00
                </span>
              </div>
              <span className="text-[11.5px] text-white/60 pt-1">
                جمعه‌ها و تعطیلات رسمی مطب تعطیل می‌باشد.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/60">
          <span>تمامی حقوق برای وبسایت رسمی دکتر ناصح یوسفی محفوظ است © ۲۰۲۵</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="material-symbols-outlined text-[16px] text-accent-highlight">
                verified
              </span>
              طبابت مبتنی بر شواهد علمی
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
