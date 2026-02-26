import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI consulting services for UK businesses: Discovery calls, implementation, and ongoing support. From £1,000 for custom AI automation.',
}

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            AI Consulting Services
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Three simple tiers. Start with a free discovery call, implement what makes sense, get ongoing support as you grow.
          </p>
        </div>

        {/* Service Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Discovery Call */}
          <div id="discovery" className="bg-white border-2 border-primary-200 rounded-xl p-8 text-center hover:border-accent-300 transition-colors">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Discovery Call</h3>
              <div className="text-4xl font-bold text-accent-600 mb-2">Free</div>
              <p className="text-primary-600">30 minutes, no obligation</p>
            </div>

            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Understand your current processes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Identify automation opportunities</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Figure out if AI makes sense</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Get 2-3 specific recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Clear ROI estimates</span>
              </li>
            </ul>

            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-primary w-full"
            >
              Book Discovery Call
            </Link>
          </div>

          {/* Implementation */}
          <div id="implementation" className="bg-white border-2 border-accent-500 rounded-xl p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Implementation</h3>
              <div className="text-4xl font-bold text-accent-600 mb-2">From £1,000</div>
              <p className="text-primary-600">Custom AI build, 2-4 weeks</p>
            </div>

            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">AI phone agents for missed calls</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Automated lead response systems</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Client onboarding workflows</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Integration with existing tools</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Team training & handover</span>
              </li>
            </ul>

            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-primary w-full"
            >
              Start with Discovery Call
            </Link>
          </div>

          {/* Ongoing Support */}
          <div id="support" className="bg-white border-2 border-primary-200 rounded-xl p-8 text-center hover:border-accent-300 transition-colors">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Ongoing Support</h3>
              <div className="text-4xl font-bold text-accent-600 mb-2">From £500<span className="text-xl">/mo</span></div>
              <p className="text-primary-600">Monitoring, optimisation, growth</p>
            </div>

            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">System monitoring & maintenance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Performance optimisation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">New automations as needed</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Priority email/phone support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-700">Monthly performance reports</span>
              </li>
            </ul>

            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-outline w-full"
            >
              Discuss Your Needs
            </Link>
          </div>
        </div>

        {/* Examples Section */}
        <section className="mt-20 bg-primary-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary-900 text-center mb-12">
            What Implementation Looks Like
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Dental Practice — £2,500 Implementation
              </h3>
              <ul className="space-y-3 text-primary-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI phone agent answers calls during appointments
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Books appointments directly into practice software
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Handles appointment changes and cancellations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sends automated appointment reminders
                </li>
              </ul>
              <p className="mt-4 text-primary-600 text-sm">
                <strong>Result:</strong> 95% call answer rate, 15+ hours/week saved, £50K+ annual revenue recovery
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Estate Agency — £3,500 Implementation
              </h3>
              <ul className="space-y-3 text-primary-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Instant response to property portal enquiries
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Viewing booking system with calendar integration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lead qualification and prioritisation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Automated follow-up sequences
                </li>
              </ul>
              <p className="mt-4 text-primary-600 text-sm">
                <strong>Result:</strong> 60-second response time, 40% more viewing bookings, 25% conversion improvement
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-primary-900 text-center mb-12">
            Common Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                How quickly do I see results?
              </h3>
              <p className="text-primary-600">
                Most implementations go live within 2-4 weeks. You'll typically see measurable improvements (more calls answered, faster response times, reduced admin) within the first week of operation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Do you work with my existing software?
              </h3>
              <p className="text-primary-600">
                Yes. We integrate with your current tools rather than replacing them. Whether it's your CRM, booking system, practice management software, or accounting platform — AI works alongside what you already use.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                What if it doesn't work for my business?
              </h3>
              <p className="text-primary-600">
                That's what the discovery call is for. If AI isn't a good fit, I'll tell you upfront — no charge. If we do build something and it doesn't deliver the promised results, we fix it or refund your investment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                How much ongoing maintenance is needed?
              </h3>
              <p className="text-primary-600">
                Minimal. Most systems run autonomously once deployed. Our ongoing support packages handle monitoring, optimisation, and any issues that arise — but day-to-day, it should just work.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 text-center bg-accent-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-600 mb-8 max-w-3xl mx-auto">
            Every conversation starts with a free discovery call. No commitment, no sales pitch — just 30 minutes to understand your business and identify opportunities.
          </p>
          <Link 
            href="https://cal.com/james-turnbull/30min" 
            target="_blank"
            className="btn btn-primary text-lg px-8 py-4"
          >
            Book Your Free Discovery Call
          </Link>
        </section>
      </div>
    </div>
  )
}