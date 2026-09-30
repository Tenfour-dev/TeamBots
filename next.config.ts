import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  async redirects() {
    return [
      {
        source: "/rentals/alpha-hd-a80hdg-e",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
