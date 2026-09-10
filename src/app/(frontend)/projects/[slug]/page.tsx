import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const revalidate = 60 // Revalidate every 60 seconds

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = projects.docs[0]

  if (!project) {
    notFound()
  }

  const getCategoryLabel = (category: string) => {
    return category?.toUpperCase().replace('-', ' / ') || ''
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh]">
        {project.featuredImage &&
        typeof project.featuredImage !== 'string' &&
        project.featuredImage.url ? (
          <Image
            src={project.featuredImage.url}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />

        <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <Link
            href="/projects"
            className="text-white/80 hover:text-white inline-flex items-center gap-2 mb-8 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#F05C36] font-medium text-xs tracking-wide uppercase">
              {getCategoryLabel(project.category)}
            </span>
            <span className="text-white/60">•</span>
            <span className="text-white/80 text-sm">{project.year}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-[#F05C36] font-bold text-2xl">{project.value}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Delivery Challenge */}
          {project.deliveryChallenge && (
            <div className="mb-12">
              <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Delivery Challenge
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">{project.deliveryChallenge}</p>
            </div>
          )}

          {/* Management Outcome */}
          {project.managementOutcome && (
            <div className="mb-12">
              <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Management Outcome
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">{project.managementOutcome}</p>
            </div>
          )}

          {/* Project Description */}
          {project.description && (
            <div className="mb-12">
              <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Project Overview
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
            </div>
          )}

          {/* Location & Client */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {project.location && (
              <div>
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Location
                </h3>
                <p className="text-gray-700">{project.location}</p>
              </div>
            )}
            {project.client && (
              <div>
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">
                  Client
                </h3>
                <p className="text-gray-700">{project.client}</p>
              </div>
            )}
          </div>

          {/* Additional Images */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-6">
                Project Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((item: any, idx: number) => {
                  const image = typeof item.image !== 'string' ? item.image : null
                  return image?.url ? (
                    <div key={idx} className="relative h-80 rounded-2xl overflow-hidden">
                      <Image
                        src={image.url}
                        alt={`Gallery ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="border-t border-gray-200 pt-8 flex items-center justify-between">
            <Link
              href="/projects"
              className="text-gray-400 hover:text-gray-600 inline-flex items-center gap-2 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-[#F05C36] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d54d2d] transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
