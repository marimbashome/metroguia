# INTEGRATION — metroguia (cross-cutting rollout 2026-05)

⚠️ **This project uses `output: 'export'` (static export).** That means the Next.js `headers()` API doesn't run. Security headers MUST be set via `vercel.json` instead.

The good news: metroguia already has `vercel.json` with X-Frame-Options DENY + X-Content-Type-Options nosniff. We're extending it.

## What was added in this branch

```
.github/workflows/lighthouse.yml
lighthouserc.json
lib/security-headers.js     ← reference only (won't run in static export)
lib/bundle-analyzer.js      ← inert
INTEGRATION.md              ← this file
```

`lib/security-headers.js` is included for documentation but **does NOT execute** because of static export. Use the `vercel.json` snippet below.

## How to activate

Edit your `vercel.json` `headers` array. Replace the existing `/(.*)` entry with:

```json
{
  "source": "/(.*)",
  "headers": [
    { "key": "X-Content-Type-Options", "value": "nosniff" },
    { "key": "X-Frame-Options", "value": "DENY" },
    { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
    { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
    { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(self), payment=()" },
    { "key": "Cross-Origin-Opener-Policy", "value": "same-origin-allow-popups" },
    {
      "key": "Content-Security-Policy-Report-Only",
      "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.vercel.app vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.posthog.com https://us.i.posthog.com https://www.google-analytics.com https://*.vercel.app vercel.live; frame-src 'self' https://www.youtube.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
    }
  ]
}
```

**Keep the other entries** in `vercel.json` (the `/calendar/...` entries, redirects, functions). Only the `/(.*)` one is replaced.

## Special considerations for metroguia

- The 12 city subdomains (cdmx., gdl., mty., …) all redirect to the apex `metroguia.mx` per existing `vercel.json` rules — security headers from the apex apply after redirect.
- CSP allows GA + PostHog. If you add Google Maps or another CDN, extend `connect-src` and `script-src`.
- Static export = no API routes = `frame-ancestors 'none'` is safe (no embed needed).
- `geolocation=(self)` is allowed because the trip planner may need user location.

## Lighthouse CI on metroguia is HIGH PRIORITY

This is the FIFA 2026 SEO play. Mobile Lighthouse <90 = leaving traffic on the table. Recommend bumping thresholds in `lighthouserc.json` to:
```json
"categories:performance": ["error", { "minScore": 0.85 }],
"categories:seo":         ["error", { "minScore": 0.95 }]
```
…once you have a clean baseline.

## Test locally

```bash
npm run build
npx serve out
# then in another terminal:
curl -sI http://localhost:3000/ | grep -iE "csp|hsts|x-frame"
```

Static export served via `serve` won't show Vercel headers — those only apply on Vercel deploys. Test the headers on a Vercel preview URL instead:

```bash
curl -sI https://metroguia-git-chore-cross-cutting-2026-05-marimbashome.vercel.app/ | grep -iE "csp|hsts|x-frame"
```
