import type { CollectionSlug } from "@/types/photo";

/** Route slug for every collection page, including Prints. */
export type CollectionRoute = CollectionSlug | "prints";

export type GalleryLayout =
  | "masonry"
  | "wide"
  | "intimate"
  | "editorial"
  | "clean";

/** A photograph (by slug) shown at a given crop position. */
export interface CollectionImage {
  photo: string;
  /** CSS object-position, e.g. "50% 40%". */
  position: string;
}

export interface Collection {
  slug: CollectionRoute;
  number: string;
  title: string;
  description: string;
  layout: GalleryLayout;
  /** Wide cinematic header on the collection page. */
  hero: CollectionImage;
  /** Wide row on the Work page. */
  cover: CollectionImage;
  /** Tall tile on the homepage. */
  tile: CollectionImage;
}
