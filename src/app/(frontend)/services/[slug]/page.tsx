import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const services = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const service = services.docs[0]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/services"
            className="text-gray-400 hover:text-gray-600 inline-flex items-center gap-2 mb-8 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go Back
          </Link>

          <div className="flex items-start gap-8 mb-12">
            <div className="w-20 h-20 bg-[#F05C36] bg-opacity-10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-12 h-12 text-[#F05C36]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">{service.shortDescription}</p>
            </div>
          </div>

          {/* Hero Image */}
          {service.heroImage && typeof service.heroImage !== 'string' && service.heroImage.url && (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={service.heroImage.url}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Key Features Cards */}
          {service.keyFeatures && service.keyFeatures.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {service.keyFeatures.map((item: any, idx: number) => (
                <div key={idx} className="bg-[#F05C36] rounded-2xl p-6 text-white">
                  <div className="text-2xl font-bold mb-2">{item.feature}</div>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Full Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              From concept to construction-ready documentation.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Construction Design & Management service provides comprehensive project oversight
              from initial planning through to final execution. We ensure all regulatory
              requirements are met while maintaining design integrity and cost efficiency.
            </p>
          </div>

          {/* Process Steps */}
          {service.process && service.process.length > 0 && (
            <div className="mb-16">
              <div className="grid md:grid-cols-5 gap-6">
                {service.process.map((step: any, idx: number) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-[#F05C36] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {step.stepNumber}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Capabilities Grid */}
          {service.capabilities && service.capabilities.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Capabilities that drive every project forward.
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {service.capabilities.map((capability: any, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#F05C36] bg-opacity-10 rounded-lg flex items-center justify-center text-[#F05C36] font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                      <p className="text-gray-600 text-sm">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables Section */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div className="mb-16">
              <div className="bg-[#F05C36] rounded-3xl p-12">
                <h2 className="text-3xl font-bold text-white mb-2">Clear, coordinated outputs.</h2>
                <p className="text-white/90 mb-8">
                  We deliver a comprehensive set of project documentation ensuring your construction
                  management needs are met.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.deliverables.map((deliverable: any, idx: number) => (
                    <div key={idx} className="bg-white rounded-2xl p-6">
                      <div className="w-10 h-10 bg-[#F05C36] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                        <svg
                          className="w-6 h-6 text-[#F05C36]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{deliverable.title}</h3>
                      {deliverable.description && (
                        <p className="text-gray-600 text-sm">{deliverable.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="flex items-center justify-between py-8 border-t border-gray-200">
            <Link
              href="/services"
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
              All Services
            </Link>
            <Link
              href={service.ctaLink || '/contact'}
              className="inline-block bg-[#F05C36] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d54d2d] transition-colors"
            >
              {service.ctaText || 'REQUEST PROPOSAL OR DISCOVERY CALL'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
