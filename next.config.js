/** @type {import('next').NextConfig} */
const nextConfig = {
  // ISR mode — no output:'export'. Pages generated on-demand and cached.
  // Enables 24,000+ route pages without build timeout.
  trailingSlash: true,
  images: {
    unoptimized: true, // Keep: no paid image optimization needed
  },
}

module.exports = nextConfig
