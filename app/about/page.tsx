import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "About",
  description: "I design thoughtful software that helps people do meaningful work.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Shaun Herron
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Senior Product Designer
        </h1>
        <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
          I design thoughtful software that helps people do meaningful work.
        </p>

        <div className="prose prose-zinc dark:prose-invert">
          <p>
            My focus is turning complex systems into clear, understandable
            experiences. I care about products that are useful, calm to use,
            and built to last.
          </p>
          <p>
            Over the past several years I&apos;ve worked on large-scale software
            used by thousands of educators, coaches, and school leaders. My work
            has included product design, design systems, and AI-assisted tools
            that help professionals reflect on and improve their practice.
          </p>
          <p>
            I enjoy working at the intersection of product thinking, design
            systems, and close collaboration with engineers to create software
            that works well for both users and development teams.
          </p>

          <h2>What I Bring to a Team</h2>
          <h3>Clear Thinking</h3>
          <p>
            I enjoy working through complex problems and finding the simplest
            path forward. I take time to understand what people are really
            trying to accomplish so the solution solves the right problem.
          </p>

          <h3>Product Partnership</h3>
          <p>
            Strong products come from close collaboration between design and
            product leadership. I work closely with product managers and product
            owners to clarify problems, shape solutions, and ensure the work
            supports both user needs and business goals.
          </p>

          <h3>Systems Thinking</h3>
          <p>
            I look for patterns across a product so the experience feels
            consistent and easy to learn. Building strong design systems helps
            teams move faster and keeps products from becoming fragmented as
            they grow.
          </p>

          <h3>Calm, Practical Design</h3>
          <p>
            I believe good software should feel calm and understandable.
            Interfaces should guide people naturally instead of forcing them to
            figure things out.
          </p>

          <h3>Cross-Functional Collaboration</h3>
          <p>
            Good design happens through collaboration. I enjoy working with
            product, engineering, and other partners to shape solutions that
            are thoughtful, practical to build, and aligned with the direction
            of the product.
          </p>

          <h3>Long-Term Product Thinking</h3>
          <p>
            I try to design solutions that not only solve today&apos;s problem but
            also support where the product may go in the future.
          </p>

          <h2>How I Approach Product Design</h2>
          <h3>Start with the real problem</h3>
          <p>
            Before designing anything, I try to understand what people are
            actually trying to accomplish. Sometimes the request for a feature
            is only a symptom of a deeper need. Taking the time to understand
            the real problem leads to better solutions.
          </p>

          <h3>Make complex things feel simple</h3>
          <p>
            Many products become difficult to use because complexity is pushed
            onto the user. I try to move that complexity into the system so the
            interface remains clear and understandable.
          </p>

          <h3>Think in systems, not just screens</h3>
          <p>
            Individual screens matter, but the experience of a product is
            created by the patterns that repeat across it. I look for ways to
            create consistent structures and components that help the product
            grow without becoming confusing.
          </p>

          <h3>Work closely with product and engineering</h3>
          <p>
            Design works best when designers, product managers, and engineers
            shape solutions together. I enjoy collaborating early and often so
            ideas can evolve into solutions that are thoughtful, practical to
            build, and aligned with the product vision.
          </p>

          <h3>Design for the long term</h3>
          <p>
            Products grow and change over time. I try to design solutions that
            not only solve the current problem but also support where the
            product may go next.
          </p>

          <h2>Selected Experience</h2>
          <h3>Senior Product Designer</h3>
          <p>
            <strong>Education Technology Platform</strong>
          </p>
          <p>
            I worked on a large web platform used by educators, instructional
            coaches, and school leaders to support teaching practice and
            professional growth.
          </p>
          <p>
            My work focused on improving the clarity and usability of complex
            workflows used by thousands of users across hundreds of schools.
          </p>
          <p>
            <strong>Key contributions included:</strong>
          </p>
          <ul>
            <li>
              Designing and maintaining a scalable design system with more than
              100 components and hundreds of design variables
            </li>
            <li>
              Simplifying complex product workflows used by educators and
              coaches
            </li>
            <li>
              Designing AI-assisted tools that helped educators improve student
              outcomes
            </li>
            <li>
              Partnering closely with product managers and engineering to bring
              ideas from concept to implementation
            </li>
            <li>
              Supporting a small design team and helping establish consistent
              patterns across the product
            </li>
          </ul>

          <h2>Strengths</h2>
          <p>
            <strong>I&apos;m especially interested in working on products that involve:</strong>
          </p>
          <ul>
            <li>complex platforms and workflows</li>
            <li>thoughtful design systems</li>
            <li>tools that help people learn, teach, or do meaningful work</li>
            <li>
              emerging AI-assisted tools that support human decision making
            </li>
          </ul>

          <h2>Top Skills</h2>
          <ul>
            <li>Product Design</li>
            <li>UX Design</li>
            <li>Design Systems</li>
            <li>Interaction Design</li>
            <li>User Experience Strategy</li>
            <li>Product Strategy</li>
            <li>User Research</li>
            <li>Information Architecture</li>
            <li>Prototyping</li>
            <li>Figma</li>
            <li>Figma Make</li>
            <li>Design Tokens / Variables</li>
            <li>Component Libraries</li>
            <li>Usability Testing</li>
            <li>Cross-functional Collaboration</li>
            <li>AI Product Design</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  );
}
