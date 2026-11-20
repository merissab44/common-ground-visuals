"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Fades content in as it scrolls into view. Content is fully visible on first
 * paint and without JavaScript: the hidden state is only applied to elements
 * that start below the fold, and is skipped for reduced-motion visitors.
 */
export default function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    element.classList.add("reveal-hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.remove("reveal-hidden");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      element.classList.remove("reveal-hidden");
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
