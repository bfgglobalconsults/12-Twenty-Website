import Image from 'next/image'

export default function TechnologyOperations() {
  const systems = [
    {
      metric: '100%',
      metricLabel: 'PROJECT BIM COVERAGE',
      title: 'BIM & 3D Coordination',
      description:
        'Clash detection, federated models and digital twin readiness for design certainty and constructability validation.',
    },
    {
      metric: '4D/5D',
      metricLabel: 'INTEGRATED PLANNING',
      title: 'Scheduling & Planning',
      description:
        'Critical path analysis, resource loading, and milestone-driven program management with live progress tracking.',
    },
    {
      metric: '24/7',
      metricLabel: 'LIVE SITE VISIBILITY',
      title: 'Site Monitoring',
      description:
        'Remote site surveillance, drone-based progress capture, and automated health & safety compliance scanning.',
    },
    {
      metric: 'Real-Time',
      metricLabel: 'EXECUTIVE DASHBOARDS',
      title: 'Reporting Systems',
      description:
        'Executive dashboards, automated progress reporting, variance analysis, and stakeholder-ready board packs.',
    },
    {
      metric: '$840M',
      metricLabel: 'ANNUAL PROCUREMENT VOLUME',
      title: 'Procurement Intelligence',
      description:
        'Market analytics, supplier benchmarking, contract optimization, and spend visibility across all material categories.',
    },
    {
      metric: 'Unified',
      metricLabel: 'COMMAND CENTER VIEW',
      title: 'Operational Dashboards',
      description:
        'Unified command centers integrating schedule, cost, quality, safety, and risk data into a single operational view.',
    },
  ]

  const metrics = [
    {
      value: '15+',
      label: 'Years Experience',
    },
    {
      value: '30+',
      label: 'Projects Managed',
    },
    {
      value: '$2.4B',
      label: 'Managed Portfolio Value',
    },
    {
      value: 'Multi-Sector',
      label: 'Delivery Capability',
    },
  ]

  return (
    <section className="bg-[#E85D3F] rounded-2xl py-20 px-6 lg:py-32 lg:px-12 mb-12">
      <div className="max-w-7xl mx-auto">
        <span className="text-white font-medium text-sm tracking-wide uppercase block mb-6">
          Technology & Operations
        </span>

        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Systems-Driven Delivery.
          <br />
          Real-Time Intelligence.
        </h2>

        <p className="text-white text-base lg:text-lg mb-16 max-w-4xl">
          We deploy enterprise-grade digital infrastructure to manage complexity, reduce uncertainty
          and deliver transparency at every stage of the project lifecycle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {systems.map((system, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/assets/stop-circle.png"
                  alt="System Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{system.metric}</div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {system.metricLabel}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{system.title}</h3>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600 leading-relaxed">{system.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-white font-medium text-sm tracking-wide uppercase mb-8">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#E85D3F] mb-4">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-900 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
