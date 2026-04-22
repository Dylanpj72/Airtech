'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const leadSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Invalid phone number format'),
  email: z.string().email('Please enter a valid email address'),
  suburb: z.string().min(2, 'Please enter your suburb or area'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
})

type LeadFormData = z.infer<typeof leadSchema>

const serviceOptions = [
  { value: 'air-conditioning',   label: 'Air Conditioning' },
  { value: 'evaporative-cooling', label: 'Evaporative Cooling' },
  { value: 'ventilation',        label: 'Ventilation' },
  { value: 'central-vacuum',     label: 'Central Vacuum Systems' },
  { value: 'maintenance',        label: 'Servicing / Maintenance' },
  { value: 'other',              label: 'Other / Not sure yet' },
]

const fieldBase =
  'w-full px-4 py-3 bg-white border rounded-lg font-body text-sm placeholder:text-[#9095A6] focus:outline-none focus:ring-2 focus:ring-[#1A1F4C]/25 transition-colors duration-200'
const fieldNormal = 'border-[#D4D7DE] hover:border-[#1A1F4C] text-[#1C1F2A]'
const fieldError  = 'border-red-400/70 text-[#1C1F2A]'

interface LeadFormProps {
  className?: string
  onSuccess?: () => void
  compact?: boolean
}

export function LeadForm({ className, onSuccess, compact = false }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>({ resolver: zodResolver(leadSchema) })

  const onSubmit = async (data: LeadFormData) => {
    setServerError(null)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      reset()
      onSuccess?.()
    } catch {
      setServerError('Something went wrong. Please call us directly on +27 82 446 1043.')
    }
  }

  if (submitted) {
    return (
      <div className={cn('flex flex-col items-center justify-center text-center py-12 gap-4', className)}>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(176,138,91,0.12)' }}
        >
          <CheckCircle2 size={28} style={{ color: '#B08A5B' }} aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-semibold" style={{ color: '#0D1128' }}>
          Thank you — we&apos;re on it!
        </h3>
        <p className="font-body text-sm max-w-xs leading-relaxed" style={{ color: '#5A5F6E' }}>
          We&apos;ll be in touch within 1 business day to arrange your free assessment.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-body text-xs mt-2 transition-colors duration-200"
          style={{ color: '#3A4285' }}
          onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = '#B08A5B' }}
          onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = '#3A4285' }}
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-4', className)}
      noValidate
      aria-label="Get a free quote"
    >
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')}>
        {/* Name */}
        <div>
          <label htmlFor="lead-name" className="block font-body text-xs tracking-wide mb-1.5" style={{ color: '#5A5F6E' }}>
            Full Name *
          </label>
          <input
            id="lead-name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'lead-name-error' : undefined}
            className={cn(fieldBase, errors.name ? fieldError : fieldNormal)}
            placeholder="e.g. John Smith"
            {...register('name')}
          />
          {errors.name && (
            <p id="lead-name-error" className="mt-1 font-body text-xs text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" className="block font-body text-xs tracking-wide mb-1.5" style={{ color: '#5A5F6E' }}>
            Phone Number *
          </label>
          <input
            id="lead-phone"
            type="tel"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
            className={cn(fieldBase, errors.phone ? fieldError : fieldNormal)}
            placeholder="+27 82 000 0000"
            {...register('phone')}
          />
          {errors.phone && (
            <p id="lead-phone-error" className="mt-1 font-body text-xs text-red-500" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="lead-email" className="block font-body text-xs tracking-wide mb-1.5" style={{ color: '#5A5F6E' }}>
            Email Address *
          </label>
          <input
            id="lead-email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'lead-email-error' : undefined}
            className={cn(fieldBase, errors.email ? fieldError : fieldNormal)}
            placeholder="you@example.com"
            {...register('email')}
          />
          {errors.email && (
            <p id="lead-email-error" className="mt-1 font-body text-xs text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Suburb */}
        <div>
          <label htmlFor="lead-suburb" className="block font-body text-xs tracking-wide mb-1.5" style={{ color: '#5A5F6E' }}>
            Your Area / Suburb *
          </label>
          <input
            id="lead-suburb"
            type="text"
            autoComplete="address-level2"
            aria-required="true"
            aria-invalid={!!errors.suburb}
            aria-describedby={errors.suburb ? 'lead-suburb-error' : undefined}
            className={cn(fieldBase, errors.suburb ? fieldError : fieldNormal)}
            placeholder="e.g. Dainfern, Fourways"
            {...register('suburb')}
          />
          {errors.suburb && (
            <p id="lead-suburb-error" className="mt-1 font-body text-xs text-red-500" role="alert">
              {errors.suburb.message}
            </p>
          )}
        </div>
      </div>

      {/* Service select */}
      <div>
        <label htmlFor="lead-service" className="block font-body text-xs tracking-wide mb-1.5" style={{ color: '#5A5F6E' }}>
          Service Interested In *
        </label>
        <select
          id="lead-service"
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'lead-service-error' : undefined}
          className={cn(fieldBase, 'appearance-none cursor-pointer', errors.service ? fieldError : fieldNormal)}
          {...register('service')}
          defaultValue=""
        >
          <option value="" disabled>Select a service…</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {errors.service && (
          <p id="lead-service-error" className="mt-1 font-body text-xs text-red-500" role="alert">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Message */}
      {!compact && (
        <div>
          <label htmlFor="lead-message" className="block font-body text-xs tracking-wide mb-1.5" style={{ color: '#5A5F6E' }}>
            Message{' '}
            <span className="font-normal" style={{ color: '#9095A6' }}>(optional)</span>
          </label>
          <textarea
            id="lead-message"
            rows={3}
            className={cn(fieldBase, fieldNormal, 'resize-none')}
            placeholder="Tell us about your project, property size, or any specific questions…"
            {...register('message')}
          />
        </div>
      )}

      {/* Server error */}
      {serverError && (
        <p
          className="font-body text-xs rounded-lg px-4 py-3"
          style={{ color: '#A93B3B', backgroundColor: 'rgba(169,59,59,0.06)', border: '1px solid rgba(169,59,59,0.2)' }}
          role="alert"
        >
          {serverError}
        </p>
      )}

      {/* Trust note */}
      <p className="font-body text-xs" style={{ color: '#9095A6' }}>
        Est. 1992 · Trusted by MTN, Plascon &amp; 100s of Johannesburg homes ·{' '}
        <span style={{ color: '#5A5F6E' }}>Free, no-obligation</span>
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={15} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  )
}