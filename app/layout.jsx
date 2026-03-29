import './globals-v2.css'
import { Analytics } from '@vercel/analytics/react'
import PWAInstall from '@/app/components/PWAInstall'

export const metadata = {
  title: 'MetroGuia.mx — Planifica tu ruta en metro, tren ligero y BRT en México',
  description: 'Trip planner de transporte urbano en México. Calcula rutas en metro, tren ligero y BRT para CDMX, Guadalajara y Monterrey. Guía para el Mundial FIFA 2026.',
  keywords: 'metro CDMX, transporte público México, trip planner metro, mundial 2026, estaciones metro',
  metadataBase: new URL('https://metroguia.mx'),
  alternates: {
    canonical: '/',
    languages: {
      'es': 'https://metroguia.mx',
      'en': 'https://metroguia.mx/en/',
      'pt': 'https://metroguia.mx/pt/',
      'fr': 'https://metroguia.mx/fr/',
      'de': 'https://metroguia.mx/de/',
      'ja': 'https://metroguia.mx/ja/',
      'ko': 'https://metroguia.mx/ko/',
      'x-default': 'https://metroguia.mx',
    }
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
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'MetroGuia.mx',
    'url': 'https://metroguia.mx',
    'description': 'Trip planner de transporte urbano en México',
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
        <meta name="description" content="Trip planner de transporte urbano en México. Calcula rutas en metro, tren ligero y BRT para CDMX, Guadalajara y Monterrey. Guía para el Mundial FIFA 2026." />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F5A623" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5779958677522085"
          crossOrigin="anonymous"
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
      </head>
      <body>
        {/* ── Navigation ── */}
        <header style={{
          backgroundColor: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            {/* Logo */}
            <a href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              textDecoration: 'none',
            }}>
              <img
                src="/logo.png"
                alt="MetroGuia"
                style={{ height: '32px', width: 'auto', borderRadius: '6px' }}
              />
              <span style={{
                fontSize: '1.125rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '-0.02em',
              }}>
                MetroGuia
              </span>
            </a>

            {/* Nav Links */}
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}>
              <a href="/lineas/" style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}>Líneas</a>
              <a href="/mundial-2026/" style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}>Mundial 2026</a>
              <a href="/hospedaje/" style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}>Hospedaje</a>

              {/* City pills */}
              <div style={{
                display: 'flex',
                gap: '0.375rem',
                borderLeft: '1px solid var(--border)',
                paddingLeft: '1rem',
                marginLeft: '0.25rem',
              }}>
                <a href="/cdmx/" style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.625rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--primary-glow)',
                  border: '1px solid var(--primary-border)',
                  color: 'var(--primary)',
                  textDecoration: 'none',
                }}>CDMX</a>
                <a href="/gdl/" style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.625rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  color: '#06B6D4',
                  textDecoration: 'none',
                }}>GDL</a>
                <a href="/mty/" style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.625rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(236,72,153,0.1)',
                  border: '1px solid rgba(236,72,153,0.3)',
                  color: '#EC4899',
                  textDecoration: 'none',
                }}>MTY</a>
              </div>
            </nav>
          </div>
        </header>

        {/* ── Main Content ── */}
        <main>{children}</main>

        {/* ── Footer ── */}
        <footer style={{
          backgroundColor: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          padding: '3rem 1rem',
          marginTop: '4rem',
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Top row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '2rem',
              marginBottom: '2rem',
            }}>
              <div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  marginBottom: '0.5rem',
                }}>MetroGuia.mx</div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  maxWidth: '300px',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  Trip planner de transporte urbano en México. Calcula rutas, explora estaciones y viaja como local.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                <div>
                  <h6 style={{ color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Ciudades</h6>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="/cdmx/" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>CDMX</a>
                    <a href="/gdl/" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Guadalajara</a>
                    <a href="/mty/" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Monterrey</a>
                  </div>
                </div>
                <div>
                  <h6 style={{ color: 'var(--text-dim)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Recursos</h6>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="/lineas/" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Líneas</a>
                    <a href="/mundial-2026/" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Mundial 2026</a>
                    <a href="/privacy-policy/" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>Privacidad</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              <p style={{
                margin: 0,
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
              }}>
                MetroGuia.mx © 2026
              </p>
              <p style={{
                margin: 0,
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
              }}>
                CDMX · Guadalajara · Monterrey — Información para turistas del Mundial FIFA 2026
              </p>
            </div>
          </div>
        </footer>

        {/* ── Service Worker Registration ── */}
        <script dangerouslySetInnerHTML={{ __html: `
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then(reg => {
          console.log('MetroGuia SW registered, scope:', reg.scope);
          
          // Check for updates periodically
          setInterval(() => {
            reg.update().catch(err => console.log('SW update check failed:', err));
          }, 60000); // Check every 60 seconds
          
          // Handle SW updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('MetroGuia SW update available');
                }
              });
            }
          });
        })
        .catch(err => console.log('SW registration failed:', err));
    });
  }
`}} />
        <PWAInstall />
        <Analytics />
      </body>
    </html>
  )
}
