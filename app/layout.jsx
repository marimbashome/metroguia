import './globals.css'

export const metadata = {
  title: 'MetroGuia.mx — Guía de transporte CDMX',
  description: 'Guía completa del Metro CDMX para turistas. Líneas, estaciones, cómo llegar a eventos del Mundial FIFA 2026 en el Estadio Azteca. Planifica tu viaje en metro.',
  keywords: 'metro CDMX, transporte, guía turística, mundial 2026, estaciones',
  openGraph: {
    title: 'MetroGuia.mx',
    description: 'Tu guía de transporte en el Metro de la Ciudad de México',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header style={{
          backgroundColor: 'var(--metro-dark)',
          color: 'white',
          padding: '1rem 2rem',
          borderBottom: '4px solid var(--metro-orange)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="/logo.png" alt="MetroGuia Logo" style={{ height: '40px', width: 'auto' }} />
              <h1 style={{ fontSize: '1.5rem', margin: 0 }}>MetroGuia</h1>
            </div>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: 'white', fontWeight: 500 }}>Inicio</a>
              <a href="/lineas/" style={{ color: 'white', fontWeight: 500 }}>Líneas</a>
              <a href="/mundial-2026/" style={{ color: 'white', fontWeight: 500 }}>Mundial 2026</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ backgroundColor: 'var(--metro-dark)', color: 'white', padding: '3rem 2rem', textAlign: 'center', marginTop: '4rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ marginBottom: '1rem' }}>MetroGuia.mx © 2026 — Tu guía de transporte en el Metro CDMX</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '1rem' }}>Información actualizada para turistas del Mundial FIFA 2026</p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '0.875rem' }}>
              <a href="#" style={{ color: 'var(--metro-orange)' }}>Contacto</a>
              <a href="#" style={{ color: 'var(--metro-orange)' }}>Privacidad</a>
              <a href="#" style={{ color: 'var(--metro-orange)' }}>Términos</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
