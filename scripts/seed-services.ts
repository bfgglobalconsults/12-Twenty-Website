import { getPayload } from 'payload'
import config from '../src/payload.config'

const services = [
  {
    title: 'Construction Design & Management',
    slug: 'construction-design-management',
    icon: 'design',
    shortDescription:
      'End-to-end CDM coordination from planning through execution. We manage design reviews, risk registers, contractor oversight and compliance documentation with systematic precision.',
    featured: true,
    order: 1,
    fullDescription: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Our Construction Design & Management service provides comprehensive project oversight from initial planning through to final execution. We ensure all regulatory requirements are met while maintaining design integrity and cost efficiency.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    keyFeatures: [
      { feature: 'BIM', description: 'BIM Models' },
      { feature: '100%', description: 'Design Programs' },
      { feature: 'ISO', description: 'Cost Plans' },
      { feature: '24/7', description: 'Compliance Reports' },
    ],
    capabilities: [
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
    deliverables: [
      { title: 'BIM Models', description: 'Complete 3D building information models' },
      { title: 'Design Programs', description: 'Detailed project schedules and timelines' },
      { title: 'Cost Plans', description: 'Comprehensive budget and cost tracking' },
      { title: 'Compliance Reports', description: 'Full regulatory compliance documentation' },
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Initial Assessment',
        description:
          'Comprehensive project evaluation including risk analysis and regulatory requirements review.',
      },
      {
        stepNumber: 2,
        title: 'Design Development',
        description:
          'Collaborative design process with all stakeholders ensuring buildability and compliance.',
      },
      {
        stepNumber: 3,
        title: 'Execution & Oversight',
        description: 'Active site management with regular inspections and documentation.',
      },
    ],
    benefits: [
      { benefit: 'Reduced project risks through proactive management' },
      { benefit: 'Full regulatory compliance and documentation' },
      { benefit: 'Seamless stakeholder coordination' },
    ],
    ctaText: 'REQUEST PROPOSAL OR DISCOVERY CALL',
    ctaLink: '/contact',
  },
  {
    title: 'Residential Construction & Infrastructure',
    slug: 'residential-construction-infrastructure',
    icon: 'residential',
    shortDescription:
      'Luxury residential, mixed-use and urban regeneration projects delivered to exacting standards. We align stakeholder expectations with buildability and long-term asset value.',
    featured: true,
    order: 2,
    deliverables: [
      { title: 'Site Reports', description: 'Detailed site analysis and progress reports' },
      { title: 'Handover Packages', description: 'Complete project documentation' },
      { title: 'Infrastructure Sign-off', description: 'Final compliance certifications' },
      { title: '12-month defects support', description: 'Post-completion maintenance support' },
    ],
    benefits: [
      { benefit: 'Premium quality residential construction' },
      { benefit: 'Long-term asset value optimization' },
    ],
    ctaText: 'REQUEST PROPOSAL OR DISCOVERY CALL',
    ctaLink: '/contact',
  },
  {
    title: 'Roadworks & Civil Engineering',
    slug: 'roadworks-civil-engineering',
    icon: 'civil',
    shortDescription:
      'Highways, bridges, utilities, and earthworks delivered under tight regulatory frameworks. We specialize in phased delivery that minimizes disruption to existing infrastructure.',
    featured: true,
    order: 3,
    deliverables: [
      { title: 'As-built Drawings', description: 'Final construction documentation' },
      { title: 'Materials Testing Reports', description: 'Quality assurance documentation' },
      {
        title: 'Structural Inspection Certificates',
        description: 'Official compliance certifications',
      },
    ],
    benefits: [
      { benefit: 'Minimal disruption to existing infrastructure' },
      { benefit: 'Full regulatory compliance' },
    ],
    ctaText: 'REQUEST PROPOSAL OR DISCOVERY CALL',
    ctaLink: '/contact',
  },
  {
    title: 'Facility Maintenance',
    slug: 'facility-maintenance',
    icon: 'maintenance',
    shortDescription:
      'Planned and reactive maintenance programs for commercial, industrial and institutional estates. Our CMMS-driven approach ensures uptime, compliance and cost predictability.',
    featured: true,
    order: 4,
    deliverables: [
      { title: 'PPM Schedules', description: 'Planned preventive maintenance schedules' },
      { title: 'CMMS Reports', description: 'Comprehensive maintenance management reports' },
      { title: 'Compliance Certificates', description: 'Regulatory compliance documentation' },
      { title: 'Condition Surveys', description: 'Facility condition assessments' },
    ],
    benefits: [
      { benefit: 'Maximum facility uptime' },
      { benefit: 'Predictable maintenance costs' },
    ],
    ctaText: 'REQUEST PROPOSAL OR DISCOVERY CALL',
    ctaLink: '/contact',
  },
  {
    title: 'Materials Procurement',
    slug: 'materials-procurement',
    icon: 'procurement',
    shortDescription:
      'Strategic sourcing and supply chain management for construction materials. We negotiate volume contracts, validate quality assurance and coordinate just-in-time logistics.',
    featured: true,
    order: 5,
    deliverables: [
      { title: 'Materials Schedule', description: 'Complete materials planning and scheduling' },
      { title: 'Delivery Trackers', description: 'Real-time delivery tracking systems' },
      { title: 'Supplier Contracts', description: 'Negotiated supplier agreements' },
      { title: 'Quality Certificates', description: 'Material quality documentation' },
      {
        title: 'Procurement Cost Reports',
        description: 'Detailed procurement cost analysis',
      },
    ],
    benefits: [
      { benefit: 'Cost-effective material sourcing' },
      { benefit: 'Quality-assured materials' },
      { benefit: 'Just-in-time delivery coordination' },
    ],
    ctaText: 'REQUEST PROPOSAL OR DISCOVERY CALL',
    ctaLink: '/contact',
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
