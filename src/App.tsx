import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import ShowsSection from './sections/ShowsSection'
import CalendarSection from './sections/CalendarSection'
import NewsSection from './sections/NewsSection'
import PartnersSection from './sections/PartnersSection'
import CompetitorResourcesSection from './sections/CompetitorResourcesSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <ShowsSection />
        <CalendarSection />
        <NewsSection />
        <PartnersSection />
        <CompetitorResourcesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
