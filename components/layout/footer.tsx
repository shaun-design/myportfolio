import Link from "next/link";

const socialLinks = [];

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Simple Shaun. All rights reserved.</p>
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
