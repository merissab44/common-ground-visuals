import type { Metadata } from "next";
import CollectionPage from "@/components/collections/CollectionPage";

export const metadata: Metadata = {
  title: "Portraits",
  description: "People, presence, and the stories they carry.",
};

export default function PortraitsPage() {
  return <CollectionPage slug="portraits" />;
}
