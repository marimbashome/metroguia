export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://metroguia.mx/sitemap.xml',
    host: 'https://metroguia.mx',
  }
}
