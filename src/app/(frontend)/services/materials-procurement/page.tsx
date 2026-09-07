import ServicesHero from '@/components/ServicesHero'
import Image from 'next/image'
import Link from 'next/link'

export default function MaterialsProcurementPage() {
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
              MATERIALS PROCUREMENT
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Supplying the right materials, at the right price, at the right time.
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              12Twenty Construction Materials Procurement Service delivers strategic, transparent,
              and cost-effective procurement of all materials required for construction projects. We
              leverage our extensive supplier network, market intelligence, and purchasing power to
              ensure our clients receive certified, quality-assured materials on schedule -
              preventing costly delays and substandard substitutions that plague poorly managed
              supply chains.
            </p>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src="/assets/procu.jpg"
                alt="Materials Procurement"
                fill
                className="object-cover"
              />
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">15+</div>
                <p className="text-sm">Vetted Suppliers</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">22%</div>
                <p className="text-sm">Avg. Cost Saving vs Market</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">48hr</div>
                <p className="text-sm">Emergency Supply Response</p>
              </div>
              <div className="bg-[#F05C36] rounded-2xl p-6 text-white">
                <div className="text-2xl font-bold mb-2">99%</div>
                <p className="text-sm">Certified Materials Only</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">WHAT WE DO</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From sourcing to timely delivery of quality materials
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We manage the complete procurement lifecycle - from market survey and supplier
                prequalification to purchase order management, logistics coordination, delivery
                verification, and invoice reconciliation. Our procurement specialists work closely
                with site teams to ensure materials are specification-compliant, delivered to
                programme, and supported by full documentation trails for quality assurance and
                audit purposes.
              </p>
            </div>

            {/* Capabilities */}
            <div className="mb-16">
              <p className="text-[#F05C36] text-sm font-semibold mb-4 uppercase">
                KEY SERVICE OFFERINGS
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Capabilities that drive every project forward.
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Procurement Strategy & Scheduling
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Procurement strategy development and materials schedule preparation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Supplier Prequalification & Vetting
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Supplier prequalification, vetting, and approved vendor list management.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Competitive Tendering & Negotiations
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Competitive tendering and negotiation for bulk material supply.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Core Materials Sourcing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Concrete, steel, timber, block, and finishing materials.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    05
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Specialist & Imported Materials
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Curtain wall and MEP equipment procurement.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    06
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Purchase Order & Delivery Tracking
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Purchase order management and delivery tracking.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    07
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Quality Inspection & Certification
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Materials quality inspection and certification verification.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    08
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Logistics & Site Delivery
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Logistics coordination and site delivery scheduling.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    09
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Cost Reporting & Variance Analysis
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Procurement cost reporting and variance analysis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#F05C360D] p-3 rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#F05C36] text-2xl font-bold">
                    10
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Sustainable & Local Sourcing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Sustainable and locally-sourced materials advisory.
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
                <h2 className="text-4xl font-bold text-white mb-2">Procurement documentation.</h2>
                <p className="text-white/90 mb-8">
                  Procurement documentation that guarantees quality, traceability, and value for
                  money.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Materials Schedule</h3>
                    <p className="text-gray-600 text-sm">
                      Full bill of materials aligned to the construction programme and budget.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Supplier Contracts</h3>
                    <p className="text-gray-600 text-sm">
                      Executed supply agreements with agreed rates, lead times, and warranties.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery Tracker</h3>
                    <p className="text-gray-600 text-sm">
                      Live dashboard tracking purchase orders, delivery dates, and site receipts.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Certs</h3>
                    <p className="text-gray-600 text-sm">
                      Material test certificates, compliance documents, and inspection records.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Report</h3>
                    <p className="text-gray-600 text-sm">
                      Detailed cost breakdowns and savings analysis for procurement activities
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Closeout Report</h3>
                    <p className="text-gray-600 text-sm">
                      Final procurement summary with supplier performance ratings.
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
