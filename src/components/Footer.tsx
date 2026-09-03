'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer className="bg-[#14212D] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 w-full lg:w-[60%]">
            <div className="flex items-center mb-6">
              <Image
                src="/assets/12TWENTY.png"
                alt="12TWENTY"
                width={150}
                height={60}
                className="w-auto h-12"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-12">
              12Twenty partners with enterprise clients, developers, and institutions to deliver
              complex infrastructure with precision, transparency, and accountability.
            </p>

            <div className="mb-8">
              <p className="text-white text-sm mb-4">
                Stay informed on industry insights and delivery best practices.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="flex-1 px-4 py-2.5 bg-transparent border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-white text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-white text-[#E85D3F] rounded hover:bg-gray-100 transition-colors font-medium text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <p className="text-white text-sm mb-4">Follow us</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Services */}

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Construction Design & Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Residential & Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Roadworks & Civil Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Facility Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Materials Procurement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/about"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    About 12Twenty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    News & Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal & Contact</h4>
              <ul className="space-y-6">
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li className="pt-2">
                  <a
                    href="mailto:info@12twentygroup.com"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    info@12twentygroup.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+2340000000000"
                    className="text-white/80 hover:text-[#E85D3F] transition-colors text-sm"
                  >
                    +234 000 0000 0000
                  </a>
                </li>
              </ul>
            </div>
            {/* in here */}
           
            {/* in here end */}
          </div>
           {/* Bottom Bar */}
            <div className="border-t-2 border-white pt-8 my-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-6">
                  <a
                    href="mailto:info@12twentygroup.com"
                    className="flex items-center gap-2 hover:text-[#E85D3F] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@12twentygroup.com
                  </a>
                  <a
                    href="tel:+2340000000000"
                    className="flex items-center gap-2 hover:text-[#E85D3F] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +234 000 0000 0000
                  </a>
                  <span className="flex items-center gap-2 hover:text-[#E85D3F] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
