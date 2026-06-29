import React from 'react'
import Navbar from '@/components/Navbar'
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
import FeaturedProperties from '@/components/FeaturedProperties'
import PricingSection from '@/components/PricingSection'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import './styles.css'
import SectionSpacing from '@/utilities/SectionSpacing'

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SectionSpacing>
        <AboutUs />
        <OurExpertise />
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
      {/* <FeaturedProperties />
      <PricingSection />
      <Testimonials /> */}
      <Footer />
    </div>
  )
}
