import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  suburb: z.string().min(2),
  service: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = leadSchema.parse(body)

    // TODO: Connect to email / CRM service
    // Option A — Resend (recommended):
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'leads@airtech.co.za',
    //     to: process.env.CONTACT_EMAIL!,
    //     subject: `New lead: ${data.name} — ${data.service}`,
    //     html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    //   })
    //
    // Option B — webhook:
    //   await fetch(process.env.CRM_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(data) })

    // Development: log to console so we can verify the API is working
    console.info('[Lead submission]', {
      timestamp: new Date().toISOString(),
      ...data,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }
    console.error('[Lead API error]', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}