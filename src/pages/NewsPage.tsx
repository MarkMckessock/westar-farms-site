import PageHeader from '../components/PageHeader'
import NewsSection from '../sections/NewsSection'

export default function NewsPage() {
  return (
    <>
      <PageHeader
        label="News & Events"
        title="News & Events"
        subtitle="Stay up to date with upcoming shows, clinic announcements, and season results."
        image="/images/page-header-news.jpg"
      />
      <NewsSection />
    </>
  )
}
