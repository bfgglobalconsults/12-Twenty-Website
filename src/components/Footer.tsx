'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer className="bg-[#14212D] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
             <div className="flex items-center my-4">
                        <Image
                          src="/assets/12TWENTY.png"
                          alt="12TWENTY"
                          width={200}
                          height={80}
                          className="w-auto"
                        />
                      </div>
            <p className="text-white text-sm leading-relaxed mb-8">
              12Twenty partners with enterprise clients, developers, and institutions to deliver
              complex infrastructure with precision, transparency, and accountability.
            </p>

            <div>
              <p className="text-white text-sm mb-4">
                Stay informed on industry insights and delivery best practices.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="flex-1 px-4 py-2 bg-transparent border border-white rounded text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-[#E85D3F] rounded hover:bg-gray-100 transition-colors font-medium text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Construction Design & Management
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Residential & Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Roadworks & Civil Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Facility Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Materials Procurement
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  About 12Twenty
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  News & Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal & Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-white/80 transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:info@12twenty.com"
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  info@12twenty.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2340000000000"
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  +234 000 0000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
