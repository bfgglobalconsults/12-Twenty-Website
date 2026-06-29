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
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="bg-white py-20 px-6 lg:py-32 lg:px-12">
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
                <option value="infrastructure">Infrastructure</option>
                <option value="civil">Civil Engineering</option>
                <option value="maintenance">Facility Maintenance</option>
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
                <option value="feasibility">Feasibility</option>
                <option value="design">Design Phase</option>
                <option value="procurement">Procurement</option>
                <option value="construction">Construction</option>
                <option value="handover">Handover</option>
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
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent"
                required
              />
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
                <option value="50m">$50M - $100M</option>
                <option value="100m">$100M - $250M</option>
                <option value="250m">$250M - $500M</option>
                <option value="500m">$500M - $1B</option>
                <option value="1b">$1B+</option>
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

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E85D3F] text-white rounded-full hover:bg-[#D14D2F] transition-all duration-300 font-semibold"
          >
            Submit Consultation Request
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
