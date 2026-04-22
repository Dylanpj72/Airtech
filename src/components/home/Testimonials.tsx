'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { TESTIMONIALS } from '@/lib/constants'

const featured = TESTIMONIALS.filter((t) => t.featured)

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          style={{ color: i < rating ? '#B08A5B' : '#D4D7DE' }}
          fill={i < rating ? '#B08A5B' : 'none'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function TestimonialCard({ review, index }: { review: (typeof featured)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateIn delay={index * 0.1}>
      <article
        className="relative flex flex-col gap-5 p-7 rounded-2xl bg-white h-full overflow-hidden"
        style={{
          border: `1px solid ${hovered ? '#1A1F4C' : '#D4D7DE'}`,
          boxShadow: hovered ? '0 8px 40px rgba(26,31,76,0.1)' : '0 1px 4px rgba(26,31,76,0.04)',
          transition: 'border-color 0.3s ease, box-shadow 0.35s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Review by ${review.name}`}
      >
        {/* Large decorative quote — editorial detail */}
        <span
          className="absolute top-4 right-6 font-display font-semibold select-none pointer-events-none leading-none"
          style={{ fontSize: '6rem', color: 'rgba(26,31,76,0.04)' }}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <StarRating rating={review.rating} />

        {review.text && (
          <blockquote className="flex-1 relative z-10">
            <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
              &ldquo;{review.text}&rdquo;
            </p>
          </blockquote>
        )}

        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid #E5E7EC' }}
        >
          <div>
            <div className="font-body text-sm font-semibold" style={{ color: '#0D1128' }}>
              {review.name}
            </div>
            {review.isLocalGuide && (
              <div className="font-body text-xs mt-0.5" style={{ color: '#9095A6' }}>
                Google Local Guide
              </div>
            )}
          </div>

          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
            style={{ border: '1px solid #E5E7EC', backgroundColor: '#F7F8FA' }}
            aria-label="Review via Google"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-body text-[10px]" style={{ color: '#9095A6' }}>Google</span>
          </div>
        </div>
      </article>
    </AnimateIn>
  )
}

export function Testimonials() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: '#EEF0F7' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <AnimateIn className="mb-14 text-center">
          <span className="copper-line mx-auto" aria-hidden="true" />
          <p className="section-label mb-3">What Our Clients Say</p>
          <h2
            id="testimonials-heading"
            className="section-heading mx-auto max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Trusted by Families &amp; Businesses{' '}
            <span className="italic font-light" style={{ color: '#B08A5B' }}>Across Gauteng</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((review, index) => (
            <TestimonialCard key={review.name} review={review} index={index} />
          ))}
        </div>

        <AnimateIn delay={0.3} className="mt-10 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 font-body text-sm font-medium transition-colors duration-200"
            style={{ color: '#3A4285' }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#B08A5B' }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = '#3A4285' }}
          >
            Read all {TESTIMONIALS.length} Google reviews →
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}