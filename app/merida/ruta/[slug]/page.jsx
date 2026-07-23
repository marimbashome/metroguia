import { makeRoutePage } from '@/app/_city/pages'

const { generateStaticParams, generateMetadata, default: Page } = makeRoutePage('merida')

export { generateStaticParams, generateMetadata }
export default Page
