import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // The City Fragments collection used to live at /street.
      { source: "/street", destination: "/city-fragments", permanent: true },
    ];
  },
};

export default nextConfig;
