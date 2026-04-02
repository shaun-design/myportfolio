import {
  Boxes,
  ChevronsRight,
  Component,
  Handshake,
  Sparkles,
  University,
} from "lucide-react";

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
        <div className="container py-12 md:py-16">
          <div>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
              IMPACT
            </h2>
            <ul className="grid gap-4 pb-12 md:grid-cols-2 xl:grid-cols-4">
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground shadow-md shadow-black/5">
                <Boxes className="mx-auto mb-5 h-6 w-6 text-[#2D61A6]" />
                Built and led a design system with 120+ reusable components and
                500+ tokens
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground shadow-md shadow-black/5">
                <University className="mx-auto mb-5 h-6 w-6 text-[#2D61A6]" />
                Designed products used across 250+ schools and thousands of
                educators
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground shadow-md shadow-black/5">
                <Sparkles className="mx-auto mb-5 h-6 w-6 text-[#2D61A6]" />
                Created AI-assisted coaching workflows to improve feedback and
                development cycles
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground shadow-md shadow-black/5">
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
        <div className="container py-28 md:py-36">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-white">
            SELECTED WORK
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
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
                <p className="m-0 mt-5 inline-flex items-center gap-1 rounded-full bg-[#2D61A6]/10 px-4 py-2 text-sm font-medium text-[#2D61A6]">
                  View Case Study <ChevronsRight className="h-4 w-4" />
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl bg-card text-card-foreground">
              <div className="relative h-48 border-b bg-[#F26F63]">
                <div className="absolute inset-x-6 bottom-6">
                  <p className="m-0 mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/75">
                    Professional Learning System
                  </p>
                  <h3 className="m-0 text-2xl font-semibold text-white">
                    TORSH Platform
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-14 pt-6 text-center">
                <p className="m-0 text-base leading-7 text-muted-foreground">
                  End-to-end professional learning system for educators
                  including video coaching, evaluations, and LMS tools
                </p>
                <p className="m-0 mt-5 inline-flex items-center gap-1 rounded-full bg-[#2D61A6]/10 px-4 py-2 text-sm font-medium text-[#2D61A6]">
                  View Case Study <ChevronsRight className="h-4 w-4" />
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl bg-card text-card-foreground">
              <div className="relative h-48 border-b bg-[#0F4ABF]">
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
                  Scalable design system built with tokens, MUI, and Storybook
                  to support multi-product consistency
                </p>
                <p className="m-0 mt-5 inline-flex items-center gap-1 rounded-full bg-[#2D61A6]/10 px-4 py-2 text-sm font-medium text-[#2D61A6]">
                  View Case Study <ChevronsRight className="h-4 w-4" />
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="flex min-h-[25vh] items-center border-b"
        style={{ backgroundColor: "#D9D9D9" }}
      >
        <div className="container py-12 md:py-16">
          <div>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
              How I Work
            </h2>
            <ul className="grid gap-4 pb-12 md:grid-cols-2 xl:grid-cols-4">
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground shadow-md shadow-black/5">
                I define the problem before designing the solution
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground shadow-md shadow-black/5">
                I align product, design, and engineering early to reduce rework
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground shadow-md shadow-black/5">
                I design systems that scale across teams, not just individual
                screens
              </li>
              <li className="rounded-xl border border-black/10 bg-white px-5 pb-14 pt-10 text-center text-base text-foreground shadow-md shadow-black/5">
                I use AI as a tool to accelerate thinking, not replace it
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}
