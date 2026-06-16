import PageHeader from '../components/PageHeader'
import PartnersSection from '../sections/PartnersSection'

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        label="Partners"
        title="Our Partners"
        subtitle="The sponsors and vendors whose support helps us deliver exceptional events season after season."
        image="/images/vendors.jpg"
      />
      <PartnersSection />
    </>
  )
}
