import Link from 'next/link'
import { NewsletterSignup } from './NewsletterSignup'

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">JD Turnbull</h3>
            <p className="text-primary-300 mb-6 text-sm leading-relaxed">
              AI Consulting for UK Businesses. Helping SMBs automate admin, lead generation, and client communications so you can focus on what matters most.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/jdturnbull_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/jdturnbull" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-primary-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-primary-300 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="https://cal.com/james-turnbull/30min" target="_blank" className="text-primary-300 hover:text-white transition-colors">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-primary-300 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <NewsletterSignup />
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm">
            © {new Date().getFullYear()} JD Turnbull. All rights reserved.
          </p>
          <p className="text-primary-400 text-sm mt-2 md:mt-0">
            AI Consulting for UK Businesses
          </p>
        </div>
      </div>
    </footer>
  )
}