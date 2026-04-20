import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { personSchema, websiteSchema } from "@/lib/structured-data";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://myportfolio-git-main-shaun-designs-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shaun Herron | Senior Product Designer",
    template: "%s | Shaun Herron",
  },
  description:
    "Senior Product Designer specializing in design systems, complex SaaS platforms, UX strategy, and AI enabled product experiences.",
  keywords: [
    "Senior Product Designer",
    "Product Designer Portfolio",
    "Design Systems",
    "SaaS UX",
    "AI Product Design",
    "UX Strategy",
    "Product Design",
  ],
  authors: [
    {
      name: "Shaun Herron",
      url: siteUrl,
    },
  ],
  creator: "Shaun Herron",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Shaun Herron - Product Designer",
    title: "Shaun Herron | Senior Product Designer",
    description:
      "Senior Product Designer specializing in design systems, complex SaaS platforms, UX strategy, and AI enabled product experiences.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Shaun Herron - Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaun Herron | Senior Product Designer",
    description:
      "Senior Product Designer specializing in design systems, complex SaaS platforms, UX strategy, and AI enabled product experiences.",
    creator: "@shaunherron",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
