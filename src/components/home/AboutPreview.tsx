import Image from "next/image";
import { getPhotoBySlug } from "@/lib/photos";
import Reveal from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";

/** Homepage About section: a film-strip frame, a short note, and a taped print. */
export default function AboutPreview() {
  const frame = getPhotoBySlug("parade-bus");
  const print = getPhotoBySlug("rainier-waterfall");

  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-[1400px] px-6 pt-28 md:px-12 lg:px-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <Reveal>
          <div className="relative bg-[#120706] py-5 pl-14 pr-5">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-accent-hot/45 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-4 left-3 w-4 [background:repeating-linear-gradient(to_bottom,#0b0d0e_0_16px,transparent_16px_34px)]"
            />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={frame.image}
                alt={frame.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover grayscale contrast-110"
                style={{ objectPosition: "50% 40%" }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-accent-hot/15 mix-blend-multiply"
              />
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent-hot">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-4 max-w-md font-serif text-4xl font-light leading-tight md:text-5xl"
          >
            A Visual Journal of Common Ground.
          </h2>
          <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-muted">
            A photographer drawn to people, culture, sport, and the quiet
            moments in between. This is a space to share stories from the
            places I go, the communities I&rsquo;m part of, and the perspective
            I&rsquo;m still building.
          </p>
          <div className="mt-8">
            <ArrowLink href="/about" tone="mono">
              Learn more
            </ArrowLink>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-24 right-0 hidden w-44 rotate-[4deg] bg-foreground p-2 shadow-2xl xl:block"
          >
            <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-foreground/40" />
            <div className="relative aspect-[4/5]">
              <Image
                src={print.image}
                alt=""
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
