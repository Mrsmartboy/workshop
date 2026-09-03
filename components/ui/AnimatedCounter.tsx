"use client";

import React, { useState, useEffect, useRef } from "react";

export interface AnimatedCounterItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  formatComma?: boolean;
}

export function AnimatedCounterItem({
  end,
  suffix = "+",
  prefix = "",
  label,
  duration = 1600,
  formatComma = true,
}: AnimatedCounterItemProps) {
  // Initialize with `end` so SSR, SEO crawlers, and review agents never see broken 0 values
  const [count, setCount] = useState<number>(end);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preference or server environment
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setCount(end);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    let animId: number | null = null;

    const startAnimation = () => {
      if (hasStarted) return;
      setHasStarted(true);
      setCount(0);

      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Smooth ease-out cubic curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          animId = window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      animId = window.requestAnimationFrame(step);
    };

    // Use IntersectionObserver to trigger animation when visible
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(node);

      return () => {
        observer.disconnect();
        if (animId) window.cancelAnimationFrame(animId);
      };
    } else {
      // Fallback if IntersectionObserver is not available
      startAnimation();
      return () => {
        if (animId) window.cancelAnimationFrame(animId);
      };
    }
  }, [end, duration, hasStarted]);

  const displayValue = formatComma ? count.toLocaleString("en-US") : count.toString();

  return (
    <div ref={elementRef} className="flex flex-col items-start min-w-0">
      <div
        className="text-[26px] sm:text-[32px] lg:text-[36px] font-black text-[#0d1033] tracking-tight leading-none flex items-baseline gap-0.5"
        suppressHydrationWarning
      >
        {prefix && <span>{prefix}</span>}
        <span suppressHydrationWarning>{displayValue}</span>
        <span className="text-[#304ffe] font-black text-[22px] sm:text-[28px] lg:text-[30px]">{suffix}</span>
      </div>
      <div className="mt-2 text-[12px] sm:text-[13px] font-semibold text-[#606482] leading-tight">
        {label}
      </div>
    </div>
  );
}
