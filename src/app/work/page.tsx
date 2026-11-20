import type { Metadata } from "next";
import CollectionPreview from "@/components/collections/CollectionPreview";
import PageHeader from "@/components/layout/PageHeader";
import { getCollections, resolveImage } from "@/lib/collections";
import { getPhotoBySlug } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "A curated body of work exploring people, places, and the spaces in between.",
};

export default function WorkPage() {
  const collections = getCollections();

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Collections"
        intro="A curated body of work exploring people, places, and the spaces in between."
        photo={getPhotoBySlug("rainier-teal")}
        position="50% 30%"
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 pt-4 md:px-12 lg:px-16">
        {collections.map((collection) => (
          <CollectionPreview
            key={collection.slug}
            collection={collection}
            cover={resolveImage(collection.cover)}
          />
        ))}
      </div>
    </>
  );
}
