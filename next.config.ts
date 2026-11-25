import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.berlstore.com",
      },
    ],
  },
};

export default nextConfig;
