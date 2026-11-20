import Image from "next/image";
import Link from "next/link";
import type { ResolvedImage } from "@/lib/collections";
import type { Collection } from "@/types/collection";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

interface CollectionPreviewProps {
  collection: Collection;
  cover: ResolvedImage;
}

/** One row of the Work page: a wide photograph (about 62%) beside its description. */
export default function CollectionPreview({
  collection,
  cover,
}: CollectionPreviewProps) {
  const href = `/${collection.slug}`;

  return (
    <Reveal>
      <article className="grid items-center gap-8 border-b border-line py-12 lg:grid-cols-[62fr_38fr] lg:gap-16">
        <Link
          href={href}
          aria-label={`${collection.title}, view collection`}
          tabIndex={-1}
          className="group relative block aspect-[16/10] overflow-hidden bg-surface lg:aspect-[12/5]"
        >
          <Image
            src={cover.photo.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover opacity-90 transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
            style={{ objectPosition: cover.position }}
          />
        </Link>

        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-muted">
            {collection.number}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light md:text-5xl">
            {collection.title}
          </h2>
          <p className="mt-4 max-w-xs font-serif text-lg italic leading-relaxed text-muted">
            {collection.description}
          </p>
          <div className="mt-7">
            <ArrowLink href={href}>View Collection</ArrowLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
