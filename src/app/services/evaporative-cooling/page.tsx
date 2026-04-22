import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Leaf } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Evaporative Cooling Johannesburg | Breezeair Systems',
  description:
    'Natural, energy-efficient evaporative cooling systems for Johannesburg homes and businesses. Cool, clean, fresh air — dramatically lower energy use. Free quotes.',
  alternates: { canonical: `${SITE_URL}/services/evaporative-cooling` },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Evaporative Cooling',
  provider: { '@type': 'LocalBusiness', name: 'Airtech Services' },
  areaServed: 'Johannesburg, Gauteng, South Africa',
  description: 'Natural evaporative cooling systems for South African homes and businesses. Energy-efficient, fresh-air cooling ideal for the Highveld climate.',
}

const benefits = [
  'Naturally cooler, fresher air — open windows welcome',
  'Excellent for allergy sufferers',
  'Filters dust and airborne pollutants',
  'Kind to skin, eyes, and sinuses',
  'Indoor plants thrive in the fresh air',
  'Optional security vents for closed-home operation',
  'Dramatically lower energy use than refrigerant AC',
]

export default function EvaporativeCoolingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <AnimateIn>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-body text-xs" style={{ color: '#9095A6' }}>
                <li><Link href="/" className="hover:text-[#1A1F4C] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-[#1A1F4C] transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: '#B8BCC4' }} aria-current="page">Evaporative Cooling</li>
              </ol>
            </nav>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label mb-3">Service</p>
            <h1 className="display-heading max-w-2xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
              Cool, Clean, Fresh Air{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>— Naturally</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Service image strip */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80"
          alt="Fresh, naturally cooled home — evaporative cooling by Airtech"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(13,17,40,0.45) 0%, rgba(13,17,40,0.12) 55%, rgba(13,17,40,0.06) 100%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <AnimateIn direction="right" className="lg:col-span-2 space-y-8">
              <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: '#5A5F6E' }}>
                <p>
                  There&apos;s nothing like cool, clean, fresh air — especially through the long
                  hot days and sweltering nights of a South African summer. Evaporative cooling
                  delivers exactly that, naturally and efficiently.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: '#0D1128' }}>
                  What is Evaporative Cooling?
                </h2>
                <div className="space-y-4 font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                  <p>
                    An evaporative cooler works by drawing hot, dry outside air through
                    water-saturated pads. As the air passes through, the water evaporates,
                    absorbing heat and lowering the air temperature significantly before it
                    enters your home.
                  </p>
                  <p>
                    Unlike traditional refrigerant-based air conditioning — which recirculates
                    the same stale air in a closed loop — evaporative cooling continuously
                    introduces fresh outside air. This means open windows are not just
                    permitted, they&apos;re encouraged.
                  </p>
                  <p>
                    On the South African Highveld, where summers are hot and dry, evaporative
                    cooling is remarkably effective — often achieving temperature drops of 10–15°C
                    while using a fraction of the electricity of refrigerant systems.
                  </p>
                  <p>
                    We are proud installers of the{' '}
                    <strong style={{ color: '#1C1F2A' }}>Breezeair</strong> range — widely
                    regarded as South Africa&apos;s leading evaporative cooling brand.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: '#0D1128' }}>
                  Why Choose Evaporative Cooling
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Leaf size={13} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
                      <span className="font-body text-sm" style={{ color: '#5A5F6E' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            {/* Sidebar */}
            <AnimateIn direction="left" delay={0.15} className="lg:col-span-1">
              <div
                className="sticky top-28 p-6 rounded-2xl"
                style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
              >
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: '#0D1128' }}>
                  Book a Free Assessment
                </h3>
                <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: '#5A5F6E' }}>
                  We&apos;ll assess your home and recommend the right evaporative cooling
                  solution for your layout and climate.
                </p>
                <Link href="/contact?service=evaporative-cooling" className="btn-primary w-full mb-3">
                  Book Free Assessment
                </Link>
                <p className="font-body text-xs text-center" style={{ color: '#9095A6' }}>
                  No obligation · Est. 1992
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}