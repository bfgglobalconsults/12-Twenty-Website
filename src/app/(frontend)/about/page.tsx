import AboutHero from '@/components/AboutHero'
import OurStory from '@/components/OurStory'
import SectionSpacing from '@/utilities/SectionSpacing'
import OneUnifiedStructure from '@/components/OneUnifiedStructure'
import CompanyAtGlance from '@/components/CompanyAtGlance'
import WhyI2Twenty from '@/components/WhyI2Twenty'
import OurPurpose from '@/components/OurPurpose'
import Leadership from '@/components/Leadership'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SectionSpacing>
        <OneUnifiedStructure />
        <OurStory />
        <CompanyAtGlance />
        <WhyI2Twenty />
        <OurPurpose />
        <Leadership />
      </SectionSpacing>
    </>
  )
}
