import { makeStationPage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeStationPage('tren-maya')

export { generateStaticParams, generateMetadata }
export default Page
