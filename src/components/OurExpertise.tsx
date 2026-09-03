'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Service {
  id: string
  title: string
  slug: string
  image?: {
    url: string
  }
  shortDescription: string
  deliverables?: Array<{ item: string }>
}

export default function OurExpertise({ services }: { services: Service[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-[#14212D] rounded-xl py-20 px-6 lg:py-12 lg:px-12 mb-12">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white font-medium text-sm tracking-wide uppercase block mb-6"
        >
          Our Expertise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-16 leading-tight"
        >
          Integrated Services.
          <br />
          Lifelong Accountability.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 flex flex-col h-full"
            >
              <Link href={`/services/${service.slug}`} className="flex flex-col h-full group">
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                  >
                    {service.image && (
                      <Image
                        src={service.image.url}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                    )}
                  </motion.div>
                  <svg
                    className="w-6 h-6 text-[#E85D3F] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDescription}
                </p>

                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      KEY OUTPUTS
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start">
                          <span className="text-[#E85D3F] mr-2">●</span>
                          <span>{deliverable.item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
