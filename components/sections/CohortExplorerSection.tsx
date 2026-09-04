"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COHORT_STAGES } from "@/data/content";
import {
  ArrowRight,
  BriefcaseBusiness,
  Box,
  Bot,
  CheckCircle2,
  Clock3,
  Code2,
  GraduationCap,
  Lightbulb,
  Settings2,
  Sparkles,
  UserRound,
} from "lucide-react";

const yearIcons = [UserRound, GraduationCap, Settings2, BriefcaseBusiness];
const yearIconColors = [
  { iconBg: "bg-[#eaf0ff]", iconText: "text-[#3b82f6]" },
  { iconBg: "bg-[#e0f7fa]", iconText: "text-[#00acc1]" },
  { iconBg: "bg-[#e3f2fd]", iconText: "text-[#1976d2]" },
  { iconBg: "bg-[#fbe9e7]", iconText: "text-[#f4511e]" },
];

function formatBadgeStyles(format: string) {
  if (format === "Workshop") {
    return {
      pill: "bg-[#e0f2fe] text-[#0284c7]",
      iconBg: "bg-[#e0f2fe] text-[#0284c7]",
      checkColor: "text-[#0284c7]",
    };
  }
  if (format === "Bootcamp") {
    return {
      pill: "bg-[#dcfce7] text-[#16a34a]",
      iconBg: "bg-[#dcfce7] text-[#16a34a]",
      checkColor: "text-[#16a34a]",
    };
  }
  return {
    pill: "bg-[#fef3c7] text-[#d97706]",
    iconBg: "bg-[#fef3c7] text-[#d97706]",
    checkColor: "text-[#d97706]",
  };
}

function formatIcon(format: string) {
  if (format === "Workshop") return Bot;
  if (format === "Bootcamp") return Box;
  return Lightbulb;
}

export function CohortExplorerSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const currentStage = COHORT_STAGES[activeYearIndex];

  return (
    <section
      id="cohort-explorer"
      className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-22 border-t border-[#eaedf6]"
    >
      {/* Background Soft Radial Glows */}
      <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#edf3ff]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#f3eeff]/80 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* Top Header Row with Headline on Left & 3D Student Artwork on Right */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Heading & Subtitle */}
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cbd8ff] bg-[#eff4ff] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#304ffe]">
              <GraduationCap className="h-4 w-4 text-[#304ffe]" />
              Relevant by student year
            </span>

            <h2 className="mt-4 text-[38px] font-black leading-[1.05] tracking-[-0.045em] text-[#0d1033] sm:text-[52px] lg:text-[58px]">
              From Day 1 Freshers to
              <br />
              <span className="bg-gradient-to-r from-[#304ffe] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Placement Ready Seniors.
              </span>
            </h2>

            <p className="mt-4 max-w-[660px] text-[15px] leading-[1.65] text-[#606482] sm:text-[16px]">
              Colleges don&apos;t teach one-size-fits-all, and neither do we. Codegnan Labs adapts its engineering depth, mentorship style, and project deliverables to each student year.
            </p>
          </div>

          {/* Right Column: 3D Student Illustration with "One Year Closer to Your Dreams" Annotation */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[560px]">
              <Image
                src="/gallery/student.png"
                alt="Codegnan Labs student learning, building, and growing with hands-on technology"
                width={560}
                height={320}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(48,79,254,0.1)]"
              />

              {/* Hand-drawn cursive note with curved arrow matching the screenshot */}
              <div className="hidden sm:flex flex-col items-center absolute -right-2 sm:-right-4 top-4 lg:top-8 select-none pointer-events-none">
                <span className="font-serif italic text-[15px] lg:text-[17px] leading-[1.15] text-[#4f7cf7] font-semibold text-center rotate-[6deg] tracking-tight">
                  One<br />Year<br />Closer<br />to Your<br />Dreams
                </span>
                <svg
                  className="w-10 h-10 lg:w-12 lg:h-12 text-[#4f7cf7] mt-1 -rotate-[15deg]"
                  viewBox="0 0 50 45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10,40 C18,36 32,25 38,10" />
                  <path d="M30,8 L40,8 L38,18" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cohort Year Tabs Grid matching screenshot */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {COHORT_STAGES.map((stage, index) => {
            const Icon = yearIcons[index];
            const colors = yearIconColors[index];
            const isActive = activeYearIndex === index;

            return (
              <button
                key={stage.year}
                type="button"
                onClick={() => setActiveYearIndex(index)}
                className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 sm:p-5 ${
                  isActive
                    ? "border-[#304ffe] bg-[#f4f7ff] shadow-[0_10px_28px_rgba(48,79,254,0.14)]"
                    : "border-[#dfe6f5] bg-white hover:border-[#cbd5e1] hover:shadow-[0_6px_18px_rgba(20,24,68,0.06)]"
                }`}
                aria-pressed={isActive}
              >
                {/* Icon in soft rounded box */}
                <div
                  className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.iconText} p-3`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <strong className="text-[15px] font-black uppercase tracking-wide text-[#0d1033]">
                      {stage.year}
                    </strong>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                        isActive
                          ? "bg-[#304ffe] text-white shadow-sm"
                          : "bg-[#f1f5f9] text-[#64748b]"
                      }`}
                    >
                      {stage.verb}
                    </span>
                  </div>
                  <span className="mt-1.5 block text-[12px] leading-[1.4] text-[#606482]">
                    {stage.tagline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Cohort Detail Container matching screenshot */}
        <div className="mt-6 rounded-[28px] border border-[#dfe6f5] bg-white p-6 shadow-[0_16px_45px_rgba(20,24,68,0.06)] sm:p-8 lg:p-9">
          {/* Header row: Cohort title + Stage badge + Button */}
          <div className="flex flex-col justify-between gap-5 border-b border-[#edf0f7] pb-7 lg:flex-row lg:items-center">
            <div className="max-w-[820px]">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-[28px] font-black tracking-[-0.03em] text-[#0d1033] sm:text-[32px]">
                  {currentStage.year} Cohort
                </h3>
                <span className="rounded-full border border-[#d5e0ff] bg-[#eef3ff] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#304ffe]">
                  STAGE: {currentStage.verb}
                </span>
              </div>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-[#606482]">
                {currentStage.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("campus-enquiry")}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#304ffe] px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(48,79,254,0.28)] transition-all hover:bg-[#253bdf] hover:-translate-y-0.5"
            >
              <span>BRING {currentStage.year.toUpperCase()} LABS TO CAMPUS</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* 3 Experience Cards Grid */}
          <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {currentStage.recommendedExperiences.map((experience) => {
              const Icon = formatIcon(experience.format);
              const styles = formatBadgeStyles(experience.format);

              return (
                <article
                  key={experience.title}
                  className="group relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-2xl border border-[#e2e8f5] bg-[#fbfcfe] p-6 transition-all hover:-translate-y-1 hover:border-[#cbd8ff] hover:shadow-[0_14px_30px_rgba(48,79,254,0.08)]"
                >
                  {/* Subtle Background Watermark Decoration */}
                  <div className="pointer-events-none absolute right-4 bottom-10 select-none opacity-[0.06] transition-opacity group-hover:opacity-[0.1]">
                    {experience.format === "Workshop" ? (
                      <span className="text-6xl font-mono font-black text-[#0284c7]">&lt;/&gt;</span>
                    ) : experience.format === "Bootcamp" ? (
                      <Box className="w-20 h-20 text-[#16a34a]" />
                    ) : (
                      <Lightbulb className="w-20 h-20 text-[#d97706]" />
                    )}
                  </div>

                  <div>
                    {/* Header: Icon + Format Badge + Duration */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-xl ${styles.iconBg} flex items-center justify-center`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span
                          className={`rounded-md px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${styles.pill}`}
                        >
                          {experience.format}
                        </span>
                      </div>

                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#606482]">
                        <Clock3 className="h-4 w-4 text-[#304ffe]" />
                        {experience.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="mt-4 text-[19px] font-black leading-[1.25] tracking-[-0.02em] text-[#0d1033] group-hover:text-[#304ffe] transition-colors">
                      {experience.title}
                    </h4>

                    {/* Skills & Deliverables List */}
                    <div className="mt-5">
                      <span className="text-[10px] font-black uppercase tracking-[0.1em] text-[#8e98b0] block">
                        SKILLS &amp; DELIVERABLES:
                      </span>
                      <div className="mt-2.5 space-y-2">
                        {experience.skills.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center gap-2.5 text-[13px] font-semibold text-[#475569]"
                          >
                            <CheckCircle2
                              className={`h-4 w-4 shrink-0 ${styles.checkColor}`}
                            />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Request Syllabus Link */}
                  <button
                    type="button"
                    onClick={() => scrollToSection("campus-enquiry")}
                    className="mt-6 flex items-center gap-2 border-t border-[#edf1f8] pt-4 text-[13px] font-black text-[#304ffe] transition-colors hover:text-[#253bdf]"
                  >
                    <span>Request Cohort Syllabus</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
