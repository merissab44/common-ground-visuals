import Image from "next/image";
import type { Photo } from "@/types/photo";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro: string;
  photo: Photo;
  position?: string;
}

/** Centered cinematic page header over a photograph, as in the Work mockup. */
export default function PageHeader({
  eyebrow,
  title,
  intro,
  photo,
  position = "50% 40%",
}: PageHeaderProps) {
  return (
    <section className="relative isolate flex h-[52svh] min-h-[360px] max-h-[480px] items-end justify-center overflow-hidden">
      <Image
        src={photo.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/30 to-background"
      />

      <div className="fade-up px-6 pb-14 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.45em] text-foreground/75">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-6xl font-light md:text-8xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-md font-serif text-lg italic leading-relaxed text-foreground/75">
          {intro}
        </p>
        <span
          aria-hidden="true"
          className="mx-auto mt-8 block h-px w-16 bg-foreground/40"
        />
      </div>
    </section>
  );
}
