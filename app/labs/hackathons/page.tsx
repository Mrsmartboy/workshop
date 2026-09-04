"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HackathonExperienceSection } from "@/components/sections/HackathonExperienceSection";
import { CampusEnquirySection } from "@/components/sections/CampusEnquirySection";
import { Trophy, Flame, Zap, Award, Users, ArrowRight, ShieldCheck, Star } from "lucide-react";

export default function HackathonsPage() {
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

  return (
    <div className="min-h-screen bg-[#040614] text-white font-sans antialiased overflow-x-hidden selection:bg-[#f59e0b] selection:text-black">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d1033] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-white/15 animate-in slide-in-from-bottom-5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-pulse shrink-0" />
          <p className="text-xs font-semibold">{toastMessage}</p>
        </div>
      )}

      <Navbar scrollToSection={scrollToSection} />

      {/* Main Hackathon Experience Section */}
      <HackathonExperienceSection scrollToSection={scrollToSection} />

      {/* Why Host on Campus */}
      <section className="py-16 sm:py-24 bg-[#070a1f] border-y border-white/10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-[700px] mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#fbbf24] block mb-2">
              End-to-End Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Why Colleges Trust Codegnan to Host Mega Hackathons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 text-[#fbbf24] flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                Industry Challenge Statements
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Curated problem statements tested for 24–48 hour viability across GenAI, Autonomous Agents, FinTech, and IoT.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#304ffe]/20 text-[#8ba2ff] flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                24/7 Technical Mentorship
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                On-site senior software engineers and architects walk the floor around the clock to unblock architecture bugs and guide pitches.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/20 text-[#34d399] flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                Turnkey Evaluation &amp; Awards
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Transparent automated submission portal, GitHub commit audits, objective jury scoring matrix, cash awards, and trophies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Enquiry Form */}
      <CampusEnquirySection triggerToast={triggerToast} />

      <Footer />
    </div>
  );
}
