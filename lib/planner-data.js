import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import { rutasPopulares } from '@/data/rutas-populares'

/**
 * getPlannerProps — recorta lineasDetalle/estaciones/rutasPopulares al JSON
 * mínimo que <Planner> (client component) necesita para calcular rutas.
 *
 * Mismo recorte que usa app/page.jsx (home): data/estaciones.js y
 * data/lineas-detalle.js traen mucho copy de página (seo_title, tips,
 * mundial_relevancia…) que Planner no usa, y como es 'use client' cualquier
 * import directo suyo se empaquetaría entero en el JS del navegador.
 * Factorizado aquí porque /ruta/[slug]/, /rutas/ y /rutas/[ruta]/ (este
 * lote) también incrustan el Planner como widget "Buscar otra ruta" —
 * home NO se toca, sigue con su propia copia inline.
 */
export function getPlannerProps() {
  const lineasSlim = Object.fromEntries(
    Object.entries(lineasDetalle).map(([id, l]) => [
      id,
      { id: l.id, color: l.color, colorNombre: l.colorNombre, estaciones: l.estaciones },
    ])
  )
  const estacionesSlim = estaciones.map((e) => ({ slug: e.slug, nombre: e.nombre, lineas: e.lineas || [] }))
  const chips = rutasPopulares
    .filter((r) => !r.connector && !r.ciudad && r.destino !== 'tasquena' && r.origen !== 'tasquena')
    .slice(0, 12)
    .map((r) => ({ origen: r.origen, destino: r.destino, titulo: r.titulo }))
  return { lineasSlim, estacionesSlim, chips }
}
