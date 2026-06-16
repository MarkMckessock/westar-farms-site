import PageHeader from '../components/PageHeader'
import ContactSection from '../sections/ContactSection'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Get in Touch"
        subtitle="Have a question about shows, venue rental, sponsorship, or schooling? We'd love to hear from you."
      />
      <ContactSection />
    </>
  )
}
