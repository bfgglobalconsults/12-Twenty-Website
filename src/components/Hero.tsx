import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative h-[200vh] bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/hero-image.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80" />

      <div className="relative max-w-7xl mx-auto px-8 h-full flex flex-col justify-center pt-[20px]">
        <div className="max-w-3xl">
          <span className="inline-block border border-coral-500 text-white px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
            ENTERPRISE INFRASTRUCTURE PARTNER
          </span>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Delivering Certainty
            <br />
            From Concept to
            <br />
            Completion.
          </h1>

          <p className="text-white/90 text-lg mb-10 max-w-xl">
            A premium construction project management and infrastructure delivery company managing
            complex projects with precision, transparency and accountability.
          </p>

          <div className="flex gap-4 mb-16">
            <button className="px-8 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 flex items-center gap-2 font-semibold">
              Start a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 font-semibold">
              View Managed Projects
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 max-w-md border-2 border-coral-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white" />
                <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-white" />
                <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white" />
              </div>
              <div>
                <p className="text-black font-semibold text-lg">50K+ Happy Clients</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-black/90 text-sm ml-1">4.8/5</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 text-black text-sm">
              <div className="text-center">
                <div className="font-semibold">ISO Certified</div>
              </div>
              <div className="text-center border-l border-coral-500">
                <div className="font-semibold">RBA Enabled</div>
              </div>
              <div className="text-center border-l border-coral-500">
                <div className="font-semibold">97% On-Time Delivery</div>
              </div>
              <div className="text-center border-l border-coral-500">
                <div className="font-semibold">Zero LTI Record</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
