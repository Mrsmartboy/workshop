"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Mail,
  Phone,
  ShieldCheck,
  BookOpen,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { CAMPUS_FAQS } from "@/data/content";

export function FaqSection({
  triggerToast,
}: {
  triggerToast: (msg: string) => void;
}) {
  const [activeFaqCategory, setActiveFaqCategory] = useState("All");
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(["faq-campus-delivery"]);
  const [faqSearchQuery, setFaqSearchQuery] = useState("");

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = CAMPUS_FAQS.filter((faq) => {
    const matchesCategory =
      activeFaqCategory === "All" || faq.category === activeFaqCategory;
    const matchesSearch =
      faqSearchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="relative bg-[#fbfcff] py-14 sm:py-16 lg:py-20 border-b border-[#edf0f8]">
      <div className="max-w-[1305px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-8 sm:mb-9">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f0f3ff] border border-[#dce4ff] text-[#304ffe] text-[11px] font-bold uppercase tracking-wider rounded-full mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Institutional &amp; Student FAQs
          </div>
          <h2 className="text-[38px] sm:text-[52px] font-black tracking-[-0.045em] text-[#0d1033] leading-[1.08]">
            Frequently Asked <span className="bg-gradient-to-r from-[#304ffe] to-[#6d2de2] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#606482] leading-relaxed">
            Everything college principals, HODs, TPOs, and students need to know about bringing Codegnan Labs to campus.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="hidden">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Colleges & Management", "Workshops & Bootcamps", "Hackathons", "Certificates & Outcomes"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                  activeFaqCategory === cat
                    ? "bg-[#304ffe] text-white shadow-[0_4px_12px_rgba(48,79,254,0.25)] scale-105"
                    : "bg-white text-[#606482] border border-[#dfe3ed] hover:bg-[#f0f3ff] hover:text-[#0d1033]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Search Bar */}
          <div className="relative w-full md:w-[280px]">
            <Search className="w-4 h-4 text-[#9398b5] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearchQuery}
              onChange={(e) => setFaqSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#dfe3ed] rounded-full text-xs text-[#0d1033] placeholder-[#9398b5] focus:outline-none focus:border-[#304ffe] shadow-sm transition-all"
            />
          </div>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-7 lg:gap-8">
          {/* Left Main Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-[#eaedf6]">
                <p className="text-[#606482] text-sm">No matching questions found.</p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFaqCategory("All");
                    setFaqSearchQuery("");
                  }}
                  className="mt-3 px-5 py-2 bg-[#304ffe] text-white text-xs font-bold rounded-lg"
                >
                  Clear Filter &amp; Search
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`rounded-[16px] border transition-all duration-300 overflow-hidden bg-white ${
                      isOpen
                        ? "border-[#304ffe]/40 shadow-[0_8px_25px_rgba(48,79,254,0.08)]"
                        : "border-[#eaedf6] hover:border-[#304ffe]/20 shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                            isOpen
                              ? "bg-[#304ffe] text-white"
                              : "bg-[#f0f3ff] text-[#304ffe]"
                          }`}
                        >
                          Q
                        </span>
                        <h3 className="text-[15px] sm:text-[17px] font-extrabold text-[#0d1033] leading-snug">
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`w-9 h-9 rounded-full border border-[#e9edf7] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-[#304ffe] text-white rotate-180"
                            : "bg-[#f4f6fc] text-[#606482]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mx-4 mb-4 rounded-[14px] bg-[#f6f4ff] px-5 py-4 text-[13px] text-[#182153] leading-[1.7] animate-in fade-in slide-in-from-top-2">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Right Contact / Support Card */}
          <div className="space-y-4">
            {/* Card 1: College Partnership Desk */}
            <div className="rounded-[20px] bg-gradient-to-br from-[#080f4d] via-[#101b6c] to-[#182e86] p-5 sm:p-6 text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative mx-auto mb-4 h-[150px] w-full max-w-[260px] overflow-hidden rounded-[18px] bg-[#11195b]">
                  <Image
                    src="/gallery/contactlogo.png"
                    alt="Codegnan college partnerships"
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-extrabold text-white leading-snug">
                  College Partnerships Desk
                </h3>
                <p className="mt-2.5 text-[14px] text-white/80 leading-relaxed">
                  Our academic directors assist colleges with dates, curriculum mapping, and budget planning.
                </p>

                <div className="mt-6 space-y-3 pt-6 border-t border-white/15 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#99a8ff]" />
                    </div>
                    <div>
                      <span className="block text-white/60 text-[10px] uppercase font-bold tracking-wider">
                        Email Us
                      </span>
                      <a
                        href="mailto:cto@codegnan.com"
                        className="font-semibold text-white hover:text-[#99a8ff] transition-colors"
                      >
                        cto@codegnan.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#99a8ff]" />
                    </div>
                    <div>
                      <span className="block text-white/60 text-[10px] uppercase font-bold tracking-wider">
                        Direct Phone / WhatsApp
                      </span>
                      <a href="tel:+918121289993" className="font-semibold text-white hover:text-[#99a8ff] transition-colors">
                        +91 81212 89993
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  triggerToast("Opening campus advisor direct WhatsApp chat!");
                }}
                className="mt-6 w-full py-3.5 bg-gradient-to-r from-[#4d31ff] to-[#782ff0] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
              >
                Chat on WhatsApp
              </button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/80">
                <ShieldCheck className="w-4 h-4" />
                Typical response:
                <span className="font-bold text-[#84f08b]">within 24 hours</span>
              </p>
            </div>

            {/* Card 2: Quick Highlights Pill */}
            <div className="rounded-[16px] bg-white border border-[#eaedf6] p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e6fcf5] text-[#0ca678] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0d1033]">
                    100% Verifiable Credentials
                  </h4>
                  <span className="text-[11px] text-[#606482]">
                    Individual QR code &amp; Credential ID
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#f4f6fc]">
                <div className="w-8 h-8 rounded-lg bg-[#f0f3ff] text-[#304ffe] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0d1033]">
                    Zero Institutional Burden
                  </h4>
                  <span className="text-[11px] text-[#606482]">
                    We bring trainers, sandbox labs &amp; curriculum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[16px] bg-white border border-[#e1dbff] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_5px_16px_rgba(48,79,254,0.04)]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#f1edff] text-[#5830e7] flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[16px] font-extrabold text-[#0d1033]">Still have a question?</h3>
              <p className="mt-1 text-[12px] text-[#4a5580]">Our campus team is here to help you plan the perfect program.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => triggerToast("Our campus team will be in touch soon.")}
            className="inline-flex items-center gap-3 rounded-xl border border-[#7658ff] px-6 py-3 text-sm font-bold text-[#4830e8] transition-colors hover:bg-[#f5f2ff]"
          >
            <span>Ask Our Campus Team</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
