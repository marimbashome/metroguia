import { makeStationPage } from '@/app/_city/pages'

// Incluye las 125 estaciones de GDL (Tren Ligero + Mi Macro) — keep-urls
// mezcla ambos sistemas bajo /gdl/estacion/ (ver reporte de la sesión:
// varias estaciones de Mi Macro están indexadas en GSC tanto aquí como en
// /gdl/macrobus/estacion/, se preservan ambas URLs con contenido real).
const { generateStaticParams, generateMetadata, default: Page } = makeStationPage('gdl')

export { generateStaticParams, generateMetadata }
export default Page
