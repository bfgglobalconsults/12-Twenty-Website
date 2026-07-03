import Image from 'next/image'

export default function OneUnifiedStructure() {
  return (
    <section className="bg-white text-gray-900 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-coral-500 text-sm font-semibold mb-6 block">About Us</span>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              One Unified Structure.
              <br />
              End-to-End
              <br />
              Accountability.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We are a full-service infrastructure delivery partner built for complexity. From
              initial feasibility through design, procurement, construction and handover, we embed
              certainty into every stage of the project lifecycle. Our integrated teams combine
              technical depth with commercial rigor, to deliver outcomes that meet schedule, budget
              and quality benchmarks every time.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[500px]">
            <Image
              src="/assets/construction-site.jpg"
              alt="Construction site"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
