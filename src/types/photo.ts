export type Collection =
  | "street"
  | "portrait"
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