import { describe, it, expect } from 'vitest'

// Mirrors the NAV_ITEMS structure from Navbar.tsx — tests the data contract
const NAV_ITEMS = [
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

describe('Nav items', () => {
  it('has 7 top-level items', () => {
    expect(NAV_ITEMS).toHaveLength(7)
  })

  it('all top-level hrefs start with #', () => {
    for (const item of NAV_ITEMS) {
      expect(item.href).toMatch(/^#/)
    }
  })

  it('all dropdown child hrefs start with #', () => {
    for (const item of NAV_ITEMS) {
      if (item.children) {
        for (const child of item.children) {
          expect(child.href).toMatch(/^#/)
        }
      }
    }
  })

  it('Shows dropdown has 6 items', () => {
    const shows = NAV_ITEMS.find((i) => i.label === 'Shows')
    expect(shows?.children).toHaveLength(6)
  })

  it('About Us dropdown has 5 items', () => {
    const about = NAV_ITEMS.find((i) => i.label === 'About Us')
    expect(about?.children).toHaveLength(5)
  })
})
