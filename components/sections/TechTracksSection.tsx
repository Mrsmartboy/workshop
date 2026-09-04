"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  ClipboardList,
  Clock,
  Users,
  ArrowRight,
  Briefcase,
  Code2,
  TrendingUp,
  Star,
} from "lucide-react";

export function TechTracksSection({
  scrollToSection,
}: {
  scrollToSection?: (id: string) => void;
}) {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);

  const tracks = [
    {
      id: "ai-genai",
      category: "AI & GenAI",
      name: "Build Your First AI Assistant",
      tag: "FLAGSHIP TRACK",
      tagColor: "bg-[#f3e8ff] text-[#7c3aed] border border-[#ddd6fe]",
      chipColor: "bg-[#f5f0ff] text-[#7c3aed] border border-[#e4d7ff]",
      description: "Build production-ready AI apps and agents using LLMs, RAG and advanced AI tools.",
      duration: "3–5 Days",
      level: "Beginner +",
      topics: ["RAG Systems", "LangChain", "Vector DB", "+2 more"],
      image: "/gallery/ai_gen.png",
      isFlagship: true,
      bgGradient: "from-[#f5f0ff] to-[#fbf7ff]",
    },
    {
      id: "ai-coding-agents",
      category: "AI & GenAI",
      name: "Build With Generative AI",
      tag: "HIGH DEMAND",
      tagColor: "bg-[#dcfce7] text-[#15803d] border border-[#bbf7d0]",
      chipColor: "bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0]",
      description: "Leverage AI-powered coding tools, agents and autonomous workflows.",
      duration: "2–4 Days",
      level: "Beginner +",
      topics: ["Cursor AI", "Claude Code", "Auto Agents", "+2 more"],
      image: "/gallery/ai_agent.png",
      bgGradient: "from-[#ecfdf5] to-[#f0fdf4]",
    },
    {
      id: "full-stack",
      category: "Web Development",
      name: "Build & Deploy a Website",
      tag: "CORE ENGINEERING",
      tagColor: "bg-[#ffe4e6] text-[#e11d48] border border-[#fecdd3]",
      chipColor: "bg-[#fff1f2] text-[#e11d48] border border-[#fecdd3]",
      description: "Modern web development with React, Node.js, APIs and scalable databases.",
      duration: "4–6 Days",
      level: "Beginner to Pro",
      topics: ["React 19", "Next.js", "Node.js", "+2 more"],
      image: "/gallery/fullstack.png",
      bgGradient: "from-[#fff1f2] to-[#fff5f5]",
    },
    {
      id: "python-data",
      category: "Python",
      name: "Automate Data Workflows",
      tag: "FOUNDATIONAL",
      tagColor: "bg-[#fef3c7] text-[#b45309] border border-[#fde68a]",
      chipColor: "bg-[#fffbeb] text-[#b45309] border border-[#fde68a]",
      description: "Master Python, data pipelines, and modern data engineering practices.",
      duration: "3–5 Days",
      level: "Beginner +",
      topics: ["Python", "Pandas", "ETL", "FastAPI", "+2 more"],
      image: "/gallery/python.png",
      bgGradient: "from-[#fffbeb] to-[#fffdf5]",
    },
    {
      id: "java-microservices",
      category: "Java",
      name: "Build an Enterprise App",
      tag: "ENTERPRISE READY",
      tagColor: "bg-[#f3e8ff] text-[#7e22ce] border border-[#e9d5ff]",
      chipColor: "bg-[#faf5ff] text-[#7e22ce] border border-[#e9d5ff]",
      description: "Enterprise Java, Spring Boot, microservices, security auth and cloud database.",
      duration: "4–6 Days",
      level: "Intermediate +",
      topics: ["Spring Boot 3", "Microservices", "Hibernate", "+2 more"],
      image: "/gallery/java.png",
      bgGradient: "from-[#faf5ff] to-[#fbf7ff]",
    },
    {
      id: "data-analytics",
      category: "Data",
      name: "Turn Data Into Insights",
      tag: "INDUSTRY STANDARD",
      tagColor: "bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]",
      chipColor: "bg-[#f0f9ff] text-[#0369a1] border border-[#bae6fd]",
      description: "Analyze data, build dashboards and derive insights that drive business decisions.",
      duration: "2–4 Days",
      level: "Beginner +",
      topics: ["SQL", "Power BI", "Data Analysis", "+2 more"],
      image: "/gallery/powerbi.png",
      bgGradient: "from-[#f0f9ff] to-[#f8fcff]",
    },
    {
      id: "cloud-devops",
      category: "Web Development",
      name: "Deploy & Scale a Product",
      tag: "INFRASTRUCTURE",
      tagColor: "bg-[#e0f2fe] text-[#0284c7] border border-[#bae6fd]",
      chipColor: "bg-[#f0f9ff] text-[#0284c7] border border-[#bae6fd]",
      description: "Deploy, automate and scale applications on cloud with DevOps best practices.",
      duration: "3–5 Days",
      level: "Beginner +",
      topics: ["AWS", "Docker", "Kubernetes", "CI/CD", "+2 more"],
      image: "/gallery/devops.png",
      bgGradient: "from-[#f0f9ff] to-[#f8fcff]",
    },
    {
      id: "cybersecurity",
      category: "Web Development",
      name: "Break. Secure. Learn.",
      tag: "SECURITY FOCUS",
      tagColor: "bg-[#fee2e2] text-[#dc2626] border border-[#fecaca]",
      chipColor: "bg-[#fef2f2] text-[#dc2626] border border-[#fecaca]",
      description: "Learn security fundamentals, ethical hacking and vulnerability assessments.",
      duration: "3–5 Days",
      level: "Intermediate +",
      topics: ["OWASP Top 10", "Network Security", "JWT", "+2 more"],
      image: "/gallery/cybersecurity.png",
      bgGradient: "from-[#fef2f2] to-[#fff8f8]",
    },
    {
      id: "git-workflows",
      category: "Web Development",
      name: "Ship Your First Team Project",
      tag: "ESSENTIAL SKILL",
      tagColor: "bg-[#ccfbf1] text-[#0f766e] border border-[#99f6e4]",
      chipColor: "bg-[#f0fdfa] text-[#0f766e] border border-[#99f6e4]",
      description: "Master Git, collaboration, branching strategies and open source workflows.",
      duration: "2–3 Days",
      level: "Beginner +",
      topics: ["Git Branching", "Pull Requests", "Code Review", "+2 more"],
      image: "/gallery/git.png",
      bgGradient: "from-[#f0fdfa] to-[#f6fefc]",
    },
  ];

  const trackDetails: Record<string, { audience: string; build: string; leaveWith: string }> = {
    "ai-genai": {
      audience: "I–III year students exploring AI and modern developer tools",
      build: "A conversational AI assistant using prompts, APIs, and retrieval",
      leaveWith: "A working demo, prompt patterns, and a portfolio-ready project story",
    },
    "ai-coding-agents": {
      audience: "Students who want to use generative AI to build faster",
      build: "An AI-assisted product workflow with agents and tool calling",
      leaveWith: "Practical agent patterns and a demo they can explain in interviews",
    },
    "full-stack": {
      audience: "II–IV year students ready to build for the web",
      build: "A responsive website connected to APIs, a database, and deployment",
      leaveWith: "A live URL, GitHub repository, and full-stack project experience",
    },
    "python-data": {
      audience: "Beginners building confidence with Python and automation",
      build: "A Python data workflow that cleans, transforms, and serves useful results",
      leaveWith: "Reusable scripts, data handling fundamentals, and a guided mini-project",
    },
    "java-microservices": {
      audience: "II–IV year students preparing for backend engineering",
      build: "A Spring Boot service with APIs, authentication, and database persistence",
      leaveWith: "Enterprise backend patterns and a deployable service walkthrough",
    },
    "data-analytics": {
      audience: "Students who want to turn raw data into decisions",
      build: "An interactive analytics dashboard with meaningful business insights",
      leaveWith: "A dashboard project, data storytelling practice, and presentation confidence",
    },
    "cloud-devops": {
      audience: "III–IV year students interested in shipping and infrastructure",
      build: "A containerized application with an automated deployment pipeline",
      leaveWith: "Cloud fundamentals, CI/CD practice, and a repeatable deployment workflow",
    },
    cybersecurity: {
      audience: "Students curious about application security and ethical testing",
      build: "A security review that finds, explains, and fixes common web vulnerabilities",
      leaveWith: "A practical security checklist and a safer application demo",
    },
    "git-workflows": {
      audience: "I–III year students learning to collaborate like a product team",
      build: "A shared project using branches, pull requests, reviews, and releases",
      leaveWith: "A clean contribution history and confidence working in a team repository",
    },
  };

  const handleCtaClick = () => {
    if (scrollToSection) {
      scrollToSection("campus-enquiry");
    } else {
      const el = document.getElementById("campus-enquiry");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tech-tracks" className="relative bg-[#ffffff] py-14 sm:py-16 lg:py-20 overflow-hidden border-t border-[#f1f5f9]">
      <div className="max-w-[1416px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ═══════════════════════════════════════════════════
            TOP HEADER: 2-Column Responsive Layout
        ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8 xl:gap-14 items-center mb-8 sm:mb-10">
          {/* Left Column: Title & Description */}
          <div className="max-w-[720px]">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#eef1ff] text-[#304ffe] text-[11px] font-extrabold uppercase tracking-[0.08em] rounded-full mb-3 border border-[#dce4ff]">
              <GraduationCap className="w-4 h-4" />
              Build-focused technology experiences
            </span>
            <h2 className="text-[38px] sm:text-[52px] font-black tracking-[-0.045em] text-[#0d1033] leading-[1.05]">
              What Could Your Students Build?<br />
              <span className="bg-gradient-to-r from-[#6032e4] via-[#4059ec] to-[#2d81f7] bg-clip-text text-transparent">Real projects with real tools.</span>
            </h2>
            <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#606482] leading-relaxed">
              Choose an outcome-led lab where students use production tools, solve practical problems, and leave with something they can demonstrate.
            </p>
          </div>

          {/* Right Column: Customize Track Card */}
          <div className="shrink-0">
            <div className="w-full bg-white rounded-[20px] border border-[#e7ebf5] p-5 shadow-[0_10px_30px_rgba(20,24,68,0.08)]">
              <div className="flex items-center gap-3 mb-3.5">
                <div className="relative w-[92px] h-[92px] shrink-0 rounded-full bg-[#f0edff] text-[#6335da] flex items-center justify-center">
                  <ClipboardList className="w-12 h-12" strokeWidth={1.5} />
                  <GraduationCap className="absolute right-1 bottom-2 w-7 h-7 fill-[#6335da] text-[#6335da]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-extrabold text-[#0d1033] leading-snug">Build future-ready students with the right tech track</h4>
                  <ul className="mt-2 space-y-1 text-[11px] text-[#30416f]">
                    <li><span className="text-[#5140e9]">&#10003;</span> Customize curriculum</li>
                    <li><span className="text-[#5140e9]">&#10003;</span> Choose duration &amp; depth</li>
                    <li><span className="text-[#5140e9]">&#10003;</span> Get a tailored proposal in 24h</li>
                  </ul>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full py-3.5 bg-gradient-to-r from-[#304ffe] to-[#7134ed] hover:from-[#253bdf] hover:to-[#5c25d9] text-white text-[12.5px] font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Customize a Track for Your Campus</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            9 TRACKS GRID — TOP IMAGE + BOTTOM TEXT & COLOURED TAGS
        ═══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 mb-6 divide-[#e2e7f2] lg:divide-x">
          {[
            { icon: Briefcase, title: "Industry Aligned", desc: "Designed with input from top tech companies", color: "from-[#8a5ce6] to-[#6335c7]" },
            { icon: Code2, title: "Hands-on Projects", desc: "Real-world projects and production-ready skills", color: "from-[#3b82f6] to-[#2563eb]" },
            { icon: TrendingUp, title: "Career Focused", desc: "Placement-oriented learning with mock interviews", color: "from-[#22c55e] to-[#16a34a]" },
            { icon: Users, title: "Expert Mentors", desc: "Learn from industry professionals", color: "from-[#fb923c] to-[#f97316]" },
          ].map((benefit) => {
            const BenefitIcon = benefit.icon;
            return (
              <div key={benefit.title} className="flex items-center gap-3 rounded-[16px] bg-white px-2 py-3 sm:px-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${benefit.color} text-white flex items-center justify-center shrink-0 shadow-[0_6px_14px_rgba(48,79,254,0.18)]`}>
                  <BenefitIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[13px] font-extrabold text-[#0d1033]">{benefit.title}</h4>
                  <p className="mt-1 text-[11px] leading-[1.35] text-[#30416f]">{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const details = trackDetails[track.id];
            const isActive = activeTrackId === track.id;

            return (
            <div
              key={track.id}
              onClick={() => setActiveTrackId(isActive ? null : track.id)}
              className={`min-h-[292px] cursor-pointer rounded-[20px] p-4 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br ${track.bgGradient} ${
                track.isFlagship
                  ? "border-2 border-[#c4b5fd] shadow-[0_10px_35px_rgba(124,58,237,0.08)] hover:shadow-[0_16px_45px_rgba(124,58,237,0.14)]"
                  : "border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#304ffe]/30"
              }`}
            >
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveTrackId(isActive ? null : track.id);
                }}
                aria-expanded={isActive}
                aria-controls={`track-details-${track.id}`}
                aria-label={`${isActive ? "Hide" : "Show"} details for ${track.name}`}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 border border-white text-[#304ffe] flex items-center justify-center shadow-sm transition-transform group-hover:scale-105"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <div>
                {/* 1. TOP IMAGE SHOWCASE */}
                <div className="flex items-center gap-3.5 min-h-[190px] pr-4">
                  <div className="w-[42%] h-[174px] shrink-0 rounded-xl overflow-hidden p-1 flex items-center justify-center relative">
                    <div className="relative w-full h-full">
                    <Image
                      src={track.image}
                      alt={track.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={track.isFlagship}
                    />
                    </div>
                  </div>

                {/* 2. MIDDLE TEXT CONTENT */}
                <div className="flex-1 min-w-0 pt-8">
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-[9.5px] font-extrabold uppercase tracking-[0.06em] rounded-md ${track.tagColor}`}
                    >
                      {track.isFlagship && <Star className="w-2.5 h-2.5 fill-current" />}
                      <span>{track.tag}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-extrabold text-[#0d1033] leading-snug group-hover:text-[#304ffe] transition-colors">
                    {track.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[13px] text-[#606482] leading-relaxed">
                    {track.description}
                  </p>

                  {/* Duration & Level metadata */}
                  <div className="mt-3.5 flex items-center gap-4 text-[11.5px] font-semibold text-[#64748b]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#94a3b8]" />
                      <span>{track.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#94a3b8]" />
                      <span>{track.level}</span>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              {/* 3. BOTTOM COLOURED TAGS */}
              <div className="mt-5 pt-3.5 border-t border-[#f1f5f9]">
                <div className="flex flex-wrap gap-1.5">
                  {track.topics.map((topic, i) => (
                    <span
                      key={i}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md transition-colors ${track.chipColor}`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {isActive && (
                <div id={`track-details-${track.id}`} className="mt-4 space-y-2 rounded-xl border border-white/80 bg-white/75 p-3 text-[11px] leading-[1.5] text-[#30416f]">
                  <p><strong className="font-extrabold text-[#0d1033]">Who it&apos;s for:</strong> {details.audience}</p>
                  <p><strong className="font-extrabold text-[#0d1033]">What they build:</strong> {details.build}</p>
                  <p><strong className="font-extrabold text-[#0d1033]">They leave with:</strong> {details.leaveWith}</p>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleCtaClick();
                    }}
                    className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#304ffe] hover:underline"
                  >
                    Plan this lab
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════════
            THE VERIFIED OUTCOME CHAIN: FROM PROJECT TO PLACEMENT (Screenshot 1)
        ═══════════════════════════════════════════════════ */}
        <div className="mt-20 sm:mt-24 rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#f8faff] via-[#f5f3ff]/60 to-[#fff5f8]/70 border border-[#e2e8f5] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(20,24,68,0.06)] relative overflow-hidden">
          {/* Subtle Ambient Blobs */}
          <div className="pointer-events-none absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#304ffe]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#ec4899]/5 blur-3xl" />

          {/* Header Row */}
          <div className="relative z-10 mb-10 sm:mb-12 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.16em] text-[#304ffe] block mb-2">
                THE VERIFIED OUTCOME CHAIN
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0d1033] tracking-[-0.03em] leading-tight">
                From Project to Placement
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#606482] max-w-[620px] leading-relaxed">
                A complete, verified journey that builds skills, showcases your work, and helps you get hired.
              </p>
            </div>

            {/* Top Right Cursive Handwritten Note with Accent Sparks */}
            <div className="relative select-none self-start md:self-auto pt-2">
              <div className="inline-flex items-center gap-1 font-serif italic text-xl sm:text-2xl lg:text-[25px] font-bold text-[#304ffe] -rotate-[3deg] tracking-tight">
                <span>Learn</span>
                <span className="text-[#6485ff] mx-0.5 font-normal">•</span>
                <span>Build</span>
                <span className="text-[#6485ff] mx-0.5 font-normal">•</span>
                <span>Verify</span>
                <span className="text-[#6485ff] mx-0.5 font-normal">•</span>
                <span className="relative inline-block">
                  Get Hired
                  {/* Burst Accent Rays */}
                  <svg
                    className="absolute -top-3.5 -right-5 w-5 h-5 text-[#304ffe]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="7" />
                    <line x1="18" y1="4" x2="14" y2="8" />
                    <line x1="22" y1="12" x2="17" y2="12" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* 4 Steps with 3D Podiums and Connecting Dotted Arrows */}
          <div className="relative z-10">
            {/* Curved dashed connecting line behind arrows for desktop */}
            <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-12 pointer-events-none -z-0">
              <svg className="w-full h-full" viewBox="0 0 1000 60" fill="none" preserveAspectRatio="none">
                <path
                  d="M 50 30 C 180 50, 320 10, 450 30 C 580 50, 720 10, 850 30"
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
              {[
                {
                  num: "01",
                  title: "LIVE WORKING PROJECT",
                  desc: "Build real-world projects with hands-on guidance",
                  image: "/gallery/project.png",
                },
                {
                  num: "02",
                  title: "GITHUB REPO & DEPLOYED URL",
                  desc: "Maintain code on GitHub and deploy live.",
                  image: "/gallery/git_repo.png",
                },
                {
                  num: "03",
                  title: "VERIFIED CREDENTIAL WITH QR",
                  desc: "Get a verified certificate with QR code.",
                  image: "/gallery/qr_verify.png",
                },
                {
                  num: "04",
                  title: "PLACEMENT & PEER RECOGNITION",
                  desc: "Showcase your work and get placed with confidence.",
                  image: "/gallery/placement.png",
                },
              ].map((stage, idx) => (
                <div key={stage.num} className="relative flex flex-col items-center">
                  {/* 3D Podium Image */}
                  <div className="relative w-full aspect-[4/3] max-h-[220px] flex items-center justify-center group">
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={stage.image}
                        alt={stage.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain drop-shadow-[0_12px_24px_rgba(20,24,68,0.12)]"
                      />
                    </div>
                  </div>

                  {/* Connecting Circular Arrow (for steps 1, 2, 3 on desktop) */}
                  {idx < 3 && (
                    <div className="hidden lg:flex items-center justify-center absolute -right-3.5 top-[28%] z-20 pointer-events-none translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#dce4ff] shadow-sm flex items-center justify-center text-[#304ffe]">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Text Card Below Podium */}
                  <div className="w-full mt-4 rounded-2xl bg-white border border-[#e8edff] p-5 text-center shadow-[0_4px_16px_rgba(20,24,68,0.04)] hover:shadow-md transition-shadow flex flex-col justify-center flex-1">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#0d1033] mb-1.5">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-[#606482] leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Floating Pill Bar */}
          <div className="relative z-10 mt-10 sm:mt-12 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 rounded-full bg-white/95 border border-[#e2e8f5] px-6 sm:px-8 py-3 shadow-[0_10px_30px_rgba(20,24,68,0.06)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#fee2e2] flex items-center justify-center text-sm">
                  🎯
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-black text-[#0d1033]">
                  <span>Real Skills</span>
                  <span className="text-[#94a3b8]">→</span>
                  <span>Verified Work</span>
                  <span className="text-[#94a3b8]">→</span>
                  <span>Better Opportunities</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection?.("campus-enquiry")}
                className="px-5 py-2 rounded-full bg-[#eef3ff] hover:bg-[#304ffe] text-[#304ffe] hover:text-white text-xs font-black tracking-wider transition-all shadow-sm flex items-center gap-1.5 hover:-translate-y-0.5"
              >
                <span>Your Future, Verified</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
