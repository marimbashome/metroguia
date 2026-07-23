import { makeCityHubPage } from '@/app/_city/pages'

const { generateMetadata, default: Page } = makeCityHubPage('gdl', {
  systemsLabel: 'Tren Ligero SITEUR (4 líneas) + Mi Macro BRT (2 líneas)',
  subsistemas: [
    {
      href: '/gdl/macrobus/',
      nombre: 'Mi Macro (BRT)',
      descripcion: 'Mi Macro Calzada + Mi Macro Periférico — 2 líneas, 69 estaciones.',
    },
  ],
})

export { generateMetadata }
export default Page
