import type { Metadata } from "next";
import {
  Boxes,
  ChevronsRight,
  Component,
  Handshake,
  Sparkles,
  University,
} from "lucide-react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://myportfolio-git-main-shaun-designs-projects.vercel.app";

export const metadata: Metadata = {
  title: "Shaun Herron | Senior Product Designer",
  description:
    "Senior Product Designer with deep experience in design systems, SaaS UX, product strategy, and AI enabled experiences.",
  openGraph: {
    title: "Shaun Herron | Senior Product Designer",
    description:
      "Senior Product Designer with deep experience in design systems, SaaS UX, product strategy, and AI enabled experiences.",
    url: siteUrl,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <section
        className="flex min-h-[75vh] items-center border-b text-white"
        style={{
          backgroundColor: "#2651A6",
          backgroundImage:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 60%)",
        }}
      >
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl -translate-y-[20%] text-center">
            <Component className="mx-auto mb-6 h-10 w-10 text-white/30" />
            <h1 className="mb-3 text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[48px]">
              Shaun Herron
            </h1>
            <p className="mb-8 inline-flex rounded-full bg-white/10 px-4 py-2 text-[14px] font-normal uppercase leading-[1.6] tracking-[0.2em] text-white/80">
              Senior Product Designer
            </p>
            <p className="mx-auto mb-3 max-w-[640px] text-[18px] font-normal leading-[1.5] text-white/90 md:text-[20px]">
              I design scalable systems and AI-enabled products that turn
              complex workflows into clear, usable experiences.
            </p>
            <p className="mx-auto mt-4 max-w-[640px] text-[18px] font-normal leading-[1.5] text-white/90 md:text-[20px]">
              <span className="whitespace-nowrap">
                20+ years designing SaaS platforms
              </span>{" "}
              <span className="whitespace-nowrap">• Design systems leadership</span>{" "}
              <span className="whitespace-nowrap">• AI-assisted product design</span>
            </p>
          </div>
        </div>
      </section>

      <section
        className="flex min-h-[25vh] items-center border-b"
        style={{ backgroundColor: "#D9D9D9" }}
      >
        <div className="container py-20 md:py-28">
          <div>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
              IMPACT
            </h2>
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground">
                <Boxes className="mx-auto mb-5 h-6 w-6 text-[#2D61A6]" />
                Built and led a design system with 120+ reusable components and
                500+ tokens
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground">
                <University className="mx-auto mb-5 h-6 w-6 text-[#2D61A6]" />
                Designed products used across 250+ schools and thousands of
                educators
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground">
                <Sparkles className="mx-auto mb-5 h-6 w-6 text-[#2D61A6]" />
                Created AI-assisted coaching workflows to improve feedback and
                development cycles
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground">
                <Handshake className="mx-auto mb-5 h-6 w-6 text-[#2D61A6]" />
                Partnered closely with product and engineering to ship scalable
                React-based systems
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="border-b"
        style={{ backgroundColor: "#090740" }}
      >
        <div className="container py-20 md:py-28">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-white">
            SELECTED WORK
          </h2>
          <div className="flex justify-center">
            <div className="grid gap-6 lg:grid-cols-2 max-w-4xl w-full">
            <article className="overflow-hidden rounded-2xl bg-card text-card-foreground">
              <div className="relative h-48 border-b bg-[#5A2470]">
                <div className="absolute inset-x-6 bottom-6">
                  <p className="m-0 mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                    AI-Powered Coaching Platform
                  </p>
                  <h3 className="m-0 text-2xl font-semibold text-white">
                    TeachAI
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-14 pt-6 text-center">
                <p className="m-0 text-base leading-7 text-muted-foreground">
                  AI-powered coaching platform that helps teachers improve
                  through structured feedback and actionable insights
                </p>
                <a href="https://teachai.simpleshaun.com" target="_blank" rel="noopener noreferrer" className="m-0 mt-5 inline-flex items-center gap-1 rounded-full bg-[#2D61A6]/10 px-4 py-2 text-sm font-medium text-[#2D61A6] hover:bg-[#2D61A6]/20 transition-colors">
                  View Case Study <ChevronsRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl bg-card text-card-foreground">
              <div className="relative h-48 border-b bg-[#F26F63]">
                <div className="absolute inset-x-6 bottom-6">
                  <p className="m-0 mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                    Scalable Multi-Product System
                  </p>
                  <h3 className="m-0 text-2xl font-semibold text-white">
                    Design System
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-14 pt-6 text-center">
                <p className="m-0 text-base leading-7 text-muted-foreground">
                  Scalable design system built with tokens, MUI, and Storybook to ensure consistency and accelerate development across the product
                </p>
                <a href="https://designsystem.simpleshaun.com" target="_blank" rel="noopener noreferrer" className="m-0 mt-5 inline-flex items-center gap-1 rounded-full bg-[#2D61A6]/10 px-4 py-2 text-sm font-medium text-[#2D61A6] hover:bg-[#2D61A6]/20 transition-colors">
                  View Case Study <ChevronsRight className="h-4 w-4" />
                </a>
              </div>
            </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex min-h-[25vh] items-center border-b"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container py-20 md:py-28">
          <div>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
              HOW I DESIGN
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
              Design thinking is how I turn ambiguity into clear, validated direction. It keeps teams focused on the right problem, explores multiple solutions, and ensures what we build delivers real value.
            </p>
            <ul className="grid gap-4 md:grid-cols-3">
              <li className="rounded-xl px-5 pb-8 pt-10 text-left text-sm text-foreground" style={{ backgroundColor: "#EEF3FD" }}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0F4ABF]">Understand</p>
                <h3 className="mb-2 font-semibold text-base">1. Empathize</h3>
                <p className="mb-4 text-xs italic text-muted-foreground">Know your user</p>
                <p className="mb-4 text-muted-foreground">
                  Understand who you're designing for before solving anything.
                </p>
                <p className="mb-2 font-semibold text-xs">Ask:</p>
                <ul className="mb-4 space-y-1 text-xs text-muted-foreground">
                  <li>• Who are they and what matters to them?</li>
                  <li>• Where do they struggle?</li>
                </ul>
                <p className="mb-2 font-semibold text-xs">How:</p>
                <p className="text-xs text-muted-foreground">Interviews, personas, journey maps</p>
              </li>
              <li className="rounded-xl px-5 pb-8 pt-10 text-left text-sm text-foreground" style={{ backgroundColor: "#EDF5FD" }}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1E82D9]">Understand</p>
                <h3 className="mb-2 font-semibold text-base">2. Define</h3>
                <p className="mb-4 text-xs italic text-muted-foreground">Clarify the problem</p>
                <p className="mb-4 text-muted-foreground">
                  Turn insights into a clear, focused problem.
                </p>
                <p className="mb-2 font-semibold text-xs">Ask:</p>
                <ul className="mb-4 space-y-1 text-xs text-muted-foreground">
                  <li>• What problem are we solving?</li>
                  <li>• What does success look like?</li>
                </ul>
                <p className="mb-2 font-semibold text-xs">How:</p>
                <p className="text-xs text-muted-foreground">Problem statement, brief, KPIs</p>
              </li>
              <li className="rounded-xl px-5 pb-8 pt-10 text-left text-sm text-foreground" style={{ backgroundColor: "#EDF7F2" }}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#2E7D5B]">Explore</p>
                <h3 className="mb-2 font-semibold text-base">3. Ideate</h3>
                <p className="mb-4 text-xs italic text-muted-foreground">Explore options</p>
                <p className="mb-4 text-muted-foreground">
                  Generate a range of possible solutions.
                </p>
                <p className="mb-2 font-semibold text-xs">Ask:</p>
                <ul className="mb-4 space-y-1 text-xs text-muted-foreground">
                  <li>• What are all the ways to solve this?</li>
                  <li>• What can we learn from existing solutions?</li>
                </ul>
                <p className="mb-2 font-semibold text-xs">How:</p>
                <p className="text-xs text-muted-foreground">Brainstorming, sketching, research</p>
              </li>
              <li className="rounded-xl px-5 pb-8 pt-10 text-left text-sm text-foreground" style={{ backgroundColor: "#EDF7F2" }}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#296F51]">Explore</p>
                <h3 className="mb-2 font-semibold text-base">4. Prototype</h3>
                <p className="mb-4 text-xs italic text-muted-foreground">Make it real</p>
                <p className="mb-4 text-muted-foreground">
                  Create something quick and testable.
                </p>
                <p className="mb-2 font-semibold text-xs">Ask:</p>
                <ul className="mb-4 space-y-1 text-xs text-muted-foreground">
                  <li>• What's the simplest version we can test?</li>
                  <li>• Is it clear enough to interact with?</li>
                </ul>
                <p className="mb-2 font-semibold text-xs">How:</p>
                <p className="text-xs text-muted-foreground">Wireframes, low fidelity prototypes</p>
              </li>
              <li className="rounded-xl px-5 pb-8 pt-10 text-left text-sm text-foreground" style={{ backgroundColor: "#FDF6E9" }}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#B58629]">Materialize</p>
                <h3 className="mb-2 font-semibold text-base">5. Test</h3>
                <p className="mb-4 text-xs italic text-muted-foreground">Learn from users</p>
                <p className="mb-4 text-muted-foreground">
                  Observe real interactions and gather feedback.
                </p>
                <p className="mb-2 font-semibold text-xs">Ask:</p>
                <ul className="mb-4 space-y-1 text-xs text-muted-foreground">
                  <li>• Where did users struggle?</li>
                  <li>• What should we improve?</li>
                </ul>
                <p className="mb-2 font-semibold text-xs">How:</p>
                <p className="text-xs text-muted-foreground">Usability testing, observation</p>
              </li>
              <li className="rounded-xl px-5 pb-8 pt-10 text-left text-sm text-foreground" style={{ backgroundColor: "#FDF6E9" }}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#B58629]">Materialize</p>
                <h3 className="mb-2 font-semibold text-base">6. Implement</h3>
                <p className="mb-4 text-xs italic text-muted-foreground">Ship it</p>
                <p className="mb-4 text-muted-foreground">
                  Deliver a solution that can be built and used.
                </p>
                <p className="mb-2 font-semibold text-xs">Ask:</p>
                <ul className="mb-4 space-y-1 text-xs text-muted-foreground">
                  <li>• Can the team build this clearly?</li>
                  <li>• Does it improve the experience?</li>
                </ul>
                <p className="mb-2 font-semibold text-xs">How:</p>
                <p className="text-xs text-muted-foreground">High fidelity designs, specs</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}
