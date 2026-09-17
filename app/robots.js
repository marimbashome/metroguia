// Next 15 con output:'export' exige declarar que este archivo de metadatos es estatico.
export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://metroguia.mx/sitemap.xml',
    host: 'https://metroguia.mx',
  }
}
