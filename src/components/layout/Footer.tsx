'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { NAP, WHATSAPP_LINK, SERVICES } from '@/lib/constants'

const quickLinks = [
  { label: 'About Us',       href: '/about' },
  { label: 'Projects',       href: '/projects' },
  { label: 'Areas We Serve', href: '/areas-we-serve' },
  { label: 'Reviews',        href: '/reviews' },
  { label: 'FAQ',            href: '/faq' },
  { label: 'Contact',        href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="pb-20 md:pb-0"
      style={{ backgroundColor: '#0D1128', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Thin copper rule at top */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(176,138,91,0.5), rgba(184,188,196,0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="inline-block bg-white rounded-lg px-3 py-2 mb-6 shadow-sm">
              <Image
                src="/airtech-logo.png"
                alt="Airtech Services"
                width={130}
                height={47}
                className="h-10 w-auto"
              />
            </div>
            <p className="font-body text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'rgba(184,188,196,0.75)' }}>
              Premium HVAC specialists in Johannesburg. Craftsmanship-led installations
              trusted by estates and corporates since {NAP.foundedYear}.
            </p>
            {/* Copper accent line */}
            <div
              className="w-10 h-px mb-6"
              style={{ background: 'linear-gradient(to right, #B08A5B, #B8BCC4)' }}
              aria-hidden="true"
            />
            {/* Social placeholders — TODO: add real URLs */}
            <div className="flex gap-2.5">
              {['F', 'I', 'L'].map((initial, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={['Facebook', 'Instagram', 'LinkedIn'][i]}
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-body text-xs transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(184,188,196,0.5)' }}
                  onMouseOver={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(176,138,91,0.5)'
                    el.style.color = '#B08A5B'
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                    el.style.color = 'rgba(184,188,196,0.5)'
                  }}
                >
                  {initial}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-body text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: '#B8BCC4' }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-body text-sm transition-colors duration-150"
                    style={{ color: 'rgba(184,188,196,0.65)' }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#B08A5B' }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,188,196,0.65)' }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="font-body text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: '#B8BCC4' }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors duration-150"
                    style={{ color: 'rgba(184,188,196,0.65)' }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#B08A5B' }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,188,196,0.65)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-body text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: '#B8BCC4' }}
            >
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:${NAP.phone1}`}
                  className="flex items-start gap-2.5 font-body text-sm transition-colors duration-150"
                  style={{ color: 'rgba(184,188,196,0.65)' }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4D7DE' }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,188,196,0.65)' }}
                >
                  <Phone size={13} style={{ color: '#B08A5B', marginTop: 2 }} className="shrink-0" aria-hidden="true" />
                  <span>
                    {NAP.phone1Display}
                    <br />
                    {NAP.phone2Display}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${NAP.mobile}`}
                  className="flex items-center gap-2.5 font-body text-sm transition-colors duration-150"
                  style={{ color: 'rgba(184,188,196,0.65)' }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4D7DE' }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,188,196,0.65)' }}
                >
                  <Phone size={13} style={{ color: '#B08A5B' }} className="shrink-0" aria-hidden="true" />
                  {NAP.mobileDisplay} (Sales)
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${NAP.emailSales}`}
                  className="flex items-center gap-2.5 font-body text-sm transition-colors duration-150"
                  style={{ color: 'rgba(184,188,196,0.65)' }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4D7DE' }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,188,196,0.65)' }}
                >
                  <Mail size={13} style={{ color: '#B08A5B' }} className="shrink-0" aria-hidden="true" />
                  {NAP.emailSales}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-body text-sm transition-colors duration-150"
                  style={{ color: 'rgba(184,188,196,0.65)' }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#25D366' }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,188,196,0.65)' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#B08A5B" className="shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin size={13} style={{ color: '#B08A5B', marginTop: 3 }} className="shrink-0" aria-hidden="true" />
                  <address className="font-body text-sm not-italic leading-relaxed" style={{ color: 'rgba(184,188,196,0.65)' }}>
                    {NAP.address}
                    <br />
                    <span style={{ color: 'rgba(144,149,166,0.7)' }}>{NAP.postalAddress}</span>
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="font-body text-xs text-center sm:text-left" style={{ color: 'rgba(144,149,166,0.7)' }}>
          © {currentYear} {NAP.name}. All rights reserved. Est. {NAP.foundedYear}.
        </p>
        <div className="flex items-center gap-4">
          {[{ label: 'Privacy Policy', href: '#' }, { label: 'Terms of Service', href: '#' }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs transition-colors duration-150"
              style={{ color: 'rgba(144,149,166,0.7)' }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#B8BCC4' }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(144,149,166,0.7)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}