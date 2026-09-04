"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COLLEGE_MATRIX, CAMPUS_STORIES, HOW_IT_WORKS_STEPS } from "@/data/content";
import { CampusEnquirySection } from "@/components/sections/CampusEnquirySection";
import {
  Building2,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
  Laptop,
  GraduationCap,
  Target,
  FileCheck,
} from "lucide-react";

export default function ForCollegesPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const collegeProvisions = [
    {
      title: "What the College Provides",
      icon: Building2,
      color: "border-[#bfdbfe] bg-[#eff6ff]",
      items: [
        "Computer lab with working internet & power backup",
        "Auditorium or seminar hall with projector and audio system",
        "Student attendance & internal faculty coordination",
        "Permission for scheduled workshop/hackathon dates",
      ],
    },
    {
      title: "What Codegnan Labs Delivers",
      icon: Award,
      color: "border-[#bbf7d0] bg-[#f0fdf4]",
      items: [
        "Master industry mentors & technical architects on-site",
        "Production-grade curriculum, code repos & sandbox environments",
        "Problem statements, hackathon platforms & jury scoring rubrics",
        "Authentic QR-verifiable student certificates and winner awards",
        "Detailed post-event outcome report for NAAC / NBA / NIRF files",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0d1033] font-sans antialiased overflow-x-hidden selection:bg-[#304ffe] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d1033] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-white/15 animate-in slide-in-from-bottom-5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#304ffe] animate-pulse shrink-0" />
          <p className="text-xs font-semibold">{toastMessage}</p>
        </div>
      )}

      <Navbar scrollToSection={scrollToSection} />

      {/* Hero: For Colleges */}
      <section className="relative bg-gradient-to-b from-[#0a0f29] via-[#0e163d] to-[#0a0f29] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#304ffe_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-[820px]">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#304ffe]/20 text-[#8ba2ff] text-xs font-black uppercase tracking-wider rounded-full mb-6 border border-[#304ffe]/40">
              <Building2 className="w-4 h-4" />
              For Principals, Deans, HODs, TPOs &amp; Club Leads
            </span>

            <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-black tracking-[-0.04em] leading-[1.05] mb-6">
              Turn your campus into a{" "}
              <span className="bg-gradient-to-r from-[#4d72ff] via-[#9165ff] to-[#f472b6] bg-clip-text text-transparent">
                technology playground.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#cbd5e1] leading-relaxed mb-10 max-w-[680px]">
              Empower your students with hands-on workshops, production bootcamps, and high-adrenaline hackathons that build real projects and placement-winning portfolios.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("campus-enquiry")}
                className="px-8 py-4 bg-[#304ffe] hover:bg-[#253bdf] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-[0_10px_25px_rgba(48,79,254,0.35)] transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Plan a Codegnan Lab for Our Campus</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+918121289993"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/20 transition-all"
              >
                Call Academic Partnerships: +91 81212 89993
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Value Alignment */}
      <section className="py-16 sm:py-20 bg-[#f8faff] border-b border-[#eaedf6]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-white border border-[#e2e8f5] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#eef2ff] text-[#304ffe] flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0d1033] mb-2">
                Placement Readiness
              </h3>
              <p className="text-sm text-[#606482] leading-relaxed">
                Students graduate with verified GitHub repositories and live deployments instead of dry classroom theories, giving recruiters concrete proof of competence.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#e2e8f5] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0d1033] mb-2">
                NAAC &amp; NBA Compliance
              </h3>
              <p className="text-sm text-[#606482] leading-relaxed">
                Every lab includes structured student attendance, learning outcome assessments, project rubrics, and formal documentation for institutional accreditation audits.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#e2e8f5] shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#fef3c7] text-[#d97706] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#0d1033] mb-2">
                Zero Infrastructure Hassle
              </h3>
              <p className="text-sm text-[#606482] leading-relaxed">
                Codegnan provisions cloud sandboxes, pre-configured software stacks, and mentors on-site, requiring no complex server setup or maintenance from college IT staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Formats & Capacity Matrix */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#eaedf6]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-[720px] mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#304ffe] block mb-2">
              Program Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1033]">
              Flexible Campus Formats for Every Academic Calendar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLEGE_MATRIX.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[#e2e8f5] bg-[#fbfcfe] flex flex-col justify-between hover:border-[#304ffe]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#606482] mb-3">
                    <span>{item.duration}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#0d1033] mb-3">
                    {item.experience}
                  </h3>
                  <p className="text-xs text-[#606482] mb-4">
                    <strong>Objective:</strong> {item.purpose}
                  </p>
                  <div className="space-y-2 text-xs">
                    <p className="text-[#0d1033] font-semibold">
                      <strong>Deliverable:</strong> {item.studentOutcome}
                    </p>
                    <p className="text-[#606482]">
                      <strong>Ideal for:</strong> {item.idealFor}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("campus-enquiry")}
                  className="mt-6 pt-4 border-t border-[#e2e8f5] text-xs font-black text-[#304ffe] flex items-center justify-between"
                >
                  <span>Inquire for Campus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities: What College Provides vs Codegnan Delivers */}
      <section className="py-16 sm:py-20 bg-[#f8faff] border-b border-[#eaedf6]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1033] mb-3">
              Clear Division of Responsibilities
            </h2>
            <p className="text-sm sm:text-base text-[#606482]">
              Transparent, predictable execution that leaves nothing to guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collegeProvisions.map((col, idx) => {
              const Icon = col.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl border ${col.color} shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6 text-[#0d1033]" />
                    <h3 className="text-xl font-black text-[#0d1033]">
                      {col.title}
                    </h3>
                  </div>

                  <ul className="space-y-3.5">
                    {col.items.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        className="flex items-start gap-3 text-sm text-[#334155] font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#304ffe] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Campus Stories */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#eaedf6]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px] mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#304ffe] block mb-2">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1033]">
              What Academic Leadership Says
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAMPUS_STORIES.map((story) => (
              <div
                key={story.id}
                className="p-7 rounded-2xl bg-[#fbfcfe] border border-[#e2e8f5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-black text-[#304ffe] uppercase tracking-wider mb-2">
                    {story.collegeName} • {story.city}
                  </div>
                  <p className="text-sm italic text-[#334155] mb-6 leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#eaedf6]">
                  <strong className="block text-sm font-black text-[#0d1033]">
                    {story.quoteAuthor}
                  </strong>
                  <span className="text-xs text-[#606482]">
                    {story.quoteRole}, {story.collegeName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Lead Capture Form */}
      <CampusEnquirySection triggerToast={triggerToast} />

      <Footer />
    </div>
  );
}
