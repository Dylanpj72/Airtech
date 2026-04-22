import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, ArrowRight, Phone } from 'lucide-react'
import { NAP, WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: "Thank You — We'll Be In Touch | Airtech Services",
  description: 'Your enquiry has been received. The Airtech team will be in touch within 1 business day.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-24"
      style={{ backgroundColor: '#F7F8FA' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(176,138,91,0.06) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: 'rgba(176,138,91,0.1)', border: '1px solid rgba(176,138,91,0.25)' }}
        >
          <CheckCircle2 size={36} style={{ color: '#B08A5B' }} aria-hidden="true" />
        </div>

        <span className="copper-line mx-auto mb-4" aria-hidden="true" />

        <h1
          className="font-display font-semibold mb-4"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', color: '#0D1128', letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          Thank You!
        </h1>
        <p className="font-body text-base leading-relaxed mb-8" style={{ color: '#5A5F6E' }}>
          We&apos;ve received your enquiry and will be in touch within{' '}
          <strong style={{ color: '#1C1F2A' }}>1 business day</strong> to arrange your free
          site assessment or quote.
        </p>

        {/* What happens next */}
        <div
          className="p-6 rounded-2xl text-left mb-8"
          style={{ border: '1px solid #D4D7DE', backgroundColor: '#FFFFFF' }}
        >
          <h2 className="font-display text-lg font-semibold mb-4" style={{ color: '#0D1128' }}>
            What happens next?
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Clock size={14} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
              <span className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                Raymond or a team member will call or email you within 1 business day.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={14} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
              <span className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                We&apos;ll discuss your requirements and schedule a free site visit at your convenience.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={14} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
              <span className="font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                You&apos;ll receive a detailed, no-obligation quote tailored to your space.
              </span>
            </li>
          </ul>
        </div>

        {/* Direct contact */}
        <p className="font-body text-sm mb-4" style={{ color: '#5A5F6E' }}>
          Need to reach us urgently?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a href={`tel:${NAP.mobile}`} className="btn-outline flex-1 flex items-center justify-center gap-2">
            <Phone size={14} aria-hidden="true" />
            {NAP.mobileDisplay}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-body text-sm font-medium text-white transition-colors duration-200"
            style={{ backgroundColor: '#25D366' }}
          >
            WhatsApp Us
          </a>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-body text-sm transition-colors duration-200 text-[#3A4285] hover:text-[#B08A5B]"
        >
          Explore our services
          <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}