import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Thermometer, Wind, ArrowUpDown, CircleDot } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL, SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Services — Air Conditioning, Evaporative Cooling & More',
  description:
    'Airtech Services offers air conditioning installation, evaporative cooling, ventilation, and central vacuum systems across Johannesburg and Gauteng.',
  alternates: { canonical: `${SITE_URL}/services` },
}

const iconMap: Record<string, React.ReactNode> = {
  Thermometer: <Thermometer size={30} strokeWidth={1.2} />,
  Wind:        <Wind        size={30} strokeWidth={1.2} />,
  ArrowUpDown: <ArrowUpDown size={30} strokeWidth={1.2} />,
  CircleDot:   <CircleDot   size={30} strokeWidth={1.2} />,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 relative overflow-hidden" style={{ backgroundColor: '#0D1128' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(176,138,91,0.07) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label-dark mb-3">What We Offer</p>
            <h1 className="display-heading max-w-2xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#FFFFFF' }}>
              Premium HVAC{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Services</span>
            </h1>
            <p className="font-body text-base mt-5 max-w-xl leading-relaxed" style={{ color: 'rgba(184,188,196,0.85)' }}>
              From a single room to a full commercial facility, we have the expertise and
              experience to engineer the perfect climate solution for your space.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((service, index) => (
              <AnimateIn key={service.slug} delay={index * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col gap-5 p-8 rounded-2xl bg-white border border-[#D4D7DE] hover:border-[#1A1F4C] hover:shadow-[0_8px_40px_rgba(26,31,76,0.1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08A5B]"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div
                    className="w-13 h-13 w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
                    style={{ backgroundColor: '#EEF0F7', color: '#1A1F4C' }}
                  >
                    {iconMap[service.icon]}
                  </div>
                  <div>
                    <h2
                      className="font-display font-semibold mb-3"
                      style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', color: '#0D1128', letterSpacing: '-0.02em', lineHeight: 1.2 }}
                    >
                      {service.title}
                    </h2>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm font-medium mt-auto" style={{ color: '#3A4285' }}>
                    Explore this service
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
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
              Not sure what you need?
            </h2>
            <p className="font-body mb-8 max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(184,188,196,0.8)' }}>
              Our team will visit your site, assess your needs, and recommend the right
              solution — at no cost and with no obligation.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Free Assessment
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}