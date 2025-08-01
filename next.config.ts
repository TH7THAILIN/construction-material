import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel optimizations
  serverExternalPackages: ['@prisma/client'],
  
  // Image optimization for Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
