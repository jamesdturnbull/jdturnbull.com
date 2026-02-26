import type { Metadata } from 'next'
import { NewsletterSignup } from '../../components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Weekly AI roundup for UK businesses. What actually changed, what it means for your business, and what to do about it. No jargon, no fluff.',
}

export default function NewsletterPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Weekly AI Roundup
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            AI is moving fast. Most of what you read is hype. This isn't. One email a week — what actually changed, what it means for your business, and what to do about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">What You'll Get</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary-900">Weekly AI Developments</h3>
                    <p className="text-primary-600 text-sm mt-1">What actually happened this week in AI, filtered for business relevance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary-900">Real Business Impact</h3>
                    <p className="text-primary-600 text-sm mt-1">How these changes affect UK businesses like yours — not tech giants.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary-900">Actionable Insights</h3>
                    <p className="text-primary-600 text-sm mt-1">Specific steps you can take to stay ahead, not vague predictions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-primary-900">Case Studies</h3>
                    <p className="text-primary-600 text-sm mt-1">Real examples from UK businesses implementing AI successfully.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">What You Won't Get</h2>
              <ul className="space-y-2 text-primary-600">
                <li>❌ Vendor pitches disguised as content</li>
                <li>❌ Technical jargon that doesn't help your business</li>
                <li>❌ Hype about AI replacing everyone</li>
                <li>❌ Daily emails cluttering your inbox</li>
                <li>❌ Content written by AI (the irony isn't lost on me)</li>
              </ul>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">Recent Topics</h3>
              <ul className="space-y-2 text-sm text-primary-700">
                <li>• How ChatGPT's new voice mode changes customer service</li>
                <li>• Why most AI implementations fail (and how to avoid it)</li>
                <li>• The real cost of waiting on AI adoption</li>
                <li>• 5 AI tools that actually save UK businesses time</li>
                <li>• What the EU AI Act means for small businesses</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Signup */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white border-2 border-primary-200 rounded-xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-primary-900 mb-4 text-center">
                Join 2,500+ Business Owners
              </h2>
              <p className="text-primary-600 text-center mb-6 text-sm">
                Get the weekly AI roundup that actually helps your business. No spam, unsubscribe anytime.
              </p>
              
              <NewsletterSignup />
              
              <div className="mt-6 pt-6 border-t border-primary-200">
                <div className="flex items-center justify-center space-x-4 text-xs text-primary-500">
                  <span>✓ No spam</span>
                  <span>✓ Unsubscribe anytime</span>
                  <span>✓ UK focused</span>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 bg-accent-50 p-6 rounded-lg">
              <blockquote className="text-primary-700 text-sm italic mb-3">
                "Finally, AI insights that actually matter for my business. James cuts through the hype and gives me what I need to know in 5 minutes."
              </blockquote>
              <cite className="text-xs text-primary-500">— Sarah K., Restaurant Owner</cite>
            </div>

            {/* CTA Box */}
            <div className="mt-8 bg-primary-900 text-white p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Want More Than Just Updates?</h3>
              <p className="text-primary-200 text-sm mb-4">
                Get a free AI audit for your business — 30 minutes, no obligation, immediate value.
              </p>
              <a 
                href="https://cal.com/james-turnbull/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-primary-900 hover:bg-primary-50 text-sm px-4 py-2"
              >
                Book Free Call
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 border-t border-primary-200 pt-16">
          <h2 className="text-2xl font-bold text-primary-900 mb-8 text-center">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">How often do you send emails?</h3>
              <p className="text-primary-600 text-sm">
                One email per week, usually on Wednesday mornings. I respect your inbox.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">Is this just a sales funnel?</h3>
              <p className="text-primary-600 text-sm">
                No. The newsletter provides value regardless of whether you ever become a client. Most subscribers never do, and that's fine.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">Do you share my email address?</h3>
              <p className="text-primary-600 text-sm">
                Never. Your details stay with me. I don't sell lists or do affiliate marketing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">Can I unsubscribe anytime?</h3>
              <p className="text-primary-600 text-sm">
                Yes, with one click. No questions asked, no "are you sure?" screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}