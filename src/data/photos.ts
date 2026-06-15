import { Photo } from "@/types/photo";

export const photos: Photo[] = [
  {
    id: "1",
    title: "Do Not Enter",
    slug: "do-not-enter",
    collection: "street",
    image: "/images/city-fragments/do-not-enter.jpg",
    location: "San Francisco, CA",
    year: 2026,
    featured: true,
  },

  {
    id: "2",
    title: "Cook",
    slug: "cook-red-hat",
    collection: "portrait",
    image: "/images/community/cook-red-hat.jpg",
    location: "San Francisco, CA",
    year: 2026,
    featured: true,
  },

  {
    id: "3",
    title: "Misty Lake",
    slug: "misty-lake",
    collection: "landscapes",
    image: "/images/landscapes/mountain-reflection.jpg",
    location: "British Columbia",
    year: 2024,
    featured: true,
    availableAsPrint: true,
  },
];