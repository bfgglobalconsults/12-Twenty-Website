'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    projectType: '',
    projectStage: '',
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    notes: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/consultation-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you! Your consultation request has been submitted successfully.')
        setFormData({
          projectType: '',
          projectStage: '',
          fullName: '',
          email: '',
          phone: '',
          budget: '',
          notes: '',
        })
        onClose()
      } else {
        alert('There was an error submitting your request. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8"
          >
            <div className="bg-white rounded-3xl max-w-4xl w-full p-8 md:p-12 relative my-2 mx-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <p className="text-[#E85D3F] text-sm font-semibold mb-4">Start A Consultation</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Begin With Certainty.
                </h2>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                  Share your project requirements and our delivery leadership team will respond
                  within 24-48 hours with a tailored engagement proposal.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      PROJECT TYPE
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] text-gray-900"
                    >
                      <option value="">Select project type</option>
                      <option value="commercial">Commercial Development</option>
                      <option value="residential">Residential Construction</option>
                      <option value="industrial">Industrial Development</option>
                    </select>
                  </div>

                  {/* Project Stage */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      PROJECT STAGE
                    </label>
                    <select
                      name="projectStage"
                      value={formData.projectStage}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] text-gray-900"
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
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 000 0000 0000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      ESTIMATED BUDGET
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] text-gray-900"
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

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    ADDITIONAL NOTES
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, timeline and any specific challenges..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-[#E85D3F] text-white rounded-full hover:bg-[#d54d2d] transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Submit Consultation Request
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
