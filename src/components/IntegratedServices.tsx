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
  deliverables?: Array<{ title: string; description?: string | null; id?: string | null }> | null
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
                <div className="w-16 h-16 bg-[#F05C36] bg-opacity-10 rounded-lg flex items-center justify-center">
                  {service.image && typeof service.image !== 'string' ? (
                    <Image
                      src={service.image.url}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  ) : (
                    <svg
                      className="w-10 h-10 text-[#F05C36]"
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
                  <p className="text-xs text-gray-900 font-bold mb-4 uppercase">Key Outputs</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.deliverables.slice(0, 4).map((deliverable, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#F05C36] mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{deliverable.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
