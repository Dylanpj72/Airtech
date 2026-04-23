import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { FAQ_ITEMS, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Airtech Services',
  description:
    'Answers to common questions about HVAC installation, warranties, service areas, brands, maintenance, and more from Airtech Services Johannesburg.',
  alternates: { canonical: `${SITE_URL}/faq` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden" style={{ backgroundColor: '#0D1128' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label-dark mb-3">FAQ</p>
            <h1 className="display-heading max-w-xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: '#FFFFFF' }}>
              Frequently Asked{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Questions</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 pb-24 md:pb-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <AnimateIn delay={0.3} className="mt-16 max-w-3xl">
            <div
              className="p-8 rounded-2xl"
              style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
            >
              <h2 className="font-display text-xl font-semibold mb-2" style={{ color: '#0D1128' }}>
                Still have a question?
              </h2>
              <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: '#5A5F6E' }}>
                Our team is happy to help. Reach out directly and we&apos;ll get back to you promptly.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}