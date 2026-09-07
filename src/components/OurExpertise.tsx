import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Construction Design & Management',
    slug: 'construction-design-management',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    description:
      'End-to-end CDM coordination from planning through execution. We manage design reviews, risk registers, contractor oversight and compliance documentation with systematic precision.',
    keyOutputs: ['BIM Models', 'Design Programs', 'Cost Plans', 'Compliance Reports'],
  },
  {
    id: 2,
    title: 'Residential Construction & Infrastructure',
    slug: 'residential-construction-infrastructure',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    description:
      'Luxury residential, mixed-use and urban regeneration projects delivered to exacting standards. We align stakeholder expectations with buildability and long-term asset value.',
    keyOutputs: ['Site Reports', 'Handover Packages', 'Infrastructure Sign-off', '12-month defects support'],
  },
  {
    id: 3,
    title: 'Roadworks & Civil Engineering',
    slug: 'roadworks-civil-engineering',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    description:
      'Highways, bridges, utilities, and earthworks delivered under tight regulatory frameworks. We specialize in phased delivery that minimizes disruption to existing infrastructure.',
    keyOutputs: ['As-built Drawings', 'Materials Testing Reports', 'Structural Inspection Certificates'],
  },
  {
    id: 4,
    title: 'Facility Maintenance',
    slug: 'facility-maintenance',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    description:
      'Planned and reactive maintenance programs for commercial, industrial and institutional estates. Our CMMS-driven approach ensures uptime, compliance and cost predictability.',
    keyOutputs: ['PPM Schedules', 'CMMS Reports', 'Compliance Certificates', 'Condition Surveys'],
  },
  {
    id: 5,
    title: 'Materials Procurement',
    slug: 'materials-procurement',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    description:
      'Strategic sourcing and supply chain management for construction materials. We negotiate volume contracts, validate quality assurance and coordinate just-in-time logistics.',
    keyOutputs: ['Materials Schedule', 'Delivery Trackers', 'Supplier Contracts', 'Quality Certificates', 'Procurement Cost Reports'],
  },
]

export default function OurExpertise() {
  return (
    <section className="bg-[#F05C36] rounded-3xl py-16 px-8 my-12">
      <div className="max-w-7xl mx-auto">
        <span className="text-white font-semibold text-sm tracking-wide uppercase block mb-6">
          Our Expertise
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
          Integrated Services.
          <br />
          Lifelong Accountability.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-white rounded-3xl p-8 flex flex-col h-full group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-[#F05C36]">{service.icon}</div>
                <svg
                  className="w-6 h-6 text-[#F05C36] group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  KEY OUTPUTS
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.keyOutputs.map((output, idx) => (
                    <li key={idx} className="text-xs text-gray-700 flex items-start">
                      <span className="text-[#F05C36] mr-2">●</span>
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
