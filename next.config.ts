/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows Prisma client to be bundled and run on Vercel's serverless environment
  serverExternalPackages: ['@prisma/client'],

  // Next.js Image Optimization — adjust remotePatterns as needed
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

  // Optionally enable React strict mode for better debugging (recommended)
  reactStrictMode: true,

  // You can add more custom Webpack configs here if needed, but
  // avoid absolute Windows paths to keep it cross-platform compatible
};

module.exports = nextConfig;
