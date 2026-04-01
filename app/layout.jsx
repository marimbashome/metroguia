import './globals-v2.css'
import { Analytics } from '@vercel/analytics/react'
import PWAInstall from '@/app/components/PWAInstall'
import NavBar from '@/app/components/NavBar'
import FooterBar from '@/app/components/FooterBar'
import HrefLangTags from '@/app/components/HrefLangTags'
import AutoLangRedirect from '@/app/components/AutoLangRedirect'
import NetworkStatus from '@/app/components/NetworkStatus'

export const metadata = {
  title: 'MetroGuia.mx — Rutas en Metro, Tren Ligero y BRT en CDMX, GDL y MTY',
  description: 'Planifica tu ruta en metro, tren ligero y BRT en Ciudad de México, Guadalajara y Monterrey. Transbordos, horarios, costos y guía para el Mundial FIFA 2026.',
  keywords: 'metro CDMX, transporte público México, trip planner metro, mundial 2026, estaciones metro, metrobus, tren ligero',
  metadataBase: new URL('https://metroguia.mx'),
  alternates: {
    canonical: '/',
  },
  verification: { google: ['NxUm-fKQqE8x692QtQr2mfRXFtFnIvBoJggZuDPbAA4', 'jEOAszLlW5NEWqazqwFSNP-9FoGGHtNVTAffuywcsBY'] },
  openGraph: {
    title: 'MetroGuia.mx — Tu trip planner de transporte urbano en México',
    description: 'Calcula rutas, explora estaciones y planifica tu viaje en metro, tren ligero y BRT en CDMX, Guadalajara y Monterrey.',
    type: 'website',
    url: 'https://metroguia.mx',
    siteName: 'MetroGuia.mx',
    locale: 'es_MX',
    images: [
      {
        url: 'https://metroguia.mx/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MetroGuia.mx — Trip planner de transporte urbano',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@metroguiamx',
    creator: '@metroguiamx',
    title: 'MetroGuia.mx — Trip planner de transporte urbano en México',
    description: 'Calcula rutas en metro, tren ligero y BRT en CDMX, Guadalajara y Monterrey',
    images: ['https://metroguia.mx/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  }
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'MetroGuia.mx',
    'url': 'https://metroguia.mx',
    'logo': 'https://metroguia.mx/logo.png',
    'description': 'Plataforma de movilidad urbana para turistas en México. Rutas en metro, tren ligero, metrobús y BRT.',
    'sameAs': [],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer support',
      'url': 'https://metroguia.mx',
      'availableLanguage': ['Spanish', 'English', 'Portuguese', 'French', 'German', 'Japanese', 'Korean']
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'MetroGuia.mx',
    'url': 'https://metroguia.mx',
    'description': 'Trip planner de transporte urbano en México. Calcula rutas en metro, tren ligero y BRT para CDMX, Guadalajara y Monterrey.',
    'inLanguage': ['es', 'en', 'pt', 'fr', 'de', 'ja', 'ko'],
    'publisher': { '@type': 'Organization', 'name': 'MetroGuia.mx' },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://metroguia.mx/ruta/{search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <html lang="es" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" as="image" href="/logo.png" fetchPriority="high" />
        <meta name="theme-color" content="#F5A623" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yorkfx/icons-metro-df@master/files/css/ui-transport-mx.css"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <meta name="google-adsense-account" content="ca-pub-5779958677522085" />
        {/* GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7YQMP6V81D" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7YQMP6V81D');
        `}} />
        <script
          async
          defer
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5779958677522085"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* ── Navigation ── */}
        <NavBar />

        {/* ── Main Content ── */}
        <main>
          <NetworkStatus />
          {children}
        </main>

        {/* ── Footer ── */}
        <FooterBar />

        {/* ── Service Worker Registration ── */}
        <script dangerouslySetInnerHTML={{ __html: `
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then(reg => {
          // Check for updates every 5 minutes (not 60s — too aggressive)
          setInterval(() => {
            reg.update().catch(() => {});
          }, 300000);

          // Handle SW updates with user notification
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available — activate immediately
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                }
              });
            }
          });

          // Refresh page when new SW takes over
          let refreshing = false;
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
              refreshing = true;
              window.location.reload();
            }
          });
        })
        .catch(() => {});
    });
  }
`}} />
        <AutoLangRedirect />
        <HrefLangTags />
        <PWAInstall />
        <Analytics />
      </body>
    </html>
  )
}
