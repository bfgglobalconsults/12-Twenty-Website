import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Insight {
  id: string
  title: string
  slug: string
  excerpt?: string
  publishedDate: string
  category: string
  featuredImage?: {
    url: string
    alt?: string
  }
}

interface LatestBlogsProps {
  insights?: Insight[]
}

export default function LatestBlogs({ insights = [] }: LatestBlogsProps) {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <section className="bg-white py-20 px-6 lg:py-32 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
          Latest Blogs & Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.length > 0 ? (
            insights.map((insight) => (
              <Link key={insight.id} href={`/insights/${insight.slug}`} className="group">
                <div className="rounded-3xl overflow-hidden mb-6 shadow-lg">
                  {insight.featuredImage &&
                  typeof insight.featuredImage !== 'string' &&
                  insight.featuredImage.url ? (
                    <Image
                      src={insight.featuredImage.url}
                      alt={insight.featuredImage.alt || insight.title}
                      width={400}
                      height={300}
                      className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-[250px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs text-gray-600">
                      {getCategoryLabel(insight.category)}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(insight.publishedDate)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#E85D3F] transition-colors">
                    {insight.title}
                  </h3>
                  {insight.excerpt && (
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{insight.excerpt}</p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No insights available yet.</p>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#E85D3F] text-[#E85D3F] rounded-full hover:bg-[#E85D3F] hover:text-white transition-all duration-300 font-medium"
          >
            View More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
