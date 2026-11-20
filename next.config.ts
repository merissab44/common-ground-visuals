import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/common-ground-visuals") when the site is
// served from a sub-path, as on a GitHub Pages project site. Leave it unset
// for a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Fully static site for GitHub Pages. Static export has no image optimizer
  // or redirects, so photographs are pre-sized web JPEGs served as-is.
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
