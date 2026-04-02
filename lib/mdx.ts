import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  coverImage?: string;
}

export interface WorkMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  coverImage?: string;
  featured?: boolean;
  url?: string;
}

export interface Post extends PostMeta {
  content: string;
}

export interface Work extends WorkMeta {
  content: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getMdxFiles(dir: string): string[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).filter((f) => f.endsWith(".mdx"));
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export function getAllPosts(): PostMeta[] {
  return getMdxFiles("blog")
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(contentDir, "blog", file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        coverImage: data.coverImage,
      } satisfies PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(contentDir, "blog", `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    coverImage: data.coverImage,
    content,
  };
}

// ─── Work (Legacy) ────────────────────────────────────────────────────────────

export function getAllWork(): WorkMeta[] {
  return getAllPortfolio();
}

export function getWorkBySlug(slug: string): Work | null {
  return getPortfolioBySlug(slug);
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

export function getAllPortfolio(): WorkMeta[] {
  return getMdxFiles("portfolio")
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(contentDir, "portfolio", file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        coverImage: data.coverImage,
        featured: data.featured ?? false,
        url: data.url,
      } satisfies WorkMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPortfolioBySlug(slug: string): Work | null {
  const fullPath = path.join(contentDir, "portfolio", `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    coverImage: data.coverImage,
    featured: data.featured ?? false,
    url: data.url,
    content,
  };
}
