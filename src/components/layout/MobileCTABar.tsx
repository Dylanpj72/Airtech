'use client'

import Link from 'next/link'
import { Phone, MessageCircle, FileText } from 'lucide-react'
import { NAP, WHATSAPP_LINK } from '@/lib/constants'

export function MobileCTABar() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-inset-bottom"
      style={{
        backgroundColor: '#0D1128',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="grid grid-cols-3 h-[60px]">
        <a
          href={`tel:${NAP.mobile}`}
          className="flex flex-col items-center justify-center gap-0.5 transition-colors duration-150 active:opacity-70"
          style={{ color: 'rgba(184,188,196,0.7)' }}
          onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4D7DE' }}
          onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,188,196,0.7)' }}
          aria-label={`Call ${NAP.mobileDisplay}`}
        >
          <Phone size={18} />
          <span className="font-body text-[10px] tracking-wide">Call</span>
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 transition-colors duration-150 active:opacity-70"
          style={{ color: 'rgba(184,188,196,0.7)', borderLeft: '1px solid rgba(255,255,255,0.08)', borderRight: '1px solid rgba(255,255,255,0.08)' }}
          onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#25D366' }}
          onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(184,188,196,0.7)' }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="font-body text-[10px] tracking-wide">WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-0.5 transition-colors duration-150 active:opacity-70"
          style={{ color: '#B08A5B' }}
          onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#C79C6B' }}
          onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = '#B08A5B' }}
          aria-label="Get a free quote"
        >
          <FileText size={18} />
          <span className="font-body text-[10px] tracking-wide font-semibold">Quote</span>
        </Link>
      </div>
    </nav>
  )
}