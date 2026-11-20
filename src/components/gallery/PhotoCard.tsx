import Image from "next/image";
import type { Photo } from "@/types/photo";

interface PhotoCardProps {
  photo: Photo;
  onOpen: () => void;
  sizes: string;
  /** "natural" keeps the exact aspect ratio; "matted" shows the whole photo inside a uniform frame. */
  variant?: "natural" | "matted";
  /** Shows the title (and print note) under the photograph. */
  showCaption?: boolean;
  priority?: boolean;
}

/** A photograph that opens the lightbox. No border, no card chrome. */
export default function PhotoCard({
  photo,
  onOpen,
  sizes,
  variant = "natural",
  showCaption = false,
  priority = false,
}: PhotoCardProps) {
  return (
    <figure>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${photo.title} full screen`}
        className="group relative block w-full cursor-zoom-in overflow-hidden bg-surface text-left"
      >
        {variant === "natural" ? (
          <Image
            src={photo.image}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={sizes}
            priority={priority}
            className="h-auto w-full opacity-95 transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
          />
        ) : (
          <div className="relative aspect-[4/5]">
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-contain p-6 transition duration-700 ease-out group-hover:scale-[1.02] md:p-10"
            />
          </div>
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/10"
        />
      </button>

      {showCaption ? (
        <figcaption className="mt-4">
          <p className="font-serif text-xl">{photo.title}</p>
          {photo.availableAsPrint ? (
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              Available as a print
            </p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
