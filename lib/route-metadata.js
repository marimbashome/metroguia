import { formatLineasUsadas } from '@/lib/lineLabels'

/**
 * buildRutaMetadata — genera title/description/canonical/openGraph con
 * datos CONCRETOS de la ruta calculada (no plantilla idéntica entre
 * páginas, per REBUILD_SPEC.md §SEO). Compartido por /ruta/[slug]/ y
 * /rutas/[ruta]/ (mismo contenido, distinta URL/canonical).
 */
export function buildRutaMetadata({ origenNombre, destinoNombre, resultado, canonicalPath }) {
  const lineas = formatLineasUsadas(resultado.lineas_usadas)
  const costoTexto = resultado.costo === null ? 'costo por confirmarse' : `$${resultado.costo} MXN`
  const title = `${origenNombre} a ${destinoNombre} en Metro CDMX — Ruta, Transbordos y Costo`
  const description = `Cómo llegar de ${origenNombre} a ${destinoNombre} en el Metro de la Ciudad de México: ${resultado.transbordos} ${resultado.transbordos === 1 ? 'transbordo' : 'transbordos'} por ${lineas || 'Metro'}, ~${Math.round(resultado.tiempo_total)} min, ${resultado.pasos.length} estaciones, ${costoTexto}.`

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${origenNombre} → ${destinoNombre} — Metro CDMX`,
      description: `Ruta paso a paso de ${origenNombre} a ${destinoNombre}. Transbordos, tiempo y costo reales.`,
      url: `https://metroguia.mx${canonicalPath}`,
      type: 'article',
    },
  }
}

export const RUTA_NOT_FOUND_METADATA = {
  title: 'Ruta no encontrada',
  description: 'Esta ruta no está disponible. Usa el planificador para calcular otra ruta en el Metro CDMX.',
  robots: { index: false, follow: true },
}
