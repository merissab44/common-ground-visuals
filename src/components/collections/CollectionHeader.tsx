import Image from "next/image";
import Link from "next/link";
import type { ResolvedImage } from "@/lib/collections";
import type { Collection } from "@/types/collection";

interface CollectionHeaderProps {
  collection: Collection;
  hero: ResolvedImage;
}

/** Wide cinematic header for a collection page, as in the City Fragments mockup. */
export default function CollectionHeader({
  collection,
  hero,
}: CollectionHeaderProps) {
  return (
    <section className="relative isolate h-[58svh] min-h-[400px] max-h-[600px] overflow-hidden">
      <Image
        src={hero.photo.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: hero.position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/85 via-background/40 to-background/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-14 pt-28 md:px-12 lg:px-16">
        <div className="fade-up">
          <Link
            href="/work"
            className="group inline-flex min-h-11 items-center gap-3 font-serif text-lg text-foreground/80 transition-colors hover:text-foreground"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              &larr;
            </span>
            All Collections
          </Link>
          <p className="mt-6 font-mono text-[11px] tracking-[0.3em] text-foreground/70">
            {collection.number}
          </p>
          <h1 className="mt-2 font-serif text-5xl font-light md:text-7xl">
            {collection.title}
          </h1>
          <p className="mt-4 max-w-sm font-serif text-xl italic leading-relaxed text-foreground/80">
            {collection.description}
          </p>
          <span
            aria-hidden="true"
            className="mt-8 block h-px w-14 bg-foreground/40"
          />
        </div>
      </div>
    </section>
  );
}
