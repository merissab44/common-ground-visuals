"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Photo } from "@/types/photo";

interface PhotoLightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const SWIPE_DISTANCE = 50;

/**
 * Immersive full-screen viewer. Built on the native <dialog> element so focus
 * is trapped and Escape closes it. Supports arrow keys and touch swipes.
 */
export default function PhotoLightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);

  const count = photos.length;
  const photo = photos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  function go(delta: number) {
    onIndexChange((index + delta + count) % count);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null || count < 2) return;
    const delta = event.changedTouches[0].clientX - start;
    if (Math.abs(delta) >= SWIPE_DISTANCE) go(delta < 0 ? 1 : -1);
  }

  const meta = [photo.location, photo.year, photo.camera]
    .filter((item) => item !== undefined && item !== "")
    .join("  ·  ");

  const controlClass =
    "inline-flex size-12 items-center justify-center font-serif text-3xl text-foreground/70 transition-colors hover:text-foreground";

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${photo.title}, photograph viewer`}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-[#050607] p-0 text-foreground backdrop:bg-black"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/60">
            {index + 1} / {count}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 items-center px-2 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 transition-colors hover:text-foreground"
          >
            Close
          </button>
        </div>

        <div
          className="relative min-h-0 flex-1"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            key={photo.slug}
            src={photo.image}
            alt={photo.alt}
            fill
            priority
            sizes="100vw"
            className="lightbox-fade object-contain"
          />

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photograph"
                className={`${controlClass} absolute left-1 top-1/2 -translate-y-1/2 md:left-4`}
              >
                <span aria-hidden="true">&lsaquo;</span>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photograph"
                className={`${controlClass} absolute right-1 top-1/2 -translate-y-1/2 md:right-4`}
              >
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </>
          ) : null}
        </div>

        <div className="px-4 pb-5 pt-4 text-center md:px-8">
          <p className="font-serif text-xl">{photo.title}</p>
          {photo.caption ? (
            <p className="mx-auto mt-1 max-w-xl font-serif italic text-foreground/70">
              {photo.caption}
            </p>
          ) : null}
          {meta ? (
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
              {meta}
            </p>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}
