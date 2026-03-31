import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/layout/section";
import { PostCard } from "@/components/post-card";
import { WorkCard } from "@/components/work-card";
import { getAllPosts, getAllWork } from "@/lib/mdx";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);
  const featuredWork = getAllWork()
    .filter((w) => w.featured)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden border-b">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 -z-10 h-[700px] w-[700px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-bl from-muted to-transparent blur-3xl"
        />

        <div className="container py-24">
          {/* Availability badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Available for new projects
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl lg:leading-[1.08]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>

          <p className="mb-10 max-w-xl text-xl text-muted-foreground leading-relaxed">
            I design and build thoughtful digital products — from early-stage
            concepts to production-ready interfaces.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/work">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      {featuredWork.length > 0 && (
        <Section>
          <SectionHeader
            title="Featured Work"
            description="A selection of recent projects and case studies."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredWork.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/work">
                All Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      )}

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <Section>
          <SectionHeader
            title="Recent Posts"
            description="Thoughts on design, development, and building products."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/blog">
                All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      )}
    </>
  );
}
