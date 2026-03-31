import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas'
import ZonasArqueologicasContent from './ZonasArqueologicasContent'

export const metadata = {
  title: '188 Zonas Arqueológicas de México | MetroGuia',
  description: 'Guía completa de 188 zonas arqueológicas de México: horarios, costos, cómo llegar y patrimonio UNESCO. De Teotihuacán a Ichkabal.',
  keywords: ['zonas arqueológicas', 'arqueología', 'patrimonio', 'turismo cultural', 'México', 'UNESCO', 'prehispánico', 'INAH'],
  openGraph: {
    title: '188 Zonas Arqueológicas de México | MetroGuia',
    description: 'Guía completa de 188 zonas arqueológicas de México: horarios, costos, cómo llegar y patrimonio UNESCO. De Teotihuacán a Ichkabal.',
    type: 'website',
    url: 'https://metroguia.mx/turismo/zonas-arqueologicas',
    images: [{
      url: 'https://metroguia.mx/og-zonas-arqueologicas.jpg',
      width: 1200,
      height: 630,
      alt: 'Zonas Arqueológicas de México'
    }]
  },
  alternates: {
    canonical: 'https://metroguia.mx/turismo/zonas-arqueologicas'
  }
}

export default function ZonasArqueologicasPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "MetroGuia",
        "item": "https://metroguia.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Turismo",
        "item": "https://metroguia.mx/turismo"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Zonas Arqueológicas",
        "item": "https://metroguia.mx/turismo/zonas-arqueologicas"
      }
    ]
  }

  const unescoCount = zonasArqueologicas.filter(z => z.unesco).length
  const statesCount = new Set(zonasArqueologicas.map(z => z.estado)).size

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": zonasArqueologicas.map((zona, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": zona.nombre,
      "url": `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}`,
      "description": zona.meta_description
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        suppressHydrationWarning
      />
      <ZonasArqueologicasContent
        zonas={zonasArqueologicas}
        unescoCount={unescoCount}
        statesCount={statesCount}
      />
    </>
  )
}
