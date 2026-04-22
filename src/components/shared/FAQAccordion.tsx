'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn } from '@/components/shared/AnimateIn'

interface FAQItem {
  question: string
  answer: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ borderTop: '1px solid #E5E7EC' }}>
      {items.map((item, i) => (
        <AnimateIn key={item.question} delay={i * 0.04}>
          <div style={{ borderBottom: '1px solid #E5E7EC' }}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left font-body text-base font-medium transition-colors duration-200 focus-visible:outline-none"
              style={{ color: open === i ? '#0D1128' : '#5A5F6E' }}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
              onMouseOver={(e) => { if (open !== i) (e.currentTarget as HTMLElement).style.color = '#0D1128' }}
              onMouseOut={(e) => { if (open !== i) (e.currentTarget as HTMLElement).style.color = '#5A5F6E' }}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={16}
                className="shrink-0"
                style={{
                  color: open === i ? '#B08A5B' : '#9095A6',
                  transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease, color 0.2s ease',
                }}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  id={`faq-answer-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                >
                  <p className="pb-5 font-body text-sm leading-relaxed" style={{ color: '#5A5F6E' }}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimateIn>
      ))}
    </div>
  )
}