/**
 * app/_city/registry.js — registro de datos para las 15 ciudades NO-CDMX
 * (gdl, mty, + 13 chicas). Prefijo `_city/` (con guión bajo) para que
 * Next.js NO lo trate como segmento de ruta — es código compartido, no una
 * página. Consumido SOLO por los árboles app/<ciudad>/** de este lote.
 *
 * No se toca `app/components/` (esos son de Foundation) ni `lib/pathfinder.js`
 * (se importa, no se reimplementa).
 */

import { estacionesGDL } from '@/data/gdl/estaciones'
import { lineasGDL } from '@/data/gdl/lineas-detalle'
import { grafoGDL } from '@/data/gdl/grafo'

import { estacionesMTY } from '@/data/mty/estaciones'
import { lineasMTY } from '@/data/mty/lineas-detalle'
import { grafoMTY } from '@/data/mty/grafo'
import { estacionesEcovia } from '@/data/mty/ecovia'

import { estacionesPuebla } from '@/data/puebla/estaciones'
import { lineasPuebla } from '@/data/puebla/lineas-detalle'
import { grafoPuebla } from '@/data/puebla/grafo'

import { estacionesMerida } from '@/data/merida/estaciones'
import { lineasMerida } from '@/data/merida/lineas-detalle'
import { grafoMerida } from '@/data/merida/grafo'

import { estacionesLeon } from '@/data/leon/estaciones'
import { lineasLeon } from '@/data/leon/lineas-detalle'
import { grafoLeon } from '@/data/leon/grafo'

import { estacionesChihuahua } from '@/data/chihuahua/estaciones'
import { lineasChihuahua } from '@/data/chihuahua/lineas-detalle'
import { grafoChihuahua } from '@/data/chihuahua/grafo'

import { estacionesQueretaro } from '@/data/queretaro/estaciones'
import { lineasQueretaro } from '@/data/queretaro/lineas-detalle'
import { grafoQueretaro } from '@/data/queretaro/grafo'

import { estacionesTijuana } from '@/data/tijuana/estaciones'
import { lineasTijuana } from '@/data/tijuana/lineas-detalle'
import { grafoTijuana } from '@/data/tijuana/grafo'

import { estacionesToluca } from '@/data/toluca/estaciones'
import { lineasToluca } from '@/data/toluca/lineas-detalle'
import { grafoToluca } from '@/data/toluca/grafo'

import { estacionesOaxaca } from '@/data/oaxaca/estaciones'
import { lineasOaxaca } from '@/data/oaxaca/lineas-detalle'
import { grafoOaxaca } from '@/data/oaxaca/grafo'

import { estacionesVeracruz } from '@/data/veracruz/estaciones'
import { lineasVeracruz } from '@/data/veracruz/lineas-detalle'
import { grafoVeracruz } from '@/data/veracruz/grafo'

import { estacionesCampeche } from '@/data/campeche/estaciones'
import { lineasCampeche } from '@/data/campeche/lineas-detalle'
import { grafoCampeche } from '@/data/campeche/grafo'

import { estacionesVillahermosa } from '@/data/villahermosa/estaciones'
import { lineasVillahermosa } from '@/data/villahermosa/lineas-detalle'
import { grafoVillahermosa } from '@/data/villahermosa/grafo'

import { estacionesMorelia } from '@/data/morelia/estaciones'
import { lineasMorelia } from '@/data/morelia/lineas-detalle'
import { grafoMorelia } from '@/data/morelia/grafo'

import { estacionesTrenMaya } from '@/data/tren-maya/estaciones'
import { lineasTrenMaya } from '@/data/tren-maya/lineas-detalle'
import { grafoTrenMaya } from '@/data/tren-maya/grafo'

import { getCityConfig } from '@/data/cities-config'
import { getBuiltRouteSlugs } from '@/data/built-routes'

// ── Registro base — una entrada por ciudad ──────────────────────────────
const BASE = {
  gdl: { estaciones: estacionesGDL, lineas: lineasGDL, grafo: grafoGDL },
  mty: { estaciones: estacionesMTY, lineas: lineasMTY, grafo: grafoMTY },
  puebla: { estaciones: estacionesPuebla, lineas: lineasPuebla, grafo: grafoPuebla },
  merida: { estaciones: estacionesMerida, lineas: lineasMerida, grafo: grafoMerida },
  leon: { estaciones: estacionesLeon, lineas: lineasLeon, grafo: grafoLeon },
  chihuahua: { estaciones: estacionesChihuahua, lineas: lineasChihuahua, grafo: grafoChihuahua },
  queretaro: { estaciones: estacionesQueretaro, lineas: lineasQueretaro, grafo: grafoQueretaro },
  tijuana: { estaciones: estacionesTijuana, lineas: lineasTijuana, grafo: grafoTijuana },
  toluca: { estaciones: estacionesToluca, lineas: lineasToluca, grafo: grafoToluca },
  oaxaca: { estaciones: estacionesOaxaca, lineas: lineasOaxaca, grafo: grafoOaxaca },
  veracruz: { estaciones: estacionesVeracruz, lineas: lineasVeracruz, grafo: grafoVeracruz },
  campeche: { estaciones: estacionesCampeche, lineas: lineasCampeche, grafo: grafoCampeche },
  villahermosa: { estaciones: estacionesVillahermosa, lineas: lineasVillahermosa, grafo: grafoVillahermosa },
  morelia: { estaciones: estacionesMorelia, lineas: lineasMorelia, grafo: grafoMorelia },
  'tren-maya': { estaciones: estacionesTrenMaya, lineas: lineasTrenMaya, grafo: grafoTrenMaya },
}

export const CITY_KEYS = Object.keys(BASE)

/**
 * @param {string} slug - uno de CITY_KEYS
 * @returns {{config:Object, estaciones:Object[], lineas:Object[], grafo:Object, routeSlugs:string[]}}
 */
export function getCityBundle(slug) {
  const base = BASE[slug]
  if (!base) return null
  return {
    config: getCityConfig(slug),
    estaciones: base.estaciones,
    lineas: base.lineas,
    grafo: base.grafo,
    routeSlugs: getBuiltRouteSlugs(slug),
  }
}

// ── GDL: separación tren-ligero / macrobús (mismo dato, dos árboles — ver
// REBUILD_SPEC.md y decisión documentada en el reporte del agente) ──────
export function gdlEstacionesTrenLigero() {
  return estacionesGDL.filter((e) => e.sistema !== 'macrobus')
}
export function gdlEstacionesMacrobus() {
  return estacionesGDL.filter((e) => e.sistema === 'macrobus')
}

// ── MTY: Ecovía vive en su propio archivo de datos ──────────────────────
export function mtyEstacionesEcovia() {
  return estacionesEcovia
}
