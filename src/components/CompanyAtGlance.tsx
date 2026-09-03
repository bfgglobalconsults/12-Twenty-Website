import React from 'react'

const CompanyAtGlance = () => {
  const facts = [
    {
      number: '01',
      label: 'Company Name',
      value: '12Twenty Construction Project Management Company Limited',
    },
    {
      number: '02',
      label: 'Year Founded',
      value: '2022',
    },
    {
      number: '03',
      label: 'Headquarters',
      value: 'Lagos, Nigeria',
    },
    {
      number: '04',
      label: 'Legal Structure',
      value: 'Limited Liability Company',
    },
    {
      number: '05',
      label: 'Regional Offices',
      value: 'Suite H427 Ikota Shopping Complex VGC, Lagos',
    },
    {
      number: '06',
      label: 'Staff Strength',
      value: '15+ Full-Time Professionals',
    },
    {
      number: '07',
      label: 'Industries Served',
      value: 'Commercial | Industrial | Infrastructure & Residential',
    },
    {
      number: '08',
      label: 'Certifications',
      value: 'ISO 9001:2015, ISO 45001:2018, PMI / PMP Certified (in view)',
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-orange-500 text-sm font-medium mb-4">Company Facts</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Company at a glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facts.map((fact) => (
            <div key={fact.number} className="bg-[#F05C360D] p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <span className="text-orange-500 text-2xl font-bold">{fact.number}</span>
                <div>
                  <p className="text-orange-500 text-sm font-medium mb-2">{fact.label}</p>
                  <p className="text-gray-900 text-lg font-medium">{fact.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyAtGlance
