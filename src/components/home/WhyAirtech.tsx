'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Award, Building2, Headphones } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'

const pillars = [
  {
    icon: Calendar,
    title: 'Founded 1992',
    description:
      "Three decades of proven excellence, built under the personal leadership of founder Raymond Prout-Jones. Not a franchise — a craftsman's company.",
  },
  {
    icon: Award,
    title: 'Craftsmanship-Led Installations',
    description:
      'Every cable housed in trunking. Every unit positioned with care. Installations that look as good as they perform — our clients notice the difference.',
  },
  {
    icon: Building2,
    title: 'Trusted by Estates & Corporates',
    description:
      "From Pecanwood to MTN, our work speaks for itself. We've earned the trust of Johannesburg's finest estates and leading commercial clients.",
  },
  {
    icon: Headphones,
    title: 'End-to-End Service',
    description:
      "Honest advice, tailored supply, expert installation, and dedicated after-sales support. We're with you long after the job is done.",
  },
]

function PillarCard({ pillar, index }: { pillar: (typeof pillars)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const Icon = pillar.icon

  return (
    <AnimateIn delay={index * 0.1}>
      <div
        className="flex flex-col gap-5 p-7 rounded-2xl bg-white h-full"
        style={{
          border: `1px solid ${hovered ? '#1A1F4C' : '#D4D7DE'}`,
          boxShadow: hovered ? '0 8px 40px rgba(26,31,76,0.1)' : '0 1px 4px rgba(26,31,76,0.04)',
          transition: 'border-color 0.3s ease, box-shadow 0.35s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="w-11 h-11 flex items-center justify-center rounded-xl shrink-0"
          style={{
            backgroundColor: hovered ? 'rgba(176,138,91,0.1)' : '#D8DCF0',
            transition: 'background-color 0.3s ease',
          }}
        >
          <Icon
            size={20}
            strokeWidth={1.5}
            aria-hidden="true"
            style={{
              color: hovered ? '#B08A5B' : '#1A1F4C',
              transition: 'color 0.3s ease',
            }}
          />
        </div>

        <div className="flex-1 space-y-2">
          <h3
            className="font-display font-semibold"
            style={{ fontSize: '1.2rem', color: '#0D1128', letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            {pillar.title}
          </h3>
          <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
            {pillar.description}
          </p>
        </div>
      </div>
    </AnimateIn>
  )
}

export function WhyAirtech() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#D8DCF0' }}
      aria-labelledby="why-airtech-heading"
    >
      {/* Large watermark — editorial depth detail */}
      <div
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-semibold block leading-none"
          style={{ fontSize: 'clamp(140px, 20vw, 280px)', color: 'rgba(26,31,76,0.04)' }}
        >
          30+
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label mb-3">Why Airtech</p>
            <h2
              id="why-airtech-heading"
              className="section-heading"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Craftsmanship, Reliability,{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>and Trust</span>
            </h2>
            <p className="font-body text-base mt-4 leading-relaxed max-w-md" style={{ color: '#5A5F6E' }}>
              A company built on doing the job right — every time. These are the principles that
              have kept our clients coming back for over 30 years.
            </p>
          </AnimateIn>

          <AnimateIn direction="left" delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
                alt="Precision HVAC installation by Airtech Services"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom right, rgba(13,17,40,0.06) 0%, rgba(13,17,40,0.45) 100%)' }}
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-body text-xs font-medium"
                  style={{ backgroundColor: 'rgba(176,138,91,0.88)', color: '#FFFFFF' }}
                >
                  Est. 1992 · Over 30 Years of Craftsmanship
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}