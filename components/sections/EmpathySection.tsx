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
      glowColor: "rgba(239, 68, 68, 0.15)",
    },
  ];

  return (
    <section className="relative bg-[#f8faff] py-20 sm:py-28 overflow-hidden border-y border-[#eaedf6]">
      {/* Background subtle radial accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#304ffe]/5 rounded-full filter blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <div className="max-w-[840px] mx-auto text-center mb-16 sm:mb-20">
          <span className="inline-block px-3.5 py-1.5 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-4 border border-[#dce4ff]">
            The Campus Learning Paradigm
          </span>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-black tracking-[-0.035em] text-[#0d1033] leading-[1.14]">
            Students don&apos;t need another lecture.
            <br />
            <span className="text-[#304ffe]">They need opportunities to build.</span>
          </h2>
          <p className="mt-5 text-[15px] sm:text-[17px] text-[#606482] leading-[1.7] max-w-[680px] mx-auto">
            Traditional academia covers theory, but engineering happens at the keyboard. Codegnan Labs bridges the gap with a 5-step experiential learning framework.
          </p>
        </div>

        {/* Diamond Infographic Container */}
        {/* Desktop / Tablet View (3 on Top, 2 on Bottom Staggered) */}
        <div className="hidden md:flex flex-col items-center">
          {/* Top Row: Diamonds 1, 2, 3 */}
          <div className="flex items-center justify-center gap-10 lg:gap-14">
            {steps.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.stepNumber}
                  className="relative group w-[230px] h-[230px] lg:w-[260px] lg:h-[260px] my-10 flex items-center justify-center"
                >
                  {/* Big Number floating on left */}
                  <div
                    className={`absolute -left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-20 ${item.numberColor} text-[54px] lg:text-[68px] font-black select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-transform group-hover:scale-110`}
                  >
                    {item.stepNumber}
                  </div>

                  {/* Rotated Diamond Card Shape */}
                  <div
                    className={`absolute inset-0 bg-white rounded-[32px] lg:rounded-[38px] border-[3px] ${item.borderColor} rotate-45 shadow-[0_14px_35px_rgba(20,24,68,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_45px_rgba(20,24,68,0.14)] flex items-center justify-center overflow-hidden`}
                    style={{
                      boxShadow: `0 14px 35px ${item.glowColor}`,
                    }}
                  >
                    {/* Inner subtle glow ring */}
                    <div className="absolute inset-1.5 rounded-[26px] lg:rounded-[32px] border border-gray-100 pointer-events-none" />
                  </div>

                  {/* Un-rotated Content Inside */}
                  <div className="relative z-10 w-[78%] h-[78%] flex flex-col items-center justify-center text-center px-2 pointer-events-none">
                    <div
                      className={`w-9 h-9 lg:w-10 lg:h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-1.5 shadow-sm transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-[16px] lg:text-[18px] font-extrabold text-[#0d1033] leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-[11px] lg:text-[11.5px] text-[#606482] leading-[1.35] mt-1.5 line-clamp-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: Diamonds 4, 5 (Centered & Staggered Between 1-2 and 2-3) */}
          <div className="flex items-center justify-center gap-10 lg:gap-14 -mt-10 lg:-mt-12">
            {steps.slice(3, 5).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.stepNumber}
                  className="relative group w-[230px] h-[230px] lg:w-[260px] lg:h-[260px] my-10 flex items-center justify-center"
                >
                  {/* Big Number floating on left */}
                  <div
                    className={`absolute -left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-20 ${item.numberColor} text-[54px] lg:text-[68px] font-black select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-transform group-hover:scale-110`}
                  >
                    {item.stepNumber}
                  </div>

                  {/* Rotated Diamond Card Shape */}
                  <div
                    className={`absolute inset-0 bg-white rounded-[32px] lg:rounded-[38px] border-[3px] ${item.borderColor} rotate-45 shadow-[0_14px_35px_rgba(20,24,68,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_45px_rgba(20,24,68,0.14)] flex items-center justify-center overflow-hidden`}
                    style={{
                      boxShadow: `0 14px 35px ${item.glowColor}`,
                    }}
                  >
                    <div className="absolute inset-1.5 rounded-[26px] lg:rounded-[32px] border border-gray-100 pointer-events-none" />
                  </div>

                  {/* Un-rotated Content Inside */}
                  <div className="relative z-10 w-[78%] h-[78%] flex flex-col items-center justify-center text-center px-2 pointer-events-none">
                    <div
                      className={`w-9 h-9 lg:w-10 lg:h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-1.5 shadow-sm transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-[16px] lg:text-[18px] font-extrabold text-[#0d1033] leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-[11px] lg:text-[11.5px] text-[#606482] leading-[1.35] mt-1.5 line-clamp-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Clean Centered Stacked Diamonds with generous spacing */}
        <div className="md:hidden flex flex-col items-center space-y-16 py-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stepNumber}
                className="relative group w-[220px] h-[220px] flex items-center justify-center"
              >
                {/* Big Number floating on left */}
                <div
                  className={`absolute -left-6 top-1/2 -translate-y-1/2 z-20 ${item.numberColor} text-[52px] font-black select-none pointer-events-none drop-shadow-md`}
                >
                  {item.stepNumber}
                </div>

                {/* Rotated Diamond Card Shape */}
                <div
                  className={`absolute inset-0 bg-white rounded-[30px] border-[3px] ${item.borderColor} rotate-45 shadow-[0_12px_30px_rgba(20,24,68,0.08)] flex items-center justify-center overflow-hidden`}
                  style={{
                    boxShadow: `0 12px 30px ${item.glowColor}`,
                  }}
                />

                {/* Un-rotated Content Inside */}
                <div className="relative z-10 w-[80%] h-[80%] flex flex-col items-center justify-center text-center px-2 pointer-events-none">
                  <div
                    className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center mb-1 shadow-sm`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-[15px] font-extrabold text-[#0d1033] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[10.5px] text-[#606482] leading-[1.35] mt-1 line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
