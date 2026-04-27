"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";

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

const DEMO_SCENARIOS = [
  {
    prompt: "Flag students who seem disengaged this week",
    responseTitle: "3 Students Flagged",
    responseItems: [
      "Marcus — low participation Tue–Thu",
      "Amara — 2 missing exit tickets",
      "Devon — engagement dropped 40%",
    ],
  },
  {
    prompt: "Draft feedback for Marcus on his essay",
    responseTitle: "Feedback Draft Ready",
    responseItems: [
      "Strong thesis, clear argument structure",
      "Expand the counter-argument section",
      "Good use of evidence in paragraph 2",
    ],
  },
  {
    prompt: "Summarize trends from last week's exit tickets",
    responseTitle: "Exit Ticket Summary",
    responseItems: [
      "68% of students confident on fractions",
      "12 students flagged for reteach",
      "Engagement peaked Tuesday",
    ],
  },
];

const IDEA_CHIPS = [
  "Analyze engagement & wait time",
  "Check lesson plan alignment",
  "Equity check · student participation",
  "Improve my questioning technique",
];

function TeachAIChips() {
  const reduced = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % IDEA_CHIPS.length), 1600);
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <>
      {IDEA_CHIPS.map((prompt, i) => (
        <motion.div
          key={prompt}
          className="mb-2 flex items-center gap-2 rounded-[10px] border px-3 py-2.5"
          animate={
            activeIdx === i
              ? { backgroundColor: "#eaf8fa", borderColor: "#9ed4dc", scale: 1.01 }
              : { backgroundColor: "#ffffff", borderColor: "#e0e5ed", scale: 1 }
          }
          transition={{ duration: 0.3 }}
        >
          <div className="h-5 w-[3px] shrink-0 rounded-sm bg-[rgba(13,191,171,0.8)]" />
          <span className="text-[12px] font-medium text-[#0d8085]">{prompt}</span>
        </motion.div>
      ))}
    </>
  );
}

function TeachAIDemoBox() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<"idle" | "typing" | "pause">("idle");
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  const prompt = DEMO_SCENARIOS[scenarioIdx].prompt;
  const typedText = prompt.slice(0, charIdx);

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => setPhase("typing"), 1000);
    return () => clearTimeout(t);
  }, [scenarioIdx, reduced]);

  useEffect(() => {
    if (phase !== "typing") return;
    if (charIdx < prompt.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 48);
      return () => clearTimeout(t);
    }
    setPhase("pause");
  }, [phase, charIdx, prompt]);

  useEffect(() => {
    if (phase !== "pause") return;
    const t = setTimeout(() => {
      setPhase("idle");
      setCharIdx(0);
      setScenarioIdx((i) => (i + 1) % DEMO_SCENARIOS.length);
    }, 1800);
    return () => clearTimeout(t);
  }, [phase]);

  const isActive = phase === "typing" || phase === "pause";

  return (
    <div>
      <div
        className={`rounded-xl border px-4 py-3 transition-all duration-300 ${
          isActive
            ? "border-[#0a7a8f] bg-[#daf7fd] ring-2 ring-[#0a7a8f]/20"
            : "border-[#d1ded9] bg-[#daf7fd]"
        }`}
      >
        {phase === "idle" ? (
          <span className="text-[12px] text-[#012e39]/40">Describe what you&apos;d like feedback on...</span>
        ) : (
          <span className="text-[12px] text-[#012e39]">
            {typedText}
            {phase === "typing" && (
              <motion.span
                className="ml-px inline-block h-3 w-px bg-[#012e39]"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </span>
        )}
      </div>
      <p className="py-3 text-[11px] text-[#858f9e]">
        You need a written message or at least one attachment to continue.
      </p>
    </div>
  );
}

function CountUp({ to, suffix = "", decimals = 0, active }: { to: number; suffix?: string; decimals?: number; active: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) { setValue(0); return; }
    let step = 0;
    const steps = 50;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setValue(parseFloat((to * eased).toFixed(decimals)));
      if (step >= steps) { setValue(to); clearInterval(timer); }
    }, 1000 / steps);
    return () => clearInterval(timer);
  }, [active, to, decimals]);
  return <>{value.toFixed(decimals)}{suffix}</>;
}

function HeroUI() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();
  const active = isInView && !reduced;
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (!active) return;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => setActiveCard((i) => (i + 1) % 3), 1800);
    }, 2400);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [active]);

  const stats = [
    { label: "Student Talk Time", to: 38, suffix: "%", color: "#007890" },
    { label: "Avg. Wait Time", to: 2.1, suffix: "s", color: "#b8860b", decimals: 1 },
    { label: "Obj. Alignment", to: 4, suffix: " / 5", color: "#2f8f6e" },
    { label: "Questions Asked", to: 24, suffix: "", color: "#007890" },
  ];
  const bars = [
    { label: "Higher-order questions", pct: 58, display: "58%", color: "#2f8f6e" },
    { label: "On-task student behavior", pct: 87, display: "87%", color: "#007890" },
    { label: "Cold-call equity (gender)", pct: 62, display: "62% / 38%", color: "#b8860b" },
  ];
  const insights = [
    { color: "#2f8f6e", text: "Your think-pair-share at 14:22 was a standout moment · every group was engaged within 45 seconds. That structure is working." },
    { color: "#2f8f6e", text: "58% of your questions pushed students to apply or analyze · well above the 40% research benchmark. Your questioning game is strong." },
    { color: "#b8860b", text: "Wait time averaged 2.1s. Stretching this to 3–5s is one of the highest-leverage moves available · and you\'re already close." },
    { color: "#b8860b", text: "Male students were called on 62% of the time. A simple randomizer can help shift this without any extra planning." },
  ];
  const tryCards = [
    { bg: "#e3f3f5", border: "rgba(0,120,144,0.2)", icon: "/teachai-icon-pause.svg", titleColor: "#0a5c6a", title: "3-Second Pause", desc: "After your next question, silently count to 3 before taking any responses. That pause changes everything." },
    { bg: "#f1eff9", border: "rgba(90,77,140,0.18)", icon: "/teachai-icon-random.svg", titleColor: "#5a4d8c", title: "Try a Randomizer", desc: "Use Wheel of Names or ClassDojo for cold calls · one class, no prep, instant equity boost." },
    { bg: "#ecf6f0", border: "rgba(45,107,79,0.18)", icon: "/teachai-icon-ticket.svg", titleColor: "#2d6b4f", title: "2-Minute Exit Ticket", desc: "End with: \"What\'s one thing slope means in real life?\" Quick data, big insight." },
  ];
  const actionChips = [
    { label: "Export report", icon: "/teachai-icon-export.svg" },
    { label: "Show timestamps", icon: "/teachai-icon-timestamps.svg" },
    { label: "Coaching tips", icon: "/teachai-icon-coaching.svg" },
  ];

  return (
    <div ref={ref} className="flex w-full max-w-[646px] items-start gap-[10px]">
      {/* AI badge — hidden on mobile */}
      <div
        className="hidden size-[36px] shrink-0 items-center justify-center rounded-[18px] border border-white/65 md:flex"
        style={{ background: "linear-gradient(145deg, #9adce6 0%, #6ec4d2 100%)", boxShadow: "0 1px 2px rgba(102,189,207,0.35)" }}
      >
        <span className="text-[11px] font-extrabold tracking-[0.02em] text-[#0a3a42]">AI</span>
      </div>

      {/* Bubble + action chips */}
      <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
        <div
          className="rounded-[20px] border border-[rgba(0,120,144,0.1)] bg-white p-[25px]"
          style={{ boxShadow: "0 2px 7px rgba(0,90,108,0.09), 0 1px 1.5px rgba(0,90,108,0.05)" }}
        >
          <p className="mb-[10px] text-[13.2px] leading-[1.7] text-[#1a2c2a]">
            There&apos;s a lot to celebrate in this lesson. I looked at your{" "}
            <strong className="font-bold">47-minute algebra lesson</strong>{" "}
            alongside your lesson plan · here&apos;s a snapshot of what stood out:
          </p>

          <div className="rounded-[12px] border border-[#dce8e6] bg-[#f4f8f7] p-[18px]" style={{ boxShadow: "0 1px 1px rgba(0,90,108,0.07)" }}>
            {/* Card header */}
            <div className="mb-4 flex items-center gap-[10px]">
              <Image src="/teachai-icon-snapshot.svg" alt="" width={16} height={16} />
              <span className="text-[12.8px] font-bold text-[#005f72]">Lesson Snapshot · Algebra Nov 14</span>
            </div>

            {/* Stat grid */}
            <div className="mb-4 grid grid-cols-2 gap-[10px]">
              {stats.map((s) => (
                <div key={s.label} className="rounded-[8px] border border-[rgba(0,120,144,0.25)] bg-[rgba(0,120,144,0.1)] px-[13px] py-[12px]">
                  <p className="mb-1 text-[10.5px] text-[#6b7f7c]">{s.label}</p>
                  <p className="text-[18px] font-bold leading-[32px]" style={{ color: s.color }}>
                    <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} active={active} />
                  </p>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="mb-4 flex flex-col gap-[10px]">
              {bars.map((bar, i) => (
                <div key={bar.label}>
                  <div className="mb-1 flex justify-between text-[11px]">
                    <span className="text-[#1a2c2a]">{bar.label}</span>
                    <span style={{ color: bar.color }}>{bar.display}</span>
                  </div>
                  <div className="h-[6px] overflow-hidden rounded-full bg-[rgba(0,120,144,0.14)]">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: bar.color }}
                      initial={{ width: "0%" }}
                      animate={active ? { width: `${bar.pct}%` } : { width: "0%" }}
                      transition={{ duration: 1.0, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Insights */}
            <div className="mb-4 flex flex-col gap-[6px]">
              {insights.map((ins, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-[10px] text-[12px] leading-[1.6] text-[#1a2c2a]"
                  initial={{ opacity: 0, x: -6 }}
                  animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                  transition={{ duration: 0.35, delay: 1.0 + i * 0.1 }}
                >
                  <div className="mt-[6px] size-[6px] shrink-0 rounded-[3px]" style={{ backgroundColor: ins.color }} />
                  <span>{ins.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Try Tomorrow */}
            <motion.div
              className="hidden rounded-[14px] border border-[#dce8e6] bg-[#f4f8f7] p-[15px] md:block"
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 1.5 }}
            >
              <div className="mb-[14px] flex items-center gap-[10px]">
                <Image src="/teachai-icon-tomorrow.svg" alt="" width={18} height={18} />
                <span className="text-[12.6px] font-bold text-[#005f72]">Try These Tomorrow · Quick Wins</span>
              </div>
              <div className="grid grid-cols-3 gap-[10px]">
                {tryCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    className="rounded-[10px] border p-[12px]"
                    style={{ backgroundColor: card.bg, borderColor: card.border }}
                    initial={{ opacity: 0, y: 8, scale: 1 }}
                    animate={active ? { opacity: 1, y: 0, scale: activeCard === i ? 1.03 : 1 } : { opacity: 0, y: 8, scale: 1 }}
                    transition={{
                      opacity: { duration: 0.35, delay: 1.65 + i * 0.1 },
                      y: { duration: 0.35, delay: 1.65 + i * 0.1 },
                      scale: { duration: 0.3 },
                    }}
                  >
                    <Image src={card.icon} alt="" width={20} height={20} className="mb-[6px]" />
                    <p className="mb-[4px] text-[11px] font-bold" style={{ color: card.titleColor }}>{card.title}</p>
                    <p className="text-[10px] leading-[1.6] text-[#6b7f7c]">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action chips — hidden on mobile */}
        <div className="hidden gap-[6px] md:flex">
          {actionChips.map((chip, i) => (
            <motion.div
              key={chip.label}
              className="flex cursor-default items-center gap-[6px] rounded-full border border-[#007890] bg-white px-3 py-1.5"
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 2.0 + i * 0.08 }}
            >
              <Image src={chip.icon} alt="" width={14} height={14} />
              <span className="text-[10.5px] font-bold text-[#007890]">{chip.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
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
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_646px] lg:gap-12">
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
                    href="#teachai"
                    className="rounded-lg bg-white px-6 py-3 text-[15px] font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    View Featured Work
                  </a>
                  <a
                    href="#process"
                    className="text-[15px] font-semibold text-white/60 transition-colors hover:text-white"
                  >
                    Read Process →
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
                <HeroUI />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="overflow-hidden border-b border-black/8 bg-white" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <p className="mb-7 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-black/35">
          Clients include
        </p>
        <div className="flex animate-marquee" style={{ willChange: "transform", width: "max-content" }}>
          {[1, 2].map((set) => (
            <div key={set} className="flex shrink-0 items-center">
              {[
                { src: "/logo-1-google.svg",       alt: "Google",       h: "h-9"  }, // 3:1 wordmark
                { src: "/logo-2-amazon.svg",        alt: "Amazon",       h: "h-9", nudge: "translate-y-1" }, // 3:1 wordmark
                { src: "/logo-3-microsoft.svg",     alt: "Microsoft",    h: "h-7"  }, // 4.7:1 long wordmark
                { src: "/logo-4-xbox.svg",           alt: "Xbox",         h: "h-8"  }, // 3.5:1 sphere + type
                { src: "/logo-5-starbucks.svg",     alt: "Starbucks",    h: "h-14" }, // 1:1 dense circular emblem
                { src: "/logo-6-cbs.svg",           alt: "CBS",          h: "h-9"  }, // 3.5:1 eye mark
                { src: "/logo-7-mtv.svg",           alt: "MTV",          h: "h-10" }, // 1.6:1 heavy letterforms
                { src: "/logo-8-rollingstone.svg",  alt: "Rolling Stone", h: "h-7" }, // 5.2:1 wide editorial type
                { src: "/logo-9-realnetworks.svg",  alt: "RealNetworks", h: "h-6"  }, // 9.9:1 very wide wordmark
              ].map((logo) => (
                <div key={logo.alt} className="mx-10 flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className={`${logo.h} w-auto object-contain brightness-0 opacity-[0.38]${"nudge" in logo ? ` ${logo.nudge}` : ""}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Impact bar */}
      <section className="border-b bg-[#f5f5f3]">
        <div className="container py-10 md:py-12">
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
                label: "Orchestration",
                text: (
                  <><strong className="font-bold text-black">AI-assisted</strong> design-to-code pipelines via Claude Code and Storybook</>
                ),
              },
            ].map(({ label, text }) => (
              <StaggerItem key={label}>
                <p className="mb-3 inline-block rounded-full bg-black/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/60">{label}</p>
                <p className="text-[15px] leading-[1.6] text-black/80">{text}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* TeachAI Feature */}
      <section
        id="teachai"
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
                    <TeachAIChips />
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
                    <TeachAIDemoBox />
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
                img: "/parent-scheduling-card.svg",
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
                  {card.comingSoon ? (
                    <div className="block">
                      <Image src={card.img} alt={card.alt} width={448} height={458} className="w-full" />
                    </div>
                  ) : (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-[filter] duration-200 group-hover:brightness-110"
                    >
                      <Image src={card.img} alt={card.alt} width={448} height={458} className="w-full" />
                    </a>
                  )}
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
                    <p className="mb-6 text-[14px] leading-[1.6] text-white/75">{card.desc}</p>
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
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Bio */}
      <section className="border-b bg-[#201e1a]">
        <div className="container py-20 md:py-24">
          <FadeUp>
            <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
              <div className="relative shrink-0 overflow-hidden rounded-full" style={{ width: 280, height: 280 }}>
                <Image
                  src="/shaun-headshot.jpg"
                  alt="Shaun Herron"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 45%" }}
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
                  {`Hey, I'm Shaun! I'm a designer with about 15 years in — mostly focused on design systems and AI-assisted workflows lately. I just wrapped up a stretch deep in EdTech, building tools for teachers, coaches, and school leaders, which I loved. Before that I shipped with teams at Google, Amazon, Microsoft, and others. Right now I'm looking for my next thing — ideally a team that really cares about craft and the people they're building for.`}
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
            <div className="mb-5 flex justify-center">
              <span className="rounded-full border border-black/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/50">
                My Process
              </span>
            </div>
            <h2 className="mb-5 text-center text-[36px] font-extrabold tracking-[-0.02em] text-black md:text-[44px]">
              The Rigor of Craft
            </h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-[15px] leading-[1.7] text-black/50">
              A validated framework for turning ambiguity into clear direction — now accelerated with AI at each step to move faster without lowering the bar.
            </p>
          </FadeUp>

          <div className="mx-auto max-w-4xl">
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
                        <span className="text-[#4F6AF5]">◆</span> AI-Assisted
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
                        <span className="text-[#4F6AF5]">◆</span> AI-Assisted
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
