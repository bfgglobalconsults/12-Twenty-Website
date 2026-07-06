export default function IntegratedServices() {
  const services = [
    {
      title: 'Construction Design & Management',
      description:
        'End-to-end CDM coordination from planning through execution. We manage design reviews, risk registers, contractor oversight and compliance documentation with systematic precision.',
      deliverables: [
        'Design Review & Coordination',
        'Risk Register Management',
        'Contractor Oversight',
        'Compliance Documentation',
        'Health & Safety Planning',
      ],
    },
    {
      title: 'Residential Construction & Infrastructure',
      description:
        'Luxury residential, mixed-use and urban regeneration projects delivered to exacting standards. We align stakeholder expectations with buildability and long-term asset value.',
      deliverables: [
        'Feasibility & Planning',
        'Stakeholder Alignment',
        'Buildability Reviews',
        'Quality Assurance',
        'Handover & Snagging',
      ],
    },
    {
      title: 'Roadworks & Civil Engineering',
      description:
        'Highways, bridges, utilities, and earthworks delivered under tight regulatory frameworks. We specialize in phased delivery that minimizes disruption to existing infrastructure.',
      deliverables: [
        'Highway Design Management',
        'Bridge & Structure Oversight',
        'Utility Coordination',
        'Earthworks Planning',
        'Traffic Management',
      ],
    },
    {
      title: 'Facility Maintenance',
      description:
        'Planned and reactive maintenance programs for commercial, industrial and institutional estates. Our CMMS-driven approach ensures uptime, compliance and cost predictability.',
      deliverables: [
        'Planned Maintenance Programs',
        'Reactive Response Teams',
        'CMMS Implementation',
        'Compliance Auditing',
        'Lifecycle Cost Planning',
      ],
    },
    {
      title: 'Materials Procurement',
      description:
        'Strategic sourcing and supply chain management for construction materials. We negotiate volume contracts, validate quality assurance and coordinate just-in-time logistics.',
      deliverables: [
        'Strategic Sourcing',
        'Volume Contract Negotiation',
        'QA Validation',
        'JIT Logistics',
        'Supplier Performance Management',
      ],
    },
    {
      title: 'Compliance & Risk Advisory',
      description:
        'Regulatory navigation, safety audits and risk mitigation planning. We protect project value by identifying exposures early and embedding controls into operational workflows.',
      deliverables: [
        'Regulatory Navigation',
        'Safety Audit Programs',
        'Risk Mitigation Planning',
        'Insurance Advisory',
        'Claims Management',
      ],
    },
  ]

  return (
    <section className="bg-coral-500 py-20 rounded-2xl my-4 px-8">
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
                <svg
                  className="w-12 h-12 text-coral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              <div className="border-t border-gray-200 pt-6">
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
