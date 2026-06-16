import { useState, useEffect, useRef } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Shows',
    href: '#shows',
    children: [
      { label: 'Trillium-Bronze Hunter Jumper', href: '#shows-hunterjumper' },
      { label: 'Dressage', href: '#shows-dressage' },
      { label: 'Development', href: '#shows-development' },
      { label: 'Feature Classes', href: '#shows-feature' },
      { label: 'Competitor Resources', href: '#competitor-resources' },
      { label: 'Show Ring Schooling', href: '#show-ring-schooling' },
    ],
  },
  { label: 'Calendar', href: '#calendar' },
  {
    label: 'News',
    href: '#news',
    children: [
      { label: 'Upcoming Events', href: '#news-upcoming' },
      { label: 'Clinics', href: '#news-clinics' },
      { label: 'Results', href: '#news-results' },
    ],
  },
  {
    label: 'Partners',
    href: '#partners',
    children: [
      { label: 'Sponsors', href: '#partners-sponsors' },
      { label: 'How to Sponsor', href: '#partners-how-to-sponsor' },
      { label: 'Vendors', href: '#partners-vendors' },
      { label: 'Vendor Opportunities', href: '#partners-vendor-opportunities' },
    ],
  },
  {
    label: 'About Us',
    href: '#about',
    children: [
      { label: 'About Us', href: '#about' },
      { label: 'Facilities', href: '#about-facilities' },
      { label: 'Competitor Resources', href: '#competitor-resources' },
      { label: 'Show Ring Schooling', href: '#show-ring-schooling' },
      { label: 'Venue Rental', href: '#about-venue-rental' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

// All section IDs in DOM order (competitor-resources maps to #shows)
const SCROLL_SPY_IDS = ['home', 'shows', 'calendar', 'news', 'partners', 'competitor-resources', 'about', 'contact']

const SECTION_TO_NAV: Record<string, string> = {
  home: '#home',
  shows: '#shows',
  calendar: '#calendar',
  news: '#news',
  partners: '#partners',
  'competitor-resources': '#shows',
  about: '#about',
  contact: '#contact',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const activeSection = useScrollSpy(SCROLL_SPY_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
        setMobileExpanded(null)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleDropdownEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const handleNavClick = (_href: string) => {
    setMobileOpen(false)
    setMobileExpanded(null)
    // Let the browser handle hash scroll natively
  }

  const navBase = scrolled
    ? 'bg-white shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled ? 'text-brand-dark' : 'text-white'
  const logoFilter = scrolled ? 'brightness-0' : 'brightness-0 invert'

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBase}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0" aria-label="Westar Farms home">
              <img
                src="/logo.png"
                alt="Westar Farms"
                className={`h-10 lg:h-12 w-auto transition-all duration-300 ${logoFilter}`}
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = SECTION_TO_NAV[activeSection] === item.href
                return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={() => item.children && handleDropdownLeave()}
                >
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${isActive ? 'text-brand-red' : textColor}`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6 8L1 3h10L6 8z" />
                      </svg>
                    )}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ backgroundColor: 'var(--color-brand-red)' }}
                        aria-hidden="true"
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 transition-all duration-200 ${
                        openDropdown === item.label
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-52">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => handleNavClick(child.href)}
                            className="flex items-center px-4 py-2.5 text-sm text-brand-dark hover:text-brand-red hover:bg-brand-light border-l-2 border-transparent hover:border-brand-red transition-all duration-150"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )})}
            </nav>

            {/* Mobile hamburger */}
            <button
              data-testid="hamburger"
              className={`lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 rounded-md ${textColor}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-0.5 w-6 mx-auto bg-current transition-all duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 mx-auto bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 mx-auto bg-current transition-all duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel */}
      <div
        data-testid="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <img src="/logo.png" alt="Westar Farms" className="h-8 w-auto brightness-0" />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-brand-gray hover:text-brand-dark"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="overflow-y-auto h-full pb-24 pt-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = SECTION_TO_NAV[activeSection] === item.href
              return (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded((v) => (v === item.label ? null : item.label))
                      }
                      className={`flex items-center justify-between w-full px-6 py-3.5 text-sm font-medium hover:text-brand-red hover:bg-brand-light transition-colors ${isActive ? 'text-brand-red' : 'text-brand-dark'}`}
                      aria-expanded={mobileExpanded === item.label}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6 8L1 3h10L6 8z" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="bg-brand-light">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => handleNavClick(child.href)}
                            className="flex items-center pl-10 pr-6 py-3 text-sm text-brand-gray hover:text-brand-red border-l-2 border-transparent hover:border-brand-red transition-all duration-150"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center px-6 py-3.5 text-sm font-medium hover:text-brand-red hover:bg-brand-light transition-colors ${isActive ? 'text-brand-red' : 'text-brand-dark'}`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            )})}
          </nav>
        </div>
      </div>
    </>
  )
}
