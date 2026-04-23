import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL, COMMERCIAL_CLIENTS, ESTATES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us — 30 Years of HVAC Craftsmanship',
  description:
    'Airtech Services was founded by Raymond Prout-Jones in Johannesburg in 1992. Learn about our story, our values, and the clients who trust us.',
  alternates: { canonical: `${SITE_URL}/about` },
}

const values = [
  { title: 'Craftsmanship', description: 'We take pride in every cable hidden, every unit aligned, every installation that looks as good as it performs.' },
  { title: 'Reliability', description: 'We show up on time, finish on schedule, and keep our promises. Our clients call us back because they can count on us.' },
  { title: 'Honest Advice', description: "We recommend what you need — not what's most profitable. Long-term relationships matter more than short-term margins." },
  { title: 'After-Sales Care', description: "Our job isn't done at installation. We're available for maintenance, support, and emergency breakdowns — for years after." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ backgroundColor: '#0D1128' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 25% 30%, rgba(176,138,91,0.07) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label-dark mb-3">Our Story</p>
            <h1 className="display-heading max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#FFFFFF' }}>
              Three Decades of Trusted{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Climate Expertise</span>
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="right">
              <p className="section-label mb-3">The Founder</p>
              <h2 className="section-heading text-3xl md:text-4xl mb-6">
                Raymond Prout-Jones
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: '#5A5F6E' }}>
                <p>
                  Airtech Services was founded on{' '}
                  <strong style={{ color: '#1C1F2A' }}>13 October 1992</strong> by Raymond
                  Prout-Jones in Johannesburg. What began as a focused evaporative cooling
                  operation has grown — through three decades of earned reputation — into one
                  of Gauteng&apos;s most respected HVAC specialists.
                </p>
                <p>
                  Raymond&apos;s philosophy has always been simple: do the work right, treat
                  clients with respect, and let the installations speak for themselves. That
                  philosophy is still the backbone of every project we take on today.
                </p>
                <p>
                  From single-room residential units to multi-system commercial installations
                  at airports and corporate campuses, the same care and attention to detail has
                  defined Airtech&apos;s work for over 30 years.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="Raymond Prout-Jones, founder of Airtech Services"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(13,17,40,0.7) 0%, transparent 55%)' }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-lg font-semibold text-white">Raymond Prout-Jones</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: 'rgba(184,188,196,0.85)' }}>
                    Founder · Airtech Services · Est. 1992
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What we do — tinted section */}
      <section className="py-20" style={{ backgroundColor: '#D8DCF0' }}>
        <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <h2 className="section-heading text-3xl md:text-4xl mb-6">What We Do</h2>
            <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: '#5A5F6E' }}>
              <p>
                We started in evaporative cooling and have expanded to offer a complete climate
                control service: air conditioning, heating, mechanical ventilation, and built-in
                central vacuum systems.
              </p>
              <p>
                We work across <strong style={{ color: '#1C1F2A' }}>commercial, industrial,
                and residential</strong> projects — from a single split unit in a home study
                to full-building HVAC systems for factories, retail centres, and airports.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <AnimateIn className="mb-10">
            <h2 className="section-heading text-3xl md:text-4xl mb-2">Our Commercial Clients</h2>
            <p className="font-body text-sm" style={{ color: '#5A5F6E' }}>
              A selection of the organisations that have trusted Airtech Services.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {COMMERCIAL_CLIENTS.map((client, i) => (
              <AnimateIn key={client} delay={i * 0.05}>
                <div
                  className="flex items-center justify-center p-4 rounded-lg min-h-[64px] transition-colors duration-300 border border-[#D4D7DE] hover:border-[#1A1F4C] bg-[#F7F8FA]"
                >
                  <span className="font-body text-xs font-medium text-center leading-tight" style={{ color: '#5A5F6E' }}>
                    {client}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Estates */}
      <section className="py-20" style={{ backgroundColor: '#D8DCF0' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <AnimateIn className="mb-10">
            <h2 className="section-heading text-3xl md:text-4xl mb-2">Estates We Serve</h2>
            <p className="font-body text-sm" style={{ color: '#5A5F6E' }}>
              Trusted by homeowners at Johannesburg&apos;s finest addresses.
            </p>
          </AnimateIn>
          <div className="flex flex-wrap gap-2">
            {ESTATES.map((estate, i) => (
              <AnimateIn key={estate.name} delay={i * 0.04}>
                <span
                  className="inline-block px-4 py-2 rounded-full font-body text-sm transition-all duration-200 border border-[#D4D7DE] hover:border-[#1A1F4C] bg-white text-[#5A5F6E] hover:text-[#0D1128]"
                >
                  {estate.name}
                </span>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <AnimateIn className="mb-12">
            <span className="copper-line" aria-hidden="true" />
            <h2 className="section-heading text-3xl md:text-4xl">Our Values</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.08}>
                <div className="p-6 rounded-xl transition-all duration-300 border border-[#D4D7DE] hover:border-[#1A1F4C] bg-[#F7F8FA] hover:bg-white">
                  <span className="block w-6 h-px mb-4" style={{ background: 'linear-gradient(to right, #B08A5B, #D4D7DE)' }} aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold mb-3" style={{ color: '#0D1128' }}>
                    {value.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="py-20" style={{ backgroundColor: '#0D1128' }}>
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <AnimateIn>
            <span className="copper-line mx-auto" aria-hidden="true" />
            <h2 className="font-display font-semibold text-white text-3xl md:text-4xl mb-5" style={{ letterSpacing: '-0.02em' }}>
              Work With Us
            </h2>
            <p className="font-body mb-8 max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(184,188,196,0.8)' }}>
              Ready to experience the Airtech difference? Let&apos;s talk about your project.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Quote
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}