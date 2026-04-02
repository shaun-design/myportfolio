"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Resume", href: "/resume" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaunrherron/" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          Simple Shaun
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const isActive =
              !isExternal &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)));
            return (
              <Link
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-[#3F83BF] font-medium text-white dark:bg-[#3F83BF] dark:text-white"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
