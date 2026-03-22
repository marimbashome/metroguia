import './globals.css'

export const metadata = {
  title: 'MetroGuia.mx — Guía de transporte CDMX',
  description: 'Guía completa del Metro CDMX para turistas. Líneas, estaciones, cómo llegar a eventos del Mundial FIFA 2026 en el Estadio Azteca. Planifica tu viaje en metro.',
  keywords: 'metro CDMX, transporte, guía turística, mundial 2026, estaciones',
  metadataBase: new URL('https://metroguia.mx'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'XXXXXXXXXX', // reemplaza con tu código de verificación de Google Search Console
  },
  openGraph: {
    title: 'MetroGuia.mx',
    description: 'Tu guía de transporte en el Metro de la Ciudad de México',
    type: 'website',
    url: 'https://metroguia.mx',
    siteName: 'MetroGuia.mx',
    locale: 'es_MX',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google AdSense — reemplaza ca-pub-XXXXXXXXXX con tu Publisher ID real */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5779958677522085"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-5779958677522085" />
      </head>
      <body>
        <header style={{
          backgroundColor: 'var(--metro-dark)',
          color: 'white',
          padding: '0.875rem 1.5rem',
          borderBottom: '4px solid var(--metro-orange)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div className="nav-header">
            <div className="nav-brand">
              <img src="/logo.png" alt="MetroGuia Logo" style={{ height: '36px', width: 'auto' }} />
              <h2>MetroGuia</h2>
            </div>
            <nav className="nav-links">
              <a href="/">Inicio</a>
              <a href="/lineas/">Líneas</a>
              <a href="/mundial-2026/">Mundial 2026</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ backgroundColor: 'var(--metro-dark)', color: 'white', padding: '3rem 2rem', textAlign: 'center', marginTop: '4rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ marginBottom: '1rem' }}>MetroGuia.mx © 2026 — Tu guía de transporte en el Metro CDMX</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '1rem' }}>Información actualizada para turistas del Mundial FIFA 2026</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.875rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'var(--metro-orange)' }}>Contacto</a>
              <a href="/privacy-policy/" style={{ color: 'var(--metro-orange)' }}>Privacidad</a>
              <a href="#" style={{ color: 'var(--metro-orange)' }}>Términos</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
