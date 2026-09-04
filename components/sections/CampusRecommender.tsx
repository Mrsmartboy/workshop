"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Check,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Users,
  GraduationCap,
  Briefcase,
  BarChart3,
  Presentation,
  Layers,
  Trophy,
  CalendarCheck,
  Rocket,
  FolderCode,
  Target,
  Clock,
  Code2,
  GitBranch,
  Terminal,
  CheckCircle2,
} from "lucide-react";

interface RecommenderProps {
  scrollToSection: (id: string) => void;
  onSelectRecommendation?: (details: {
    year: string;
    studentCount: string;
    format: string;
    outcome: string;
    recommendationTitle: string;
  }) => void;
}

export function CampusRecommender({
  scrollToSection,
  onSelectRecommendation,
}: RecommenderProps) {
  const [step, setStep] = useState(1);
  const [selectedYear, setSelectedYear] = useState<string>("I Year");
  const [selectedCount, setSelectedCount] = useState<string>("<50 Students");
  const [selectedFormat, setSelectedFormat] = useState<string>("Workshop (2–6h)");
  const [selectedOutcome, setSelectedOutcome] = useState<string>("Exposure");

  // Step 1 Options
  const yearOptions = [
    {
      id: "I Year",
      title: "I Year",
      desc: "Foundations & Spark",
      icon: GraduationCap,
      color: "bg-[#eaf0ff] text-[#3b82f6]",
    },
    {
      id: "II Year",
      title: "II Year",
      desc: "Applied Frameworks",
      icon: Users,
      color: "bg-[#f3e8ff] text-[#9333ea]",
    },
    {
      id: "III Year",
      title: "III Year",
      desc: "Advanced Systems",
      icon: BarChart3,
      color: "bg-[#fef3c7] text-[#d97706]",
    },
    {
      id: "IV Year",
      title: "IV Year",
      desc: "Placement Ready",
      icon: Briefcase,
      color: "bg-[#dcfce7] text-[#16a34a]",
    },
  ];

  // Step 2 Options
  const countOptions = [
    {
      id: "<50 Students",
      title: "<50 Students",
      desc: "Small batch, focused learning",
      icon: Users,
      color: "text-[#3b82f6]",
    },
    {
      id: "50–100 Students",
      title: "50–100 Students",
      desc: "Multiple lab batches",
      icon: Users,
      color: "text-[#9333ea]",
    },
    {
      id: "100–300 Students",
      title: "100–300 Students",
      desc: "Department / Multi-batch",
      icon: Users,
      color: "text-[#16a34a]",
    },
    {
      id: "300+ Students",
      title: "300+ Students",
      desc: "Institution-wide / Auditorium",
      icon: Users,
      color: "text-[#d97706]",
    },
  ];

  // Step 3 Options
  const formatOptions = [
    {
      id: "Workshop (2–6h)",
      title: "Workshop (2–6h)",
      desc: "Fast 1-day sprint",
      icon: Presentation,
      color: "bg-[#eaf0ff] text-[#3b82f6]",
    },
    {
      id: "Bootcamp (1–5d)",
      title: "Bootcamp (1–5d)",
      desc: "Deep hands-on build",
      icon: Layers,
      color: "bg-[#dcfce7] text-[#16a34a]",
    },
    {
      id: "Hackathon (1–2d)",
      title: "Hackathon (1–2d)",
      desc: "Competitive team sprint",
      icon: Trophy,
      color: "bg-[#fef3c7] text-[#d97706]",
    },
    {
      id: "Not Sure / Recommend",
      title: "Not Sure / Recommend",
      desc: "We match to your schedule",
      icon: CalendarCheck,
      color: "bg-[#f3e8ff] text-[#9333ea]",
    },
  ];

  // Step 4 Options
  const outcomeOptions = [
    {
      id: "Exposure",
      title: "Exposure",
      desc: "First hands-on spark with emerging tech",
      expectedOutcome: "students build a guided AI mini-project",
      icon: Rocket,
      color: "bg-[#eaf0ff] text-[#3b82f6]",
    },
    {
      id: "Skills",
      title: "Skills",
      desc: "Solid code syntax & development tools",
      expectedOutcome: "students master production workflows & tooling",
      icon: BarChart3,
      color: "bg-[#f3e8ff] text-[#9333ea]",
    },
    {
      id: "Projects",
      title: "Projects",
      desc: "Production app deployed on GitHub",
      expectedOutcome: "students build & deploy a live portfolio web application",
      icon: FolderCode,
      color: "bg-[#dcfce7] text-[#16a34a]",
    },
    {
      id: "Competition",
      title: "Competition",
      desc: "Adrenaline-fueled hackathon & prize awards",
      expectedOutcome: "student teams build & pitch working prototypes before jury",
      icon: Trophy,
      color: "bg-[#fef3c7] text-[#d97706]",
    },
    {
      id: "Placement Readiness",
      title: "Placement Readiness",
      desc: "System design & resume-grade portfolio",
      expectedOutcome: "students design microservices & clear mock interviews",
      icon: Target,
      color: "bg-[#fee2e2] text-[#dc2626]",
    },
  ];

  // Dynamic recommendation logic
  const getRecommendation = () => {
    if (selectedFormat.includes("Hackathon") || selectedOutcome === "Competition") {
      return {
        badge: "HACKATHON • COMPETE",
        titlePrefix: "Recommended for your campus: 36-Hour Innovation",
        titleHighlight: "Hackathon",
        duration: "36 Hours (2 Days)",
        outcomeText:
          "student teams build functional prototypes, pitch before industry judges, and win cash prizes & verified credentials",
        highlights: [
          { text: "AI & GenAI Track", icon: Terminal },
          { text: "Smart Campus Track", icon: Code2 },
          { text: "Jury Evaluation", icon: Trophy },
        ],
      };
    }

    if (selectedYear === "I Year") {
      if (selectedFormat.includes("Bootcamp") || selectedOutcome === "Projects") {
        return {
          badge: "BOOTCAMP • BUILD",
          titlePrefix: "Recommended for your campus: Build Your First Web App in 48 Hours",
          titleHighlight: "Bootcamp",
          duration: "2 Days Bootcamp",
          outcomeText:
            "students build, style, and deploy a live responsive website to GitHub and custom Vercel URL",
          highlights: [
            { text: "HTML5 / Modern CSS", icon: Code2 },
            { text: "Intro JavaScript", icon: Terminal },
            { text: "GitHub Pages", icon: GitBranch },
          ],
        };
      }
      return {
        badge: "WORKSHOP • EXPLORE",
        titlePrefix: "Recommended for your campus: AI Tools Workshop for I-Year Students",
        titleHighlight: "Workshop",
        duration: "4 hours",
        outcomeText: "students build a guided AI mini-project",
        highlights: [
          { text: "AI & Prompt Engineering", icon: Terminal },
          { text: "VS Code Foundations", icon: Code2 },
          { text: "Guided Mini-Project", icon: GitBranch },
        ],
      };
    }

    if (selectedYear === "II Year") {
      if (selectedOutcome === "Projects" || selectedFormat.includes("Bootcamp")) {
        return {
          badge: "BOOTCAMP • BUILD",
          titlePrefix: "Recommended for your campus: Modern Full-Stack Web Engineering",
          titleHighlight: "Bootcamp",
          duration: "3–4 Days Bootcamp",
          outcomeText:
            "students engineer a database-connected web application with React 19, REST APIs, and authentication",
          highlights: [
            { text: "React 19 & Next.js", icon: Code2 },
            { text: "Node.js & Express", icon: Terminal },
            { text: "PostgreSQL", icon: GitBranch },
          ],
        };
      }
      return {
        badge: "WORKSHOP • EXPLORE",
        titlePrefix: "Recommended for your campus: Python & Automated Data Workflows",
        titleHighlight: "Workshop",
        duration: "6 hours",
        outcomeText:
          "students analyze real datasets, automate workflows with scripts, and build an interactive data dashboard",
        highlights: [
          { text: "Python 3.12", icon: Terminal },
          { text: "Pandas & ETL", icon: Code2 },
          { text: "Streamlit UI", icon: GitBranch },
        ],
      };
    }

    if (selectedYear === "III Year") {
      return {
        badge: "BOOTCAMP • BUILD",
        titlePrefix: "Recommended for your campus: Enterprise RAG & Autonomous AI Agents",
        titleHighlight: "Bootcamp",
        duration: "4 Days Deep-Dive",
        outcomeText:
          "students build an enterprise document retrieval assistant using Vector DBs, LangChain, and Claude/OpenAI APIs",
        highlights: [
          { text: "LangChain & RAG", icon: Code2 },
          { text: "Vector DBs", icon: Terminal },
          { text: "Claude Code", icon: GitBranch },
        ],
      };
    }

    // IV Year
    return {
      badge: "BOOTCAMP • PLACEMENT READY",
      titlePrefix: "Recommended for your campus: Placement-Oriented System Design & Capstone",
      titleHighlight: "Lab",
      duration: "4 Days Intensive",
      outcomeText:
        "students design high-throughput microservices, optimize SQL queries, and polish production GitHub resumes for placements",
      highlights: [
        { text: "High-Level Design", icon: Code2 },
        { text: "Microservices", icon: Terminal },
        { text: "Mock Interviews", icon: GitBranch },
      ],
    };
  };

  const recommendation = getRecommendation();

  const handleApplyRecommendation = () => {
    if (onSelectRecommendation) {
      onSelectRecommendation({
        year: selectedYear,
        studentCount: selectedCount,
        format: selectedFormat,
        outcome: selectedOutcome,
        recommendationTitle: `${recommendation.titlePrefix} ${recommendation.titleHighlight} (Expected outcome: ${recommendation.outcomeText})`,
      });
    }
    scrollToSection("campus-enquiry");
  };

  const handleReset = () => {
    setStep(1);
    setSelectedYear("I Year");
    setSelectedCount("<50 Students");
    setSelectedFormat("Workshop (2–6h)");
    setSelectedOutcome("Exposure");
  };

  // Step header illustration mapping
  const getHeaderIllustration = () => {
    if (step === 1) {
      return {
        src: "/gallery/planner_clipboard.png",
        alt: "Clipboard with checklist for students",
        textLines: ["Better", "Students", "Brighter", "Campuses"],
      };
    }
    if (step === 2) {
      return {
        src: "/gallery/campus-graduates.png",
        alt: "Three 3D students with graduation caps",
        textLines: ["Bigger", "Learning", "Together"],
      };
    }
    if (step === 3) {
      return {
        src: "/gallery/planner_calendar.png",
        alt: "3D calendar and clock",
        textLines: ["Flexible", "Learning", "Real", "Impact"],
      };
    }
    return {
      src: "/gallery/planner_clipboard.png",
      alt: "Checklist and graduation cap",
      textLines: ["One", "Decision", "Lifelong", "Impact"],
    };
  };

  const headerAsset = getHeaderIllustration();

  return (
    <section
      id="campus-recommender"
      className="relative bg-[#ffffff] py-16 sm:py-20 lg:py-24 border-t border-[#eaedf6] overflow-hidden"
    >
      {/* Background Soft Blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#edf3ff]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#f3eeff]/80 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        {/* Top Header Row with Left Cursive Note, Center Headline, and Right 3D Illustration matching screenshots */}
        <div className="relative mb-12 flex flex-col items-center justify-between lg:flex-row">
          {/* Left Hand-drawn Cursive Note */}
          <div className="hidden xl:flex flex-col items-center select-none pointer-events-none absolute left-0 top-6">
            <span className="font-serif italic text-[16px] leading-[1.2] text-[#4f7cf7] font-semibold text-center -rotate-[8deg] tracking-tight">
              Plan<br />Engage<br />Build<br />Grow
            </span>
            <svg
              className="w-12 h-10 text-[#4f7cf7] mt-1 -rotate-[20deg]"
              viewBox="0 0 50 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10,15 C20,28 35,32 45,20" />
              <path d="M45,20 L35,22 M45,20 L40,32" />
            </svg>
          </div>

          {/* Center: Badge, Headline, and Subtitle */}
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#cbd8ff] bg-[#eff4ff] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#304ffe] mb-3.5">
              <Sparkles className="h-3.5 w-3.5 text-[#304ffe]" />
              INTERACTIVE CAMPUS PLANNER
            </span>

            <h2 className="text-[34px] sm:text-[46px] lg:text-[50px] font-black tracking-[-0.04em] text-[#0d1033] leading-tight">
              Design Your{" "}
              <span className="bg-gradient-to-r from-[#304ffe] via-[#5d44ec] to-[#a855f7] bg-clip-text text-transparent">
                Campus Lab
              </span>
            </h2>

            <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#606482] leading-relaxed max-w-[620px] mx-auto">
              Answer 4 quick questions about your students. We will instantly recommend the right technology, duration, and deliverables before you talk to us.
            </p>
          </div>

          {/* Right: Step-specific 3D Illustration & Right Hand-drawn Cursive Note */}
          <div className="hidden lg:flex items-center gap-2 absolute right-0 top-0 select-none">
            <div className="relative w-36 h-36 xl:w-44 xl:h-44">
              <Image
                src={headerAsset.src}
                alt={headerAsset.alt}
                fill
                sizes="180px"
                className="object-contain drop-shadow-[0_12px_28px_rgba(48,79,254,0.12)]"
              />
            </div>

            <div className="flex flex-col items-center pointer-events-none">
              <span className="font-serif italic text-[15px] leading-[1.2] text-[#4f7cf7] font-semibold text-center rotate-[8deg] tracking-tight">
                {headerAsset.textLines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
              <svg
                className="w-10 h-10 text-[#4f7cf7] mt-1 rotate-[10deg]"
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

        {/* Main Planner Card Box matching screenshot */}
        <div className="rounded-[32px] bg-white border border-[#dfe5f3] shadow-[0_20px_50px_rgba(20,24,68,0.06)] overflow-hidden">
          {/* Top Step Progress Bar */}
          <div className="px-6 sm:px-10 py-5 border-b border-[#edf0f8] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Step 1: Students */}
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  step > 1
                    ? "text-[#10b981]"
                    : step === 1
                    ? "text-[#304ffe]"
                    : "text-[#64748b]"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black ${
                    step > 1
                      ? "bg-[#10b981] text-white"
                      : step === 1
                      ? "bg-[#304ffe] text-white"
                      : "bg-[#e2e8f0] text-[#64748b]"
                  }`}
                >
                  {step > 1 ? <Check className="w-3.5 h-3.5" /> : "1"}
                </span>
                <span>Students</span>
              </button>

              <span className="text-[#cbd5e1] hidden sm:inline">—</span>

              {/* Step 2: Count */}
              <button
                type="button"
                onClick={() => setStep(2)}
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  step > 2
                    ? "text-[#10b981]"
                    : step === 2
                    ? "text-[#304ffe]"
                    : "text-[#64748b]"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black ${
                    step > 2
                      ? "bg-[#10b981] text-white"
                      : step === 2
                      ? "bg-[#304ffe] text-white"
                      : "bg-[#e2e8f0] text-[#64748b]"
                  }`}
                >
                  {step > 2 ? <Check className="w-3.5 h-3.5" /> : "2"}
                </span>
                <span>Count</span>
              </button>

              <span className="text-[#cbd5e1] hidden sm:inline">—</span>

              {/* Step 3: Format */}
              <button
                type="button"
                onClick={() => setStep(3)}
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  step > 3
                    ? "text-[#10b981]"
                    : step === 3
                    ? "text-[#304ffe]"
                    : "text-[#64748b]"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black ${
                    step > 3
                      ? "bg-[#10b981] text-white"
                      : step === 3
                      ? "bg-[#304ffe] text-white"
                      : "bg-[#e2e8f0] text-[#64748b]"
                  }`}
                >
                  {step > 3 ? <Check className="w-3.5 h-3.5" /> : "3"}
                </span>
                <span>Format</span>
              </button>

              <span className="text-[#cbd5e1] hidden sm:inline">—</span>

              {/* Step 4: Outcome */}
              <button
                type="button"
                onClick={() => setStep(4)}
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  step === 4 ? "text-[#304ffe]" : "text-[#64748b]"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black ${
                    step === 4
                      ? "bg-[#304ffe] text-white"
                      : "bg-[#e2e8f0] text-[#64748b]"
                  }`}
                >
                  4
                </span>
                <span>Outcome</span>
              </button>
            </div>

            {/* Reset Button */}
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold text-[#606482] hover:text-[#304ffe] flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Interactive Steps Body */}
          <div className="p-6 sm:p-10">
            {/* STEP 1: WHO ARE THE STUDENTS? */}
            {step === 1 && (
              <div className="animate-in fade-in duration-300">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#304ffe] block mb-2">
                  STEP 1 OF 4
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0d1033] mb-2">
                  Who are the{" "}
                  <span className="text-[#304ffe]">students?</span>
                </h3>
                <p className="text-sm text-[#606482] mb-8">
                  Select the primary academic year cohort participating in this program.
                </p>

                {/* 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {yearOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = selectedYear === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedYear(opt.id)}
                        className={`relative p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                          isSelected
                            ? "border-2 border-[#304ffe] bg-[#f4f7ff] shadow-[0_8px_20px_rgba(48,79,254,0.12)]"
                            : "border border-[#e2e8f0] bg-white hover:border-[#cbd5e1]"
                        }`}
                      >
                        {/* Radio / Check Circle on Top Right */}
                        <div className="absolute top-4 right-4">
                          {isSelected ? (
                            <div className="w-5 h-5 rounded-full bg-[#304ffe] text-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-[#cbd5e1]" />
                          )}
                        </div>

                        <div
                          className={`w-12 h-12 rounded-xl ${opt.color} flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="pr-6">
                          <span className="text-base font-black text-[#0d1033] block">
                            {opt.title}
                          </span>
                          <span className="text-xs font-semibold text-[#606482]">
                            {opt.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Navigation */}
                <div className="flex justify-end pt-4 border-t border-[#f0f2f8]">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#304ffe] text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-[#253bdf] shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <span>NEXT: BATCH SIZE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: HOW MANY STUDENTS WILL PARTICIPATE? */}
            {step === 2 && (
              <div className="animate-in fade-in duration-300">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#304ffe] block mb-2">
                  STEP 2 OF 4
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0d1033] mb-2">
                  How many students will{" "}
                  <span className="text-[#304ffe]">participate?</span>
                </h3>
                <p className="text-sm text-[#606482] mb-8">
                  From single computer lab batches to institution-wide auditoriums.
                </p>

                {/* 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {countOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = selectedCount === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedCount(opt.id)}
                        className={`relative p-6 rounded-2xl border text-center transition-all flex flex-col items-center justify-center min-h-[140px] ${
                          isSelected
                            ? "border-2 border-[#304ffe] bg-[#f4f7ff] shadow-[0_8px_20px_rgba(48,79,254,0.12)]"
                            : "border border-[#e2e8f0] bg-white hover:border-[#cbd5e1]"
                        }`}
                      >
                        {/* Radio indicator top-right */}
                        <div className="absolute top-4 right-4">
                          {isSelected ? (
                            <div className="w-5 h-5 rounded-full bg-[#304ffe] text-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-[#cbd5e1]" />
                          )}
                        </div>

                        <Icon className={`w-8 h-8 mb-2 ${opt.color}`} />
                        <span className="text-base font-black text-[#0d1033] block">
                          {opt.title}
                        </span>
                        <span className="text-xs font-semibold text-[#606482] mt-1">
                          {opt.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Navigation */}
                <div className="flex justify-between items-center pt-4 border-t border-[#f0f2f8]">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#606482] hover:text-[#0d1033] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#304ffe] text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-[#253bdf] shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <span>NEXT: FORMAT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: WHAT FORMAT SUITS YOUR CALENDAR? */}
            {step === 3 && (
              <div className="animate-in fade-in duration-300">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#304ffe] block mb-2">
                  STEP 3 OF 4
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0d1033] mb-2">
                  What format suits your{" "}
                  <span className="text-[#304ffe]">calendar?</span>
                </h3>
                <p className="text-sm text-[#606482] mb-8">
                  Pick your preferred duration or select &ldquo;Not Sure&rdquo; for our suggestion.
                </p>

                {/* 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {formatOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = selectedFormat === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedFormat(opt.id)}
                        className={`relative p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                          isSelected
                            ? "border-2 border-[#304ffe] bg-[#f4f7ff] shadow-[0_8px_20px_rgba(48,79,254,0.12)]"
                            : "border border-[#e2e8f0] bg-white hover:border-[#cbd5e1]"
                        }`}
                      >
                        <div className="absolute top-4 right-4">
                          {isSelected ? (
                            <div className="w-5 h-5 rounded-full bg-[#304ffe] text-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-[#cbd5e1]" />
                          )}
                        </div>

                        <div
                          className={`w-12 h-12 rounded-xl ${opt.color} flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="pr-6">
                          <span className="text-sm font-black text-[#0d1033] block">
                            {opt.title}
                          </span>
                          <span className="text-xs font-semibold text-[#606482]">
                            {opt.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Navigation */}
                <div className="flex justify-between items-center pt-4 border-t border-[#f0f2f8]">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#606482] hover:text-[#0d1033] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#304ffe] text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-[#253bdf] shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <span>NEXT: DESIRED OUTCOME</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: WHAT IS THE PRIMARY DESIRED OUTCOME? */}
            {step === 4 && (
              <div className="animate-in fade-in duration-300">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#304ffe] block mb-2">
                  STEP 4 OF 4
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0d1033] mb-2">
                  What is the{" "}
                  <span className="bg-gradient-to-r from-[#304ffe] to-[#9333ea] bg-clip-text text-transparent">
                    primary desired outcome?
                  </span>
                </h3>
                <p className="text-sm text-[#606482] mb-8">
                  What must students walk away with at the end of the program?
                </p>

                {/* 5 Options Grid matching Screenshot 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                  {outcomeOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = selectedOutcome === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedOutcome(opt.id)}
                        className={`relative p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                          isSelected
                            ? "border-2 border-[#304ffe] bg-[#f4f7ff] shadow-[0_8px_20px_rgba(48,79,254,0.12)]"
                            : "border border-[#e2e8f0] bg-white hover:border-[#cbd5e1]"
                        }`}
                      >
                        <div className="absolute top-4 right-4">
                          {isSelected ? (
                            <div className="w-5 h-5 rounded-full bg-[#304ffe] text-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-[#cbd5e1]" />
                          )}
                        </div>

                        <div
                          className={`w-12 h-12 rounded-xl ${opt.color} flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="pr-6">
                          <span className="text-base font-black text-[#0d1033] block">
                            {opt.title}
                          </span>
                          <span className="text-xs font-semibold text-[#606482]">
                            {opt.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* DYNAMIC RECOMMENDATION RESULT CARD matching Screenshot 4 */}
                <div className="rounded-[28px] bg-gradient-to-r from-[#edf4ff] via-[#f7faff] to-[#edf4ff] border border-[#dce4ff] p-6 sm:p-8 lg:p-9 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left Column: Recommendation Content */}
                    <div className="max-w-[780px]">
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="px-3.5 py-1 rounded-full bg-[#304ffe] text-white text-[10px] font-black uppercase tracking-wider">
                          {recommendation.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[#596887] font-semibold">
                          <Clock className="w-3.5 h-3.5 text-[#304ffe]" />
                          Suggested duration: {recommendation.duration}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h4 className="text-2xl sm:text-3xl font-black text-[#0d1033] leading-tight mb-3">
                        {recommendation.titlePrefix}{" "}
                        <span className="text-[#304ffe]">
                          {recommendation.titleHighlight}
                        </span>
                      </h4>

                      {/* Explicit Expected Outcome Highlight */}
                      <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-[#d2defa] shadow-[0_4px_16px_rgba(48,79,254,0.06)] flex items-start gap-3">
                        <div className="w-7 h-7 rounded-xl bg-[#eff4ff] text-[#304ffe] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#304ffe]" />
                        </div>
                        <div className="text-sm leading-relaxed">
                          <span className="font-extrabold text-[#0d1033]">
                            Expected outcome:
                          </span>{" "}
                          <span className="font-semibold text-[#304ffe]">
                            {recommendation.outcomeText}
                          </span>
                        </div>
                      </div>

                      {/* Key Highlights Chips */}
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="text-xs font-black uppercase tracking-wider text-[#0d1033] mr-1">
                          Key Highlights:
                        </span>
                        {recommendation.highlights.map((h, i) => {
                          const Icon = h.icon;
                          return (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-xs font-bold text-[#0d1033] border border-[#dce4ff] shadow-sm"
                            >
                              <Icon className="w-3.5 h-3.5 text-[#304ffe]" />
                              <span>{h.text}</span>
                            </span>
                          );
                        })}
                      </div>

                      {/* Configured For & CTA Button */}
                      <div className="pt-5 border-t border-[#dfe6f5] flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-[#606482]">
                          Configured for |{" "}
                          <strong className="text-[#0d1033] font-black">
                            {selectedYear}
                          </strong>{" "}
                          •{" "}
                          <strong className="text-[#0d1033] font-black">
                            {selectedCount}
                          </strong>{" "}
                          •{" "}
                          <strong className="text-[#0d1033] font-black">
                            {selectedOutcome}
                          </strong>
                        </div>

                        <button
                          type="button"
                          onClick={handleApplyRecommendation}
                          className="px-7 py-3.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-[0_8px_20px_rgba(48,79,254,0.28)] transition-all flex items-center gap-2 hover:-translate-y-0.5"
                        >
                          <span>TALK TO CODEGNAN LABS ABOUT THIS</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: 3D Laptop with Floating Badges Asset */}
                    <div className="hidden lg:flex shrink-0 justify-center">
                      <div className="relative w-52 h-52 xl:w-60 xl:h-60">
                        <Image
                          src="/gallery/planner_laptop_ai.png"
                          alt="3D Laptop showing code and floating badges"
                          fill
                          sizes="240px"
                          className="object-contain drop-shadow-[0_12px_24px_rgba(48,79,254,0.15)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back to Format Link */}
                <div className="mt-6 flex justify-start">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#606482] hover:text-[#0d1033] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Format</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
