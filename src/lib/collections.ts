import { collections } from "@/data/collections";
import { getPhotoBySlug } from "@/lib/photos";
import type {
  Collection,
  CollectionImage,
  CollectionRoute,
} from "@/types/collection";
import type { Photo } from "@/types/photo";

export function getCollections(): Collection[] {
  return collections;
}

export function getCollection(slug: CollectionRoute): Collection {
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) {
    throw new Error(`Unknown collection: ${slug}`);
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
