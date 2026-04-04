/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export — zero ISR writes, solves Vercel free tier limit
  trailingSlash: true,
  images: {
    unoptimized: true, // Keep: no paid image optimization needed
  },
}

module.exports = nextConfig
