import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://myportfolio-git-main-shaun-designs-projects.vercel.app";

export const metadata: Metadata = {
  title: "Shaun Herron | Senior Product Designer",
  description:
    "Senior Product Designer with deep experience in design systems, SaaS UX, product strategy, and AI enabled experiences.",
  openGraph: {
    title: "Shaun Herron | Senior Product Designer",
    description:
      "Senior Product Designer with deep experience in design systems, SaaS UX, product strategy, and AI enabled experiences.",
    url: siteUrl,
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
