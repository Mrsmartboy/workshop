"use client";

import React from "react";
import {
  ArrowRight,
  Building2,
  Clock3,
  Code2,
  Flame,
  Gauge,
  GraduationCap,
  Lightbulb,
  Leaf,
  Presentation,
  Sparkles,
  Target,
  Trophy,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";

const eventFacts = [
  { label: "Teams", value: "3-5 members", icon: UsersRound, className: "text-[#b45cff]" },
  { label: "Duration", value: "24-48 hours", icon: Clock3, className: "text-[#00b8ff]" },
  { label: "Prizes", value: "Cash & goodies", icon: Trophy, className: "text-[#ffb300]" },
  { label: "Real impact", value: "Build for real problems", icon: Zap, className: "text-[#e048ff]" },
];

const eventSteps = [
  { label: "IDEA", desc: "Form teams & select a challenge statement", icon: Lightbulb, className: "bg-[#6537ff]" },
  { label: "TEAM", desc: "Assign frontend, backend, AI & pitch roles", icon: UsersRound, className: "bg-[#00a98f]" },
  { label: "BUILD", desc: "Rapid prototype coding sprint against the clock", icon: Code2, className: "bg-[#ff7d16]" },
  { label: "MENTOR", desc: "24/7 on-site debugging with senior industry architects", icon: Users, className: "bg-[#078fe8]" },
  { label: "PITCH", desc: "Live 3-minute demo before executive jury", icon: Presentation, className: "bg-[#ef3d69]" },
  { label: "WIN", desc: "Cash awards, trophies & fast-track hiring interviews", icon: Trophy, className: "bg-[#f6af00]" },
];

const challengeTracks = [
  {
    title: "Autonomous AI & LLM Agents",
    tag: "FLAGSHIP",
    problem: "Build autonomous multi-step agents that solve domain-specific workflows (healthcare, legal, education).",
    icon: BotIcon,
    color: "text-[#9d54ff]",
  },
  {
    title: "Smart Campus & Student Utilities",
    tag: "POPULAR",
    problem: "Engineer systems that streamline attendance, lab bookings, lost-and-found, or campus safety.",
    icon: GraduationCap,
    color: "text-[#11d4c0]",
  },
  {
    title: "FinTech & Secure Transaction Systems",
    tag: "CHALLENGE",
    problem: "Design fraud-resistant micro-payment protocols or automated budgeting engines using public APIs.",
    icon: Building2,
    color: "text-[#ff547b]",
  },
  {
    title: "Green Tech & Sustainability IoT",
    tag: "IMPACT",
    problem: "Monitor campus energy usage and build predictive carbon footprint reduction models.",
    icon: Leaf,
    color: "text-[#00caa4]",
  },
];

function BotIcon({ className }: { className?: string }) {
  return <Gauge className={className} />;
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[560px] sm:h-[360px] lg:h-[390px]">
      <div className="absolute inset-[8%] rounded-full border border-dashed border-[#7038ff]/70" />
      <div className="absolute left-[6%] top-[31%] rounded-xl border border-[#1768ff] bg-[#101f58] px-4 py-2 text-xs font-black tracking-wide text-[#168aff] shadow-[0_0_18px_rgba(23,104,255,0.25)]">
        IDEA
      </div>
      <div className="absolute right-[3%] top-[13%] rounded-xl border border-[#4938ff] bg-[#111d56] px-4 py-2 text-xs font-black tracking-wide text-[#3c8eff] shadow-[0_0_18px_rgba(60,142,255,0.25)]">
        BUILD
      </div>
      <div className="absolute right-[8%] top-[43%] rounded-xl border border-[#4138ff] bg-[#111d56] px-4 py-2 text-xs font-black tracking-wide text-[#496aff] shadow-[0_0_18px_rgba(73,106,255,0.25)]">
        WIN
      </div>

      <div className="absolute left-[24%] top-[15%] flex h-16 w-16 rotate-[-12deg] items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffbd21] to-[#ff6b1a] text-[#fff2b3] shadow-[0_0_32px_rgba(255,141,22,0.65)]">
        <Trophy className="h-9 w-9" />
      </div>
      <div className="absolute right-[25%] top-[3%] flex h-14 w-14 rotate-[8deg] items-center justify-center rounded-full bg-gradient-to-b from-[#ffcb43] via-[#ff5f72] to-[#d334c5] text-white shadow-[0_0_34px_rgba(255,92,92,0.7)]">
        <Lightbulb className="h-8 w-8" />
      </div>
      <div className="absolute left-[16%] top-[53%] flex h-16 w-16 items-center justify-center rounded-full bg-[#124da5] text-[#08baff] shadow-[0_0_24px_rgba(8,186,255,0.4)]">
        <Users className="h-9 w-9" />
      </div>

      <div className="absolute left-1/2 top-[30%] w-[66%] -translate-x-1/2 rotate-[-13deg] rounded-[18px] border-2 border-[#4864e7] bg-gradient-to-br from-[#6630e5] via-[#21246d] to-[#0a174b] p-3 shadow-[0_0_40px_rgba(88,51,255,0.6)]">
        <div className="flex aspect-[1.55] items-center justify-center rounded-lg border border-[#2548b2] bg-[#06143d] text-[#6c62ff]">
          <Code2 className="h-20 w-20 drop-shadow-[0_0_15px_rgba(91,91,255,0.85)] sm:h-24 sm:w-24" />
        </div>
        <div className="mx-auto mt-2 h-2 w-[45%] rounded-full bg-[#3d4da5]" />
      </div>
      <div className="absolute bottom-[13%] left-[22%] h-4 w-[58%] rotate-[-13deg] rounded-[100%] bg-gradient-to-r from-[#3e1ba7] via-[#7549ff] to-[#1b3eae] shadow-[0_0_30px_rgba(86,64,255,0.65)]" />
      <Sparkles className="absolute bottom-[8%] right-[17%] h-7 w-7 text-[#ff9546]" />
    </div>
  );
}

export function HackathonExperienceSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section
      id="hackathon-experience"
      className="relative overflow-hidden border-t border-[#182b61] bg-[#050b28] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#121b66]/70 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 top-24 h-[560px] w-[560px] rounded-full bg-[#401269]/40 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-96 rounded-full bg-[#09338c]/30 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1530px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4">
          <div className="max-w-[770px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ee941e] bg-[#101a42] px-4 py-2 text-[11px] font-black uppercase tracking-[0.08em] text-[#ffb51b]">
              <Flame className="h-4 w-4" />
              High-adrenaline campus event
            </span>
            <h2 className="mt-5 text-[42px] font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-[58px] lg:text-[66px]">
              Campus Hackathons.
              <br />
              <span className="bg-gradient-to-r from-[#ffb718] via-[#ff7a1c] to-[#f13c86] bg-clip-text text-transparent">
                Adrenaline, Innovation &amp; Glory.
              </span>
            </h2>
            <p className="mt-5 max-w-[670px] text-[15px] leading-[1.7] text-[#a8b8dd] sm:text-[17px]">
              Hackathons are not courses - they are high-energy festivals of creation where student teams push their limits, build all night, and experience the thrill of demoing live software.
            </p>

            <div className="mt-6 grid max-w-[770px] grid-cols-2 gap-3 sm:grid-cols-4">
              {eventFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="rounded-xl border border-[#273c78] bg-[#0b153a]/80 px-3 py-3">
                    <Icon className={`h-6 w-6 ${fact.className}`} />
                    <span className={`mt-2 block text-[11px] font-black ${fact.className}`}>{fact.label}</span>
                    <span className="mt-0.5 block text-[12px] text-[#b4c1df]">{fact.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:pl-3">
            <HeroVisual />
            <button
              type="button"
              onClick={() => scrollToSection("campus-enquiry")}
              className="mx-auto -mt-2 flex w-full max-w-[430px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ffab0b] to-[#ff4b20] px-6 py-4 text-xs font-black uppercase tracking-[0.07em] text-white shadow-[0_10px_35px_rgba(255,104,23,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Host a Hackathon on Your Campus
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-14 rounded-[22px] border border-[#274887] bg-gradient-to-br from-[#0d1b46]/90 to-[#071338]/90 p-5 sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#ffbf19] sm:text-base">
              <Zap className="h-5 w-5" />
              The 24-48 hour event journey
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9aabd1]">From idea to impact</span>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
            {eventSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.label}>
                  <div className="min-h-[154px] rounded-xl border border-[#2a3d72] bg-[#15234b]/80 p-3 sm:p-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${step.className} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="mt-3 block text-[10px] font-black uppercase tracking-wider text-[#ffbf19]">Step 0{index + 1}</span>
                    <strong className="mt-1 block text-sm font-black text-white">{step.label}</strong>
                    <p className="mt-1 text-[12px] leading-[1.45] text-[#a9b8db]">{step.desc}</p>
                  </div>
                  {index < eventSteps.length - 1 && <ArrowRight className="mx-auto hidden h-5 w-5 text-[#8da2d6] lg:block" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {challengeTracks.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.title} className="flex min-h-[248px] flex-col justify-between rounded-2xl border border-[#29447c] bg-[#0b173d]/80 p-5 transition-transform hover:-translate-y-1 hover:border-[#506db3] sm:p-6">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <Icon className={`h-9 w-9 ${track.color}`} />
                    <span className="rounded-lg bg-[#5a472b] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#ffc21e]">{track.tag}</span>
                  </div>
                  <h4 className="mt-4 text-[17px] font-black leading-[1.2] text-white">{track.title}</h4>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#a7b6d8]">{track.problem}</p>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-[#263965] pt-4 text-sm font-black text-[#ffc21e]">
                  <Target className="h-4 w-4" />
                  Mentored Challenge Track
                  <ArrowRight className="ml-auto h-4 w-4" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
