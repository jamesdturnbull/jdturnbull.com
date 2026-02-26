'use client'

import { useState } from 'react'

interface NewsletterSignupProps {
  compact?: boolean
}

export function NewsletterSignup({ compact = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks! You\'ve been subscribed to our weekly AI roundup.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (compact) {
    return (
      <div className="bg-accent-50 p-4 rounded-lg">
        <h3 className="font-semibold text-primary-900 mb-2 text-sm">Weekly AI Roundup</h3>
        <p className="text-primary-600 text-xs mb-3">
          AI updates that actually matter for your business. No hype.
        </p>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 px-3 py-2 text-sm border border-primary-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-3 py-2 bg-accent-600 text-white text-sm font-medium rounded-r-md hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 disabled:opacity-50"
          >
            {status === 'loading' ? '...' : 'Join'}
          </button>
        </form>
        {message && (
          <p className={`mt-2 text-xs ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-md">
      <h3 className="font-semibold text-white mb-2">Weekly AI Roundup</h3>
      <p className="text-primary-300 text-sm mb-4">
        AI is moving fast. Most of what you read is hype. This isn't. One email a week — what actually changed, what it means for your business, and what to do about it. No jargon. No fluff.
      </p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-4 py-2 text-primary-900 border border-primary-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-2 bg-accent-600 text-white font-medium rounded-r-md hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 disabled:opacity-50 transition-colors"
        >
          {status === 'loading' ? 'Joining...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  )
}