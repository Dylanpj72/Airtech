import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { WhyAirtech } from '@/components/home/WhyAirtech'
import { Testimonials } from '@/components/home/Testimonials'
import { HowWeWork } from '@/components/home/HowWeWork'
import { AreasTeaser } from '@/components/home/AreasTeaser'
import { FinalCTA } from '@/components/home/FinalCTA'
import { SITE_NAME, SITE_URL, TESTIMONIALS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} | Air Conditioning & HVAC Johannesburg`,
  description:
    'Premium HVAC specialists in Johannesburg since 1992. Air conditioning installation, evaporative cooling, ventilation & central vacuum. Free quotes for homes and businesses across Gauteng.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} | Air Conditioning & HVAC Johannesburg`,
    description:
      'Premium HVAC specialists in Johannesburg since 1992. Air conditioning installation, evaporative cooling, ventilation & central vacuum. Free quotes.',
    url: SITE_URL,
  },
}

// Review schema for homepage
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: TESTIMONIALS.filter((t) => t.text).map((review, i) => ({
    '@type': 'Review',
    position: i + 1,
    author: { '@type': 'Person', name: review.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Airtech Services',
    },
  })),
}

export default function HomePage() {
  return (
    <>
      {/* Review schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <HeroSection />
      <ServicesGrid />
      <WhyAirtech />
      <Testimonials />
      <HowWeWork />
      <AreasTeaser />
      <FinalCTA />
    </>
  )
}