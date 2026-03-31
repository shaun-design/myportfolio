import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Shaun Herron, Senior Product Designer.",
};

export default function ResumePage() {
  return (
    <PageContainer>
      <div className="max-w-4xl">
        <header className="mb-12 space-y-3">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Shaun Herron
          </h1>
          <p className="text-xl text-muted-foreground">
            Senior Product Designer - Design Systems &amp; Platform UX
          </p>
          <p className="text-sm text-muted-foreground">
            Complex SaaS Products • Design Tokens • Component Libraries •
            AI-Enabled Platforms
          </p>
          <p className="max-w-3xl text-base text-foreground">
            Senior Product Designer specializing in design systems, complex SaaS
            platforms, and AI-enabled products. Experienced leading product
            design across multi-product platforms and translating complex
            workflows into clear, scalable systems by partnering closely with
            product managers and engineers to balance user needs, business
            goals, and technical realities.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Core Skills
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Product Design</h3>
              <p className="text-muted-foreground">
                UX Strategy • Interaction Design • Information Architecture •
                User Flows • Prototyping • Usability Testing
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Design Systems</h3>
              <p className="text-muted-foreground">
                Design Tokens • Figma Variables • Component Libraries • Design
                System Governance
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Product Platforms</h3>
              <p className="text-muted-foreground">
                SaaS Platforms • Multi-Product Ecosystems • Platform UX •
                Cross-Product Workflows
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">AI-Assisted Product Design</h3>
              <p className="text-muted-foreground">
                AI-Assisted Design Workflows • Claude • Figma Make
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Tools</h3>
              <p className="text-muted-foreground">
                Figma • Storybook • Token Studio
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Professional Experience
          </h2>

          <div className="space-y-10">
            <section>
              <h3 className="text-xl font-semibold">
                TORSH, Inc. - Education Technology Platform
              </h3>
              <p className="text-sm text-muted-foreground">
                New Orleans, LA
              </p>
              <p className="mb-3 text-sm text-muted-foreground">2016 – 2026</p>
              <p className="mb-4 text-muted-foreground">
                Multi-product professional learning platform used by
                universities, school districts, and early childhood
                organizations to support educator coaching and professional
                development.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">
                    Director, Product Design &amp; Design Systems
                  </h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    2018 – 2026
                  </p>
                  <p className="mb-3 text-muted-foreground">
                    Responsible for UX and product design across a multi-product
                    SaaS platform supporting educator coaching, professional
                    learning, and evaluation systems used by universities and
                    school districts.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>
                      Led product design for a platform used by thousands of
                      educators across ~250 schools and universities.
                    </li>
                    <li>
                      Designed core platform products including a learning
                      management system, mobile video reflection tools, coaching
                      platforms, and observation systems.
                    </li>
                    <li>
                      Built and maintained a scalable design system with ~120
                      components and ~500 Figma variables supporting consistent
                      UI development across products.
                    </li>
                    <li>
                      Partnered with engineering teams to translate design
                      components into React components documented in Storybook.
                    </li>
                    <li>
                      Designed AI-assisted coaching workflows that analyze
                      educator artifacts (lesson plans, classroom video,
                      observation data) to generate personalized professional
                      development recommendations.
                    </li>
                    <li>
                      Managed and mentored designers while remaining deeply
                      hands-on in product design.
                    </li>
                  </ul>

                  <h4 className="mt-5 text-base font-semibold">Impact</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>
                      Platform adopted by universities including Johns Hopkins
                      and Harvard and school districts across the United States.
                    </li>
                    <li>
                      Designed tools used daily by teachers, instructional
                      coaches, and school leaders to support professional
                      learning and improve teaching practice.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    Senior Product Designer
                  </h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    2016 – 2018
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>
                      Led UX and UI design for core platform products supporting
                      educator coaching and evaluation workflows.
                    </li>
                    <li>
                      Designed a mobile video reflection app enabling teachers
                      to record classroom sessions and receive coaching
                      feedback.
                    </li>
                    <li>
                      Designed authoring tools enabling instructional designers
                      to create and distribute professional development courses.
                    </li>
                    <li>
                      Designed data collection systems enabling school leaders
                      to create observation and evaluation forms.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold">
                Lead / Senior Product Designer (Part-Time / Early Team)
              </h3>
              <p className="text-muted-foreground">
                Keepe (Startup) - Seattle, WA
              </p>
              <p className="mb-3 text-sm text-muted-foreground">2014 – 2017</p>
              <p className="mb-3 text-muted-foreground">
                Mobile marketplace platform connecting property owners, property
                managers, and service technicians for home and property
                maintenance.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  Led product design for three mobile apps and one web platform
                  supporting a multi-sided marketplace.
                </li>
                <li>
                  Designed service request workflows allowing users to
                  photograph repair issues, receive estimates, schedule repairs,
                  and rate service providers.
                </li>
                <li>
                  Designed mobile workflows for field technicians and property
                  managers including job management and scheduling.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold">
                Director of Product Design
              </h3>
              <p className="text-muted-foreground">
                RealNetworks - Seattle, WA
              </p>
              <p className="mb-3 text-sm text-muted-foreground">2005 – 2015</p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  Led a team of 10 product and marketing designers supporting
                  consumer streaming products.
                </li>
                <li>
                  Directed design for RealPlayer and RealTimes products across
                  multiple distribution channels.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold">Senior Designer</h3>
              <p className="text-muted-foreground">
                Microsoft (Filter Talent) - Redmond, WA
              </p>
              <p className="mb-3 text-sm text-muted-foreground">2003 – 2005</p>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>
                  Senior Visual Designer for Microsoft.com collaborating with
                  product managers and creative teams on digital experiences.
                </li>
              </ul>
            </section>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Education
          </h2>
          <h3 className="text-lg font-semibold">
            Associate of Arts and Sciences
          </h3>
          <p className="text-muted-foreground">
            Bellevue College - Bellevue, WA
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
