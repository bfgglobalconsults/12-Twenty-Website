'use client'

import { useState } from 'react'
import Image from 'next/image'
import TestimonialSubmissionForm from './TestimonialSubmissionForm'

interface Testimonial {
  id: string
  quote: string
  author: string
  position?: string
  company?: string
  photo?: {
    url: string
  }
}

interface ClientTestimonialsProps {
  testimonials: Testimonial[]
}

export default function ClientTestimonials({ testimonials }: ClientTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <>
        <section className="bg-gray-50 py-20 px-6 lg:py-32 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  What Our Clients Are Saying
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 lg:mt-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#E85D3F] text-[#E85D3F] rounded-full hover:bg-[#E85D3F] hover:text-white transition-all duration-300 font-semibold"
              >
                Share Your Experience
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No client testimonials available yet. Be the first to share your experience!
              </p>
            </div>
          </div>
        </section>

        <TestimonialSubmissionForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    )
  }

  return (
    <>
      <section className="bg-gray-50 py-20 px-6 lg:py-32 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                What Our Clients Are Saying
              </h2>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 lg:mt-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#E85D3F] text-[#E85D3F] rounded-full hover:bg-[#E85D3F] hover:text-white transition-all duration-300 font-semibold"
            >
              Share Your Experience
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-3xl p-8 transition-opacity duration-300 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <p className="text-gray-900 text-base leading-relaxed mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3 mb-2">
                    {testimonial.photo &&
                    typeof testimonial.photo !== 'string' &&
                    testimonial.photo.url ? (
                      <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.photo.url}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                    <div>
                      <p className="text-sm text-gray-900 font-semibold">— {testimonial.author}</p>
                      {testimonial.position && testimonial.company && (
                        <p className="text-xs text-gray-600">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
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

      <TestimonialSubmissionForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
