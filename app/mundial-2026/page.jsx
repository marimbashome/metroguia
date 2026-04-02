import MundialPageContent from './MundialPageClient'

export const metadata = {
  title: 'Mundial FIFA 2026 México — Transporte a Estadios | MetroGuia',
  description: 'Guía completa de transporte para el Mundial FIFA 2026 en México. Cómo llegar al Estadio Azteca, Akron y BBVA en metro y transporte público. 13 partidos, 3 ciudades.',
  keywords: 'mundial 2026, estadio azteca, metro cdmx, como llegar, fifa, estadio akron, estadio bbva',
  alternates: {
    canonical: 'https://metroguia.mx/mundial-2026/',
  },
  openGraph: {
    title: 'Mundial FIFA 2026 México — Guía de Transporte Público',
    description: 'Cómo llegar a los 13 partidos del Mundial en CDMX, Guadalajara y Monterrey. Rutas en metro, horarios y tips.',
    url: 'https://metroguia.mx/mundial-2026/',
    type: 'website',
    siteName: 'MetroGuia.mx',
    images: [{ url: 'https://metroguia.mx/og-image.png', width: 1200, height: 630, alt: 'Mundial FIFA 2026 — Transporte público en México' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mundial FIFA 2026 — Transporte a Estadios en México',
    description: '13 partidos en 3 ciudades. Guía de metro y transporte público al Azteca, Akron y BBVA.',
    images: ['https://metroguia.mx/og-image.png'],
  },
}

export default function MundialPage() {
  return <MundialPageContent />
}
