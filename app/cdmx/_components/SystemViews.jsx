/**
 * SystemViews.jsx — las 3 plantillas que renderizan los 6 sistemas CDMX
 * (Metrobús, Cablebús, Mexicable, Trolebús, Tren Ligero, Tren Suburbano)
 * a partir del registro normalizado de lib/cdmx-systems.js. Cada
 * app/cdmx/<sistema>/**\/page.jsx es un wrapper delgado (generateStaticParams
 * + generateMetadata) que llama a uno de estos tres componentes.
 *
 * Reglas de contenido (mismas que /estacion, /linea — REBUILD_SPEC.md):
 * SIN Mundial/FIFA (lib/content-clean.js), SIN marco de "turismo" (nada de
 * "mejor horario para visitar", itinerarios de un día, "lugares imperdibles").
 * Datos densos y reales: líneas, estaciones, correspondencias, tarifas.
 */

import { estaciones as metroEstaciones } from '@/data/estaciones'
import { cleanParagraph, cleanList } from '@/lib/content-clean'
import { resolveLineStops, resolveTransferLink } from '@/lib/cdmx-systems'
import { buildAllStationLdPayloads } from '@/lib/station-schema'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import PageHero from './PageHero'
import { IntroCard, FactGrid, TipsCard, NoteCard, PoiGrid, LinkGrid, StopsList, BottomNav, SectionHeading } from './Blocks'

const METRO_BY_SLUG = new Map(metroEstaciones.map((e) => [e.slug, e]))

/* ────────────────────────────── Hub del sistema ───────────────────────── */

export function SystemHubPage({ sistema }) {
  const lineas = Object.values(sistema.lineas)
  const breadcrumb = [
    { label: 'MetroGuia', href: '/' },
    { label: 'CDMX', href: '/cdmx/' },
    { label: sistema.nombre, href: `/cdmx/${sistema.slug}/` },
  ]
  const descripcion = cleanParagraph(sistema.descripcion)
  const historia = cleanParagraph(sistema.historia)

  return (
    <>
      <BreadcrumbSchema items={breadcrumb.map((b) => ({ name: b.label, url: b.href }))} />

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow="CDMX · Transporte público"
        title={sistema.nombre}
        subtitle={descripcion?.split(/(?<=[.!?])\s+/)[0]}
        accentColor={sistema.colorSistema}
        crest={sistema.icono || sistema.nombreCorto?.slice(0, 2)}
        stats={[
          { label: 'Líneas', value: String(sistema.totalLineasReal) },
          { label: 'Estaciones', value: String(sistema.totalEstacionesReal) },
          { label: 'Tarifa', value: sistema.tarifa || 'Por confirmarse' },
          { label: 'Operador', value: sistema.operador || 'Por confirmarse' },
        ]}
      />

      <section className="section">
        <div className="container-narrow">
          <IntroCard>{descripcion}</IntroCard>

          <FactGrid
            items={[
              { label: 'Operador', value: sistema.operador },
              { label: 'Inauguración', value: sistema.inauguracion },
              { label: 'Tarifa', value: sistema.tarifa },
              { label: 'Horario', value: sistema.horario },
            ]}
          />

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <SectionHeading icon="🚏">Líneas</SectionHeading>
            <div className="mg-sys-lineas">
              {lineas.map((l) => (
                <a key={l.id} href={`/cdmx/${sistema.slug}/linea/${l.id}/`} className="mg-sys-linea-card" style={{ borderTopColor: l.color }}>
                  <span className="mg-sys-linea-crest" style={{ background: l.color }}>
                    {l.nombreCorto || l.id}
                  </span>
                  <div>
                    <h3>{l.nombre}</h3>
                    <p className="mg-sys-linea-route">
                      {l.inicio} ↔ {l.fin}
                    </p>
                    <p className="mg-sys-linea-total">{l.total} estaciones</p>
                  </div>
                </a>
              ))}
            </div>
            <style>{`
              .mg-sys-lineas { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--space-3); }
              .mg-sys-linea-card { display: flex; gap: var(--space-3); align-items: flex-start; padding: var(--space-4); border: 1px solid var(--border); border-top: 4px solid var(--border-strong); border-radius: var(--radius); background: var(--bg); text-decoration: none; color: var(--text); }
              .mg-sys-linea-card:hover { box-shadow: var(--shadow-md); }
              .mg-sys-linea-crest { width: 2.5rem; height: 2.5rem; border-radius: 50%; color: #fff; font-family: var(--font-display); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
              .mg-sys-linea-card h3 { margin: 0 0 0.15rem; font-size: 0.98rem; }
              .mg-sys-linea-route { margin: 0; font-size: 0.82rem; color: var(--text-muted); }
              .mg-sys-linea-total { margin: 0.2rem 0 0; font-size: 0.76rem; color: var(--text-dim); }
            `}</style>
          </div>

          {historia && (
            <NoteCard icon="📜" title="Historia del sistema" accentColor={sistema.colorSistema}>
              {historia}
            </NoteCard>
          )}

          <TipsCard title="Datos prácticos" tips={cleanList(sistema.tips)} />

          <BottomNav
            links={[
              { href: '/cdmx/', label: 'Transporte CDMX', primary: true },
              { href: '/lineas/', label: 'Líneas del Metro' },
              { href: '/', label: 'Planificar una ruta' },
            ]}
          />
        </div>
      </section>
    </>
  )
}

/* ────────────────────────────── Línea del sistema ─────────────────────── */

export function SystemLinePage({ sistema, linea }) {
  const breadcrumb = [
    { label: 'MetroGuia', href: '/' },
    { label: 'CDMX', href: '/cdmx/' },
    { label: sistema.nombre, href: `/cdmx/${sistema.slug}/` },
    { label: linea.nombre || `Línea ${linea.id}`, href: `/cdmx/${sistema.slug}/linea/${linea.id}/` },
  ]
  const descripcion = cleanParagraph(linea.descripcion)
  const stops = resolveLineStops(sistema.slug, linea)

  const conexiones = (linea.conexiones_intermodales || [])
    .map((label) => resolveTransferLink(label))
    .filter((c) => c.href)

  return (
    <>
      <BreadcrumbSchema items={breadcrumb.map((b) => ({ name: b.label, url: b.href }))} />

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={`${sistema.nombre} · ${linea.colorNombre || ''}`}
        title={linea.nombre || `Línea ${linea.id}`}
        subtitle={`${linea.inicio} ↔ ${linea.fin}`}
        accentColor={linea.color}
        crest={linea.nombreCorto || linea.id}
        stats={[
          { label: 'Estaciones', value: String(linea.total) },
          { label: 'Distancia', value: linea.km ? `${linea.km} km` : 'Por confirmarse' },
          { label: 'Tarifa', value: linea.tarifa || sistema.tarifa || 'Por confirmarse' },
          { label: 'Recorrido', value: linea.tiempo_recorrido || 'Por confirmarse' },
        ]}
      />

      <section className="section">
        <div className="container-narrow">
          <IntroCard>{descripcion}</IntroCard>

          <FactGrid
            items={[
              { label: 'Inicio', value: linea.inicio },
              { label: 'Fin', value: linea.fin },
              { label: 'Alcaldías', value: Array.isArray(linea.zonas) ? linea.zonas.join(', ') : linea.alcaldia },
              { label: 'Horario', value: linea.horario },
            ]}
          />

          {conexiones.length > 0 && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <SectionHeading icon="🔄">Conexiones intermodales</SectionHeading>
              <LinkGrid items={conexiones.map((c) => ({ href: c.href, label: c.text }))} />
            </div>
          )}

          <div style={{ marginBottom: 'var(--space-6)' }}>
            <SectionHeading icon="🚏">Estaciones ({linea.total})</SectionHeading>
            <StopsList stops={stops} color={linea.color} hrefFor={(slug) => `/cdmx/${sistema.slug}/estacion/${slug}/`} />
          </div>

          <BottomNav
            links={[
              { href: `/cdmx/${sistema.slug}/`, label: `Todas las líneas de ${sistema.nombre}`, primary: true },
              { href: '/cdmx/', label: 'Transporte CDMX' },
              { href: '/', label: 'Planificar una ruta' },
            ]}
          />
        </div>
      </section>
    </>
  )
}

/* ────────────────────────────── Estación del sistema ──────────────────── */

export function SystemStationPage({ sistema, estacion }) {
  const linea = sistema.lineas[estacion.lineaId]
  const zona = estacion.alcaldia || estacion.municipio
  const intro = cleanParagraph(estacion.intro || estacion.descripcion_turistica)
  const tips = cleanList(estacion.tips)

  const breadcrumb = [
    { label: 'MetroGuia', href: '/' },
    { label: 'CDMX', href: '/cdmx/' },
    { label: sistema.nombre, href: `/cdmx/${sistema.slug}/` },
    ...(linea ? [{ label: linea.nombre || `Línea ${linea.id}`, href: `/cdmx/${sistema.slug}/linea/${linea.id}/` }] : []),
    { label: estacion.nombre, href: `/cdmx/${sistema.slug}/estacion/${estacion.slug}/` },
  ]

  // Transferencias en texto libre (metrobus/cablebus/mexicable) — se intenta
  // resolver a un link real; si no hay match seguro, se muestra como texto.
  const transferLinks = (estacion.transferencias || []).map((label) => resolveTransferLink(label))

  // conexiones_metro (trolebus/tren-ligero/tren-suburbano): slugs directos
  // de data/estaciones.js — se validan contra el índice real antes de linkear.
  const metroLinks = (estacion.conexiones_metro || [])
    .map((slug) => {
      const m = METRO_BY_SLUG.get(slug)
      return m ? { href: `/estacion/${slug}/`, text: `Metro ${m.nombre}` } : null
    })
    .filter(Boolean)

  const allConnections = [...transferLinks, ...metroLinks]

  // Description propia para el schema — nunca `estacion.meta_description`/
  // `.seo_title` crudos (dataset turístico anterior; ver lib/content-clean.js).
  const schemaDescription = `Estación ${estacion.nombre} de ${sistema.nombre} en ${zona || 'Ciudad de México'}. Conexiones, servicios cercanos y cómo llegar.`
  const estacionParaSchema = { ...estacion, meta_description: schemaDescription, descripcion_turistica: undefined }
  const stationLdPayloads = buildAllStationLdPayloads(estacionParaSchema, {
    cityPath: `cdmx/${sistema.slug}/`,
    cityName: 'Ciudad de México',
    region: zona,
    transportMode: sistema.nombre,
    linea: estacion.lineaId,
    lineLabel: linea ? linea.nombre || `Línea ${linea.id}` : undefined,
  })

  return (
    <>
      <BreadcrumbSchema items={breadcrumb.map((b) => ({ name: b.label, url: b.href }))} />
      {stationLdPayloads.map((p, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: p }} />
      ))}

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow={`${sistema.nombre}${linea ? ` · ${linea.nombre || `Línea ${linea.id}`}` : ''}`}
        title={estacion.nombre}
        subtitle={zona ? `${zona}${estacion.tipo_zona ? ` · Zona ${estacion.tipo_zona.replace(/_/g, ' ').replace(/-/g, ' ')}` : ''}` : undefined}
        accentColor={linea?.color || sistema.colorSistema}
        crest={linea?.nombreCorto || linea?.id || sistema.icono}
        stats={[
          { label: 'Sistema', value: sistema.nombreCorto || sistema.nombre },
          { label: 'Línea', value: linea?.nombreCorto || linea?.id || '—' },
          { label: 'Conexiones', value: String(allConnections.length) },
          { label: 'Servicios cerca', value: String((estacion.pois || []).length) },
        ]}
      />

      <section className="section">
        <div className="container-narrow">
          <IntroCard>{intro}</IntroCard>

          <FactGrid
            items={[
              { label: 'Alcaldía / municipio', value: zona },
              { label: 'Línea', value: linea?.nombre || linea?.id },
            ]}
          />

          {allConnections.length > 0 && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <SectionHeading icon="🔄">Conexiones y transbordos</SectionHeading>
              <LinkGrid
                items={allConnections.map((c) =>
                  c.href ? { href: c.href, label: c.text } : { label: c.text }
                )}
              />
            </div>
          )}

          {estacion.pois?.length > 0 && (
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <SectionHeading icon="📍">Servicios y referencias cercanas</SectionHeading>
              <PoiGrid pois={estacion.pois} />
            </div>
          )}

          <TipsCard title="Datos prácticos" tips={tips} />

          <BottomNav
            links={[
              ...(linea ? [{ href: `/cdmx/${sistema.slug}/linea/${linea.id}/`, label: `Ver ${linea.nombre || `Línea ${linea.id}`} completa`, primary: true }] : []),
              { href: `/cdmx/${sistema.slug}/`, label: `Todo ${sistema.nombre}` },
              { href: '/cdmx/', label: 'Transporte CDMX' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
