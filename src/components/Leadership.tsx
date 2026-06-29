import React from 'react'
import Image from 'next/image'

export default function Leadership() {
  const leaders = [
    {
      name: 'Richard Caldwell',
      title: 'Managing Director',
      credentials: 'PMP  RICS  CIOB',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    },
    {
      name: 'Elena Vasquez',
      title: 'Chief Operating Officer',
      credentials: 'PMP  CMAA',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    },
    {
      name: 'James Thornton',
      title: 'Technical Director',
      credentials: 'CIOB  RICS',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Sarah Whitfield',
      title: 'Commercial Director',
      credentials: 'PMP  RICS',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    },
  ]

  return (
    <section className="bg-white py-20 px-6 lg:py-32 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#E85D3F] font-medium text-sm tracking-wide uppercase block mb-6">
          Leadership
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Governed By Experience.
          <br />
          Led By Accountability.
        </h2>

        <p className="text-gray-600 text-base lg:text-lg mb-16 max-w-5xl">
          Our executive team brings decades of combined experience across construction management,
          engineering, commercial governance, and institutional delivery.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="mb-6 rounded-3xl overflow-hidden bg-gray-100 aspect-[3/4]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-[#E85D3F] text-sm font-medium mb-3">{leader.title}</p>
                <p className="text-gray-900 text-sm font-medium tracking-wider">
                  {leader.credentials}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
