"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  FileCheck,
  Scale,
  Building,
  GraduationCap,
  Clock,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Award,
  BookOpen,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const navSections = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "scope", label: "2. Scope of Services" },
    { id: "institutional", label: "3. College Responsibilities" },
    { id: "conduct", label: "4. Student Code of Conduct" },
    { id: "hackathon-rules", label: "5. Hackathons & Competitions" },
    { id: "ip-rights", label: "6. Intellectual Property & Code" },
    { id: "credentials", label: "7. Verified Credentials Policy" },
    { id: "scheduling", label: "8. Scheduling & Cancellations" },
    { id: "disclaimers", label: "9. Warranties & Disclaimers" },
    { id: "governing-law", label: "10. Governing Law & Jurisdiction" },
    { id: "contact", label: "11. Contact Information" },
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
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />

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
            <span className="text-[#0d1033]">Terms of Service</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#dce4ff] shadow-xs text-xs font-black uppercase tracking-wider text-[#304ffe] mb-4">
            <Scale className="w-4 h-4 text-[#304ffe]" />
            <span>Institutional Agreement &amp; Participant Rules</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1033] tracking-tight leading-tight max-w-[850px]">
            Codegnan Labs Terms of Service
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#55637e] max-w-[760px] leading-relaxed">
            Terms governing participation, institutional engagement, hackathon guidelines, open-source building, and verified credential verification across all Codegnan Labs programs.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#64748b]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#304ffe]" />
              Last Updated: September 2026
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Applies to Colleges, Universities, Faculties &amp; Students</span>
          </div>
        </div>
      </header>

      {/* Main Content Area: Sidebar TOC + Terms Articles */}
      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Sticky Table of Contents */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-2xl bg-white border border-[#e2e8f5] p-5 shadow-xs">
              <h2 className="text-xs font-black uppercase tracking-wider text-[#0d1033] mb-4 pb-2 border-b border-[#f1f4fb]">
                Terms Navigation
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
                  Institutional Partnership Inquiry?
                </p>
                <p className="text-[11px] text-[#64748b] leading-relaxed mb-3">
                  For formal Memorandum of Understanding (MoU) and campus agreements:
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

          {/* Right Terms Body */}
          <article className="lg:col-span-8 space-y-12 text-[#334155] leading-relaxed text-sm sm:text-[15px]">
            {/* 1. Acceptance */}
            <section id="acceptance" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  01
                </span>
                <span>Acceptance of Terms</span>
              </h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between Codegnan IT Solutions Private Limited (&quot;Codegnan&quot;, &quot;we&quot;, &quot;us&quot;) and you (whether an engineering college management, department head, faculty coordinator, or participating student).
              </p>
              <p>
                By booking a Codegnan Lab, signing an institutional MoU, participating in an on-campus bootcamp, workshop, or hackathon, or utilizing our credential verification systems, you agree to comply with and be bound by these Terms.
              </p>
            </section>

            {/* 2. Scope of Services */}
            <section id="scope" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  02
                </span>
                <span>Scope of Services</span>
              </h2>
              <p>
                Codegnan Labs delivers specialized technology immersion models directly inside college computer laboratories and auditoriums:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Technology Workshops (2 to 6 Hours):</strong> Interactive single-day sprint covering foundations of emerging stacks (AI tools, Python algorithms, cloud APIs).
                </li>
                <li>
                  <strong>Intensive Bootcamps (1 to 5 Days):</strong> Production-level skill immersion where cohorts build, test, and deploy functional applications to live cloud hosting.
                </li>
                <li>
                  <strong>Campus Hackathons (24 to 48 Hours):</strong> Competitive problem-solving hackathons complete with industry problem statements, round-the-clock technical mentors, and jury pitch evaluations.
                </li>
                <li>
                  <strong>Verified Credentialing:</strong> Tamper-proof digital certificates featuring unique verification IDs and scannable QR codes for authentic placement portfolios.
                </li>
              </ul>
            </section>

            {/* 3. College Responsibilities */}
            <section id="institutional" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  03
                </span>
                <span>College &amp; Institutional Responsibilities</span>
              </h2>
              <p>To guarantee successful execution, partnering institutions agree to provide:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl bg-white p-4 border border-[#e2e8f5]">
                  <h4 className="font-bold text-[#0d1033] text-sm mb-1">Lab Infrastructure</h4>
                  <p className="text-xs text-[#64748b]">
                    Adequate computer terminals with active high-speed internet, power backups, and browser access for students.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#e2e8f5]">
                  <h4 className="font-bold text-[#0d1033] text-sm mb-1">Presentation Media</h4>
                  <p className="text-xs text-[#64748b]">
                    Audio-visual projection systems, microphone facilities, and whiteboards for mentor architectural sessions.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#e2e8f5]">
                  <h4 className="font-bold text-[#0d1033] text-sm mb-1">Department Coordination</h4>
                  <p className="text-xs text-[#64748b]">
                    A designated faculty coordinator to oversee lab readiness, roll calls, and schedule alignment with the academic calendar.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#e2e8f5]">
                  <h4 className="font-bold text-[#0d1033] text-sm mb-1">Student Attendance</h4>
                  <p className="text-xs text-[#64748b]">
                    Ensuring registered student cohorts attend full sessions to satisfy mandatory hands-on project milestones.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Student Code of Conduct */}
            <section id="conduct" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  04
                </span>
                <span>Student Code of Conduct</span>
              </h2>
              <p>All student participants are expected to maintain professional engineering discipline:</p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Respectful interaction with industry mentors, jury members, and fellow teammates.</li>
                <li>Zero tolerance for harassment, offensive language, or disruptive classroom behavior.</li>
                <li>Strict adherence to ethical software engineering—no intentional malware creation, cyberattacks against campus networks, or unauthorized system intrusions.</li>
                <li>Codegnan reserves the right to revoke lab access or withhold certification for severe behavioral violations reported by mentors or faculty.</li>
              </ul>
            </section>

            {/* 5. Hackathon Rules */}
            <section id="hackathon-rules" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  05
                </span>
                <span>Hackathons &amp; Competition Regulations</span>
              </h2>
              <p>For all competitive editions (24-Hour &amp; 36-Hour Hackathons):</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Original Work Rule:</strong> Code submitted for final judging must be written during the hackathon sprint. Pre-existing commercial codebases or unacknowledged copy-pasting is disqualified. Open-source libraries and public APIs are permitted.
                </li>
                <li>
                  <strong>Working Prototype Requirement:</strong> Solutions must demonstrate working software or live deployed prototypes; pure slide decks without functional builds cannot qualify for prize placement.
                </li>
                <li>
                  <strong>Jury Decisions are Final:</strong> Rubric scoring based on Innovation, Technical Depth, Usability, and Live Demo pitch is evaluated by appointed industry experts and is conclusive.
                </li>
              </ul>
            </section>

            {/* 6. Intellectual Property */}
            <section id="ip-rights" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  06
                </span>
                <span>Intellectual Property Rights</span>
              </h2>
              <div className="rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] p-4 text-[#065f46] text-xs sm:text-sm">
                <strong>Student Project IP:</strong> Students retain 100% ownership of their software projects, repositories, and applications developed during the lab.
              </div>
              <p>
                <strong>Codegnan Proprietary IP:</strong> All workshop slide decks, mentor architectural blueprints, challenge problem statements, syllabus tracks, curriculum rubrics, and the Codegnan Labs brand marks remain the exclusive intellectual property of Codegnan IT Solutions. They may not be redistributed or repackaged for commercial training without written consent.
              </p>
            </section>

            {/* 7. Verified Credentials Policy */}
            <section id="credentials" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  07
                </span>
                <span>Verified Credentials &amp; QR Policy</span>
              </h2>
              <p>
                Codegnan Labs certificates are issued only to students who fulfill minimum attendance and submit a verified working milestone build.
              </p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Certificates carry a unique Credential ID hosted on authentic Codegnan verification domains.</li>
                <li>Altering, photoshopping, or falsifying credential IDs constitutes academic dishonesty and invalidates the credential in our database permanently.</li>
              </ul>
            </section>

            {/* 8. Scheduling & Cancellations */}
            <section id="scheduling" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  08
                </span>
                <span>Scheduling, Rescheduling &amp; Cancellations</span>
              </h2>
              <p>
                Campus labs require extensive mentor logistical arrangements and environment preparation.
              </p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>
                  <strong>Rescheduling:</strong> Institutions may reschedule a confirmed event date with at least 7 working days prior written notification without penalty.
                </li>
                <li>
                  <strong>Force Majeure:</strong> Neither party shall be liable for delays or cancellations caused by unforeseen natural disasters, university sudden exam circulars, government restrictions, or extreme weather conditions. In such cases, events will be mutually rescheduled to the earliest convenient date.
                </li>
              </ul>
            </section>

            {/* 9. Disclaimers */}
            <section id="disclaimers" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  09
                </span>
                <span>Warranties &amp; Limitation of Liability</span>
              </h2>
              <p>
                Codegnan Labs provides top-tier technical training by industry architects. However, attendance or completion of a workshop does not guarantee specific campus placement offers or corporate recruitment outcomes, as hiring decisions remain at the sole discretion of prospective employers.
              </p>
              <p>
                To the maximum extent permitted by applicable law, Codegnan shall not be liable for any indirect, incidental, or consequential damages arising from the use of third-party cloud services or API dependencies during lab exercises.
              </p>
            </section>

            {/* 10. Governing Law */}
            <section id="governing-law" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  10
                </span>
                <span>Governing Law &amp; Jurisdiction</span>
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with Codegnan Labs institutional contracts shall be subject to the exclusive jurisdiction of the competent courts in <strong>Vijayawada, Andhra Pradesh, India</strong>.
              </p>
            </section>

            {/* 11. Contact */}
            <section id="contact" className="scroll-mt-28 space-y-4 pt-6 border-t border-[#e2e8f5]">
              <h2 className="text-xl sm:text-2xl font-black text-[#0d1033] flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#eef2ff] text-[#304ffe] flex items-center justify-center text-xs font-black shrink-0">
                  11
                </span>
                <span>Contact &amp; Institutional Desk</span>
              </h2>
              <p>For inquiries regarding these Terms or formal college partnership blueprints:</p>

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
                  <span>+91 81212 89993</span>
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
