'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Insight {
  id: string
  title: string
  slug: string
  featuredImage: {
    url: string
    alt?: string
  }
  excerpt: string
  category: string
  publishedDate: string
}

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [insights, setInsights] = useState<Insight[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchInsights()
  }, [])

  const fetchInsights = async () => {
    try {
      const response = await fetch('/api/insights?status=published&limit=50')
      const data = await response.json()
      setInsights(data.docs || [])
    } catch (error) {
      console.error('Error fetching insights:', error)
    } finally {
      setLoading(false)
    }
  }

  const filters = [
    'All',
    'Case Study',
    'Case Blog',
    'Leadership',
    'Digital Transformation',
    'Research',
    'Career Development',
    'Technology',
  ]

  const filteredInsights = insights.filter((insight) => {
    const categoryLabel =
      insight.category === 'case-study'
        ? 'Case Study'
        : insight.category === 'case-blog'
          ? 'Case Blog'
          : insight.category === 'digital-transformation'
            ? 'Digital Transformation'
            : insight.category === 'career-development'
              ? 'Career Development'
              : insight.category.charAt(0).toUpperCase() + insight.category.slice(1)

    const matchesFilter = activeFilter === 'All' || categoryLabel === activeFilter
    const matchesSearch =
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'case-study': 'Case Study',
      'case-blog': 'Case Blog',
      leadership: 'Leadership',
      'digital-transformation': 'Digital Transformation',
      research: 'Research',
      'career-development': 'Career Development',
      technology: 'Technology',
    }
    return labels[category] || category
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/insights-hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col  pt-24 md:pt-32">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block mb-4 mt-[50px]"
            >
              Resources
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Insights & Resources
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/90 text-base md:text-lg max-w-2xl"
            >
              Discover best practices, case studies, and expert perspectives from our delivery
              leadership team. These insights reflect real-world complexity and help our partners
              navigate their digital infrastructure projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full px-6 py-4 pr-12 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#E85D3F] text-gray-900 placeholder-gray-400"
              />
              <svg
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Filter Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#E85D3F] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <Link href={`/insights/${insight.slug}`} key={index}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  {insight.featuredImage?.url ? (
                    <Image
                      src={insight.featuredImage.url}
                      alt={insight.featuredImage?.alt || insight.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <svg
                        className="w-20 h-20 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#E85D3F] text-white px-4 py-1 rounded-full text-xs font-semibold">
                      {getCategoryLabel(insight.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-3">{formatDate(insight.publishedDate)}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3 group-hover:text-[#E85D3F] transition-colors">
                    {insight.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[#E85D3F] font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </motion.article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            <button className="w-10 h-10 rounded-full bg-[#E85D3F] text-white flex items-center justify-center hover:bg-[#d54d2d] transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors">
              3
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
