/**
 * Marimbas cross-cutting rollout 2026-05 — security headers
 *
 * INERT BY DEFAULT. Importing this file does NOTHING until you wire it into
 * next.config.js. See INTEGRATION.md at repo root for the 3 lines to add.
 *
 * CSP starts in Report-Only mode. Production is NOT enforced until you change
 * the header key from 'Content-Security-Policy-Report-Only' to
 * 'Content-Security-Policy' below — do this after 1 week of clean violation logs.
 */

const VERCEL = '*.vercel.app vercel.live'
const GOOGLE = 'https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.google.com https://*.gstatic.com'
// AdSense / AdManager / Privacy Sandbox endpoints — required so the 16-may
// Report-Only -> Enforce flip does not break ad serving on metroguia.mx.
const ADSENSE_SCRIPT = 'https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.googletagservices.com https://adservice.google.com'
const ADSENSE_FRAME = 'https://googleads.g.doubleclick.net https://www.google.com https://tpc.googlesyndication.com'
const ADSENSE_IMG = 'https://pagead2.googlesyndication.com https://*.g.doubleclick.net'
const ADSENSE_CONNECT = 'https://pagead2.googlesyndication.com https://*.g.doubleclick.net https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google'
const ADSENSE_FENCED = 'https://googleads.g.doubleclick.net https://www.google.com'
const POSTHOG = 'https://*.posthog.com https://us.i.posthog.com https://us-assets.i.posthog.com'
const SUPABASE = 'https://*.supabase.co https://*.supabase.in wss://*.supabase.co'
const SENTRY = 'https://*.sentry.io https://*.ingest.sentry.io'

const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${GOOGLE} ${ADSENSE_SCRIPT} ${POSTHOG} ${VERCEL}`,
  `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
  `img-src 'self' data: blob: https: ${ADSENSE_IMG}`,
  `font-src 'self' data: https://fonts.gstatic.com`,
  `connect-src 'self' ${SUPABASE} ${POSTHOG} ${SENTRY} ${GOOGLE} ${ADSENSE_CONNECT} ${VERCEL}`,
  `frame-src 'self' https://www.youtube.com https://player.vimeo.com ${ADSENSE_FRAME}`,
  `fenced-frame-src ${ADSENSE_FENCED}`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
].join('; ')

const securityHeaders = [
  // Start in REPORT-ONLY. Switch to 'Content-Security-Policy' after baseline.
  { key: 'Content-Security-Policy-Report-Only', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(self), microphone=(), geolocation=(self), payment=(self), usb=(), accelerometer=(), gyroscope=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
]

module.exports = securityHeaders
module.exports.csp = csp
