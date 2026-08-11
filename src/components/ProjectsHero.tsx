'use client'

import { motion } from 'framer-motion'

export default function ProjectsHero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/project-image.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center pt-32 md:pt-40">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block mb-6"
          >
            Building Smarter. Delivering Excellence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-base md:text-lg mb-10 max-w-2xl"
          >
            12Twenty is a premier construction project management company headquartered at Suite
            H427 Ikota Shopping Complex VGC, Lagos. Since our founding in 2020, we have grown into a
            trusted partner for large-scale commercial, industrial, and infrastructure development
            projects across two continents.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
