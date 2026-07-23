import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import { getLineColor } from '@/lib/lineLabels'
import { cleanParagraph } from '@/lib/content-clean'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import PageHero from '@/app/cdmx/_components/PageHero'
import { IntroCard, FactGrid, SectionHeading, StopsList, LinkGrid, BottomNav } from '@/app/cdmx/_components/Blocks'

const ESTACIONES_BY_SLUG = new Map(estaciones.map((e) => [e.slug, e]))

export function generateStaticParams() {
  return Object.keys(lineasDetalle).map((id) => ({ id }))
}

export function generateMetadata({ params }) {
  const linea = lineasDetalle[params.id]
  if (!linea) return { title: 'Línea no encontrada' }
  const title = `Línea ${linea.id}${linea.colorNombre ? ` (${linea.colorNombre})` : ''} del Metro CDMX — Estaciones y correspondencias`
  const description = `Línea ${linea.id} del Metro CDMX: ${linea.total} estaciones de ${linea.inicio} a ${linea.fin}. Correspondencias, alcaldías que recorre y estaciones.`
  return {
    title,
    description,
    alternates: { canonical: `/linea/${linea.id}/` },
    openGraph: { title, description, url: `https://metroguia.mx/linea/${linea.id}/`, type: 'website' },
  }
}

export default function LineaPage({ params }) {
  const linea = lineasDetalle[params.id]
  if (!linea) {
    return (
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1>Línea no encontrada</h1>
          <p>
            <a href="/lineas/">Ver todas las líneas del Metro CDMX</a>
          </p>
        </div>
      </section>
    )
  }

  const color = getLineColor(linea.id)
  const descripcion = cleanParagraph(linea.descripcion)

  const breadcrumb = [
    { label: 'MetroGuia', href: '/' },
    { label: 'CDMX', href: '/cdmx/' },
    { label: 'Líneas', href: '/lineas/' },
    { label: `Línea ${linea.id}`, href: `/linea/${linea.id}/` },
  ]

  const stops = linea.estaciones.map((s) => ({
    slug: s.slug,
    nombre: s.nombre,
    pagina: ESTACIONES_BY_SLUG.has(s.slug),
  }))

  // Correspondencias reales: otras líneas que se cruzan en algún punto de esta.
  const interchangeLines = new Set()
  for (const s of linea.estaciones) {
    const full = ESTACIONES_BY_SLUG.get(s.slug)
    for (const l of full?.lineas || []) {
      if (l !== linea.id) interchangeLines.add(l)
    }
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumb.map((b) => ({ name: b.label, url: b.href }))} />

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={`Metro CDMX · ${linea.colorNombre || ''}`}
        title={`Línea ${linea.id}`}
        subtitle={`${linea.inicio} ↔ ${linea.fin}`}
        accentColor={color}
        crest={linea.id}
        stats={[
          { label: 'Estaciones', value: String(linea.total) },
          { label: 'Correspondencias', value: String(interchangeLines.size) },
          { label: 'Alcaldías', value: String((linea.zonas || []).length) },
          { label: 'Color', value: linea.colorNombre || '—' },
        ]}
      />

      <section className="section">
        <div className="container-narrow">
          <IntroCard>{descripcion}</IntroCard>

          <FactGrid
            items={[
              { label: 'Inicio', value: linea.inicio },
              { label: 'Fin', value: linea.fin },
              { label: 'Alcaldías', value: (linea.zonas || []).join(', ') },
            ]}
          />

          {interchangeLines.size > 0 && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <SectionHeading icon="🔄">Correspondencias</SectionHeading>
              <LinkGrid
                items={[...interchangeLines].sort().map((l) => ({
                  href: `/linea/${l}/`,
                  label: `Línea ${l}`,
                  color: getLineColor(l),
                }))}
              />
            </div>
          )}

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <SectionHeading icon="🚇">Estaciones ({linea.total})</SectionHeading>
            <StopsList stops={stops} color={color} hrefFor={(slug) => `/estacion/${slug}/`} />
          </div>

          <BottomNav
            links={[
              { href: '/lineas/', label: 'Todas las líneas', primary: true },
              { href: '/cdmx/', label: 'Transporte CDMX' },
              { href: '/', label: 'Planificar una ruta' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
