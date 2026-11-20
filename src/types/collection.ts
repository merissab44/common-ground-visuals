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
  /** Display number, assigned in order from the visible collections. */
  number: string;
  /**
   * Hides the collection everywhere: its page returns 404 and its photos are
   * left out of every listing. Photo data stays in place for when it returns.
   */
  hidden?: boolean;
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
