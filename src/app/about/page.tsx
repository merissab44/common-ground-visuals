import type { Metadata } from "next";
import ArrowLink from "@/components/ui/ArrowLink";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.owner} is a photographer based in Oakland, California, documenting the people, places, and moments that connect us.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-12 pt-40 md:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-muted">
        About
      </p>
      <h1 className="mt-4 font-serif text-5xl font-light md:text-7xl">
        A Visual Journal of Common Ground.
      </h1>

      <p className="mt-12 font-serif text-2xl font-light leading-relaxed text-foreground/85">
        I&rsquo;m {site.owner}, a photographer based in Oakland, California.
        Through {site.name}, I document the people, places, and moments that
        connect us.
      </p>

      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
        <ArrowLink href="/work">View the work</ArrowLink>
        <ArrowLink href="/contact">Get in touch</ArrowLink>
      </div>
    </div>
  );
}
