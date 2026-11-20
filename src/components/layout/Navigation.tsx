"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";

interface NavItem {
  href: string;
  label: string;
  isActive: (pathname: string) => boolean;
}

const collectionRoutes = [
  "/work",
  "/city-fragments",
  "/landscapes",
  "/portraits",
  "/field-notes",
  "/prints",
];

const homeItems: NavItem[] = [
  { href: "/", label: "Home", isActive: (p) => p === "/" },
  { href: "/work", label: "Collections", isActive: (p) => p === "/work" },
  { href: "/prints", label: "Prints", isActive: (p) => p === "/prints" },
  {
    href: "/field-notes",
    label: "Field Notes",
    isActive: (p) => p === "/field-notes",
  },
  { href: "/about", label: "About", isActive: (p) => p === "/about" },
];

const pageItems: NavItem[] = [
  {
    href: "/work",
    label: "Work",
    isActive: (p) => collectionRoutes.includes(p),
  },
  { href: "/about", label: "About", isActive: (p) => p === "/about" },
  { href: "/contact", label: "Contact", isActive: (p) => p === "/contact" },
];

/**
 * Site navigation. The homepage uses the condensed film-style header from its
 * mockup; every other page uses the quieter serif header from the Work and
 * collection mockups. It sits over each page's hero image.
 */
export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const items = isHome ? homeItems : pageItems;

  // The menu is "open" only for the page it was opened on, so navigating
  // closes it without needing an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const menuOpen = openOn === pathname;

  const linkTone = isHome
    ? "font-mono text-[11px] uppercase tracking-[0.22em]"
    : "font-serif text-lg tracking-wide";

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1400px] items-start justify-between px-6 py-6 md:px-12 lg:px-16">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="text-foreground"
        >
          {isHome ? (
            <span className="flex items-start gap-2 font-display text-2xl leading-[0.95] tracking-wide md:text-[1.7rem]">
              <span>
                Common Ground
                <br />
                Visuals
              </span>
              <span
                aria-hidden="true"
                className="mt-[1.45em] inline-block size-2 bg-accent-hot"
              />
            </span>
          ) : (
            <span className="font-serif text-xl tracking-[0.14em] md:text-2xl">
              Common Ground Visuals
            </span>
          )}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {items.map((item) => {
              const active = item.isActive(pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-block border-b pb-1 transition-colors duration-300 ${linkTone} ${
                      active
                        ? `text-foreground ${isHome ? "border-accent-hot" : "border-foreground/70"}`
                        : "border-transparent text-foreground/65 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setOpenOn(menuOpen ? null : pathname)}
          className="-mr-2 inline-flex min-h-11 items-center px-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-y border-line bg-background/95 backdrop-blur md:hidden"
        >
          <ul className="px-6 py-3">
            {items.map((item) => {
              const active = item.isActive(pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center ${linkTone} ${
                      active ? "text-foreground" : "text-foreground/65"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
