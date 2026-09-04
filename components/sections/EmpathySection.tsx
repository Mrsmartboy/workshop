import React from "react";
import { Compass, Lightbulb, Code2, Trophy, Sparkles } from "lucide-react";

export function EmpathySection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Explore",
      subtitle: "Structured Exploration",
      desc: "Discover emerging tech, modern AI developer tools, and first-principles concepts through hands-on guided interaction.",
      icon: Compass,
      borderColor: "border-[#f59e0b]",
      numberColor: "text-[#f59e0b]",
      iconBg: "bg-[#fffbeb] text-[#f59e0b]",
      color: "#f59e0b",
      glowColor: "rgba(245, 158, 11, 0.15)",
    },
    {
      stepNumber: 2,
      title: "Learn",
      subtitle: "Interactive Learning",
      desc: "Master production workflows with structured modules, real-time code execution, and direct mentor guidance.",
      icon: Lightbulb,
      borderColor: "border-[#0ea5e9]",
      numberColor: "text-[#0ea5e9]",
      iconBg: "bg-[#f0f9ff] text-[#0ea5e9]",
      color: "#0ea5e9",
      glowColor: "rgba(14, 165, 233, 0.15)",
    },
    {
      stepNumber: 3,
      title: "Build",
      subtitle: "Production Builds",
      desc: "Write production code, assemble end-to-end full stack applications, and deploy repositories live to GitHub.",
      icon: Code2,
      borderColor: "border-[#304ffe]",
      numberColor: "text-[#304ffe]",
      iconBg: "bg-[#f0f3ff] text-[#304ffe]",
      color: "#304ffe",
      glowColor: "rgba(48, 79, 254, 0.15)",
    },
    {
      stepNumber: 4,
      title: "Compete",
      subtitle: "Hackathon Sprints",
      desc: "Tackle real-world industry problem statements in intense hackathons, build team chemistry, and demo live.",
      icon: Trophy,
      borderColor: "border-[#0d9488]",
      numberColor: "text-[#0d9488]",
      iconBg: "bg-[#f0fdfa] text-[#0d9488]",
      color: "#0d9488",
      glowColor: "rgba(13, 148, 136, 0.15)",
    },
    {
      stepNumber: 5,
      title: "Showcase",
      subtitle: "Verified Recognition",
      desc: "Gain tamper-proof verified credentials, portfolio recognition, and direct hiring partner placement visibility.",
      icon: Sparkles,
      borderColor: "border-[#ef4444]",
      numberColor: "text-[#ef4444]",
      iconBg: "bg-[#fef2f2] text-[#ef4444]",
      color: "#ef4444",
      glowColor: "rgba(239, 68, 68, 0.15)",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#eaedf6] bg-[#f8faff] py-5 sm:py-7 lg:py-5">
      {/* Background subtle radial accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#304ffe]/5 rounded-full filter blur-[120px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="mx-auto mb-7 max-w-[980px] text-center sm:mb-8">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#dce4ff] bg-[#f0f3ff] px-4 py-2 text-[12px] font-extrabold uppercase tracking-wider text-[#304ffe] shadow-sm">
            The Campus Learning Paradigm
          </span>
          <h2 className="text-[38px] font-black leading-[1.08] tracking-[-0.05em] text-[#0d1033] sm:text-[52px] lg:text-[56px]">
            Students don&apos;t need another lecture.
            <br />
            <span className="bg-gradient-to-r from-[#2368ff] to-[#4d35ee] bg-clip-text text-transparent">They need opportunities to build.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.65] text-[#606482] sm:text-[18px]">
            Traditional academia covers theory, but engineering happens at the keyboard. Codegnan Labs bridges the gap with a 5-step experiential learning framework.
          </p>
        </div>

        {/* One responsive list keeps the framework content accessible and avoids
            rendering a second desktop/mobile copy into the document. */}
        <ol className="grid grid-cols-1 gap-14 py-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-5 lg:gap-6 lg:py-10">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.stepNumber}
                className="group relative mx-auto flex h-[230px] w-[230px] items-center justify-center lg:h-[250px] lg:w-[250px]"
              >
                {/* Big number floating beside the single responsive card */}
                <div
                  className={`pointer-events-none absolute -left-7 top-1/2 z-20 -translate-y-1/2 select-none text-[58px] font-black drop-shadow-md transition-transform group-hover:scale-110 lg:-left-8 lg:text-[72px] ${item.numberColor}`}
                >
                  {item.stepNumber}
                </div>

                {/* The same diamond card is used at every breakpoint. */}
                <div
                  className={`absolute inset-0 rotate-45 rounded-[34px] border-[3px] bg-white shadow-[0_12px_30px_rgba(20,24,68,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_45px_rgba(20,24,68,0.14)] lg:rounded-[40px] ${item.borderColor}`}
                  style={{
                    boxShadow: `0 12px 30px ${item.glowColor}`,
                  }}
                >
                  <div className="pointer-events-none absolute inset-1.5 rounded-[26px] border border-gray-100 lg:rounded-[32px]" />
                </div>

                <div className="pointer-events-none relative z-10 flex h-[78%] w-[78%] flex-col items-center justify-center px-2 text-center">
                  <div
                    className={`mb-2 flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition-transform group-hover:scale-110 lg:h-14 lg:w-14 ${item.iconBg}`}
                  >
                    <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                  </div>

                  <h3 className="text-[18px] font-extrabold leading-tight text-[#0d1033] lg:text-[22px]">
                    {item.title}
                  </h3>

                  <div className="mx-auto mt-2 h-0.5 w-10 rounded-full opacity-80" style={{ backgroundColor: item.color }} />
                  <p className="mt-3 text-[11px] leading-[1.4] text-[#606482] lg:text-[13px]">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
