import { ASSOCIATIONS, PRIZE_LISTS, MEMBERSHIP_REQUIREMENTS } from '../data/resources'
import { SERIES_META } from '../data/shows'

const SERIES_COLOR: Record<string, string> = {
  'hunter-jumper': '#cb2e2e',
  dressage: '#1e3a5f',
  'dressage-esd': '#1e3a5f',
  development: '#4a7c59',
}

const SERIES_LABEL: Record<string, string> = {
  'hunter-jumper': 'Hunter Jumper',
  dressage: 'Dressage',
  'dressage-esd': 'Dressage · ESD',
  development: 'Development',
}

function PrizeListCard({
  title,
  year,
  series,
  url,
  image,
}: {
  title: string
  year: number
  series: string
  url: string
  image?: string
}) {
  const color = SERIES_COLOR[series]
  const label = SERIES_LABEL[series]

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow duration-200">
      {/* Thumbnail */}
      <div className="aspect-[3/4] relative overflow-hidden" aria-hidden="true">
        {image ? (
          <>
            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${color}99 0%, ${color}55 100%)` }} />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6" style={{ background: `linear-gradient(160deg, ${color}18 0%, ${color}08 100%)` }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${color}20` }}>
              <svg className="w-6 h-6" style={{ color }} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex flex-col items-end justify-end p-5">
          <div className="text-right" style={{ fontFamily: 'var(--font-display)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-0.5">{label}</p>
            <p className="text-3xl font-bold text-white">{year}</p>
          </div>
        </div>
      </div>

      <div className="p-4 mt-auto">
        <p
          className="text-sm font-semibold mb-3 leading-snug"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-dark)' }}
        >
          {title}
        </p>
        <a
          href={url}
          className="inline-flex items-center gap-1.5 text-xs font-medium"
          style={{ color }}
          aria-label={`Download ${title}`}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 1v8M5 6l3 3 3-3M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  )
}

function Check() {
  return (
    <svg className="w-4 h-4 mx-auto" style={{ color: 'var(--color-brand-red)' }} viewBox="0 0 16 16" fill="currentColor" aria-label="Required" role="img">
      <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
    </svg>
  )
}

function ResourcePill({ label, href }: { label: string; href: string }) {
  const isExternal = href !== '#'
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-150 hover:border-brand-red hover:text-brand-red"
      style={{
        borderColor: 'var(--color-brand-gray)',
        color: 'var(--color-brand-dark)',
        fontFamily: 'var(--font-sans)',
        textDecoration: 'none',
      }}
    >
      {label}
      {isExternal && (
        <svg className="w-3 h-3 opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M5 1H1v10h10V7M7 1h4m0 0v4m0-4L5 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  )
}

export default function CompetitorResourcesSection() {
  return (
    <section
      id="competitor-resources"
      data-testid="section-competitor-resources"
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-brand-light)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Competitor Resources</p>
        <h2 className="section-heading mt-1">Competitor Resources</h2>
        <hr className="section-rule" />
        <p className="section-lead mb-14">
          Everything you need to prepare for competition at Westar Farms — prize lists, entry links,
          membership requirements, and key sport associations.
        </p>

        {/* Prize Lists */}
        <div className="mb-16">
          <h3
            className="mb-6"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700 }}
          >
            Prize Lists
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRIZE_LISTS.map((pl) => (
              <PrizeListCard key={pl.id} {...pl} />
            ))}
          </div>
        </div>

        {/* Sport Associations */}
        <div className="mb-16">
          <h3
            className="mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700 }}
          >
            Sport Associations
          </h3>
          <div className="flex flex-wrap gap-3">
            {ASSOCIATIONS.map((a) => (
              <ResourcePill key={a.shortName} label={a.name} href={a.url} />
            ))}
          </div>
        </div>

        {/* Membership Requirements */}
        <div className="mb-16">
          <h3
            className="mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700 }}
          >
            Membership Requirements
          </h3>
          <p className="text-sm mb-6" style={{ color: 'var(--color-brand-gray)' }}>
            Required memberships vary by show series. Confirm current requirements with the relevant
            association before entering.
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table
              className="w-full text-sm bg-white"
              data-testid="membership-table"
              aria-label="Membership requirements by show"
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-brand-light)' }}>
                  {['Show', 'EC Level', 'OE / PSO', 'THJA', 'OD', 'OADG', 'Horse Recording'].map(
                    (h) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide"
                        style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {MEMBERSHIP_REQUIREMENTS.map((row, i) => (
                  <tr
                    key={row.show}
                    style={{
                      borderBottom: i < MEMBERSHIP_REQUIREMENTS.length - 1 ? '1px solid var(--color-brand-light)' : 'none',
                      backgroundColor: i % 2 === 0 ? 'white' : 'rgba(248,246,243,0.5)',
                    }}
                  >
                    <td
                      className="px-4 py-3 font-semibold whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-dark)' }}
                    >
                      {row.show}
                    </td>
                    <td
                      className="px-4 py-3 whitespace-nowrap"
                      style={{ color: 'var(--color-brand-gray)' }}
                    >
                      {row.ecLevel}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.oePso ? <Check /> : <span style={{ color: 'var(--color-brand-gray)' }}>—</span>}
                    </td>
                    <td
                      className="px-4 py-3 whitespace-nowrap"
                      style={{ color: 'var(--color-brand-gray)' }}
                    >
                      {row.thja}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.od ? <Check /> : <span style={{ color: 'var(--color-brand-gray)' }}>—</span>}
                    </td>
                    <td
                      className="px-4 py-3 whitespace-nowrap"
                      style={{ color: 'var(--color-brand-gray)' }}
                    >
                      {row.oadg}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.horseRecording ? <Check /> : <span style={{ color: 'var(--color-brand-gray)' }}>—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Entry Links + Other Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Entry */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3
              className="mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700 }}
            >
              Make an Entry
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: SERIES_META['hunter-jumper'].color }}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-brand-dark)' }}>
                    Trillium, Bronze &amp; Development
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-brand-gray)' }}>
                    Entries, stalls &amp; service orders
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-1.5 text-xs font-medium underline underline-offset-2"
                    style={{ color: 'var(--color-brand-red)' }}
                  >
                    Open entry system →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: SERIES_META.dressage.color }}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-brand-dark)' }}>
                    Dressage
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-brand-gray)' }}>
                    Entries, stalls &amp; service orders
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-1.5 text-xs font-medium underline underline-offset-2"
                    style={{ color: '#1e3a5f' }}
                  >
                    Open entry system →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Resources */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3
              className="mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700 }}
            >
              Other Resources
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Site Map', href: '#' },
                { label: 'Arrivals &amp; Departures', href: '#' },
                { label: 'EC Safe Sport', href: '#' },
                { label: 'Family Guide to Development Shows', href: '#' },
              ].map(({ label, href }) => (
                <ResourcePill key={label} label={label.replace('&amp;', '&')} href={href} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
