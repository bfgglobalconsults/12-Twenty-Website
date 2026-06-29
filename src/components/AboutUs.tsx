import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="bg-white py-20 px-6 lg:py-32 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="text-red-600 font-medium text-sm tracking-wide uppercase">
              About Us
            </span>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              One Unified Structure.
              <br />
              End-to-End
              <br />
              Accountability.
            </h2>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              We are a full-service infrastructure delivery partner built for complexity. From
              initial feasibility through design, procurement, construction and handover, we embed
              certainty into every stage of the project lifecycle. Our integrated teams combine
              technical depth with commercial rigor to deliver outcomes that meet schedule, budget
              and quality benchmarks every time.
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 font-medium">
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
                alt="Construction site with excavators and workers"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
