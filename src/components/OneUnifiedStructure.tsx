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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              About Us
            </motion.span>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              One Unified Structure.
              <br />
              End-to-End
              <br />
              Accountability.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We are a full-service infrastructure delivery partner built for complexity. From
              initial feasibility through design, procurement, construction and handover, we embed
              certainty into every stage of the project lifecycle. Our integrated teams combine
              technical depth with commercial rigor, to deliver outcomes that meet schedule, budget
              and quality benchmarks every time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden h-[500px]"
          >
            <Image
              src="/assets/construction-site.jpg"
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
