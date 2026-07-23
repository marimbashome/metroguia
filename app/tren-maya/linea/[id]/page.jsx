import { makeLinePage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeLinePage('tren-maya')

export { generateStaticParams, generateMetadata }
export default Page
