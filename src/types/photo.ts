export type Collection =
  | "city-fragments"
  | "community"
  | "landscapes";

export interface Photo {
  id: string;
  title: string;
  slug: string;
  collection: Collection;
  image: string;
  location: string;
  year: number;
  featured?: boolean;
  availableAsPrint?: boolean;
}