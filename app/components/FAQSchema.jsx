/**
 * FAQSchema — JSON-LD FAQPage. Portado sin cambios de lógica desde
 * _legacy-app/components/FAQSchema.jsx (era correcto).
 *
 * @param {{question:string, answer:string}[]} faqs
 */
export default function FAQSchema({ faqs }) {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
