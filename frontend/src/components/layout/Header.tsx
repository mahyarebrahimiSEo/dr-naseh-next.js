'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'صفحه اصلی', icon: 'home' },
    { href: '/about', label: 'درباره پزشک', icon: 'person' },
    { href: '/services', label: 'خدمات تخصصی', icon: 'medical_services' },
    { href: '/articles', label: 'مقالات علمی', icon: 'article' },
    { href: '/gallery', label: 'گالری تصویر', icon: 'photo_library' },
    { href: '/contact', label: 'تماس با ما', icon: 'contact_support' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-pure/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,29,57,0.08)] border-b border-surface-container-high/40'
          : 'bg-surface-pure/80 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 shrink-0 group">
          <div className="relative overflow-hidden rounded-xl p-1 transition-transform duration-300 group-hover:scale-105">
            <img
              alt="کلینیک دکتر ناصح یوسفی"
              className="h-10 sm:h-11 w-auto object-contain"
              src="/images/logo.png"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-on-surface leading-tight transition-colors group-hover:text-secondary">
              دکتر ناصح یوسفی
            </span>
            <span className="font-label-sm text-[11px] sm:text-[12px] text-on-surface-variant font-medium mt-0.5">
              کلینیک طب فیزیکی و توانبخشی
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[14px] xl:text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-secondary font-bold'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-[2.5px] bg-secondary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons (Desktop & Tablet) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone call link - aligned icon and text */}
          <a
            href="tel:02166020308"
            className="hidden md:inline-flex items-center justify-center gap-2 h-11 px-3.5 xl:px-4 rounded-xl border border-secondary/20 hover:border-secondary/40 bg-secondary/5 hover:bg-secondary/10 text-on-surface hover:text-secondary transition-all duration-200 group text-sm"
            title="تماس مستقیم با کلینیک"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary group-hover:rotate-12 transition-transform shrink-0">
              call
            </span>
            <span className="font-bold tracking-wider text-xs xl:text-sm leading-none" dir="ltr">
              ۰۲۱-۶۶۰۲۰۳۰۸
            </span>
          </a>

          {/* Appointment booking button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-2 h-11 px-4 xl:px-5 rounded-xl bg-secondary hover:bg-secondary/90 active:scale-[0.98] text-white font-medium text-xs xl:text-sm shadow-md hover:shadow-lg hover:shadow-secondary/25 transition-all duration-200 shrink-0"
          >
            <span className="material-symbols-outlined text-[19px] shrink-0">
              calendar_month
            </span>
            <span className="leading-none">رزرو نوبت</span>
          </Link>

          {/* Quick Call on Mobile */}
          <a
            href="tel:02166020308"
            className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors"
            aria-label="تماس تلفنی با کلینیک"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center w-10 h-10 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40"
            aria-label={isMobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-surface-pure/95 backdrop-blur-2xl border-b border-surface-container-high/60 shadow-2xl p-5 transition-all animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1 max-w-lg mx-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-secondary text-white font-bold shadow-sm'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      isActive ? 'text-white' : 'text-secondary'
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Mobile CTAs inside drawer */}
            <div className="pt-4 mt-2 border-t border-surface-container-high/50 flex flex-col gap-2.5">
              <a
                href="tel:02166020308"
                className="flex items-center justify-center gap-2 h-12 rounded-xl bg-secondary/10 text-secondary hover:bg-secondary/15 font-semibold text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span dir="ltr">۰۲۱-۶۶۰۲۰۳۰۸</span>
                <span className="text-xs text-on-surface-variant font-normal mr-1">
                  (مشاوره تلفنی)
                </span>
              </a>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 h-12 rounded-xl bg-secondary text-white font-semibold text-sm shadow-md hover:bg-secondary/90 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>رزرو وقت ویزیت آنلاین</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
