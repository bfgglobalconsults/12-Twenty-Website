import ServicesHero from '@/components/ServicesHero'
import Image from 'next/image'
import Link from 'next/link'

export default function RoadworksCivilEngineeringPage() {
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
              ROADWORKS & CIVIL ENGINEERING
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Engineering the routes that move economies forward.
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              12Twenty Roadworks & Civil Engineering division delivers the critical infrastructure
              that underpins economic activity and urban development. From urban road networks and
              highway upgrades to bridge construction, drainage systems, and earthworks, our civil
              engineering team brings deep technical expertise and rigorous project governance to
              every scheme - no matter the scale or complexity.
            </p>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src="/assets/road.jpg"
                alt="Roadworks & Civil Engineering"
                fill
                className="object-cover"
              />
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">8+</div>
                <p className="text-sm">Civil Schemes Delivered</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">350km+</div>
                <p className="text-sm">Roads Constructed / Rehabilitated</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">Million+</div>
                <p className="text-sm">Civil Portfolio Value</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">No</div>
                <p className="text-sm">Major Structural Incidents</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">WHAT WE DO</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From engineering plans to infrastructure built to last
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We manage the full civil engineering lifecycle - from ground investigation and
                preliminary design through to construction, testing, and commissioning. Our
                experienced civil engineers and site supervisors work with reputable contractors to
                deliver compliant, durable infrastructure built to last. We apply internationally
                recognized standards (BS, AASHTO, FIDIC) and embed digital progress tracking across
                all works.
              </p>
            </div>

            {/* Capabilities */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">
                KEY SERVICE OFFERINGS
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
                      Road Construction & Rehabilitation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Urban and inter-city road construction and rehabilitation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Highway Design & Traffic Management
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Highway design coordination and traffic management.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Bridge Construction & Maintenance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Bridge construction, inspection, and maintenance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Stormwater & Flood Mitigation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Stormwater drainage and flood mitigation systems.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    05
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Earthworks & Slope Stabilisation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Earthworks, cut-and-fill, and slope stabilisation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    06
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Pavement Design & Surfacing
                    </h3>
                    <p className="text-gray-600 text-sm">Asphalt, concrete, and block paving.</p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    07
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Culverts & Geotechnical Works
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Culverts, retaining walls, and geotechnical works.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    08
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Markings, Signage & Street Furniture
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Road markings, signage, and street furniture installation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    09
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Environmental Impact Coordination
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Environmental impact assessment coordination.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    10
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Road Safety & Traffic Impact
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Road safety audits and traffic impact assessments.{' '}
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
                <h2 className="text-3xl font-bold text-white mb-2">
                  Engineering documentation that certifies.
                </h2>
                <p className="text-white/90 mb-8">
                  Engineering documentation that certifies every metre of road and every structure.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Design Drawings</h3>
                    <p className="text-gray-600 text-sm">
                      Approved construction drawings, cross-sections, and drainage layouts.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Materials Testing</h3>
                    <p className="text-gray-600 text-sm">
                      Laboratory and field test results for compaction, CBR, and asphalt quality.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Progress Reports</h3>
                    <p className="text-gray-600 text-sm">
                      Weekly site progress reports with photo records and programme updates.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">As-Built Drawings</h3>
                    <p className="text-gray-600 text-sm">
                      Final record drawings reflecting constructed conditions on the ground.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Inspection Certs</h3>
                    <p className="text-gray-600 text-sm">
                      Structural inspection certificates for bridges and drainage assets.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Completion Report</h3>
                    <p className="text-gray-600 text-sm">
                      Final works completion and defect-free handover documentation.
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
