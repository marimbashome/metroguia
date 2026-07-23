import { getAllCities } from '@/data/cities-config'
import { getBuiltRouteSlugs } from '@/data/built-routes'
import { getKeepUrls } from '@/lib/keep-urls'

// app/sitemap.js — TODAS las URLs MX del build, nada más (REBUILD_SPEC.md).
// Se deriva de 3 fuentes reales, nunca de una lista escrita a mano:
//
//   1. keep-urls-gsc-2026-07-22.txt — las 909 URLs "intocables" (estación,
//      línea, ruta, rutas/[o]_[d], cdmx/[sistema]/*, [ciudad]/*, aeropuertos
//      y terminales). Es EL mismo archivo que usa el guardrail
//      `check:keep-urls`, así que no puede divergir de él.
//   2. data/cities-config.js — hubs de ciudad (getAllCities), incluye /cdmx/.
//   3. data/built-routes.js — slugs de /ruta/ y /[ciudad]/ruta/. Es la misma
//      fuente que cada page.jsx de ruta debe usar (ver comentario en ese
//      archivo) y puede traer MÁS rutas que las que GSC llegó a indexar en
//      keep-urls, así que se une (no reemplaza) al set de keep-urls.
//
// Pendiente (fuera de este lote): /[ciudad]/estacion/[slug]/ y
// /[ciudad]/linea/[id]/ para las 6 ciudades sin historial en keep-urls
// (oaxaca, morelia, veracruz, campeche, tijuana, tren-maya) no tienen un
// generador único equivalente a built-routes.js — cada data/<ciudad>/
// estaciones.js exporta con un nombre distinto (`estacionesOaxaca`,
// `estacionesTrenMaya`, ...). Si el agente que construye esas rutas define
// TODOS sus slugs, este archivo debe extenderse para leerlos de ahí antes
// del merge a main — no se adivinó esa lista para no arriesgar URLs 404.

const BASE_URL = 'https://metroguia.mx'

// Páginas fijas del rebuild que no dependen de ningún dataset (una sola de
// cada una). '/cdmx/' y el resto de hubs de ciudad se agregan abajo desde
// getAllCities() — no se repiten aquí.
const FIXED_PAGES = [
  '/',
  '/lineas/',
  '/rutas/',
  '/aeropuertos/',
  '/terminales/',
  '/about/',
  '/contact/',
  '/privacy-policy/',
  '/fuentes/',
]

// Debe coincidir exactamente con los `case` de getBuiltRouteSlugs()
// (data/built-routes.js) y con los 16 slugs de CITIES_CONFIG.
const RUTA_CITY_KEYS = [
  'cdmx',
  'gdl',
  'mty',
  'puebla',
  'merida',
  'leon',
  'chihuahua',
  'tijuana',
  'queretaro',
  'toluca',
  'tren-maya',
  'oaxaca',
  'morelia',
  'veracruz',
  'campeche',
  'villahermosa',
]

export default function sitemap() {
  const urls = new Set(FIXED_PAGES)

  for (const city of getAllCities()) {
    urls.add(`/${city.slug}/`)
  }

  for (const url of getKeepUrls()) {
    urls.add(url)
  }

  for (const city of RUTA_CITY_KEYS) {
    const prefix = city === 'cdmx' ? '/ruta/' : `/${city}/ruta/`
    for (const slug of getBuiltRouteSlugs(city)) {
      urls.add(`${prefix}${slug}/`)
    }
  }

  const today = new Date().toISOString().slice(0, 10)

  return Array.from(urls).map((url) => ({
    url: `${BASE_URL}${url}`,
    lastModified: today,
  }))
}
