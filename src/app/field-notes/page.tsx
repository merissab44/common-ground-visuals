import type { Metadata } from "next";
import CollectionPage from "@/components/collections/CollectionPage";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "A more personal look—observations, experiments, and in-between moments.",
};

export default function FieldNotesPage() {
  return <CollectionPage slug="field-notes" />;
}
