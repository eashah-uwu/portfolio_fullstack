"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Globe2,
  LayoutGrid,
  PenTool,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const projects = [
  {
    title: "Fintech API & Transaction Routing - Ibanera",
    meta: "Private backend experience",
    category: "Experience case study",
    focus: "Backend fintech systems, routing, APIs, reliability",
    description:
      "Backend fintech work involving public API workflows, transaction routing, card and payment-related operations, and production reliability. Worked on backend services supporting 20+ fintech products, with transaction routing across 5+ intermediary routes.",
    href: "mailto:ebajwa.bscs22seecs@seecs.edu.pk?subject=Ibanera%20fintech%20case%20study",
    sourceLabel: "customer-api-docs.ibanera.com",
    ctaLabel: "Confidential work - details available on request",
    referenceHref: "https://customer-api-docs.ibanera.com/api-endpoints/quick-buy",
    referenceLabel: "Public API docs",
    icon: Server,
    visualClass: "from-[#dbeaf0] via-[#c9e6e7] to-[#f4efe0]",
    accent: "bg-[#21475f]",
    tags: [
      "Fintech APIs",
      "Transaction Routing",
      "Payment Workflows",
      "Backend Services",
      "Go",
      "REST APIs",
    ],
  },
  {
    title: "Payment & Identity Integrations Platform",
    meta: "Private full-stack experience",
    category: "Experience case study",
    focus: "Payment flows, identity verification, auth, deployments",
    description:
      "Full-stack production web applications using Next.js, React, Node.js, PostgreSQL, and third-party integrations including Stripe, PayPal, Twilio, and Yoti. Built frontend flows, REST API integrations, authentication workflows, and production deployment support.",
    href: "https://bitsmiths.studio/",
    sourceLabel: "bitsmiths.studio",
    ctaLabel: "View studio context",
    image: "/case-studies/bitsmiths.png",
    icon: ShieldCheck,
    visualClass: "from-[#dbe7dc] via-[#c9e6e7] to-[#f4efe0]",
    accent: "bg-[#3a4a16]",
    tags: ["Next.js", "React", "Stripe", "PayPal", "Yoti", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Reporting & Admin Dashboard Systems",
    meta: "Private enterprise dashboard work",
    category: "Experience case study",
    focus: "Reporting UI, data tables, exports, validation, API integration",
    description:
      "Centralized reporting and admin dashboard work with complex tables, filtering, exports, validation, server-side pagination, charting, and API integration across high-volume SaaS reporting workflows.",
    href: "#expertise",
    sourceLabel: "GOSaaS Labs",
    ctaLabel: "See experience details",
    icon: LayoutGrid,
    visualClass: "from-[#e8edf5] via-[#dac6eb] to-[#a8d8ea]",
    accent: "bg-[#7e5c93]",
    tags: [
      "Admin Dashboards",
      "Reporting",
      "API Integration",
      "Server-side Pagination",
      "React Hook Form",
      "Recharts",
    ],
  },
  {
    title: "Motornomic Operations Platform",
    meta: "Public platform case study",
    category: "Platform case study",
    focus: "Marketplace operations, compliance workflows, reporting, platform UX",
    description:
      "A connected automotive repair-sector platform covering marketplace tools, compliance workflows, invoice factoring, booking, reporting, and operational visibility for garages, networks, and work providers.",
    href: "https://www.motornomic.io/",
    sourceLabel: "motornomic.io",
    ctaLabel: "View platform",
    image: "/case-studies/motornomic.png",
    icon: Server,
    visualClass: "from-[#dbeaf0] via-[#dbe7dc] to-[#efe9d7]",
    accent: "bg-[#21475f]",
    tags: [
      "Operations Platform",
      "Marketplace",
      "Compliance",
      "Invoice Factoring",
      "Reporting",
      "API Integrations",
    ],
  },
  {
    title: "VeyaTalk Communications Platform",
    meta: "Private communications product experience",
    category: "Platform case study",
    focus: "Realtime communication flows, onboarding, messaging, video-call UX",
    description:
      "Communication-heavy production web app work involving user flows, realtime interaction patterns, video calling, onboarding, and API-connected frontend experiences. Included as private product context rather than a public-code case study.",
    href: "https://www.veyatalk.com/",
    sourceLabel: "veyatalk.com",
    ctaLabel: "View platform",
    icon: Code2,
    visualClass: "from-[#dbe7dc] via-[#dbeaf0] to-[#efe9d7]",
    accent: "bg-[#3a4a16]",
    tags: [
      "Next.js",
      "React",
      "Realtime UX",
      "Video Calling",
      "API Integration",
      "Product Flows",
    ],
  },
  {
    title: "Bitsmiths Studio",
    meta: "Public website build",
    category: "Website build",
    focus: "Studio positioning, service pages, responsive frontend",
    description:
      "A polished studio presence for a team shipping web platforms, AI solutions, and production-grade digital products.",
    href: "https://bitsmiths.studio/",
    sourceLabel: "bitsmiths.studio",
    ctaLabel: "View website",
    image: "/case-studies/bitsmiths.png",
    icon: Code2,
    visualClass: "from-[#dbe7dc] via-[#c9e6e7] to-[#f4efe0]",
    accent: "bg-[#3a4a16]",
    tags: ["Studio Website", "Next.js", "React", "AI Services", "Production UI"],
  },
  {
    title: "Hartford Granite & Marble",
    meta: "Public website build",
    category: "Website build",
    focus: "Service business website, trust signals, inquiry paths",
    description:
      "A business website for a Hartford stone and countertop company, centered on trust, services, and high-intent customer inquiries.",
    href: "https://hartfordgraniteandmarble.com/",
    sourceLabel: "hartfordgraniteandmarble.com",
    ctaLabel: "View website",
    image: "/case-studies/hgm.png",
    icon: Globe2,
    visualClass: "from-[#efe9d7] via-[#eadfdc] to-[#dac6eb]",
    accent: "bg-[#8f7b62]",
    tags: ["Business Website", "Lead Generation", "Responsive UI", "Service Pages"],
  },
  {
    title: "Defendix",
    meta: "Public website build",
    category: "Website build",
    focus: "Hosting plans, infrastructure messaging, conversion UI",
    description:
      "A hosting product interface presenting VPS plans, reliability messaging, and conversion paths for infrastructure buyers.",
    href: "https://www.defendixtech.com/",
    sourceLabel: "defendixtech.com",
    ctaLabel: "View website",
    image: "/case-studies/defendix.png",
    icon: Server,
    visualClass: "from-[#dbeaf0] via-[#a8d8ea] to-[#d7dfc4]",
    accent: "bg-[#21475f]",
    tags: ["Hosting Platform", "Pricing UI", "Cloud Services", "Conversion Flow"],
  },
  {
    title: "HinterBuild",
    meta: "Public website build",
    category: "Website build",
    focus: "AI services positioning, automation copy, responsive frontend",
    description:
      "A modern AI services website covering GenAI applications, automations, backend development, and workflow transformation.",
    href: "https://hinterbuild.com/",
    sourceLabel: "hinterbuild.com",
    ctaLabel: "View website",
    image: "/case-studies/hinterbuild.png",
    icon: ShieldCheck,
    visualClass: "from-[#eee8f3] via-[#dac6eb] to-[#efe9d7]",
    accent: "bg-[#684a78]",
    tags: ["AI Services", "Automation", "Backend Development", "Modern Website"],
  },
  {
    title: "InfraSense",
    meta: "Product landing page",
    category: "Website build",
    focus: "Infrastructure scanning concept, technical buyer messaging",
    description:
      "A landing page for an infrastructure scanning product, focused on clear messaging, trust signals, and conversion paths for technical buyers.",
    href: "https://fyp-frontend-one-rouge.vercel.app/",
    sourceLabel: "fyp-frontend-one-rouge.vercel.app",
    ctaLabel: "View build",
    image: "/case-studies/infrasense.png",
    icon: LayoutGrid,
    visualClass: "from-[#e8edf5] via-[#dac6eb] to-[#a8d8ea]",
    accent: "bg-[#7e5c93]",
    status: "Under active development",
    tags: ["Infrastructure Scanning", "Technical Buyers", "Landing Page", "SaaS"],
  },
];

const featuredProjects = [projects[0], projects[1], projects[3]];
const additionalProjects = [projects[2], ...projects.slice(4)];

const heroIcons = [
  { label: "Fintech APIs", icon: Server, className: "left-[6%] top-[24%]" },
  { label: "Next.js", icon: Sparkles, className: "right-[8%] top-[26%]" },
  { label: "Dashboards", icon: LayoutGrid, className: "bottom-[20%] left-[13%]" },
  { label: "Payments", icon: ShieldCheck, className: "bottom-[22%] right-[14%]" },
];

const timeline = [
  {
    date: "01/2026 - PRESENT",
    role: "Golang Backend Developer",
    company: "Ibanera LLC",
    location: "Miami, USA",
    text: "Backend services for fintech products, with a focus on transaction routing and production reliability.",
    highlights: [
      "Developed and maintained backend services using Golang, supporting 20+ fintech products at Ibanera LLC.",
      "Optimized transaction routing system, improving performance to handle 5+ intermediary routes.",
    ],
    icon: Star,
  },
  {
    date: "09/2024",
    role: "Software Engineer (Remote)",
    company: "Bitsmiths Studios",
    location: "Wyoming, USA",
    text: "Remote product engineering across production SaaS applications, CMS platforms, marketplace experiences, and communication-heavy web apps.",
    highlights: [
      "Built and shipped 5+ production web applications using Next.js, React, and TypeScript, including a CMS platform, social-media style app with video calling, Pinterest-style marketplace, and service business platforms.",
      "Developed pixel-perfect, mobile-first frontend systems from Figma designs, maintaining sub-2s load times across core user flows.",
      "Integrated Stripe, PayPal, Twilio, and Yoti for payments, messaging, identity verification, and onboarding workflows handling 10,000+ monthly transactions.",
      "Implemented live chat, realtime updates, and video calling using Supabase Realtime and Twilio.",
      "Improved frontend maintainability and performance using React Query and Zustand, reducing unnecessary API calls across complex dashboards.",
      "Built reusable frontend systems and Directus CMS workflows, enabling non-technical teams to manage dynamic content independently.",
      "Collaborated with global remote teams across product, design, and engineering using Agile workflows, Git, and fast release cycles.",
    ],
    icon: Code2,
  },
  {
    date: "06/2024 - 08/2024",
    role: "Frontend Software Engineer",
    company: "GoSaas Labs",
    location: "Lahore",
    text: "Enterprise reporting frontend work across dashboards, data tables, validation, exports, and cloud-based reporting systems.",
    highlights: [
      "Developed the frontend for a centralized reporting microservice serving multiple SaaS products, handling complex tables, exports, filtering, and server-side pagination across large datasets.",
      "Built scalable dashboards and reporting interfaces improving data accessibility by 40% across teams.",
      "Implemented robust frontend validation using React Hook Form and Zod for reliable enterprise workflows.",
      "Optimized large-table rendering and dashboard performance using Recharts for high-volume reporting workflows.",
      "Worked closely with backend teams integrating APIs, task queues, and cloud-based reporting systems.",
    ],
    icon: LayoutGrid,
  },
  {
    date: "09/2023 - 12/2023",
    role: "Front-End Web Developer",
    company: "AI Raheem Technologies",
    location: "Islamabad",
    text: "Angular-based operational interfaces for lift management, maintenance workflows, and service reporting.",
    highlights: [
      "Built Angular-based interfaces for a lift management platform supporting operational tracking, maintenance workflows, and service reporting.",
      "Developed responsive dashboards and workflow screens, improving usability across desktop and mobile devices.",
      "Improved interface usability and mobile responsiveness across operational dashboards.",
    ],
    icon: PenTool,
  },
];

const resumeSlides = [
  {
    label: "Skills",
    content: (
      <div className="flex flex-wrap gap-3">
        {[
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Angular",
          "Zustand",
          "shadcn/ui",
          "MUI",
          "HTML",
          "CSS",
          "Node.js",
          "Go",
          "Hono",
          "FastAPI",
          "REST API Design",
          "BullMQ",
          "Celery",
          "Git",
          "Docker",
          "Google Cloud Platform",
          "VS Code",
          "AWS S3",
          "Coolify",
          "CI/CD",
          "PostgreSQL",
          "MongoDB",
          "Supabase",
          "Prisma",
          "Drizzle ORM",
          "Knex",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#f0efe9] px-4 py-2 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: "Experience",
    content: (
      <div className="space-y-4">
        <ResumeItem
          title="Ibanera LLC"
          meta="Golang Backend Developer / 01/2026-Present"
        />
        <ResumeItem
          title="Bitsmiths Studios"
          meta="Software Engineer, Remote / 09/2024"
        />
        <ResumeItem
          title="GoSaas Labs"
          meta="Frontend Software Engineer / 06/2024-08/2024"
        />
        <ResumeItem
          title="AI Raheem Technologies"
          meta="Front-End Web Developer / 09/2023-12/2023"
        />
      </div>
    ),
  },
  {
    label: "Education",
    content: (
      <div className="space-y-4">
        <ResumeItem
          title="Bachelor of Science"
          meta="National University of Science and Technology / Islamabad"
        />
      </div>
    ),
  },
  {
    label: "Impact",
    content: (
      <div className="space-y-4">
        <ResumeItem
          title="10,000+ monthly transactions"
          meta="Payment and onboarding integrations across Stripe, PayPal, Twilio, and Yoti"
        />
        <ResumeItem
          title="40% better data accessibility"
          meta="Reporting system and dashboard improvements across teams"
        />
        <ResumeItem
          title="25% faster analysis"
          meta="Recruiter dashboards with interactive candidate analytics"
        />
      </div>
    ),
  },
];

const socialLinks = [
  {
    label: "github.com/eashah-uwu",
    href: "https://github.com/eashah-uwu",
  },
  {
    label: "Email",
    href: "mailto:ebajwa.bscs22seecs@seecs.edu.pk",
  },
  {
    label: "03140947607",
    href: "tel:+923140947607",
  },
];

function ResumeItem({ title, meta }: { title: string; meta: string }) {
  return (
    <div>
      <h4 className="text-base font-bold sm:text-lg">{title}</h4>
      <p className="text-sm text-black/50 sm:text-base">{meta}</p>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const moveSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((currentSlide + 1) % resumeSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (currentSlide - 1 + resumeSlides.length) % resumeSlides.length,
    );

  return (
    <div className="min-h-screen bg-[#f0efe9] text-black selection:bg-[#3a4a16] selection:text-white">
      <Header />

      <main>
        <section className="relative isolate flex min-h-svh cursor-default items-center justify-center overflow-hidden px-5 pt-24 sm:px-10">
          <BackgroundGradientAnimation
            firstColor="218, 198, 235"
            secondColor="168, 216, 234"
            thirdColor="239, 233, 215"
            fourthColor="58, 74, 22"
            fifthColor="255, 255, 255"
            pointerColor="126, 92, 147"
            size="56%"
            blendingValue="normal"
            containerClassName="z-0 opacity-100"
          />
          <div className="hero-background-veil" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 z-[1] hidden lg:block" aria-hidden="true">
            {heroIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`hero-glow-icon absolute ${item.className}`}
                  style={{ animationDelay: `${index * 0.55}s` }}
                >
                  <Icon className="size-5" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="reveal mb-6 mt-10 inline-flex max-w-full items-center gap-3 rounded-full border border-[#3a4a16]/20 bg-white/55 px-5 py-3 shadow-sm backdrop-blur-md sm:mt-12 sm:px-6">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#3a4a16] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#3a4a16]" />
              </span>
              <span className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.16em] text-[#3a4a16] sm:text-[11px] sm:tracking-[0.22em]">
                Full-Stack Developer / Fintech APIs / React / Next.js
              </span>
            </div>

            <h1 className="serif-title mb-8 text-[clamp(3.25rem,9vw,7.75rem)] tracking-normal">
              Fintech APIs, dashboards,
              <br />
              and scalable web products
              <br />
              built to <span className="italic text-[#3a4a16]">perform</span>.
            </h1>

            <p className="reveal mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-black/70 delay-150 md:text-xl">
              I build production-ready web applications across frontend
              dashboards, backend APIs, fintech integrations, and deployment
              workflows. My experience includes payment and identity
              integrations, transaction routing, REST APIs, Next.js dashboards,
              PostgreSQL-backed systems, and containerized deployments.
            </p>

            <div className="reveal flex flex-wrap items-center justify-center gap-5 delay-300 sm:gap-8">
              <a
                href="#projects"
                className="cursor-pointer rounded-full bg-[#3a4a16] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16] sm:px-10"
              >
                Explore Projects
              </a>
              <a
                href="#about"
                className="cursor-pointer rounded-full border border-[#3a4a16] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200 hover:bg-[#3a4a16]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16] sm:px-10"
              >
                View Profile
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-10 lg:py-28">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="reveal">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-[#3a4a16]">
                Case Studies
              </span>
              <h2 className="serif-title text-5xl md:text-7xl">
                Selected Case Studies
              </h2>
            </div>
            <div className="reveal md:text-right">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border-b-2 border-black/10 pb-2 transition-colors hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
              >
                <span className="text-sm font-bold uppercase tracking-[0.18em]">
                  Start a Conversation
                </span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              const status = "status" in project ? project.status : undefined;

              return (
                <article
                  key={project.title}
                  className={`project-card group reveal flex h-full flex-col rounded-[1.5rem] border border-black/5 bg-white/65 p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#3a4a16]/20 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16] ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={`case-study-visual relative aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-gradient-to-br ${project.visualClass}`}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} website screenshot`}
                        fill
                        sizes="(min-width: 768px) 560px, 90vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0">
                        <div className="absolute inset-x-6 bottom-7 top-7 rounded-[1.4rem] border border-white/45 bg-white/25 shadow-[0_24px_70px_rgb(58_74_22_/_0.12)] backdrop-blur-md transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
                        <div className="absolute left-9 right-9 top-12 flex items-center gap-2">
                          <span className="size-2 rounded-full bg-white/75" />
                          <span className="size-2 rounded-full bg-white/50" />
                          <span className="size-2 rounded-full bg-white/40" />
                        </div>
                        <div className="absolute left-9 right-9 top-24 grid grid-cols-4 gap-3">
                          <span className="h-2 rounded-full bg-white/50" />
                          <span className="h-2 rounded-full bg-white/35" />
                          <span className="h-2 rounded-full bg-white/45" />
                          <span className="h-2 rounded-full bg-white/30" />
                        </div>
                        <div className="absolute bottom-24 left-9 right-9 hidden grid-cols-3 gap-3 sm:grid">
                          <span className="h-16 rounded-2xl bg-white/25" />
                          <span className="h-16 rounded-2xl bg-white/35" />
                          <span className="h-16 rounded-2xl bg-white/25" />
                        </div>
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_76%_20%,rgb(255_255_255_/_0.58),transparent_28%),radial-gradient(circle_at_18%_76%,rgb(58_74_22_/_0.12),transparent_30%)]" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                    <div className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl border border-white/60 bg-white/80 text-[#3a4a16] shadow-sm backdrop-blur-sm">
                      <Icon className="size-5" />
                    </div>
                    {status && (
                      <div className="absolute right-5 top-5 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7e5c93] shadow-sm backdrop-blur-sm">
                        In progress
                      </div>
                    )}
                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3a4a16]">
                          {project.sourceLabel}
                        </span>
                      </div>
                    </div>
                    <span className={`case-study-accent absolute right-6 top-6 size-16 rounded-full ${project.accent}`} />
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-medium">{project.title}</h3>
                      <ExternalLink className="mt-1 size-4 shrink-0 text-black/35 transition-colors group-hover:text-[#3a4a16]" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-[#3a4a16]/10 bg-[#f0efe9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#3a4a16]">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/45">
                        {project.meta}
                      </span>
                    </div>
                    {status && (
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#7e5c93]">
                        {status}
                      </p>
                    )}
                    <div className="mt-5 rounded-[1rem] border border-black/5 bg-[#f0efe9]/65 p-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/42">
                        Role focus
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-black/66">
                        {project.focus}
                      </p>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-black/60">
                      {project.description}
                    </p>
                    <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-black/42">
                      Stack & context
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.title}-${tag}`}
                          className="rounded-full border border-[#3a4a16]/10 bg-[#f0efe9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#3a4a16]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                      <a
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          project.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-[#3a4a16] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
                      >
                        {project.ctaLabel}
                        <ArrowRight className="size-3.5" />
                      </a>
                      {"referenceHref" in project && project.referenceHref && (
                        <a
                          href={project.referenceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border-b border-black/15 pb-2 text-xs font-bold uppercase tracking-[0.14em] text-black/55 transition-colors duration-200 hover:border-[#3a4a16] hover:text-[#3a4a16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
                        >
                          {project.referenceLabel}
                          <ExternalLink className="size-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="reveal mt-14 border-t border-black/10 pt-8">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#3a4a16]">
                  More Builds
                </span>
                <h3 className="mt-2 text-2xl font-medium">
                  Additional work, separated from role experience
                </h3>
              </div>
              <span className="text-sm text-black/45">
                Scroll sideways to browse
              </span>
            </div>

            <div className="flex snap-x gap-4 overflow-x-auto pb-4">
              {additionalProjects.map((project) => {
                const Icon = project.icon;
                const status = "status" in project ? project.status : undefined;

                return (
                  <article
                    key={`more-${project.title}`}
                    className="flex min-w-[280px] snap-start flex-col rounded-[1.25rem] border border-black/5 bg-white/65 p-3 shadow-sm sm:min-w-[340px]"
                  >
                    <div className={`relative aspect-[16/10] overflow-hidden rounded-[1rem] bg-gradient-to-br ${project.visualClass}`}>
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="340px"
                          className="object-cover object-top"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgb(255_255_255_/_0.6),transparent_28%),linear-gradient(135deg,rgb(255_255_255_/_0.38),transparent)]">
                          <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/55 bg-white/75 p-3 shadow-sm backdrop-blur-md">
                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#3a4a16]">
                              Protected screens
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                      <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl border border-white/60 bg-white/85 text-[#3a4a16] shadow-sm backdrop-blur-sm">
                        <Icon className="size-4" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-lg font-medium">{project.title}</h4>
                        <ExternalLink className="mt-1 size-4 shrink-0 text-black/30" />
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#f0efe9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3a4a16]">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-black/42">
                          {project.meta}
                        </span>
                      </div>
                      {status && (
                        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7e5c93]">
                          {status}
                        </p>
                      )}
                      <p className="mt-3 text-sm leading-relaxed text-black/62">
                        {project.focus}
                      </p>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-black/58">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={`${project.title}-more-${tag}`}
                            className="rounded-full border border-[#3a4a16]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#3a4a16]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          project.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-auto inline-flex self-end items-center justify-end gap-2 pt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#3a4a16] transition-colors duration-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
                      >
                        {project.ctaLabel}
                        <ArrowRight className="size-3.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="payment-gateway" className="bg-[#10140a] px-5 py-18 text-white sm:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[0.9fr_1.3fr] md:items-start">
            <div className="reveal">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-[#c9e6e7]">
                Payment Gateway Fit
              </span>
              <h2 className="serif-title text-5xl md:text-7xl">
                Relevant to Payment Gateway Work
              </h2>
            </div>
            <div className="reveal delay-150">
              <p className="text-lg leading-relaxed text-white/72 md:text-xl">
                My experience overlaps strongly with payment gateway systems
                through fintech backend services, transaction routing, payment
                integrations, API-driven dashboards, identity verification
                flows, PostgreSQL-backed transactional systems, and production
                deployments. I have worked with Stripe, PayPal, Yoti, Twilio,
                REST APIs, Docker/Coolify-style deployments, and fintech
                products where reliability and secure data handling matter.
              </p>
            </div>
          </div>
        </section>

        <section id="expertise" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="reveal h-fit lg:sticky lg:top-32 lg:col-span-5">
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-[#3a4a16]">
                  Professional Experience
                </span>
                <h2 className="serif-title mb-6 text-5xl md:text-7xl">
                  Built across fast-moving teams.
                </h2>
                <p className="max-w-md text-lg leading-relaxed text-black/60">
                  I have worked across frontend systems, reporting dashboards,
                  fintech integrations, Angular operations tools, and backend
                  services, collaborating with global teams in fast release
                  cycles.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="timeline-line relative">
                  {timeline.map((entry, index) => {
                    const Icon = entry.icon;
                    return (
                      <div
                        key={`${entry.company}-${entry.role}`}
                        className={`group reveal relative pl-14 sm:pl-16 ${
                          index === timeline.length - 1 ? "" : "pb-10 sm:pb-12"
                        }`}
                      >
                        <div className="absolute left-0 top-0 z-10 flex size-10 items-center justify-center rounded-full border-2 border-[#3a4a16] bg-[#f0efe9] transition-colors duration-200 group-hover:bg-[#3a4a16]">
                          <Icon className="size-4 text-[#3a4a16] transition-colors duration-200 group-hover:text-white" />
                        </div>
                        <div className="rounded-[1.25rem] border border-transparent bg-[#f0efe9]/35 p-6 transition-colors duration-200 hover:border-[#3a4a16]/10 hover:bg-[#3a4a16]/5 sm:p-8">
                          <span className="text-sm font-bold tracking-[0.18em] text-[#3a4a16]">
                            {entry.date}
                          </span>
                          <h3 className="mb-3 mt-2 text-xl font-medium sm:text-2xl">
                            {entry.role}
                          </h3>
                          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-black/45">
                            {entry.company} / {entry.location}
                          </p>
                          <p className="text-base leading-relaxed text-black/60">
                            {entry.text}
                          </p>
                          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-black/55">
                            {entry.highlights.map((highlight) => (
                              <li key={highlight} className="flex gap-3">
                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#3a4a16]/60" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-16 sm:px-10 lg:min-h-svh lg:py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-14">
              <div className="reveal">
                <div className="relative mx-auto max-w-[430px] md:mx-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[10px] border-white bg-[#efe9d7] shadow-2xl sm:border-[14px]">
                    <BackgroundGradientAnimation
                      firstColor="218, 198, 235"
                      secondColor="168, 216, 234"
                      thirdColor="239, 233, 215"
                      fourthColor="58, 74, 22"
                      fifthColor="255, 255, 255"
                      pointerColor="168, 216, 234"
                      size="70%"
                      blendingValue="normal"
                      interactive={false}
                      containerClassName="z-0 opacity-100"
                    />
                    <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_20%_20%,rgb(255_255_255_/_0.5),transparent_24%),linear-gradient(to_bottom,rgb(240_239_233_/_0.02),rgb(58_74_22_/_0.18))]" />
                    <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
                      <div className="flex items-start justify-between gap-5">
                        <span className="rounded-full border border-[#3a4a16]/15 bg-white/50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#3a4a16] backdrop-blur-md">
                          Fintech Systems
                        </span>
                        <span className="flex size-12 items-center justify-center rounded-2xl border border-white/60 bg-white/55 text-[#3a4a16] shadow-sm backdrop-blur-md">
                          <Sparkles className="size-5" />
                        </span>
                      </div>

                      <div>
                        <p className="serif-title max-w-sm text-5xl text-black sm:text-[3.5rem]">
                          Eashah
                          <br />
                          Emaan
                        </p>
                        <p className="mt-4 max-w-xs text-base leading-relaxed text-black/65">
                          React, Next.js, TypeScript, APIs, fintech
                          integrations, and production web systems.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {["React", "Next.js", "REST APIs", "Fintech"].map(
                          (item) => (
                            <span
                              key={item}
                              className="rounded-2xl border border-white/50 bg-white/45 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#3a4a16] shadow-sm backdrop-blur-md"
                            >
                              {item}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal delay-150">
                <h2 className="serif-title mb-5 text-5xl leading-none md:text-[3.5rem]">
                  Full-stack product craft,
                  <br />
                  grounded in fintech systems.
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-black/70">
                  Full-Stack Developer with experience building scalable web
                  products using React, Next.js, TypeScript, backend APIs,
                  fintech integrations, and production deployment workflows. I
                  focus on reliable product delivery across dashboards,
                  transactional systems, API integrations, and user-focused
                  interfaces.
                </p>

                <div className="overflow-hidden rounded-[1.5rem] bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-6 flex gap-5 overflow-x-auto border-b border-black/5 pb-5 sm:flex-wrap sm:gap-6">
                    {resumeSlides.map((slide, index) => (
                      <button
                        key={slide.label}
                        type="button"
                        onClick={() => moveSlide(index)}
                        aria-pressed={currentSlide === index}
                        className={`shrink-0 border-b-2 pb-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16] ${
                          currentSlide === index
                            ? "border-[#3a4a16] text-[#3a4a16]"
                            : "border-transparent text-black/40 hover:text-black"
                        }`}
                      >
                        {slide.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative overflow-hidden">
                    <div
                      className="flex items-start transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {resumeSlides.map((slide) => (
                        <div
                          key={slide.label}
                          className="min-w-full pr-1"
                          aria-hidden={slide.label !== resumeSlides[currentSlide].label}
                        >
                          {slide.content}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-6 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href="/resume/Eashahs_Resume.pdf"
                      download
                      className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#3a4a16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
                    >
                      <Download className="size-4" />
                      <span>Download Eashah&apos;s Resume</span>
                    </a>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-label="Previous resume slide"
                        onClick={prevSlide}
                        className="flex size-10 items-center justify-center rounded-full border border-black/10 transition-colors duration-200 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
                      >
                        <ChevronLeft className="size-4" />
                      </button>
                      <button
                        type="button"
                        aria-label="Next resume slide"
                        onClick={nextSlide}
                        className="flex size-10 items-center justify-center rounded-full border border-black/10 transition-colors duration-200 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
                      >
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 text-center sm:px-10 lg:py-36">
          <div className="reveal mx-auto max-w-4xl">
            <h2 className="serif-title mb-10 text-[clamp(2.75rem,7vw,6.25rem)]">
              Need a full-stack developer who understands{" "}
              <span className="italic">fintech systems</span>?
            </h2>
            <a
              href="mailto:ebajwa.bscs22seecs@seecs.edu.pk"
              className="inline-block border-b-2 border-transparent pb-4 text-2xl font-light transition-colors duration-200 hover:border-[#3a4a16] hover:text-[#3a4a16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16] md:text-5xl"
            >
              ebajwa.bscs22seecs@seecs.edu.pk
            </a>

            <div className="mt-24 flex flex-wrap justify-center gap-8 sm:mt-32 sm:gap-16">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[#3a4a16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-8 border-t border-black/5 px-5 py-10 sm:px-10 md:flex-row">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
          &copy; 2026 Eashah Emaan Bajwa / React / Next.js / TypeScript / APIs / Fintech Systems
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
        >
          Back to top
          <span className="flex size-10 items-center justify-center rounded-full border border-black/10 transition-colors duration-200 group-hover:bg-[#3a4a16] group-hover:text-white">
            <ArrowUp className="size-4" />
          </span>
        </button>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#3a4a16]/10 bg-[#f0efe9]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:h-24 sm:px-10">
        <a
          href="#"
          className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
          aria-label="Eashah Emaan Bajwa home"
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-[#3a4a16]/20 bg-white/50 text-[#3a4a16]">
            <Sparkles className="size-4" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-black">
            Eashah Emaan Bajwa
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex lg:gap-16">
          <a className="nav-link" href="#projects">
            Work
          </a>
          <a className="nav-link" href="#expertise">
            Expertise
          </a>
          <a className="nav-link" href="#about">
            Profile
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#3a4a16] px-8 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a4a16]"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
