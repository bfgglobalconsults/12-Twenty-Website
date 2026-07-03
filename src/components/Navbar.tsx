'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div
          className={`flex justify-between items-center border-2 border-coral-500 rounded-full px-8 py-4 backdrop-blur-sm transition-all duration-300 ${
            isScrolled ? 'bg-coral-500' : 'bg-transparent'
          }`}
        >

          <div className="flex items-center">
           
            <Image
              src="/assets/12TWENTY.png"
              alt="12TWENTY"
              width={200}
              height={80}
              className="w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-white">
            <div className="relative group">
              <a href="/services" className="flex items-center gap-1 hover:text-white/80">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
            <a href="/projects" className="hover:text-white/80">
              Projects
            </a>
            <div className="relative group">
              <a href="/about" className="flex items-center gap-1 hover:text-white/80">
                About
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
            <a href="#" className="hover:text-white/80">
              Insights
            </a>
          </div>

          <button
            className={`px-6 py-3 rounded-full flex items-center gap-2 font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-white text-coral-500 hover:bg-gray-100'
                : 'bg-coral-500 text-white hover:bg-coral-600'
            }`}
          >
            Start a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
