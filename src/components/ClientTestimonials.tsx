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

  // Calculate how many items to show per slide based on screen size
  const itemsPerSlide = testimonials.length >= 3 ? 3 : testimonials.length
  const maxIndex = Math.max(0, testimonials.length - itemsPerSlide)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : Math.max(0, prev - 1)))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : Math.min(maxIndex, prev + 1)))
  }

  // Get visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
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

          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div className="overflow-hidden mb-12">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)]"
                    style={{ minWidth: 'calc(33.333% - 1.5rem)' }}
                  >
                    <div className="bg-white rounded-3xl p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="text-gray-900 text-base leading-relaxed mb-6 italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="flex items-center gap-3">
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
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-600 font-semibold text-lg">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-gray-900 font-semibold">
                            — {testimonial.author}
                          </p>
                          {testimonial.position && testimonial.company && (
                            <p className="text-xs text-gray-600">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border-2 border-[#E85D3F] text-[#E85D3F] hover:bg-[#E85D3F] hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-[#E85D3F] w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                disabled={currentIndex >= maxIndex}
                className="w-12 h-12 rounded-full bg-[#E85D3F] text-white hover:bg-[#D14D2F] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
