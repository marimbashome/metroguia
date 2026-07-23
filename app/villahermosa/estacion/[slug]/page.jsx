import { makeStationPage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeStationPage('villahermosa')

export { generateStaticParams, generateMetadata }
export default Page
