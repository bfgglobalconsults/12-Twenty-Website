import Image from 'next/image'

export default function IntegratedServices() {
  const services = [
    {
      title: 'Construction Design & Management',
      image: '/assets/construction-icon.png',
      description:
        'End-to-end CDM coordination from planning through execution. We manage design reviews, risk registers, contractor oversight and compliance documentation with systematic precision.',
      deliverables: ['BIM Models', 'Design Programs', 'Cost Plans', 'Compliance Reports'],
    },
    {
      title: 'Residential Construction & Infrastructure',
      image: '/assets/residential-icon.png',
      description:
        'Luxury residential, mixed-use and urban regeneration projects delivered to exacting standards. We align stakeholder expectations with buildability and long-term asset value.',
      deliverables: [
        'Site Reports',
        'Handover Packages',
        'Infrastucture Sign-off',
        '12-month defects support',
      ],
    },
    {
      title: 'Roadworks & Civil Engineering',
      image: '/assets/road-icon.png',
      description:
        'Highways, bridges, utilities, and earthworks delivered under tight regulatory frameworks. We specialize in phased delivery that minimizes disruption to existing infrastructure.',
      deliverables: [
        'As-built Drawings',
        'Materials Testing Reports',
        'Structural Inspection Certificates',
        
      ],
    },
    {
      title: 'Facility Maintenance',
      image: '/assets/facility-icon.png',
      description:
        'Planned and reactive maintenance programs for commercial, industrial and institutional estates. Our CMMS-driven approach ensures uptime, compliance and cost predictability.',
      deliverables: [
        'PPM Schedules',
        'CMMMS Reports',
        'Compliance Certificates',
        'Condition Surveys',
      ],
    },
    {
      title: 'Materials Procurement',
      image: '/assets/material-icon.png',
      description:
        'Strategic sourcing and supply chain management for construction materials. We negotiate volume contracts, validate quality assurance and coordinate just-in-time logistics.',
      deliverables: [
        'Materials Scheduled',
        'Delivery Trackers',
        'Supplier Contracts',
        'Quality Certificates',
        'Procurement Cost Reports',
      ],
    },
  ]

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
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8">
              <div className="mb-6">
               
                  <Image
                                  src={service.image}
                                  alt={service.title}
                                  width={48}
                                  height={48}
                                  className="w-12 h-12"
                                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              <div className="border-t border-[#F05C36] pt-6">
                <p className="text-xs text-gray-500 font-semibold mb-3 uppercase">
                  Key Deliverables
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-coral-500 mr-2">—</span>
                      {deliverable}
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
