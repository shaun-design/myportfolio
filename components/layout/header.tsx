"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaunrherron/" },
  { label: "Contact", href: "mailto:simpleshaundesign@gmail.com" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          Simple Shaun
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");
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
                    ? "bg-black font-medium text-white"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground sm:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t bg-background px-4 pb-4 pt-3 sm:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");
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
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                    ? "bg-black text-white"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
