import React from 'react'
import Image from 'next/image'

export default function LatestBlogs() {
  const blogs = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      readTime: '6 min read',
      title: 'Legal Essentials: Understanding Documentation In Real Estate Transactions',
    },
    {
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      readTime: '6 min read',
      title: 'The Importance Of Property Valuation: Getting The Best Price For Your Home',
    },
    {
      image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800',
      readTime: '6 min read',
      title: 'How To Choose The Right Property Partner For Your Needs',
    },
  ]

  return (
    <section className="bg-white py-20 px-6 lg:py-32 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
          Latest Blogs & Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs text-gray-600 mb-4">
                  {blog.readTime}
                </span>
                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#E85D3F] transition-colors">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 border border-[#E85D3F] text-[#E85D3F] rounded-full hover:bg-[#E85D3F] hover:text-white transition-all duration-300 font-medium">
            View More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
