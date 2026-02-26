import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Construction Companies UK - Automate Project Admin & Client Communication',
  description: 'Only 1% of UK construction companies use AI. Automate project admin, document processing, and client communications. Get hours back every week.',
}

export default function ConstructionPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            AI for Construction Companies
          </h1>
          <p className="text-xl lg:text-2xl text-primary-600 max-w-4xl mx-auto mb-8">
            1% of UK construction companies use AI. Here's why the other 99% are about to start.
          </p>
          <div className="inline-flex items-center bg-accent-100 rounded-full px-6 py-3 text-accent-700 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Massive opportunity in an underserved market
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Your Site Managers Spend More Time on Paperwork Than on Site
              </h2>
              <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                Construction is one of the UK's largest industries, yet it's stuck in the administrative dark ages. While tech companies automate everything, construction firms are drowning in manual processes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Site managers spending 3+ hours daily on progress reports and documentation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Client communications happening via phone tag and email chains</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Quotes and estimates taking days instead of hours to prepare</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Safety documentation and compliance reporting eating into project time</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Numbers Don't Lie</h3>
              <div className="space-y-4">
                <div className="border-b border-primary-700 pb-4">
                  <div className="text-3xl font-bold text-accent-400">£2,400</div>
                  <p className="text-primary-200">Lost per week to admin tasks (30-person firm)</p>
                </div>
                <div className="border-b border-primary-700 pb-4">
                  <div className="text-3xl font-bold text-accent-400">47 hours</div>
                  <p className="text-primary-200">Average time to respond to enquiries (UK average)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-400">1%</div>
                  <p className="text-primary-200">Of UK construction firms using AI (massive opportunity)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              How AI Transforms Construction Operations
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Stop losing money to manual processes. Here's how AI gives construction firms their time back.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Project Documentation</h3>
              <p className="text-primary-600 mb-4">
                Automated progress reports, safety logs, and compliance documentation. Site managers focus on the build, not the paperwork.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Daily progress reports
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Safety documentation
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Compliance reports
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Client Communication</h3>
              <p className="text-primary-600 mb-4">
                AI handles routine client queries, project updates, and appointment scheduling. Instant responses, better relationships.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 enquiry responses
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Project updates
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Site visit scheduling
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Smart Quoting</h3>
              <p className="text-primary-600 mb-4">
                Generate accurate quotes in minutes instead of days. Consistent pricing, faster turnaround, more wins.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated estimates
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cost calculations
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional proposals
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="mb-16 bg-accent-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Why Construction Firms Are Moving to AI Now
            </h2>
            <p className="text-xl text-primary-600">
              The competitive landscape is shifting. Early adopters are already pulling ahead.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">Labour Shortages</h3>
                  <p className="text-primary-600">With skilled workers harder to find, you need to get more from your existing team.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">Rising Costs</h3>
                  <p className="text-primary-600">Materials and labour costs are up. Admin automation is one of the few ways to cut overheads.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">Client Expectations</h3>
                  <p className="text-primary-600">Clients expect instant responses and regular updates. AI makes this possible without hiring more staff.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">Competitive Advantage</h3>
                  <p className="text-primary-600">While 99% of construction firms avoid AI, early adopters are winning more bids with faster quotes and better service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join the 1% Getting Ahead?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Book a free call to discuss how AI could work for your construction business. No technical jargon, just practical solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-primary text-lg px-8 py-4 text-white"
            >
              Book Free Discovery Call
            </Link>
            <Link href="/assessment" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900">
              Take AI Assessment First
            </Link>
          </div>
          <p className="text-sm text-primary-300 mt-4">
            30-minute call • Construction-specific solutions • No obligation
          </p>
        </section>
      </div>
    </div>
  )
}