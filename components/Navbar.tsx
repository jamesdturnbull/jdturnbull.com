'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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
            {/* Sectors Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="text-primary-700 hover:text-accent-600 font-medium transition-colors flex items-center"
              >
                Sectors
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white border border-primary-200 rounded-lg shadow-lg py-2 z-10"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link 
                    href="/sectors/construction" 
                    className="block px-4 py-3 text-sm text-primary-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                  >
                    <div className="font-medium">Construction</div>
                    <div className="text-xs text-primary-500">Project admin & client communication</div>
                  </Link>
                  <Link 
                    href="/sectors/professional-services" 
                    className="block px-4 py-3 text-sm text-primary-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                  >
                    <div className="font-medium">Professional Services</div>
                    <div className="text-xs text-primary-500">Turn admin hours into billable hours</div>
                  </Link>
                  <Link 
                    href="/sectors/healthcare" 
                    className="block px-4 py-3 text-sm text-primary-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                  >
                    <div className="font-medium">Healthcare</div>
                    <div className="text-xs text-primary-500">Patient communications & scheduling</div>
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/assessment" className="text-primary-700 hover:text-accent-600 font-medium transition-colors">
              Assessment
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
              className="btn btn-primary text-white"
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
              <div>
                <div className="text-primary-500 text-sm font-medium mb-2">Sectors</div>
                <div className="pl-4 space-y-2">
                  <Link href="/sectors/construction" className="block text-primary-700 hover:text-accent-600 font-medium">
                    Construction
                  </Link>
                  <Link href="/sectors/professional-services" className="block text-primary-700 hover:text-accent-600 font-medium">
                    Professional Services
                  </Link>
                  <Link href="/sectors/healthcare" className="block text-primary-700 hover:text-accent-600 font-medium">
                    Healthcare
                  </Link>
                </div>
              </div>
              <Link href="/assessment" className="text-primary-700 hover:text-accent-600 font-medium">
                Assessment
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
                className="btn btn-primary w-fit text-white"
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