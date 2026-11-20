import { collections } from "@/data/collections";
import { photos as allPhotos } from "@/data/photos";
import { assetPath } from "@/lib/paths";
import type { CollectionRoute } from "@/types/collection";
import type { Photo } from "@/types/photo";

const hiddenCollections = new Set<string>(
  collections.filter((item) => item.hidden).map((item) => item.slug),
);

/** Every photograph that may be shown: photos in hidden collections are excluded. */
const photos: Photo[] = allPhotos
  .filter((photo) => !hiddenCollections.has(photo.collection))
  .map((photo) => ({ ...photo, image: assetPath(photo.image) }));

export function getPhotos(): Photo[] {
  return photos;
}

export function getFeaturedPhotos(): Photo[] {
  return photos.filter((photo) => photo.featured);
}

export function getPhotoBySlug(slug: string): Photo {
  const photo = photos.find((item) => item.slug === slug);
  if (!photo) {
    throw new Error(`Unknown photo slug: ${slug}`);
  }
  return photo;
}

/** Photographs for a collection page. Prints is driven by availableAsPrint metadata. */
export function getPhotosByCollection(collection: CollectionRoute): Photo[] {
  if (collection === "prints") {
    return photos.filter((photo) => photo.availableAsPrint);
  }
  return photos.filter((photo) => photo.collection === collection);
}
