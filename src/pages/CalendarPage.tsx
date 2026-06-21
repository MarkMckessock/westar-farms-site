import PageHeader from '../components/PageHeader'
import CalendarSection from '../sections/CalendarSection'

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        label="Calendar"
        title="2026 Show Season"
        subtitle="Show dates, special events, and season highlights — plan your year with Westar Farms."
        image="/images/page-header-calendar.webp"
      />
      <CalendarSection />
    </>
  )
}
