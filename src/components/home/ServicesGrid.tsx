'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Thermometer, Wind, ArrowUpDown, CircleDot, ArrowRight } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Thermometer,
  Wind,
  ArrowUpDown,
  CircleDot,
}

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[service.icon] ?? Thermometer
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col gap-6 p-8 md:p-10 rounded-2xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
      style={{
        border: `1px solid ${hovered ? '#1A1F4C' : '#D4D7DE'}`,
        boxShadow: hovered ? '0 8px 40px rgba(26,31,76,0.1)' : 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.35s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Learn more about ${service.title}`}
    >
      {/* Decorative index number — editorial detail, barely visible */}
      <span
        className="absolute top-8 right-8 font-display font-semibold select-none pointer-events-none"
        style={{
          fontSize: 'clamp(3rem, 5vw, 5rem)',
          color: 'rgba(26,31,76,0.04)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {num}
      </span>

      {/* Icon container */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl shrink-0"
        style={{
          backgroundColor: hovered ? 'rgba(176,138,91,0.1)' : '#EEF0F7',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Icon
          size={22}
          strokeWidth={1.5}
          aria-hidden="true"
          style={{
            color: hovered ? '#B08A5B' : '#1A1F4C',
            transition: 'color 0.3s ease',
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <h3
          className="font-display font-semibold"
          style={{
            fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
            color: '#0D1128',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          {service.title}
        </h3>
        <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
          {service.shortDesc}
        </p>
      </div>

      {/* Explore link */}
      <div
        className="flex items-center gap-2 font-body text-sm font-medium"
        style={{
          color: hovered ? '#B08A5B' : '#3A4285',
          transition: 'color 0.25s ease',
        }}
      >
        Explore this service
        <ArrowRight
          size={14}
          aria-hidden="true"
          style={{
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.25s ease',
          }}
        />
      </div>
    </Link>
  )
}

export function ServicesGrid() {
  return (
    <section
      className="py-14 md:py-24"
      style={{ backgroundColor: '#ECEEF5' }}
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6 lg:px-10">

        {/* Section intro */}
        <AnimateIn className="mb-10 md:mb-14 max-w-xl">
          <span className="copper-line" aria-hidden="true" />
          <p className="section-label mb-3">What We Offer</p>
          <h2
            id="services-heading"
            className="section-heading"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Four Disciplines.{' '}
            <span className="italic font-light" style={{ color: '#B08A5B' }}>One Craftsman.</span>
          </h2>
          <p className="font-body text-base mt-4 leading-relaxed max-w-md" style={{ color: '#5A5F6E' }}>
            From a single room to a full commercial facility — we engineer the right climate
            solution for every space, every budget.
          </p>
        </AnimateIn>

        {/* 2-column editorial card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service, index) => (
            <AnimateIn key={service.slug} delay={index * 0.08}>
              <ServiceCard service={service} index={index} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}