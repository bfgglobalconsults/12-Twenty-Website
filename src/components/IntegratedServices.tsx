import Image from 'next/image'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

interface ServiceDoc {
  id: string
  title: string
  slug: string
  shortDescription: string
  image?: {
    url: string
  }
  deliverables?: Array<{ item: string }>
}

export default async function IntegratedServices() {
  const payload = await getPayload({ config: configPromise })

  const services = await payload.find({
    collection: 'services',
    where: { featured: { equals: true } },
    sort: 'order',
    limit: 10,
  })

  return (
    <section className="bg-[#14212D] py-20 rounded-2xl my-4 px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-white text-sm font-semibold mb-6 block">Our Expertise</span>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
          Integrated Services.
          <br />
          Lifelong Accountability.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.docs.map((service: ServiceDoc) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  {service.image && typeof service.image !== 'string' && (
                    <Image
                      src={service.image.url}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  )}
                </div>
                <svg
                  className="w-6 h-6 text-[#F05C36] group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.shortDescription}</p>

              {service.deliverables && service.deliverables.length > 0 && (
                <div className="border-t border-[#F05C36] pt-6">
                  <p className="text-xs text-gray-500 font-semibold mb-3 uppercase">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable: any, idx: number) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-coral-500 mr-2">—</span>
                        {deliverable.item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
