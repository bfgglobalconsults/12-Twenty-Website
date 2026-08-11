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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
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
              I2 Twenty was founded on a simple conviction: construction delivery should not be
              fragmented. For decades, the industry has suffered from siloed accountability — where
              designers, contractors, and consultants operate in isolation, passing risk downstream
              without ownership.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We solve this by managing projects under one unified structure. A single point of
              accountability from concept to completion, backed by integrated teams, transparent
              reporting, and systems-driven operational control.
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
            Our philosophy is rooted in lifespan thinking. Every decision we make considers the
            long-term performance, maintainability, and asset value of the infrastructure we
            deliver. We do not simply build. We engineer outcomes that endure.
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
              Our Integrated Delivery Model combines project management, design coordination,
              procurement intelligence, site supervision, and facility planning into one governed
              program. This eliminates the traditional gaps between phases and ensures continuity of
              knowledge, accountability, and quality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '30+', label: 'Projects Managed' },
              { value: '$2.4B', label: 'Managed Portfolio Value' },
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
