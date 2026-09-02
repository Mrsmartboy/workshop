# CodeGnan — Bootcamps, Hackathons & Workshops Landing Page
## Website Documentation & Content Blueprint

**Prepared for:** CodeGnan
**Reference Theme Analyzed:** Academy Webflow Template (academytemplate-showcase.webflow.io)
**Purpose:** Multi-page landing website to promote and drive registrations for Bootcamps, Hackathons, and Workshops

---

## 1. Project Overview

CodeGnan is organizing **Bootcamps, Hackathons, and Workshops** for students/developers. The goal of this website is to:

- Create excitement and FOMO ("don't miss out") around upcoming events
- Clearly explain what CodeGnan offers (Bootcamps / Hackathons / Workshops)
- Make registration/enrollment effortless (1–2 clicks to sign up)
- Build trust with testimonials, partner logos, mentor profiles, and past event proof
- Look **professional, modern, and energetic** — not a plain college-notice-board style page

### Reference Theme Analysis (Academy Template)

The reference site uses a clean **EdTech/Academy structure**. Key patterns observed:

| Section | Purpose |
|---|---|
| Sticky Navbar with mega-menu "Pages" dropdown | Easy navigation across many pages |
| Bold Hero with headline + 2 CTAs + hero image with decorative circle shapes | First impression, clear action |
| "Trusted by" logo strip | Instant credibility |
| About section (image + text + Learn More) | Builds narrative/trust |
| Course/Program cards grid (image, title, level badges, price, CTA) | Product showcase |
| "Choose Your Path" (Full-time/Part-time/Online icons) | Segment users by intent |
| Testimonial with large quote + CTA banner | Social proof |
| "Why Learn With Us" — 4 icon-feature grid | Differentiation |
| Blog/Resource cards | SEO + authority |
| Big CTA banner section | Conversion push |
| Upcoming Events cards (date, time, location icons) | Event promotion |
| Footer — sitemap, newsletter signup, social icons | Retention + navigation |

We will **adapt this exact proven structure** but reskin it for a **Bootcamp/Hackathon/Workshop tech-event brand** — energetic, code-culture visuals (dark mode option, gradient accents, countdown timers, leaderboard/prize elements) instead of a soft pastel "academy/school" feel.

---

## 2. Sitemap (Multi-Page Structure)

```
codegnan.com
│
├── Home (/)
├── About Us (/about)
├── Bootcamps
│   ├── All Bootcamps (/bootcamps)
│   └── Single Bootcamp Detail (/bootcamps/[slug])
├── Hackathons
│   ├── All Hackathons (/hackathons)
│   └── Single Hackathon Detail (/hackathons/[slug])
├── Workshops
│   ├── All Workshops (/workshops)
│   └── Single Workshop Detail (/workshops/[slug])
├── Events Calendar (/events)  — unified upcoming events across all 3 categories
├── Mentors / Trainers (/mentors)
│   └── Individual Mentor Profile (/mentors/[slug])
├── Success Stories / Testimonials (/success-stories)
├── Blog / Resources (/blog)
│   └── Blog Post (/blog/[slug])
├── Gallery (/gallery) — past event photos, winner announcements
├── Pricing / Plans (/pricing) — if paid bootcamps
├── FAQ (/faq)
├── Contact Us (/contact)
├── Register / Apply Now (/register/[event-slug]) — form page
└── Utility: 404, Thank-You (post-registration), Privacy Policy, Terms
```

> 💡 Start with **Home, Bootcamps, Hackathons, Workshops, Events, About, Contact, Register** for MVP launch. Add Mentors, Blog, Gallery, FAQ later.

---

## 3. Homepage — Section-by-Section Content Plan

### 3.1 Navbar (Sticky)
- Logo: **CodeGnan**
- Menu: Home | Bootcamps | Hackathons | Workshops | Events | About | Contact
- Right side: **[Register Now]** button (high-contrast, always visible) + optional Login for dashboard

### 3.2 Hero Section
**Goal:** Instant energy + clarity on what CodeGnan does.

- **Eyebrow tag:** `🔥 Applications Open — Batch 2026`
- **Headline (H1):** "Build. Compete. Get Hired."
- **Sub-headline:** "CodeGnan brings you industry-driven Bootcamps, adrenaline-packed Hackathons, and hands-on Workshops to turn your coding passion into a career."
- **CTAs:**
  - Primary: `Explore Bootcamps →`
  - Secondary: `Join a Hackathon`
- **Visual:** Illustration/photo of students coding + floating badges ("500+ Learners", "50+ Hackathons Hosted", "₹2L+ Prize Pool")
- **Live countdown timer** widget for the next flagship hackathon (creates urgency)

### 3.3 Trust/Stats Strip
Replace "companies logos" with **CodeGnan proof points**:
```
5,000+ Students Trained   |   120+ Hackathon Teams   |   40+ Hiring Partners   |   4.8★ Avg Rating
```
Optionally add real hiring-partner / college logos here.

### 3.4 About CodeGnan
- Image of a real bootcamp/hackathon session
- Short story: who CodeGnan is, mission, since-year, community size
- **[Learn More →]** button to `/about`

### 3.5 Explore Our Programs (3-Card Split)
Instead of one "Courses" grid, split into **3 clear categories** (this is the core of the request):

**Card 1 — Bootcamps**
> "Intensive, project-based programs (2–12 weeks) in Full-Stack, AI/ML, Cloud, Cybersecurity. Get mentored, build a portfolio, get placement support."
> `[View Bootcamps →]`

**Card 2 — Hackathons**
> "48-hour build sprints. Solve real problems, win cash prizes, get noticed by recruiters. Solo or team of 4."
> `[View Hackathons →]`

**Card 3 — Workshops**
> "Free & paid 1–3 day deep-dive sessions on trending tech — Git, Docker, GenAI, DSA. Perfect for quick upskilling."
> `[View Workshops →]`

Each card: icon, image, short description, level badge (Beginner/Intermediate/Advanced), date/duration, price ("Free" or "₹X"), CTA button.

### 3.6 Featured / Upcoming Events (Cards Grid)
Pull the **next 3–6 events** across all categories (mirrors "Upcoming Events" section in reference):

Each card shows:
- Event banner image
- Category tag (Bootcamp / Hackathon / Workshop)
- Title
- 📅 Date  🕒 Time  📍 Venue (or "Online")
- Seats left indicator: "Only 23 seats left"
- `[Register Now →]`

`[View All Events →]`

### 3.7 Choose Your Track (like "Choose Your Path")
Segment by learner intent:
- **🎓 Beginner Track** — "New to coding? Start with our Foundation Bootcamp."
- **⚡ Competitive Track** — "Already coding? Jump into a Hackathon and win prizes."
- **🚀 Career Track** — "Job-ready in weeks with placement-assisted Bootcamps."

### 3.8 Why CodeGnan (4-Icon Feature Grid)
| Icon | Title | Description |
|---|---|---|
| 👨‍🏫 | Industry Expert Mentors | Learn from working developers & hackathon judges |
| 🛠️ | 100% Hands-on | Real projects, real code, real deadlines — no boring theory |
| 🏆 | Real Prizes & Certificates | Win cash prizes, swag, and verified certificates |
| 🤝 | Placement & Networking | Direct access to hiring partners and alumni community |

### 3.9 Testimonial / Success Story
- Large quote from a past bootcamp graduate or hackathon winner
- Photo, name, "Hired at [Company]" or "Winner, HackCodeGnan 2025"
- `[Read More Success Stories →]`

### 3.10 Mentors/Judges Preview
Grid of 4–6 mentor photo cards (name, role, company, LinkedIn icon) — builds authority for hackathons especially.

### 3.11 Gallery / Highlights Strip
Photo/video collage from past hackathons — energy, crowd, prize distribution. (Great for enthusiasm/FOMO.)

### 3.12 Blog / Resource Preview (optional at MVP)
3 latest articles — "How to win your first hackathon", "Bootcamp vs self-study", etc.

### 3.13 Big CTA Banner
> **"Your next big career move starts with one registration."**
> `[Apply Now →]`  `[Talk to Us →]`

### 3.14 FAQ (accordion, on homepage or dedicated page)
- Who can apply?
- Is it free?
- Team size for hackathons?
- Certificate provided?
- Refund/cancellation policy?

### 3.15 Newsletter Signup
> "Get notified before applications close." — email input + Subscribe button

### 3.16 Footer
- Logo + 1-line tagline
- Sitemap columns: Programs (Bootcamps/Hackathons/Workshops) | Company (About/Contact/Blog) | Support (FAQ/Terms/Privacy)
- Social icons (Instagram, LinkedIn, YouTube, Twitter/X, WhatsApp community link)
- Newsletter box
- Contact: email, phone, address
- Copyright

---

## 4. Individual Program Detail Page (Bootcamp / Hackathon / Workshop)

Each `/bootcamps/[slug]`, `/hackathons/[slug]`, `/workshops/[slug]` should include:

1. **Hero:** Banner image, title, category tag, date/duration, mode (Online/Offline/Hybrid), `[Register Now]` sticky button
2. **Quick Info Bar:** Duration | Level | Fee | Seats | Certificate (yes/no) | Prize pool (for hackathons)
3. **About This Program:** What it is, who it's for, outcomes
4. **Curriculum / Timeline:** Day-wise or week-wise breakdown (accordion). For hackathons: Round 1 → Shortlist → Final Round → Demo Day
5. **What You'll Learn / Themes/Problem Statements** (hackathon-specific)
6. **Prizes & Perks** (hackathons): 🥇🥈🥉 cash prize breakdown, goodies, internship offers
7. **Mentors/Judges for this event**
8. **Eligibility & Requirements**
9. **How to Register** (step-by-step, 3 steps)
10. **Past Edition Highlights** (if recurring event) — photos, winner names
11. **FAQ specific to this event**
12. **Sticky/Floating Register CTA** with countdown to deadline
13. **Related Programs** (cross-sell other bootcamps/hackathons)

---

## 5. Registration/Apply Page

Keep it short and frictionless:
- Name, Email, Phone, College/Company, Year/Experience, Event selection (auto-filled if coming from a specific event), Team name (if hackathon), Payment (if paid) → Razorpay/Stripe
- Trust line: "Your data is safe. No spam, ever."
- Confirmation → **Thank You page** with WhatsApp community join link + calendar invite download

---

## 6. Design System (Theme + Exact Colors)

### 6.1 Design Direction
Dark, developer-native theme with a single loud accent + one supporting accent — think "hackathon stage lighting" rather than "soft school brochure." Confident, high-contrast, glow-on-dark aesthetic. This immediately reads as tech/competitive rather than generic EdTech.

### 6.2 Color Palette

**Primary Theme: "Midnight Code"**

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0B0E14` | Main page background (deep charcoal-navy, not pure black) |
| `--bg-secondary` | `#12161F` | Section alternate background, cards base |
| `--bg-elevated` | `#1A1F2B` | Card surfaces, modals, nav dropdown |
| `--border-subtle` | `#262B38` | Card borders, dividers |
| `--accent-primary` | `#5B5BF7` (electric indigo/violet) | Primary buttons, links, active states, glow effects |
| `--accent-secondary` | `#00E6A8` (neon mint/green) | Success states, "seats left", certificate badges, secondary CTA |
| `--accent-warm` | `#FF7A45` (hackathon orange) | Urgency tags ("Closing Soon", prize/trophy highlights, countdown timer) |
| `--text-primary` | `#F5F7FA` | Headings, primary body text |
| `--text-secondary` | `#9AA3B2` | Sub-text, descriptions, meta info |
| `--text-muted` | `#5C6470` | Placeholder, disabled, fine print |
| `--gradient-hero` | `linear-gradient(135deg, #5B5BF7 0%, #8A5BF7 50%, #00E6A8 100%)` | Hero background glow, blob shapes, CTA banner background |

**Category Tag Colors** (so each program type is visually distinct at a glance):
| Category | Color |
|---|---|
| Bootcamp | `#5B5BF7` (indigo) |
| Hackathon | `#FF7A45` (orange) |
| Workshop | `#00E6A8` (mint) |

**Light Mode Alternative** (if a lighter option is wanted instead of dark-mode-first):
| Token | Hex |
|---|---|
| Background | `#FFFFFF` / `#F7F8FC` |
| Card surface | `#FFFFFF` with `#E7E9F3` border |
| Text primary | `#12161F` |
| Text secondary | `#5C6470` |
| Accent primary | `#4F46E5` (indigo-600) |
| Accent secondary | `#059669` (emerald-600) |
| Accent warm | `#EA580C` (orange-600) |

> Recommendation: **Dark mode as default**, with a toggle for light mode. Dark mode reads more "hackathon/tech-competition," light mode reads more "professional bootcamp learning" — offering both covers both moods.

### 6.3 Typography

| Role | Font | Notes |
|---|---|---|
| Headings (H1–H3) | **Space Grotesk** or **Clash Display** | Bold, geometric, tech-forward — used for hero headline, section titles |
| Body/UI text | **Inter** | Highly readable, standard for SaaS/tech sites, great at small sizes |
| Code/mono accents | **JetBrains Mono** | For countdown timers, event codes, stat numbers, or decorative code-snippet visuals |

Scale suggestion: H1 `48–64px` / H2 `32–40px` / H3 `22–28px` / Body `16–18px` / Small `13–14px`. Bold (700) headings, Regular (400)/Medium (500) body.

### 6.4 Other Visual Elements

| Element | Recommendation |
|---|---|
| **Imagery** | Real photos from coding sessions/hackathons > generic stock illustrations. Layer gradient-blob shapes and glowing card borders behind images (mirrors the circle-shape decorations in the reference template, reskinned with accent gradient) |
| **Micro-interactions** | Hover-lift + glow border on cards, animated counters (students trained, prize pool), live countdown timers in mono font, subtle scroll-reveal animations |
| **Badges/Tags** | Pill-shaped tags using the category colors above; urgency labels ("Only 12 seats left", "Closing in 2 days") in `--accent-warm` |
| **Icons** | Consistent icon set (Lucide/Phosphor), single stroke weight, colored with accent on hover |
| **Buttons** | Primary = solid `--accent-primary` with soft glow shadow on hover; Secondary = outline with `--border-subtle`, fills on hover |
| **Corner radius** | `12–16px` on cards/buttons — soft enough to feel modern, not overly rounded/childish |
| **Mobile** | Mobile-first — most students register from phones; sticky "Register Now" bar pinned to bottom on mobile |

---

## 7. Content Tone Guidelines

- **Confident & energetic**, not corporate-stiff: "Build. Compete. Get Hired." not "We provide educational services."
- Use **numbers everywhere** (5,000+ students, ₹2L prize pool, 48 hours, 40+ partners) — numbers = credibility + excitement
- Use **urgency language** appropriately: "Only 23 seats left", "Applications close in 3 days" — but keep it honest/real, never fake scarcity
- Every section should end with a clear **action** — never a dead end

---

## 8. Technical Architecture — Next.js (SEO-First)

Next.js is the right choice here because Bootcamps/Hackathons/Workshops pages need to **rank on Google** (students search "bootcamp near me", "hackathon 2026 India", "free web dev workshop") — Next.js gives server-rendered HTML out of the box, which plain React/SPA cannot.

### 8.1 Framework Setup
- **Next.js 14/15 with App Router** (`/app` directory) — enables per-route metadata, layouts, and streaming
- **TypeScript** for type safety across event/mentor data models
- **Tailwind CSS** configured with the design tokens from Section 6 (colors, fonts, radius) as custom theme values — fastest way to keep design consistent across 15+ pages
- **shadcn/ui** or **Radix primitives** for accessible components (accordion for FAQ/curriculum, dialogs for registration modal)

### 8.2 Rendering Strategy (this is where SEO comes from)
| Page Type | Rendering Method | Why |
|---|---|---|
| Home, About, Contact | **Static (SSG)** at build time | Rarely changes, fastest possible load, best Core Web Vitals |
| Bootcamps/Hackathons/Workshops list pages | **ISR** (Incremental Static Regeneration, revalidate every 60s) | Content updates (new events) without full redeploy, still served as static HTML to Google |
| Individual event detail pages `/hackathons/[slug]` | **ISR + `generateStaticParams`** | Each event gets its own indexed URL, pre-rendered, revalidated |
| Registration form, Thank You page | **Client-rendered / dynamic** | Interactive, no SEO value needed |
| Blog posts | **SSG from CMS/MDX** | Long-term organic traffic driver |

### 8.3 SEO Implementation Checklist
- **Metadata API** (`generateMetadata` per page) — unique `<title>`, `<meta description>`, Open Graph image, and Twitter card for every single event (e.g., *"CodeGnan AI/ML Bootcamp — Batch 2026 | Apply Now"*)
- **`sitemap.ts`** — auto-generated XML sitemap listing every bootcamp/hackathon/workshop/blog URL, resubmitted to Google Search Console on each deploy
- **`robots.ts`** — allow crawling of all public pages, block `/register/thank-you`, `/dashboard`, etc.
- **Structured Data (JSON-LD)**:
  - `Event` schema on every Bootcamp/Hackathon/Workshop page (startDate, endDate, location, offers/price, organizer) → enables **Google's rich "Event" search card** with date + register button directly in search results
  - `Organization` schema on Home
  - `BreadcrumbList` schema on detail pages
  - `FAQPage` schema on the FAQ accordion → enables expandable FAQ rich snippets
- **Semantic HTML** — one `<h1>` per page, proper `<h2>/<h3>` hierarchy matching the section plan in this doc (helps Google understand page structure)
- **`next/image`** for every image — automatic lazy-loading, responsive `srcset`, WebP/AVIF conversion → directly improves Core Web Vitals (LCP) which is a Google ranking factor
- **`next/font`** for Space Grotesk/Inter — self-hosted fonts, zero layout shift (CLS)
- **Canonical URLs** on every page to avoid duplicate-content issues (especially if the same event is listed on both `/events` and its own category page)
- **Fast page loads**: target Lighthouse score 90+ on mobile — critical since students will be searching/registering on phones
- **Internal linking**: "Related Programs" and "Upcoming Events" sections (already in the content plan) double as SEO internal-link building
- **Alt text** on all images (mentor photos, event banners) — accessibility + image search traffic

### 8.4 Data/Content Layer
- CMS options (headless, so non-devs on CodeGnan's team can add events): **Sanity**, **Contentful**, or a simple **MDX + Git-based** content folder for smaller scale
- Content models: `Event` (type: bootcamp/hackathon/workshop, title, slug, dates, price, seats, curriculum, prizes, mentors[]), `Mentor`, `Testimonial`, `BlogPost`
- Form handling: registration form → API route (`/app/api/register`) → stores in database (Postgres/Supabase) + triggers confirmation email (Resend/SendGrid)

### 8.5 Hosting & Analytics
- **Vercel** (native Next.js hosting, automatic ISR, edge caching, image optimization built-in)
- **Google Search Console** connected from day one — submit sitemap immediately
- **Google Analytics 4 / Vercel Analytics** — track registration funnel: Hero CTA click → Detail page view → Registration form start → Complete
- **Google Tag Manager** for future marketing pixel needs (Meta Ads, LinkedIn Ads for hackathon promotion)

### 8.6 Suggested Folder Structure
```
app/
├── layout.tsx                 # root layout, fonts, theme provider
├── page.tsx                   # Home
├── about/page.tsx
├── contact/page.tsx
├── bootcamps/
│   ├── page.tsx                # list
│   └── [slug]/page.tsx         # detail (generateStaticParams + generateMetadata)
├── hackathons/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── workshops/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── events/page.tsx             # unified calendar
├── mentors/[slug]/page.tsx
├── blog/[slug]/page.tsx
├── register/[slug]/page.tsx
├── sitemap.ts
├── robots.ts
└── api/register/route.ts
components/
├── ui/                         # buttons, badges, cards (design system)
├── sections/                   # HeroSection, EventCard, WhyUs, Testimonial, CTA, Footer
lib/
├── cms.ts                      # fetch events/mentors/posts
├── seo.ts                      # shared metadata + JSON-LD generators
```

---

## 9. Priority Build Order (Suggested)

1. Home
2. Bootcamps (list + detail template)
3. Hackathons (list + detail template)
4. Register/Apply form + Thank You page
5. About + Contact
6. Workshops (list + detail template)
7. Events Calendar (unified)
8. Mentors, Blog, Gallery, FAQ, Success Stories (Phase 2)

---

*This document is a content & structure blueprint. Next step: choose color palette + fonts, then move into wireframes/high-fidelity design or direct build.*
