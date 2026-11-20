import type { Metadata } from "next";
import CollectionPage from "@/components/collections/CollectionPage";

export const metadata: Metadata = {
  title: "City Fragments",
  description: "Street scenes, details, and moments from the everyday.",
};

export default function CityFragmentsPage() {
  return <CollectionPage slug="city-fragments" />;
}
