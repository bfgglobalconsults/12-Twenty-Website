import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import ConsultationButton from '@/components/ConsultationButton'
import { motion } from 'framer-motion'
import { RichText } from '@payloadcms/richtext-lexical/react'

interface InsightPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const insights = await payload.find({
    collection: 'insights',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2, // Populate relationships like featuredImage
  })

  const insight = insights.docs[0]

  if (!insight) {
    notFound()
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
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
            <span className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block mb-4 mt-[50px]">
              Resources
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Insights & Resources
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-2xl">
              Discover best practices, case studies, and expert perspectives from our delivery
              leadership team. These insights reflect real-world complexity and help our partners
              navigate their digital infrastructure projects.
            </p>
          </div>
        </div>
      </section>
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/insights"
          className="text-[#E85D3F] hover:text-[#d54d2d] inline-flex items-center gap-2 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Insights
        </Link>

        {/* Category & Date */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-[#E85D3F] text-white px-4 py-1 rounded-full text-sm font-semibold">
            {getCategoryLabel(insight.category)}
          </span>
          <span className="text-gray-500 text-sm">{formatDate(insight.publishedDate)}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{insight.title}</h1>

        {/* Excerpt */}
        {insight.excerpt && <p className="text-xl text-gray-600 mb-8">{insight.excerpt}</p>}

        {/* Featured Image */}
        {insight.featuredImage &&
          typeof insight.featuredImage !== 'string' &&
          insight.featuredImage.url && (
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={insight.featuredImage.url}
                alt={insight.featuredImage.alt || insight.title}
                fill
                className="object-cover"
              />
            </div>
          )}

        {/* Content */}
        <div className="prose prose-lg prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-700 prose-a:text-[#E85D3F] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:list-disc prose-ol:list-decimal max-w-none">
          {insight.content && <RichText data={insight.content} />}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[#FFF5F2] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to learn more about our services?
          </h2>
          <p className="text-gray-600 mb-6">
            Discover how we can help transform your construction project challenges.
          </p>
          <ConsultationButton className="inline-block bg-[#E85D3F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d54d2d] transition-colors">
            Get in Touch
          </ConsultationButton>
        </div>
      </article>
    </div>
  )
}
