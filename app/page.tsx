import Link from 'next/link'
import { NewsletterSignup } from '../components/NewsletterSignup'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight">
              You don't need more staff. 
              <br />
              <span className="text-accent-600">You need smarter systems.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-600 mb-8 leading-relaxed">
              AI consultant helping UK SMBs (20-50 employees) automate admin, lead generation, and client communications so you can focus on what actually matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://cal.com/james-turnbull/30min" 
                target="_blank"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Book Free Discovery Call
              </Link>
              <Link href="/services" className="btn btn-outline text-lg px-8 py-4">
                View Services
              </Link>
            </div>
            <p className="text-sm text-primary-500 mt-4">
              30-minute call • No obligation • Immediate value
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              What I Do
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              I build AI systems that handle the repetitive work your team does every day. No robots, no complexity — just smart automation that pays for itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-primary-50 border border-primary-100">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">AI Phone Agents</h3>
              <p className="text-primary-600">
                Answer every call, book appointments, qualify leads — even when you're busy with customers. Never miss another opportunity.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-primary-50 border border-primary-100">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Lead Automation</h3>
              <p className="text-primary-600">
                Respond to enquiries in under 60 seconds, qualify prospects automatically, and route hot leads straight to your team.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-primary-50 border border-primary-100">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Admin Workflows</h3>
              <p className="text-primary-600">
                Automate client onboarding, document processing, appointment reminders, and follow-ups. Get hours back every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Help Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Who I Help
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Successful UK businesses that have outgrown basic tools but aren't big enough for enterprise software. If you're doing £200K-£5M annually, this is for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Estate Agents',
              'Law Firms', 
              'Dental Practices',
              'Accountants',
              'Restaurants',
              'Trade Businesses',
              'Recruitment Agencies',
              'E-commerce'
            ].map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-lg border border-primary-200 text-center">
                <h3 className="font-semibold text-primary-900">{industry}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-primary-600 mb-6">
              Not sure if this applies to your business?
            </p>
            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-primary"
            >
              Book a Free Call to Find Out
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Simple, proven process. No lengthy projects or complex implementations. Most clients see results within 2-4 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Discovery Call</h3>
              <p className="text-primary-600">
                30-minute conversation to understand your business, identify bottlenecks, and map out the biggest opportunities for automation. Free, no obligation.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-px bg-accent-200 -z-10" 
                   style={{ transform: 'translateX(-50%)' }}>
              </div>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Custom Build</h3>
              <p className="text-primary-600">
                We design and build AI systems tailored to your business. Integration with your existing tools, training on your processes. 2-4 weeks from start to finish.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-px bg-accent-200 -z-10" 
                   style={{ transform: 'translateX(-50%)' }}>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Ongoing Support</h3>
              <p className="text-primary-600">
                Monitoring, optimisation, and new automations as your business grows. We handle the technical side so you can focus on running your company.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Start with Step 1 — Book Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Results That Matter
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Real businesses, real savings, real growth. Here's what happens when you stop losing opportunities to manual processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary-800/50 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent-400 mb-2">15+ hours</div>
              <p className="text-primary-200">Saved per week on average</p>
            </div>
            
            <div className="text-center p-8 bg-primary-800/50 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent-400 mb-2">£50K+</div>
              <p className="text-primary-200">Annual revenue recovered from missed calls</p>
            </div>
            
            <div className="text-center p-8 bg-primary-800/50 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent-400 mb-2">2-4 weeks</div>
              <p className="text-primary-200">From start to seeing results</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <blockquote className="text-xl italic text-primary-100 max-w-4xl mx-auto mb-8">
              "I went from spending every evening answering messages to checking a report once a day. It's the difference between running a business and being run by it."
            </blockquote>
            <cite className="text-primary-300">— E-commerce Business Owner, £500K annual revenue</cite>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-primary-600 mb-8">
            AI is moving fast. Most of what you read is hype. This isn't. One email a week — what actually changed, what it means for your business, and what to do about it.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
          <p className="text-sm text-primary-500 mt-4">
            No jargon. No fluff. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
            Ready to Work Smarter?
          </h2>
          <p className="text-xl text-primary-600 mb-8">
            Book a free 30-minute discovery call. No sales pitch, no pressure — just a practical conversation about where AI could help your business most.
          </p>
          <Link 
            href="https://cal.com/james-turnbull/30min" 
            target="_blank"
            className="btn btn-primary text-lg px-8 py-4"
          >
            Book Your Free Discovery Call
          </Link>
          <p className="text-sm text-primary-500 mt-4">
            Usually takes 30 minutes • Immediate actionable insights • Zero commitment
          </p>
        </div>
      </section>
    </>
  )
}