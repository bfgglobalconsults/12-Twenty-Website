'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
          <div
            className={`flex justify-between items-center border-2 border-coral-500 rounded-full px-4 md:px-8 py-3 md:py-4 transition-all duration-300 ${
              isScrolled ? 'bg-coral-500' : 'bg-transparent'
            }`}
          >
            <a href="/" className="flex items-center">
              <Image
                src="/assets/12TWENTY.png"
                alt="12TWENTY"
                width={200}
                height={80}
                className="w-32 md:w-auto"
              />
            </a>

            <div className="hidden md:flex items-center gap-8 text-white">
              <div className="relative group">
                <a href="/services" className="flex items-center gap-1 hover:text-white/80">
                  Services
                 
                </a>
              </div>
              <a href="/projects" className="hover:text-white/80">
                Projects
              </a>
              <div className="relative group">
                <a href="/about" className="flex items-center gap-1 hover:text-white/80">
                  About
                 
                </a>
              </div>
              <a href="#" className="hover:text-white/80">
                Insights
              </a>
            </div>

            <button
              className={`hidden md:flex px-6 py-3 rounded-full items-center gap-2 font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-white text-coral-500 hover:bg-gray-100'
                  : 'bg-coral-500 text-white hover:bg-coral-600'
              }`}
            >
              Start a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-12 h-12 rounded-full bg-coral-500 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(16.71deg, #1A1A1A 88.45%, #F05C36 104.37%)',
          }}
        />
        <div className="relative h-full flex flex-col p-6 pt-28">
          <nav className="flex flex-col gap-4 text-white text-base flex-1 mt-8">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <a href="/services" className="hover:text-white/80">
                Services
              </a>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between pb-4">
              <a href="/projects" className="hover:text-white/80">
                Projects
              </a>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <a href="/about" className="hover:text-white/80">
                About
              </a>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between pb-4">
              <a href="/insights" className="hover:text-white/80">
                Insights
              </a>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </nav>

          <button className="w-full px-6 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 flex items-center justify-center gap-2 font-semibold text-lg mt-auto">
            Start a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
