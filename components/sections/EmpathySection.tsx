import React from "react";
import { Compass, Lightbulb, Code2, Trophy, Sparkles, ArrowRight, GraduationCap } from "lucide-react";

const steps = [
  {
    stepNumber: 1,
    title: "Explore",
    desc: "Discover emerging tech, modern AI developer tools, and first-principles concepts through hands-on guided interaction.",
    icon: Compass,
    borderColor: "border-[#f59e0b]",
    iconBg: "bg-[#fff7e5] text-[#f59e0b]",
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    stepNumber: 2,
    title: "Learn",
    desc: "Master production workflows with structured modules, real-time code execution, and direct mentor guidance.",
    icon: Lightbulb,
    borderColor: "border-[#0ea5e9]",
    iconBg: "bg-[#edf8ff] text-[#0ea5e9]",
    color: "#0ea5e9",
    glowColor: "rgba(14, 165, 233, 0.15)",
  },
  {
    stepNumber: 3,
    title: "Build",
    desc: "Write production code, assemble end-to-end full stack applications, and deploy repositories live to GitHub.",
    icon: Code2,
    borderColor: "border-[#304ffe]",
    iconBg: "bg-[#eef1ff] text-[#304ffe]",
    color: "#304ffe",
    glowColor: "rgba(48, 79, 254, 0.15)",
  },
  {
    stepNumber: 4,
    title: "Compete",
    desc: "Tackle real-world industry problem statements in intense hackathons, build team chemistry, and demo live.",
    icon: Trophy,
    borderColor: "border-[#0d9488]",
    iconBg: "bg-[#eafaf7] text-[#0d9488]",
    color: "#0d9488",
    glowColor: "rgba(13, 148, 136, 0.15)",
  },
  {
    stepNumber: 5,
    title: "Showcase",
    desc: "Gain tamper-proof verified credentials, portfolio recognition, and direct hiring partner placement visibility.",
    icon: Sparkles,
    borderColor: "border-[#ef4444]",
    iconBg: "bg-[#fff0f2] text-[#ef4444]",
    color: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.15)",
  },
];

export function EmpathySection() {
  return (
    <section className="relative overflow-hidden border-y border-[#eaedf6] bg-[#f8faff] py-5 sm:py-7 lg:py-5">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#304ffe]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-7 max-w-[980px] text-center sm:mb-8">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#dce4ff] bg-[#f0f3ff] px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-[#304ffe] shadow-sm sm:text-[12px]">
            The Campus Learning Paradigm
          </span>
          <h2 className="mx-auto max-w-[1050px] text-[38px] font-black leading-[1.08] tracking-[-0.05em] text-[#0d1033] sm:text-[52px] lg:text-[56px]">
            Students don&apos;t need another lecture.
            <br />
            <span className="bg-gradient-to-r from-[#2368ff] to-[#4d35ee] bg-clip-text text-transparent">They need opportunities to build.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[780px] text-[16px] leading-[1.65] text-[#606482] sm:text-[18px]">
            Traditional academia covers theory, but engineering happens at the keyboard. Codegnan Labs bridges the gap with a 5-step experiential learning framework.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════
            DESKTOP INTERCONNECTED DIAMOND CHAIN (lg and up)
        ═══════════════════════════════════════════════════ */}
        <ol className="hidden lg:grid lg:grid-cols-5 gap-0 py-12 max-w-[1240px] mx-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.stepNumber}
                className="group relative flex items-center justify-center w-[230px] h-[230px] mx-auto"
                style={{ zIndex: index + 1 }}
              >
                {/* Rotated Diamond Container */}
                <div
                  className="absolute inset-0 rotate-45 rounded-[36px] border-[3px] bg-white shadow-[0_12px_30px_rgba(20,24,68,0.06)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_16px_36px_rgba(20,24,68,0.12)]"
                  style={{
                    borderColor: item.color,
                    boxShadow: `0 12px 30px ${item.glowColor}`,
                  }}
                >
                  <div className="pointer-events-none absolute inset-1.5 rounded-[30px] border border-[#edf0f5]" />
                </div>

                {/* Big Step Number on the Left Corner (Matching Screenshot Exactly) */}
                <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-30 select-none pointer-events-none">
                  <span
                    className="text-[60px] xl:text-[68px] font-black leading-none drop-shadow-sm tracking-tighter"
                    style={{ color: item.color }}
                  >
                    {item.stepNumber}
                  </span>
                </div>

                {/* Card Content (Unrotated & Centered) */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center w-[74%] h-[74%] px-2">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-xs mb-2 transition-transform group-hover:scale-110 ${item.iconBg}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0d1033] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[11.5px] leading-snug text-[#55637e]">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* ═══════════════════════════════════════════════════
            MOBILE & TABLET STEP TIMELINE (< lg)
        ═══════════════════════════════════════════════════ */}
        <div className="lg:hidden space-y-4 max-w-md mx-auto px-2 py-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={item.stepNumber} className="relative flex items-start gap-4">
                {/* Vertical Connector Line */}
                {!isLast && (
                  <div
                    className="absolute left-5 top-11 bottom-0 w-0.5 border-l-2 border-dashed -translate-x-1/2 z-0"
                    style={{ borderColor: item.color }}
                  />
                )}

                {/* Step Number Badge */}
                <div
                  className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md text-white font-black text-sm tracking-wider"
                  style={{ backgroundColor: item.color }}
                >
                  0{item.stepNumber}
                </div>

                {/* Step Card */}
                <div
                  className="flex-1 rounded-2xl bg-white p-4 sm:p-5 border-2 shadow-sm transition-all"
                  style={{
                    borderColor: item.color,
                    boxShadow: `0 8px 24px ${item.glowColor}`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-black uppercase tracking-wider block"
                        style={{ color: item.color }}
                      >
                        Step 0{item.stepNumber}
                      </span>
                      <h3 className="text-lg font-black text-[#0d1033] leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#55637e] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-[700px] items-center gap-4 rounded-[24px] bg-gradient-to-r from-[#eef2ff] to-[#f3efff] p-5 lg:hidden">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dfe5ff] text-[#3e2be8]">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="min-w-0">
            <strong className="block text-[18px] font-black text-[#0d1033]">
              Build Skills. Create Impact.
            </strong>
            <span className="text-[14px] text-[#53617e]">
              Join Codegnan Labs and be industry ready.
            </span>
          </div>
          <div className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#304ffe] to-[#7034ed] text-white shadow-lg">
            <ArrowRight className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
