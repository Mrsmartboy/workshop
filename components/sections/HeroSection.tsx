import React from "react";
import { BookOpen, Award, Trophy, Building2, ArrowRight } from "lucide-react";

export function HeroSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section id="hero" className="relative bg-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Glowing Background Radial Blobs */}
      <div className="glow-blob glow-blob-hero-left" />
      <div className="glow-blob glow-blob-hero-top" />
      <div className="glow-blob glow-blob-hero-center" />
      <div className="glow-blob glow-blob-hero-bottom" />

      <div className="relative z-10 max-w-[1530px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="max-w-[680px]">
            {/* Codegnan Labs initiative tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-5 border border-[#dce4ff]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Codegnan Labs • Campus Innovation &amp; Technology Experiences</span>
            </div>

            {/* Three program badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-bold uppercase tracking-wider rounded-md">
                <BookOpen className="w-3 h-3" />
                Workshops
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e6fcf5] text-[#0ca678] text-[11px] font-bold uppercase tracking-wider rounded-md">
                <Award className="w-3 h-3" />
                Bootcamps
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fff4e6] text-[#e67700] text-[11px] font-bold uppercase tracking-wider rounded-md">
                <Trophy className="w-3 h-3" />
                Hackathons
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[56px] lg:text-[60px] font-black leading-[1.03] tracking-[-0.055em] text-[#0d1033]">
              Your campus.
              <br />
              Your ideas.
              <br />
              <span className="text-[#304ffe]">Let&apos;s build something.</span>
            </h1>

            <p className="mt-6 text-[16px] sm:text-[17px] text-[#606482] leading-[1.65] max-w-[500px]">
              Hands-on workshops, bootcamps, and hackathons that help college students learn, build, compete, and discover what they are capable of.
            </p>

            {/* Verified Campus Stats Strip */}
            <div className="mt-8 pt-6 border-t border-[#eaedf6] grid grid-cols-3 gap-4 sm:gap-8 max-w-[620px]">
              <div className="pr-2">
                <strong className="block text-[26px] sm:text-[30px] font-black leading-none text-[#0d1033]">50,000+</strong>
                <span className="mt-2 block text-[12px] sm:text-[13px] font-semibold text-[#606482]">Students Impacted</span>
              </div>
              <div className="pl-2 sm:pl-4 border-l border-[#eaedf6]">
                <strong className="block text-[26px] sm:text-[30px] font-black leading-none text-[#0d1033]">250+</strong>
                <span className="mt-2 block text-[12px] sm:text-[13px] font-semibold text-[#606482]">Campus Workshops</span>
              </div>
              <div className="pl-2 sm:pl-4 border-l border-[#eaedf6]">
                <strong className="block text-[26px] sm:text-[30px] font-black leading-none text-[#0d1033]">100+</strong>
                <span className="mt-2 block text-[12px] sm:text-[13px] font-semibold text-[#606482]">Hackathons</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("campus-enquiry")}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_8px_20px_rgba(48,79,254,0.28)] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>BRING CODEGNAN TO YOUR CAMPUS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("experiences")}
                className="px-7 py-3.5 bg-transparent hover:bg-[#f0f3ff] border border-[#304ffe] text-[#304ffe] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                EXPLORE EXPERIENCES
              </button>
            </div>
          </div>

          {/* Right Hero Video Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px]">
              {/* Decorative glow aura behind video */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#304ffe]/15 to-[#8a9bff]/25 rounded-[32px] filter blur-xl -z-10" />

              {/* Hero Video Card */}
              <div className="relative rounded-[30px] overflow-hidden shadow-[0_24px_60px_rgba(20,24,68,0.16)] border-2 border-white/80 bg-black">
                <video
                  src="/gallery/Codegnan_Labs_Workshop_Overview_With_Logo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[300px] sm:h-[410px] lg:h-[455px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Campus audience context strip */}
        <div className="relative z-10 mx-2 mt-9 max-w-[1450px]">
          <div className="flex flex-col gap-2 rounded-full border border-[#e0e6f5] bg-white/80 px-5 py-3 shadow-[0_8px_24px_rgba(48,79,254,0.05)] backdrop-blur-sm sm:flex-row sm:items-center sm:gap-5 sm:px-7">
            <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.14em] text-[#304ffe] sm:text-[11px]">Built for</span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#606482] sm:gap-x-5 sm:text-[11px]">
              <span>Engineering Colleges</span>
              <span className="text-[#b6bfd8]" aria-hidden="true">|</span>
              <span>Student Communities</span>
              <span className="text-[#b6bfd8]" aria-hidden="true">|</span>
              <span>Tech Clubs</span>
              <span className="text-[#b6bfd8]" aria-hidden="true">|</span>
              <span>CSE / IT Departments</span>
              <span className="text-[#b6bfd8]" aria-hidden="true">|</span>
              <span>Placement Cells</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle curved wave at bottom */}
      <div className="hero-bottom-curve">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 text-[#ffffff]"
          fill="currentColor"
        >
          <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
