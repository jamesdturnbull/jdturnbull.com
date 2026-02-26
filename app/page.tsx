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
              Stop Guessing About AI.
              <br />
              <span className="text-accent-600">Start Getting Answers.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-600 mb-8 leading-relaxed">
              Practical AI strategy for UK business owners who've built something worth protecting. No hype. No jargon. Just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://cal.com/james-turnbull/30min" 
                target="_blank"
                className="btn btn-primary text-lg px-8 py-4 text-white"
              >
                Book Free Discovery Call
              </Link>
              <Link href="/assessment" className="btn btn-outline text-lg px-8 py-4">
                Take the AI Readiness Assessment
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
                Your team spends 3 hours a day answering the same questions. An AI phone agent handles it in seconds.
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
                The average UK business takes 47 hours to respond to a new enquiry. Your competitor with AI responds in 60 seconds.
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
                A 30-person construction firm loses ~£2,400/week to manual admin. AI changes that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section - Moved Higher */}
      <section className="py-20 bg-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-primary-600 mb-8">
            AI is moving fast. Most of what you read is hype. This isn't.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
          <p className="text-sm text-primary-500 mt-4">
            No jargon. No fluff. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Who I Help Section - NEW with Sector-Specific Pain Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Who I Help
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              UK business owners who've built something worth protecting. If admin is eating your time, this is for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/sectors/construction" className="group">
              <div className="text-center p-8 rounded-xl bg-primary-50 border border-primary-200 hover:border-accent-300 transition-all duration-200 hover:shadow-lg">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Construction</h3>
                <p className="text-primary-600">
                  Your site managers spend more time on paperwork than on site. AI changes that.
                </p>
                <div className="mt-4 inline-flex items-center text-accent-600 group-hover:text-accent-700 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/sectors/professional-services" className="group">
              <div className="text-center p-8 rounded-xl bg-primary-50 border border-primary-200 hover:border-accent-300 transition-all duration-200 hover:shadow-lg">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2V6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Professional Services</h3>
                <p className="text-primary-600">
                  Your team bills 6 hours but works 9. The other 3 are admin AI can handle.
                </p>
                <div className="mt-4 inline-flex items-center text-accent-600 group-hover:text-accent-700 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/sectors/healthcare" className="group">
              <div className="text-center p-8 rounded-xl bg-primary-50 border border-primary-200 hover:border-accent-300 transition-all duration-200 hover:shadow-lg">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Healthcare</h3>
                <p className="text-primary-600">
                  Your reception staff spend half their day rescheduling appointments. There's a better way.
                </p>
                <div className="mt-4 inline-flex items-center text-accent-600 group-hover:text-accent-700 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Simple, proven process. No lengthy projects or complex implementations. Designed to show results within 2-4 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Honest Conversation</h3>
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
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Focused Build</h3>
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
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Ongoing Partnership</h3>
              <p className="text-primary-600">
                Monitoring, optimisation, and new automations as your business grows. We handle the technical side so you can focus on running your company.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-primary text-lg px-8 py-4 text-white"
            >
              Start with Step 1 — Book Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                About Me
              </h2>
              <p className="text-lg text-primary-200 mb-4 leading-relaxed">
                I'm James. I've spent four years as a software engineer in startups, most recently as the founding engineer at a YC-backed company where I built their AI video automation platform from scratch. Before that I led product at an office management SaaS, founded my own AI apps, and built ad-tech integrations with Meta, TikTok, and Google.
              </p>
              <p className="text-lg text-primary-200 mb-4 leading-relaxed">
                I've always been more interested in what technology can do for real businesses than in building tech for tech's sake. The companies that need AI most aren't the ones with engineering teams and venture funding. They're the estate agents, dental practices, law firms, and recruitment agencies running the UK economy on spreadsheets and manual processes.
              </p>
              <p className="text-lg text-primary-200 mb-6 leading-relaxed">
                I left the startup world because the businesses that need AI most are the ones nobody's building it for.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-accent-400 hover:text-accent-300 font-medium transition-colors"
              >
                Read more about my background
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-72 h-72 bg-primary-700/50 rounded-2xl flex items-center justify-center border border-primary-600/30">
                <span className="text-primary-400 text-sm">Photo placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - REPLACED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Why Work with Me?
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto mb-8">
              Currently taking on 3 new clients. Direct access to me, not a junior consultant.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Former YC Engineer</h3>
              <p className="text-sm text-primary-600">
                Built AI systems at scale for venture-backed startups.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">UK-Based</h3>
              <p className="text-sm text-primary-600">
                Based in Buckinghamshire, working UK hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">GDPR Compliant</h3>
              <p className="text-sm text-primary-600">
                All systems built to UK data protection standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">No Lock-in Contracts</h3>
              <p className="text-sm text-primary-600">
                You own your systems. No long-term commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Inaction Section - NEW */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              The Cost of Waiting
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Every week you wait, your competitors get further ahead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white border border-primary-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Manual Admin Costs</h3>
              <p className="text-primary-600">
                A 30-person construction firm loses ~£2,400/week to manual admin (based on ONS average hourly rates).
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-primary-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Slow Response Times</h3>
              <p className="text-primary-600">
                The average UK business takes 47 hours to respond to a new enquiry. Your competitor with AI responds in 60 seconds.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-primary-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Missing Opportunities</h3>
              <p className="text-primary-600">
                DSIT data: only 16% of UK businesses use AI. The other 84% are leaving money on the table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
            Ready to Find Out What AI Could Actually Do for Your Business?
          </h2>
          <p className="text-xl text-primary-600 mb-8">
            Book a free 30-minute discovery call. No sales pitch, no pressure — just a practical conversation about where AI could help your business most.
          </p>
          <Link 
            href="https://cal.com/james-turnbull/30min" 
            target="_blank"
            className="btn btn-primary text-lg px-8 py-4 text-white"
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