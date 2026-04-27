export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a" }} className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-white md:text-[36px]">
          Designing with care.<br />Shipping with confidence.
        </p>
        <div className="mb-12 flex flex-wrap gap-6">
          <a
            href="mailto:simpleshaundesign@gmail.com"
            className="text-[14px] font-semibold text-white transition-opacity hover:opacity-60"
          >
            Email →
          </a>
          <a
            href="https://www.linkedin.com/in/shaunrherron/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-semibold text-white transition-opacity hover:opacity-60"
          >
            LinkedIn →
          </a>
          <a
            href="/resume"
            className="text-[14px] font-semibold text-white transition-opacity hover:opacity-60"
          >
            Resume →
          </a>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/35">© {new Date().getFullYear()} Shaun Herron. All rights reserved.</p>
          <p className="text-[12px] text-white/35">Built with Next.js + Claude Code</p>
        </div>
      </div>
    </footer>
  );
}
