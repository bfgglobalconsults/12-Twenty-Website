export default function OurStory() {
  return (
    <section className="bg-white text-gray-900 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-coral-500 text-sm font-semibold mb-6 block">Our Story</span>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Where It Started.
              <br />
              How We Grew
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              I2 Twenty was founded on a simple conviction: construction delivery should not be
              fragmented. For decades, the industry has suffered from siloed accountability — where
              designers, contractors, and consultants operate in isolation, passing risk downstream
              without ownership.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We solve this by managing projects under one unified structure. A single point of
              accountability from concept to completion, backed by integrated teams, transparent
              reporting, and systems-driven operational control.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <span className="text-coral-500 text-sm font-semibold mb-6 block">Our Philosophy</span>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            Our philosophy is rooted in lifespan thinking. Every decision we make considers the
            long-term performance, maintainability, and asset value of the infrastructure we
            deliver. We do not simply build. We engineer outcomes that endure.
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8 text-white">Integrated Delivery Model</h3>
          <p className="text-white/90 text-lg mb-12 max-w-4xl leading-relaxed">
            Our Integrated Delivery Model combines project management, design coordination,
            procurement intelligence, site supervision, and facility planning into one governed
            program. This eliminates the traditional gaps between phases and ensures continuity of
            knowledge, accountability, and quality.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-coral-500 rounded-2xl p-8">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div className="bg-coral-500 rounded-2xl p-8">
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-white/90">Projects Managed</div>
            </div>
            <div className="bg-coral-500 rounded-2xl p-8">
              <div className="text-5xl font-bold mb-2">$2.4B</div>
              <div className="text-white/90">Managed Portfolio Value</div>
            </div>
            <div className="bg-coral-500 rounded-2xl p-8">
              <div className="text-4xl font-bold mb-2">Multi-Sector</div>
              <div className="text-white/90">Delivery Capability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
