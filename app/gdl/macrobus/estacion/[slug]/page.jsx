import { makeStationPage } from '@/app/_city/pages'
import { gdlEstacionesMacrobus } from '@/app/_city/registry'

// Mismas 69 estaciones que aparecen en /gdl/estacion/ (sistema=macrobus) —
// URL de subsistema dedicada, indexada por separado en GSC (keep-urls).
const { generateStaticParams, generateMetadata, default: Page } = makeStationPage('gdl', {
  estaciones: gdlEstacionesMacrobus(),
  basePath: '/gdl/macrobus/',
  linePath: '/gdl/macrobus/',
  breadcrumbLabel: 'Mi Macro',
  crumbsFor: (estacion) => [
    { name: 'MetroGuia', url: '/' },
    { name: 'Guadalajara', url: '/gdl/' },
    { name: 'Mi Macro', url: '/gdl/macrobus/' },
    { name: estacion.nombre, url: `/gdl/macrobus/estacion/${estacion.slug}/` },
  ],
})

export { generateStaticParams, generateMetadata }
export default Page
