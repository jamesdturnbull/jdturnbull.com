import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About James Turnbull - The Anti-Hype AI Strategist',
  description: 'Former YC engineer turned AI consultant. I left the startup world because the businesses that need AI most are the ones nobody\'s building it for.',
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
            The Anti-Hype AI Strategist for established UK business owners who've built something worth protecting.
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
                I'm a founding engineer at Yuzu Labs, a YC-backed AI video automation platform, where I built their entire rendering system and designed a modular TypeScript monorepo from the ground up. Before that, I was Product Lead at Officely, where I built their Microsoft Teams meeting rooms product.
              </p>
              <p className="text-primary-700 leading-relaxed mb-4">
                I've also founded my own AI products: HeySabio, an AI-powered iOS app, and Symplex, an AI command platform for customer acquisition with integrations into Meta, TikTok, and Google advertising platforms.
              </p>
              <p className="text-primary-700 leading-relaxed mb-4">
                My career actually started at Mace Group on the £9Bn Battersea Power Station development, where I managed commercial work packages. I was offered a graduate position and turned it down to pursue software engineering full time. I studied Quantity Surveying at the University of Reading and Computer Science at Henley College.
              </p>
              <p className="text-primary-700 leading-relaxed">
                I left the startup world because the businesses that need AI most are the ones nobody's building it for.
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
                My goal is simple: help you work smarter so you can focus on what you do best. Protect what you've built.
              </p>
            </div>
          </div>

          {/* Anti-Hype Section */}
          <section className="mb-16 bg-accent-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">Why Anti-Hype?</h2>
            <div className="space-y-6">
              <p className="text-lg text-primary-700 leading-relaxed">
                The AI industry is full of hype. Every week there's a new "revolutionary" tool that claims to transform your business overnight. Most of it is nonsense designed to separate you from your money.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                I've seen what actually works and what doesn't. I've built AI systems that handle millions of video renders and customer interactions. The reality is that AI is a powerful tool, but it's not magic.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                You don't need transformation. You need protection. Protection of your time, your profit margins, and the business you've spent years building. That's what practical AI delivers.
              </p>
            </div>
          </section>

          {/* Why Solo Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Why a Solo Consultant, Not an Agency?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Direct Access</h3>
                <p className="text-primary-600">
                  You work directly with me. Not a sales team, not a junior consultant, not an account manager.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Personal Attention</h3>
                <p className="text-primary-600">
                  I take on a limited number of clients so I can give each one proper attention. Quality over quantity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Skin in the Game</h3>
                <p className="text-primary-600">
                  My reputation is on the line with every project. That's how I like it. No hiding behind corporate structures.
                </p>
              </div>
            </div>
          </section>

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
                <h3 className="font-semibold text-primary-900 mb-2">Honest Assessment</h3>
                <p className="text-sm text-primary-600">
                  We map your workflows to find the biggest time drains and missed opportunities. If AI isn't right for your problem, I'll tell you.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Practical Build</h3>
                <p className="text-sm text-primary-600">
                  We create custom AI systems that integrate seamlessly with your existing tools. No rip-and-replace.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">Ongoing Partnership</h3>
                <p className="text-sm text-primary-600">
                  We monitor, optimise, and expand your automation as your business grows. Long-term thinking.
                </p>
              </div>
            </div>
          </section>

          {/* Industries Focus */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Focus Sectors</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/sectors/construction" className="group">
                <div className="bg-white border border-primary-200 p-6 rounded-lg text-center hover:border-accent-300 transition-all duration-200 hover:shadow-lg">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-primary-900 mb-2">Construction</h3>
                  <p className="text-sm text-primary-600">Only 1% adoption rate. Massive opportunity.</p>
                </div>
              </Link>

              <Link href="/sectors/professional-services" className="group">
                <div className="bg-white border border-primary-200 p-6 rounded-lg text-center hover:border-accent-300 transition-all duration-200 hover:shadow-lg">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2V6z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-primary-900 mb-2">Professional Services</h3>
                  <p className="text-sm text-primary-600">Turn admin hours into billable hours.</p>
                </div>
              </Link>

              <Link href="/sectors/healthcare" className="group">
                <div className="bg-white border border-primary-200 p-6 rounded-lg text-center hover:border-accent-300 transition-all duration-200 hover:shadow-lg">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-primary-900 mb-2">Healthcare</h3>
                  <p className="text-sm text-primary-600">Strong budgets, compliance-focused.</p>
                </div>
              </Link>
            </div>
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
                  <h3 className="font-semibold text-primary-900 mb-2 leading-8">Plain English, No Jargon</h3>
                  <p className="text-primary-600">
                    No technical complexity. We explain everything in terms that make sense for your business.
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
                  <h3 className="font-semibold text-primary-900 mb-2 leading-8">No Lock-in Contracts</h3>
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
                  <h3 className="font-semibold text-primary-900 mb-2 leading-8">GDPR Compliant</h3>
                  <p className="text-primary-600">
                    All systems built to UK data protection standards. Your data stays yours.
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
                className="btn btn-primary text-white"
              >
                Book Free Discovery Call
              </Link>
              <Link href="/assessment" className="btn btn-outline">
                Take AI Assessment First
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}