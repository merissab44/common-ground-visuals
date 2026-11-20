import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import type { Photo } from "@/types/photo";

interface HeroProps {
  photo: Photo;
  /** CSS object-position for the photograph. */
  position?: string;
}

/** Homepage opening scene: a full-bleed photograph with the title at left. */
export default function Hero({ photo, position = "50% 60%" }: HeroProps) {
  return (
    <section className="relative isolate h-[92svh] min-h-[560px] overflow-hidden">
      <Image
        src={photo.image}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/45 to-background/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 pt-24 md:px-12 lg:px-16">
        <h1 className="fade-up font-display text-[clamp(3.75rem,10vw,8.5rem)] leading-[0.92] tracking-wide text-foreground">
          <span className="block">Common</span>
          <span className="block">Ground</span>
          <span className="block">
            Visuals
            <span
              aria-hidden="true"
              className="ml-[0.18em] inline-block size-[0.17em] bg-accent-hot"
            />
          </span>
        </h1>

        <p className="fade-up-delay mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/85 md:text-xs">
          Photography <span className="mx-2 text-foreground/40">/</span> People{" "}
          <span className="mx-2 text-foreground/40">/</span> Places{" "}
          <span className="mx-2 text-foreground/40">/</span> Culture
        </p>

        <p className="fade-up-delay mt-6 max-w-sm font-mono text-sm italic leading-relaxed text-foreground/75">
          Documenting the in-betweens &mdash; where people, place, and story
          meet.
        </p>

        <div className="fade-up-delay mt-10">
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center gap-4 border border-foreground/60 px-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            Explore Collections <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="absolute inset-y-0 right-3 hidden items-center font-mono text-[11px] uppercase tracking-[0.3em] text-accent-hot/80 [writing-mode:vertical-rl] md:flex"
      >
        {site.name} &nbsp;&middot;&nbsp; 52
      </p>
    </section>
  );
}
