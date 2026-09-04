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
      <section className="bg-gradient-to-br from-[#14212D] to-[#1a2936] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/services"
            className="text-[#F05C36] hover:text-[#d54d2d] inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">{service.shortDescription}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Key Features */}
        {service.keyFeatures && service.keyFeatures.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.keyFeatures.map((item: any, idx: number) => (
                <div key={idx} className="bg-[#FFF5F2] rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-[#F05C36] mb-2">{item.feature}</div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Capabilities */}
        {service.capabilities && service.capabilities.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.capabilities.map((capability: any, idx: number) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-700">{capability.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Deliverables */}
        {service.deliverables && service.deliverables.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Deliverables</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.deliverables.map((deliverable: any, idx: number) => (
                <div key={idx} className="bg-[#FFF5F2] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{deliverable.title}</h3>
                  {deliverable.description && (
                    <p className="text-gray-700 text-sm">{deliverable.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process */}
        {service.process && service.process.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step: any, idx: number) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F05C36] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.stepNumber}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Benefits */}
        {service.benefits && service.benefits.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((item: any, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#F05C36] flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">{item.benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-[#14212D] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your construction project challenges into
            extraordinary results.
          </p>
          <Link
            href={service.ctaLink || '/contact'}
            className="inline-block bg-[#F05C36] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d54d2d] transition-colors"
          >
            {service.ctaText || 'Get Started'}
          </Link>
        </section>
      </div>
    </div>
  )
}
