import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'JD Turnbull - AI Consulting for UK Businesses',
    template: '%s | JD Turnbull'
  },
  description: 'You don\'t need more staff. You need smarter systems. AI consultant helping UK businesses automate admin, lead gen, and client communications.',
  keywords: ['AI consultant', 'business automation', 'UK SMB', 'lead generation', 'AI systems'],
  authors: [{ name: 'James Turnbull' }],
  creator: 'James Turnbull',
  publisher: 'JD Turnbull',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://jdturnbull.com',
    title: 'JD Turnbull - AI Consulting for UK Businesses',
    description: 'You don\'t need more staff. You need smarter systems. AI consultant helping UK SMBs automate admin, lead gen, and client communications.',
    siteName: 'JD Turnbull',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JD Turnbull - AI Consulting for UK Businesses',
    description: 'You don\'t need more staff. You need smarter systems. AI consultant helping UK SMBs automate admin, lead gen, and client communications.',
    creator: '@jdturnbull_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}