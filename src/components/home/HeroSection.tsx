'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowDown } from 'lucide-react'
import { NAP, COMMERCIAL_CLIENTS } from '@/lib/constants'

const trustBadges = [
  { label: 'Est.',       value: '1992' },
  { label: '30+',        value: 'Years' },
  { label: 'Commercial', value: '& Residential' },
  { label: 'Serving',    value: 'Greater Gauteng' },
]

const loopClients = [...COMMERCIAL_CLIENTS, ...COMMERCIAL_CLIENTS]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 32 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[680px] max-h-[1080px] flex flex-col overflow-hidden">
      {/* Background image — luxury interior, warm tones */}
      <Image
        src="/hero.png"
        alt="Precision HVAC installation in a Johannesburg luxury home"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Cinematic overlay — navy-900 vertical gradient (dark bottom, reveals image top) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,17,40,0.08) 0%, rgba(13,17,40,0.22) 38%, rgba(13,17,40,0.74) 65%, rgba(13,17,40,0.96) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle navy radial warmth — top left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(26,31,76,0.25) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Flex spacer — pushes content to bottom */}
      <div className="flex-1" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10 pb-10 md:pb-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Pre-heading — copper line + silver label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span
              className="block w-10 h-px"
              style={{ background: 'linear-gradient(to right, #B08A5B, #D4D7DE)' }}
              aria-hidden="true"
            />
            <span className="section-label-dark">Est. {NAP.foundedYear} — Johannesburg, Gauteng</span>
          </motion.div>

          {/* Main headline — white on dark */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-semibold tracking-display leading-display mb-6 text-white"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}
          >
            Precision Climate Control{' '}
            <span className="italic font-light" style={{ color: 'rgba(212,215,222,0.8)' }}>for</span>
            <br />
            {/* Copper accent on the brand differentiator word */}
            <span style={{ color: '#C79C6B' }}>Johannesburg&apos;s</span>{' '}
            Finest Homes
            <br />
            <span className="italic font-light" style={{ color: 'rgba(184,188,196,0.85)' }}>&amp; Businesses</span>
          </motion.h1>

          {/* Sub-headline — silver on dark */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ color: 'rgba(184,188,196,0.85)' }}
          >
            Over 30 years of craftsmanship in air conditioning, ventilation, and evaporative
            cooling. Trusted by MTN, Dainfern, Kyalami, and homeowners across Gauteng.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            <Link href="/contact" className="btn-primary text-base">
              Get a Free Quote
            </Link>
            <a
              href={`tel:${NAP.mobile}`}
              className="btn-outline-dark flex items-center gap-2"
              aria-label={`Call Raymond on ${NAP.mobileDisplay}`}
            >
              <Phone size={15} aria-hidden="true" />
              {NAP.mobileDisplay}
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Trust indicators"
          >
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="block w-1 h-1 rounded-full"
                  style={{ backgroundColor: '#B08A5B' }}
                  aria-hidden="true"
                />
                <span className="font-body text-xs" style={{ color: 'rgba(144,149,166,0.9)' }}>
                  <span className="font-medium" style={{ color: '#D4D7DE' }}>{badge.value}</span>{' '}
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted by band — navy, anchored to bottom of hero */}
      <div
        className="relative z-20 w-full overflow-hidden py-3.5"
        style={{ backgroundColor: '#1A1F4C' }}
        aria-label="Trusted commercial clients"
      >
        <div className="flex items-center">
          {/* Label */}
          <div className="shrink-0 pl-6 lg:pl-10 pr-5 border-r" style={{ borderColor: 'rgba(184,188,196,0.15)' }}>
            <span
              className="font-body text-[10px] tracking-[0.2em] uppercase font-medium whitespace-nowrap"
              style={{ color: '#B08A5B' }}
            >
              Trusted By
            </span>
          </div>

          {/* Scrolling names */}
          <div className="relative flex-1 overflow-hidden" aria-hidden="true">
            <div
              className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #1A1F4C, transparent)' }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #1A1F4C, transparent)' }}
            />
            <div className="flex animate-scroll-left whitespace-nowrap" style={{ width: 'max-content' }}>
              {loopClients.map((client, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 px-5 font-body text-sm"
                  style={{ color: 'rgba(184,188,196,0.6)' }}
                >
                  <span
                    className="inline-block w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: 'rgba(176,138,91,0.35)' }}
                  />
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-[68px] right-8 md:right-12 flex flex-col items-center gap-2"
        style={{ opacity: 0.45 }}
        aria-hidden="true"
      >
        <span className="font-body text-[9px] tracking-[0.2em] uppercase rotate-90 origin-center mb-3" style={{ color: '#B8BCC4' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} style={{ color: '#B08A5B' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}