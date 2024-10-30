import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  basePath: "/library",

  async redirects() {
    // Return is expected to be a promise
    return Promise.resolve([
      {
        source: "/",
        destination: "/library",
        basePath: false,
        permanent: false,
      },
      {
        source: "/:locale/library/:path*",
        destination: "/library/:path*",
        basePath: false,
        permanent: false,
      },
    ]);
  },
};

export default nextConfig;
