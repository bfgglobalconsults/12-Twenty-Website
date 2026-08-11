'use client'

import React, { useState } from 'react'

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote:
        '12Twenty transformed what was originally a fragmented, high-risk development into a structured, transparent delivery program. Their command of both technical detail and commercial governance gave our board the confidence to proceed at scale. They do not merely manage projects — they engineer certainty.',
      author: 'Chief Development Officer, Apex Institutional Capital',
    },
    {
      quote:
        '12Twenty transformed what was originally a fragmented, high-risk development into a structured, transparent delivery program. Their command of both technical detail and commercial governance gave our board the confidence to proceed at scale. They do not merely manage projects — they engineer certainty.',
      author: 'Chief Development Officer, Apex Institutional Capital',
    },
    {
      quote:
        '12Twenty transformed what was originally a fragmented, high-risk development into a structured, transparent delivery program. Their command of both technical detail and commercial governance gave our board the confidence to proceed at scale. They do not merely manage projects — they engineer certainty.',
      author: 'Chief Development Officer, Apex Institutional Capital',
    },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-gray-50 py-20 px-6 lg:py-32 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
          What Our Clients Are Saying
        </h2>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 transition-opacity duration-300 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <p className="text-gray-900 text-base leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <p className="text-sm text-gray-600 font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border-2 border-[#E85D3F] text-[#E85D3F] hover:bg-[#E85D3F] hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-[#E85D3F] text-white hover:bg-[#D14D2F] transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
