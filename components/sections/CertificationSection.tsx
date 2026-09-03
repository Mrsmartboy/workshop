"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  FileCode,
  Briefcase,
  GraduationCap,
  ImageIcon,
  ArrowRight,
  Users,
  Building2,
  Trophy,
  Globe,
  Award,
  Star,
} from "lucide-react";

export function CertificationSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section
      id="certification"
      className="relative bg-[#ffffff] py-16 sm:py-24 border-t border-[#eaedf6] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-[-100px] w-[500px] h-[500px] bg-[#304ffe]/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-100px] w-[450px] h-[450px] bg-[#7c3aed]/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ═══════════════════════════════════════════════════
              LEFT COLUMN: Certificate Display with Badges & Stats
          ═══════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
            {/* Certificate Frame with Floating Elements */}
            <div className="relative w-full max-w-[620px] select-none pt-4 pb-6">

              {/* Decorative Accent Dashes (Top-Left) */}
              <div className="absolute -top-3 -left-3 hidden sm:block pointer-events-none">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#3b82f6]">
                  <path d="M12 28L4 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                  <path d="M22 18L18 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                  <path d="M34 14L38 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                </svg>
              </div>

              {/* Decorative Purple Accent Dot (Top-Left) */}
              <div className="absolute top-12 -left-6 w-5 h-5 rounded-full bg-[#c084fc]/50 blur-[1px] hidden sm:block pointer-events-none" />

              {/* Decorative Blue Dot (Mid-Left) */}
              <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-[#60a5fa]/60 blur-[1px] hidden sm:block pointer-events-none" />

              {/* Dotted Grid Background (Left Edge) */}
              <div className="absolute top-24 -left-10 w-16 h-28 opacity-30 hidden lg:grid grid-cols-4 gap-2 pointer-events-none">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                ))}
              </div>

              {/* Warm Golden Glow Behind Certificate Bottom-Right */}
              <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-[#fde047]/40 filter blur-3xl pointer-events-none -z-10" />

              {/* Main Certificate Mockup Container */}
              <div className="relative rounded-[28px] bg-white p-3 sm:p-4 border-2 border-[#e2e8f0] shadow-[0_20px_50px_rgba(20,24,68,0.08)] transition-transform duration-500 hover:scale-[1.01]">
                <div className="rounded-[18px] overflow-hidden border border-[#edf0f7] bg-white relative">
                  <Image
                    src="/gallery/workshop_certificate.png"
                    alt="Official Codegnan Certificate of Participation in Artificial Intelligence & Autonomous Agents"
                    width={800}
                    height={560}
                    className="w-full h-auto object-contain block"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge 1: Top-Right "AUTHENTIC CREDENTIAL" */}
              <div className="absolute -top-1 -right-2 sm:-right-4 bg-white px-4 py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(13,16,51,0.12)] border border-[#e2e8f0] flex items-center gap-3 z-20">
                <div className="w-8 h-8 rounded-xl bg-[#ecfdf5] text-[#10b981] flex items-center justify-center font-bold shadow-xs">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#059669]">
                    AUTHENTIC CREDENTIAL
                  </span>
                  <span className="text-[12.5px] font-bold text-[#0d1033]">
                    Scan to Verify Online
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Bottom-Left "CERTIFIED ACHIEVEMENT" */}
              <div className="absolute -bottom-2 -left-2 sm:-left-4 bg-[#0d133a] text-white px-4 py-2.5 rounded-2xl shadow-[0_14px_30px_rgba(13,19,58,0.3)] border border-white/15 flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-[#2563eb] text-white flex items-center justify-center font-bold shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9.5px] font-extrabold uppercase tracking-wider text-[#93c5fd]">
                    CERTIFIED ACHIEVEMENT
                  </span>
                  <span className="text-[13px] font-bold text-white">
                    AI &amp; Autonomous Agents
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Stats White Card (Under Certificate) */}
            <div className="w-full max-w-[620px] mt-6 rounded-2xl bg-white border border-[#e2e8f0] p-4 sm:p-5 shadow-xs">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {/* Stat 1 */}
                <div className="flex items-center gap-3 px-1 pt-2 sm:pt-0">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f0ff] text-[#9333ea] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[17px] font-black text-[#0d1033] leading-none">
                      50,000+
                    </strong>
                    <span className="text-[11px] text-[#64748b] mt-1 block">
                      Students Certified
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3 px-1 sm:pl-4 pt-2 sm:pt-0">
                  <div className="w-10 h-10 rounded-xl bg-[#ecfdf5] text-[#16a34a] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[17px] font-black text-[#0d1033] leading-none">
                      850+
                    </strong>
                    <span className="text-[11px] text-[#64748b] mt-1 block">
                      Hiring Partners
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3 px-1 sm:pl-4 pt-2 sm:pt-0">
                  <div className="w-10 h-10 rounded-xl bg-[#fff7ed] text-[#ea580c] flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[17px] font-black text-[#0d1033] leading-none">
                      95%
                    </strong>
                    <span className="text-[11px] text-[#64748b] mt-1 block">
                      Career Success Rate
                    </span>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-3 px-1 sm:pl-4 pt-2 sm:pt-0">
                  <div className="w-10 h-10 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[17px] font-black text-[#0d1033] leading-none">
                      Trusted
                    </strong>
                    <span className="text-[11px] text-[#64748b] mt-1 block">
                      By Colleges Nationwide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════
              RIGHT COLUMN: Heading, 3 Feature Cards & CTA Row
          ═══════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f0ebff] border border-[#ddd6fe] text-[#7023df] text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-4">
                <Star className="w-3.5 h-3.5 fill-[#7023df]" />
                <span>INDUSTRY-RECOGNIZED CERTIFICATION</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-[36px] sm:text-[46px] font-black tracking-[-0.035em] text-[#0d1033] leading-[1.08]">
                Proof of Real Skills,
                <br />
                <span className="bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
                  Not Just Attendance.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-[15px] sm:text-[16px] text-[#606482] leading-relaxed">
                Earn an official, verifiable Certificate of Participation from Codegnan IT Solutions. Every program pairs hands-on code development with verified credentials ready for LinkedIn and employer resumes.
              </p>

              {/* 3 Distinct Feature Cards */}
              <div className="mt-7 space-y-3.5">
                {/* Card 1: Digitally Verifiable Credential */}
                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-[#eef4ff] text-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[14.5px] font-bold text-[#0d1033]">
                        Digitally Verifiable Credential ID &amp; QR
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#eef4ff] text-[#2563eb] rounded-full shrink-0">
                        1-CLICK VERIFY
                      </span>
                    </div>
                    <p className="text-[12.5px] text-[#64748b] mt-1 leading-relaxed">
                      Unique credential ID (e.g., CT-2025-0412) verifiable instantly by hiring managers and linked to your LinkedIn profile.
                    </p>
                  </div>
                </div>

                {/* Card 2: Production-Grade GitHub Repository */}
                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-[#fff7ed] text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[14.5px] font-bold text-[#0d1033]">
                        Production-Grade GitHub Repository
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#fff7ed] text-[#ea580c] rounded-full shrink-0">
                        LIVE CODE
                      </span>
                    </div>
                    <p className="text-[12.5px] text-[#64748b] mt-1 leading-relaxed">
                      Deploy working software with clean commits, structured README documentation, and Swagger API endpoints to showcase during interviews.
                    </p>
                  </div>
                </div>

                {/* Card 3: Direct Access to 850+ Hiring Partners */}
                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[14.5px] font-bold text-[#0d1033]">
                        Direct Access to 850+ Hiring Partners
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#f0fdf4] text-[#16a34a] rounded-full shrink-0">
                        PLACEMENT EDGE
                      </span>
                    </div>
                    <p className="text-[12.5px] text-[#64748b] mt-1 leading-relaxed">
                      Top performers receive direct interview recommendations for developer and AI engineering roles across Codegnan&apos;s enterprise network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Row with CTA Buttons & Calligraphy Text */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative">
              {/* Stacked Action Buttons */}
              <div className="flex flex-col gap-3 w-full sm:max-w-[340px]">
                {/* Button 1: Explore Certification Programs */}
                <button
                  type="button"
                  onClick={() => scrollToSection("courses")}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[12px] font-bold uppercase tracking-wider rounded-xl shadow-md transition-all hover:-translate-y-0.5"
                >
                  <GraduationCap className="w-4.5 h-4.5" />
                  <span>EXPLORE CERTIFICATION PROGRAMS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Button 2: View Media Gallery */}
                <a
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[#eff6ff] border-2 border-[#2563eb] text-[#2563eb] text-[12px] font-bold uppercase tracking-wider rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <ImageIcon className="w-4.5 h-4.5" />
                  <span>VIEW MEDIA GALLERY</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Calligraphy Quote + Dotted Grid Decoration */}
              <div className="relative flex items-center justify-center sm:justify-end pl-2">
                {/* Decorative Dotted Pattern */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-24 opacity-25 grid grid-cols-4 gap-2 pointer-events-none -z-10">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                  ))}
                </div>

                {/* Stylized Handwritten Calligraphy Text */}
                <div className="transform -rotate-6 select-none font-serif italic text-right leading-[1.25] pr-2">
                  <p className="text-[19px] sm:text-[21px] text-[#6b7280] font-medium tracking-wide">
                    Skills
                  </p>
                  <p className="text-[20px] sm:text-[22px] text-[#475569] font-semibold">
                    Build Careers
                  </p>
                  <p className="text-[19px] sm:text-[21px] text-[#6b7280] font-medium tracking-wide mt-1">
                    Certificates
                  </p>
                  <p className="text-[21px] sm:text-[23px] text-[#2563eb] font-bold">
                    Open Doors
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
