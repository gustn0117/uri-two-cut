import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        // HTML/data routes — always revalidate so deploys are seen immediately.
        // Static assets under /_next/static/* are content-hashed by Next.js and
        // remain on the default long cache.
        source: "/((?!_next/static|favicon).*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
