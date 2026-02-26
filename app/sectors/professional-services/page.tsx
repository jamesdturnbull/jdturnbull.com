import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Professional Services UK - Accountants, Solicitors, Architects | Automate Admin',
  description: 'Your team bills 6 hours but works 9. The other 3 are admin AI can handle. Automate client onboarding, document processing, and administrative workflows.',
}

export default function ProfessionalServicesPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            AI for Professional Services
          </h1>
          <p className="text-xl lg:text-2xl text-primary-600 max-w-4xl mx-auto mb-8">
            Your team bills 6 hours but works 9. AI can give you those 3 hours back.
          </p>
          <div className="inline-flex items-center bg-accent-100 rounded-full px-6 py-3 text-accent-700 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Turn non-billable hours into profit
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Admin Is Eating Your Billable Hours
              </h2>
              <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                Professional services firms are caught in the admin trap. You charge by the hour, but half your time goes to unbillable work that clients won't pay for.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Client onboarding forms, KYC checks, and document collection</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Appointment scheduling and diary management</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Time tracking, billing, and client communications</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Document preparation and standard letters</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Hidden Costs</h3>
              <div className="space-y-4">
                <div className="border-b border-primary-700 pb-4">
                  <div className="text-3xl font-bold text-accent-400">3 hours</div>
                  <p className="text-primary-200">Average daily admin per fee earner</p>
                </div>
                <div className="border-b border-primary-700 pb-4">
                  <div className="text-3xl font-bold text-accent-400">£45k</div>
                  <p className="text-primary-200">Annual lost revenue (per senior associate)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-400">67%</div>
                  <p className="text-primary-200">Of professional time spent on billable work</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Helps */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Firms We Help
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              AI automation works best for professional services with standardised processes and high admin overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 transition-colors">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Law Firms</h3>
              <p className="text-sm text-primary-600">Solicitors, barristers, legal practices</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 transition-colors">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Accountants</h3>
              <p className="text-sm text-primary-600">Chartered accountants, bookkeepers</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 transition-colors">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Architects</h3>
              <p className="text-sm text-primary-600">Architectural practices, design consultants</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 transition-colors">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2V6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Consultants</h3>
              <p className="text-sm text-primary-600">Management, HR, IT consultants</p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              How AI Transforms Professional Services
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Turn administrative overhead into billable hours. Here's how AI automates the work that doesn't pay.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Client Onboarding</h3>
              <p className="text-primary-600 mb-4">
                Automate new client intake, KYC compliance, and document collection. First impressions handled professionally, every time.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Digital intake forms
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated KYC checks
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Document chasing
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Smart Scheduling</h3>
              <p className="text-primary-600 mb-4">
                AI handles appointment booking, diary conflicts, and client preferences. No more phone tag or double-bookings.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 booking system
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Automated reminders
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rescheduling handling
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Document Automation</h3>
              <p className="text-primary-600 mb-4">
                Generate standard letters, contracts, and forms automatically. Consistent quality, fraction of the time.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Template generation
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Client-specific customisation
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Version control
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16 bg-accent-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              What Success Looks Like
            </h2>
            <p className="text-xl text-primary-600">
              Professional services firms typically see these improvements within 4-6 weeks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2-3h</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Daily Time Saved</h3>
              <p className="text-primary-600">Per fee earner, freed up for billable work</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">85%</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Billable Time</h3>
              <p className="text-primary-600">Up from typical 65-70% utilisation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Client Service</h3>
              <p className="text-primary-600">Instant responses and booking, any time</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Reclaim Your Billable Hours?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Book a free call to discuss how AI could work for your professional services firm. We'll map your specific admin overhead and show you exactly where time can be saved.
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
            30-minute call • Professional services focus • No obligation
          </p>
        </section>
      </div>
    </div>
  )
}