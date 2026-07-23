import { makeStationPage } from '@/app/_city/pages'

// Solo Metrorrey (41 estaciones) — Ecovía vive en /mty/ecovia/estacion/,
// datos separados en data/mty/ecovia.js sin solapamiento de slugs.
const { generateStaticParams, generateMetadata, default: Page } = makeStationPage('mty')

export { generateStaticParams, generateMetadata }
export default Page
