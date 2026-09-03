"use client";

import { useState, useEffect } from "react";

export function AnimatedCounterItem({
  end,
  suffix = "+",
  label,
  formatComma = true,
}: {
  end: number;
  suffix?: string;
  label: string;
  formatComma?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1600; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [end]);

  const displayValue = formatComma ? count.toLocaleString("en-US") : count.toString();

  return (
    <div className="flex flex-col items-start min-w-0">
      <div className="text-[26px] sm:text-[32px] lg:text-[36px] font-black text-[#0d1033] tracking-tight leading-none flex items-baseline gap-0.5">
        <span>{displayValue}</span>
        <span className="text-[#304ffe] font-black text-[22px] sm:text-[28px] lg:text-[30px]">{suffix}</span>
      </div>
      <div className="mt-2 text-[12px] sm:text-[13px] font-semibold text-[#606482] leading-tight">
        {label}
      </div>
    </div>
  );
}
