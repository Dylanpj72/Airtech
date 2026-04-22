import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Air Conditioning Installation Johannesburg | Split & Ducted Systems',
  description:
    'Professional air conditioning installation in Johannesburg. Conventional and concealed split systems for homes, offices, and commercial spaces. Free quotes.',
  alternates: { canonical: `${SITE_URL}/services/air-conditioning` },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Air Conditioning Installation',
  provider: { '@type': 'LocalBusiness', name: 'Airtech Services' },
  areaServed: 'Johannesburg, Gauteng, South Africa',
  description:
    'Professional conventional and concealed air conditioning installation for residential, commercial, and industrial properties across Johannesburg and Gauteng.',
}

const features = [
  'Perfect comfort throughout every room',
  'Visually appealing, concealed installation options',
  'Reverse-cycle heating and cooling',
  'Quiet, energy-efficient operation',
  'Easy-to-use LCD wired remote',
  'Compact & lightweight design that blends into any interior',
]

const applications = [
  { category: 'Residential', desc: 'Single rooms to full-home ducted systems. We match the right capacity to your space.' },
  { category: 'Commercial',  desc: 'Offices, retail spaces, hotels, and restaurants. Comfortable environments that keep staff and customers at ease.' },
  { category: 'Industrial',  desc: 'Workshops, server rooms, factories. Precision temperature control where it matters most.' },
]

export default function AirConditioningPage() {
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
                <li style={{ color: '#B8BCC4' }} aria-current="page">Air Conditioning</li>
              </ol>
            </nav>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label mb-3">Service</p>
            <h1 className="display-heading max-w-2xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
              Conventional &amp;{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Concealed</span>{' '}
              Air Conditioning
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Service image strip */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
          alt="Luxury interior with precision air conditioning installation"
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

      {/* Main content */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Body copy */}
            <AnimateIn direction="right" className="lg:col-span-2">
              <div className="space-y-5 font-body text-base leading-relaxed" style={{ color: '#5A5F6E' }}>
                <p>
                  The most advanced style of air conditioning creates a perfect environment
                  for every season. Summer becomes productive. Winter becomes cosy. At the
                  workplace, productivity rises; at home, you inhabit the environment you deserve.
                </p>
                <p>
                  Airtech installs, services, and maintains conventional split systems and
                  concealed ducted systems for residential, commercial, and industrial clients
                  across Johannesburg and Gauteng. Every installation is neat, precise, and
                  built to last — cables housed in trunking, nothing left exposed.
                </p>
              </div>

              {/* Features */}
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: '#0D1128' }}>
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={14} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
                      <span className="font-body text-sm" style={{ color: '#5A5F6E' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold mb-5" style={{ color: '#0D1128' }}>
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
                        className="font-body text-xs tracking-[0.15em] uppercase font-medium w-24 shrink-0 pt-0.5"
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

            {/* Sidebar CTA */}
            <AnimateIn direction="left" delay={0.15} className="lg:col-span-1">
              <div
                className="sticky top-28 p-6 rounded-2xl"
                style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
              >
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: '#0D1128' }}>
                  Get a Quote
                </h3>
                <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: '#5A5F6E' }}>
                  Free site assessment, tailored recommendation, no-obligation quote.
                </p>
                <Link href="/contact?service=air-conditioning" className="btn-primary w-full mb-3">
                  Request a Free Quote
                </Link>
                <p className="font-body text-xs text-center" style={{ color: '#9095A6' }}>
                  Est. 1992 · Trusted by MTN &amp; Plascon
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}