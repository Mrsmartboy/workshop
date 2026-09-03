"use client";

import React from "react";
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
  const tracks = [
    {
      id: "ai-genai",
      category: "AI & GenAI",
      name: "AI & Generative AI",
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
      name: "AI Coding Tools & Agents",
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
      name: "Full Stack Web Development",
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
      name: "Python & Data Engineering",
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
      name: "Java & Microservices",
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
      name: "Data Analytics & BI",
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
      name: "Cloud Computing & DevOps",
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
      name: "Cybersecurity & Ethical Hacking",
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
      name: "Git & Collaborative Workflows",
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
              Industry-Aligned Curriculum
            </span>
            <h2 className="text-[38px] sm:text-[52px] font-black tracking-[-0.045em] text-[#0d1033] leading-[1.05]">
              Curated Technology Tracks<br />
              <span className="bg-gradient-to-r from-[#6032e4] via-[#4059ec] to-[#2d81f7] bg-clip-text text-transparent">for Future-Ready Skills</span>
            </h2>
            <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#606482] leading-relaxed">
              Every track is built with production tools, real terminal exercises, and modern code patterns demanded by top tech companies.
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
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`min-h-[292px] rounded-[20px] p-4 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br ${track.bgGradient} ${
                track.isFlagship
                  ? "border-2 border-[#c4b5fd] shadow-[0_10px_35px_rgba(124,58,237,0.08)] hover:shadow-[0_16px_45px_rgba(124,58,237,0.14)]"
                  : "border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#304ffe]/30"
              }`}
            >
              <button
                type="button"
                onClick={handleCtaClick}
                aria-label={`Explore ${track.name}`}
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
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════
            BOTTOM 4-PILLAR FEATURES STRIP
        ═══════════════════════════════════════════════════ */}
      </div>
    </section>
  );
}
