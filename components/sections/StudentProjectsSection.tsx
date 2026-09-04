"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Trophy,
  GraduationCap,
} from "lucide-react";
import { STUDENT_PROJECTS } from "@/data/content";

export function StudentProjectsSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | "Bootcamp" | "Workshop" | "Hackathon"
  >("All");

  const filteredProjects =
    selectedFilter === "All"
      ? STUDENT_PROJECTS
      : STUDENT_PROJECTS.filter((p) => p.format === selectedFilter);

  return (
    <section
      id="student-projects"
      className="relative bg-[#ffffff] py-16 sm:py-20 lg:py-24 border-t border-[#eaedf6] overflow-hidden"
    >
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#f0fdf4]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#eff6ff]/80 blur-3xl" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* ═══════════════════════════════════════════════════
            TOP HEADER WITH HEADLINE, SUBTITLE & 3D STUDENT ASSET
        ═══════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10 sm:mb-12">
          {/* Left Column: Eyebrow, Title & Subtitle */}
          <div className="max-w-[680px]">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#ecfdf5] text-[#059669] text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-3.5 border border-[#a7f3d0]">
              <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
              TANGIBLE STUDENT PROOF
            </span>

            <h2 className="text-[34px] sm:text-[46px] lg:text-[50px] font-black tracking-[-0.04em] text-[#0d1033] leading-[1.08]">
              They Do Not Just Attend.
              <br />
              <span className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#c026d3] bg-clip-text text-transparent">
                They Actually Build.
              </span>
            </h2>

            <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#606482] leading-relaxed max-w-[580px]">
              Certificates are good, but live deployed projects build unbeatable placement resumes and genuine engineering confidence.
            </p>
          </div>

          {/* Right Column: 3D Student Illustration with Cursive Note & Checklist */}
          <div className="relative flex items-center gap-4 sm:gap-6 self-center lg:self-auto select-none">
            {/* Cursive Note & Curved Arrow */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="font-serif italic text-[15px] sm:text-[17px] text-[#304ffe] font-bold leading-tight -rotate-[6deg]">
                From Learning
                <br />
                to Real Impact
              </span>
              <svg
                className="w-10 h-8 text-[#304ffe] mt-1 -rotate-[15deg]"
                viewBox="0 0 50 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10,8 C25,18 35,22 45,15" />
                <path d="M45,15 L35,14 M45,15 L40,24" />
              </svg>
            </div>

            {/* Checklist Box */}
            <div className="bg-white/95 rounded-2xl border border-[#dce4ff] p-3.5 sm:p-4 shadow-[0_8px_24px_rgba(48,79,254,0.08)] space-y-2 text-xs font-bold text-[#0d1033] shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Real Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Deployed Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Placement Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Industry Skills</span>
              </div>
            </div>

            {/* 3D Student Character */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 shrink-0">
              <Image
                src="/gallery/student.png"
                alt="Student building live project"
                fill
                sizes="192px"
                className="object-contain drop-shadow-[0_12px_24px_rgba(48,79,254,0.15)]"
              />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            FILTER TABS
        ═══════════════════════════════════════════════════ */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#f4f7fc] border border-[#e2e8f0]">
            {(
              [
                { id: "All", label: "ALL" },
                { id: "Bootcamp", label: "BOOTCAMP" },
                { id: "Workshop", label: "WORKSHOP" },
                { id: "Hackathon", label: "HACKATHON" },
              ] as const
            ).map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                  selectedFilter === filter.id
                    ? "bg-[#0d1033] text-white shadow-sm"
                    : "text-[#606482] hover:text-[#0d1033] hover:bg-white/70"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            STUDENT PROJECT CARDS GRID (1 Col on Mobile/Tablet, 2 Col on Desktop)
        ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-[28px] bg-white border border-[#e2e8f5] overflow-hidden shadow-[0_12px_36px_rgba(20,24,68,0.06)] flex flex-col justify-between hover:border-[#304ffe]/40 transition-all group"
            >
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                {/* Top Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                      project.format === "Bootcamp"
                        ? "bg-[#ecfdf5] text-[#059669]"
                        : project.format === "Hackathon"
                        ? "bg-[#fffbeb] text-[#d97706]"
                        : "bg-[#eff6ff] text-[#2563eb]"
                    }`}
                  >
                    {project.format}
                  </span>
                  <span className="text-xs font-semibold text-[#64748b]">
                    {project.builtDuring}
                  </span>
                </div>

                {/* 2-Column Split: Content on Left, 3D Illustration on Right */}
                <div className="flex flex-col sm:flex-row gap-5 lg:gap-6 items-center sm:items-start justify-between">
                  {/* Left Column: Title, Description, Team, Proof & Stack */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0d1033] mb-2 group-hover:text-[#304ffe] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#55637e] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Team & Proof Evidence */}
                    <div className="space-y-2 pt-2 border-t border-[#f0f2f8] text-xs">
                      <div className="flex items-center gap-2 text-[#0d1033] font-bold">
                        <Users className="w-4 h-4 text-[#304ffe] shrink-0" />
                        <span>{project.team}</span>
                      </div>

                      <div className="flex items-start gap-2 text-[#16a34a] font-semibold leading-snug">
                        {project.format === "Hackathon" ? (
                          <Trophy className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                        )}
                        <span>{project.outputEvidence}</span>
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 rounded-lg bg-[#edf3fa] text-[#1e3b6e] text-xs font-semibold border border-[#dae4f2] shadow-2xs hover:bg-[#e4edf7] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: 3D Illustration Image */}
                  <div className="relative w-40 sm:w-48 lg:w-44 xl:w-56 h-40 sm:h-48 lg:h-44 xl:h-56 shrink-0 flex items-center justify-center self-center sm:self-center">
                    <Image
                      src={project.image || "/gallery/ai_resume.png"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                      className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════
            BOTTOM CONVERSION BANNER (Matching Screenshot)
        ═══════════════════════════════════════════════════ */}
        <div className="rounded-[28px] bg-gradient-to-r from-[#eef4ff] via-[#f7f9ff] to-[#fef2f4] border border-[#dbe4fa] p-6 sm:p-8 lg:p-9 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#304ffe] to-[#6366f1] text-white flex items-center justify-center shadow-md shrink-0">
              <GraduationCap className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0d1033] leading-tight">
                Real Skills. Real Projects. Real Opportunities.
              </h3>
              <p className="mt-1 text-sm text-[#606482]">
                Join our Bootcamps, Workshops and Hackathons to build what actually matters.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("campus-recommender")}
            className="self-start md:self-auto px-7 py-3.5 bg-[#0d1033] hover:bg-[#1a2050] text-white text-xs sm:text-sm font-black tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0 hover:-translate-y-0.5"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
