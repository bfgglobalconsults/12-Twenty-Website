import Image from 'next/image'

export default function OurExpertise() {
  const services = [
    {
      image: '/assets/construction-icon.png',
      title: 'Construction Design & Management',
      description:
        'End-to-end CDM coordination from planning through execution. We manage design reviews, risk registers, contractor oversight and compliance documentation with systematic precision.',
      outputs: ['BIM Models', 'Cost Plans', 'Design Programs', 'Compliance Reports'],
    },
    {
      image: '/assets/residential-icon.png',
      title: 'Residential Construction & Infrastructure',
      description:
        'Luxury residential, mixed-use and urban regeneration projects delivered to exacting standards. We align stakeholder expectations with buildability and long-term asset value.',
      outputs: [
        'Site Reports',
        'Infrastructure Sign-off',
        'Handover Packages',
        '12-month defects support',
      ],
    },
    {
      image: '/assets/road-icon.png',
      title: 'Roadworks & Civil Engineering',
      description:
        'Highways, bridges, utilities, and earthworks delivered under tight regulatory frameworks. We specialize in phased delivery that minimizes disruption to existing infrastructure.',
      outputs: [
        'As-built Drawings',
        'Structural Inspection Certificates',
        'Materials Testing Reports',
      ],
    },
    {
      image: '/assets/facility-icon.png',
      title: 'Facility Maintenance',
      description:
        'Planned and reactive maintenance programs for commercial, industrial and institutional estates. Our CMMS-driven approach ensures uptime, compliance and cost predictability.',
      outputs: ['PPM Schedules', 'Compliance Certificates', 'CMMS Reports', 'Condition Surveys'],
    },
    {
      image: '/assets/material-icon.png',
      title: 'Materials Procurement',
      description:
        'Strategic sourcing and supply chain management for construction materials. We negotiate volume contracts, validate quality assurance and coordinate just-in-time logistics.',
      outputs: [
        'Materials Schedule',
        'Supplier Contracts',
        'Procurement Cost Reports',
        'Delivery Trackers',
        'Quality Certificates',
      ],
    },
  ]

  return (
    <section className="bg-[#E85D3F] rounded-xl py-20 px-6 lg:py-12 lg:px-12 mb-12">
      <div className="max-w-7xl mx-auto">
        <span className="text-white font-medium text-sm tracking-wide uppercase block mb-6">
          Our Expertise
        </span>

        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-16 leading-tight">
          Integrated Services.
          <br />
          Lifelong Accountability.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 flex flex-col h-full">
              <div className="mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
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
                  {service.outputs.map((output, idx) => (
                    <li key={idx} className="text-xs text-gray-700 flex items-start">
                      <span className="text-[#E85D3F] mr-2">●</span>
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
