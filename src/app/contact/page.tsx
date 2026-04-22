import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Printer } from 'lucide-react'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { LeadForm } from '@/components/shared/LeadForm'
import { SITE_URL, NAP, WHATSAPP_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Quote | Airtech Services',
  description:
    "Get a free, no-obligation quote from Airtech Services. Call, WhatsApp, or fill in the form. We'll be in touch within 1 business day.",
  alternates: { canonical: `${SITE_URL}/contact` },
}

const contactDetails = [
  { icon: Phone,   label: 'Office',              value: `${NAP.phone1Display} / ${NAP.phone2Display}`, href: `tel:${NAP.phone1}` },
  { icon: Phone,   label: 'Sales (Raymond)',      value: NAP.mobileDisplay,  href: `tel:${NAP.mobile}` },
  { icon: Mail,    label: 'Sales enquiries',      value: NAP.emailSales,     href: `mailto:${NAP.emailSales}` },
  { icon: Mail,    label: 'Service & breakdowns', value: NAP.emailService,   href: `mailto:${NAP.emailService}` },
  { icon: Printer, label: 'Fax',                  value: '+27 86 619 2870',  href: undefined },
  { icon: MapPin,  label: 'Address',              value: NAP.address,        href: 'https://maps.google.com/?q=39+Matumie+Avenue,+Weltevreden+Park,+Roodepoort' },
  { icon: Clock,   label: 'Hours',                value: 'Mon–Fri: 08:00–17:00', href: undefined },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden" style={{ backgroundColor: '#F7F8FA' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 35% 40%, rgba(26,31,76,0.04) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label mb-3">Get In Touch</p>
            <h1 className="display-heading max-w-xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
              Let&apos;s Talk{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Comfort</span>
            </h1>
            <p className="font-body text-base mt-4 max-w-md leading-relaxed" style={{ color: '#5A5F6E' }}>
              Free site assessments, no-obligation quotes. Fill in the form below or contact us
              directly — we&apos;ll be in touch within 1 business day.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main grid */}
      <section className="py-16 pb-24 md:pb-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Lead form — 3/5 cols */}
            <AnimateIn direction="right" className="lg:col-span-3">
              <div
                className="p-6 md:p-8 rounded-2xl"
                style={{ border: '1px solid #D4D7DE', backgroundColor: '#FFFFFF' }}
              >
                <h2 className="font-display text-2xl font-semibold mb-1" style={{ color: '#0D1128' }}>
                  Request a Free Quote
                </h2>
                <p className="font-body text-sm mb-6" style={{ color: '#5A5F6E' }}>
                  Tell us a little about your project and we&apos;ll take it from there.
                </p>
                <LeadForm />
              </div>
            </AnimateIn>

            {/* Contact details — 2/5 cols */}
            <AnimateIn direction="left" delay={0.1} className="lg:col-span-2 space-y-6">

              {/* Details card */}
              <div
                className="p-6 rounded-2xl"
                style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
              >
                <h2 className="font-display text-xl font-semibold mb-5" style={{ color: '#0D1128' }}>
                  Contact Details
                </h2>
                <ul className="space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon
                    const inner = (
                      <div className="flex items-start gap-3">
                        <Icon size={14} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-body text-[10px] tracking-[0.15em] uppercase mb-0.5" style={{ color: '#9095A6' }}>
                            {detail.label}
                          </div>
                          <div className="font-body text-sm" style={{ color: '#5A5F6E' }}>
                            {detail.value}
                          </div>
                        </div>
                      </div>
                    )
                    return (
                      <li key={detail.label}>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={detail.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="block hover:opacity-80 transition-opacity duration-150"
                          >
                            {inner}
                          </a>
                        ) : inner}
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-2xl transition-colors duration-200 hover:bg-[#25D366]/10"
                style={{ border: '1px solid rgba(37,211,102,0.25)', backgroundColor: 'rgba(37,211,102,0.05)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#25D366' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body text-sm font-semibold" style={{ color: '#0D1128' }}>
                    Chat on WhatsApp
                  </div>
                  <div className="font-body text-xs" style={{ color: '#5A5F6E' }}>
                    Quick response during business hours
                  </div>
                </div>
              </a>

              {/* Map placeholder */}
              <div
                className="rounded-2xl overflow-hidden h-48 flex items-center justify-center"
                style={{ border: '1px solid #D4D7DE', backgroundColor: '#F7F8FA' }}
              >
                {/* TODO: Replace with actual Google Maps embed */}
                <div className="text-center p-6">
                  <MapPin size={24} style={{ color: '#1A1F4C', opacity: 0.4 }} strokeWidth={1} className="mx-auto mb-2" aria-hidden="true" />
                  <p className="font-body text-xs" style={{ color: '#9095A6' }}>
                    TODO: Add Google Maps embed
                  </p>
                  <a
                    href="https://maps.google.com/?q=39+Matumie+Avenue,+Weltevreden+Park,+Roodepoort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs mt-1 block transition-colors duration-200 text-[#3A4285] hover:text-[#B08A5B]"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}