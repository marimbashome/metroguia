import { makeRoutePage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeRoutePage('tren-maya')

export { generateStaticParams, generateMetadata }
export default Page
