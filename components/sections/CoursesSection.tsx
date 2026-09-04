import React from "react";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { THREE_EXPERIENCES } from "@/data/content";

export function CoursesSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section id="experiences" className="relative bg-white py-16 sm:py-24 border-b border-[#eaedf6]">
      {/* Backwards compatibility anchors */}
      <span id="courses" className="sr-only" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-extrabold uppercase tracking-wider rounded-full mb-3.5 border border-[#dce4ff]">
              <Sparkles className="w-3.5 h-3.5" />
              Campus Technology Experiences
            </span>
            <h2 className="text-[34px] sm:text-[44px] font-black tracking-[-0.04em] text-[#0d1033] leading-tight">
              Choose Your Campus Experience
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#606482] max-w-[620px] leading-relaxed">
              Designed for college auditoriums and computer labs — scalable from a single classroom of 50 to campus-wide cohorts of 1,000+ students.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("campus-recommender")}
            className="self-start lg:self-auto px-7 py-3.5 bg-transparent hover:bg-[#f0f3ff] border-2 border-[#304ffe] text-[#304ffe] text-[12px] font-black uppercase tracking-[0.08em] rounded-[8px] transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            HELP ME CHOOSE FOR OUR CAMPUS
          </button>
        </div>



        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="course-card rounded-[24px] bg-white border border-[#eaedf6] overflow-hidden shadow-[0_12px_36px_rgba(20,24,68,0.06)] flex flex-col group hover:border-[#304ffe]/40 transition-all duration-300"
            >
              {/* Top Banner Video */}
              <div className="h-[210px] sm:h-[220px] overflow-hidden bg-black relative">
                {exp.type === "workshop" && (
                  <video
                    src="/gallery/computer_vision_workshop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {exp.type === "bootcamp" && (
                  <video
                    src="/gallery/agentic_ai_workshop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {exp.type === "hackathon" && (
                  <video
                    src="/gallery/voice_chatbot_workshop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ objectPosition: "center 18%" }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Verb / Format pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-[#0d1033] shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#304ffe]" />
                  <span>{exp.verb} • {exp.label}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide">
                  {exp.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#304ffe] mb-1.5">
                    {exp.subtitle}
                  </div>
                  <h3 className="text-[22px] font-black text-[#0d1033] leading-[1.25] group-hover:text-[#304ffe] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-[#606482] leading-[1.65]">
                    {exp.description}
                  </p>
                </div>

                {/* Details & CTA Button */}
                <div className="mt-8 pt-5 border-t border-[#f0f2f8] space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0d1033]">
                      <Clock className="w-3.5 h-3.5 text-[#304ffe]" />
                      <span>{exp.duration} on campus</span>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-[#606482]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                      <span>{exp.outcome}</span>
                    </div>
                  </div>

                  {exp.id === "hackathons" ? (
                    <Link
                      href="/labs/hackathons"
                      className="w-full py-3 px-4 bg-[#f0f3ff] hover:bg-[#304ffe] text-[#304ffe] hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Explore Hackathons</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => scrollToSection("campus-recommender")}
                      className="w-full py-3 px-4 bg-[#f0f3ff] hover:bg-[#304ffe] text-[#304ffe] hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>{exp.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
