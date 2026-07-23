import { makeStationPage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeStationPage('tijuana')

export { generateStaticParams, generateMetadata }
export default Page
