import Link from "next/link";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  /** "serif" for editorial links, "mono" for small uppercase labels. */
  tone?: "serif" | "mono";
  className?: string;
}

const tones = {
  serif: "font-serif text-lg tracking-wide",
  mono: "font-mono text-[11px] uppercase tracking-[0.25em]",
} as const;

/** Understated text link with a thin underline and a small arrow. */
export default function ArrowLink({
  href,
  children,
  tone = "serif",
  className = "",
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 border-b border-foreground/30 pb-1 text-foreground/85 transition-colors duration-300 hover:border-foreground hover:text-foreground ${tones[tone]} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}
