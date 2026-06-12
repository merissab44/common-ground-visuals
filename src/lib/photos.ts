import { photos } from "@/data/photos";

export function getFeaturedPhotos() {
  return photos.filter((photo) => photo.featured);
}

export function getPhotosByCollection(collection: string) {
  return photos.filter(
    (photo) => photo.collection === collection
  );
}