'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OneUnifiedStructure() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-white text-gray-900 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-coral-500 text-sm font-semibold mb-6 block"
            >
             Company Overview
            </motion.span>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              One Unified Structure.
              <br />
              End-to-End
              <br />
              Delivery.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              12Twenty is a premier construction project management company headquartered at Suite
              H427 Ikota Shopping Complex VGC, Lagos. Since our founding in 2022, we have grown into
              a trusted partner for large-scale commercial, industrial, and infrastructure
              development projects across two continents.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We are guided by a commitment to precision, innovation, and client-centric delivery.
              By integrating advanced digital project management tools with battle-tested
              construction expertise, we give our clients unparalleled visibility, control, and
              confidence at every stage of their project from concept to completion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden h-[500px]"
          >
            <Image
              src="/assets/construction-site.png"
              alt="Construction site"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
