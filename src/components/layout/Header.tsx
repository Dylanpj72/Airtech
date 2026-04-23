'use client'

/**
 * Header — Airtech Services
 *
 * Logo usage rules:
 *   - Logo file: /public/airtech-logo.png
 *   - Appears in: header (all pages), footer, OG images
 *   - Minimum clear space = height of the "A" in "AIRTECH"
 *   - Never stretch, recolor, or add effects to the logo itself
 *   - Desktop: ~44px tall · Mobile: ~36px tall
 *   - Displayed on a white rectangle so the oval badge reads cleanly on any bg
 *   - TODO: generate proper favicon set (simplified "A" mark on navy-900 square)
 *
 * Nav behaviour:
 *   - Transparent over hero → white with shadow on scroll (scrollY > 60)
 *   - Text flips: white/silver on transparent, navy on white
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAP } from '@/lib/constants'

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Air Conditioning',   href: '/services/air-conditioning' },
      { label: 'Evaporative Cooling', href: '/services/evaporative-cooling' },
      { label: 'Ventilation',         href: '/services/ventilation' },
      { label: 'Central Vacuum',      href: '/services/central-vacuum' },
    ],
  },
  { label: 'Projects',      href: '/projects' },
  { label: 'Areas We Serve', href: '/areas-we-serve' },
  { label: 'Reviews',        href: '/reviews' },
  { label: 'FAQ',            href: '/faq' },
]

export function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#0D1128]/97 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05),0_4px_24px_rgba(0,0,0,0.28)] py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo — white rounded badge so the oval reads cleanly on any background */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-lg"
            aria-label="Airtech Services — Home"
          >
            <Image
              src="/airtech-logo-hd.png"
              alt="Airtech Services"
              width={120}
              height={44}
              className="h-14 w-auto transition-opacity duration-200 group-hover:opacity-90"
              style={{ mixBlendMode: 'multiply' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={cn(
                      'flex items-center gap-1 font-body text-sm font-medium transition-colors duration-200 focus-visible:outline-none',
                      scrolled
                        ? 'text-white/75 hover:text-white'
                        : 'text-white/75 hover:text-white'
                    )}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown — always white card */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div
                      className="rounded-xl overflow-hidden min-w-[220px]"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #D4D7DE',
                        boxShadow: '0 8px 32px rgba(26,31,76,0.12), 0 2px 8px rgba(26,31,76,0.06)',
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 font-body text-sm text-[#1C1F2A] hover:text-[#1A1F4C] hover:bg-[#D8DCF0] border-b border-[#E5E7EC] last:border-0 transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-body text-sm font-medium transition-colors duration-200',
                    scrolled
                      ? 'text-white/75 hover:text-white'
                      : 'text-white/75 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${NAP.phone1}`}
              className={cn(
                'flex items-center gap-2 font-body text-sm transition-colors duration-200',
                scrolled
                  ? 'text-white/65 hover:text-white'
                  : 'text-white/70 hover:text-white'
              )}
              aria-label={`Call us on ${NAP.phone1Display}`}
            >
              <Phone size={13} aria-hidden="true" />
              {NAP.phone1Display}
            </a>
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={cn(
              'lg:hidden p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded',
              scrolled ? 'text-white' : 'text-white'
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer — navy-900 */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 lg:hidden"
              style={{ backgroundColor: 'rgba(13,17,40,0.8)', backdropFilter: 'blur(6px)' }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] z-50 flex flex-col lg:hidden overflow-y-auto"
              style={{ backgroundColor: '#0D1128', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
              role="dialog"
              aria-label="Navigation menu"
              aria-modal="true"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <Image
                  src="/airtech-logo-hd.png"
                  alt="Airtech Services"
                  width={90}
                  height={33}
                  className="h-11 w-auto"
                  style={{ mixBlendMode: 'multiply' }}
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-1.5 text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded"
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-6 py-6 flex flex-col gap-0.5" aria-label="Mobile navigation">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} className="mb-3">
                      <div className="section-label-dark mb-3 mt-4">{link.label}</div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2.5 pl-4 font-body text-sm text-white/70 mb-1 transition-all duration-150 hover:text-white hover:pl-5"
                          style={{ borderLeft: '2px solid rgba(176,138,91,0.3)' }}
                          onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.borderLeftColor = '#B08A5B' }}
                          onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.borderLeftColor = 'rgba(176,138,91,0.3)' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 font-body text-base text-white/80 hover:text-white transition-colors duration-150"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-6 py-6 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <a
                  href={`tel:${NAP.phone1}`}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg text-white/80 hover:text-white transition-colors duration-200"
                  style={{ border: '1px solid rgba(212,215,222,0.15)' }}
                  aria-label={`Call ${NAP.phone1Display}`}
                >
                  <Phone size={15} className="text-brand-silver" aria-hidden="true" />
                  <span className="font-body text-sm">{NAP.phone1Display}</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}