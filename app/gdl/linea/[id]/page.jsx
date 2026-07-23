import { makeLinePage } from '@/app/_city/pages'

// Las 6 líneas de GDL: Tren Ligero 1-4 + Mi Macro Calzada (MC) / Periférico (MP).
const { generateStaticParams, generateMetadata, default: Page } = makeLinePage('gdl')

export { generateStaticParams, generateMetadata }
export default Page
