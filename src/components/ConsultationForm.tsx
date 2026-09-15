'use client'

import React, { useState } from 'react'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    projectType: '',
    projectStage: '',
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    notes: '',
    honeypot: '', // Spam detection field - hidden from users
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [submittedAt] = useState(Date.now()) // Track when form was loaded
  const [emailError, setEmailError] = useState('')

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    // Spam Protection 1: Honeypot field check
    if (formData.honeypot) {
      console.log('Spam detected via honeypot')
      return
    }

    // Spam Protection 2: Time-based check (prevent instant submissions)
    const timeElapsed = Date.now() - submittedAt
    if (timeElapsed < 3000) {
      // Less than 3 seconds
      setSubmitStatus({
        type: 'error',
        message: 'Please take your time to fill out the form properly.',
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/consultation-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectType: formData.projectType,
          projectStage: formData.projectStage,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          notes: formData.notes,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit consultation request')
      }

      setSubmitStatus({
        type: 'success',
        message:
          'Thank you! Your consultation request has been received. We will respond within 24-48 hours.',
      })
      setFormData({
        projectType: '',
        projectStage: '',
        fullName: '',
        email: '',
        phone: '',
        budget: '',
        notes: '',
        honeypot: '',
      })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear email error when user types
    if (name === 'email' && emailError) {
      setEmailError('')
    }
  }

  return (
    <section className="bg-white py-10 px-6 lg:py-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <span className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block text-center mb-6">
          Start A Consultation
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6 leading-tight">
          Begin With Certainty.
        </h2>

        <p className="text-gray-600 text-center text-base lg:text-lg mb-12 max-w-4xl mx-auto">
          Share your project requirements and our delivery leadership team will respond within 24-48
          hours with a tailored engagement proposal.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                PROJECT TYPE
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent text-gray-600"
                required
              >
                <option value="">Select project type</option>
                <option value="commercial">Commercial Development</option>
                <option value="residential">Residential Construction</option>
                <option value="industrial">Industrial Development</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="projectStage"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                PROJECT STAGE
              </label>
              <select
                id="projectStage"
                name="projectStage"
                value={formData.projectStage}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent text-gray-600"
                required
              >
                <option value="">Select project stage</option>
                <option value="planning">Concept/Planning </option>
                <option value="design">Design/Permitting </option>
                <option value="construction">Under Construction</option>
                <option value="renovation">Renovation/Remodel</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                FULL NAME
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleEmailBlur}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent ${
                  emailError ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 000 0000 0000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                ESTIMATED BUDGET
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent text-gray-600"
                required
              >
                <option value="">Select budget range</option>
                <option value="<50m">Under N50M</option>
                <option value="50-100m">N50M - N100M</option>
                <option value="100-250m">N100M - N250M</option>
                <option value="250-500m">N250M - N500M</option>
                <option value="500m+">N500M+</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
            >
              ADDITIONAL NOTES
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us about your project requirements, timeline and any specific challenges..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent resize-none"
            />
          </div>

          {/* Honeypot field - hidden from real users */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            style={{
              position: 'absolute',
              left: '-9999px',
              width: '1px',
              height: '1px',
            }}
            aria-hidden="true"
          />

          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E85D3F] text-white rounded-full hover:bg-[#D14D2F] transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
