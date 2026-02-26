import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Contact service is currently unavailable.' },
        { status: 503 }
      )
    }

    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide name, email, and message.' },
        { status: 400 }
      )
    }

    // Send email notification
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 0.5rem; margin-top: 0.5rem;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    `

    const response = await resend.emails.send({
      from: 'website@jdturnbull.com',
      to: ['james@jdturnbull.com'],
      replyTo: email,
      subject: `New contact from ${name}${company ? ` (${company})` : ''}`,
      html: emailHtml,
    })

    if (response.error) {
      console.error('Resend API error:', response.error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}