import { makeRoutePage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeRoutePage('mty')

export { generateStaticParams, generateMetadata }
export default Page
