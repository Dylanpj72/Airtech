'use client'

/**
 * Airtech Services — Internal Style Guide
 * Route: /styleguide
 *
 * NOT linked from main nav. Exclude from sitemap in production:
 *   - next-sitemap.config.js: add '/styleguide' to exclude array
 *   - robots.txt: Disallow /styleguide for search bots
 *
 * Use this page to verify the brand design system at a glance.
 */


const colors = [
  { name: 'Navy (Primary)',    hex: '#1A1F4C', text: 'white',   label: 'brand.navy' },
  { name: 'Navy 900',          hex: '#0D1128', text: 'white',   label: 'brand.navy.900' },
  { name: 'Navy 800',          hex: '#141836', text: 'white',   label: 'brand.navy.800' },
  { name: 'Navy 700',          hex: '#2A3068', text: 'white',   label: 'brand.navy.700' },
  { name: 'Navy 500',          hex: '#3A4285', text: 'white',   label: 'brand.navy.500' },
  { name: 'Navy 100',          hex: '#EEF0F7', text: '#1A1F4C', label: 'brand.navy.100' },
  { name: 'Silver',            hex: '#B8BCC4', text: '#1C1F2A', label: 'brand.silver' },
  { name: 'Silver 400',        hex: '#D4D7DE', text: '#1C1F2A', label: 'brand.silver.400' },
  { name: 'Silver 300',        hex: '#E5E7EC', text: '#1C1F2A', label: 'brand.silver.300' },
  { name: 'Copper (CTA)',      hex: '#B08A5B', text: 'white',   label: 'brand.copper' },
  { name: 'Copper Light',      hex: '#C79C6B', text: 'white',   label: 'brand.copper.light' },
  { name: 'Copper Deep',       hex: '#8F6E45', text: 'white',   label: 'brand.copper.deep' },
  { name: 'Platinum (Bg)',     hex: '#F7F8FA', text: '#1C1F2A', label: 'brand.platinum' },
  { name: 'White (Cards)',     hex: '#FFFFFF', text: '#1C1F2A', label: 'surface' },
  { name: 'Ink',               hex: '#1C1F2A', text: 'white',   label: 'brand.ink' },
  { name: 'Ink Muted',         hex: '#5A5F6E', text: 'white',   label: 'brand.ink.muted' },
  { name: 'Text Muted',        hex: '#9095A6', text: 'white',   label: 'text-muted' },
  { name: 'Success',           hex: '#3D7A5A', text: 'white',   label: 'semantic.success' },
  { name: 'Error',             hex: '#A93B3B', text: 'white',   label: 'semantic.error' },
]

const typeScale = [
  { tag: 'H1 / Display', size: '3.8rem', weight: '600', font: 'Cormorant Garamond', sample: 'Precision Climate Control' },
  { tag: 'H2 / Section',  size: '2.8rem', weight: '600', font: 'Cormorant Garamond', sample: 'Craftsmanship, Reliability & Trust' },
  { tag: 'H3 / Card',     size: '1.5rem', weight: '600', font: 'Cormorant Garamond', sample: 'Air Conditioning Systems' },
  { tag: 'H4 / Sub',      size: '1.2rem', weight: '600', font: 'Cormorant Garamond', sample: 'Free site assessments' },
  { tag: 'Body (base)',   size: '1rem',   weight: '400', font: 'Manrope',             sample: 'Over 30 years of craftsmanship in air conditioning, ventilation, and evaporative cooling across Gauteng.' },
  { tag: 'Body (small)',  size: '0.875rem', weight: '400', font: 'Manrope',           sample: 'Est. 1992 · Trusted by MTN, Plascon & hundreds of Johannesburg homes.' },
  { tag: 'Label / UI',    size: '0.75rem',  weight: '500', font: 'Manrope',           sample: 'FREE SITE ASSESSMENT · NO OBLIGATION QUOTE' },
]

function Swatch({ name, hex, text, label }: { name: string; hex: string; text: string; label: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-[#D4D7DE]">
      <div className="h-20 w-full" style={{ backgroundColor: hex }} />
      <div className="p-3 bg-white">
        <div className="font-semibold text-[#1C1F2A] text-sm leading-tight">{name}</div>
        <div className="font-mono text-[#5A5F6E] text-xs mt-0.5">{hex}</div>
        <div className="text-[#9095A6] text-[10px] mt-1 tracking-wide uppercase">{label}</div>
      </div>
    </div>
  )
}

export default function StyleguidePage() {
  return (
    <div style={{ backgroundColor: '#F7F8FA', color: '#1C1F2A', fontFamily: 'system-ui, sans-serif', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '64px 32px' }}>

        {/* Header */}
        <div className="mb-16">
          <div style={{ width: '3rem', height: '1px', background: 'linear-gradient(to right, #B08A5B, #D4D7DE)', marginBottom: '1rem' }} />
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3A4285', fontWeight: 500 }}>
            Internal — Not for Publication
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', fontWeight: 600, color: '#0D1128', letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '0.5rem' }}>
            Airtech Services<br />
            <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#B08A5B' }}>Brand Design System</span>
          </h1>
          <p style={{ color: '#5A5F6E', marginTop: '1rem', maxWidth: '560px', lineHeight: 1.7 }}>
            All color tokens, typography, components, and spacing used across the website.
            Derived from the Airtech logo oval badge: deep navy · platinum silver · brushed copper.
          </p>
        </div>

        {/* ── Color Palette ─────────────────────────────── */}
        <section className="mb-20">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 600, color: '#0D1128', marginBottom: '0.5rem' }}>Color Palette</h2>
          <p style={{ color: '#5A5F6E', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Copper (#B08A5B) is the CTA accent — use at most once or twice per viewport.
            Navy (#1A1F4C) is the anchor. Silver (#B8BCC4) is the sophisticated neutral.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {colors.map((c) => <Swatch key={c.hex} {...c} />)}
          </div>
        </section>

        {/* ── Typography ────────────────────────────────── */}
        <section className="mb-20">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 600, color: '#0D1128', marginBottom: '1.5rem' }}>Typography Scale</h2>
          <div className="space-y-6">
            {typeScale.map((t) => (
              <div key={t.tag} className="p-6 bg-white rounded-xl border border-[#D4D7DE]">
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9095A6', fontFamily: 'monospace' }}>{t.tag}</span>
                  <span style={{ fontSize: '0.7rem', color: '#B8BCC4' }}>·</span>
                  <span style={{ fontSize: '0.7rem', color: '#9095A6', fontFamily: 'monospace' }}>{t.size} / {t.weight} / {t.font}</span>
                </div>
                <div style={{ fontFamily: t.font === 'Cormorant Garamond' ? 'var(--font-cormorant), Georgia, serif' : 'var(--font-manrope), system-ui', fontSize: t.size, fontWeight: t.weight, color: '#1C1F2A', lineHeight: t.tag.startsWith('H') ? 1.1 : 1.7 }}>
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Buttons ───────────────────────────────────── */}
        <section className="mb-20">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 600, color: '#0D1128', marginBottom: '1.5rem' }}>Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Light bg variants */}
            <div className="p-8 bg-white rounded-xl border border-[#D4D7DE] flex flex-col gap-4">
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9095A6' }}>On Light Backgrounds</p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#" className="btn-primary">Get a Free Quote</a>
                <a href="#" className="btn-outline">Call Us Now</a>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#" className="btn-primary" style={{ opacity: 0.6, cursor: 'not-allowed' }}>Disabled State</a>
                <a href="#" style={{ fontSize: '0.875rem', color: '#3A4285', textDecoration: 'none', borderBottom: '1px solid transparent' }}
                   onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = '#B08A5B')}
                   onMouseOut={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}>
                  Tertiary link →
                </a>
              </div>
            </div>

            {/* Dark bg variants */}
            <div className="p-8 rounded-xl flex flex-col gap-4" style={{ backgroundColor: '#0D1128' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8BCC4' }}>On Dark Backgrounds</p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#" className="btn-primary">Get a Free Quote</a>
                <a href="#" className="btn-outline-dark">Call Us Now</a>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#" style={{ fontSize: '0.875rem', color: '#B8BCC4', textDecoration: 'none' }}
                   onMouseOver={(e) => (e.currentTarget.style.color = '#C79C6B')}
                   onMouseOut={(e) => (e.currentTarget.style.color = '#B8BCC4')}>
                  Silver link on dark →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Form Elements ─────────────────────────────── */}
        <section className="mb-20">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 600, color: '#0D1128', marginBottom: '1.5rem' }}>Form Elements</h2>
          <div className="p-8 bg-white rounded-xl border border-[#D4D7DE] max-w-lg space-y-5">
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1F2A', fontWeight: 500, marginBottom: '6px' }}>Full Name *</label>
              <input
                type="text"
                placeholder="e.g. John Smith"
                style={{ width: '100%', padding: '12px 16px', border: '1px solid #D4D7DE', borderRadius: '6px', fontSize: '0.875rem', color: '#1C1F2A', backgroundColor: '#FFFFFF', outline: 'none' }}
                onFocus={(e) => { e.target.style.borderColor = '#1A1F4C'; e.target.style.boxShadow = '0 0 0 3px rgba(176,138,91,0.12)' }}
                onBlur={(e) => { e.target.style.borderColor = '#D4D7DE'; e.target.style.boxShadow = 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1F2A', fontWeight: 500, marginBottom: '6px' }}>Email (error state)</label>
              <input
                type="email"
                defaultValue="invalid-email"
                style={{ width: '100%', padding: '12px 16px', border: '1px solid #A93B3B', borderRadius: '6px', fontSize: '0.875rem', color: '#1C1F2A', backgroundColor: 'rgba(169,59,59,0.04)', outline: 'none' }}
              />
              <p style={{ fontSize: '0.75rem', color: '#A93B3B', marginTop: '4px' }}>Please enter a valid email address.</p>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1F2A', fontWeight: 500, marginBottom: '6px' }}>Service</label>
              <select style={{ width: '100%', padding: '12px 16px', border: '1px solid #D4D7DE', borderRadius: '6px', fontSize: '0.875rem', color: '#1C1F2A', backgroundColor: '#FFFFFF', outline: 'none', appearance: 'none' }}>
                <option>Air Conditioning</option>
                <option>Evaporative Cooling</option>
              </select>
            </div>
            <button className="btn-primary w-full py-4">Submit Enquiry</button>
          </div>
        </section>

        {/* ── Cards ─────────────────────────────────────── */}
        <section className="mb-20">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 600, color: '#0D1128', marginBottom: '1.5rem' }}>Card Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Light card */}
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#EEF0F7' }}>
                <span style={{ color: '#1A1F4C', fontSize: '1.2rem' }}>❄</span>
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: '#0D1128', marginBottom: '8px' }}>Air Conditioning</h3>
              <p style={{ fontSize: '0.875rem', color: '#5A5F6E', lineHeight: 1.7 }}>Conventional and concealed split systems for homes, offices, and commercial spaces.</p>
            </div>
            {/* Tinted card */}
            <div className="p-6 rounded-xl border border-[#D4D7DE]" style={{ backgroundColor: '#EEF0F7' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(176,138,91,0.12)' }}>
                <span style={{ color: '#B08A5B', fontSize: '1.2rem' }}>✦</span>
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: '#0D1128', marginBottom: '8px' }}>Trusted Since 1992</h3>
              <p style={{ fontSize: '0.875rem', color: '#5A5F6E', lineHeight: 1.7 }}>Tinted navy-100 card variant for highlighted features on platinum sections.</p>
            </div>
            {/* Dark card */}
            <div className="card-dark p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(176,138,91,0.12)' }}>
                <span style={{ color: '#B08A5B', fontSize: '1.2rem' }}>★</span>
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>Dark Card Variant</h3>
              <p style={{ fontSize: '0.875rem', color: '#B8BCC4', lineHeight: 1.7 }}>Used inside navy-900 sections (hero, footer, FinalCTA, testimonials dark strip).</p>
            </div>
          </div>
        </section>

        {/* ── Accent Lines ──────────────────────────────── */}
        <section className="mb-20">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 600, color: '#0D1128', marginBottom: '1.5rem' }}>Brand Accent Lines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl border border-[#D4D7DE]">
              <span className="copper-line" />
              <p style={{ fontSize: '0.75rem', color: '#9095A6', fontFamily: 'monospace' }}>.copper-line — copper → silver-400</p>
              <p style={{ fontSize: '0.875rem', color: '#5A5F6E', marginTop: '8px' }}>Used before section eyebrows on light backgrounds.</p>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#0D1128' }}>
              <span className="copper-line" />
              <p style={{ fontSize: '0.75rem', color: '#5A5F6E', fontFamily: 'monospace' }}>.copper-line — same on dark bg</p>
              <p style={{ fontSize: '0.875rem', color: '#B8BCC4', marginTop: '8px' }}>The copper-to-silver gradient reads well on both light and dark surfaces.</p>
            </div>
          </div>
        </section>

        {/* ── Spacing ───────────────────────────────────── */}
        <section className="mb-20">
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 600, color: '#0D1128', marginBottom: '1.5rem' }}>Spacing Scale</h2>
          <div className="p-6 bg-white rounded-xl border border-[#D4D7DE]">
            <div className="space-y-3">
              {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96].map((val) => (
                <div key={val} className="flex items-center gap-4">
                  <div style={{ width: val, height: '20px', backgroundColor: '#EEF0F7', borderRadius: '2px', border: '1px solid #D4D7DE', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#9095A6' }}>{val}px — space-{val / 4}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div style={{ borderTop: '1px solid #D4D7DE', paddingTop: '2rem', color: '#9095A6', fontSize: '0.75rem' }}>
          Airtech Services Brand System — Internal Use Only · Exclude from sitemap &amp; robots.txt in production
        </div>

      </div>
    </div>
  )
}