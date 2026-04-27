"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduced ? 0 : 0.7, ease, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

function StaggerChildren({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 28 },
        visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.6, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HomeContent() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? ["0px", "0px"] : ["0px", "-60px"]);
  const textY = useTransform(scrollYProgress, [0, 1], reduced ? ["0px", "0px"] : ["0px", "-30px"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], reduced ? [1, 1] : [1, 0]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        data-stardust
        className="flex min-h-screen items-center overflow-hidden text-white"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="container !px-4 py-20 sm:!px-8 md:py-28 lg:!px-6">
          <div className="mx-auto max-w-6xl lg:-translate-y-[40px]">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_460px] lg:gap-16">
              {/* Left: Text content */}
              <motion.div style={{ y: textY, opacity: heroOpacity }}>
                <motion.h1
                  className="mb-6 whitespace-nowrap text-[38px] font-extrabold leading-[1.0] tracking-[-0.03em] text-white md:text-[64px] lg:text-[70px]"
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.8, ease, delay: reduced ? 0 : 0.1 }}
                >
                  Shaun Herron
                </motion.h1>
                <motion.p
                  className="mb-8 text-[22px] font-extrabold leading-[1.3] text-white/60 md:text-[36px] lg:text-[40px]"
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.8, ease, delay: reduced ? 0 : 0.2 }}
                >
                  I design products powered by AI — and use AI to design and ship them faster.
                </motion.p>
                <motion.div
                  className="mb-10 flex flex-wrap gap-2"
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.7, ease, delay: reduced ? 0 : 0.35 }}
                >
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    Design Systems at Scale
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    AI-Assisted Product Design
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    EdTech · SaaS · Shipped Products
                  </span>
                </motion.div>
                <motion.div
                  className="flex flex-wrap items-center gap-4 pb-10 lg:pb-0"
                  initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.7, ease, delay: reduced ? 0 : 0.45 }}
                >
                  <a
                    href="#work"
                    className="rounded-lg bg-white px-6 py-3 text-[15px] font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    View Projects
                  </a>
                  <a
                    href="#process"
                    className="text-[15px] font-semibold text-white/60 transition-colors hover:text-white"
                  >
                    Read Process
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: UI screenshot with parallax */}
              <motion.div
                className="flex justify-center lg:justify-start"
                style={{ y: imageY }}
                initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 40, scale: reduced ? 1 : 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: reduced ? 0 : 1, ease, delay: reduced ? 0 : 0.3 }}
              >
                <div className="relative w-full max-w-[580px] overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
                  <Image
                    src="/hero-ui.png"
                    alt="AI coaching platform UI showing lesson snapshot with student talk time, wait time, and coaching tips"
                    width={700}
                    height={900}
                    className="w-full"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="overflow-hidden border-b border-black/8 bg-white" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <p className="mb-7 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-black/35">
          Designed for
        </p>
        <div className="flex animate-marquee" style={{ willChange: "transform", width: "max-content" }}>
          {[1, 2].map((set) => (
            <div key={set} className="flex shrink-0 items-center">
              {[
                { src: "/logo-1-google.png", alt: "Google" },
                { src: "/logo-2-amazon.png", alt: "Amazon" },
                { src: "/logo-3-microsoft.png", alt: "Microsoft" },
                { src: "/logo-4-xbox.png", alt: "Xbox" },
                { src: "/logo-5-starbucks.png", alt: "Starbucks" },
                { src: "/logo-6-cbs.png", alt: "CBS" },
                { src: "/logo-7-mtv.png", alt: "MTV" },
                { src: "/logo-8-rollingstone.png", alt: "Rolling Stone" },
                { src: "/logo-9-realnetworks.png", alt: "RealNetworks" },
              ].map((logo) => (
                <div key={logo.alt} className="mx-10 flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className="h-16 w-auto object-contain opacity-40"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Impact bar */}
      <section className="border-b bg-white">
        <div className="container py-14 md:py-16">
          <StaggerChildren className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Scale",
                text: (
                  <>Design systems with <strong className="font-bold text-black">100+ components</strong> shipped to production</>
                ),
              },
              {
                label: "Impact",
                text: (
                  <>Reduced teacher feedback cycles <strong className="font-bold text-black">from days to minutes</strong></>
                ),
              },
              {
                label: "Collaboration",
                text: (
                  <>Embedded with <strong className="font-bold text-black">product and engineering</strong> across EdTech and SaaS</>
                ),
              },
              {
                label: "Currency",
                text: (
                  <><strong className="font-bold text-black">AI-assisted</strong> design-to-code pipelines via Claude Code and Storybook</>
                ),
              },
            ].map(({ label, text }) => (
              <StaggerItem key={label}>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">{label}</p>
                <p className="text-[15px] leading-[1.6] text-black/80">{text}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* TeachAI Feature */}
      <section
        className="overflow-hidden"
        style={{ background: "linear-gradient(24deg, rgb(0,26,34) 3.6%, rgb(0,77,92) 32.1%, rgb(10,122,143) 67.9%)" }}
      >
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left: Text */}
              <FadeUp className="min-w-0">
                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    AI-Assisted
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    Shipped
                  </span>
                </div>
                {/* Eyebrow */}
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70">
                  AI-Powered Coaching Platform
                </p>
                {/* Headline */}
                <h2 className="mb-5 text-[44px] font-extrabold leading-none tracking-[-0.025em] text-[#f7f7fc] md:text-[56px] lg:text-[64px]">
                  TeachAI
                </h2>
                {/* Subhead */}
                <p className="mb-4 text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-[#e0e3ed] md:text-[22px]">
                  Reduced teacher feedback cycles from days to minutes.
                </p>
                {/* Body */}
                <p className="text-[16px] leading-[1.65] text-white/80">
                  AI surfaces coaching insights immediately; coaches retain full oversight.
                </p>
                {/* Divider */}
                <div className="my-8 h-px w-full max-w-[400px] bg-white/8" />
                {/* CTAs */}
                <div className="mb-8 flex flex-wrap items-center gap-4">
                  <a
                    href="https://teachai.simpleshaun.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[10px] bg-[#f7f7fc] px-6 py-3 text-[14px] font-semibold text-[#121217] transition-opacity hover:opacity-90"
                  >
                    View Case Study →
                  </a>
                  <a
                    href={`mailto:simpleshaundesign@gmail.com?subject=${encodeURIComponent("Case study access: TeachAI")}&body=${encodeURIComponent("Hi Shaun,\n\nI'd like to request access to your \"TeachAI\" case study.\n\nThanks!")}`}
                    className="text-[14px] font-semibold text-[#c4c4c4] transition-colors hover:text-white"
                  >
                    Request Access ↗
                  </a>
                </div>
                {/* Made with */}
                <p className="text-[12px] text-white/80">Made with Figma + Claude Code</p>
              </FadeUp>

              {/* Right: UI mockup */}
              <FadeUp delay={0.15}>
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
                  {/* App header */}
                  <div className="flex items-center gap-2.5 border-b border-[#e5e8ed] bg-white px-[18px] py-3.5">
                    <div className="flex size-[30px] items-center justify-center rounded-lg bg-[#0a7a8f] text-[13px] text-white">✦</div>
                    <span className="text-[13px] font-bold text-[#0f5961]">TeachAI</span>
                  </div>
                  {/* App body */}
                  <div className="bg-[#f2f5f7] px-5 pb-5 pt-5">
                    <p className="mb-1.5 text-[18px] font-bold leading-[1.2] tracking-[-0.005em] text-[#1a1f26]">What would you like feedback on?</p>
                    <p className="mb-5 text-[12px] leading-[1.55] text-[#70788a]">Attach evidence from your lesson and tell us your focus.</p>
                    <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7a8599]">Try an idea</p>
                    {[
                      "Analyze engagement & wait time",
                      "Check lesson plan alignment",
                      "Equity check · student participation",
                      "Improve my questioning technique",
                    ].map((prompt) => (
                      <div key={prompt} className="mb-2 flex items-center gap-2 rounded-[10px] border border-[#e0e5ed] bg-white px-3 py-2.5">
                        <div className="h-5 w-[3px] shrink-0 rounded-sm bg-[rgba(13,191,171,0.8)]" />
                        <span className="text-[12px] font-medium text-[#0d8085]">{prompt}</span>
                      </div>
                    ))}
                    <p className="mb-2.5 mt-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7a8599]">Add materials (optional)</p>
                    <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {[
                        { icon: "▷", label: "Add video" },
                        { icon: "≡", label: "Lesson plan" },
                        { icon: "✓", label: "Exit tickets" },
                        { icon: "⊡", label: "Student work" },
                        { icon: "⊟", label: "Standards" },
                        { icon: "+", label: "Other" },
                      ].map(({ icon, label }) => (
                        <div key={label} className="flex items-center gap-1.5 rounded-lg border border-[#d6dbe5] bg-white px-3 py-2 text-[11px] text-[#616b80]">
                          <span>{icon}</span>
                          <span className="font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-[#d1ded9] bg-[#daf7fd] px-4 py-3">
                      <span className="text-[12px] text-[#012e39]">Describe what you'd like feedback on...</span>
                    </div>
                    <p className="py-3 text-[11px] text-[#858f9e]">You need a written message or at least one attachment to continue.</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-b border-black bg-black">
        <div className="container py-20 md:py-28">
          <FadeUp>
            <h2 className="mb-3 text-center text-[36px] font-extrabold tracking-[-0.02em] text-white md:text-[44px]">
              Selected Works
            </h2>
            <p className="mb-14 text-center text-[15px] leading-[1.7] text-white/50">
              A few things I&apos;ve designed, shipped, and learned from.
            </p>
          </FadeUp>

          <StaggerChildren className="grid gap-6 lg:grid-cols-3">
            {[
              {
                href: "https://insightcapture.simpleshaun.com",
                img: "/insight-capture-card.svg",
                alt: "Insight Capture illustration",
                badges: ["AI-Assisted", "Shipped"],
                category: "Insights Capture & Research Tool",
                title: "Insight Capture",
                desc: "Eliminated custom dev requests by giving schools self-service authoring tools to build forms, collect data, and run their own reports.",
              },
              {
                href: "https://designsystem.simpleshaun.com",
                img: "/design-system-card.svg",
                alt: "Design System illustration",
                badges: ["AI-Assisted", "Shipped"],
                category: "Scalable Component Architecture",
                title: "Design System",
                desc: "Eliminated visual drift across a contractor-heavy codebase — then used AI to transform design tokens into Storybook components directly.",
                open: true,
              },
              {
                href: "#",
                img: "/teach-ai-card.svg",
                alt: "Parent Scheduling illustration",
                badges: ["AI-Assisted"],
                category: "Scheduling UX · Tutoring Platform",
                title: "Parent Scheduling",
                desc: "Removed the phone-tag from tutoring bookings. Parents find availability, book sessions, and manage recurrence in one self-serve flow — no front office required.",
                comingSoon: true,
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <div className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60">
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-[filter] duration-200 group-hover:brightness-110"
                  >
                    <Image src={card.img} alt={card.alt} width={448} height={458} className="w-full" />
                  </a>
                  <div className="flex flex-1 flex-col bg-[#1a1a1a] px-6 pb-8 pt-6">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      {card.badges.map((badge) => (
                        <span key={badge} className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      {card.category}
                    </p>
                    <h3 className="mb-3 text-[22px] font-bold text-white">{card.title}</h3>
                    <p className="mb-6 text-[14px] leading-[1.6] text-white">{card.desc}</p>
                    <div className="mt-auto">
                      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold">
                        {card.comingSoon ? (
                          <span className="text-white/35">Coming Soon</span>
                        ) : (
                          <>
                            <a
                              href={card.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white transition-colors hover:text-white/60"
                            >
                              View Case Study →
                            </a>
                            {!card.open && (
                              <>
                                <span className="text-white/20">·</span>
                                <a
                                  href={`mailto:simpleshaundesign@gmail.com?subject=${encodeURIComponent(`Case study access: ${card.title}`)}&body=${encodeURIComponent(`Hi Shaun,\n\nI'd like to request access to your "${card.title}" case study.\n\nThanks!`)}`}
                                  className="flex items-center gap-1.5 text-white/55 transition-colors hover:text-white"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-3 shrink-0">
                                    <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v4A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 11 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
                                  </svg>
                                  Request Access ↗
                                </a>
                              </>
                            )}
                          </>
                        )}
                      </div>
                      <p className="text-[11px] font-medium text-white/50">Made with Figma + Claude Code</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Bio */}
      <section className="border-b bg-[#1a1a1a]">
        <div className="container py-20 md:py-24">
          <FadeUp>
            <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
              <div className="relative shrink-0 overflow-hidden rounded-xl" style={{ width: 280, height: 368 }}>
                <Image
                  src="/shaun-headshot.jpg"
                  alt="Shaun Herron"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="flex max-w-[560px] flex-col gap-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  About
                </p>
                <h2 className="text-[36px] font-semibold leading-tight text-white">
                  Shaun Herron
                </h2>
                <div className="h-0.5 w-12 bg-white/15" />
                <p className="text-[16px] leading-[1.7] text-white/70">
                  {`I'm Shaun — a Senior Product Designer with 15+ years of experience building products that actually get used. I specialize in design systems and AI-assisted workflows, which means I move fast without cutting corners. Most recently I've been deep in EdTech, designing tools for teachers, coaches, and school leaders where the stakes are real and the feedback loops matter. I've also designed for Google, Amazon, Microsoft, and others along the way. I care about craft, I care about the people I work with, and I'm looking for a team that feels the same.`}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:simpleshaundesign@gmail.com"
                    className="rounded-md bg-white px-5 py-2.5 text-[14px] font-medium text-black transition-opacity hover:opacity-90"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/resume"
                    className="text-[14px] font-medium text-white/55 transition-colors hover:text-white"
                  >
                    View Resume →
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* The Rigor of Craft */}
      <section id="process" className="border-b bg-[#f2f2f0]">
        <div className="container py-20 md:py-28">
          <FadeUp>
            <h2 className="mb-5 text-center text-[36px] font-extrabold tracking-[-0.02em] text-black md:text-[44px]">
              The Rigor of Craft
            </h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-[15px] leading-[1.7] text-black/50">
              A validated framework for turning ambiguity into clear direction — now accelerated with AI at each step to move faster without lowering the bar.
            </p>
          </FadeUp>

          <div className="mx-auto max-w-2xl">
            <FadeUp delay={0.05}>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                Understand &amp; Define
              </p>
            </FadeUp>
            <StaggerChildren className="mb-6 grid gap-4 md:grid-cols-3">
              {[
                { step: "01 · Empathize", title: "In-Depth Discovery", desc: "Stakeholder interviews and user shadowing to uncover the 'why' behind the friction points.", ai: "Use Claude to transcribe and cluster themes across dozens of interviews in minutes.", accent: "bg-[#4F6AF5]" },
                { step: "02 · Define", title: "Strategic Synthesis", desc: "Mapping user journeys and defining core success metrics for the design solution.", ai: "LLMs distill raw research into tight problem statements and jobs-to-be-done hypotheses.", accent: "bg-[#4F6AF5]" },
                { step: "03 · Ideate", title: "Rapid Iteration", desc: "Low-fidelity exploration to validate interaction models without high-fidelity distractions.", ai: "Generate divergent solution concepts and edge cases to expand the solution space faster.", accent: "bg-[#4F6AF5]" },
              ].map((card) => (
                <StaggerItem key={card.step} className="h-full">
                  <div className="flex h-full flex-col rounded-xl bg-white px-6 pb-6 pt-6">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">{card.step}</p>
                    <div className={`mb-5 h-[2px] w-6 ${card.accent}`} />
                    <h3 className="mb-3 text-[17px] font-bold text-black">{card.title}</h3>
                    <p className="mb-6 grow text-[13px] leading-[1.7] text-black/50">{card.desc}</p>
                    <div className="border-t border-black/10 pt-4">
                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40">
                        <span className="text-[#4F6AF5]">◆</span> AI Assist
                      </p>
                      <p className="text-[12px] leading-[1.6] text-black/55">{card.ai}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeUp delay={0.05}>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40">
                Build &amp; Deliver
              </p>
            </FadeUp>
            <StaggerChildren className="grid gap-4 md:grid-cols-3">
              {[
                { step: "04 · Prototype", title: "Living Systems", desc: "High-fidelity functional prototypes built with production-ready design tokens.", ai: "Figma Make and Claude Code turn flows into coded prototypes in hours instead of days.", accent: "bg-black" },
                { step: "05 · Test", title: "User Validation", desc: "Rigorous usability testing to ensure the interface meets cognitive and accessibility standards.", ai: "AI summarizes usability recordings and surfaces behavior patterns across participants.", accent: "bg-black" },
                { step: "06 · Implement", title: "Precision Handoff", desc: "Collaborating with engineering to ensure 1:1 fidelity from design to production.", ai: "Generate component docs, acceptance criteria, and release notes from Figma and tokens.", accent: "bg-black" },
              ].map((card) => (
                <StaggerItem key={card.step} className="h-full">
                  <div className="flex h-full flex-col rounded-xl bg-white px-6 pb-6 pt-6">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">{card.step}</p>
                    <div className={`mb-5 h-[2px] w-6 ${card.accent}`} />
                    <h3 className="mb-3 text-[17px] font-bold text-black">{card.title}</h3>
                    <p className="mb-6 grow text-[13px] leading-[1.7] text-black/50">{card.desc}</p>
                    <div className="border-t border-black/10 pt-4">
                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40">
                        <span className="text-[#4F6AF5]">◆</span> AI Assist
                      </p>
                      <p className="text-[12px] leading-[1.6] text-black/55">{card.ai}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-stardust style={{ backgroundColor: "#0F0F0F" }} className="px-6 py-24">
        <FadeUp>
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/35">
              Available for Work
            </p>
            <h2 className="mb-5 text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[48px]">
              Let&apos;s work together.
            </h2>
            <p className="mx-auto mb-10 max-w-md text-[16px] leading-[1.5] text-white/50">
              I&apos;m currently open to Senior Product Design roles, full-time or contract.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:simpleshaundesign@gmail.com"
                className="rounded-lg bg-white px-6 py-3 text-[15px] font-semibold text-[#0F0F0F] transition-opacity hover:opacity-90"
              >
                Get in Touch
              </a>
              <a
                href="/resume"
                className="text-[15px] font-semibold text-white/60 transition-colors hover:text-white"
              >
                View Resume →
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
