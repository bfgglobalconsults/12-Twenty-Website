import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Construction Design & Management',
    image: '/assets/construction-icon.png',
    slug: 'construction-design-management',
    shortDescription:
      'End-to-end CDM coordination from planning through execution. We manage design reviews, risk registers, contractor oversight and compliance documentation with systematic precision.',
    keyOutputs: ['BIM Models', 'Design Programs', 'Cost Plans', 'Compliance Reports'],
  },
  {
    id: 2,
    title: 'Residential Construction & Infrastructure',
    image: '/assets/residential-icon.png',
    slug: 'residential-construction-infrastructure',
    shortDescription:
      'Luxury residential, mixed-use and urban regeneration projects delivered to exacting standards. We align stakeholder expectations with buildability and long-term asset value.',
    keyOutputs: [
      'Site Reports',
      'Handover Packages',
      'Infrastructure Sign-off',
      '12-month defects support',
    ],
  },
  {
    id: 3,
    title: 'Roadworks & Civil Engineering',
    image: '/assets/road-icon.png',
    slug: 'roadworks-civil-engineering',
    shortDescription:
      'Highways, bridges, utilities, and earthworks delivered under tight regulatory frameworks. We specialize in phased delivery that minimizes disruption to existing infrastructure.',
    keyOutputs: [
      'As-built Drawings',
      'Materials Testing Reports',
      'Structural Inspection Certificates',
    ],
  },
  {
    id: 4,
    title: 'Facility Maintenance',
    image: '/assets/facility-icon.png',
    slug: 'facility-maintenance',
    shortDescription:
      'Planned and reactive maintenance programs for commercial, industrial and institutional estates. Our CMMS-driven approach ensures uptime, compliance and cost predictability.',
    keyOutputs: ['PPM Schedules', 'CMMS Reports', 'Compliance Certificates', 'Condition Surveys'],
  },
  {
    id: 5,
    title: 'Materials Procurement',
    image: '/assets/material-icon.png',
    slug: 'materials-procurement',
    shortDescription:
      'Strategic sourcing and supply chain management for construction materials. We negotiate volume contracts, validate quality assurance and coordinate just-in-time logistics.',
    keyOutputs: [
      'Materials Schedule',
      'Delivery Trackers',
      'Supplier Contracts',
      'Quality Certificates',
    ],
  },
]

export default function IntegratedServices() {
  return (
    <section className="bg-[#14212D] py-20 rounded-2xl my-4 px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-white text-sm font-semibold mb-6 block">Our Expertise</span>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
          Integrated Services.
          <br />
          Lifelong Accountability.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <div className="flex justify-between items-center mb-6">
                <div className=" flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={45}
                    height={45}
                    className="w-12 h-12"
                  />
                </div>
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

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.shortDescription}</p>

              <div className="border-t border-[#F05C36] pt-6">
                <p className="text-xs text-gray-900 font-bold mb-4 uppercase">Key Outputs</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.keyOutputs.slice(0, 4).map((output, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#F05C36] mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
