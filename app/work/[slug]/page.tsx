import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/layout/page-container";
import { MdxContent } from "@/components/mdx-content";
import { getAllWork, getWorkBySlug } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllWork().map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return { title: work.title, description: work.description };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <PageContainer>
      <Button asChild variant="ghost" className="mb-8 -ml-3">
        <Link href="/work">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Work
        </Link>
      </Button>

      <article className="max-w-2xl">
        <header className="mb-10">
          <p className="mb-3 text-sm text-muted-foreground">{work.date}</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            {work.title}
          </h1>
          <p className="mb-5 text-xl text-muted-foreground">
            {work.description}
          </p>
          {work.tags && work.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <MdxContent source={work.content} />
      </article>
    </PageContainer>
  );
}
