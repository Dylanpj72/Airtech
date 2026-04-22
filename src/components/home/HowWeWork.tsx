'use client'

import { AnimateIn } from '@/components/shared/AnimateIn'

const steps = [
  {
    number: '01',
    title: 'Free Consultation & Site Visit',
    description:
      "We visit your property, assess your space, and listen to exactly what you need. No hard sell — just honest expert advice.",
  },
  {
    number: '02',
    title: 'Tailored Recommendation & Quote',
    description:
      'We present a clear, detailed quote with the best solution for your space and budget. No hidden costs.',
  },
  {
    number: '03',
    title: 'Professional Installation',
    description:
      'Our experienced team installs with precision — neat cabling in trunking, minimal disruption, and a site left as clean as we found it.',
  },
  {
    number: '04',
    title: 'After-Sales Service & Support',
    description:
      "We don't disappear after installation. Scheduled maintenance, warranty support, and rapid breakdown response — whenever you need us.",
  },
]

export function HowWeWork() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: '#F7F8FA' }}
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-16 max-w-xl">
          <span className="copper-line" aria-hidden="true" />
          <p className="section-label mb-3">Our Process</p>
          <h2
            id="process-heading"
            className="section-heading"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            How We Work
          </h2>
          <p className="font-body text-base mt-4 leading-relaxed max-w-md" style={{ color: '#5A5F6E' }}>
            A straightforward, no-surprises process — from first contact to long-term support.
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[1.9rem] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(176,138,91,0.3), rgba(176,138,91,0.15), transparent)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <AnimateIn key={step.number} delay={index * 0.1}>
                <div className="relative flex flex-col gap-5">
                  {/* Mobile vertical connector */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-[19px] top-[40px] bottom-[-2rem] w-px lg:hidden pointer-events-none"
                      style={{ background: 'linear-gradient(to bottom, rgba(176,138,91,0.4), transparent)' }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Step number circle — copper */}
                  <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#B08A5B', boxShadow: '0 2px 12px rgba(176,138,91,0.3)' }}
                    />
                    <span
                      className="relative font-body text-xs font-bold tracking-wide"
                      style={{ color: '#FFFFFF' }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="font-display font-semibold mb-2"
                      style={{ fontSize: '1.1rem', color: '#0D1128', letterSpacing: '-0.02em', lineHeight: 1.25 }}
                    >
                      {step.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}