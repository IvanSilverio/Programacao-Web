import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns:[
      {
        protocol: 'https',
        pathname:'/**',
        hostname:'lumiere-a.akmaihd.net',
        port:''
      },

      {
        protocol: 'https',
        pathname:'/**',
        hostname:'*',
        port:''
      }
    ]

  }
};

export default nextConfig;
