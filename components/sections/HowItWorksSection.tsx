"use client";

import React, { useState } from "react";
import {
  SlidersHorizontal,
  FileCode2,
  MapPin,
  Terminal,
  Award,
  Trophy,
  Star,
  CheckCircle2,
  Users,
  Zap,
  Medal,
} from "lucide-react";

// 1. College Campus Illustration (Matching Screenshot 1)
function CollegeCampusIllustration() {
  return (
    <div className="w-full h-[120px] flex items-center justify-center">
      <svg
        viewBox="0 0 170 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[155px]"
      >
        {/* Soft Background Clouds / Trees */}
        <circle cx="24" cy="86" r="16" fill="#EDE9FE" />
        <circle cx="146" cy="86" r="16" fill="#EDE9FE" />
        <circle cx="18" cy="92" r="12" fill="#DDD6FE" />
        <circle cx="152" cy="92" r="12" fill="#DDD6FE" />

        {/* Dome */}
        <path
          d="M66 52C66 41.5 74.5 33 85 33C95.5 33 104 41.5 104 52H66Z"
          fill="#DDD6FE"
        />
        <rect x="83" y="24" width="4" height="10" rx="1" fill="#7C3AED" />
        <circle cx="85" cy="22" r="3.5" fill="#7C3AED" />

        {/* Triangular Pediment */}
        <path d="M46 52L85 34L124 52H46Z" fill="#8B5CF6" />

        {/* Main Central Building */}
        <rect
          x="50"
          y="52"
          width="70"
          height="54"
          rx="2"
          fill="#F5F3FF"
          stroke="#C4B5FD"
          strokeWidth="1.5"
        />

        {/* Four Classical Columns */}
        <rect x="56" y="56" width="6.5" height="46" rx="1.5" fill="#C4B5FD" />
        <rect x="70" y="56" width="6.5" height="46" rx="1.5" fill="#C4B5FD" />
        <rect x="93.5" y="56" width="6.5" height="46" rx="1.5" fill="#C4B5FD" />
        <rect x="107.5" y="56" width="6.5" height="46" rx="1.5" fill="#C4B5FD" />

        {/* Arch Doorway */}
        <path
          d="M78 106V74C78 70.1 81.1 67 85 67C88.9 67 92 70.1 92 74V106H78Z"
          fill="#6D28D9"
        />

        {/* Left Side Wing */}
        <rect
          x="20"
          y="66"
          width="30"
          height="40"
          rx="2"
          fill="#EDE9FE"
          stroke="#C4B5FD"
          strokeWidth="1.5"
        />
        <rect x="27" y="74" width="7" height="12" rx="1" fill="#A78BFA" />
        <rect x="37" y="74" width="7" height="12" rx="1" fill="#A78BFA" />

        {/* Right Side Wing */}
        <rect
          x="120"
          y="66"
          width="30"
          height="40"
          rx="2"
          fill="#EDE9FE"
          stroke="#C4B5FD"
          strokeWidth="1.5"
        />
        <rect x="126" y="74" width="7" height="12" rx="1" fill="#A78BFA" />
        <rect x="136" y="74" width="7" height="12" rx="1" fill="#A78BFA" />

        {/* Base Steps */}
        <rect x="12" y="106" width="146" height="5" rx="2" fill="#CBD5E1" />
      </svg>
    </div>
  );
}

// 2. Laptop with Blueprint Illustration (Matching Screenshot 1)
function LaptopBlueprintIllustration() {
  return (
    <div className="w-full h-[120px] flex items-center justify-center">
      <svg
        viewBox="0 0 170 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[155px]"
      >
        {/* Soft Background Cloud */}
        <path
          d="M136 40C136 36 139.2 32.8 143.2 32.8C146.5 32.8 149.3 35.1 150.1 38.3C150.7 38.1 151.3 38 152 38C154.8 38 157 40.2 157 43C157 45.8 154.8 48 152 48H142C138.7 48 136 45.3 136 42V40Z"
          fill="#DBEAFE"
        />
        <circle cx="28" cy="46" r="8" fill="#EFF6FF" />

        {/* Laptop Screen Bezel */}
        <rect
          x="32"
          y="26"
          width="106"
          height="70"
          rx="6"
          fill="#1E293B"
          stroke="#94A3B8"
          strokeWidth="2"
        />
        {/* Screen Display Area */}
        <rect x="36" y="30" width="98" height="62" rx="3" fill="#F8FAFC" />

        {/* Blueprint Dashboard Panels */}
        <rect x="42" y="36" width="28" height="48" rx="3" fill="#E0E7FF" />
        <circle cx="50" cy="44" r="3.5" fill="#3B82F6" />
        <rect x="44" y="52" width="20" height="3" rx="1.5" fill="#93C5FD" />
        <rect x="44" y="58" width="16" height="3" rx="1.5" fill="#93C5FD" />
        <rect x="44" y="64" width="22" height="3" rx="1.5" fill="#93C5FD" />

        {/* Top Right Blueprint Card */}
        <rect x="74" y="36" width="54" height="18" rx="3" fill="#DBEAFE" />
        <rect x="80" y="42" width="30" height="4" rx="2" fill="#2563EB" />
        <rect x="80" y="48" width="42" height="2.5" rx="1" fill="#93C5FD" />

        {/* Bottom Right Blueprint Card */}
        <rect x="74" y="58" width="54" height="26" rx="3" fill="#EFF6FF" />
        <rect x="80" y="64" width="22" height="3.5" rx="1.5" fill="#3B82F6" />
        <rect x="80" y="71" width="38" height="2.5" rx="1" fill="#93C5FD" />
        <rect x="80" y="76" width="28" height="2.5" rx="1" fill="#93C5FD" />

        {/* Laptop Keyboard Base */}
        <path
          d="M20 96C20 94.9 20.9 94 22 94H148C149.1 94 150 94.9 150 96L154 105C154 107.2 152.2 109 150 109H20C17.8 109 16 107.2 16 105L20 96Z"
          fill="#64748B"
        />
        <rect x="70" y="96" width="30" height="3" rx="1.5" fill="#CBD5E1" />
      </svg>
    </div>
  );
}

// 3. Mentor & Classroom Illustration (Matching Screenshot 1)
function MentorClassroomIllustration() {
  return (
    <div className="w-full h-[120px] flex items-center justify-center">
      <svg
        viewBox="0 0 170 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[155px]"
      >
        {/* Presentation Board in Background */}
        <rect
          x="34"
          y="22"
          width="102"
          height="58"
          rx="5"
          fill="#F0F9FF"
          stroke="#BAE6FD"
          strokeWidth="2"
        />
        <rect x="42" y="30" width="32" height="4" rx="2" fill="#0284C7" />
        <rect x="42" y="38" width="56" height="3" rx="1.5" fill="#7DD3FC" />
        <rect x="42" y="44" width="48" height="3" rx="1.5" fill="#BAE6FD" />
        <rect x="42" y="50" width="40" height="3" rx="1.5" fill="#BAE6FD" />

        {/* Board Analytics Chart */}
        <path
          d="M104 56L112 46L118 50L126 38"
          stroke="#0284C7"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="126" cy="38" r="3" fill="#0284C7" />

        {/* Center Lead Mentor */}
        <circle cx="85" cy="58" r="11" fill="#0284C7" />
        <path
          d="M68 94C68 84.6 75.6 77 85 77C94.4 77 102 84.6 102 94V102H68V94Z"
          fill="#0369A1"
        />

        {/* Left Student */}
        <circle cx="46" cy="68" r="8.5" fill="#7DD3FC" />
        <path
          d="M34 98C34 91.4 39.4 86 46 86C52.6 86 58 91.4 58 98V102H34V98Z"
          fill="#38BDF8"
        />

        {/* Right Student */}
        <circle cx="124" cy="68" r="8.5" fill="#7DD3FC" />
        <path
          d="M112 98C112 91.4 117.4 86 124 86C130.6 86 136 91.4 136 98V102H112V98Z"
          fill="#38BDF8"
        />
      </svg>
    </div>
  );
}

// 4. Code Terminal & Live IDE Illustration (Matching Screenshot 1)
function CodeTerminalIllustration() {
  return (
    <div className="w-full h-[120px] flex items-center justify-center">
      <svg
        viewBox="0 0 170 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[155px]"
      >
        {/* Code Editor Window */}
        <rect
          x="26"
          y="24"
          width="118"
          height="74"
          rx="8"
          fill="#F0FDFA"
          stroke="#2DD4BF"
          strokeWidth="2.5"
        />
        {/* Window Titlebar */}
        <path
          d="M26 33C26 28 30 24 35 24H135C140 24 144 28 144 33V38H26V33Z"
          fill="#2DD4BF"
        />
        <circle cx="38" cy="31" r="3" fill="#FFFFFF" />
        <circle cx="47" cy="31" r="3" fill="#FFFFFF" />
        <circle cx="56" cy="31" r="3" fill="#FFFFFF" />

        {/* Center Code Symbol </> */}
        <text
          x="85"
          y="68"
          fontSize="24"
          fontWeight="900"
          fill="#0D9488"
          textAnchor="middle"
          fontFamily="monospace"
        >
          &lt;/&gt;
        </text>

        {/* Code Lines */}
        <rect x="42" y="78" width="86" height="3.5" rx="1.75" fill="#99F6E4" />
        <rect x="42" y="85" width="56" height="3.5" rx="1.75" fill="#CCFBF1" />

        {/* Floating Gear Badge */}
        <circle cx="134" cy="88" r="12" fill="#0D9488" />
        <circle cx="134" cy="88" r="5.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

// 5. Verified Certificate & Medal Illustration (Matching Screenshot 1)
function CertificateMedalIllustration() {
  return (
    <div className="w-full h-[120px] flex items-center justify-center">
      <svg
        viewBox="0 0 170 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[155px]"
      >
        {/* Certificate Paper */}
        <rect
          x="34"
          y="22"
          width="102"
          height="76"
          rx="6"
          fill="#F0FDF4"
          stroke="#86EFAC"
          strokeWidth="2.5"
        />

        {/* Title Bar */}
        <rect x="46" y="32" width="52" height="5" rx="2.5" fill="#22C55E" />

        {/* Certificate Text Lines */}
        <rect x="46" y="42" width="78" height="3" rx="1.5" fill="#BBF7D0" />
        <rect x="46" y="49" width="70" height="3" rx="1.5" fill="#BBF7D0" />
        <rect x="46" y="56" width="58" height="3" rx="1.5" fill="#BBF7D0" />

        {/* QR Code Verification Stamp */}
        <rect
          x="46"
          y="66"
          width="18"
          height="18"
          rx="3"
          fill="#DCFCE7"
          stroke="#22C55E"
          strokeWidth="1.5"
        />
        <rect x="50" y="70" width="4" height="4" fill="#16A34A" />
        <rect x="56" y="76" width="4" height="4" fill="#16A34A" />

        {/* Green Rosette Ribbon Medal */}
        <circle cx="122" cy="78" r="14" fill="#22C55E" />
        <circle cx="122" cy="78" r="9" fill="#16A34A" />
        <path d="M116 89L114 105L122 100L130 105L128 89" fill="#15803D" />
      </svg>
    </div>
  );
}

export function HowItWorksSection({
  scrollToSection,
}: {
  scrollToSection?: (id: string) => void;
}) {
  const [activeStation, setActiveStation] = useState<number | null>(null);

  const stations = [
    {
      stepNumber: "01",
      stationLabel: "STATION 01",
      stationTag: "ORIGIN STATION",
      title: "College Selects Experience & Tech Track",
      description:
        "Choose between Workshops, Bootcamps, Hackathons, or Tech Fests across AI, Full-Stack, Java, Python, or Cloud.",
      highlight: "Customized to your academic calendar and student year.",
      illustration: CollegeCampusIllustration,
      color: "#6366f1",
      numColor: "text-[#4f46e5]",
      pillBg: "bg-[#f5f3ff] text-[#6d28d9]",
      icon: SlidersHorizontal,
      nodeBorder: "border-[#c7d2fe]",
      nodeShadow: "rgba(99, 102, 241, 0.18)",
    },
    {
      stepNumber: "02",
      stationLabel: "STATION 02",
      stationTag: "BLUEPRINT HUB",
      title: "Codegnan Customizes Curriculum & Infrastructure",
      description:
        "Our technical architects design syllabus, problem statements, cloud sandbox access, and project blueprints.",
      highlight: "Zero hassle setup for college faculty and lab administrators.",
      illustration: LaptopBlueprintIllustration,
      color: "#3b82f6",
      numColor: "text-[#2563eb]",
      pillBg: "bg-[#eff6ff] text-[#1d4ed8]",
      icon: FileCode2,
      nodeBorder: "border-[#bfdbfe]",
      nodeShadow: "rgba(59, 130, 246, 0.18)",
    },
    {
      stepNumber: "03",
      stationLabel: "STATION 03",
      stationTag: "ON-CAMPUS STOP",
      title: "Mentor Team Arrives on Your Campus",
      description:
        "Senior technical trainers, architects from top MNCs, and product engineers arrive at your college labs/auditorium.",
      highlight: "Direct physical face-to-face mentorship and live debugging.",
      illustration: MentorClassroomIllustration,
      color: "#0ea5e9",
      numColor: "text-[#0284c7]",
      pillBg: "bg-[#f0f9ff] text-[#0369a1]",
      icon: MapPin,
      nodeBorder: "border-[#bae6fd]",
      nodeShadow: "rgba(14, 165, 233, 0.18)",
    },
    {
      stepNumber: "04",
      stationLabel: "STATION 04",
      stationTag: "BUILD JUNCTION",
      title: "Students Build, Code & Innovate Live",
      description:
        "80% hands-on coding from minute one. Students write code, solve challenges, test logic, and build working software.",
      highlight: "No boring slide monologues — real terminal and IDE building.",
      illustration: CodeTerminalIllustration,
      color: "#14b8a6",
      numColor: "text-[#0d9488]",
      pillBg: "bg-[#f0fdfa] text-[#0f766e]",
      icon: Terminal,
      nodeBorder: "border-[#99f6e4]",
      nodeShadow: "rgba(20, 184, 166, 0.18)",
    },
    {
      stepNumber: "05",
      stationLabel: "STATION 05",
      stationTag: "GRAND TERMINAL",
      title: "Outcomes, Verified Certificates & Recognition",
      description:
        "Every student receives an authentic verifiable certificate with Credential ID & QR code. Hackathon winners win awards.",
      highlight: "Proven portfolio proof for resumes and placement drives.",
      illustration: CertificateMedalIllustration,
      color: "#22c55e",
      numColor: "text-[#16a34a]",
      pillBg: "bg-[#f0fdf4] text-[#15803d]",
      icon: Award,
      nodeBorder: "border-[#bbf7d0]",
      nodeShadow: "rgba(34, 197, 94, 0.18)",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-[#fbfcff] py-14 sm:py-16 lg:py-20 overflow-hidden border-t border-[#edf0f8]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-[1000px] mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-[-0.045em] text-[#0d1033] leading-[1.08]">
            From Campus to Career —{" "}
            <span className="bg-gradient-to-r from-[#304ffe] to-[#2d81f7] bg-clip-text text-transparent">We Build the Future</span>
          </h2>
          <p className="mt-4 text-[15px] sm:text-[17px] text-[#4a5580] leading-relaxed max-w-[720px] mx-auto font-medium">
            Codegnan partners with colleges to deliver hands-on learning experiences that drive real skills, real projects, and real success.
          </p>
        </div>

        {/* TOP RAILROAD CONNECTING TRACK WITH COLORED DASHED LINES (Screenshot 1) */}
        <div className="hidden lg:block relative mb-9 px-6">
          {/* Segmented Colored Dashed Lines Connecting the 5 Circular Nodes */}
          <div className="absolute top-[32px] left-[10%] right-[10%] flex items-center justify-between -z-0 pointer-events-none">
            {/* Segment 1 -> 2 */}
            <div className="w-[25%] border-t-2 border-dashed border-[#818cf8]" />
            {/* Segment 2 -> 3 */}
            <div className="w-[25%] border-t-2 border-dashed border-[#60a5fa]" />
            {/* Segment 3 -> 4 */}
            <div className="w-[25%] border-t-2 border-dashed border-[#38bdf8]" />
            {/* Segment 4 -> 5 */}
            <div className="w-[25%] border-t-2 border-dashed border-[#34d399]" />
          </div>

          {/* 5 Circular Station Nodes */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {stations.map((station, idx) => {
              const Icon = station.icon;
              const isHovered = activeStation === idx;
              return (
                <div
                  key={station.stepNumber}
                  className="flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setActiveStation(idx)}
                  onMouseLeave={() => setActiveStation(null)}
                >
                  {/* Node Circle */}
                  <div
                    className={`w-[72px] h-[72px] rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 ${
                      station.nodeBorder
                    } ${
                      isHovered
                        ? "scale-110 shadow-lg border-[#304ffe]"
                        : "shadow-sm group-hover:scale-105 group-hover:border-[#304ffe]"
                    }`}
                    style={{
                      boxShadow: isHovered
                        ? `0 10px 25px ${station.nodeShadow}`
                        : undefined,
                    }}
                  >
                    <Icon
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                      style={{ color: station.color }}
                    />
                  </div>

                  {/* Station Pill Tag below Node */}
                  <span className="mt-4 text-[11px] font-extrabold tracking-wide uppercase transition-colors" style={{ color: station.color }}>
                    {station.stationTag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 STATION PROCESS CARDS GRID (Screenshot 1 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {stations.map((station, idx) => {
            const Illustration = station.illustration;
            const isHovered = activeStation === idx;

            return (
              <div
                key={station.stepNumber}
                onMouseEnter={() => setActiveStation(idx)}
                onMouseLeave={() => setActiveStation(null)}
                className={`min-h-[500px] rounded-[18px] bg-white border border-t-2 p-4 sm:p-[18px] flex flex-col justify-between transition-all duration-300 shadow-[0_7px_20px_rgba(24,34,84,0.06)] ${
                  isHovered
                    ? "border-[#304ffe]/60 shadow-[0_20px_45px_rgba(48,79,254,0.12)] -translate-y-2"
                    : "border-[#e2e8f0] hover:border-[#304ffe]/30 hover:shadow-md"
                }`}
                style={{ borderTopColor: station.color }}
              >
                <div>
                  {/* Step Number & Station Label Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[38px] font-black leading-none ${station.numColor}`}
                    >
                      {station.stepNumber}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: station.color }}>
                      {station.stationLabel}
                    </span>
                  </div>

                  {/* Visual Illustration Component */}
                  <div className="my-4 py-1">
                    <Illustration />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[17px] font-extrabold text-[#0d1033] leading-[1.35] mt-2 group-hover:text-[#304ffe] transition-colors">
                    {station.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[12.5px] text-[#4a5580] leading-[1.6]">
                    {station.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div
                  className={`mt-5 rounded-xl p-3.5 flex items-start gap-2 text-[11.5px] font-semibold leading-snug ${station.pillBg}`}
                >
                  <span className="shrink-0 mt-0.5">
                    {idx === 0 && <Star className="w-3.5 h-3.5 fill-current" />}
                    {idx === 1 && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {idx === 2 && <Users className="w-3.5 h-3.5" />}
                    {idx === 3 && <Zap className="w-3.5 h-3.5 fill-current" />}
                    {idx === 4 && <Medal className="w-3.5 h-3.5" />}
                  </span>
                  <span>{station.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM SUMMARY & PARTNER CTA BANNER */}
        <div className="mt-9 rounded-[18px] bg-white border border-[#dce4ff] p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_6px_18px_rgba(48,79,254,0.05)]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#fffbeb] text-[#d97706] flex items-center justify-center shrink-0 shadow-sm border border-[#fef3c7]">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[16px] sm:text-[17.5px] font-extrabold text-[#0f172a]">
                One Journey. Five Powerful Stations. Endless Opportunities.
              </h4>
              <p className="text-xs sm:text-[13.5px] text-[#64748b] mt-0.5 font-medium">
                We don&apos;t just run events — we build future-ready students.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (scrollToSection) {
                scrollToSection("campus-enquiry");
              } else {
                const el = document.getElementById("campus-enquiry");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-3.5 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] hover:from-[#4338ca] hover:to-[#6d28d9] text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-xl shadow-[0_6px_20px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0 flex items-center gap-2"
          >
            <span>Partner With Codegnan</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
