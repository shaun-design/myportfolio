import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaunrherron/" },
  { label: "Contact", href: "mailto:simpleshaundesign@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Simple Shaun. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-5">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
