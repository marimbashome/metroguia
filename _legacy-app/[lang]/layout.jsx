import { LANGUAGES } from '@/lib/i18n'
import LangSetter from '@/app/components/LangSetter'

export function generateStaticParams() {
  // Only non-Spanish languages (Spanish stays at root)
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }))
}

export default function LangLayout({ children, params }) {
  return (
    <>
      <LangSetter lang={params.lang} />
      {children}
    </>
  )
}
