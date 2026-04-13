/**
 * Single source of truth for routes that are actually pre-built at build time.
 * Both sitemap.js AND each /<city>/ruta/[slug]/page.jsx should import from here
 * so the sitemap never lists URLs that would 404.
 *
 * With `output: 'export'` + `dynamicParams = false`, any slug NOT returned by
 * generateStaticParams() is a 404 in production. Google Search Console was
 * flagging 6,746 such 404s — that was sitemap/page mismatch.
 */

import { rutasPopulares } from '@/data/rutas-populares'
import {
  gdlStations,
  mtyStations,
  pueblaStations,
  meridaStations,
  leonStations,
  chihuahuaStations,
  tijuanaStations,
  queretaroStations,
  tolucaStations,
  trenmayaStations,
} from '@/data/rutas-engine'

// CDMX: top N from curated rutasPopulares list (connector-aware)
export const CDMX_MAX = 200
export function getCdmxRouteSlugs() {
  return rutasPopulares.slice(0, CDMX_MAX).map(r => {
    const connector = r.connector || 'a'
    return `${r.origen}-${connector}-${r.destino}`
  })
}

// Generic hub × stations generator (matches the per-city page.jsx logic)
function hubRoutes(hubs, stations, max) {
  const out = []
  for (const hub of hubs) {
    for (const st of stations) {
      if (st !== hub) out.push(`${st}-a-${hub}`)
    }
  }
  return out.slice(0, max)
}

// Must match app/gdl/ruta/[slug]/page.jsx
export function getGdlRouteSlugs() {
  const hubs = ['guadalajara-centro', 'estadio-chivas', 'central-de-autobuses', 'gdl-auditorio', 'san-juan-de-dios']
  return hubRoutes(hubs, gdlStations, 200)
}

// Must match app/mty/ruta/[slug]/page.jsx (hubs + FIFA extras, capped at 500)
export function getMtyRouteSlugs() {
  const hubs = [
    'exposicion', 'parque-fundidora', 'mty-cuauhtemoc', 'fundadores', 'regina',
    'mty-universidad', 'central', 'hospital-metropolitano', 'general-i-zaragoza-l3',
    'mitras-ecovia', 'regina-ecovia', 'lincoln', 'valle-soleado',
  ]
  const params = []
  for (const hub of hubs) {
    for (const st of mtyStations) {
      if (st !== hub) params.push(`${st}-a-${hub}`)
    }
  }
  const fifaRoutes = [
    'sendero-a-exposicion', 'fundadores-a-exposicion', 'regina-a-exposicion',
    'parque-fundidora-a-exposicion', 'hospital-metropolitano-a-exposicion',
    'lincoln-a-exposicion', 'valle-soleado-a-exposicion',
    'general-i-zaragoza-l3-a-exposicion', 'alameda-a-parque-fundidora',
    'regina-a-fundadores', 'mty-cuauhtemoc-a-parque-fundidora',
    'sendero-a-parque-fundidora', 'talleres-a-exposicion',
    'lincoln-a-parque-fundidora', 'valle-soleado-a-parque-fundidora',
  ]
  const set = new Set(params)
  for (const s of fifaRoutes) if (!set.has(s)) params.push(s)
  return params.slice(0, 500)
}

// Simple hub-based cities (must match app/<city>/ruta/[slug]/page.jsx, cap 100)
export function getPueblaRouteSlugs()   { return hubRoutes(['capu', 'zocalo-centro', 'cholula'], pueblaStations, 100) }
export function getMeridaRouteSlugs()   { return hubRoutes(['centro-historico', 'aeropuerto-manuel-crescencio-rejon', 'terminal-came', 'paseo-montejo'], meridaStations, 100) }
export function getLeonRouteSlugs()     { return hubRoutes(['catedral-basilica', 'capu-leon', 'estadio-leon', 'aeropuerto-bajio-acceso'], leonStations, 100) }
export function getChihuahuaRouteSlugs(){ return hubRoutes(['los-mochis', 'creel', 'divisadero', 'el-fuerte'], chihuahuaStations, 100) }
export function getTijuanaRouteSlugs()  { return hubRoutes(['san-ysidro-frontera', 'zona-centro', 'aeropuerto-tj', 'playas-tj'], tijuanaStations, 100) }
export function getQueretaroRouteSlugs(){ return hubRoutes(['centro-historico-qro', 'terminal-5-febrero', 'estadio-corregidora-qro', 'tec-monterrey-qro'], queretaroStations, 100) }
export function getTolucaRouteSlugs()   { return hubRoutes(['zinacantepec-terminal', 'toluca-centro-bus', 'observatorio-cdmx', 'metepec'], tolucaStations, 100) }
export function getTrenMayaRouteSlugs() { return hubRoutes(['cancun', 'tulum', 'chichen-itza', 'merida-oriente', 'palenque'], trenmayaStations, 100) }

// Aggregate helper by city key (matches sitemap prefix mapping)
export function getBuiltRouteSlugs(city) {
  switch (city) {
    case 'cdmx':      return getCdmxRouteSlugs()
    case 'gdl':       return getGdlRouteSlugs()
    case 'mty':       return getMtyRouteSlugs()
    case 'puebla':    return getPueblaRouteSlugs()
    case 'merida':    return getMeridaRouteSlugs()
    case 'leon':      return getLeonRouteSlugs()
    case 'chihuahua': return getChihuahuaRouteSlugs()
    case 'tijuana':   return getTijuanaRouteSlugs()
    case 'queretaro': return getQueretaroRouteSlugs()
    case 'toluca':    return getTolucaRouteSlugs()
    case 'tren-maya': return getTrenMayaRouteSlugs()
    default:          return []
  }
}
