import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCTABar } from '@/components/layout/MobileCTABar'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, NAP } from '@/lib/constants'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Air Conditioning & HVAC Johannesburg`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'air conditioning Johannesburg',
    'aircon installation Johannesburg',
    'HVAC Johannesburg',
    'evaporative cooling South Africa',
    'aircon repairs Roodepoort',
    'commercial air conditioning Gauteng',
    'ducted air conditioning Johannesburg',
    'aircon installers Weltevreden Park',
    'best aircon installer Dainfern',
    'air conditioning Pecanwood',
    'central vacuum systems Johannesburg',
  ],
  authors: [{ name: NAP.name }],
  creator: NAP.name,
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium HVAC Johannesburg`,
    description: SITE_DESCRIPTION,
    // TODO: Add OG image — recommended size 1200×630
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Premium HVAC Johannesburg`,
    description: SITE_DESCRIPTION,
    // TODO: Add Twitter card image
    // images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // TODO: Add verification tags once Search Console is set up
  // verification: { google: 'XXXXXXXXXX' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: NAP.name,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: [NAP.phone1, NAP.phone2],
  email: NAP.emailSales,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '39 Matumie Avenue',
    addressLocality: 'Weltevreden Park',
    addressRegion: 'Gauteng',
    postalCode: '1709',
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    // TODO: verify exact coordinates for 39 Matumie Avenue, Weltevreden Park
    latitude: -26.1236,
    longitude: 27.8651,
  },
  // TODO: confirm exact business hours with client
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -26.1236,
      longitude: 27.8651,
    },
    geoRadius: '100000',
  },
  priceRange: '$$',
  foundingDate: NAP.foundedYear,
  founder: {
    '@type': 'Person',
    name: NAP.founder,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '7',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    // TODO: add Facebook, Instagram, Google Business Profile URLs
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* TODO: Replace with real GA4 measurement ID */}
        {/* GA4 placeholder — uncomment and replace NEXT_PUBLIC_GA_ID in .env.local */}
        {/*
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        ` }} />
        */}

        {/* TODO: Replace with real Meta Pixel ID */}
        {/* Meta Pixel placeholder — uncomment and replace NEXT_PUBLIC_META_PIXEL_ID */}
        {/*
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
          fbq('track', 'PageView');
        ` }} />
        */}
      </head>
      <body className="bg-base text-text-primary antialiased overflow-x-hidden">
        {/* Skip to content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Grain texture overlay — global */}
        <div className="grain-overlay" aria-hidden="true" />

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        {/* Persistent conversion elements */}
        <MobileCTABar />
        <WhatsAppButton />
      </body>
    </html>
  )
}