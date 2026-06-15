import Image from "next/image";
import Link from "next/link";
import { getFeaturedPhotos } from "@/lib/photos";

function formatCollectionName(collection: string) {
  return collection
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Home() {
  const featuredPhotos = getFeaturedPhotos();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-12 lg:px-16">
        <header className="border-b border-white/10 pb-8">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-red-500">
                Common Ground Visuals
              </p>

              <h1 className="mt-4 max-w-4xl text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
                Quiet moments. Shared spaces. Real stories.
              </h1>
            </div>

            <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.25em] text-white/50 md:flex">
              <Link href="/street">Street</Link>
              <Link href="/portraits">Portraits</Link>
              <Link href="/landscapes">Landscapes</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
            A visual archive of street scenes, portraits, landscapes, and
            everyday moments across the Bay Area and beyond.
          </p>
        </header>

        <section className="grid flex-1 gap-4 py-10 md:grid-cols-6 md:auto-rows-[240px]">
          {featuredPhotos.map((photo, index) => (
            <Link
              key={photo.id}
              href={`/${photo.collection}`}
              className={`group relative overflow-hidden border border-white/10 bg-white/5 outline-none transition-all duration-300 hover:border-white/30 focus-visible:border-red-500 ${
                index === 0
                  ? "md:col-span-3 md:row-span-2"
                  : "md:col-span-3"
              }`}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                priority={index === 0}
                className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:bg-black/10 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500">
                  Collection
                </p>

                <h2 className="mt-2 text-2xl font-light">
                  {formatCollectionName(photo.collection)}
                </h2>

                <p className="mt-2 text-xs text-white/45">
                  {photo.location} · {photo.year}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-[0.25em] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>Photography by Merissa Bridgeman</p>
          <p>Oakland, CA</p>
        </footer>
      </section>
    </main>
  );
}