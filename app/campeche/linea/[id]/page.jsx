import { makeLinePage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeLinePage('campeche')

export { generateStaticParams, generateMetadata }
export default Page
