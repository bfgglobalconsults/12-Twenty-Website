'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OurStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-white text-gray-900 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-coral-500 text-sm font-semibold mb-6 block"
        >
          Our Story
        </motion.span>

        <div className="grid gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Where It Started.
              <br />
              How We Grew
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              12Twenty was founded in 2022 on a single conviction: project delivery should not be
              fragmented. For decades, the industry has suffered from siloed accountability — where
              designers, contractors, and consultants operate in isolation, passing risk downstream
              without ownership. We solve this by managing projects under an unified structure.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              As part of our accountability framework, we combine bold thinking by integrating
              modern technology, transparent reporting, and system-driven operations from inception
              to completion.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <span className="text-coral-500 text-sm font-semibold mb-6 block">Our Philosophy</span>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            Our philosophy is rooted in lifecycle thinking. Every decision we make considers the
            long-term performance, durability, and whole-life value of the infrastructure we
            deliver.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-[#14212D] rounded-2xl p-3 my-4">
            <h3 className="text-3xl font-bold mb-8 text-[#F05C36]">Integrated Delivery Model</h3>
            <p className="text-white/90 text-lg mb-12 max-w-4xl leading-relaxed">
              We are not simply building delivery channels. We are creating a fully integrated
              delivery model for a single construction company that delivers projects across the
              entire spectrum — commercial, industrial, residential, and infrastructure. Our unified
              structure ensures every stakeholder, from owner to subcontractor, operates under one
              accountability system with clear visibility, transparent reporting, and system-driven
              operations from inception to completion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {[
              { value: '6+', label: 'Years Experience' },
              { value: '15+', label: 'Projects Managed' },
              { value: 'Multi-Million', label: 'Managed Portfolio Value' },
              { value: 'Multi-Sector', label: 'Delivery Capability' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-coral-500 rounded-2xl p-8"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
