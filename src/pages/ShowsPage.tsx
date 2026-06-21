import PageHeader from '../components/PageHeader'
import ShowsSection from '../sections/ShowsSection'
import CompetitorResourcesSection from '../sections/CompetitorResourcesSection'

export default function ShowsPage() {
  return (
    <>
      <PageHeader
        label="Shows"
        title="Our Show Series"
        subtitle="Three distinct series for riders and horses of all levels — from first-time competitors to seasoned athletes."
        image="/images/page-header-shows.webp"
      />
      <ShowsSection />
      <CompetitorResourcesSection />
    </>
  )
}
