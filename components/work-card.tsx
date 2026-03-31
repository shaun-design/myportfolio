import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { WorkMeta } from "@/lib/mdx";

interface WorkCardProps {
  work: WorkMeta;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={`/work/${work.slug}`} className="group block h-full">
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <p className="mb-1 text-xs text-muted-foreground">{work.date}</p>
          <CardTitle className="text-xl group-hover:text-primary/80 transition-colors">
            {work.title}
          </CardTitle>
          <CardDescription>{work.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {work.tags && work.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {work.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all">
            View case study <ArrowRight className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
