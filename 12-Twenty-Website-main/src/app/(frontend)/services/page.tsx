import ServicesHero from '@/components/ServicesHero'
import SectionSpacing from '@/utilities/SectionSpacing'
import IntegratedServices from '@/components/IntegratedServices'
import SystemsDriven from '@/components/SystemsDriven'
import VideoShowcase from '@/components/VideoShowcase'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
       <SectionSpacing>
      <IntegratedServices />
      <SystemsDriven />
      <VideoShowcase />
    </SectionSpacing>
    </>
  )
}
