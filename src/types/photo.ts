/** Collections that photographs can belong to. Prints is a view, not a collection: see availableAsPrint. */
export type CollectionSlug =
  | "city-fragments"
  | "landscapes"
  | "portraits"
  | "field-notes";

export interface Photo {
  id: string;
  title: string;
  slug: string;
  collection: CollectionSlug;
  /** Path under /public. */
  image: string;
  /** Pixel size of the file at `image`, used to keep the original aspect ratio. */
  width: number;
  height: number;
  alt: string;
  location?: string;
  year?: number;
  caption?: string;
  camera?: string;
  featured?: boolean;
  /** Controls whether the photograph appears in Prints. No pricing is stored here. */
  availableAsPrint?: boolean;
}
