import ServicesHero from '@/components/ServicesHero'
import Image from 'next/image'
import Link from 'next/link'

export default function FacilityMaintenancePage() {
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
              FACILITY MAINTENANCE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Protecting asset value and operational continuity - long after construction ends.
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              12Twenty Facility Maintenance service provides structured, professionally managed
              maintenance programmes for commercial, industrial, residential, and public sector
              assets. We understand that a building's performance and value depend not just on how
              it is built, but on how consistently and intelligently it is maintained. Our approach
              combines planned preventive maintenance, rapid reactive response, and data-driven
              asset management.
            </p>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src="/assets/facility.jpg"
                alt="Facility Maintenance"
                fill
                className="object-cover"
              />
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">15+</div>
                <p className="text-sm">Assets Under Management</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">40%</div>
                <p className="text-sm">Lease Breaking Occurrence</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <p className="text-sm">Emergency Response</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">98%</div>
                <p className="text-sm">SLA Compliance Rate</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">WHAT WE DO</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From preventive care to long-term facility performance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We design and implement bespoke maintenance management systems tailored to the
                specific needs of each asset class. Our qualified FM engineers and technicians
                handle MEP systems, civil structures, internal finishes, external fabric, and
                specialist equipment. We deploy CMMS (Computerised Maintenance Management Systems)
                to schedule, track, and report on all maintenance activities - giving asset owners
                complete visibility and control.
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
                      Planned Preventive Maintenance (PPM)
                    </h3>
                    <p className="text-gray-600 text-sm">
                      PPM programmes for MEP and civil assets.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Reactive & Emergency Response
                    </h3>
                    <p className="text-gray-600 text-sm">
                      24/7 reactive and emergency maintenance response.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Building Fabric Maint­enance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Roofing, cladding, glazing, and structural repairs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">MEP Systems Servicing</h3>
                    <p className="text-gray-600 text-sm">
                      HVAC, electrical, plumbing, and fire systems.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    05
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Lifts & Specialist Equipment
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lift, escalator, and specialist equipment maintenance coordination.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    06
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Grounds & External Environment
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Grounds maintenance and external environment upkeep.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    07
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">CMMS & Asset Register</h3>
                    <p className="text-gray-600 text-sm">
                      CMMS implementation and asset register management.{' '}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    08
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Statutory Compliance Maintenance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fire safety, lifts, and electrical testing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    09
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Condition Reporting & SOFR
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Annual condition surveys and maintenance cost forecasting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    10
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      FM Consultancy & Soft FM
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Facility management consultancy and soft FM coordination.
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
                <h2 className="text-4xl font-bold text-white mb-2">Documentation and tools.</h2>
                <p className="text-white/90 mb-8">
                  Documentation and tools that keep every asset compliant, safe, and performing.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Asset Register</h3>
                    <p className="text-gray-600 text-sm">
                      Complete inventory of all maintainable assets with current condition ratings.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">PPM Schedules</h3>
                    <p className="text-gray-600 text-sm">
                      Annual planned maintenance calendar aligned to manufacturer specifications.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">CMMS Reports</h3>
                    <p className="text-gray-600 text-sm">
                      Monthly dashboard of completed tasks, reactive jobs, and performance KPIs.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Certs</h3>
                    <p className="text-gray-600 text-sm">
                      Statutory inspection certificates (fire, electrical, lifts, HVAC).
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Forecast</h3>
                    <p className="text-gray-600 text-sm">
                      Rolling 5-year lifecycle maintenance cost plan per asset class.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Condition Survey</h3>
                    <p className="text-gray-600 text-sm">
                      Annual photographic and written condition assessment report.
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
