import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Use the existing "General" audience ID
const AUDIENCE_ID = '59536608-d659-4677-9945-0fd37debc0bb'

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Newsletter service is currently unavailable.' },
        { status: 503 }
      )
    }

    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Add the contact to the Resend audience
    const response = await resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email: email,
    })

    if (response.error) {
      console.error('Resend API error:', response.error)
      
      // Handle the case where the email already exists
      if (response.error.message?.includes('already exists') || 
          response.error.message?.includes('duplicate')) {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter.' },
          { status: 400 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}