/**
 * app/_city/meta.js — generateMetadata() helpers para los árboles de ciudad
 * NO-CDMX. Cada función devuelve un objeto de metadata de Next.js listo
 * para exportar desde un page.jsx.
 */

import { limpiarTextoMundial } from './lib'

const SITE = 'https://metroguia.mx'

export function stationMetadata({ estacion, cityConfig, path, lineasLabel }) {
  if (!estacion) {
    return { title: 'Estación no encontrada', robots: { index: false, follow: false } }
  }
  const title = `Estación ${estacion.nombre} — ${cityConfig.name} | MetroGuia`
  const description =
    limpiarTextoMundial(estacion.meta_description) ||
    `Estación ${estacion.nombre}${lineasLabel ? ` (${lineasLabel})` : ''} en ${cityConfig.name}. Zona, líneas, transbordos y guía para llegar.`
  const url = `${SITE}${path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, type: 'website' },
  }
}

export function lineMetadata({ linea, cityConfig, path, totalEstaciones }) {
  if (!linea) {
    return { title: 'Línea no encontrada', robots: { index: false, follow: false } }
  }
  const nombreLinea = linea.colorNombre ? `Línea ${linea.id} (${linea.colorNombre})` : `Línea ${linea.id}`
  const title = `${nombreLinea} — ${cityConfig.name} | MetroGuia`
  const description =
    limpiarTextoMundial(linea.meta_description) ||
    `${nombreLinea} en ${cityConfig.name}: de ${linea.inicio} a ${linea.fin}, ${totalEstaciones} estaciones.`
  const url = `${SITE}${path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, type: 'website' },
  }
}

export function routeMetadata({ origenNombre, destinoNombre, cityConfig, path, resultado }) {
  const title = `De ${origenNombre} a ${destinoNombre} — ${cityConfig.name} | MetroGuia`
  const description = resultado?.encontrada
    ? `Ruta de ${origenNombre} a ${destinoNombre} en ${cityConfig.name}: ${resultado.pasos.length} estaciones, ${resultado.transbordos} transbordo${resultado.transbordos === 1 ? '' : 's'}${resultado.costo != null ? `, $${resultado.costo} ${cityConfig.currency}` : ''}.`
    : `Cómo llegar de ${origenNombre} a ${destinoNombre} en ${cityConfig.name} — transporte público, estaciones y transbordos.`
  const url = `${SITE}${path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, type: 'website' },
  }
}

export function hubMetadata({ cityConfig, path, totalLineas, totalEstaciones, systemsLabel }) {
  const title = `Transporte público en ${cityConfig.name} — ${totalLineas} líneas, ${totalEstaciones} estaciones | MetroGuia`
  const description = `Guía de ${systemsLabel} en ${cityConfig.name}, ${cityConfig.state}: ${totalLineas} líneas, ${totalEstaciones} estaciones. Calcula tu ruta, transbordos y costo.`
  const url = `${SITE}${path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, type: 'website' },
  }
}
