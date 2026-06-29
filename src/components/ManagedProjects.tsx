import React from 'react'
import Image from 'next/image'

export default function ManagedProjects() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      title: 'Meridian Tower Residences',
      value: '$760M',
    },
    {
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      title: 'Meridian Tower Residences',
      value: '$760M',
    },
    {
      image: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800',
      title: 'Meridian Tower Residences',
      value: '$760M',
    },
  ]

  return (
    <section className="bg-white py-20 px-6 lg:py-32 lg:px-12">
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
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-[#E85D3F] font-bold text-lg">{project.value}</p>
              </div>

              <button className="w-full py-3 border border-[#E85D3F] text-[#E85D3F] rounded-full hover:bg-[#E85D3F] hover:text-white transition-all duration-300 font-medium text-sm">
                View Project Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
