import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { WorkCard } from "@/components/work-card";
import { getAllWork } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Work",
  description: "A collection of projects and case studies.",
};

export default function WorkPage() {
  const work = getAllWork();

  return (
    <PageContainer>
      <div className="mb-10">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Work</h1>
        <p className="text-xl text-muted-foreground">
          A selection of projects, case studies, and things I&apos;ve built.
        </p>
      </div>

      {work.length === 0 ? (
        <p className="text-muted-foreground">
          No case studies yet. Check back soon!
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {work.map((item) => (
            <WorkCard key={item.slug} work={item} />
          ))}
        </div>
      )}
    </PageContainer>
  );
}
