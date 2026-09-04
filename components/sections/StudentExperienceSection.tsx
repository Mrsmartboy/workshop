"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
  Sparkles,
} from "lucide-react";

type FeedbackItem = {
  initials: string;
  name: string;
  role: string;
  context: string;
  quote: string;
};

const studentFeedback: FeedbackItem[] = [
  {
    initials: "ST",
    name: "Sai Teja",
    role: "II Year Member",
    context: "IT, GITAM",
    quote: "One counselling session cleared my confusion between Web, AI, and Data. The roadmap made everything click.",
  },
  {
    initials: "RK",
    name: "Ravi Kumar",
    role: "II Year Member",
    context: "ECE, JNTU Kakinada",
    quote: "Zero coding background in first year. The semester roadmap gave me clarity - I know what to build and when.",
  },
  {
    initials: "PL",
    name: "Priya Lakshmi",
    role: "IV Year Member",
    context: "CSE, VITS Guntur",
    quote: "My parents were worried about the fees. The progress updates and visible projects convinced them completely.",
  },
  {
    initials: "DS",
    name: "Divya Sri",
    role: "II Year Member",
    context: "MECH, ANITS",
    quote: "Mechanical to tech - the program made the path crystal clear. No more guessing what to learn.",
  },
  {
    initials: "AR",
    name: "Anusha Reddy",
    role: "III Year Member",
    context: "CSE, VR Siddhartha",
    quote: "The structured plan saved me months of wasted time. I am building real projects every semester now.",
  },
  {
    initials: "KB",
    name: "Kiran Babu",
    role: "III Year Member",
    context: "ECE, MVGR",
    quote: "ECE to tech felt impossible until I had a semester-by-semester plan. No more random YouTube tutorials.",
  },
];

const collegePerspectives: FeedbackItem[] = [
  {
    initials: "01",
    name: "On-campus delivery",
    role: "College perspective",
    context: "For Principals, Deans & HODs",
    quote: "Codegnan brings trainers, curriculum, challenges, and hands-on execution directly to the college campus.",
  },
  {
    initials: "02",
    name: "Flexible campus formats",
    role: "College perspective",
    context: "Workshops - Bootcamps - Hackathons",
    quote: "Choose a focused workshop, a multi-day bootcamp, or a campus-wide hackathon based on your academic calendar.",
  },
  {
    initials: "03",
    name: "Visible student outcomes",
    role: "College perspective",
    context: "Projects - Demos - Certificates",
    quote: "Students finish with working projects, team demos, portfolio evidence, and verifiable participation credentials.",
  },
  {
    initials: "04",
    name: "Scalable participation",
    role: "College perspective",
    context: "Classrooms to campus-wide cohorts",
    quote: "The delivery model scales from a single classroom to large college events with structured mentor support.",
  },
];

const campusMoments = [
  {
    src: "/gallery/DSC00269.JPG",
    alt: "Students collaborating during a Codegnan campus bootcamp",
    label: "Team learning",
  },
  {
    src: "/gallery/DSC00270.JPG",
    alt: "Students working together during a hands-on Codegnan lab",
    label: "Hands-on practice",
  },
  {
    src: "/gallery/DSC00288.JPG",
    alt: "Students participating in a live Codegnan technology session",
    label: "Live campus session",
  },
];

export function StudentExperienceSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const [activeGroup, setActiveGroup] = useState<"students" | "colleges">("students");
  const [activeIndex, setActiveIndex] = useState(0);
  const feedback = activeGroup === "students" ? studentFeedback : collegePerspectives;
  const visibleCount = 3;
  const pageCount = Math.max(1, feedback.length - visibleCount + 1);

  const visibleFeedback = useMemo(
    () =>
      Array.from(
        { length: Math.min(visibleCount, feedback.length) },
        (_, offset) => feedback[(activeIndex + offset) % feedback.length]
      ),
    [activeIndex, feedback]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [activeGroup]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pageCount);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [pageCount]);

  const moveCarousel = (direction: "next" | "previous") => {
    setActiveIndex((current) => {
      if (direction === "next") return (current + 1) % pageCount;
      return (current - 1 + pageCount) % pageCount;
    });
  };

  return (
    <section
      id="student-experience"
      className="relative overflow-hidden border-y border-[#edf0f8] bg-[#f8faff] py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#dfe6ff]/70 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#eee5ff]/70 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8">
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dce4ff] bg-[#eef2ff] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#304ffe]">
            <Sparkles className="h-3.5 w-3.5" />
            Student Experience &amp; Feedback
          </span>
          <h2 className="mt-4 text-[36px] font-black leading-[1.08] tracking-[-0.045em] text-[#0d1033] sm:text-[50px]">
            Real people. Real campus
            <br />
            <span className="bg-gradient-to-r from-[#304ffe] to-[#7134ed] bg-clip-text text-transparent">
              learning experiences.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.7] text-[#606482] sm:text-[16px]">
            See what students take away from a Codegnan bootcamp and what college teams can expect when Labs comes to campus.
          </p>
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="inline-flex rounded-full border border-[#dce4ff] bg-white p-1 shadow-sm" role="tablist" aria-label="Feedback type">
            <button
              type="button"
              role="tab"
              aria-selected={activeGroup === "students"}
              onClick={() => setActiveGroup("students")}
              className={`rounded-full px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-colors ${activeGroup === "students" ? "bg-[#304ffe] text-white" : "text-[#606482] hover:text-[#304ffe]"}`}
            >
              Student feedback
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeGroup === "colleges"}
              onClick={() => setActiveGroup("colleges")}
              className={`rounded-full px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-colors ${activeGroup === "colleges" ? "bg-[#304ffe] text-white" : "text-[#606482] hover:text-[#304ffe]"}`}
            >
              College perspective
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-2 text-[11px] font-semibold text-[#64748b]">Auto-playing feedback</span>
            <button
              type="button"
              onClick={() => moveCarousel("previous")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce4ff] bg-white text-[#304ffe] shadow-sm transition-colors hover:bg-[#eef2ff]"
              aria-label="Previous feedback"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel("next")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce4ff] bg-white text-[#304ffe] shadow-sm transition-colors hover:bg-[#eef2ff]"
              aria-label="Next feedback"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visibleFeedback.map((item) => (
            <figure
              key={`${activeGroup}-${item.name}`}
              className="min-h-[245px] rounded-[20px] border border-[#dfe6f5] bg-white p-5 shadow-[0_8px_22px_rgba(48,79,254,0.06)] transition-all duration-300 sm:p-6"
            >
              {activeGroup === "students" ? (
                <Quote className="h-7 w-7 text-[#b4c2ff]" />
              ) : (
                <CheckCircle2 className="h-7 w-7 text-[#65c99a]" />
              )}
              <blockquote className="mt-4 text-[14px] leading-[1.7] text-[#30416f]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-[#edf0f8] pt-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white ${activeGroup === "students" ? "bg-[#304ffe]" : "bg-[#0ca678]"}`}
                  aria-hidden="true"
                >
                  {item.initials}
                </span>
                <span className="min-w-0">
                  <strong className="block truncate text-[12px] font-extrabold text-[#0d1033]">{item.name}</strong>
                  <span className="block text-[11px] font-semibold text-[#304ffe]">{item.role}</span>
                  <span className="block truncate text-[11px] text-[#64748b]">{item.context}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5" aria-label="Carousel position">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show feedback ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${activeIndex === index ? "w-7 bg-[#304ffe]" : "w-1.5 bg-[#c5d0ed]"}`}
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {campusMoments.map((moment) => (
            <figure
              key={moment.src}
              className="relative h-40 overflow-hidden rounded-2xl border border-[#dfe6f5] bg-[#e9eefb] shadow-sm"
            >
              <Image src={moment.src} alt={moment.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold text-[#30416f] shadow-sm">
                {moment.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-[20px] border border-[#dce4ff] bg-[#eef2ff] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#304ffe]" />
            <p className="text-[12px] leading-[1.55] text-[#30416f]">
              Want this experience for your students? Codegnan Labs can tailor the format, duration, and outcome to your campus.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("campus-enquiry")}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#304ffe] px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#253bdf]"
          >
            Plan a Campus Lab <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
