import { makeSystemHubPage } from '@/app/_city/pages'
import { mtyEstacionesEcovia } from '@/app/_city/registry'

const { generateMetadata, default: Page } = makeSystemHubPage('mty', {
  estaciones: mtyEstacionesEcovia(),
  lineas: [],
  basePath: '/mty/ecovia/',
  cityBasePath: '/mty/',
  systemName: 'Ecovía (BRT Monterrey)',
  systemDescription: 'Corredor de autobuses de tránsito rápido que conecta Lincoln (San Nicolás) con Valle Soleado (Guadalupe), 42 estaciones, integrado con Metrorrey por transbordo.',
})

export { generateMetadata }
export default Page
