import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/patients',
      },
    ]
  },
  images: {
    remotePatterns: [{hostname : '**' , }],
  },

};

export default nextConfig;
