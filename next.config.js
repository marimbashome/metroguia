/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = {
  output: 'export', // Static export — zero ISR writes, solves Vercel free tier limit
  trailingSlash: true,
  images: {
    unoptimized: true, // Keep: no paid image optimization needed
  },
}

module.exports = withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  widenClientFileUpload: true,
})
