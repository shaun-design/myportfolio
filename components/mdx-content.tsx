import { MDXRemote } from "next-mdx-remote/rsc";

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <MDXRemote source={source} />
    </div>
  );
}
