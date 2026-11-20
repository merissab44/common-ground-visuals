"use client";

import { useState } from "react";
import type { GalleryLayout } from "@/types/collection";
import type { Photo } from "@/types/photo";
import Reveal from "@/components/ui/Reveal";
import PhotoCard from "./PhotoCard";
import PhotoLightbox from "./PhotoLightbox";

interface PhotoGalleryProps {
  photos: Photo[];
  layout: GalleryLayout;
}

interface IndexedPhoto {
  photo: Photo;
  index: number;
}

interface WideRow {
  kind: "full" | "pair" | "single";
  items: IndexedPhoto[];
}

/**
 * Landscapes: landscape-orientation photographs span the full width, and
 * vertical photographs sit side by side in pairs.
 */
function buildWideRows(photos: Photo[]): WideRow[] {
  const rows: WideRow[] = [];
  let pending: IndexedPhoto[] = [];

  const flush = () => {
    if (pending.length === 2) rows.push({ kind: "pair", items: pending });
    else if (pending.length === 1) rows.push({ kind: "single", items: pending });
    pending = [];
  };

  photos.forEach((photo, index) => {
    if (photo.width >= photo.height) {
      flush();
      rows.push({ kind: "full", items: [{ photo, index }] });
    } else {
      pending.push({ photo, index });
      if (pending.length === 2) flush();
    }
  });
  flush();

  return rows;
}

/**
 * Photograph gallery with a collection-specific layout and a shared lightbox.
 * Every photograph keeps its original aspect ratio, except in the "clean"
 * layout, which shows each whole photograph inside a uniform mat.
 */
export default function PhotoGallery({ photos, layout }: PhotoGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  const card = (
    photo: Photo,
    index: number,
    sizes: string,
    options?: { variant?: "natural" | "matted"; showCaption?: boolean },
  ) => (
    <PhotoCard
      photo={photo}
      sizes={sizes}
      variant={options?.variant}
      showCaption={options?.showCaption}
      priority={index === 0}
      onOpen={() => setActive(index)}
    />
  );

  let content: React.ReactNode;

  if (layout === "wide") {
    const rows = buildWideRows(photos);
    content = (
      <div className="flex flex-col gap-4 md:gap-8">
        {rows.map((row) => {
          const first = row.items[0];
          if (row.kind === "full") {
            return (
              <Reveal key={first.photo.id}>
                {card(first.photo, first.index, "(min-width: 1400px) 1300px, 100vw")}
              </Reveal>
            );
          }
          return (
            <div
              key={first.photo.id}
              className={
                row.kind === "pair"
                  ? "grid items-center gap-4 md:grid-cols-2 md:gap-8"
                  : "mx-auto w-full md:w-1/2"
              }
            >
              {row.items.map(({ photo, index }) => (
                <Reveal key={photo.id}>
                  {card(photo, index, "(min-width: 1400px) 650px, (min-width: 768px) 50vw, 100vw")}
                </Reveal>
              ))}
            </div>
          );
        })}
      </div>
    );
  } else if (layout === "clean") {
    content = (
      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <li key={photo.id}>
            <Reveal>
              {card(photo, index, "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", {
                variant: "matted",
                showCaption: true,
              })}
            </Reveal>
          </li>
        ))}
      </ul>
    );
  } else {
    // masonry (City Fragments), intimate (Portraits), editorial (Field Notes)
    const columns =
      layout === "intimate"
        ? "mx-auto max-w-5xl columns-1 gap-8 md:columns-2 md:gap-12"
        : layout === "editorial"
          ? "mx-auto max-w-4xl columns-1 gap-8 md:columns-2"
          : "columns-1 gap-4 md:columns-2 lg:columns-3";
    const spacing =
      layout === "intimate" ? "mb-8 md:mb-12" : layout === "editorial" ? "mb-8" : "mb-4";
    const sizes =
      layout === "masonry"
        ? "(min-width: 1400px) 450px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        : "(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw";

    content = (
      <div className={columns}>
        {photos.map((photo, index) => (
          <Reveal key={photo.id} className={`${spacing} break-inside-avoid`}>
            {card(photo, index, sizes)}
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <>
      {content}
      {active !== null ? (
        <PhotoLightbox
          photos={photos}
          index={active}
          onClose={() => setActive(null)}
          onIndexChange={setActive}
        />
      ) : null}
    </>
  );
}
