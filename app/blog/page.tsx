import Link from 'next/link'
import type { Metadata } from 'next'
import { getSortedPostsData } from '../../lib/blog'
import { NewsletterSignup } from '../../components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical AI insights for UK businesses. Real examples, honest advice, no hype.',
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  // Group posts by sector for easier browsing
  const sectors = Array.from(new Set(posts.map(post => post.sector).filter(Boolean)))

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            AI Insights for UK Businesses
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Practical advice on AI automation. Real examples, honest costs, no hype. 
            Everything you need to make smart decisions about AI for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Sector Filter */}
            {sectors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">
                  Browse by Sector
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 text-sm bg-accent-100 text-accent-800 rounded-full hover:bg-accent-200 transition-colors">
                    All Posts
                  </button>
                  {sectors.map((sector) => (
                    <button 
                      key={sector}
                      className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors capitalize"
                    >
                      {sector?.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Posts List */}
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white border border-primary-200 rounded-xl p-6 hover:border-accent-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {post.sector && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-accent-100 text-accent-800 rounded-full mb-2 capitalize">
                          {post.sector.replace('-', ' ')}
                        </span>
                      )}
                      <h2 className="text-xl lg:text-2xl font-bold text-primary-900 mb-2 hover:text-accent-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                    </div>
                    <time className="text-sm text-primary-500 flex-shrink-0">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <p className="text-primary-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium group"
                  >
                    Read full article
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-primary-500 text-lg">No blog posts found.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Newsletter Signup */}
              <NewsletterSignup compact />

              {/* About */}
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary-900 mb-3">About This Blog</h3>
                <p className="text-primary-600 text-sm mb-4">
                  Real experiences from implementing AI in UK businesses. No vendor pitches, no theoretical fluff — just practical insights from the front lines.
                </p>
                <Link href="/about" className="text-accent-600 hover:text-accent-700 text-sm font-medium">
                  More about James →
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white border border-primary-200 p-6 rounded-lg">
                <h3 className="font-semibold text-primary-900 mb-4">Popular Topics</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog?sector=estate-agents" className="text-primary-600 hover:text-accent-600 transition-colors">
                      AI for Estate Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?sector=dental-practices" className="text-primary-600 hover:text-accent-600 transition-colors">
                      AI for Dental Practices
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?sector=law-firms" className="text-primary-600 hover:text-accent-600 transition-colors">
                      AI for Law Firms
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?sector=restaurants" className="text-primary-600 hover:text-accent-600 transition-colors">
                      AI for Restaurants
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-accent-600 text-white p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Ready to Implement AI?</h3>
                <p className="text-accent-100 text-sm mb-4">
                  Book a free discovery call to discuss your specific needs.
                </p>
                <Link 
                  href="https://cal.com/james-turnbull/30min" 
                  target="_blank"
                  className="btn bg-white text-accent-600 hover:bg-accent-50 w-full"
                >
                  Book Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}