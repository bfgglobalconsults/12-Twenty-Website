'use client'

import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="bg-[#E85D3F] rounded-2xl py-20 px-6 lg:py-24 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-white font-medium text-sm tracking-wide uppercase block mb-6">
          NEWSLETTER
        </span>

        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
          Join 1,000+ Developers Receiving Monthly
          <br />
          Project Delivery Insights
        </h2>

        <p className="text-white text-base lg:text-lg mb-10 max-w-3xl mx-auto">
          Analysis, best practices and operational intelligence from the infrastructure delivery
          frontline.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
        >
          <div className="w-full sm:flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E85D3F] rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold whitespace-nowrap"
          >
            Subscribe
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
