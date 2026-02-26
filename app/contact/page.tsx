import type { Metadata } from 'next'
import { ContactForm } from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with James Turnbull for AI consulting. Book a free discovery call or send a message.',
}

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Every AI project starts with understanding your business. Book a call or drop me a message — I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Calendar */}
          <div>
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Book a Free Discovery Call</h2>
            <p className="text-primary-600 mb-6">
              30 minutes to understand your business, identify opportunities, and give you 2-3 specific recommendations. No pitch, no pressure.
            </p>

            {/* Cal.com Embed */}
            <div className="bg-white rounded-lg border border-primary-200 p-4">
              <iframe
                src="https://cal.com/james-turnbull/30min"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded"
              ></iframe>
            </div>

            <div className="mt-6 bg-accent-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">What to Expect</h3>
              <ul className="text-sm text-primary-700 space-y-1">
                <li>• We'll discuss your current workflows and pain points</li>
                <li>• I'll identify 2-3 high-impact automation opportunities</li>
                <li>• You'll get clear next steps, whether you work with us or not</li>
                <li>• No sales pitch — just practical advice for your business</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Send a Message</h2>
            <p className="text-primary-600 mb-6">
              Prefer to start with a message? Fill in the form below and I'll get back to you within 24 hours.
            </p>

            <ContactForm />

            {/* Contact Info */}
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">Email</h3>
                <a 
                  href="mailto:james@jdturnbull.com" 
                  className="text-accent-600 hover:text-accent-700 transition-colors"
                >
                  james@jdturnbull.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-primary-900 mb-2">Phone</h3>
                <p className="text-primary-600 text-sm">
                  Available during calls booked through the calendar above.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary-900 mb-2">Response Times</h3>
                <ul className="text-sm text-primary-600 space-y-1">
                  <li>• Email: Within 24 hours</li>
                  <li>• Discovery calls: Usually within 48 hours</li>
                  <li>• Project quotes: Within 1 week</li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-primary-200">
              <h3 className="font-semibold text-primary-900 mb-4">Follow Along</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/jdturnbull_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-accent-600 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/jdturnbull" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-accent-600 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 border-t border-primary-200 pt-16">
          <h2 className="text-2xl font-bold text-primary-900 mb-8 text-center">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">Do you work with businesses outside the UK?</h3>
              <p className="text-primary-600 text-sm">
                Occasionally, but my expertise is UK business practices, regulations, and tools. I work best with UK-based companies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">What's the minimum project size?</h3>
              <p className="text-primary-600 text-sm">
                Most implementations start around £1,000. If your budget is smaller, the discovery call will still give you valuable insights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">How quickly can you start?</h3>
              <p className="text-primary-600 text-sm">
                Discovery calls usually happen within 48 hours. Implementation typically starts within 1-2 weeks of approval.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 mb-2">Do you offer ongoing support?</h3>
              <p className="text-primary-600 text-sm">
                Yes. Most clients opt for ongoing support packages starting at £500/month for monitoring, optimisation, and new automations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}