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
  
  // Optimize for production
  webpack: (config, { isServer, dev }) => {
    // Production optimizations
    if (!dev && isServer) {
      // Prisma optimization for serverless
      config.externals.push({
        '@prisma/client': '@prisma/client',
      });
    }
    return config;
  },
};

export default nextConfig;
