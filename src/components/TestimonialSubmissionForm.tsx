'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'

interface TestimonialSubmissionFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function TestimonialSubmissionForm({
  isOpen,
  onClose,
}: TestimonialSubmissionFormProps) {
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    position: '',
    company: '',
    rating: 5,
    quote: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/testimonial-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Thank you! Your testimonial has been submitted for review.')
        setFormData({
          author: '',
          email: '',
          position: '',
          company: '',
          rating: 5,
          quote: '',
        })
        onClose()
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white px-8 pt-8 pb-4 border-b border-gray-200 rounded-t-3xl">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block mb-2">
                Share Your Experience
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Submit Your Testimonial
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
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
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                FULL NAME *
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
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
                EMAIL ADDRESS *
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
                htmlFor="position"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                POSITION/TITLE
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="e.g., Project Manager"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
              >
                COMPANY/ORGANIZATION
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your organization"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
            >
              RATING *
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent text-gray-600"
              required
            >
              <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
              <option value={4}>⭐⭐⭐⭐ Very Good</option>
              <option value={3}>⭐⭐⭐ Good</option>
              <option value={2}>⭐⭐ Fair</option>
              <option value={1}>⭐ Poor</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quote"
              className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide"
            >
              YOUR TESTIMONIAL *
            </label>
            <textarea
              id="quote"
              name="quote"
              value={formData.quote}
              onChange={handleChange}
              placeholder="Share your experience working with us..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D3F] focus:border-transparent resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E85D3F] text-white rounded-full hover:bg-[#D14D2F] transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="text-xs text-gray-500 mt-4">
            Your testimonial will be reviewed before being published on our website.
          </p>
        </form>
      </div>
    </div>
  )
}
