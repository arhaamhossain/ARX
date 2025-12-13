import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/ARX",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
