import Image from 'next/image'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Leadership() {
  const payload = await getPayload({ config: configPromise })

  const teamData = await payload.find({
    collection: 'team',
    sort: 'order',
    limit: 100,
  })
  return (
    <section className="bg-white py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-coral-500 text-sm font-semibold mb-6 block">LEADERSHIP</span>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Governed By Experience.
          <br />
          Led By Accountability.
        </h2>

        <p className="text-gray-600 text-lg mb-12 max-w-4xl">
          Our executive team brings decades of combined experience across construction management,
          engineering, commercial governance, and institutional delivery.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamData.docs.map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-3xl p-8">
              <div className="bg-gray-200 rounded-2xl h-64 mb-6 relative overflow-hidden">
                {member.photo && typeof member.photo !== 'string' && member.photo.url ? (
                  <Image src={member.photo.url} alt={member.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-coral-500 font-semibold mb-3">{member.position}</p>
              {member.expertise && member.expertise.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((exp: any, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs border border-gray-300 px-3 py-1 rounded-full"
                    >
                      {exp.area}
                    </span>
                  ))}
                </div>
              )}
              {member.bio && <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
