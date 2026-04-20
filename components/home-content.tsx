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
                  I design the AI products and systems teams actually build on.
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

      {/* Selected Work */}
      <section id="work" className="border-b bg-black">
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
                href: "https://teachai.simpleshaun.com",
                img: "/teach-ai-card.svg",
                alt: "TeachAI illustration",
                badge: "Shipped",
                category: "AI-Powered Coaching Platform",
                title: "TeachAI",
                desc: "Reduced teacher feedback cycles from days to minutes. AI surfaces coaching insights immediately; coaches retain full oversight.",
              },
              {
                href: "https://insightcapture.simpleshaun.com",
                img: "/insight-capture-card.svg",
                alt: "Insight Capture illustration",
                badge: "Shipped",
                category: "Insights Capture & Research Tool",
                title: "Insight Capture",
                desc: "Eliminated custom dev requests by giving schools self-service authoring tools to build forms, collect data, and run their own reports.",
              },
              {
                href: "https://designsystem.simpleshaun.com",
                img: "/design-system-card.svg",
                alt: "Design System illustration",
                badge: "AI-Assisted",
                category: "Scalable Component Architecture",
                title: "Design System",
                desc: "Eliminated visual drift across a contractor-heavy codebase — then used AI to transform design tokens into Storybook components directly.",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
                >
                  <div className="transition-[filter] duration-200 group-hover:brightness-110">
                    <Image src={card.img} alt={card.alt} width={448} height={458} className="w-full" />
                  </div>
                  <div className="flex flex-1 flex-col bg-[#1a1a1a] px-6 pb-12 pt-6">
                    <div className="mb-4">
                      <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                        {card.badge}
                      </span>
                    </div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      {card.category}
                    </p>
                    <h3 className="mb-3 text-[22px] font-bold text-white">{card.title}</h3>
                    <p className="mb-6 text-[14px] leading-[1.6] text-white">{card.desc}</p>
                    <span className="mt-auto text-[13px] font-semibold text-white transition-colors group-hover:text-white/70">
                      View Case Study →
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
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
              Design thinking is how I turn ambiguity into clear, validated direction. It keeps teams focused on the right problem, explores multiple solutions, and ensures what we build delivers real value.
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
                { step: "01 · Empathize", title: "In-Depth Discovery", desc: "Stakeholder interviews and user shadowing to uncover the 'why' behind the friction points.", accent: "bg-[#4F6AF5]" },
                { step: "02 · Define", title: "Strategic Synthesis", desc: "Mapping user journeys and defining core success metrics for the design solution.", accent: "bg-[#4F6AF5]" },
                { step: "03 · Ideate", title: "Rapid Iteration", desc: "Low-fidelity exploration to validate interaction models without high-fidelity distractions.", accent: "bg-[#4F6AF5]" },
              ].map((card) => (
                <StaggerItem key={card.step}>
                  <div className="rounded-xl bg-white px-6 pb-10 pt-6">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">{card.step}</p>
                    <div className={`mb-5 h-[2px] w-6 ${card.accent}`} />
                    <h3 className="mb-3 text-[17px] font-bold text-black">{card.title}</h3>
                    <p className="text-[13px] leading-[1.7] text-black/50">{card.desc}</p>
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
                { step: "04 · Prototype", title: "Living Systems", desc: "High-fidelity functional prototypes built with production-ready design tokens.", accent: "bg-black" },
                { step: "05 · Test", title: "User Validation", desc: "Rigorous usability testing to ensure the interface meets cognitive and accessibility standards.", accent: "bg-black" },
                { step: "06 · Implement", title: "Precision Handoff", desc: "Collaborating with engineering to ensure 1:1 fidelity from design to production.", accent: "bg-black" },
              ].map((card) => (
                <StaggerItem key={card.step}>
                  <div className="rounded-xl bg-white px-6 pb-10 pt-6">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">{card.step}</p>
                    <div className={`mb-5 h-[2px] w-6 ${card.accent}`} />
                    <h3 className="mb-3 text-[17px] font-bold text-black">{card.title}</h3>
                    <p className="text-[13px] leading-[1.7] text-black/50">{card.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
    </>
  );
}
