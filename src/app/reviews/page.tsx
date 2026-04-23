import type { Metadata } from 'next'
import { Star, ExternalLink } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL, TESTIMONIALS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Client Reviews — 5-Star HVAC Service Johannesburg',
  description:
    'Read what our clients say about Airtech Services. All 5-star Google reviews from homeowners and businesses across Johannesburg and Gauteng.',
  alternates: { canonical: `${SITE_URL}/reviews` },
}

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Airtech Services',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(TESTIMONIALS.length),
    bestRating: '5',
    worstRating: '1',
  },
  review: TESTIMONIALS.filter((t) => t.text).map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.name },
    reviewRating: { '@type': 'Rating', ratingValue: review.rating, bestRating: 5 },
    reviewBody: review.text,
  })),
}

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

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-10 md:pb-16 relative overflow-hidden" style={{ backgroundColor: '#0D1128' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label-dark mb-3">What Clients Say</p>
            <h1 className="display-heading max-w-xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: '#FFFFFF' }}>
              Trusted by Hundreds of{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Satisfied Clients</span>
            </h1>
          </AnimateIn>

          {/* Aggregate rating */}
          <AnimateIn delay={0.1} className="mt-8 flex items-center gap-4">
            <div
              className="flex flex-col items-center p-5 rounded-xl min-w-[100px]"
              style={{ border: '1px solid #D4D7DE', backgroundColor: '#FFFFFF' }}
            >
              <span className="font-display text-4xl font-semibold" style={{ color: '#0D1128' }}>5.0</span>
              <div className="flex gap-0.5 my-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} style={{ color: '#B08A5B' }} fill="#B08A5B" aria-hidden="true" />
                ))}
              </div>
              <span className="font-body text-xs" style={{ color: '#9095A6' }}>Google Reviews</span>
            </div>
            <div>
              <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: '#5A5F6E' }}>
                All reviews are 5 stars. Our clients recommend us — every time.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-xs mt-2 transition-colors duration-200 text-[#3A4285] hover:text-[#B08A5B]"
                aria-label="Leave a Google review"
              >
                {/* TODO: Replace # with actual Google Business Profile review link */}
                Leave us a review
                <ExternalLink size={11} aria-hidden="true" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 pb-24 md:pb-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((review, index) => (
              <AnimateIn key={review.name} delay={index * 0.07}>
                <article
                  className="flex flex-col gap-4 p-6 rounded-xl h-full transition-all duration-300 border border-[#D4D7DE] hover:border-[#1A1F4C] bg-[#F7F8FA] hover:bg-white"
                  aria-label={`Review by ${review.name}`}
                >
                  <StarRating rating={review.rating} />
                  {review.text ? (
                    <blockquote className="flex-1">
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </blockquote>
                  ) : (
                    <div className="flex-1 flex items-center">
                      <p className="font-body text-sm italic" style={{ color: '#9095A6' }}>
                        5-star rating (no written review)
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #E5E7EC' }}>
                    <div>
                      <div className="font-body text-sm font-semibold" style={{ color: '#0D1128' }}>{review.name}</div>
                      {review.isLocalGuide && (
                        <div className="font-body text-xs" style={{ color: '#9095A6' }}>Google Local Guide</div>
                      )}
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
                      style={{ border: '1px solid #E5E7EC', backgroundColor: '#FFFFFF' }}
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
            ))}
          </div>
        </div>
      </section>
    </>
  )
}