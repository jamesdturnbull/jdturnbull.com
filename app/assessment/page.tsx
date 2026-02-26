'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NewsletterSignup } from '../../components/NewsletterSignup'
import type { Metadata } from 'next'

const questions = [
  {
    id: 'admin-hours',
    question: 'How many hours per week does your team spend on repetitive admin?',
    options: [
      { value: 'under-5', label: 'Under 5 hours' },
      { value: '5-15', label: '5-15 hours' },
      { value: '15-30', label: '15-30 hours' },
      { value: 'over-30', label: 'Over 30 hours' }
    ]
  },
  {
    id: 'response-time',
    question: 'How quickly do you respond to new enquiries?',
    options: [
      { value: 'under-1h', label: 'Under 1 hour' },
      { value: '1-4h', label: '1-4 hours' },
      { value: '4-24h', label: '4-24 hours' },
      { value: 'over-24h', label: 'Over 24 hours' }
    ]
  },
  {
    id: 'processes',
    question: 'Do you have documented processes for your key workflows?',
    options: [
      { value: 'fully-documented', label: 'Yes, fully documented' },
      { value: 'partly-documented', label: 'Some processes documented' },
      { value: 'informal', label: 'Mostly informal/in people\'s heads' },
      { value: 'no-processes', label: 'No formal processes' }
    ]
  },
  {
    id: 'bottleneck',
    question: 'What\'s your biggest operational bottleneck?',
    options: [
      { value: 'admin-tasks', label: 'Administrative tasks' },
      { value: 'customer-comms', label: 'Customer communications' },
      { value: 'appointment-scheduling', label: 'Appointment scheduling' },
      { value: 'lead-qualification', label: 'Lead qualification' },
      { value: 'document-processing', label: 'Document processing' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'ai-experience',
    question: 'Have you tried any AI tools before?',
    options: [
      { value: 'none', label: 'No, not yet' },
      { value: 'chatgpt-basic', label: 'ChatGPT for basic tasks' },
      { value: 'some-tools', label: 'A few different tools' },
      { value: 'advanced-user', label: 'Yes, I\'m quite experienced' }
    ]
  },
  {
    id: 'team-size',
    question: 'How many people work in your business?',
    options: [
      { value: '1-5', label: '1-5 people' },
      { value: '6-15', label: '6-15 people' },
      { value: '16-30', label: '16-30 people' },
      { value: 'over-30', label: 'Over 30 people' }
    ]
  },
  {
    id: 'industry',
    question: 'What industry are you in?',
    options: [
      { value: 'construction', label: 'Construction' },
      { value: 'professional-services', label: 'Professional Services (Legal, Accounting, etc.)' },
      { value: 'healthcare', label: 'Healthcare (Dental, Vet, Medical)' },
      { value: 'estate-agency', label: 'Estate Agency' },
      { value: 'recruitment', label: 'Recruitment' },
      { value: 'other', label: 'Other' }
    ]
  }
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')
  const [showEmailForm, setShowEmailForm] = useState(false)

  const handleAnswer = (value: string) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: value
    }
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowEmailForm(true)
    }
  }

  const generateRecommendations = () => {
    const recommendations = []
    
    // Based on admin hours
    if (answers['admin-hours'] === 'over-30' || answers['admin-hours'] === '15-30') {
      recommendations.push('**Document Processing Automation**: Your team is spending significant time on admin. AI can automate document processing, data entry, and routine paperwork.')
    }
    
    // Based on response time
    if (answers['response-time'] === 'over-24h' || answers['response-time'] === '4-24h') {
      recommendations.push('**AI Phone Agent & Lead Response**: Your response times suggest missed opportunities. An AI system can respond to enquiries instantly and qualify leads 24/7.')
    }
    
    // Based on bottleneck
    if (answers['bottleneck'] === 'customer-comms') {
      recommendations.push('**Customer Communication Automation**: Automate follow-ups, appointment confirmations, and routine customer queries.')
    }
    
    if (answers['bottleneck'] === 'appointment-scheduling') {
      recommendations.push('**Intelligent Scheduling System**: Let AI handle appointment booking, rescheduling, and calendar management automatically.')
    }
    
    if (answers['bottleneck'] === 'lead-qualification') {
      recommendations.push('**Automated Lead Qualification**: AI can ask the right questions and score leads before they reach your team.')
    }
    
    // Industry-specific recommendations
    if (answers['industry'] === 'construction') {
      recommendations.push('**Construction-Specific**: Automate project progress reports, safety documentation, and client updates.')
    }
    
    if (answers['industry'] === 'professional-services') {
      recommendations.push('**Professional Services Focus**: Reduce billable hour waste with automated client onboarding, document templates, and appointment reminders.')
    }
    
    if (answers['industry'] === 'healthcare') {
      recommendations.push('**Healthcare Optimisation**: Streamline patient communications, appointment reminders, and reception workload.')
    }
    
    // Default if no specific recommendations
    if (recommendations.length === 0) {
      recommendations.push('**Administrative Workflow Automation**: Based on your answers, AI could help streamline your day-to-day operations and reduce manual work.')
    }
    
    return recommendations
  }

  const handleEmailSubmit = () => {
    setShowEmailForm(false)
    setShowResults(true)
  }

  if (showResults) {
    const recommendations = generateRecommendations()
    
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Your AI Readiness Results
            </h1>
            <p className="text-xl text-primary-600">
              Based on your answers, here's where AI could help your business most:
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-primary-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Recommended AI Solutions:</h2>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-primary-700 leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent-50 rounded-2xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Ready to Turn These Insights Into Action?
            </h3>
            <p className="text-primary-600 mb-6">
              Book a free call to discuss how these AI solutions could work for your specific business.
            </p>
            <Link 
              href="https://cal.com/james-turnbull/30min" 
              target="_blank"
              className="btn btn-primary text-lg px-8 py-4 text-white"
            >
              Book Your Free Discovery Call
            </Link>
          </div>

          <div className="text-center">
            <Link href="/" className="text-accent-600 hover:text-accent-700 font-medium">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (showEmailForm) {
    return (
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Almost There...
            </h1>
            <p className="text-xl text-primary-600">
              Enter your email to see your personalised AI recommendations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-primary-200 p-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-6 text-center">Get Your Results</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  placeholder="your@email.com"
                />
              </div>
              <button
                onClick={handleEmailSubmit}
                disabled={!email}
                className="w-full btn btn-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                See My AI Recommendations
              </button>
            </div>
            <p className="text-sm text-primary-500 text-center mt-4">
              You'll also receive our weekly AI insights newsletter. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            AI Readiness Assessment
          </h1>
          <p className="text-xl text-primary-600">
            Answer 7 quick questions to discover where AI could help your business most.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-primary-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% complete</span>
          </div>
          <div className="w-full bg-primary-200 rounded-full h-2">
            <div 
              className="bg-accent-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-lg border border-primary-200 p-8">
          <h2 className="text-2xl font-bold text-primary-900 mb-8">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 rounded-lg border border-primary-200 hover:border-accent-300 hover:bg-accent-50 transition-all duration-200 group"
              >
                <span className="text-primary-800 group-hover:text-accent-700 font-medium">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {currentQuestion > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="text-accent-600 hover:text-accent-700 font-medium"
            >
              ← Previous question
            </button>
          </div>
        )}
      </div>
    </div>
  )
}