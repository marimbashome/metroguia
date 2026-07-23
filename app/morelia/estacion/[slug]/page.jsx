import { makeStationPage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeStationPage('morelia')

export { generateStaticParams, generateMetadata }
export default Page
