import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.owner} about prints, collaborations, and event photography.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-12 pt-40 md:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-muted">
        Contact
      </p>
      <h1 className="mt-4 font-serif text-5xl font-light md:text-7xl">
        Say hello.
      </h1>

      <p className="mt-10 max-w-xl font-serif text-xl leading-relaxed text-foreground/80">
        For prints, collaborations, and event or sports photography, send a
        note by email or message me on Instagram.
      </p>

      <dl className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Email
          </dt>
          <dd className="mt-3 break-words font-serif text-2xl">
            <a
              href={`mailto:${site.email}`}
              className="border-b border-foreground/30 pb-1 transition-colors hover:border-foreground"
            >
              {site.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Instagram
          </dt>
          <dd className="mt-3 font-serif text-2xl">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-foreground/30 pb-1 transition-colors hover:border-foreground"
            >
              @{site.instagram.handle}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
