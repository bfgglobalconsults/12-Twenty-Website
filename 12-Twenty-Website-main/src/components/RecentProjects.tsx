import React from 'react'
import Image from 'next/image'
import { getPayload } from '@/utilities/getPayload'
import type { Project } from '@/payload-types'

export default async function RecentProjects() {
  const payload = await getPayload()

  const projectsData = await payload.find({
    collection: 'projects',
    limit: 3,
    where: {
      status: {
        equals: 'completed',
      },
    },
    sort: '-createdAt',
  })

  const projects = projectsData.docs.map((project: Project, index: number) => ({
    image:
      typeof project.featuredImage === 'object' && project.featuredImage
        ? project.featuredImage.url
        : '',
    category: project.category?.toUpperCase().replace('-', ' / '),
    year: project.year,
    title: project.title,
    value: project.value,
    deliveryChallenge: project.deliveryChallenge,
    managementOutcome: project.managementOutcome,
    imagePosition: index % 2 === 0 ? 'left' : 'right',
  }))

  return (
    <section className="bg-white py-10 px-6 lg:py-12 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block mb-6">
          Recent Projects
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Delivered With Certainty.
          <br />
          Protected By NDA.
        </h2>

        <p className="text-gray-600 text-base lg:text-lg mb-16 max-w-4xl">
          A selection of recent engagements representing technical complexity, commercial scale and
          delivery precision across multiple sectors.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                project.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={project.imagePosition === 'right' ? 'lg:col-start-2' : ''}>
                <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-200">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <svg
                        className="w-24 h-24 text-gray-400"
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
                </div>
              </div>

              {/* Content */}
              <div
                className={project.imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#E85D3F] font-medium text-xs tracking-wide uppercase">
                    {project.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600 text-sm">{project.year}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-[#E85D3F] font-bold text-xl mb-6">{project.value}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      DELIVERY CHALLENGE
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.deliveryChallenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">
                      MANAGEMENT OUTCOME
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.managementOutcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-3 border border-[#E85D3F] text-[#E85D3F] rounded-full hover:bg-[#E85D3F] hover:text-white transition-all duration-300 font-medium">
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
