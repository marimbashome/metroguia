import { makeLinePage } from '@/app/_city/pages'
import { gdlEstacionesMacrobus, getCityBundle } from '@/app/_city/registry'

const bundle = getCityBundle('gdl')
const lineasMacrobus = bundle.lineas.filter((l) => l.id === 'MC' || l.id === 'MP')

const { generateStaticParams, generateMetadata, default: Page } = makeLinePage('gdl', {
  lineas: lineasMacrobus,
  estaciones: gdlEstacionesMacrobus(),
  basePath: '/gdl/macrobus/',
  crumbsFor: (linea) => [
    { name: 'MetroGuia', url: '/' },
    { name: 'Guadalajara', url: '/gdl/' },
    { name: 'Mi Macro', url: '/gdl/macrobus/' },
    { name: linea.colorNombre || `Línea ${linea.id}`, url: `/gdl/macrobus/linea/${encodeURIComponent(linea.id)}/` },
  ],
})

export { generateStaticParams, generateMetadata }
export default Page
