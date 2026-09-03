import { getPayload } from 'payload'
import config from '../src/payload.config'

const services = [
  {
    title: 'Construction Design & Management',
    slug: 'construction-design-management',
    shortDescription:
      'End-to-end CDM coordination from planning through execution. We manage design reviews, risk registers, contractor oversight and compliance documentation with systematic precision.',
    deliverables: [
      { item: 'BIM Models' },
      { item: 'Design Programs' },
      { item: 'Cost Plans' },
      { item: 'Compliance Reports' },
    ],
    featured: true,
    order: 1,
    detailedContent:
      '<p>Our Construction Design & Management service provides comprehensive project oversight from initial planning through to final execution. We ensure all regulatory requirements are met while maintaining design integrity and cost efficiency.</p>',
    benefits: [
      {
        title: 'Regulatory Compliance',
        description:
          'Full CDM 2015 compliance with proactive risk management throughout all project phases.',
      },
      {
        title: 'Design Coordination',
        description:
          'Seamless integration between architects, engineers, and contractors to prevent costly conflicts.',
      },
    ],
    process: [
      {
        step: 'Initial Assessment',
        description:
          'Comprehensive project evaluation including risk analysis and regulatory requirements review.',
      },
      {
        step: 'Design Development',
        description:
          'Collaborative design process with all stakeholders ensuring buildability and compliance.',
      },
      {
        step: 'Execution & Oversight',
        description: 'Active site management with regular inspections and documentation.',
      },
    ],
  },
  {
    title: 'Residential Construction & Infrastructure',
    slug: 'residential-construction-infrastructure',
    shortDescription:
      'Luxury residential, mixed-use and urban regeneration projects delivered to exacting standards. We align stakeholder expectations with buildability and long-term asset value.',
    deliverables: [
      { item: 'Site Reports' },
      { item: 'Handover Packages' },
      { item: 'Infrastructure Sign-off' },
      { item: '12-month defects support' },
    ],
    featured: true,
    order: 2,
  },
  {
    title: 'Roadworks & Civil Engineering',
    slug: 'roadworks-civil-engineering',
    shortDescription:
      'Highways, bridges, utilities, and earthworks delivered under tight regulatory frameworks. We specialize in phased delivery that minimizes disruption to existing infrastructure.',
    deliverables: [
      { item: 'As-built Drawings' },
      { item: 'Materials Testing Reports' },
      { item: 'Structural Inspection Certificates' },
    ],
    featured: true,
    order: 3,
  },
  {
    title: 'Facility Maintenance',
    slug: 'facility-maintenance',
    shortDescription:
      'Planned and reactive maintenance programs for commercial, industrial and institutional estates. Our CMMS-driven approach ensures uptime, compliance and cost predictability.',
    deliverables: [
      { item: 'PPM Schedules' },
      { item: 'CMMS Reports' },
      { item: 'Compliance Certificates' },
      { item: 'Condition Surveys' },
    ],
    featured: true,
    order: 4,
  },
  {
    title: 'Materials Procurement',
    slug: 'materials-procurement',
    shortDescription:
      'Strategic sourcing and supply chain management for construction materials. We negotiate volume contracts, validate quality assurance and coordinate just-in-time logistics.',
    deliverables: [
      { item: 'Materials Schedule' },
      { item: 'Delivery Trackers' },
      { item: 'Supplier Contracts' },
      { item: 'Quality Certificates' },
      { item: 'Procurement Cost Reports' },
    ],
    featured: true,
    order: 5,
  },
]

async function seedServices() {
  const payload = await getPayload({ config })

  console.log('Starting services seed...')

  for (const service of services) {
    try {
      const existing = await payload.find({
        collection: 'services',
        where: { slug: { equals: service.slug } },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`Service "${service.title}" already exists, skipping...`)
        continue
      }

      await payload.create({
        collection: 'services',
        data: service,
      })

      console.log(`Created service: ${service.title}`)
    } catch (error) {
      console.error(`Error creating service ${service.title}:`, error)
    }
  }

  console.log('Services seed completed!')
  process.exit(0)
}

seedServices()
