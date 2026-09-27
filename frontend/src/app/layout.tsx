import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AosInit } from "@/components/AosInit";
import { SmoothScroll } from "@/components/SmoothScroll";

const yekanBakh = localFont({
  src: [
    { path: "../../public/fonts/YekanBakh-Hairline.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/YekanBakh-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/YekanBakh-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/YekanBakh-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/YekanBakh-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/YekanBakh-Heavy.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/YekanBakh-Fat.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "کلینیک دکتر ناصح یوسفی",
  description: "کلینیک طب فیزیکی و توانبخشی",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa" dir="rtl"
      className={`${yekanBakh.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className={`${yekanBakh.className} min-h-full flex flex-col`}>
        <AosInit />
        <SmoothScroll />
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
