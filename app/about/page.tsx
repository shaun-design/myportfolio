import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my background, and what I do.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">About Me</h1>
        <p className="mb-10 text-xl text-muted-foreground">
          A little about who I am and what drives me.
        </p>

        <div className="prose prose-zinc dark:prose-invert">
          <p>
            Hi! I&apos;m a designer and developer based in [City, Country]. I
            specialize in building clean, thoughtful digital experiences — from
            early-stage product design to production-ready code.
          </p>
          <p>
            I&apos;ve worked with startups and agencies across industries
            including SaaS, fintech, and consumer apps. I care deeply about
            craft, simplicity, and shipping things that are both useful and
            beautiful.
          </p>

          <h2>Skills &amp; Tools</h2>
          <ul>
            <li>Design: Figma, user research, interaction design, design systems</li>
            <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
            <li>Backend: Node.js, REST APIs, PostgreSQL</li>
          </ul>

          <h2>Currently</h2>
          <p>
            I&apos;m available for full-time and freelance opportunities. If you
            have an interesting project or role, I&apos;d love to hear about it.
          </p>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
