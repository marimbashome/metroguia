import { findRoute } from '@/lib/pathfinder'
import { getCityBundle } from './registry'
import { resolveRoutePair, nombreEstacion, estacionesDeLinea } from './lib'
import { CityHubView, SystemHubView, StationView, LineView, RouteView } from './views'
import { hubMetadata, stationMetadata, lineMetadata, routeMetadata } from './meta'

/**
 * app/_city/pages.jsx — factories que devuelven {generateStaticParams,
 * generateMetadata, default} para cada tipo de página de ciudad. Cada
 * page.jsx real (app/<ciudad>/.../page.jsx) es un archivo delgado que llama
 * a una de estas factories y re-exporta el resultado — evita repetir la
 * misma lógica 15 veces (hub + estación + línea + ruta × 15 ciudades).
 */

function slugToNames(slug, estaciones, grafo) {
  const validSlugs = new Set(estaciones.map((e) => e.slug))
  const pair = resolveRoutePair(slug, validSlugs)
  if (!pair) return null
  return {
    ...pair,
    origenNombre: nombreEstacion(estaciones, grafo, pair.origen),
    destinoNombre: nombreEstacion(estaciones, grafo, pair.destino),
  }
}

/* ── Hub: /<ciudad>/ ─────────────────────────────────────────────────── */
export function makeCityHubPage(citySlug, opts = {}) {
  const bundle = getCityBundle(citySlug)
  const estaciones = opts.estaciones || bundle.estaciones
  const lineas = opts.lineas || bundle.lineas
  const basePath = opts.basePath || `/${citySlug}/`
  const systemsLabel = opts.systemsLabel || (bundle.config.systems || []).join(', ') || 'Transporte público'
  const subsistemas = opts.subsistemas || []

  const exampleRoutes = (bundle.routeSlugs || [])
    .slice(0, 60)
    .map((slug) => {
      const names = slugToNames(slug, bundle.estaciones, bundle.grafo)
      return names ? { slug, origenNombre: names.origenNombre, destinoNombre: names.destinoNombre } : null
    })
    .filter(Boolean)
    .slice(0, 6)

  return {
    generateMetadata: async () =>
      hubMetadata({
        cityConfig: bundle.config,
        path: basePath,
        totalLineas: lineas.length,
        totalEstaciones: estaciones.length,
        systemsLabel,
      }),
    default: function CityHubPage() {
      return (
        <CityHubView
          cityConfig={bundle.config}
          estaciones={estaciones}
          lineas={lineas}
          grafo={bundle.grafo}
          basePath={basePath}
          systemsLabel={systemsLabel}
          exampleRoutes={exampleRoutes}
          subsistemas={subsistemas}
        />
      )
    },
  }
}

/* ── Estación: /<ciudad>/estacion/[slug]/ ───────────────────────────── */
export function makeStationPage(citySlug, opts = {}) {
  const bundle = getCityBundle(citySlug)
  const estaciones = opts.estaciones || bundle.estaciones
  const basePath = opts.basePath || `/${citySlug}/`
  const linePath = opts.linePath || basePath
  const breadcrumbLabel = opts.breadcrumbLabel
  const crumbsFor = opts.crumbsFor // optional (estacion) => items[]
  const metaPathPrefix = opts.metaPathPrefix || basePath

  return {
    generateStaticParams: async () => estaciones.map((e) => ({ slug: e.slug })),
    generateMetadata: async ({ params }) => {
      const estacion = estaciones.find((e) => e.slug === params.slug)
      if (!estacion) return { title: 'Estación no encontrada', robots: { index: false, follow: false } }
      const grafoNode = bundle.grafo?.[estacion.slug]
      const lineasLabel = (grafoNode?.lineas || (Array.isArray(estacion.linea) ? estacion.linea : [estacion.linea]))
        .filter(Boolean)
        .join(', ')
      return stationMetadata({
        estacion,
        cityConfig: bundle.config,
        path: `${metaPathPrefix}estacion/${estacion.slug}/`,
        lineasLabel,
      })
    },
    default: function StationPage({ params }) {
      const estacion = estaciones.find((e) => e.slug === params.slug)
      if (!estacion) return null
      return (
        <StationView
          estacion={estacion}
          cityConfig={bundle.config}
          basePath={basePath}
          linePath={linePath}
          grafo={bundle.grafo}
          breadcrumbLabel={breadcrumbLabel}
          crumbs={crumbsFor ? crumbsFor(estacion) : undefined}
        />
      )
    },
  }
}

/* ── Línea: /<ciudad>/linea/[id]/ ───────────────────────────────────── */
export function makeLinePage(citySlug, opts = {}) {
  const bundle = getCityBundle(citySlug)
  const lineas = opts.lineas || bundle.lineas
  const estaciones = opts.estaciones || bundle.estaciones
  const basePath = opts.basePath || `/${citySlug}/`
  const crumbsFor = opts.crumbsFor // optional (linea) => items[]
  const metaPathPrefix = opts.metaPathPrefix || basePath

  return {
    generateStaticParams: async () => lineas.map((l) => ({ id: String(l.id) })),
    generateMetadata: async ({ params }) => {
      const linea = lineas.find((l) => String(l.id) === params.id)
      if (!linea) return { title: 'Línea no encontrada', robots: { index: false, follow: false } }
      const total = estacionesDeLinea(estaciones, bundle.grafo, linea.id, linea.estaciones).length
      return lineMetadata({ linea, cityConfig: bundle.config, path: `${metaPathPrefix}linea/${encodeURIComponent(linea.id)}/`, totalEstaciones: total })
    },
    default: function LinePage({ params }) {
      const linea = lineas.find((l) => String(l.id) === params.id)
      if (!linea) return null
      return (
        <LineView
          linea={linea}
          estaciones={estaciones}
          grafo={bundle.grafo}
          cityConfig={bundle.config}
          basePath={basePath}
          crumbs={crumbsFor ? crumbsFor(linea) : undefined}
        />
      )
    },
  }
}

/* ── Hub de subsistema: /<ciudad>/<sistema>/ (ej. gdl/macrobus, mty/ecovia) ── */
export function makeSystemHubPage(citySlug, opts) {
  const bundle = getCityBundle(citySlug)
  const { estaciones, lineas = [], basePath, cityBasePath, systemName, systemDescription } = opts

  return {
    generateMetadata: async () =>
      hubMetadata({
        cityConfig: bundle.config,
        path: basePath,
        totalLineas: lineas.length,
        totalEstaciones: estaciones.length,
        systemsLabel: systemName,
      }),
    default: function SystemHubPage() {
      return (
        <SystemHubView
          cityConfig={bundle.config}
          cityBasePath={cityBasePath}
          systemName={systemName}
          systemDescription={systemDescription}
          estaciones={estaciones}
          lineas={lineas}
          basePath={basePath}
        />
      )
    },
  }
}

/* ── Ruta: /<ciudad>/ruta/[slug]/ ───────────────────────────────────── */
export function makeRoutePage(citySlug, opts = {}) {
  const bundle = getCityBundle(citySlug)
  const estaciones = opts.estaciones || bundle.estaciones
  const basePath = opts.basePath || `/${citySlug}/`
  const routeSlugs = opts.routeSlugs || bundle.routeSlugs

  return {
    generateStaticParams: async () => routeSlugs.map((slug) => ({ slug })),
    generateMetadata: async ({ params }) => {
      const names = slugToNames(params.slug, estaciones, bundle.grafo)
      if (!names) return { title: 'Ruta no encontrada', robots: { index: false, follow: false } }
      const resultado = await findRoute(names.origen, names.destino, citySlug)
      return routeMetadata({
        origenNombre: names.origenNombre,
        destinoNombre: names.destinoNombre,
        cityConfig: bundle.config,
        path: `${basePath}ruta/${params.slug}/`,
        resultado,
      })
    },
    default: async function RoutePage({ params }) {
      const names = slugToNames(params.slug, estaciones, bundle.grafo)
      if (!names) return null
      const resultado = await findRoute(names.origen, names.destino, citySlug)
      return (
        <RouteView
          origen={names.origen}
          destino={names.destino}
          origenNombre={names.origenNombre}
          destinoNombre={names.destinoNombre}
          resultado={resultado}
          cityConfig={bundle.config}
          basePath={basePath}
          path={`${basePath}ruta/${params.slug}/`}
        />
      )
    },
  }
}
