'use client'

import { AnimateIn } from '@/components/shared/AnimateIn'
import { COMMERCIAL_CLIENTS } from '@/lib/constants'

export function ClientLogos() {
  const loopClients = [...COMMERCIAL_CLIENTS, ...COMMERCIAL_CLIENTS]

  return (
    <section
      className="py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EC', borderBottom: '1px solid #E5E7EC' }}
      aria-label="Trusted commercial clients"
    >
      <div className="container mx-auto px-6 lg:px-10 mb-9">
        <AnimateIn direction="fade">
          <p className="section-label text-center">Trusted By</p>
        </AnimateIn>
      </div>

      {/* Scrolling strip */}
      {/* TODO: Replace text placeholders with approved greyscale logos */}
      <div className="relative" aria-hidden="true">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }}
        />

        <div className="flex animate-scroll-left whitespace-nowrap" style={{ width: 'max-content' }}>
          {loopClients.map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center px-7 py-2 mx-2 h-12 rounded-lg min-w-[160px]"
              style={{
                border: '1px solid #E5E7EC',
                backgroundColor: '#F7F8FA',
              }}
            >
              <span
                className="font-body text-sm font-medium tracking-wide whitespace-nowrap"
                style={{ color: '#9095A6' }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}