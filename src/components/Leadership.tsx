export default function Leadership() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-coral-500 text-sm font-semibold mb-6 block">Leadership</span>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Governed By Experience.
          <br />
          Led By Accountability.
        </h2>

        <p className="text-gray-600 text-lg mb-12 max-w-4xl">
          Our executive team brings decades of combined experience across construction management,
          engineering, commercial governance, and institutional delivery.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="bg-gray-200 rounded-2xl h-64 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Richard Caldwell</h3>
            <p className="text-coral-500 font-semibold mb-3">Managing Director</p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">PMP</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">RICS</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">CIOB</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Institutional delivery, capital programmes, and board-level stakeholder governance
              across Europe and the Middle East.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="bg-gray-200 rounded-2xl h-64 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Elena Vasquez</h3>
            <p className="text-coral-500 font-semibold mb-3">Chief Operating Officer</p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">PMP</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">CMAA</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Operational excellence, supply chain optimization, and large-scale programme delivery
              across residential and commercial sectors.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="bg-gray-200 rounded-2xl h-64 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">James Thornton</h3>
            <p className="text-coral-500 font-semibold mb-3">Technical Director</p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">CIOB</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">RICS</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              BIM integration, structural engineering oversight, and design coordination for complex
              multi-disciplinary infrastructure projects.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="bg-gray-200 rounded-2xl h-64 mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Whitfield</h3>
            <p className="text-coral-500 font-semibold mb-3">Commercial Director</p>
            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">PMP</span>
              <span className="text-xs border border-gray-300 px-3 py-1 rounded-full">MRICS</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Commercial governance, contract strategy, risk allocation, and financial controls for
              high-value capital projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
