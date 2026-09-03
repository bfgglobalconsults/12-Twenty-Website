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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {service.heroImage && typeof service.heroImage !== 'string' && (
          <div className="absolute inset-0">
            <Image
              src={service.heroImage.url || ''}
              alt={service.heroImage.alt || ''}
              fill
              className="object-cover opacity-20"
            />
          </div>
        )}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-700">{service.shortDescription}</p>
        </div>
      </section>

      {/* Description Section */}
      {service.fullDescription && (
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: service.fullDescription as any }}
          />
        </section>
      )}

      {/* Key Features */}
      {service.keyFeatures && service.keyFeatures.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.keyFeatures.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{item.feature}</h3>
                  {item.description && <p className="text-gray-700">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {service.process && service.process.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
            <div className="space-y-8">
              {service.process
                .sort((a, b) => (a.stepNumber || 0) - (b.stepNumber || 0))
                .map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.stepNumber}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                      {step.description && <p className="text-gray-700">{step.description}</p>}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-700">{benefit.benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">Let's bring your vision to life</p>
          <Link
            href={service.ctaLink || '/contact'}
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            {service.ctaText || 'Get Started'}
          </Link>
        </div>
      </section>
    </div>
  )
}
