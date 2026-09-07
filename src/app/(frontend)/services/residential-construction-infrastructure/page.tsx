import ServicesHero from '@/components/ServicesHero'
import Image from 'next/image'
import Link from 'next/link'

export default function ResidentialConstructionPage() {
  return (
    <>
      <ServicesHero />
      <div className="min-h-screen bg-white">
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/services"
              className="text-gray-400 hover:text-gray-600 inline-flex items-center gap-2 mb-8 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Go Back
            </Link>

            <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">
              RESIDENTIAL CONSTRUCTION & INFRASTRUCTURE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Creating homes, communities, and the infrastructure that connects them.
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              12Twenty delivers premium residential construction and supporting infrastructure
              across a wide spectrum of project types - from luxury private estates to large-scale
              affordable housing and mixed-use residential communities. We manage every aspect of
              the residential construction process with the same rigour, precision, and client focus
              that defines our commercial and industrial portfolio.
            </p>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src="/assets/resid.jpg"
                alt="Residential Construction"
                fill
                className="object-cover"
              />
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">12+</div>
                <p className="text-sm">Residential Units Delivered</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">95%</div>
                <p className="text-sm">On-Time Handover Rate</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">12 month</div>
                <p className="text-sm">Post-Handover Support</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">Multi-million</div>
                <p className="text-sm">Residential Portfolio value</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">WHAT WE D</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From vision to fully built residential environments
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our residential service spans site preparation, substructure and superstructure
                works, finishing, landscaping, and infrastructure provision. We coordinate all
                trades and subcontractors under a robust project management framework, ensuring
                quality control at every stage. For large developments, we integrate community
                infrastructure planning - roads, drainage, utilities, and public realm delivering
                complete, liveable environments.
              </p>
            </div>

            {/* Capabilities */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">
                RESIDENTIAL CAPABILITIES
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Capabilities that drive every project forward.
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      New Residential Development Management
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Project management for private, affordable, and mixed-use residential
                      schemes.{' '}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Luxury & Multi-Unit Construction
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Bungalow, duplex, terrace, and apartment construction.{' '}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Estate Master Planning & Phasing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Estate development master planning and phased delivery.{' '}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Site Preparation & Earthworks
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Site preparation, earthworks, and drainage systems.{' '}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    05
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Substructure & Superstructure Works{' '}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Substructure and superstructure works supervision.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    06
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Finishing & Fit-Out Management
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Kitchens, bathrooms, joinery, and tiling.{' '}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    07
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Landscaping & External Works
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Landscaping, external works, and boundary treatments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    08
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Community Infrastructure
                    </h3>
                    <p className="text-gray-600 text-sm">
                      On-site roads, utilities, lighting, and drainage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    09
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Defects Liability & Post-Handover
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Defects liability management and post-handover support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    10
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Client & Stakeholder Reporting
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Client and stakeholder reporting throughout construction.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-16">
              <div className="bg-[#F05C36] rounded-3xl p-12">
                <p className="text-white/90 text-sm font-semibold mb-2 uppercase">
                  OUR DELIVERABLES
                </p>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Outputs that keep every residential.
                </h2>
                <p className="text-white/90 mb-8">
                  We deliver a comprehensive set of project documentation ensuring your construction
                  management needs are met.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F05C36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chart-candlestick"
                      >
                        <path d="M9 5v4" />
                        <rect width="4" height="6" x="7" y="9" rx="1" />
                        <path d="M9 15v2" />
                        <path d="M17 3v2" />
                        <rect width="4" height="8" x="15" y="5" rx="1" />
                        <path d="M17 13v3" />
                        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Site Inspection Reports
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Weekly photographic and written reports on construction progress and
                      quality.{' '}
                    </p>
                    <div className="border-t-2 border-[#F05C36] my-2"></div>
                  </div>
                  <div className="bg-white rounded-2xl p-6">
                    <div className="mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F05C36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chart-candlestick"
                      >
                        <path d="M9 5v4" />
                        <rect width="4" height="6" x="7" y="9" rx="1" />
                        <path d="M9 15v2" />
                        <path d="M17 3v2" />
                        <rect width="4" height="8" x="15" y="5" rx="1" />
                        <path d="M17 13v3" />
                        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Programme Updates</h3>
                    <p className="text-gray-600 text-sm">
                      Fortnightly schedule updates with look-ahead activities and risk flags.{' '}
                    </p>
                    <div className="border-t-2 border-[#F05C36] my-2"></div>
                  </div>
                  <div className="bg-white rounded-2xl p-6">
                    <div className="mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F05C36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chart-candlestick"
                      >
                        <path d="M9 5v4" />
                        <rect width="4" height="6" x="7" y="9" rx="1" />
                        <path d="M9 15v2" />
                        <path d="M17 3v2" />
                        <rect width="4" height="8" x="15" y="5" rx="1" />
                        <path d="M17 13v3" />
                        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Reports</h3>
                    <p className="text-gray-600 text-sm">
                      Monthly cost plan vs actual tracking with forecast final account.
                    </p>
                    <div className="border-t-2 border-[#F05C36] my-2"></div>
                  </div>
                  <div className="bg-white rounded-2xl p-6">
                    <div className="mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F05C36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chart-candlestick"
                      >
                        <path d="M9 5v4" />
                        <rect width="4" height="6" x="7" y="9" rx="1" />
                        <path d="M9 15v2" />
                        <path d="M17 3v2" />
                        <rect width="4" height="8" x="15" y="5" rx="1" />
                        <path d="M17 13v3" />
                        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Records</h3>
                    <p className="text-gray-600 text-sm">
                      Inspection & Test Plans (ITPs) and material approval documentation.
                    </p>
                    <div className="border-t-2 border-[#F05C36] my-2"></div>
                  </div>
                  <div className="bg-white rounded-2xl p-6">
                    <div className="mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F05C36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chart-candlestick"
                      >
                        <path d="M9 5v4" />
                        <rect width="4" height="6" x="7" y="9" rx="1" />
                        <path d="M9 15v2" />
                        <path d="M17 3v2" />
                        <rect width="4" height="8" x="15" y="5" rx="1" />
                        <path d="M17 13v3" />
                        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Handover Package</h3>
                    <p className="text-gray-600 text-sm">
                      O&M manuals, warranties, as-built drawings, and defects schedule.
                    </p>
                    <div className="border-t-2 border-[#F05C36] my-2"></div>
                  </div>
                  <div className="bg-white rounded-2xl p-6">
                    <div className="mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F05C36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chart-candlestick"
                      >
                        <path d="M9 5v4" />
                        <rect width="4" height="6" x="7" y="9" rx="1" />
                        <path d="M9 15v2" />
                        <path d="M17 3v2" />
                        <rect width="4" height="8" x="15" y="5" rx="1" />
                        <path d="M17 13v3" />
                        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Infrastructure Sign-off
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Signed-off roads, utilities, drainage, and public realm certification.
                    </p>
                    <div className="border-t-2 border-[#F05C36] my-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between py-8 border-t border-gray-200">
              <Link
                href="/services"
                className="text-gray-400 hover:text-gray-600 inline-flex items-center gap-2 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                All Services
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-[#F05C36] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d54d2d] transition-colors"
              >
                REQUEST PROPOSAL OR DISCOVERY CALL
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
