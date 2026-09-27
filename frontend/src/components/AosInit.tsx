"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 550,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  useEffect(() => {
    // Refresh AOS instances and recalculate positions on client-side route transitions
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
