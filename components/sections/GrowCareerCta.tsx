import React from "react";
import { LearningPlatformDevicesIllustration } from "@/components/ui/Illustrations";

export function GrowCareerCta({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section className="testimonial-bg py-16 sm:py-24 text-white relative overflow-hidden">
      {/* Background Translucent Ovals matching reference screenshot */}
      <div className="blue-banner-oval blue-banner-oval-left" />
      <div className="blue-banner-oval blue-banner-oval-bottom" />
      <div className="blue-banner-oval blue-banner-oval-right" />
      <div className="blue-banner-oval blue-banner-oval-top" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-5 max-w-[500px]">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[46px] font-black tracking-[-0.035em] leading-[1.12]">
              Grow your career!
              <br />
              Start learning with Codegnan.
            </h2>

            <p className="mt-5 text-[15px] sm:text-[16px] text-white/90 leading-[1.75] font-normal max-w-[440px]">
              Join thousands of aspiring developers, engineering students, and
              professionals who upgraded their career with practical,
              industry-focused training.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => scrollToSection("courses")}
                className="px-8 py-3.5 bg-white text-[#304ffe] hover:bg-[#f0f3ff] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                OUR COURSES
              </button>
            </div>
          </div>

          {/* Right Multi-Device Learning Platform Illustration */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <LearningPlatformDevicesIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
