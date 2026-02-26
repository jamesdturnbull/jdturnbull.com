import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'James Turnbull is a software engineer turned AI consultant. Four years building products in startups, now helping UK businesses automate and grow.',
}

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            About James
          </h1>
          <p className="text-xl text-primary-600">
            Software engineer turned AI consultant. Four years building products in startups, now helping UK businesses work smarter.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          {/* Photo placeholder */}
          <div className="w-64 h-64 bg-primary-200 rounded-xl mx-auto mb-12 flex items-center justify-center">
            <span className="text-primary-500 text-sm">Photo placeholder</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">My Story</h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                I'm a full stack software engineer with four years of experience building products in startups. Most recently I was the founding engineer at Yuzu Labs, a YC-backed company where I led development of their AI video automation platform, designing the rendering system and building a modular TypeScript monorepo from the ground up.
              </p>
              <p className="text-primary-700 leading-relaxed mb-4">
                Before that I was Product Lead at Officely, where I built their meeting rooms product for Microsoft Teams. I've also founded two of my own products: HeySabio, an AI-powered iOS app, and Symplex, an AI command platform for customer acquisition with integrations into Meta, TikTok, and Google advertising.
              </p>
              <p className="text-primary-700 leading-relaxed mb-4">
                My career actually started in construction. I managed commercial work packages on the £9Bn Battersea Power Station development at Mace Group, was offered a graduate position, and turned it down to pursue software engineering full time. I studied Quantity Surveying at the University of Reading and Computer Science at Henley College.
              </p>
              <p className="text-primary-700 leading-relaxed">
                Now I take the same tools and thinking I've used to build products for funded startups and apply them to UK businesses where the impact is immediate. Estate agents, dental practices, law firms, recruitment agencies. The businesses that keep the economy running but don't have engineering teams.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">My Approach</h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                I don't believe in AI for AI's sake. I believe in solving specific problems that cost you time, money, or opportunities. If AI isn't the right solution, I'll tell you what is.
              </p>
              <p className="text-primary-700 leading-relaxed mb-4">
                Every project starts with understanding your business first, then identifying the 2-3 automations that will have the biggest impact. We build practical systems that integrate with your existing tools and processes, not replace them.
              </p>
              <p className="text-primary-700 leading-relaxed">
                My goal is simple: help you work smarter so you can focus on what you do best.
              </p>
            </div>
          </div>

          {/* What I Do */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Identify</h3>
                <p className="text-sm text-primary-600">
                  We map your workflows to find the biggest time drains and missed opportunities.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Build</h3>
                <p className="text-sm text-primary-600">
                  We create custom AI systems that integrate seamlessly with your existing tools.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Scale</h3>
                <p className="text-sm text-primary-600">
                  We monitor, optimise, and expand your automation as your business grows.
                </p>
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Industries We Work With</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <div key={industry} className="bg-white border border-primary-200 p-4 rounded-lg text-center hover:border-accent-300 transition-colors">
                  <span className="font-medium text-primary-900">{industry}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-primary-600 mt-6">
              If you're a UK business drowning in admin, we can probably help.
            </p>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">How We Work</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2 leading-8">Honest Assessment</h3>
                  <p className="text-primary-600">
                    If AI isn't right for your problem, I'll tell you. No overselling, no buzzwords, just practical solutions that work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2 leading-8">Results-Focused</h3>
                  <p className="text-primary-600">
                    Every project has clear success metrics. We measure time saved, revenue recovered, and problems solved.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2 leading-8">No Vendor Lock-in</h3>
                  <p className="text-primary-600">
                    You own your systems. If you want to work with someone else tomorrow, everything transfers cleanly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2 leading-8">Plain English</h3>
                  <p className="text-primary-600">
                    No jargon, no technical complexity. We explain everything in terms that make sense for your business.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-accent-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">
              Ready to Work Smarter?
            </h2>
            <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
              Every conversation starts with understanding your business. Book a free 30-minute discovery call to discuss what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://cal.com/james-turnbull/30min" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg bg-accent-600 text-white hover:bg-accent-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Book Free Discovery Call
              </Link>
              <Link href="/blog" className="btn btn-outline">
                Read the Blog
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}