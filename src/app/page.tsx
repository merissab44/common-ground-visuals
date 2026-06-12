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
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 md:px-12 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 pb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-red-500">
              Common Ground Visuals
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-light tracking-tight md:text-7xl">
              Quiet moments. Shared spaces. Real stories.
            </h1>
          </div>

          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.25em] text-white/60 md:flex">
            <Link href="/city-fragments">City Fragments</Link>
            <Link href="/community">Community</Link>
            <Link href="/landscapes">Landscapes</Link>
            <Link href="/prints">Prints</Link>
          </nav>
        </header>

        <section className="grid flex-1 gap-4 py-10 md:grid-cols-3">
          {featuredPhotos.map((photo) => (
            <Link
              key={photo.id}
              href={`/${photo.collection}`}
              className="group relative min-h-[420px] overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500">
                  Collection
                </p>

                <h2 className="mt-2 text-2xl font-light transition-colors duration-300 group-hover:text-white">
                  {formatCollectionName(photo.collection)}
                </h2>

                <p className="mt-2 text-xs text-white/40">
                  {photo.location} · {photo.year}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <footer className="flex items-center justify-between border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
          <p>Photography by Merissa Bridgeman</p>
          <p>Oakland, CA</p>
        </footer>
      </section>
    </main>
  );
}