import { makeCityHubPage } from '@/app/_city/pages'

const { generateMetadata, default: Page } = makeCityHubPage('mty', {
  systemsLabel: 'Metrorrey (3 líneas) + Ecovía BRT',
  subsistemas: [
    {
      href: '/mty/ecovia/',
      nombre: 'Ecovía (BRT)',
      descripcion: 'Corredor de autobuses de tránsito rápido, 42 estaciones, integrado con Metrorrey.',
    },
  ],
})

export { generateMetadata }
export default Page
