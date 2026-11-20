import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

/** Minimal footer: wordmark, three links, Instagram and email. */
export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1400px] px-6 pb-12 pt-24 md:px-12 lg:px-16">
      <div className="border-t border-line pt-10">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-xl tracking-[0.14em] md:text-2xl">
            {site.name}
          </p>

          <nav aria-label="Footer">
            <ul className="flex gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center font-serif text-lg text-foreground/70 transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-2">
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram, @${site.instagram.handle}`}
                className="inline-flex size-11 items-center justify-center text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex size-11 items-center justify-center text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                <MailIcon />
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          &copy; {new Date().getFullYear()} {site.owner}. All photographs
          copyright the photographer.
        </p>
      </div>
    </footer>
  );
}
