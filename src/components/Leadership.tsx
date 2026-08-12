import Image from 'next/image'

export default function Leadership() {
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
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="bg-gray-200 rounded-2xl h-64 mb-6 relative overflow-hidden">
              <Image
                src="/assets/12TwentyMD.png"
                alt="Mr Prince - MD/CEO"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr Prince</h3>
            <p className="text-coral-500 font-semibold mb-3">MD/CEO</p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">PMP</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">RICS</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">CIOB</span>
            </div>
           
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="bg-gray-200 rounded-2xl h-64 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Elena Vasquez</h3>
            <p className="text-coral-500 font-semibold mb-3">Chief Operating Officer</p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">PMP</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">CMAA</span>
            </div>
           
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="bg-gray-200 rounded-2xl h-64 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">James Thornton</h3>
            <p className="text-coral-500 font-semibold mb-3">Technical Director</p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">CIOB</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">RICS</span>
            </div>
           
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="bg-gray-200 rounded-2xl h-64 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Whitfield</h3>
            <p className="text-coral-500 font-semibold mb-3">Commercial Director</p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">PMP</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">MRICS</span>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}
