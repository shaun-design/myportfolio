import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://myportfolio-git-main-shaun-designs-projects.vercel.app";

export const metadata: Metadata = {
  title: "Resume | Shaun Herron",
  description:
    "Resume of Shaun Herron, Senior Product Designer specializing in design systems, SaaS platforms, UX leadership, and AI enabled product design.",
  openGraph: {
    title: "Resume | Shaun Herron",
    description:
      "Resume of Shaun Herron, Senior Product Designer specializing in design systems, SaaS platforms, UX leadership, and AI enabled product design.",
    url: `${siteUrl}/resume`,
    type: "website",
  },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 border-t border-black/10 pt-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black/50">
        {children}
      </p>
    </div>
  );
}

function JobHeader({
  company,
  location,
  dates,
}: {
  company: string;
  location: string;
  dates: string;
}) {
  return (
    <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
      <div className="flex flex-wrap items-baseline gap-x-3">
        <h3 className="text-[20px] font-bold tracking-[-0.01em] text-black">
          {company}
        </h3>
        <span className="text-[14px] text-black/55">{location}</span>
      </div>
      <p
        className="text-[13px] font-medium text-black/50"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {dates}
      </p>
    </div>
  );
}

function Role({
  title,
  dates,
  description,
  bullets,
  impact,
}: {
  title: string;
  dates: string;
  description?: string;
  bullets: string[];
  impact?: string[];
}) {
  return (
    <div>
      <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <h4 className="text-[15px] font-semibold text-black/75">{title}</h4>
        <p
          className="text-[13px] font-medium text-black/50"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {dates}
        </p>
      </div>
      {description && (
        <p className="mb-3 text-[15px] leading-[1.65] text-black/75">
          {description}
        </p>
      )}
      <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-black/70 marker:text-black/30">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {impact && impact.length > 0 && (
        <div className="mt-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-black/50">
            Impact
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-black/70 marker:text-black/30">
            {impact.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ResumePage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-[720px]">
        {/* Header */}
        <header className="mb-16">
          <h1 className="mb-3 text-[56px] font-extrabold leading-[1] tracking-[-0.03em] text-black md:text-[64px]">
            Shaun Herron
          </h1>
          <p className="mb-6 text-[18px] font-medium text-black/70">
            Senior Product Designer — Platform UX, Design Systems &amp; AI
          </p>
          <p className="max-w-[620px] text-[16px] leading-[1.7] text-black/80">
            Senior Product Designer specializing in design systems, complex SaaS
            platforms, and AI-enabled products. Experienced leading product
            design across multi-product platforms and translating complex
            workflows into clear, scalable systems by partnering closely with
            product managers and engineers to balance user needs, business
            goals, and technical realities.
          </p>
        </header>

        {/* Core Skills */}
        <section className="mb-16">
          <SectionEyebrow>Core Skills</SectionEyebrow>
          <dl className="space-y-5">
            {[
              {
                label: "Product Design",
                value:
                  "UX Strategy · Interaction Design · Information Architecture · User Flows · Prototyping · Usability Testing",
              },
              {
                label: "Design Systems",
                value:
                  "Design Tokens · Figma Variables · Component Libraries · Design System Governance",
              },
              {
                label: "Product Platforms",
                value:
                  "SaaS Platforms · Multi-Product Ecosystems · Platform UX · Cross-Product Workflows",
              },
              {
                label: "AI-Assisted Product Design",
                value:
                  "AI-Assisted Design Workflows · Claude Code · Figma Make",
              },
              {
                label: "Tools",
                value: "Figma · Storybook · Token Studio",
              },
            ].map((skill) => (
              <div
                key={skill.label}
                className="grid grid-cols-1 gap-1 md:grid-cols-[200px_1fr] md:gap-6"
              >
                <dt className="text-[14px] font-semibold text-black">
                  {skill.label}
                </dt>
                <dd className="text-[14px] leading-[1.65] text-black/70">
                  {skill.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <SectionEyebrow>Experience</SectionEyebrow>

          <div className="space-y-12">
            {/* TORSH */}
            <div>
              <JobHeader
                company="TORSH, Inc."
                location="Education Technology Platform · New Orleans, LA"
                dates="2016 – 2026"
              />
              <p className="mb-6 text-[15px] leading-[1.65] text-black/75">
                Multi-product professional learning platform used by
                universities, school districts, and early childhood
                organizations to support educator coaching and professional
                development.
              </p>

              <div className="space-y-8 border-l border-black/10 pl-5">
                <Role
                  title="Director, Product Design & Design Systems"
                  dates="2018 – 2026"
                  description="Responsible for UX and product design across a multi-product SaaS platform supporting educator coaching, professional learning, and evaluation systems used by universities and school districts."
                  bullets={[
                    "Led product design for a platform used by thousands of educators across ~250 schools and universities.",
                    "Designed core platform products including a learning management system, mobile video reflection tools, coaching platforms, and observation systems.",
                    "Built and maintained a scalable design system with ~120 components and ~500 Figma variables supporting consistent UI development across products.",
                    "Partnered with engineering teams to translate design components into React components documented in Storybook.",
                    "Designed AI-assisted coaching workflows that analyze educator artifacts (lesson plans, classroom video, observation data) to generate personalized professional development recommendations.",
                    "Managed and mentored designers while remaining deeply hands-on in product design.",
                  ]}
                  impact={[
                    "Platform adopted by universities including Johns Hopkins and Harvard and school districts across the United States.",
                    "Designed tools used daily by teachers, instructional coaches, and school leaders to support professional learning and improve teaching practice.",
                  ]}
                />

                <Role
                  title="Senior Product Designer"
                  dates="2016 – 2018"
                  bullets={[
                    "Led UX and UI design for core platform products supporting educator coaching and evaluation workflows.",
                    "Designed a mobile video reflection app enabling teachers to record classroom sessions and receive coaching feedback.",
                    "Designed authoring tools enabling instructional designers to create and distribute professional development courses.",
                    "Designed data collection systems enabling school leaders to create observation and evaluation forms.",
                  ]}
                />
              </div>
            </div>

            {/* Keepe */}
            <div>
              <JobHeader
                company="Keepe"
                location="Startup · Seattle, WA"
                dates="2014 – 2017"
              />
              <p className="mb-2 text-[15px] font-semibold text-black/75">
                Lead / Senior Product Designer (Part-Time / Early Team)
              </p>
              <p className="mb-4 text-[15px] leading-[1.65] text-black/75">
                Mobile marketplace platform connecting property owners, property
                managers, and service technicians for home and property
                maintenance.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-black/70 marker:text-black/30">
                <li>
                  Led product design for three mobile apps and one web platform
                  supporting a multi-sided marketplace.
                </li>
                <li>
                  Designed service request workflows allowing users to
                  photograph repair issues, receive estimates, schedule
                  repairs, and rate service providers.
                </li>
                <li>
                  Designed mobile workflows for field technicians and property
                  managers including job management and scheduling.
                </li>
              </ul>
            </div>

            {/* RealNetworks */}
            <div>
              <JobHeader
                company="RealNetworks"
                location="Seattle, WA"
                dates="2005 – 2015"
              />
              <p className="mb-4 text-[15px] font-semibold text-black/75">
                Director of Product Design
              </p>
              <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-black/70 marker:text-black/30">
                <li>
                  Led a team of 10 product and marketing designers supporting
                  consumer streaming products.
                </li>
                <li>
                  Directed design for RealPlayer and RealTimes products across
                  multiple distribution channels.
                </li>
              </ul>
            </div>

            {/* Microsoft */}
            <div>
              <JobHeader
                company="Microsoft"
                location="Filter Talent · Redmond, WA"
                dates="2003 – 2005"
              />
              <p className="mb-4 text-[15px] font-semibold text-black/75">
                Senior Designer
              </p>
              <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-black/70 marker:text-black/30">
                <li>
                  Senior Visual Designer for Microsoft.com collaborating with
                  product managers and creative teams on digital experiences.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionEyebrow>Education</SectionEyebrow>
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-[18px] font-bold tracking-[-0.01em] text-black">
                Bellevue College
              </h3>
              <span className="text-[14px] text-black/55">Bellevue, WA</span>
            </div>
            <p className="text-[13px] font-medium text-black/50">
              Associate of Arts and Sciences
            </p>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
