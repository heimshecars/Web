import type { NextConfig } from "next";

// Every page is pre-rendered to static HTML at build time (`out/`).
// Live data is loaded in the browser from Supabase once the backend exists.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
