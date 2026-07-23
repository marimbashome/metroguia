import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const GA4_ID = 'G-7YQMP6V81D'

export const metadata = {
  title: {
    default: 'MetroGuia.mx — Rutas de transporte público en México',
    template: '%s | MetroGuia.mx',
  },
  description:
    'Planifica tu ruta en Metro, Metrobús, Tren Ligero y BRT en 16 ciudades de México. Transbordos, estaciones y costos, sin relleno.',
  metadataBase: new URL('https://metroguia.mx'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://metroguia.mx',
    siteName: 'MetroGuia.mx',
    locale: 'es_MX',
    title: 'MetroGuia.mx — Rutas de transporte público en México',
    description:
      'Planifica tu ruta en Metro, Metrobús, Tren Ligero y BRT en 16 ciudades de México.',
    images: [
      {
        url: 'https://metroguia.mx/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MetroGuia.mx',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetroGuia.mx — Rutas de transporte público en México',
    description: 'Planifica tu ruta en Metro, Metrobús, Tren Ligero y BRT en 16 ciudades de México.',
    images: ['https://metroguia.mx/og-image.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1F3A2E',
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MetroGuia.mx',
    url: 'https://metroguia.mx',
    logo: 'https://metroguia.mx/logo.png',
    description: 'Planificador de rutas de transporte público en 16 ciudades de México.',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MetroGuia.mx',
    url: 'https://metroguia.mx',
    description: 'Trip planner de transporte público en México: Metro, Metrobús, Tren Ligero y BRT.',
    inLanguage: 'es-MX',
    publisher: { '@type': 'Organization', name: 'MetroGuia.mx' },
  }

  return (
    <html lang="es" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
            `,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Saltar al contenido</a>
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
