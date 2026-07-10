'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative h-[150vh] lg:h-[200vh] bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/hero-image.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col md:justify-center pt-[140px] md:pt-[20px]">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-coral-500 text-white px-4 py-2 rounded-full text-xs md:text-sm mb-6 backdrop-blur-sm"
          >
            ENTERPRISE INFRASTRUCTURE PARTNER
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Delivering Certainty
            <br />
            From Concept to
            <br />
            Completion.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-base md:text-lg mb-10 max-w-xl"
          >
            A premium construction project management and infrastructure delivery company managing
            complex projects with precision, transparency and accountability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 flex items-center justify-center gap-2 font-semibold"
            >
              Start a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 font-semibold"
            >
              View Managed Projects
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-4 md:p-6 max-w-md border-2 border-coral-500"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-${300 + i * 100} border-2 border-white`}
                  />
                ))}
              </div>
              <div>
                <p className="text-black font-semibold text-base md:text-lg">50K+ Happy Clients</p>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.2 + i * 0.05 }}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <span className="text-black/90 text-sm ml-1">4.8/5</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-black text-xs md:text-sm">
              {['ISO Certified', 'BIM Enabled', '97% On-Time Delivery', 'Zero LTI Record'].map(
                (text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
                    className={`text-center ${i > 0 ? 'border-l border-coral-500' : ''}`}
                  >
                    <div className="font-semibold">{text}</div>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
