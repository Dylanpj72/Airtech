import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateIn } from '@/components/shared/AnimateIn'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Projects | HVAC Installation Portfolio Johannesburg',
  description:
    'View our portfolio of commercial, industrial, and residential HVAC projects across Johannesburg and Gauteng. Over 30 years of quality installations.',
  alternates: { canonical: `${SITE_URL}/projects` },
}

// TODO: Populate with real project photography and descriptions
const projects = [
  { title: 'MTN Headquarters',            category: 'Commercial', service: 'Air Conditioning',           location: 'Fairland, Johannesburg',  img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Pilanesburg Airport',          category: 'Commercial', service: 'Air Conditioning',           location: 'North West Province',     img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80' },
  { title: 'Fournos Bakeries',             category: 'Industrial', service: 'Ventilation',                location: 'Johannesburg',            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  { title: 'Dainfern Estate Residence',    category: 'Estate',     service: 'Ducted Air Conditioning',    location: 'Dainfern',                img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
  { title: 'Pecanwood Estate Residence',   category: 'Estate',     service: 'Evaporative Cooling',        location: 'Pecanwood, Hartbeespoort', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80' },
  { title: 'Wingate Country Club',         category: 'Commercial', service: 'Air Conditioning',           location: 'Johannesburg',            img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80' },
  { title: 'Freeworld Coatings (Plascon)', category: 'Industrial', service: 'Industrial Ventilation',     location: 'Johannesburg',            img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80' },
  { title: 'Eagle Canyon Home',            category: 'Estate',     service: 'Split System + Central Vac', location: 'Eagle Canyon',            img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80' },
  { title: 'Kyalami Estate Residence',     category: 'Estate',     service: 'Air Conditioning',           location: 'Kyalami',                 img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=600&q=80' },
]

const categoryStyle: Record<string, { color: string; bg: string; border: string }> = {
  Commercial: { color: '#3A4285', bg: 'rgba(58,66,133,0.07)', border: 'rgba(58,66,133,0.2)' },
  Industrial:  { color: '#8F6E45', bg: 'rgba(143,110,69,0.08)', border: 'rgba(143,110,69,0.2)' },
  Estate:      { color: '#1A1F4C', bg: 'rgba(26,31,76,0.06)', border: 'rgba(26,31,76,0.18)' },
  Residential: { color: '#3D7A5A', bg: 'rgba(61,122,90,0.07)', border: 'rgba(61,122,90,0.2)' },
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden" style={{ backgroundColor: '#0D1128' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <AnimateIn>
            <span className="copper-line" aria-hidden="true" />
            <p className="section-label-dark mb-3">Our Work</p>
            <h1 className="display-heading max-w-xl" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', color: '#FFFFFF' }}>
              Projects &amp;{' '}
              <span className="italic font-light" style={{ color: '#B08A5B' }}>Portfolio</span>
            </h1>
            <p className="font-body text-base mt-5 max-w-xl leading-relaxed" style={{ color: 'rgba(184,188,196,0.85)' }}>
              Over 30 years of installations across Johannesburg&apos;s finest estates, commercial
              offices, and industrial facilities. Every project reflects our commitment to
              craftsmanship.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 pb-24 md:pb-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <AnimateIn key={project.title} delay={index * 0.06}>
                <article
                  className="group rounded-xl overflow-hidden transition-all duration-300 border border-[#D4D7DE] hover:border-[#1A1F4C] bg-white hover:shadow-[0_4px_24px_rgba(26,31,76,0.09)]"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={project.img}
                      alt={`${project.title} — ${project.service} project`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    {/* Category badge */}
                    {categoryStyle[project.category] && (
                      <span
                        className="absolute top-3 left-3 font-body text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                        style={{
                          color: categoryStyle[project.category].color,
                          backgroundColor: categoryStyle[project.category].bg,
                          border: `1px solid ${categoryStyle[project.category].border}`,
                        }}
                      >
                        {project.category}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="font-display text-lg font-semibold mb-1" style={{ color: '#0D1128' }}>
                      {project.title}
                    </h2>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs" style={{ color: '#9095A6' }}>{project.service}</span>
                      <span className="font-body text-xs" style={{ color: '#9095A6' }}>{project.location}</span>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3} className="mt-14 text-center">
            <h2 className="section-heading text-2xl md:text-3xl mb-4">
              Have a project in mind?
            </h2>
            <Link href="/contact" className="btn-primary px-8 py-4">
              Get a Free Quote
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}