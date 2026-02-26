'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-primary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-900 hover:text-accent-600 transition-colors">
              JD Turnbull
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-primary-700 hover:text-accent-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-primary-700 hover:text-accent-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-primary-700 hover:text-accent-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-primary-700 hover:text-accent-600 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/newsletter" className="text-primary-700 hover:text-accent-600 font-medium transition-colors">
              Newsletter
            </Link>
            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-primary"
            >
              Book Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-700 hover:text-primary-900 focus:outline-none focus:text-primary-900 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-200">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-primary-700 hover:text-accent-600 font-medium">
                Services
              </Link>
              <Link href="/blog" className="text-primary-700 hover:text-accent-600 font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-primary-700 hover:text-accent-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-primary-700 hover:text-accent-600 font-medium">
                Contact
              </Link>
              <Link href="/newsletter" className="text-primary-700 hover:text-accent-600 font-medium">
                Newsletter
              </Link>
              <Link 
                href="https://cal.com/james-turnbull/30min" 
                target="_blank"
                className="btn btn-primary w-fit"
              >
                Book Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}