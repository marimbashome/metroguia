import { makeRoutePage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeRoutePage('morelia')

export { generateStaticParams, generateMetadata }
export default Page
