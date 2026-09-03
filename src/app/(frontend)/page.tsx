import React from 'react'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import OurExpertise from '@/components/OurExpertise'
import TechnologyOperations from '@/components/TechnologyOperations'
import RecentProjects from '@/components/RecentProjects'
import WhyUs from '@/components/WhyUs'
import ManagedProjects from '@/components/ManagedProjects'
import Leadership from '@/components/Leadership'
import ClientTestimonials from '@/components/ClientTestimonials'
import LatestBlogs from '@/components/LatestBlogs'
import ConsultationForm from '@/components/ConsultationForm'
import Newsletter from '@/components/Newsletter'
import './styles.css'
import SectionSpacing from '@/utilities/SectionSpacing'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const fallbackServices = [
  {
    id: '1',
    title: 'Construction Design & Management',
    slug: 'construction-design-management',
    image: { url: '/assets/construction-icon.png' },
    shortDescription:
      'End-to-end CDM coordination from planning through execution. We manage design reviews, risk registers, contractor oversight and compliance documentation with systematic precision.',
    deliverables: [
      { item: 'BIM Models' },
      { item: 'Design Programs' },
      { item: 'Cost Plans' },
      { item: 'Compliance Reports' },
    ],
  },
  {
    id: '2',
    title: 'Residential Construction & Infrastructure',
    slug: 'residential-construction-infrastructure',
    image: { url: '/assets/residential-icon.png' },
    shortDescription:
      'Luxury residential, mixed-use and urban regeneration projects delivered to exacting standards. We align stakeholder expectations with buildability and long-term asset value.',
    deliverables: [
      { item: 'Site Reports' },
      { item: 'Infrastructure Sign-off' },
      { item: 'Handover Packages' },
      { item: '12-month defects support' },
    ],
  },
  {
    id: '3',
    title: 'Roadworks & Civil Engineering',
    slug: 'roadworks-civil-engineering',
    image: { url: '/assets/road-icon.png' },
    shortDescription:
      'Highways, bridges, utilities, and earthworks delivered under tight regulatory frameworks. We specialize in phased delivery that minimizes disruption to existing infrastructure.',
    deliverables: [
      { item: 'As-built Drawings' },
      { item: 'Structural Inspection Certificates' },
      { item: 'Materials Testing Reports' },
    ],
  },
  {
    id: '4',
    title: 'Facility Maintenance',
    slug: 'facility-maintenance',
    image: { url: '/assets/facility-icon.png' },
    shortDescription:
      'Planned and reactive maintenance programs for commercial, industrial and institutional estates. Our CMMS-driven approach ensures uptime, compliance and cost predictability.',
    deliverables: [
      { item: 'PPM Schedules' },
      { item: 'Compliance Certificates' },
      { item: 'CMMS Reports' },
      { item: 'Condition Surveys' },
    ],
  },
  {
    id: '5',
    title: 'Materials Procurement',
    slug: 'materials-procurement',
    image: { url: '/assets/material-icon.png' },
    shortDescription:
      'Strategic sourcing and supply chain management for construction materials. We negotiate volume contracts, validate quality assurance and coordinate just-in-time logistics.',
    deliverables: [
      { item: 'Materials Schedule' },
      { item: 'Supplier Contracts' },
      { item: 'Procurement Cost Reports' },
      { item: 'Delivery Trackers' },
      { item: 'Quality Certificates' },
    ],
  },
]

export default async function HomePage() {
  let services = fallbackServices

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'services',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: 10,
    })
    services = result.docs as any
  } catch (error) {
    console.warn('Database connection failed, using fallback data:', error)
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SectionSpacing>
        <AboutUs />
        <OurExpertise services={services} />
        <TechnologyOperations />
        <RecentProjects />
        <WhyUs />
        <ManagedProjects />
        <Leadership />
        <ClientTestimonials />
        <LatestBlogs />
        <ConsultationForm />
        <Newsletter />
      </SectionSpacing>
    </div>
  )
}
