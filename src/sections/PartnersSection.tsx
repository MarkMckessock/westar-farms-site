import { Link } from 'react-router-dom'

const SPONSORS = [
  {
    id: 'vision-saddlery',
    name: 'Vision Saddlery',
    role: 'Title Sponsor — Vision Hunter Derby Series',
    featured: true,
  },
]

const SPONSOR_PLACEHOLDER_COUNT = 5

function SponsorTile({ name, role, featured }: { name: string; role: string; featured: boolean }) {
  return (
    <div
      className={`rounded-2xl flex flex-col items-center justify-center p-6 text-center min-h-32 border transition-shadow duration-200 hover:shadow-md ${
        featured ? 'border-brand-red/20 bg-brand-red/5' : 'border-gray-100 bg-white'
      }`}
    >
      {/* Logo placeholder */}
      <div
        className="w-16 h-10 rounded flex items-center justify-center mb-3"
        style={{ backgroundColor: featured ? 'rgba(203,46,46,0.12)' : 'var(--color-brand-light)' }}
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6"
          style={{ color: featured ? 'var(--color-brand-red)' : 'var(--color-brand-gray)' }}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <p
        className="font-semibold text-sm mb-0.5"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-dark)' }}
      >
        {name}
      </p>
      <p className="text-xs" style={{ color: 'var(--color-brand-gray)' }}>
        {role}
      </p>
    </div>
  )
}

function PlaceholderSponsorTile() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center min-h-32 hover:border-brand-red/30 transition-colors duration-200">
      <svg
        className="w-6 h-6 text-gray-300 mb-2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
      </svg>
      <p className="text-xs font-medium" style={{ color: 'var(--color-brand-gray)' }}>
        Become a Sponsor
      </p>
    </div>
  )
}

export default function PartnersSection() {
  return (
    <section
      id="partners"
      data-testid="section-partners"
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-brand-light)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Partners</p>
        <h2 className="section-heading mt-1">Our Partners</h2>
        <hr className="section-rule" />
        <p className="section-lead mb-14">
          Westar Farms is proud to partner with sponsors and vendors who share our commitment
          to the equestrian community. Their support helps us deliver exceptional events season
          after season.
        </p>

        {/* Sponsors */}
        <div id="partners-sponsors" data-testid="section-sponsors">
          <h3
            className="mb-6"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700 }}
          >
            Our Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
            {SPONSORS.map((s) => (
              <SponsorTile key={s.id} name={s.name} role={s.role} featured={s.featured} />
            ))}
            {Array.from({ length: SPONSOR_PLACEHOLDER_COUNT }).map((_, i) => (
              <PlaceholderSponsorTile key={i} />
            ))}
          </div>
        </div>

        {/* How to sponsor + Vendor opportunities — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* How to Sponsor */}
          <div
            id="partners-how-to-sponsor"
            data-testid="section-how-to-sponsor"
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(203,46,46,0.1)' }}
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5"
                style={{ color: 'var(--color-brand-red)' }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
              </svg>
            </div>
            <h3
              className="mb-3"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}
            >
              How to Sponsor
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-brand-gray)' }}
            >
              Sponsoring Westar Farms gives your brand visibility with the Ottawa equestrian community
              throughout the show season. Sponsorship opportunities range from class sponsorships to
              full series title sponsorships. Contact us to discuss a package that works for you.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.875rem' }}>
              Inquire About Sponsoring
            </Link>
          </div>

          {/* Vendor Opportunities */}
          <div
            id="partners-vendor-opportunities"
            data-testid="section-vendor-opportunities"
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(74,124,89,0.1)' }}
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5"
                style={{ color: '#4a7c59' }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="mb-3"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}
            >
              Vendor Opportunities
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-brand-gray)' }}
            >
              Set up your booth at Westar Farms shows and connect directly with riders, trainers,
              and horse owners throughout the season. Vendor spots are available at select shows
              for equestrian goods, apparel, and related services.
            </p>
            <Link to="/contact" className="btn-ghost" style={{ fontSize: '0.875rem' }}>
              Inquire About Vending
            </Link>
          </div>
        </div>

        {/* Current vendors */}
        <div
          id="partners-vendors"
          data-testid="section-vendors"
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
        >
          <div className="aspect-[21/6] overflow-hidden">
            <img
              src="/images/vendors.jpg"
              alt="Vendor row at a Westar Farms show"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-8">
            <h3
              className="mb-3"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}
            >
              Vendors at Our Shows
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-gray)' }}>
              Vendor information for the 2026 season will be listed here. For inquiries about
              vending at Westar Farms shows, please{' '}
              <Link to="/contact" className="font-medium underline underline-offset-2" style={{ color: 'var(--color-brand-red)' }}>
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
