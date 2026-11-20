import { notFound } from "next/navigation";
import { findCollection, resolveImage } from "@/lib/collections";
import { getPhotosByCollection } from "@/lib/photos";
import type { CollectionRoute } from "@/types/collection";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import CollectionHeader from "./CollectionHeader";

/** Shared page for every collection route: cinematic header, then the gallery. */
export default function CollectionPage({ slug }: { slug: CollectionRoute }) {
  const collection = findCollection(slug);
  if (!collection) notFound();
  const photos = getPhotosByCollection(slug);
  const hero = resolveImage(collection.hero);

  return (
    <>
      <CollectionHeader collection={collection} hero={hero} />

      <div className="mx-auto w-full max-w-[1400px] px-6 pt-12 md:px-12 lg:px-16">
        {slug === "field-notes" ? (
          <p className="mx-auto mb-14 max-w-xl text-center font-serif text-xl italic leading-relaxed text-muted">
            Written notes on the stories behind the photographs are on the way.
            Until then, a frame from the field.
          </p>
        ) : null}

        {photos.length > 0 ? (
          <PhotoGallery photos={photos} layout={collection.layout} />
        ) : (
          <p className="py-24 text-center font-serif text-xl italic text-muted">
            Nothing here yet.
          </p>
        )}
      </div>
    </>
  );
}
