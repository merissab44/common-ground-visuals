import Image from "next/image";
import Link from "next/link";
import { getCollections, resolveImage } from "@/lib/collections";
import Reveal from "@/components/ui/Reveal";

/** Homepage strip with one tall tile per collection. */
export default function CollectionStrip() {
  const collections = getCollections();

  return (
    <section
      aria-labelledby="collections-heading"
      className="mx-auto w-full max-w-[1400px] px-6 pt-16 md:px-12 lg:px-16"
    >
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="size-2 bg-accent-hot" />
        <h2
          id="collections-heading"
          className="font-mono text-xs uppercase tracking-[0.3em]"
        >
          Collections
        </h2>
        <span aria-hidden="true" className="hidden h-px w-48 bg-line sm:block" />
        <Link
          href="/work"
          className="group ml-auto inline-flex min-h-11 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-foreground"
        >
          View all
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </Link>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {collections.map((collection) => {
          const { photo, position } = resolveImage(collection.tile);
          return (
            <li
              key={collection.slug}
              className="last:col-span-2 sm:last:col-span-1"
            >
              <Reveal>
                <Link
                  href={`/${collection.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden bg-surface max-sm:last:aspect-[16/10]"
                >
                  <Image
                    src={photo.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover opacity-85 transition duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                    style={{ objectPosition: position }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
                    <span>{collection.title}</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
