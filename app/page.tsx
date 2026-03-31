import { Section } from "@/components/layout/section";

export default function HomePage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Shaun Herron
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Senior Product Designer
          </h2>
          <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
            I design thoughtful software that helps people do meaningful work.
          </p>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              My focus is turning complex systems into clear, understandable
              experiences. I care about products that are useful, calm to use,
              and built to last.
            </p>
            <p>
              Over the past several years I&apos;ve worked on large-scale software
              used by thousands of educators, coaches, and school leaders. My
              work has included product design, design systems, and
              AI-assisted tools that help professionals reflect on and improve
              their practice.
            </p>
            <p>
              I enjoy working at the intersection of product thinking, design
              systems, and close collaboration with engineers to create
              software that works well for both users and development teams.
            </p>

            <h3>What I Bring to a Team</h3>
            <p>
              I enjoy working through complex problems and finding the simplest
              path forward. I take time to understand what people are really
              trying to accomplish so the solution solves the right problem.
            </p>
            <p>
              Strong products come from close collaboration between design and
              product leadership. I work closely with product managers and
              product owners to clarify problems, shape solutions, and ensure
              the work supports both user needs and business goals.
            </p>
            <p>
              I look for patterns across a product so the experience feels
              consistent and easy to learn. Building strong design systems
              helps teams move faster and keeps products from becoming
              fragmented as they grow.
            </p>
            <p>
              I believe good software should feel calm and understandable.
              Interfaces should guide people naturally instead of forcing them
              to figure things out.
            </p>

            <h3>How I Approach Product Design</h3>
            <p>
              Before designing anything, I try to understand what people are
              actually trying to accomplish. Sometimes the request for a
              feature is only a symptom of a deeper need. Taking the time to
              understand the real problem leads to better solutions.
            </p>
            <p>
              Many products become difficult to use because complexity is
              pushed onto the user. I try to move that complexity into the
              system so the interface remains clear and understandable.
            </p>
            <p>
              Design works best when designers, product managers, and engineers
              shape solutions together. I enjoy collaborating early and often
              so ideas can evolve into solutions that are thoughtful, practical
              to build, and aligned with the product vision.
            </p>

            <h3>Selected Experience</h3>
            <p>
              I&apos;ve worked on large web platforms used by educators,
              instructional coaches, and school leaders to support teaching
              practice and professional growth, with a focus on clarifying
              complex workflows, building scalable systems, and designing
              AI-assisted tools that support better outcomes.
            </p>

            <h3>Top Skills</h3>
            <p>
              Product Design, UX Design, Design Systems, Interaction Design,
              Product Strategy, User Research, Information Architecture,
              Prototyping, Figma, Design Tokens, Component Libraries, and
              AI Product Design.
            </p>
          </div>
        </div>
      </Section>

    </>
  );
}
