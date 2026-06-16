import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavChild {
  label: string
  href: string
  sectionId?: string
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Shows',
    href: '/shows',
    children: [
      { label: 'Trillium-Bronze Hunter Jumper', href: '/shows', sectionId: 'shows-hunterjumper' },
      { label: 'Dressage', href: '/shows', sectionId: 'shows-dressage' },
      { label: 'Development', href: '/shows', sectionId: 'shows-development' },
      { label: 'Feature Classes', href: '/shows', sectionId: 'shows-feature' },
      { label: 'Competitor Resources', href: '/shows', sectionId: 'competitor-resources' },
      { label: 'Show Ring Schooling', href: '/about', sectionId: 'show-ring-schooling' },
    ],
  },
  { label: 'Calendar', href: '/calendar' },
  {
    label: 'News',
    href: '/news',
    children: [
      { label: 'Upcoming Events', href: '/news?tab=upcoming' },
      { label: 'Clinics', href: '/news?tab=clinics' },
      { label: 'Results', href: '/news?tab=results' },
    ],
  },
  {
    label: 'Partners',
    href: '/partners',
    children: [
      { label: 'Sponsors', href: '/partners', sectionId: 'partners-sponsors' },
      { label: 'How to Sponsor', href: '/partners', sectionId: 'partners-how-to-sponsor' },
      { label: 'Vendors', href: '/partners', sectionId: 'partners-vendors' },
      { label: 'Vendor Opportunities', href: '/partners', sectionId: 'partners-vendor-opportunities' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Team', href: '/about', sectionId: 'about-team' },
      { label: 'Facilities', href: '/about', sectionId: 'about-facilities' },
      { label: 'Show Ring Schooling', href: '/about', sectionId: 'show-ring-schooling' },
      { label: 'Venue Rental', href: '/about', sectionId: 'about-venue-rental' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const pendingScrollRef = useRef<string | null>(null)

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Scroll to top on route change; execute any pending section scroll
  useEffect(() => {
    const id = pendingScrollRef.current
    pendingScrollRef.current = null
    if (id) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        })
      )
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.pathname])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname === href
  }

  const handleDropdownEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const handleTopNavClick = (href: string) => {
    setOpenDropdown(null)
    navigate(href)
  }

  const handleChildClick = (child: NavChild) => {
    setOpenDropdown(null)
    const path = child.href.split('?')[0]

    if (child.sectionId) {
      if (location.pathname === path) {
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            document.getElementById(child.sectionId!)?.scrollIntoView({ behavior: 'smooth' })
          })
        )
      } else {
        pendingScrollRef.current = child.sectionId
        navigate(child.href)
      }
    } else {
      navigate(child.href)
    }
  }

  const navBase = scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
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
            <button
              onClick={() => navigate('/')}
              className="flex-shrink-0"
              aria-label="Westar Farms home"
            >
              <img
                src="/logo.png"
                alt="Westar Farms"
                className={`h-10 lg:h-12 w-auto transition-all duration-300 ${logoFilter}`}
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href)
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                    onMouseLeave={() => item.children && handleDropdownLeave()}
                  >
                    <button
                      onClick={() => handleTopNavClick(item.href)}
                      aria-current={active ? 'page' : undefined}
                      aria-haspopup={item.children ? 'true' : undefined}
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${active ? 'text-brand-red' : textColor}`}
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
                      {active && (
                        <span
                          className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                          style={{ backgroundColor: 'var(--color-brand-red)' }}
                          aria-hidden="true"
                        />
                      )}
                    </button>

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
                            <button
                              key={child.label}
                              onClick={() => handleChildClick(child)}
                              className="flex items-center w-full text-left px-4 py-2.5 text-sm text-brand-dark hover:text-brand-red hover:bg-brand-light border-l-2 border-transparent hover:border-brand-red transition-all duration-150"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
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
                className={`block h-0.5 w-6 mx-auto bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
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
              const active = isActive(item.href)
              return (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded((v) => (v === item.label ? null : item.label))
                        }
                        className={`flex items-center justify-between w-full px-6 py-3.5 text-sm font-medium hover:text-brand-red hover:bg-brand-light transition-colors ${active ? 'text-brand-red' : 'text-brand-dark'}`}
                        aria-expanded={mobileExpanded === item.label}
                        aria-current={active ? 'page' : undefined}
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
                            <button
                              key={child.label}
                              onClick={() => handleChildClick(child)}
                              className="flex items-center w-full text-left pl-10 pr-6 py-3 text-sm text-brand-gray hover:text-brand-red border-l-2 border-transparent hover:border-brand-red transition-all duration-150"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleTopNavClick(item.href)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center w-full text-left px-6 py-3.5 text-sm font-medium hover:text-brand-red hover:bg-brand-light transition-colors ${active ? 'text-brand-red' : 'text-brand-dark'}`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
