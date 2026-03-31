import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on design, development, and building products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageContainer>
      <div className="mb-10">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Thoughts on design, development, and building products.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </PageContainer>
  );
}
