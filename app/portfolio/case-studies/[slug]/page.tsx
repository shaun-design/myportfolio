import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/layout/page-container";
import { MdxContent } from "@/components/mdx-content";
import { getAllPortfolio, getPortfolioBySlug } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPortfolio().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return {};
  return { title: item.title, description: item.description };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) notFound();

  return (
    <PageContainer>
      <Button asChild variant="ghost" className="mb-8 -ml-3">
        <Link href="/portfolio">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </Button>

      <article className="max-w-2xl">
        <header className="mb-10">
          <p className="mb-3 text-sm text-muted-foreground">{item.date}</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            {item.title}
          </h1>
          <p className="mb-5 text-xl text-muted-foreground">
            {item.description}
          </p>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          {item.url && (
            <div className="mt-6">
              <Button asChild>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </header>

        <MdxContent source={item.content} />
      </article>
    </PageContainer>
  );
}
