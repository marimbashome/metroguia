import { makeStationPage } from '@/app/_city/pages'
import { mtyEstacionesEcovia } from '@/app/_city/registry'

const { generateStaticParams, generateMetadata, default: Page } = makeStationPage('mty', {
  estaciones: mtyEstacionesEcovia(),
  basePath: '/mty/ecovia/',
  linePath: '/mty/ecovia/',
  breadcrumbLabel: 'Ecovía',
  crumbsFor: (estacion) => [
    { name: 'MetroGuia', url: '/' },
    { name: 'Monterrey', url: '/mty/' },
    { name: 'Ecovía', url: '/mty/ecovia/' },
    { name: estacion.nombre, url: `/mty/ecovia/estacion/${estacion.slug}/` },
  ],
})

export { generateStaticParams, generateMetadata }
export default Page
