import { collections } from "@/data/collections";
import { getPhotoBySlug } from "@/lib/photos";
import type {
  Collection,
  CollectionImage,
  CollectionRoute,
} from "@/types/collection";
import type { Photo } from "@/types/photo";

/** Visible collections in display order, numbered without gaps. */
export function getCollections(): Collection[] {
  return collections
    .filter((item) => !item.hidden)
    .map((item, index) => ({
      ...item,
      number: String(index + 1).padStart(2, "0"),
    }));
}

/** Returns the visible collection for a route, or undefined if hidden or unknown. */
export function findCollection(slug: CollectionRoute): Collection | undefined {
  return getCollections().find((item) => item.slug === slug);
}

export function getCollection(slug: CollectionRoute): Collection {
  const collection = findCollection(slug);
  if (!collection) {
    throw new Error(`Unknown or hidden collection: ${slug}`);
  }
  return collection;
}

export interface ResolvedImage {
  photo: Photo;
  position: string;
}

/** Looks up the photograph behind a collection image reference. */
export function resolveImage(image: CollectionImage): ResolvedImage {
  return { photo: getPhotoBySlug(image.photo), position: image.position };
}
