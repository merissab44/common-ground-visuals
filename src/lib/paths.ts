/**
 * Prefix for sites served from a sub-path (e.g. GitHub Pages project sites).
 * Empty for local development and for a custom domain at the root.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a root-relative asset path (such as "/images/x.jpg") with the base path. */
export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
