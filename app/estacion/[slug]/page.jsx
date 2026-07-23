import { estaciones } from '@/data/estaciones'
import { lineasDetalle } from '@/data/lineas-detalle'
import { grafo } from '@/data/grafo'
import { getCdmxRouteSlugs } from '@/data/built-routes'
import { getLineColor, formatLineLabel } from '@/lib/lineLabels'
import { cleanParagraph, cleanList } from '@/lib/content-clean'
import { buildAllStationLdPayloads } from '@/lib/station-schema'
import { resolveAnyCdmxStationHref } from '@/lib/cdmx-systems'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import PageHero from '@/app/cdmx/_components/PageHero'
import { IntroCard, FactGrid, TipsCard, NoteCard, PoiGrid, LinkGrid, BottomNav, SectionHeading } from '@/app/cdmx/_components/Blocks'

const ESTACIONES_BY_SLUG = new Map(estaciones.map((e) => [e.slug, e]))

// Todas las estaciones del Metro CDMX — /estacion/[slug]/ (raíz, sin prefijo de ciudad).
export function generateStaticParams() {
  return estaciones.map((e) => ({ slug: e.slug }))
}

/**
 * Description propia (metadata + JSON-LD) — NUNCA usa `estacion.meta_description`
 * ni `estacion.descripcion_turistica` crudos: esos campos vienen del dataset
 * turístico anterior y varios traen menciones a Mundial/FIFA. Se escribe aquí
 * desde campos estructurados (nombre/línea/alcaldía/transferencias), que no
 * tienen ese problema.
 */
function buildDescription(estacion, linea) {
  const transbordos =
    estacion.transferencias?.length > 0
      ? `Transbordo a Línea${estacion.transferencias.length > 1 ? 's' : ''} ${estacion.transferencias.join(', ')}. `
      : ''
  return `Estación ${estacion.nombre} de la Línea ${linea} del Metro CDMX, Alcaldía ${estacion.alcaldia}. ${transbordos}Horarios, accesos y estaciones cercanas.`
}

export function generateMetadata({ params }) {
  const estacion = ESTACIONES_BY_SLUG.get(params.slug)
  if (!estacion) return { title: 'Estación no encontrada' }

  const linea = estacion.lineas?.[0] || '?'
  const title = `Estación ${estacion.nombre} — Línea ${linea} Metro CDMX`
  const description = buildDescription(estacion, linea)

  return {
    title,
    description,
    alternates: { canonical: `/estacion/${estacion.slug}/` },
    openGraph: { title, description, url: `https://metroguia.mx/estacion/${estacion.slug}/`, type: 'website' },
  }
}

export default function EstacionPage({ params }) {
  const estacion = ESTACIONES_BY_SLUG.get(params.slug)
  if (!estacion) {
    return (
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1>Estación no encontrada</h1>
          <p>
            <a href="/lineas/">Ver todas las líneas del Metro CDMX</a>
          </p>
        </div>
      </section>
    )
  }

  const lineaPrincipal = estacion.lineas?.[0]
  const lineaDetalle = lineasDetalle[lineaPrincipal]
  const color = getLineColor(lineaPrincipal)

  const intro = cleanParagraph(estacion.intro)
  const tips = cleanList(estacion.tips)

  const breadcrumb = [
    { label: 'MetroGuia', href: '/' },
    { label: 'CDMX', href: '/cdmx/' },
    { label: `Línea ${lineaPrincipal}`, href: `/linea/${lineaPrincipal}/` },
    { label: estacion.nombre, href: `/estacion/${estacion.slug}/` },
  ]

  // `estacion.meta_description`/`.descripcion_turistica` crudos NO se pasan al
  // schema builder — varios traen menciones a Mundial/FIFA del dataset
  // turístico anterior (ver buildDescription arriba). Se sobreescriben con la
  // description propia, ya limpia.
  const estacionParaSchema = { ...estacion, meta_description: buildDescription(estacion, lineaPrincipal), descripcion_turistica: undefined }
  const stationLdPayloads = buildAllStationLdPayloads(estacionParaSchema, {
    cityName: 'Ciudad de México',
    region: estacion.alcaldia,
    linea: lineaPrincipal,
    lineLabel: lineaDetalle ? `Línea ${lineaPrincipal} del Metro CDMX` : undefined,
  })

  const nearby = buildNearby(estacion.slug)
  const rutas = buildPopularRoutes(estacion.slug)

  return (
    <>
      <BreadcrumbSchema items={breadcrumb.map((b) => ({ name: b.label, url: b.href }))} />
      {stationLdPayloads.map((p, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: p }} />
      ))}

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={`Metro CDMX · Línea ${lineaPrincipal}${lineaDetalle?.colorNombre ? ` · ${lineaDetalle.colorNombre}` : ''}`}
        title={estacion.nombre}
        subtitle={`Alcaldía ${estacion.alcaldia}${estacion.tipo_zona ? ` · Zona ${estacion.tipo_zona.replace(/-/g, ' ')}` : ''}`}
        accentColor={color}
        crest={lineaPrincipal}
        stats={[
          { label: 'Línea', value: lineaPrincipal },
          { label: 'Transbordos', value: String(estacion.transferencias?.length || 0) },
          { label: 'Servicios cerca', value: String((estacion.pois || []).length) },
          { label: 'Horario', value: `${estacion.horarios?.apertura || '5:00'}–${estacion.horarios?.cierre || '0:00'}` },
        ]}
      />

      <section className="section">
        <div className="container-narrow">
          <IntroCard>{intro}</IntroCard>

          <FactGrid
            items={[
              { label: 'Alcaldía', value: estacion.alcaldia },
              { label: 'Apertura', value: estacion.horarios?.apertura },
              { label: 'Cierre', value: estacion.horarios?.cierre },
              { label: 'Accesibilidad', value: estacion.accesibilidad?.elevador ? 'Elevador' : estacion.accesibilidad?.rampa ? 'Rampa' : 'Por confirmarse' },
            ]}
          />

          {estacion.transferencias?.length > 0 && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <SectionHeading icon="🔄">Transbordos disponibles</SectionHeading>
              <LinkGrid
                items={estacion.transferencias.map((t) => ({
                  href: `/linea/${t}/`,
                  label: `Línea ${t}`,
                  color: getLineColor(t),
                }))}
              />
            </div>
          )}

          {estacion.accesibilidad?.notas && (
            <NoteCard icon="♿" title="Accesos y accesibilidad" accentColor={color}>
              {estacion.accesibilidad.notas}
            </NoteCard>
          )}

          {estacion.pois?.length > 0 && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <SectionHeading icon="📍">Servicios y referencias cercanas</SectionHeading>
              <PoiGrid pois={estacion.pois} />
            </div>
          )}

          <TipsCard title="Datos prácticos" tips={tips} />

          {nearby.length > 0 && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <SectionHeading icon="🚇">Estaciones y conexiones cercanas</SectionHeading>
              <div className="mg-nearby-grid">
                {nearby.map((n) => (
                  <a key={n.slug} href={n.href} className="mg-nearby-card" style={{ borderLeftColor: n.color }}>
                    <span className="mg-nearby-name">{n.nombre}</span>
                    <span className="mg-nearby-meta">{n.meta}</span>
                  </a>
                ))}
              </div>
              <style>{`
                .mg-nearby-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-3); }
                .mg-nearby-card { display: flex; flex-direction: column; gap: 0.15rem; padding: var(--space-3) var(--space-4); border: 1px solid var(--border); border-left: 4px solid var(--border-strong); border-radius: var(--radius-sm); text-decoration: none; background: var(--bg); }
                .mg-nearby-card:hover { box-shadow: var(--shadow-sm); }
                .mg-nearby-name { font-weight: 700; color: var(--text); font-size: 0.9rem; }
                .mg-nearby-meta { font-size: 0.76rem; color: var(--text-dim); }
              `}</style>
            </div>
          )}

          {rutas.length > 0 && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <SectionHeading icon="🗺️">Rutas populares desde {estacion.nombre}</SectionHeading>
              <LinkGrid items={rutas.map((r) => ({ href: `/ruta/${r.slug}/`, label: r.label }))} />
            </div>
          )}

          <BottomNav
            links={[
              { href: `/linea/${lineaPrincipal}/`, label: `Ver Línea ${lineaPrincipal} completa`, primary: true },
              { href: '/lineas/', label: 'Todas las líneas' },
              { href: '/cdmx/', label: 'Transporte CDMX' },
            ]}
          />
        </div>
      </section>
    </>
  )
}

/**
 * "Estaciones y conexiones cercanas" — a partir de `data/grafo.js`
 * (adyacencias reales: misma línea + transbordos, incluye transferencias a
 * otros sistemas CDMX cuando el grafo las registra). Solo genera un link
 * cuando la página destino existe de verdad en este lote.
 */
function buildNearby(slug) {
  const node = grafo[slug]
  if (!node) return []
  const seen = new Set([slug])
  const out = []
  for (const adj of node.adyacentes || []) {
    if (seen.has(adj.slug)) continue
    const href = resolveAnyCdmxStationHref(adj.slug)
    if (!href) continue
    seen.add(adj.slug)
    const targetNode = grafo[adj.slug]
    const isTransfer = adj.tipo !== 'linea'
    out.push({
      slug: adj.slug,
      href,
      nombre: targetNode?.nombre || adj.slug,
      meta: isTransfer ? `Transbordo · ${adj.tiempo} min` : `${formatLineLabel(adj.linea)} · ${adj.tiempo} min`,
      color: isTransfer ? 'var(--amber)' : getLineColor(adj.linea),
    })
  }
  return out.slice(0, 8)
}

/**
 * "Rutas populares desde aquí" — usa `data/built-routes.js#getCdmxRouteSlugs()`,
 * la MISMA lista que generará las páginas /ruta/[slug]/ (agente Rutas), así
 * que cada link apunta a una página que sí va a existir. No se usa el campo
 * `titulo` de data/rutas-populares.js (tiene copy de Mundial/Estadio Azteca)
 * — el label se arma aquí con el nombre real de la estación destino.
 */
let _cdmxRouteSlugsCache = null
function buildPopularRoutes(slug, limit = 6) {
  if (!_cdmxRouteSlugsCache) {
    try {
      _cdmxRouteSlugsCache = getCdmxRouteSlugs()
    } catch {
      _cdmxRouteSlugsCache = []
    }
  }
  const out = []
  const outRe = new RegExp(`^${escapeRe(slug)}-a-(.+)$`)
  for (const routeSlug of _cdmxRouteSlugsCache) {
    const m = routeSlug.match(outRe)
    if (!m) continue
    const destinoSlug = m[1]
    const destinoNombre = ESTACIONES_BY_SLUG.get(destinoSlug)?.nombre || humanize(destinoSlug)
    out.push({ slug: routeSlug, label: `→ ${destinoNombre}` })
    if (out.length >= limit) break
  }
  return out
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function humanize(slug) {
  return slug
    .split('-')
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
}
