import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Heart } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Central Vacuum Systems Johannesburg | Built-In Vacuum Installation',
  description:
    'Premium built-in central vacuum systems for Johannesburg homes. 7× more powerful than portable vacuums. Whisper-quiet, cord-free, healthier air. Free quotes.',
  alternates: { canonical: `${SITE_URL}/services/central-vacuum` },
}

const healthBenefits = [
  'Allergist-recommended for Asthma sufferers',
  'Reduces symptoms of Sinusitis and Hayfever',
  'Beneficial for Eczema and skin disorders',
  'Eliminates eye infections caused by dust mites',
  'Removes pet dander, mould spores, and pollen',
]

const lifestyleBenefits = [
  'Up to 7× more powerful than portable vacuums',
  'Whisper-quiet — power unit installs in garage or exterior wall',
  'No cords, no plugs, no tangles',
  'External dust collection — rarely needs emptying',
  'Becomes a permanent fixture like the aircon or geyser',
  'Homes with central vacuums sell faster and at higher values',
]

export default function CentralVacuumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 relative overflow-hidden" style={{ backgroundColor: '#0D1128' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 35%, rgba(176,138,91,0.07) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-10">
          <AnimateIn>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-body text-xs" style={{ color: 'rgba(184,188,196,0.55)' }}>
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: 'rgba(184,188,196,0.35)' }} aria-current="page">Central Vacuum</li>
              </ol>
            </nav>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label-dark mb-3">Service</p>
            <h1 className="display-heading max-w-2xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: '#FFFFFF' }}>
              A Premium Built-In Clean for{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Healthier Homes</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Service image strip */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80"
          alt="Clean, modern home interior — central vacuum by Airtech"
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
                  <strong style={{ color: '#1C1F2A' }}>69% of homeowners</strong> are looking
                  for healthier cleaning solutions. A central vacuum system significantly reduces
                  airborne particles from dander, mould, and pollen — unlike portable vacuums
                  that recirculate dust back into the room through their exhaust.
                </p>
                <p>
                  With a central vacuum, the power unit is installed in your garage or an
                  exterior wall. A lightweight hose plugs into discreet inlets throughout your
                  home — no heavy machine to carry, no cord to trip over, no noise in the room
                  you&apos;re cleaning.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-2" style={{ color: '#0D1128' }}>
                  Health Benefits
                </h2>
                <p className="font-body text-sm mb-4" style={{ color: '#9095A6' }}>
                  Particularly recommended for households with:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                  {healthBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Heart size={13} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
                      <span className="font-body text-sm" style={{ color: '#5A5F6E' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: '#0D1128' }}>
                  Lifestyle Benefits
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                  {lifestyleBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check size={13} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
                      <span className="font-body text-sm" style={{ color: '#5A5F6E' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.15} className="lg:col-span-1">
              <div
                className="sticky top-28 p-6 rounded-2xl"
                style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
              >
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: '#0D1128' }}>
                  Add It to Your Home
                </h3>
                <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: '#5A5F6E' }}>
                  Central vacuum can be retrofitted into any home. We&apos;ll design the
                  optimal layout for your floor plan.
                </p>
                <Link href="/contact?service=central-vacuum" className="btn-primary w-full mb-3">
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