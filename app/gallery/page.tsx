"use client";

import { useState } from "react";
import {
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  Play,
  Maximize2,
  Calendar,
  Tag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Search,
} from "lucide-react";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  category: "Workshops" | "Hackathons" | "Bootcamps" | "Videos";
  date: string;
  description: string;
  tag: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "fullstack-workshop-video",
    type: "video",
    src: "/gallery/fullstack_workshop.MP4",
    alt: "Full Stack Web Development Workshop Live Demonstration",
    title: "Full Stack Web Development Workshop",
    category: "Workshops",
    tag: "Full Stack Web",
    date: "September 2026",
    description:
      "Comprehensive full-stack development workshop covering modern frontends, robust backend APIs, database modeling, and real-time cloud deployment pipelines.",
  },
  {
    id: "dsa-workshop-cohort",
    type: "image",
    src: "/gallery/DSA_workshop.JPG",
    alt: "Data Structures & Algorithms (DSA) Workshop Mentorship Session",
    title: "Data Structures & Algorithms (DSA) Workshop",
    category: "Workshops",
    tag: "DSA & Problem Solving",
    date: "September 2026",
    description:
      "Intensive hands-on Data Structures & Algorithms masterclass with deep mentor guidance, algorithmic optimization, and competitive coding problem solving.",
  },
  {
    id: "python-agentic-ai-workshop",
    type: "image",
    src: "/gallery/python_workshop.JPG",
    alt: "Python & Agentic AI Workshop Campus Cohort with Mentors and Students",
    title: "Python & Agentic AI Workshop Cohort",
    category: "Workshops",
    tag: "Python & Agentic AI",
    date: "September 2026",
    description:
      "Hands-on Python and Agentic AI masterclass cohort where college students and faculty built autonomous LLM agents and multi-agent workflows with expert Codegnan mentors.",
  },
  {
    id: "computer-vision-video",
    type: "video",
    src: "/gallery/computer_vision_workshop.mp4",
    alt: "Computer Vision & Deep Learning Workshop Video Recording",
    title: "Computer Vision & Deep Learning Workshop",
    category: "Workshops",
    tag: "Computer Vision",
    date: "September 2026",
    description:
      "Live masterclass session on image classification, object detection, OpenCV pipelines, and real-time vision AI model deployments.",
  },
  {
    id: "agentic-ai-video",
    type: "video",
    src: "/gallery/agentic_ai_workshop.mp4",
    alt: "Agentic AI & Autonomous Coding Agents Workshop Video Recording",
    title: "Agentic AI & Autonomous Coding Agents Workshop",
    category: "Workshops",
    tag: "Agentic AI",
    date: "September 2026",
    description:
      "Hands-on implementation of multi-agent architectures, function calling, tool use, and autonomous agent loops for real-world software workflows.",
  },
  {
    id: "rag-workshop-video",
    type: "video",
    src: "/gallery/Build-Intelligent-RAG-Systems-WORKSHOP.mp4",
    alt: "Build Intelligent RAG Systems Workshop Video Recording",
    title: "Build Intelligent RAG Systems Workshop",
    category: "Workshops",
    tag: "RAG & Vector DBs",
    date: "August 2026",
    description:
      "Full live recording and highlights from our hands-on workshop building Production-Grade Retrieval-Augmented Generation (RAG) systems with vector databases and LLM agents.",
  },
  {
    id: "vibe-coding-video",
    type: "video",
    src: "/gallery/vibe_coding_workshop.mp4",
    alt: "Vibe Coding & AI-Driven Development Workshop Video Recording",
    title: "Vibe Coding & AI-Driven Development Workshop",
    category: "Workshops",
    tag: "AI Coding",
    date: "August 2026",
    description:
      "Accelerating full-stack product shipping with cutting-edge AI pair programming, automated scaffolds, prompt engineering, and modern development workflows.",
  },
  {
    id: "voice-chatbot-video",
    type: "video",
    src: "/gallery/voice_chatbot_workshop.mp4",
    alt: "Real-Time Voice AI & Conversational Chatbots Workshop Video Recording",
    title: "Real-Time Voice AI & Conversational Chatbots",
    category: "Workshops",
    tag: "Voice AI",
    date: "July 2026",
    description:
      "Building ultra low-latency streaming voice assistants integrating Whisper, OpenAI Realtime API, streaming audio pipelines, and custom knowledge retrieval.",
  },
  {
    id: "n8n-workshop-video",
    type: "video",
    src: "/gallery/n8n-Workshop.mp4",
    alt: "n8n Workflow Automation & AI Pipeline Workshop Video Recording",
    title: "n8n Workflow Automation & AI Pipelines",
    category: "Workshops",
    tag: "n8n Automation",
    date: "July 2026",
    description:
      "Automating enterprise workflows, webhook triggers, multi-system integrations, and autonomous AI pipelines using self-hosted and cloud n8n orchestrations.",
  },
  {
    id: "uiux-workshop-video",
    type: "video",
    src: "/gallery/uiux_workshop.mp4",
    alt: "UI/UX Design Systems & Prototyping Workshop Video Recording",
    title: "UI/UX Design Systems & Interactive Prototyping",
    category: "Workshops",
    tag: "UI/UX Design",
    date: "June 2026",
    description:
      "Creating world-class user interfaces, responsive component hierarchies, Figma design tokens, micro-interactions, and high-fidelity clickable prototypes.",
  },
  {
    id: "hackathon-sprint",
    type: "image",
    src: "/gallery/DSC00239.JPG",
    alt: "Teams collaborating in 24hr Coding Hackathon at Codegnan",
    title: "24-Hour AI & Web Hackathon",
    category: "Hackathons",
    tag: "Hackathon Sprint",
    date: "July 2026",
    description:
      "Students teaming up to architect, develop, and deploy full-stack AI applications under real-time competitive evaluation.",
  },
  {
    id: "hackathon-pitches",
    type: "image",
    src: "/gallery/DSC09939.JPG",
    alt: "Final project presentations and judging at Codegnan Hackathon",
    title: "Hackathon Demo Day & Pitches",
    category: "Hackathons",
    tag: "Demo Day",
    date: "April 2026",
    description:
      "Final project pitch presentations where top student teams demonstrate their working prototypes before industry judges.",
  },
  {
    id: "mentor-strategy",
    type: "image",
    src: "/gallery/DSC00249.JPG",
    alt: "Interactive group discussion and mentorship session",
    title: "Interactive System Design Session",
    category: "Workshops",
    tag: "Architecture Session",
    date: "June 2026",
    description:
      "Mentors walking engineers through distributed systems, microservices architectures, and API design best practices.",
  },
  {
    id: "hands-on-lab",
    type: "image",
    src: "/gallery/DSC00257.JPG",
    alt: "Participants focused during practical coding lab",
    title: "Deep-Dive Practical Coding Lab",
    category: "Workshops",
    tag: "Hands-on Lab",
    date: "June 2026",
    description:
      "Intensive hands-on exercises where every participant builds and runs code live with step-by-step guidance.",
  },
  {
    id: "fullstack-lab",
    type: "image",
    src: "/gallery/DSC00270.JPG",
    alt: "Full-Stack Development Workshop at Codegnan Lab",
    title: "Full-Stack Application Development Lab",
    category: "Workshops",
    tag: "Full-Stack Lab",
    date: "May 2026",
    description:
      "Building reactive, responsive web applications with modern frontend frameworks, cloud databases, and REST/GraphQL APIs.",
  },
  {
    id: "mentorship-feedback",
    type: "image",
    src: "/gallery/DSC00288.JPG",
    alt: "One-on-one code reviews and technical feedback from industry mentors",
    title: "1-on-1 Code Review & Mentorship",
    category: "Bootcamps",
    tag: "1-on-1 Mentorship",
    date: "May 2026",
    description:
      "Personalized code analysis, debugging support, and industry career guidance provided to bootcamp trainees.",
  },
  {
    id: "bootcamp-masterclass",
    type: "image",
    src: "/gallery/DSC09929.JPG",
    alt: "Intensive bootcamp masterclass lecture and lab",
    title: "Intensive Bootcamp Masterclass",
    category: "Bootcamps",
    tag: "Flagship Bootcamp",
    date: "April 2026",
    description:
      "A fast-paced multi-week immersive training cohort covering advanced data engineering, cloud platforms, and scalable backend services.",
  },
  {
    id: "bootcamp-classroom-cohort",
    type: "image",
    src: "/gallery/DSC00269.JPG",
    alt: "Full classroom cohort coding on laptops during Intensive Bootcamp at Codegnan",
    title: "Intensive Bootcamp Coding Cohort",
    category: "Bootcamps",
    tag: "Intensive Bootcamp",
    date: "August 2026",
    description:
      "Students deeply engaged in high-velocity full-stack and AI engineering problem-solving inside Codegnan's training studio.",
  },
];

const CATEGORIES = ["All Media", "Workshops", "Videos", "Hackathons", "Bootcamps"] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Media");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "All Media" ||
      (activeCategory === "Videos" ? item.type === "video" : item.category === activeCategory);

    const matchesSearch =
      searchQuery.trim() === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    if (currentIndex === -1) return;

    if (direction === "prev") {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedItem(filteredItems[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedItem(filteredItems[nextIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0d1033] flex flex-col font-sans">
      {/* ========================================================= */}
      {/* 1. TOP HEADER / NAVBAR */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#f0f1f7]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-[88px] sm:h-[94px] flex items-center justify-between">
          {/* Brand Logo & Navigation */}
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center py-1" aria-label="Codegnan Lab Home">
              <img
                src="/codegnan_lab.png"
                alt="Codegnan Lab"
                className="h-12 sm:h-14 lg:h-[60px] w-auto object-contain transition-transform hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#0d1033]">
              <a href="/" className="hover:text-[#304ffe] transition-colors">
                Home
              </a>

              {/* Pages Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                  className="flex items-center gap-1 text-[#0d1033] hover:text-[#304ffe] transition-colors focus:outline-none"
                  aria-expanded={pagesDropdownOpen}
                >
                  <span>Pages</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      pagesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {pagesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-[0_10px_30px_rgba(20,24,68,0.12)] border border-[#eaedf6] py-2 z-50 animate-in fade-in">
                    <a
                      href="/#courses"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-[#606482] hover:text-[#304ffe] hover:bg-[#f8f9ff] rounded-lg"
                    >
                      All Courses
                    </a>
                    <a
                      href="/#about"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-[#606482] hover:text-[#304ffe] hover:bg-[#f8f9ff] rounded-lg"
                    >
                      About Us
                    </a>
                    <a
                      href="/#why-us"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-[#606482] hover:text-[#304ffe] hover:bg-[#f8f9ff] rounded-lg"
                    >
                      Why Learning With Us
                    </a>
                    <a
                      href="/#events"
                      onClick={() => setPagesDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-[#606482] hover:text-[#304ffe] hover:bg-[#f8f9ff] rounded-lg"
                    >
                      Upcoming Events
                    </a>
                  </div>
                )}
              </div>

              <a href="/#courses" className="hover:text-[#304ffe] transition-colors">
                Courses
              </a>
              <a href="/gallery" className="text-[#304ffe] font-semibold transition-colors">
                Gallery
              </a>
              <a href="/#about" className="hover:text-[#304ffe] transition-colors">
                About
              </a>
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-5">
            <a
              href="/#courses"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-[0_6px_18px_rgba(48,79,254,0.25)] transition-all hover:-translate-y-0.5"
            >
              EXPLORE PROGRAMS
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0d1033] hover:text-[#304ffe]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#f0f1f7] bg-white px-6 py-5 space-y-4 shadow-lg">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#606482]"
            >
              Home
            </a>
            <a
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#606482]"
            >
              About
            </a>
            <a
              href="/#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#606482]"
            >
              Courses
            </a>
            <a
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#304ffe]"
            >
              Gallery
            </a>
            <a
              href="/#events"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#606482]"
            >
              Upcoming Events
            </a>
            <a
              href="/#courses"
              className="block w-full text-center py-3 bg-[#304ffe] text-white text-xs font-bold uppercase tracking-wider rounded-md"
            >
              EXPLORE PROGRAMS
            </a>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* 2. GALLERY HERO BANNER */}
      {/* ========================================================= */}
      <section className="relative bg-gradient-to-b from-[#f4f7fe] via-white to-white py-16 sm:py-24 border-b border-[#eaedf6]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#606482] uppercase tracking-wider mb-6">
            <a href="/" className="hover:text-[#304ffe] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#304ffe]">Gallery</span>
          </div>

          <div className="max-w-[720px]">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-bold uppercase tracking-wider rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Codegnan Visual Highlights
            </span>
            <h1 className="text-[38px] sm:text-[50px] font-black leading-[1.1] tracking-[-0.04em] text-[#0d1033]">
              Workshops, Hackathons &amp; Bootcamps in Action
            </h1>
            <p className="mt-4 text-[16px] sm:text-[17px] text-[#606482] leading-[1.65]">
              Experience the energy, collaboration, and practical learning across Codegnan&apos;s
              hands-on technology sessions, developer hackathons, and immersive training cohorts.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-5 pt-6 border-t border-[#eaedf6]">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-[13px] font-bold rounded-full transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#304ffe] text-white shadow-[0_4px_12px_rgba(48,79,254,0.28)] scale-105"
                      : "bg-[#f4f6fc] text-[#606482] hover:bg-[#eaedf6] hover:text-[#0d1033]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-[260px]">
              <Search className="w-4 h-4 text-[#606482] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gallery..."
                className="w-full pl-9 pr-4 py-2 bg-[#f4f6fc] border border-[#dfe2ea] rounded-full text-xs text-[#0d1033] placeholder-[#9398b5] focus:outline-none focus:border-[#304ffe] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. GALLERY MEDIA GRID */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 flex-1">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          {filteredItems.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[#606482] text-base">No media found matching your filter or search.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Media");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2 bg-[#304ffe] text-white text-xs font-bold rounded-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group rounded-[20px] bg-white border border-[#eaedf6] overflow-hidden shadow-[0_8px_25px_rgba(20,24,68,0.06)] hover:shadow-[0_20px_45px_rgba(20,24,68,0.12)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
                >
                  {/* Media Container */}
                  <div className="relative h-[240px] sm:h-[260px] overflow-hidden bg-[#f4f6fc]">
                    {item.type === "video" ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          loop
                          autoPlay
                          playsInline
                          style={{
                            objectPosition:
                              item.id === "fullstack-workshop-video"
                                ? "center bottom"
                                : item.id === "voice-chatbot-video"
                                ? "center 18%"
                                : item.id === "n8n-workshop-video"
                                ? "center 20%"
                                : item.id === "uiux-workshop-video"
                                ? "center 20%"
                                : "center",
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Video Play Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/90 text-[#304ffe] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-[#304ffe] ml-1" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#0d1033]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-white/95 text-[#304ffe] flex items-center justify-center shadow-md">
                            <Maximize2 className="w-5 h-5" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-[#304ffe] text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[12px] text-[#9398b5] mb-2 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-[18px] font-bold text-[#0d1033] leading-snug group-hover:text-[#304ffe] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] text-[#606482] leading-[1.6] line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#f0f2f8] flex items-center justify-between">
                      <span className="text-[12px] font-bold text-[#304ffe] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        {item.type === "video" ? "Watch Video" : "View Photo"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[11px] font-semibold text-[#9398b5] uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. LIGHTBOX / FULLSCREEN MODAL */}
      {/* ========================================================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-[960px] bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Buttons */}
            <button
              type="button"
              onClick={() => navigateLightbox("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#0d1033] shadow-lg flex items-center justify-center transition-all hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => navigateLightbox("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#0d1033] shadow-lg flex items-center justify-center transition-all hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Media Area */}
            <div className="bg-[#0b0e2b] flex items-center justify-center max-h-[58vh] overflow-hidden">
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[58vh] object-contain"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full max-h-[58vh] object-contain"
                />
              )}
            </div>

            {/* Information Panel */}
            <div className="p-6 sm:p-8 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-[#f0f3ff] text-[#304ffe] text-[11px] font-bold uppercase tracking-wider rounded-full">
                    {selectedItem.tag}
                  </span>
                  <span className="text-[12px] text-[#9398b5] font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedItem.date}
                  </span>
                </div>
                <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0d1033] leading-snug">
                  {selectedItem.title}
                </h2>
                <p className="mt-2 text-[14px] text-[#606482] leading-[1.6]">
                  {selectedItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#eaedf6] flex flex-wrap items-center justify-between gap-4">
                <a
                  href="/#courses"
                  className="px-6 py-2.5 bg-[#304ffe] hover:bg-[#253bdf] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                >
                  Join Next Workshop
                </a>
                <span className="text-xs text-[#9398b5]">
                  Photo taken at Codegnan Training Center
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. CTA BANNER */}
      {/* ========================================================= */}
      <section className="bg-[#304ffe] py-16 text-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[30px] sm:text-[38px] font-black tracking-tight leading-tight">
            Ready to Build, Learn, and Innovate?
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-white/80 leading-relaxed max-w-[560px] mx-auto">
            Join our upcoming workshops, competitive hackathons, and intensive bootcamps to elevate
            your skills with real industry mentorship.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#events"
              className="px-8 py-3.5 bg-white hover:bg-white/90 text-[#304ffe] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] shadow-lg transition-all hover:-translate-y-0.5"
            >
              UPCOMING EVENTS
            </a>
            <a
              href="/#courses"
              className="px-8 py-3.5 bg-transparent hover:bg-white/10 border border-white text-white text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] transition-all"
            >
              ALL PROGRAMS
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. LIGHT FOOTER */}
      {/* ========================================================= */}
      <footer className="bg-white border-t border-[#eaedf5] pt-16 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#eaedf5]">
            {/* Column 1: Brand Logo + Social Icons */}
            <div className="md:col-span-3">
              <a href="/" className="inline-block" aria-label="Codegnan Lab Home">
                <img
                  src="/codegnan_lab.png"
                  alt="Codegnan Lab"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </a>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#dfe2ea] flex items-center justify-center text-[#606482] hover:text-[#304ffe] hover:border-[#304ffe] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115V7.95c-.263-.026-.72-.044-1.182-.044-1.676 0-2.327.633-2.327 2.282v1.856h3.32l-.57 3.667H13.063v7.98h-3.962z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#dfe2ea] flex items-center justify-center text-[#606482] hover:text-[#304ffe] hover:border-[#304ffe] transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#dfe2ea] flex items-center justify-center text-[#606482] hover:text-[#304ffe] hover:border-[#304ffe] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#dfe2ea] flex items-center justify-center text-[#606482] hover:text-[#304ffe] hover:border-[#304ffe] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: PAGES */}
            <div className="md:col-span-3">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
                Pages
              </h4>
              <ul className="space-y-3 text-[14px] text-[#0d1033]">
                <li>
                  <a href="/" className="hover:text-[#304ffe] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#courses" className="hover:text-[#304ffe] transition-colors">
                    Courses &amp; Programs
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-[#304ffe] font-semibold">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/#events" className="hover:text-[#304ffe] transition-colors">
                    Upcoming Events
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:text-[#304ffe] transition-colors">
                    About Codegnan
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: PROGRAMS */}
            <div className="md:col-span-3">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
                Programs
              </h4>
              <ul className="space-y-3 text-[14px] text-[#0d1033]">
                <li>
                  <a href="/#courses" className="hover:text-[#304ffe] transition-colors">
                    Hands-on Workshops
                  </a>
                </li>
                <li>
                  <a href="/#courses" className="hover:text-[#304ffe] transition-colors">
                    Coding Hackathons
                  </a>
                </li>
                <li>
                  <a href="/#courses" className="hover:text-[#304ffe] transition-colors">
                    Intensive Bootcamps
                  </a>
                </li>
                <li>
                  <a href="/#events" className="hover:text-[#304ffe] transition-colors">
                    Data &amp; AI for Business
                  </a>
                </li>
                <li>
                  <a href="/#events" className="hover:text-[#304ffe] transition-colors">
                    AI Coding &amp; Agents
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: CONTACT & LOCATION */}
            <div className="md:col-span-3">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#304ffe] mb-5">
                Contact &amp; Campus
              </h4>
              <p className="text-[14px] text-[#606482] leading-relaxed mb-3">
                Codegnan Training Center, Vijayawada, Andhra Pradesh, India.
              </p>
              <a
                href="mailto:cto@codegnan.com"
                className="text-xs font-semibold text-[#304ffe] hover:underline"
              >
                cto@codegnan.com
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#606482]">
            <span>© 2026 Codegnan. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#304ffe] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#304ffe] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#304ffe] transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
