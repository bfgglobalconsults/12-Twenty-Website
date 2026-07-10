'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const differentiators = [
    {
      number: '1',
      title: 'Unified Accountability',
      description:
        'A single point of responsibility across design, procurement, construction, and handover. No gaps. No blame. No surprises.',
    },
    {
      number: '2',
      title: 'Technical & Safety Excellence',
      description:
        'ISO-certified processes, zero-tolerance safety culture, and technical governance that meets the most demanding institutional standards.',
    },
    {
      number: '3',
      title: 'Financial Transparency',
      description:
        'Real-time cost tracking, open-book reporting, and commercial governance that protects investor confidence and board-level oversight.',
    },
    {
      number: '4',
      title: 'Proven Delivery Scale',
      description:
        'From $50M residential developments to $1B+ infrastructure corridors. We have the systems, teams, and capital partners to deliver at any scale.',
    },
    {
      number: '5',
      title: 'Lifecycle Reliability',
      description:
        'We design and deliver with the full asset lifecycle in mind — from operational efficiency through to end-of-life planning and circular material recovery.',
    },
  ]

  return (
    <section ref={ref} className="bg-[#E85D3F] rounded-2xl py-20 px-6 lg:py-32 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white font-medium text-sm tracking-wide uppercase block mb-6"
        >
          Why 12Twenty
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-16 leading-tight"
        >
          The Difference Is
          <br />
          In The Delivery.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 flex flex-col"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                className="text-5xl font-bold text-[#E85D3F] mb-6"
              >
                {item.number}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
