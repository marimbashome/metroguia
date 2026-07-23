import { makeSystemHubPage } from '@/app/_city/pages'
import { gdlEstacionesMacrobus, getCityBundle } from '@/app/_city/registry'

const bundle = getCityBundle('gdl')
const lineasMacrobus = bundle.lineas.filter((l) => l.id === 'MC' || l.id === 'MP')

const { generateMetadata, default: Page } = makeSystemHubPage('gdl', {
  estaciones: gdlEstacionesMacrobus(),
  lineas: lineasMacrobus,
  basePath: '/gdl/macrobus/',
  cityBasePath: '/gdl/',
  systemName: 'Mi Macro (BRT Guadalajara)',
  systemDescription: 'Sistema de autobuses de tránsito rápido con carril confinado: Mi Macro Calzada y Mi Macro Periférico, 2 líneas, 69 estaciones.',
})

export { generateMetadata }
export default Page
