import AboutHero from '@/components/AboutHero'
import OurStory from '@/components/OurStory'
import SectionSpacing from '@/utilities/SectionSpacing'
import OneUnifiedStructure from '@/components/OneUnifiedStructure'
import WhyI2Twenty from '@/components/WhyI2Twenty'
import Leadership from '@/components/Leadership'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SectionSpacing>
      <OneUnifiedStructure />
      <OurStory />
      <WhyI2Twenty />
      <Leadership />
      </SectionSpacing>
    </>
  )
}
