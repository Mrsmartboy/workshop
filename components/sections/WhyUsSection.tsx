"use client";

import React from "react";
import { Handshake, Sparkles } from "lucide-react";
import {
  WorldClassTeachersIcon,
  GlobalStudentsCommunityIcon,
  TopNotchCoursesIcon,
  OneOnOneMentorshipIcon,
} from "@/components/ui/Icons";

export function WhyUsSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-16 sm:py-24 border-t border-[#eaedf6]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-3 border border-[#dce4ff]">
              <Sparkles className="h-3.5 w-3.5" />
              The Codegnan Advantage
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-black tracking-tight text-[#0d1033] leading-[1.1]">
              Why Colleges Choose{" "}
              <span className="bg-gradient-to-r from-[#2368ff] to-[#7629df] bg-clip-text text-transparent">
                Codegnan Labs
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("campus-enquiry")}
            className="self-start lg:self-auto inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-[12.5px] font-bold uppercase tracking-wider rounded-xl shadow-md transition-all hover:-translate-y-0.5 shrink-0"
          >
            <Handshake className="h-4.5 w-4.5" />
            <span>PARTNER WITH US</span>
          </button>
        </div>

        {/* 2x2 Benefit Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Feature 1: Industry Practitioners */}
          <div className="flex items-start gap-5 sm:gap-6 rounded-[22px] border border-[#e8edfa] bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#304ffe]/30 transition-all">
            <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#f0f3ff] flex items-center justify-center shadow-xs">
              <WorldClassTeachersIcon />
            </div>
            <div>
              <h3 className="text-[19px] sm:text-[21px] font-extrabold text-[#0d1033] leading-snug">
                Industry Practitioners
              </h3>
              <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#606482] leading-relaxed">
                Students learn directly from trainers and engineering leads who teach production-grade toolsets, modern architectural patterns, and industry best practices.
              </p>
            </div>
          </div>

          {/* Feature 2: Build, Don't Just Listen */}
          <div className="flex items-start gap-5 sm:gap-6 rounded-[22px] border border-[#e8edfa] bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#304ffe]/30 transition-all">
            <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#edf4ff] flex items-center justify-center shadow-xs">
              <TopNotchCoursesIcon />
            </div>
            <div>
              <h3 className="text-[19px] sm:text-[21px] font-extrabold text-[#0d1033] leading-snug">
                Build, Don&apos;t Just Listen
              </h3>
              <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#606482] leading-relaxed">
                80% hands-on coding from start to finish. Every student builds working applications, fixes live bugs, and walks away with deployable code on GitHub.
              </p>
            </div>
          </div>

          {/* Feature 3: Designed for College Students */}
          <div className="flex items-start gap-5 sm:gap-6 rounded-[22px] border border-[#e8edfa] bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#304ffe]/30 transition-all">
            <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#f3efff] flex items-center justify-center shadow-xs">
              <OneOnOneMentorshipIcon />
            </div>
            <div>
              <h3 className="text-[19px] sm:text-[21px] font-extrabold text-[#0d1033] leading-snug">
                Designed for College Students
              </h3>
              <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#606482] leading-relaxed">
                Tailored specifically for 1st-year exploratory cohorts, 2nd/3rd-year technical depth, or final-year placement hackathons aligned with company hiring drives.
              </p>
            </div>
          </div>

          {/* Feature 4: Large-Scale Campus Execution */}
          <div className="flex items-start gap-5 sm:gap-6 rounded-[22px] border border-[#e8edfa] bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#304ffe]/30 transition-all">
            <div className="shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#e8faf5] flex items-center justify-center shadow-xs">
              <GlobalStudentsCommunityIcon />
            </div>
            <div>
              <h3 className="text-[19px] sm:text-[21px] font-extrabold text-[#0d1033] leading-snug">
                Large-Scale Campus Execution
              </h3>
              <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#606482] leading-relaxed">
                Proven capability to mobilize multi-mentor teams, managing 100 to 1,000+ students simultaneously across labs and auditoriums with zero faculty friction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
