import type { NextConfig } from "next";
const nextConfig: NextConfig = { output: "export", basePath: "/WEBSITE", images: { unoptimized: true }, trailingSlash: true };
export default nextConfig;
