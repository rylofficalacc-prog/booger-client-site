import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Launcher page became the Download page; keep old links working.
  async redirects() {
    return [{ source: "/launcher", destination: "/download", permanent: true }];
  },
};

export default nextConfig;
