"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  Clock,
  Target,
  Award,
  CheckCircle2,
  Users,
  LayoutList,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import { COLLEGE_MATRIX } from "@/data/content";

// ==========================================
// 3D ISOMETRIC VECTOR ILLUSTRATIONS FOR EACH FORMAT
// ==========================================

// FORMAT 01: Technology Workshop — Code Laptop on Blue Pedestal
function WorkshopIllustration() {
  return (
    <div className="w-[112px] h-[112px] flex items-center justify-center shrink-0">
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        {/* Pedestal */}
        <ellipse cx="60" cy="102" rx="44" ry="10" fill="#DBEAFE" />
        <ellipse cx="60" cy="98" rx="38" ry="8" fill="#60A5FA" />
        <ellipse cx="60" cy="95" rx="32" ry="6" fill="#93C5FD" />
        {/* 3D Laptop Screen */}
        <rect x="32" y="30" width="56" height="42" rx="5" fill="#1E40AF" stroke="#2563EB" strokeWidth="2" />
        <rect x="36" y="34" width="48" height="34" rx="3" fill="#EFF6FF" />
        {/* Code Lines */}
        <rect x="40" y="39" width="16" height="3" rx="1" fill="#3B82F6" />
        <rect x="40" y="45" width="28" height="2.5" rx="1" fill="#60A5FA" />
        <rect x="44" y="50" width="22" height="2.5" rx="1" fill="#93C5FD" />
        <rect x="40" y="55" width="26" height="2.5" rx="1" fill="#60A5FA" />
        <rect x="44" y="60" width="18" height="2.5" rx="1" fill="#93C5FD" />
        {/* Code Symbol Badge */}
        <circle cx="74" cy="50" r="7" fill="#2563EB" />
        <text x="74" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">&lt;/&gt;</text>
        {/* Keyboard */}
        <path d="M24 72L32 72L88 72L96 72L100 82L20 82L24 72Z" fill="#60A5FA" />
        <rect x="50" y="74" width="20" height="4" rx="1.5" fill="#EFF6FF" />
      </svg>
    </div>
  );
}

// FORMAT 02: Intensive Bootcamp — Graduation Cap + Rocket on Green Pedestal
function BootcampIllustration() {
  return (
    <div className="w-[112px] h-[112px] flex items-center justify-center shrink-0">
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        {/* Pedestal */}
        <ellipse cx="60" cy="102" rx="44" ry="10" fill="#DCFCE7" />
        <ellipse cx="60" cy="98" rx="38" ry="8" fill="#10B981" />
        <ellipse cx="60" cy="95" rx="32" ry="6" fill="#34D399" />
        {/* Graduation Cap */}
        <path d="M60 32L28 48L60 64L92 48L60 32Z" fill="#059669" />
        <path d="M60 64V80" stroke="#047857" strokeWidth="3" />
        <path d="M40 54V72C40 72 50 80 60 80C70 80 80 72 80 72V54" fill="#10B981" />
        <path d="M40 54L60 64L80 54" stroke="#047857" strokeWidth="1.5" fill="none" />
        {/* Tassel */}
        <line x1="88" y1="48" x2="88" y2="62" stroke="#F59E0B" strokeWidth="2" />
        <circle cx="88" cy="64" r="3" fill="#F59E0B" />
        {/* Mini Rocket */}
        <path d="M18 28L22 18L26 28L22 26L18 28Z" fill="#EF4444" />
        <rect x="20" y="28" width="4" height="6" rx="1" fill="#1E40AF" />
        <path d="M18 34L22 38L26 34" fill="#F59E0B" />
      </svg>
    </div>
  );
}

// FORMAT 03: Campus Hackathon — Trophy on Purple Pedestal
function HackathonIllustration() {
  return (
    <div className="w-[112px] h-[112px] flex items-center justify-center shrink-0">
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        {/* Pedestal */}
        <ellipse cx="60" cy="102" rx="44" ry="10" fill="#F3E8FF" />
        <ellipse cx="60" cy="98" rx="38" ry="8" fill="#7C3AED" />
        <ellipse cx="60" cy="95" rx="32" ry="6" fill="#A78BFA" />
        {/* Trophy Cup */}
        <path d="M44 34H76V52C76 62 68 72 60 72C52 72 44 62 44 52V34Z" fill="#10B981" />
        {/* Trophy Handles */}
        <path d="M44 40H36C32 40 30 44 30 48C30 52 32 56 36 56H44" stroke="#059669" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M76 40H84C88 40 90 44 90 48C90 52 88 56 84 56H76" stroke="#059669" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Trophy Rim */}
        <rect x="42" y="30" width="36" height="6" rx="2" fill="#34D399" />
        {/* Trophy Stem */}
        <rect x="56" y="72" width="8" height="8" fill="#059669" />
        {/* Trophy Base */}
        <rect x="48" y="80" width="24" height="6" rx="2" fill="#047857" />
        {/* Star */}
        <path d="M60 42L62 48L68 48L63 52L65 58L60 54L55 58L57 52L52 48L58 48L60 42Z" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

// FORMAT 04: College Tech Fest Partner — Handshake on Orange Pedestal
function TechFestIllustration() {
  return (
    <div className="w-[112px] h-[112px] flex items-center justify-center shrink-0">
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        {/* Pedestal */}
        <ellipse cx="60" cy="102" rx="44" ry="10" fill="#FEF3C7" />
        <ellipse cx="60" cy="98" rx="38" ry="8" fill="#F59E0B" />
        <ellipse cx="60" cy="95" rx="32" ry="6" fill="#FBBF24" />
        {/* Handshake */}
        {/* Left Hand */}
        <path d="M28 50L42 42C44 41 46 41 48 42L56 50" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M28 50L28 68" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
        {/* Right Hand */}
        <path d="M92 50L78 42C76 41 74 41 72 42L64 50" stroke="#F97316" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M92 50L92 68" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        {/* Clasped Hands Center */}
        <path d="M56 50C56 50 58 56 60 56C62 56 64 50 64 50" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="60" cy="56" r="8" fill="#3B82F6" />
        <circle cx="60" cy="56" r="5" fill="#F97316" />
        <circle cx="60" cy="56" r="3" fill="#FFFFFF" />
        {/* Spark Lines */}
        <line x1="50" y1="32" x2="46" y2="24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="30" x2="60" y2="22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="70" y1="32" x2="74" y2="24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}



// Illustration map
const ILLUSTRATIONS = [
  WorkshopIllustration,
  BootcampIllustration,
  HackathonIllustration,
  TechFestIllustration,
];

export function ForCollegesSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section id="for-colleges" className="relative bg-[#fbfcff] py-14 sm:py-16 lg:py-20 border-t border-[#edf0f8] overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[245px] w-[1416px] -translate-x-1/2 lg:block">
          <div className="absolute left-0 top-0 h-[245px] w-[290px]">
            <Image src="/gallery/ai_agent.png" alt="AI coding assistant" fill className="object-contain" sizes="290px" priority />
          </div>
          <div className="absolute right-0 top-0 h-[245px] w-[290px]">
            <Image src="/gallery/ai_gen.png" alt="Generative AI illustration" fill className="object-contain" sizes="290px" priority />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION HEADER
        ═══════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-[760px] mx-auto text-center mb-8 sm:mb-9">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef1ff] text-[#304ffe] text-[11px] font-extrabold uppercase tracking-[0.08em] rounded-full mb-4 border border-[#dce4ff]">
            <Building2 className="w-4 h-4" />
            For Principals, Deans, HODs &amp; TPOs
          </span>
          <h2 className="text-[34px] sm:text-[46px] font-black tracking-[-0.045em] text-[#0d1033] leading-[1.08]">
            Bring Codegnan Labs<br />
            <span className="bg-gradient-to-r from-[#304ffe] via-[#4059ec] to-[#7c3aed] bg-clip-text text-transparent">to Your College</span>
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#606482] leading-relaxed max-w-[620px] mx-auto">
            We adapt seamlessly to your academic calendar. Explore our standard engagement matrix
            to select the right format, duration, and student outcomes for your institution.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════
            4 FEATURE PILLS ROW
        ═══════════════════════════════════════════════════ */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
          {[
            { icon: Users, label: "Proven by 100+ Colleges", description: "Trusted by leading institutions across India" },
            { icon: LayoutList, label: "Flexible Formats & Duration", description: "Workshops, Bootcamps, Hackathons tailored to your needs" },
            { icon: TrendingUp, label: "Measurable Student Outcomes", description: "Track engagement, skills & placement impact" },
            { icon: ShieldCheck, label: "Industry-Aligned & Practical", description: "Curriculum designed with industry standards" },
          ].map((pill) => {
            const PillIcon = pill.icon;
            return (
              <div
                key={pill.label}
                className="flex items-center gap-3.5 rounded-[16px] bg-white border border-[#dfe6f5] px-4 py-3.5 shadow-[0_5px_16px_rgba(24,34,84,0.05)]"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8360f4] to-[#5b2bd6] text-white flex items-center justify-center shrink-0 shadow-[0_5px_12px_rgba(92,50,214,0.25)]">
                  <PillIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[12.5px] font-extrabold text-[#0d1033] leading-tight">{pill.label}</span>
                  <span className="block mt-1 text-[11px] leading-[1.35] text-[#4a5580]">{pill.description}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════════
            4 FORMAT CARDS — 2×2 GRID
        ═══════════════════════════════════════════════════ */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {COLLEGE_MATRIX.map((item, idx) => {
            const Illustration = ILLUSTRATIONS[idx] || WorkshopIllustration;
            return (
              <div
                key={item.experience}
                className="min-h-[245px] rounded-[18px] bg-white border border-[#dfe6f5] p-[18px] sm:p-5 shadow-[0_5px_16px_rgba(24,34,84,0.05)] hover:shadow-[0_14px_34px_rgba(48,79,254,0.1)] transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Top Row: Format Tag + Duration */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[9px] font-extrabold text-[#304ffe] uppercase tracking-[0.08em] bg-[#eef1ff] px-3 py-1.5 rounded-md border border-[#dce4ff]">
                      Format 0{idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#30416f]">
                      <Clock className="w-3.5 h-3.5 text-[#304ffe]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Illustration + Title Row */}
                  <div className="flex items-start gap-3.5 mb-2">
                    <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Illustration />
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="text-[19px] font-black text-[#0d1033] leading-snug group-hover:text-[#304ffe] transition-colors">
                        {item.experience}
                      </h3>

                      {/* 3 Bullet Points */}
                      <div className="mt-2.5 space-y-2 text-[11.5px] leading-[1.4]">
                        <div className="flex items-start gap-2">
                          <Target className="w-3.5 h-3.5 text-[#304ffe] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[#0d1033]">Primary Purpose: </span>
                            <span className="text-[#4a5580]">{item.purpose}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Award className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[#0d1033]">Student Outcome: </span>
                            <span className="text-[#4a5580]">{item.studentOutcome}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d97706] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[#0d1033]">Ideal For: </span>
                            <span className="text-[#4a5580]">{item.idealFor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer: Students Scale + Request Proposal */}
                <div className="mt-2.5 pt-3 border-t border-[#edf0f7] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-[#64748b]">
                    <Users className="w-3.5 h-3.5 text-[#94a3b8]" />
                    <span>Scalable from 50 to 1,000+ Students</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollToSection("campus-enquiry")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-[#304ffe] text-[#304ffe] text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-[#304ffe] hover:text-white transition-all whitespace-nowrap"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════════
            BOTTOM CTA BANNER
        ═══════════════════════════════════════════════════ */}
        <div className="relative z-10 mt-5 rounded-[18px] border border-[#dfe6f5] bg-[#fbfaff] p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e3e7f3]">
          {[
            { icon: Building2, value: "100+", label: "Colleges Partnered", note: "Across India", color: "text-[#6d45d8]" },
            { icon: Users, value: "50,000+", label: "Students Engaged", note: "In Our Programs", color: "text-[#3b82f6]" },
            { icon: Award, value: "200+", label: "Expert Mentors", note: "Industry Professionals", color: "text-[#f97316]" },
            { icon: TrendingUp, value: "95%", label: "Reported Satisfaction", note: "Internal post-program survey", color: "text-[#4059ec]" },
          ].map((metric) => {
            const MetricIcon = metric.icon;
            return (
              <div key={metric.label} className="flex items-center gap-3 px-3 py-4 sm:px-4 sm:py-2">
                <MetricIcon className={`w-8 h-8 shrink-0 ${metric.color}`} />
                <div>
                  <strong className={`block text-[20px] leading-none font-black ${metric.color}`}>{metric.value}</strong>
                  <span className="block mt-1 text-[11px] font-bold text-[#30416f]">{metric.label}</span>
                  <span className="block text-[10px] text-[#64748b]">{metric.note}</span>
                </div>
              </div>
            );
          })}
        </div>
        {false && <div className="relative z-10 mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              quote: "The on-campus bootcamp gave me a hands-on frontend project and practical experience with APIs and GitHub.",
              name: "Eshwar Reddy Mandala",
              context: "Student participant · MLR Institute of Technology",
            },
            {
              quote: "The bootcamp’s hands-on project made the learning process much more practical and engaging.",
              name: "Poojitha Reddy",
              context: "Student participant · MLR Institute of Technology",
            },
          ].map((testimonial) => (
            <figure key={testimonial.name} className="rounded-[18px] border border-[#dfe6f5] bg-white p-5 shadow-[0_6px_18px_rgba(48,79,254,0.05)]">
              <div className="flex items-center gap-1 text-[#f59e0b]" aria-label="5-star feedback">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-3 text-[13px] leading-[1.65] text-[#30416f]">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[11px] font-black text-[#304ffe]" aria-hidden="true">MLR</span>
                <span>
                  <strong className="block text-[12px] font-extrabold text-[#0d1033]">{testimonial.name}</strong>
                  <span className="block text-[11px] text-[#64748b]">{testimonial.context}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>}
        <div id="past-labs" className="relative z-10 mt-8 rounded-[20px] border border-[#dfe6f5] bg-white p-5 sm:p-6 shadow-[0_6px_18px_rgba(48,79,254,0.04)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#304ffe]">Past Labs</span>
              <h3 className="mt-1 text-[20px] font-extrabold text-[#0d1033]">Real workshop moments from the field</h3>
              <p className="mt-1 text-[12px] text-[#64748b]">A snapshot of students learning in live campus sessions. Institution names are omitted until partner approvals are on file.</p>
            </div>
            <a href="/gallery" className="shrink-0 text-[12px] font-bold text-[#304ffe] hover:underline">View the full gallery →</a>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { src: "/gallery/DSC00239.JPG", alt: "Students working on laptops during a Codegnan workshop", label: "Hands-on lab" },
              { src: "/gallery/DSC00249.JPG", alt: "A Codegnan mentor speaking to a full student workshop", label: "Mentor-led session" },
              { src: "/gallery/DSC00257.JPG", alt: "Students collaborating during a campus learning session", label: "Collaborative build" },
            ].map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-xl border border-[#e5eaf4] bg-[#f8faff]">
                <Image src={photo.src} alt={photo.alt} width={720} height={480} className="h-40 w-full object-cover" />
                <figcaption className="px-3 py-2 text-[11px] font-bold text-[#30416f]">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
