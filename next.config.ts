import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*',
        pathname: '/**',
        port: '',
        protocol: "http",
        search: ''
      },
      {
        hostname: '*',
        pathname: '/**',
        port: '',
        protocol: "https",
        search: ''
      },
    ]
  }
};

export default nextConfig;
