import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base relative overflow-hidden px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(45,91,232,0.05) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 text-center max-w-lg">
        <p
          className="font-display font-semibold text-white/5 select-none pointer-events-none mb-0 leading-none"
          style={{ fontSize: 'clamp(120px, 20vw, 240px)' }}
          aria-hidden="true"
        >
          404
        </p>
        <span className="copper-line mx-auto -mt-4 mb-6" aria-hidden="true" />
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-base text-text-secondary mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. It may have moved, or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={14} aria-hidden="true" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}