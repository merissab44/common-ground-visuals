import type { Metadata } from "next";
import CollectionPage from "@/components/collections/CollectionPage";

export const metadata: Metadata = {
  title: "Landscapes",
  description: "Wide places, quiet horizons, and the feeling of being small.",
};

export default function LandscapesPage() {
  return <CollectionPage slug="landscapes" />;
}
