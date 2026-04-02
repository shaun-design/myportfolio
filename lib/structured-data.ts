const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://myportfolio-git-main-shaun-designs-projects.vercel.app";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shaun Herron",
  jobTitle: "Senior Product Designer",
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/in/shaunrherron/"],
  description:
    "Senior Product Designer specializing in design systems, complex SaaS platforms, UX strategy, and AI enabled product experiences.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shaun Herron - Product Designer",
  url: siteUrl,
  description:
    "Senior Product Designer specializing in design systems, complex SaaS platforms, UX strategy, and AI enabled product experiences.",
  creator: {
    "@type": "Person",
    name: "Shaun Herron",
  },
};
