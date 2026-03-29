import { LANGUAGES } from '@/lib/i18n'

export function generateStaticParams() {
  // Only non-Spanish languages (Spanish stays at root)
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }))
}

export default function LangLayout({ children }) {
  // This layout is nested under the root layout, so it inherits all styles, GA4, etc.
  // Just pass children through - no need to duplicate root layout content
  return children
}
