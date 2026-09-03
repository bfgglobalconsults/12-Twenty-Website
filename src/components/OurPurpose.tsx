export default function OurPurpose() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#D4572A] text-sm font-medium mb-4">Our Purpose</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Governed By Experience.
            <br />
            Led By Accountability.
          </h2>
        </div>

        {/* Mission Section */}
        <div className="bg-[#FFF5F2] rounded-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#D4572A] rounded flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
          </div>
          <p className="text-[#D4572A] text-sm font-medium mb-3">Our Mission</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Transforming Complex Challenges Into Extraordinary Built Environments
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver world-class construction project management services that transform complex
            challenges into extraordinary built environments on time, on budget, and beyond
            expectation.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-[#FFF5F2] rounded-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#D4572A] rounded flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
          </div>
          <p className="text-[#D4572A] text-sm font-medium mb-3">Our Vision</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Africa and the Middle East's Most Trusted Premium Construction Management Brand
          </h3>
          <p className="text-gray-700 leading-relaxed">
            To be Africa and the Middle East's most trusted premium construction management brand by
            2030 — leading the digital transformation of the built environment.
          </p>
        </div>
      </div>
    </section>
  )
}
