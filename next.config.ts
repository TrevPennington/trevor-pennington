import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.trevorpennington.com",
      },
      {
        protocol: "https",
        hostname: "pub-49a9c3491a594d00b1160c08e880add5.r2.dev",
      },
    ],
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
