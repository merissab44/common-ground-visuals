import AboutPreview from "@/components/home/AboutPreview";
import CollectionStrip from "@/components/home/CollectionStrip";
import Hero from "@/components/home/Hero";
import { getPhotoBySlug } from "@/lib/photos";

export default function Home() {
  return (
    <>
      <Hero photo={getPhotoBySlug("japanese-film-final")} position="50% 62%" />
      <CollectionStrip />
      <AboutPreview />
    </>
  );
}
