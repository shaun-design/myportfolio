# Portfolio Site

A production-ready portfolio and blog starter built with Next.js 15, Tailwind CSS, and shadcn/ui. Supports light/dark mode, MDX content, and deploys to Vercel in one push.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 15](https://nextjs.org) | Framework (App Router) |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.com) | UI components |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode |
| [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) | MDX rendering |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) | Frontmatter parsing |
| [Lucide](https://lucide.dev) | Icons |

---

## Local Setup

### Prerequisites

- Node.js 18.17+ (or 20+)
- npm, yarn, or pnpm

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment file
cp .env.local.example .env.local

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customization

### Personal info

Update these spots to make it yours:

| File | What to change |
|------|---------------|
| `app/layout.tsx` | Site title and description metadata |
| `components/layout/header.tsx` | Your name / logo text |
| `components/layout/footer.tsx` | Social links |
| `app/about/page.tsx` | Bio, skills, and location |
| `app/page.tsx` | Hero headline and tagline |

### Colors and theme

The design system is driven by CSS variables in `app/globals.css`. To change the color scheme, update the HSL values under `:root` (light) and `.dark` (dark). The variables map to Tailwind utility classes like `bg-primary`, `text-muted-foreground`, etc.

To change border radius, update `--radius` in `globals.css`.

### Adding shadcn/ui components

```bash
npx shadcn@latest add [component-name]
# e.g. npx shadcn@latest add dialog
```

---

## Content Authoring

### Adding a blog post

1. Create a new file in `content/blog/` with a `.mdx` extension.
2. Add frontmatter at the top:

```mdx
---
title: "Your Post Title"
date: "2024-06-01"
description: "A one-sentence summary of the post."
tags: ["tag-one", "tag-two"]
---

Your content here in Markdown.
```

3. The post is automatically available at `/blog/your-filename` (the slug is the filename without `.mdx`).

**Frontmatter fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | ISO date string (`YYYY-MM-DD`). Used for sorting. |
| `description` | Yes | Short summary shown in cards and meta tags |
| `tags` | No | Array of strings shown as badges |
| `coverImage` | No | Path to a cover image (relative to `public/`) |

### Adding a case study

1. Create a new file in `content/work/` with a `.mdx` extension.
2. Add frontmatter:

```mdx
---
title: "Project Name"
date: "2024"
description: "One-sentence project summary."
tags: ["Design", "React"]
featured: true
---

Your case study content here.
```

3. The case study is available at `/work/your-filename`.

**Additional frontmatter fields:**

| Field | Description |
|-------|-------------|
| `featured` | Set to `true` to show on the home page |

### MDX components

Your MDX content supports standard Markdown plus JSX components. To add custom components (callouts, video embeds, etc.), pass them to `MDXRemote` in `components/mdx-content.tsx`:

```tsx
import { MDXRemote } from "next-mdx-remote/rsc";
import { Callout } from "@/components/callout";

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <MDXRemote source={source} components={{ Callout }} />
    </div>
  );
}
```

---

## Contact Form

The contact form posts to `/api/contact`. By default it validates fields and logs to the console — no email is sent.

To wire up a real email service:

1. Open `app/api/contact/route.ts`
2. Follow the commented instructions to integrate [Resend](https://resend.com), SendGrid, or any other provider
3. Add your API key to `.env.local`

---

## Deployment on Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual steps

1. Push your repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build configuration needed.
4. Add any environment variables (e.g. `RESEND_API_KEY`) under **Project Settings → Environment Variables**.
5. Click **Deploy**.

Every push to `main` triggers a new deployment automatically.

### Custom domain

In Vercel → **Project Settings → Domains**, add your domain and follow the DNS instructions.

---

## Project Structure

```
portfolio-site/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (providers, header, footer)
│   ├── globals.css         # Tailwind + CSS variables
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Individual post
│   ├── work/
│   │   ├── page.tsx        # Work index
│   │   └── [slug]/page.tsx # Individual case study
│   ├── contact/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── layout/             # Header, footer, page container, section
│   ├── ui/                 # shadcn/ui components
│   ├── providers.tsx       # ThemeProvider
│   ├── theme-toggle.tsx
│   ├── post-card.tsx
│   ├── work-card.tsx
│   ├── contact-form.tsx
│   └── mdx-content.tsx
├── content/
│   ├── blog/               # .mdx blog posts
│   └── work/               # .mdx case studies
└── lib/
    ├── utils.ts            # cn() helper
    └── mdx.ts              # Content loading functions
```

---

## License

MIT — use this freely for your own portfolio.
