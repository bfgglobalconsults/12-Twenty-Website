'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/about-image.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/90" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center pt-32 md:pt-40">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-coral-500 text-coral-500 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm"
          >
            Company Overview
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-base md:text-lg max-w-xl"
          >
            We are guided by a commitment to precision, innovation, and client-centric delivery. By
            integrating advanced digital project management tools with battle-tested construction
            expertise, we give our clients unparalleled visibility, control, and confidence at every
            stage of their project from concept to completion.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
