import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Healthcare UK - Dental Practices, Vets, Medical Clinics | Automate Patient Communications',
  description: 'Your reception staff spend half their day rescheduling appointments. Automate patient communications, appointment management, and administrative workflows.',
}

export default function HealthcarePage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            AI for Healthcare Practices
          </h1>
          <p className="text-xl lg:text-2xl text-primary-600 max-w-4xl mx-auto mb-8">
            Your reception staff spend half their day rescheduling appointments. There's a better way.
          </p>
          <div className="inline-flex items-center bg-accent-100 rounded-full px-6 py-3 text-accent-700 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Premium service, reduced administrative burden
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Admin Workload Is Overwhelming Your Team
              </h2>
              <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                Healthcare practices face unique challenges: high patient volumes, strict compliance requirements, and staff shortages. Meanwhile, your reception team drowns in appointment management and patient queries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Reception staff overwhelmed with appointment calls and rescheduling</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Patient no-shows and last-minute cancellations costing revenue</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Routine patient queries taking time away from clinical care</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Follow-up care reminders and patient education falling through cracks</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Healthcare Reality</h3>
              <div className="space-y-4">
                <div className="border-b border-primary-700 pb-4">
                  <div className="text-3xl font-bold text-accent-400">15%</div>
                  <p className="text-primary-200">Average no-show rate (£150+ lost per slot)</p>
                </div>
                <div className="border-b border-primary-700 pb-4">
                  <div className="text-3xl font-bold text-accent-400">4 hours</div>
                  <p className="text-primary-200">Daily admin per reception staff member</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-400">68%</div>
                  <p className="text-primary-200">Of patients want online booking (Accenture 2023)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Helps */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Healthcare Practices We Work With
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              AI automation brings the biggest benefits to practices with high patient volumes and standardised appointment workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 transition-colors">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Dental Practices</h3>
              <p className="text-sm text-primary-600">General dentistry, orthodontics, specialist clinics</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 transition-colors">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Veterinary Clinics</h3>
              <p className="text-sm text-primary-600">Small animal, equine, farm practices</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 transition-colors">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Medical Practices</h3>
              <p className="text-sm text-primary-600">GP surgeries, private clinics</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200 hover:border-accent-300 transition-colors">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Specialist Clinics</h3>
              <p className="text-sm text-primary-600">Physio, optometry, aesthetics</p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              How AI Transforms Healthcare Operations
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Free your team to focus on patient care. Here's how AI handles the admin work that doesn't need human touch.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Smart Appointment Management</h3>
              <p className="text-primary-600 mb-4">
                24/7 online booking, automated reminders, and intelligent rescheduling. Cut no-shows by 60% and free up reception time.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Online booking portal
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SMS & email reminders
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancellation management
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Patient Communication Hub</h3>
              <p className="text-primary-600 mb-4">
                AI handles routine patient queries, appointment confirmations, and follow-up scheduling. Professional, consistent service every time.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 phone answering
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  FAQs and basic queries
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Emergency triage
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-primary-200 shadow-lg">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Follow-up Care Automation</h3>
              <p className="text-primary-600 mb-4">
                Automated post-treatment check-ins, medication reminders, and preventive care scheduling. Better outcomes, happier patients.
              </p>
              <div className="space-y-2 text-sm text-primary-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Post-treatment check-ins
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Preventive care reminders
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Treatment plan compliance
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="mb-16 bg-accent-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Healthcare-Compliant AI
            </h2>
            <p className="text-xl text-primary-600">
              We understand healthcare compliance requirements. All systems are designed with patient privacy at the core.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">GDPR Compliant</h3>
                <p className="text-primary-600">All patient data handled according to UK data protection regulations.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">Secure by Design</h3>
                <p className="text-primary-600">End-to-end encryption and secure data handling protocols.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">Audit Ready</h3>
                <p className="text-primary-600">Complete audit trails for all patient interactions and data access.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              What Healthcare Practices Achieve
            </h2>
            <p className="text-xl text-primary-600">
              Typical improvements within 4-6 weeks of implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-primary-200">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">60%</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Fewer No-Shows</h3>
              <p className="text-sm text-primary-600">Automated reminders dramatically reduce missed appointments</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">3h</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Time Saved Daily</h3>
              <p className="text-sm text-primary-600">Per reception staff member, freed for patient care</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Patient Service</h3>
              <p className="text-sm text-primary-600">Round-the-clock booking and basic query handling</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-primary-200">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-white">95%</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Patient Satisfaction</h3>
              <p className="text-sm text-primary-600">Improved with instant responses and better communication</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary-900 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Book a free call to discuss how AI could work for your healthcare practice. We understand the unique compliance and operational requirements of healthcare.
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
            30-minute call • Healthcare compliance focus • No obligation
          </p>
        </section>
      </div>
    </div>
  )
}