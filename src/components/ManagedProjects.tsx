import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function ManagedProjects() {
  const payload = await getPayload({ config: configPromise })

  const projectsData = await payload.find({
    collection: 'projects',
    limit: 6,
    where: {
      status: {
        equals: 'completed',
      },
    },
    sort: '-createdAt',
  })

  return (
    <section className="bg-white py-10 px-6 lg:py-12 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block mb-6">
          Other Projects
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Managed
          <br />
          Projects
        </h2>

        <p className="text-gray-600 text-base lg:text-lg mb-16 max-w-3xl">
          A selection of delivered infrastructure representing technical complexity and commercial
          scale.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.docs.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6 shadow-lg">
                {project.featuredImage &&
                typeof project.featuredImage !== 'string' &&
                project.featuredImage.url ? (
                  <Image
                    src={project.featuredImage.url}
                    alt={project.title}
                    width={400}
                    height={500}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
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

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-[#E85D3F] font-bold text-lg">{project.value}</p>
              </div>

              <Link href={`/projects/${project.slug}`}>
                <button className="w-full py-3 border border-[#E85D3F] text-[#E85D3F] rounded-full hover:bg-[#E85D3F] hover:text-white transition-all duration-300 font-medium text-sm">
                  View Project Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
