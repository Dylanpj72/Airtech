import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Roof Ventilation Johannesburg | Turbine Ventilators',
  description:
    'Protect your home from summer heat and moisture with professional roof ventilation. Silent, maintenance-free turbine ventilators installed across Johannesburg.',
  alternates: { canonical: `${SITE_URL}/services/ventilation` },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Ventilation',
  provider: { '@type': 'LocalBusiness', name: 'Airtech Services' },
  areaServed: 'Johannesburg, Gauteng, South Africa',
}

const productFeatures = [
  'Lightweight dome with high-quality sealed ball bearings',
  'Silent operation in the slightest breeze',
  'Aerofoil vanes with rolled edges — blocks rain and dust',
  'Standard milled aluminium finish (colour-coating on request)',
  'Maintenance-free design',
  'Suitable for all standard roof types',
]

const applications = [
  {
    category: 'Open buildings',
    desc: 'Factories, warehouses, barns, churches, halls, theatres, and gymnasiums — direct hot air extraction.',
  },
  {
    category: 'Ceiling-void',
    desc: 'Shops, offices, schools, and homes — ventilating the roof space to protect insulation and structure.',
  },
]

export default function VentilationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <AnimateIn>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-body text-xs" style={{ color: '#9095A6' }}>
                <li><Link href="/" className="hover:text-[#1A1F4C] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-[#1A1F4C] transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: '#B8BCC4' }} aria-current="page">Ventilation</li>
              </ol>
            </nav>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label mb-3">Service</p>
            <h1 className="display-heading max-w-2xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
              Natural Ventilation That{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Protects Your Home</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Service image strip */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
          alt="Professional roof ventilation installation"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(13,17,40,0.5) 0%, rgba(13,17,40,0.15) 55%, rgba(13,17,40,0.08) 100%)' }}
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
                  Roof-space heat and moisture are silent threats to your home&apos;s comfort and
                  structure. On a Johannesburg summer day, temperatures in an unventilated roof
                  space can reach <strong style={{ color: '#1C1F2A' }}>65°C</strong> — radiating
                  downward through your ceiling, reducing the effectiveness of your insulation,
                  and forcing your air conditioner to work far harder than it should.
                </p>
                <p>
                  Moisture trapped in the roof void can damage ceiling boards, timber frames, and
                  stored items. The solution is straightforward: continuous, passive ventilation
                  using high-quality wind-driven turbine ventilators.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: '#0D1128' }}>
                  Product Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                  {productFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={14} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
                      <span className="font-body text-sm" style={{ color: '#5A5F6E' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: '#0D1128' }}>
                  Applications
                </h2>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div
                      key={app.category}
                      className="flex gap-4 p-5 rounded-xl"
                      style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
                    >
                      <span
                        className="font-body text-xs tracking-[0.12em] uppercase font-medium w-28 shrink-0 pt-0.5"
                        style={{ color: '#B08A5B' }}
                      >
                        {app.category}
                      </span>
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.15} className="lg:col-span-1">
              <div
                className="sticky top-28 p-6 rounded-2xl"
                style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
              >
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: '#0D1128' }}>
                  Speak to a Specialist
                </h3>
                <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: '#5A5F6E' }}>
                  We&apos;ll assess your roof space and recommend the right number and position
                  of ventilators for your building.
                </p>
                <Link href="/contact?service=ventilation" className="btn-primary w-full mb-3">
                  Get a Free Quote
                </Link>
                <p className="font-body text-xs text-center" style={{ color: '#9095A6' }}>No obligation · Est. 1992</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}