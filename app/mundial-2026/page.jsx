import MundialPageContent from './MundialPageClient'

export const metadata = {
  title: 'FIFA World Cup 2026 — Transit Guide to All 16 Stadiums | MetroGuia',
  description: 'Complete transit guide to all 16 FIFA World Cup 2026 stadiums in USA, Mexico & Canada. Step-by-step directions by metro, rail & bus to MetLife, SoFi, Azteca and more.',
  keywords: 'world cup 2026, fifa 2026 stadiums, transit guide, metlife stadium, sofi stadium, estadio azteca, how to get there, public transit',
  alternates: {
    canonical: 'https://metroguia.mx/mundial-2026/',
  },
  openGraph: {
    title: 'FIFA World Cup 2026 — Transit Guide to All 16 Stadiums',
    description: 'How to get to every FIFA 2026 stadium by public transit. 16 venues across USA, Mexico & Canada with step-by-step directions.',
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
