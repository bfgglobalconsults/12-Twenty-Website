import ServicesHero from '@/components/ServicesHero'
import Image from 'next/image'
import Link from 'next/link'

export default function ConstructionDesignManagementPage() {
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
              CONSTRUCTION DESIGN & MANAGEMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Turning vision into engineered reality - from first sketch to final approval.
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              12Twenty Construction Design & Management (CDM) service provides end-to-end oversight
              across the design lifecycle of every project. We act as the bridge between client
              vision and technical execution — ensuring designs are buildable, compliant,
              cost-efficient, and future-ready. Our multidisciplinary team of architects, structural
              engineers, MEP consultants, and BIM specialists collaborate under one integrated
              management framework.
            </p>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src="/assets/constr.jpg"
                alt="Construction Design & Management"
                fill
                className="object-cover"
              />
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">20+</div>
                <p className="text-sm">Projects Designed</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">35%</div>
                <p className="text-sm">Fewer Design Errors (BIM) </p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">100%</div>
                <p className="text-sm">CDM Compliance Rate</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">5+</div>
                <p className="text-sm">Years Design Expertise</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">WHAT WE DO</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From concept to construction-ready documentation.
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We manage the full design process from inception through to construction-ready
                documentation. This includes coordinating multiple design disciplines, managing
                design programme milestones, reviewing drawings for constructability, and ensuring
                all outputs comply with relevant building codes, planning requirements, and safety
                regulations. Our CDM approach embeds Health & Safety considerations from the
                earliest design stage, in line with CDM 2015 Regulations.
              </p>
            </div>

            {/* Process Steps */}
            <div className="mb-16">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F05C36] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    01
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">INCEPTION</h3>
                  {/* <p className="text-sm text-gray-600">
                    Initial client consultation and project scoping
                  </p> */}
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F05C36] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    02
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CONCEPT</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F05C36] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    03
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">COORDINATION</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F05C36] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    04
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">COMPLIANCE</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F05C36] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    05
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">CONSTRUCTION READY</h3>
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">
                CDM CAPABILITIES
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
                      Concept Design & Feasibility
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Concept design development and feasibility studies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Architectural & Structural Design Coordination
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Coordination of architectural and structural design disciplines.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">MEP Design Management</h3>
                    <p className="text-gray-600 text-sm">
                      Management and coordination of Mechanical, Electrical & Plumbing design.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      BIM Modelling & Clash Detection
                    </h3>
                    <p className="text-gray-600 text-sm">
                      BIM modelling and clash detection using Revit / Navisworks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    05
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Planning & Regulatory Approval
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Planning permission and regulatory approval support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    06
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">CDM 2015 Compliance</h3>
                    <p className="text-gray-600 text-sm">
                      Principal Designer duties and CDM 2015 compliance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    07
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Value Engineering</h3>
                    <p className="text-gray-600 text-sm">
                      Design optimization and value engineering to improve project efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    08
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Design Programme Management
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Design programme milestones, dependencies and tracking.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    09
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Constructability Reviews
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Technical reviews to ensure designs are practical and buildable.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    10
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Design Risk Management</h3>
                    <p className="text-gray-600 text-sm">
                      Design risk register development and ongoing management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-16">
              <div className="bg-[#F05C36] rounded-3xl p-12">
                <p className="text-white/90 text-sm font-semibold mb-2 uppercase">
                  CLEAR DELIVERABLES
                </p>
                <h2 className="text-4xl font-bold text-white mb-2">Clear, coordinated outputs.</h2>
                <p className="text-white/90 mb-8">
                  Clear, coordinated outputs that move projects confidently from design to delivery.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Design Brief</h3>
                    <p className="text-gray-600 text-sm">
                      Clearly defined scope, design intent and client requirements document.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">BIM Model</h3>
                    <p className="text-gray-600 text-sm">
                      Fully coordinated 3D Building Information Model with clash-free outputs.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Design Programme</h3>
                    <p className="text-gray-600 text-sm">
                      Milestone tracked design schedule aligned to the overall construction
                      programme.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Report</h3>
                    <p className="text-gray-600 text-sm">
                      Planning, building regulation and CDM compliance documentation package.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Estimate</h3>
                    <p className="text-gray-600 text-sm">
                      Design-stage cost plan validated against current market rates.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Register</h3>
                    <p className="text-gray-600 text-sm">
                      Live design risk log with mitigation strategies and owner assignments.{' '}
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
