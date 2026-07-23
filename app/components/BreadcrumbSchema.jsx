/**
 * BreadcrumbSchema — JSON-LD BreadcrumbList. Portado sin cambios de lógica
 * desde _legacy-app/components/BreadcrumbSchema.jsx (era correcto).
 *
 * @param {{name:string, url:string}[]} items - url debe ser un path relativo ("/cdmx/")
 */
export default function BreadcrumbSchema({ items }) {
  if (!items || items.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://metroguia.mx${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
