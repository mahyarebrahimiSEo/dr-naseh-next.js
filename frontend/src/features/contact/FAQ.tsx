"use client";
import React, { useState } from 'react';

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

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
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
  );
}
