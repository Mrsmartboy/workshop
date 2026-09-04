"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Clock,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const navSections = [
    { id: "overview", label: "1. Overview & Scope" },
    { id: "collection", label: "2. Information We Collect" },
    { id: "usage", label: "3. How We Use Data" },
    { id: "student-ip", label: "4. Student IP & Code Ownership" },
    { id: "college-data", label: "5. College Partnership Data" },
    { id: "credentials", label: "6. QR Verification & Badging" },
    { id: "security", label: "7. Security & Retention" },
    { id: "third-party", label: "8. Third-Party Disclosures" },
    { id: "user-rights", label: "9. Your Privacy Rights" },
    { id: "contact", label: "10. Contact & Grievance" },
  ];

  // Auto select active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = navSections.length - 1; i >= 0; i--) {
        const element = document.getElementById(navSections[i].id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navSections[i].id);
            return;
          }
        }
      }
      if (navSections.length > 0) {
        setActiveSection(navSections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faff] text-[#0d1033] font-sans antialiased selection:bg-[#304ffe] selection:text-white">
      {/* Top Navigation */}
      <Navbar scrollToSection={() => {}} />

      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#f5f8ff] to-[#f8faff] border-b border-[#e2e8f5] pt-24 sm:pt-28 pb-14 sm:pb-16">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#304ffe]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#7c3aed]/10 blur-3xl" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b] mb-6">
            <Link
              href="/"
              className="hover:text-[#304ffe] transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#0d1033]">Privacy Policy</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#dce4ff] shadow-xs text-xs font-black uppercase tracking-wider text-[#304ffe] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#304ffe]" />
            <span>Official Policy &amp; Data Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1033] tracking-tight leading-tight max-w-[850px]">
            Codegnan Labs Privacy Policy
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#55637e] max-w-[760px] leading-relaxed">
            How Codegnan IT Solutions collects, uses, safeguards, and respects student, faculty, and institutional data across campus workshops, hackathons, bootcamps, and verified credential portals.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#64748b]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#304ffe]" />
              Last Updated: September 2026
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Effective for all Codegnan Labs &amp; Campus Initiatives</span>
          </div>
        </div>
      </header>

      {/* Main Content Area: Sidebar TOC + Policy Articles */}
      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Sticky Table of Contents */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-2xl bg-white border border-[#e2e8f5] p-5 shadow-xs">
              <h2 className="text-xs font-black uppercase tracking-wider text-[#0d1033] mb-4 pb-2 border-b border-[#f1f4fb]">
                Policy Navigation
              </h2>
              <nav className="space-y-1">
                {navSections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                      activeSection === sec.id
                        ? "bg-[#304ffe] text-white shadow-xs"
                        : "text-[#55637e] hover:bg-[#f1f4fb] hover:text-[#0d1033]"
                    }`}
                  >
                    <span>{sec.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-[#f1f4fb] bg-[#f8faff] -mx-5 -mb-5 p-5 rounded-b-2xl">
                <p className="text-xs font-bold text-[#0d1033] mb-1">
                  Questions about data privacy?
                </p>
                <p className="text-[11px] text-[#64748b] leading-relaxed mb-3">
                  Reach our campus compliance desk directly for any data inquiry.
                </p>
                <a
                  href="mailto:labs@codegnan.com"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#304ffe] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>labs@codegnan.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Policy Body */}
          <article className="lg:col-span-8 space-y-12 text-[#334155] leading-relaxed text-sm sm:text-[15px]">
            {/* 1. Overview */}
            <section id="overview" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  01
                </span>
                <span>Overview &amp; Scope</span>
              </h2>
              <p>
                Codegnan IT Solutions Private Limited (&quot;Codegnan&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates <strong>Codegnan Labs</strong>, an initiative providing experiential tech bootcamps, hands-on workshops, hackathons, and verifiable student credentials for engineering colleges and university campuses across India.
              </p>
              <p>
                This Privacy Policy describes how we handle personal information gathered when students, faculties, placement coordinators, and university administrators visit our website, register for programs, participate in campus labs, or verify project credentials.
              </p>
              <div className="rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] p-4 text-[#065f46] text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <strong>Our Privacy Guarantee:</strong> Codegnan Labs never sells student personal details, phone numbers, or academic data to third-party telemarketers or non-partner promotional networks.
                </div>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="collection" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  02
                </span>
                <span>Information We Collect</span>
              </h2>
              <p>
                Depending on how you engage with Codegnan Labs, we may collect the following categories of information:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Student Participant Data:</strong> Full name, college roll number / student ID, academic branch (e.g. CSE, ECE, IT), year of study, email address, phone number, and LinkedIn/GitHub profile URLs.
                </li>
                <li>
                  <strong>Institutional Contact Data:</strong> College name, campus city/state, Principal / HoD / TPO name, official email, department contact details, and proposed event dates.
                </li>
                <li>
                  <strong>Project &amp; Hackathon Submissions:</strong> Code repository links (GitHub), live deployed demo links (Vercel, Render, AWS), problem statements tackled, and presentation slides submitted for jury review.
                </li>
                <li>
                  <strong>Attendance &amp; Verification Telemetry:</strong> QR check-in records, workshop milestone completion stamps, and mentor evaluation rubrics used for issuing tamper-proof certificates.
                </li>
                <li>
                  <strong>Technical &amp; Usage Logs:</strong> IP address, device browser type, page viewing timestamps, and referrer URLs collected via standard server analytics to safeguard platform security.
                </li>
              </ul>
            </section>

            {/* 3. How We Use Data */}
            <section id="usage" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  03
                </span>
                <span>How We Use Collected Information</span>
              </h2>
              <p>We process collected data for clear educational and operational purposes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl bg-white p-4 border border-[#e2e8f5]">
                  <h4 className="font-bold text-[#0d1033] text-sm mb-1">Program Delivery</h4>
                  <p className="text-xs text-[#64748b]">
                    Configuring cloud sandbox environments, delivering starter repositories, and providing real-time mentor code review.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#e2e8f5]">
                  <h4 className="font-bold text-[#0d1033] text-sm mb-1">Credential Issuance</h4>
                  <p className="text-xs text-[#64748b]">
                    Generating authentic certificates of participation, merit awards, and scannable verification credentials with unique IDs.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#e2e8f5]">
                  <h4 className="font-bold text-[#0d1033] text-sm mb-1">Corporate Placement Visibility</h4>
                  <p className="text-xs text-[#64748b]">
                    Sharing verified project repositories with partner tech recruiters and placement drives with student consent.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#e2e8f5]">
                  <h4 className="font-bold text-[#0d1033] text-sm mb-1">Campus Analytics</h4>
                  <p className="text-xs text-[#64748b]">
                    Providing participating colleges with aggregate skill summaries and project completion reports for NAAC / NBA proof.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Student IP & Code Ownership */}
            <section id="student-ip" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  04
                </span>
                <span>Student IP &amp; Code Ownership</span>
              </h2>
              <p>
                Codegnan strongly believes in open-source empowerment. <strong>Students retain 100% intellectual property rights</strong> to all original application source code, architecture diagrams, and prototypes authored during Codegnan workshops, bootcamps, and hackathons.
              </p>
              <p>
                By publishing project links to Codegnan Labs showcases, students grant Codegnan a non-exclusive, royalty-free license solely to display project summaries, demo recordings, and achievements as evidence of student capability on our website and social channels.
              </p>
            </section>

            {/* 5. College Partnership Data */}
            <section id="college-data" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  05
                </span>
                <span>College &amp; Institutional Data Protection</span>
              </h2>
              <p>
                Data received directly from college departments (such as student enrolment rosters or lab machine allocation sheets) is treated as strictly confidential institutional data. We do not aggregate or cross-leverage institutional data to competitive advantage.
              </p>
              <p>
                All post-event documentation (attendance sheets, feedback compilations, photograph galleries) is stored in secured encrypted drives and shared exclusively with the designated department coordinator.
              </p>
            </section>

            {/* 6. QR Verification & Badging */}
            <section id="credentials" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  06
                </span>
                <span>Tamper-Proof Credential Verification (QR Codes)</span>
              </h2>
              <p>
                Each certificate issued by Codegnan Labs carries a unique alphanumeric Credential ID and a quick-response (QR) code. When scanned by hiring managers or recruiters:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  The verification page displays: Student Full Name, College Name, Event Name, Verified Date, and Key Competencies achieved.
                </li>
                <li>
                  Sensitive personal contact numbers and private email addresses are <strong>never</strong> displayed publicly on the QR verification lookup page.
                </li>
              </ul>
            </section>

            {/* 7. Security & Retention */}
            <section id="security" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  07
                </span>
                <span>Security &amp; Data Retention</span>
              </h2>
              <p>
                We apply industry-standard administrative, technical, and physical safeguards to prevent unauthorized access, alteration, or disclosure of information. Web traffic across our portals is protected using TLS 1.3 encryption.
              </p>
              <p>
                Student verification records are maintained for an indefinite period so that alumni can verify their credentials with future employers years after completing college.
              </p>
            </section>

            {/* 8. Third-Party Disclosures */}
            <section id="third-party" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  08
                </span>
                <span>Third-Party Service Providers</span>
              </h2>
              <p>
                We may share minimal required data with trusted service providers who assist us in operating our services under strict confidentiality agreements:
              </p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Cloud hosting infrastructure (Vercel, AWS, Google Cloud)</li>
                <li>Transactional notification services (Email and SMS verification for event checkpoints)</li>
                <li>Code repository hosts (GitHub Classroom and GitHub Education partners)</li>
              </ul>
            </section>

            {/* 9. Your Privacy Rights */}
            <section id="user-rights" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  09
                </span>
                <span>Your Privacy Rights</span>
              </h2>
              <p>
                In accordance with Indian Digital Personal Data Protection (DPDP) Act guidelines, you hold the right to:
              </p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of inaccurate names, college branches, or credential details.</li>
                <li>Request removal of your showcase project listing from our public website.</li>
                <li>Opt out of non-essential informational emails at any time.</li>
              </ul>
            </section>

            {/* 10. Contact & Grievance */}
            <section id="contact" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  10
                </span>
                <span>Grievance Officer &amp; Contact Desk</span>
              </h2>
              <p>
                If you have any questions, feedback, or grievance regarding data processing under Codegnan Labs, please contact our Data Protection Officer:
              </p>

              <div className="rounded-2xl bg-white border border-[#e2e8f5] p-5 sm:p-6 shadow-xs space-y-3">
                <div className="font-black text-[#0d1033] text-base">
                  Codegnan IT Solutions Private Limited
                </div>
                <div className="flex items-start gap-3 text-xs text-[#55637e]">
                  <MapPin className="w-4 h-4 text-[#304ffe] shrink-0 mt-0.5" />
                  <span>
                    Prasad Naidu Complex, P.B. Siddhartha Bus Stop, Moghalrajpuram, Vijayawada, Andhra Pradesh - 520010, India. Landmark: Near PB Siddhartha College of Arts and Science.
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#55637e]">
                  <Mail className="w-4 h-4 text-[#304ffe] shrink-0" />
                  <a href="mailto:labs@codegnan.com" className="text-[#304ffe] font-bold hover:underline">
                    labs@codegnan.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#55637e]">
                  <Phone className="w-4 h-4 text-[#304ffe] shrink-0" />
                  <span>+91 81212 89993 / +91 98487 99993</span>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
