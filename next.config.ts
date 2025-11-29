import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath: process.env.NODE_ENV === "production" ? "/p19ljk.github.io" : "",
  // assetPrefix: process.env.NODE_ENV === "production" ? "/p19ljk.github.io" : "",
};

export default nextConfig;
