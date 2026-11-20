import type { Metadata } from "next";
import CollectionPage from "@/components/collections/CollectionPage";

export const metadata: Metadata = {
  title: "Prints",
  description: "Selected works available as fine art prints.",
};

export default function PrintsPage() {
  return <CollectionPage slug="prints" />;
}
