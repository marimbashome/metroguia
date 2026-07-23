import { makeLinePage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeLinePage('oaxaca')

export { generateStaticParams, generateMetadata }
export default Page
