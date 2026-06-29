import React from 'react'
import Image from 'next/image'

export default function RecentProjects() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      category: 'COMMERCIAL / MIXED-USE',
      year: '2021 - 2024',
      title: 'Commercial High-Rise Development',
      value: '$762M',
      deliveryChallenge:
        'Phased construction above an live navigation hub with zero disruption to daily commuter traffic.',
      managementOutcome:
        'Delivered on budget with N+2.5 schedule adherence. Achieved LEED platinum certification.',
      imagePosition: 'left',
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      category: 'RESIDENTIAL / LUXURY',
      year: '2023 - 2025',
      title: 'Luxury Multi-Family Residential Complex',
      value: '$420M',
      deliveryChallenge:
        'Coordinating 15 specialist trade contractors across a constrained waterfront site with tidal environmental compliance.',
      managementOutcome:
        'Zero environmental incidents. 98% first fix quality rate. Pre-sold 95% of unit of completion.',
      imagePosition: 'right',
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      category: 'CIVIL / GOVERNMENT',
      year: '2020 - 2024',
      title: 'National Infrastructure Upgrade Programme',
      value: '$1.8B',
      deliveryChallenge:
        'Managing 240km of highway upgrades, 18 bridge replacements, and smart highway technology integration under live traffic conditions.',
      managementOutcome:
        'Completed 6 months ahead of programme. Zero serious safety incidents across 1200+ operative workforce.',
      imagePosition: 'left',
    },
  ]

  return (
    <section className="bg-white py-20 px-6 lg:py-32 lg:px-12">
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
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
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
