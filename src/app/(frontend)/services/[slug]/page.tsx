import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { Service } from '@/payload-types'

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const services = await payload.find({
    collection: 'services',
    limit: 100,
  })

  return services.docs.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const payload = await getPayloadHMR({ config })
  const services = await payload.find({
    collection: 'services',
    where: { slug: { equals: params.slug } },
    limit: 1,
  })

  const service = services.docs[0] as Service

  if (!service) {
    return {}
  }

  return {
    title: `${service.title} | 12Twenty`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const payload = await getPayloadHMR({ config })
  const services = await payload.find({
    collection: 'services',
    where: { slug: { equals: params.slug } },
    limit: 1,
  })

  const service = services.docs[0] as Service

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#D4572A] text-sm font-medium mb-4 uppercase tracking-wide">
            Construction Project Management
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {service.title}
          </h1>
          {service.shortDescription && (
            <p className="text-lg text-gray-700 leading-relaxed">{service.shortDescription}</p>
          )}
        </div>
      </section>

      {/* Hero Image */}
      {service.heroImage && typeof service.heroImage !== 'string' && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={service.heroImage.url || ''}
                alt={service.heroImage.alt || ''}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Stats/Key Metrics */}
      {service.keyFeatures && service.keyFeatures.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.keyFeatures.slice(0, 4).map((item, index) => (
                <div key={index} className="bg-[#D4572A] text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">{item.feature}</div>
                  {item.description && <p className="text-sm opacity-90">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Description */}
      {service.fullDescription && (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: service.fullDescription as any }}
            />
          </div>
        </section>
      )}

      {/* Process Steps */}
      {service.process && service.process.length > 0 && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              {service.process
                .sort((a, b) => (a.stepNumber || 0) - (b.stepNumber || 0))
                .map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-[#D4572A] text-white rounded-full flex items-center justify-center font-bold text-xl mb-2">
                        {step.stepNumber}
                      </div>
                      <p className="text-sm font-medium text-center max-w-[100px]">{step.title}</p>
                    </div>
                    {index < service.process!.length - 1 && (
                      <div className="w-12 h-0.5 bg-gray-300 mx-2" />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities Section */}
      {service.capabilities && service.capabilities.length > 0 && (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Capabilities that drive every project forward.
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.capabilities.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#FFF5F2] text-[#D4572A] rounded-full flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Section */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-[#D4572A] rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Clear, coordinated outputs.
            </h2>
            <p className="text-white opacity-90 mb-12">
              Every deliverable is designed to keep your project on track and stakeholders aligned.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {service.deliverables.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="w-10 h-10 bg-[#FFF5F2] text-[#D4572A] rounded flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-600">All Services</span>
            <Link
              href={service.ctaLink || '/contact'}
              className="bg-[#D4572A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B94622] transition"
            >
              {service.ctaText || 'REQUEST PROPOSAL OR DISCOVERY CALL'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
