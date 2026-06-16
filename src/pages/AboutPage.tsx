import PageHeader from '../components/PageHeader'
import AboutSection from '../sections/AboutSection'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="About Westar Farms"
        subtitle="Over 40 years serving the Ottawa equestrian community from our home in Ashton, Ontario."
        image="/images/facility-ring.jpg"
      />
      <AboutSection />
    </>
  )
}
