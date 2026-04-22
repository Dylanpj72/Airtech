import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL, ESTATES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Areas We Serve | Airtech Services Johannesburg',
  description:
    'Airtech Services serves Dainfern, Kyalami, Waterfall Equestrian, Eagle Canyon, Silver Lakes, Pecanwood, and all Greater Johannesburg and Gauteng areas.',
  alternates: { canonical: `${SITE_URL}/areas-we-serve` },
}

const areaDescriptions: Record<string, string> = {
  Dainfern: "Dainfern is one of Johannesburg's most prestigious golf estates. We've completed numerous residential HVAC installations in the estate's large homes and cluster developments.",
  Kyalami: 'Kyalami and Kyalami Estate are home to many of our commercial and residential clients. We service the area regularly and know the unique requirements of large estate homes.',
  'Waterfall Equestrian': "Waterfall Equestrian is a premier lifestyle estate. We provide air conditioning and evaporative cooling solutions tailored to its distinctive architectural styles.",
  'Eagle Canyon': "Eagle Canyon Golf Estate's homes require precise, aesthetically sensitive installations — we specialise in exactly that.",
  'Fourways Gardens': "A large, established residential area with a mix of freehold homes and complexes. We've been serving Fourways Gardens for decades.",
  'Silver Lakes': 'Silver Lakes Pretoria is a prestigious golf and residential estate. We travel to service our clients there regularly.',
  Pecanwood: 'On the shores of Hartbeespoort Dam, Pecanwood Estate demands the best. We supply and install premium air conditioning and evaporative cooling for this exclusive waterfront community.',
  Westlake: 'Westlake is a secure estate near Hartbeespoort. We serve both full and part-time residents with installation and maintenance services.',
  'The Coves': 'The Coves is an exclusive estate on the Crocodile River. Our team provides specialist HVAC services to its residents.',
  Cosmos: 'Cosmos is a well-established estate in the Hartbeespoort area. We offer the full range of Airtech services to homeowners throughout the estate.',
}

const regions = Array.from(new Set(ESTATES.map((e) => e.region))).map((region) => ({
  name: region,
  estates: ESTATES.filter((e) => e.region === region),
}))

export default function AreasWeServePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden" style={{ backgroundColor: '#F7F8FA' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(26,31,76,0.04) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label mb-3">Service Area</p>
            <h1 className="display-heading max-w-2xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
              Serving Greater Johannesburg{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>&amp; Beyond</span>
            </h1>
            <p className="font-body text-base mt-5 max-w-xl leading-relaxed" style={{ color: '#5A5F6E' }}>
              Based in Weltevreden Park, Roodepoort, we serve all areas across Johannesburg and
              Gauteng. From Dainfern to Pecanwood, our team covers the full Greater Johannesburg
              area and travels on request.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Map + regions */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Map placeholder */}
            <AnimateIn direction="right" className="lg:col-span-2">
              <div
                className="rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-full flex items-center justify-center"
                style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
              >
                {/* TODO: Replace with Google Maps embed or SVG map of Gauteng */}
                <div className="text-center p-8">
                  <MapPin size={40} style={{ color: '#1A1F4C', opacity: 0.3 }} strokeWidth={1} className="mx-auto mb-4" aria-hidden="true" />
                  <p className="font-body text-sm" style={{ color: '#9095A6' }}>TODO: Add Google Maps embed</p>
                  <p className="font-body text-xs mt-1" style={{ color: '#B8BCC4' }}>Greater Johannesburg service area</p>
                </div>
              </div>
            </AnimateIn>

            {/* Area listings */}
            <div className="lg:col-span-3 space-y-10">
              {regions.map((region, regionIndex) => (
                <AnimateIn key={region.name} delay={regionIndex * 0.1}>
                  <div>
                    <h2 className="font-body text-xs tracking-[0.2em] uppercase mb-5" style={{ color: '#9095A6' }}>
                      {region.name}
                    </h2>
                    <div className="space-y-3">
                      {region.estates.map((estate) => (
                        <div
                          key={estate.name}
                          className="p-5 rounded-xl transition-all duration-300 border border-[#D4D7DE] hover:border-[#1A1F4C] bg-white"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin size={12} style={{ color: '#B08A5B' }} aria-hidden="true" />
                            <h3 className="font-display text-base font-semibold" style={{ color: '#0D1128' }}>
                              {estate.name}
                            </h3>
                          </div>
                          {areaDescriptions[estate.name] && (
                            <p className="font-body text-xs leading-relaxed pl-[22px]" style={{ color: '#5A5F6E' }}>
                              {areaDescriptions[estate.name]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}

              <AnimateIn delay={0.3}>
                <div
                  className="p-5 rounded-xl"
                  style={{ border: '1px solid rgba(176,138,91,0.25)', backgroundColor: 'rgba(176,138,91,0.04)' }}
                >
                  <h3 className="font-display text-base font-semibold mb-1" style={{ color: '#0D1128' }}>
                    All Other Gauteng Areas
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                    We travel throughout Greater Gauteng for projects. If your area isn&apos;t listed,
                    please get in touch — we&apos;re very likely able to assist.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="py-16 pb-24 md:pb-16" style={{ backgroundColor: '#0D1128' }}>
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <AnimateIn>
            <span className="copper-line mx-auto" aria-hidden="true" />
            <h2 className="font-display font-semibold text-white text-3xl md:text-4xl mb-5" style={{ letterSpacing: '-0.02em' }}>
              Serving Your Neighbourhood
            </h2>
            <p className="font-body mb-8 max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(184,188,196,0.8)' }}>
              Not sure if we cover your area? Call us or drop us a message — chances are we do.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4">
              Get a Free Quote
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}