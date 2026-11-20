import type { Collection } from "@/types/collection";

/**
 * Collections in display order. Photographs are referenced by slug and cropped
 * with CSS object-position, so no photo data is repeated here.
 */
export const collections: Collection[] = [
  {
    slug: "city-fragments",
    number: "01",
    title: "City Fragments",
    description: "Street scenes, details, and moments from the everyday.",
    layout: "masonry",
    hero: { photo: "washington-street", position: "50% 85%" },
    cover: { photo: "junes-pizza", position: "50% 54%" },
    tile: { photo: "washington-street", position: "50% 50%" },
  },
  {
    slug: "landscapes",
    number: "02",
    title: "Landscapes",
    description: "Wide places, quiet horizons, and the feeling of being small.",
    layout: "wide",
    hero: { photo: "cinematic-wave", position: "50% 50%" },
    cover: { photo: "cinematic-wave", position: "50% 50%" },
    tile: { photo: "rainier-teal", position: "50% 50%" },
  },
  {
    slug: "portraits",
    number: "03",
    title: "Portraits",
    description: "People, presence, and the stories they carry.",
    layout: "intimate",
    hero: { photo: "alaska-railroad", position: "50% 70%" },
    cover: { photo: "alaska-railroad", position: "50% 80%" },
    tile: { photo: "forest-portrait", position: "50% 40%" },
  },
  {
    slug: "field-notes",
    number: "04",
    title: "Field Notes",
    description:
      "A more personal look—observations, experiments, and in-between moments.",
    layout: "editorial",
    hero: { photo: "squirrel-in-snow", position: "50% 53%" },
    cover: { photo: "squirrel-in-snow", position: "50% 53%" },
    tile: { photo: "squirrel-in-snow", position: "50% 50%" },
  },
  {
    slug: "prints",
    number: "05",
    title: "Prints",
    description: "Selected works available as fine art prints.",
    layout: "clean",
    hero: { photo: "misty-lake", position: "50% 55%" },
    cover: { photo: "misty-lake", position: "50% 55%" },
    tile: { photo: "misty-lake", position: "50% 55%" },
  },
];
