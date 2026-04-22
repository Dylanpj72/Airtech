'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { ESTATES } from '@/lib/constants'

const regions = Array.from(new Set(ESTATES.map((e) => e.region))).map((region) => ({
  name: region,
  estates: ESTATES.filter((e) => e.region === region).map((e) => e.name),
}))

export function AreasTeaser() {
  const [linkHovered, setLinkHovered] = useState(false)

  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
      aria-labelledby="areas-heading"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: content */}
          <AnimateIn direction="right">
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label mb-3">Service Area</p>
            <h2
              id="areas-heading"
              className="section-heading mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Serving Greater Johannesburg{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>&amp; Beyond</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-8 max-w-md" style={{ color: '#5A5F6E' }}>
              From Dainfern and Kyalami in the north to Pecanwood on the Hartbeespoort Dam — we
              serve Johannesburg&apos;s most prestigious addresses, and all surrounding Gauteng areas
              on request.
            </p>

            <div className="space-y-5 mb-8">
              {regions.map((region) => (
                <div key={region.name}>
                  <div
                    className="font-body text-xs tracking-[0.18em] uppercase mb-2"
                    style={{ color: '#9095A6' }}
                  >
                    {region.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.estates.map((estate) => (
                      <span
                        key={estate}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-xs"
                        style={{
                          border: '1px solid #D4D7DE',
                          backgroundColor: '#F7F8FA',
                          color: '#5A5F6E',
                        }}
                      >
                        <MapPin size={10} style={{ color: '#1A1F4C' }} aria-hidden="true" />
                        {estate}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/areas-we-serve"
              className="inline-flex items-center gap-2 font-body text-sm font-medium"
              style={{ color: linkHovered ? '#B08A5B' : '#3A4285', transition: 'color 0.2s ease' }}
              onMouseEnter={() => setLinkHovered(true)}
              onMouseLeave={() => setLinkHovered(false)}
            >
              See all areas we cover
              <ArrowRight
                size={14}
                aria-hidden="true"
                style={{
                  transform: linkHovered ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'transform 0.25s ease',
                }}
              />
            </Link>
          </AnimateIn>

          {/* Right: service area visual */}
          <AnimateIn direction="left" delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80"
                alt="Johannesburg city skyline — Airtech Services coverage area"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(13,17,40,0.1) 0%, rgba(13,17,40,0.62) 100%)' }}
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 z-10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#B08A5B' }}
                >
                  <MapPin size={14} style={{ color: '#FFFFFF' }} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-white">Greater Gauteng</div>
                  <div className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Based in Weltevreden Park, Roodepoort
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}