import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SHOWS_BY_SERIES, SERIES_META, type ShowEvent, type ShowSeries } from '../data/shows'

const TABS: { id: ShowSeries; label: string; anchor: string }[] = [
  { id: 'hunter-jumper', label: 'Hunter Jumper', anchor: 'shows-hunterjumper' },
  { id: 'dressage', label: 'Dressage', anchor: 'shows-dressage' },
  { id: 'development', label: 'Development', anchor: 'shows-development' },
]

function PlaceholderLink({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-sm font-medium cursor-not-allowed opacity-50"
      title="Link coming soon"
      style={{ color: 'var(--color-brand-gray)' }}
    >
      {children}
      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2.25a.75.75 0 0 1 .75.75v3.25h1.5a.75.75 0 0 1 0 1.5H7.25a.75.75 0 0 1-.75-.75V5.5A.75.75 0 0 1 8 4.75z" />
      </svg>
    </span>
  )
}

function ShowCard({ show }: { show: ShowEvent }) {
  const meta = SERIES_META[show.series]
  return (
    <article
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
      aria-label={show.name}
    >
      {/* Colored header band */}
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: meta.color }}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Series badge */}
        <span
          className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3 self-start"
          style={{
            backgroundColor: `${meta.color}18`,
            color: meta.color,
          }}
        >
          {meta.label}
        </span>

        {/* Show name */}
        <h3
          className="mb-2 leading-snug"
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700 }}
        >
          {show.name}
        </h3>

        {/* Date */}
        <p
          className="font-semibold mb-1"
          style={{ color: meta.color, fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}
        >
          {show.dateDisplay}
        </p>

        {/* Description / level */}
        {show.description && (
          <p className="text-sm mb-3" style={{ color: 'var(--color-brand-gray)' }}>
            {show.description}
          </p>
        )}

        {/* Championship callout */}
        {show.championship && (
          <div
            className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg mb-3"
            style={{ backgroundColor: `${meta.color}12`, color: meta.color }}
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Championship Event
          </div>
        )}

        {/* Features list */}
        {show.features && show.features.length > 0 && (
          <ul className="space-y-1 mb-4 flex-1">
            {show.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm"
                style={{ color: 'var(--color-brand-gray)' }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: meta.color }}
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Special event badge */}
        {show.specialEvent && (
          <div
            className="text-xs font-medium px-3 py-1.5 rounded-lg mb-4 flex-1"
            style={{ backgroundColor: `${meta.color}10`, color: meta.color }}
          >
            ✦ Special Event: {show.specialEvent}
          </div>
        )}

        {/* Divider + links */}
        <div className="mt-auto pt-4 border-t border-gray-100 space-y-2">
          <p className="text-xs" style={{ color: 'var(--color-brand-gray)' }}>
            Entry closing: <span className="font-medium text-brand-dark">{show.closingDate}</span>
            {show.lateClosing && (
              <> · Late: <span className="font-medium text-brand-dark">{show.lateClosing}</span></>
            )}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
            <PlaceholderLink>{show.prizeListLabel}</PlaceholderLink>
            {show.prizeListLabel2 && (
              <PlaceholderLink>{show.prizeListLabel2}</PlaceholderLink>
            )}
            {show.familyGuideLink !== undefined || show.series === 'development' ? null : (
              <PlaceholderLink>Make an Entry / Book Stalls</PlaceholderLink>
            )}
            {show.series === 'development' && (
              <PlaceholderLink>Make an Entry</PlaceholderLink>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

function HunterJumperContent() {
  return (
    <div id="shows-hunterjumper">
      <p className="section-lead mb-8 max-w-3xl">
        Westar offers two Trillium-Bronze shows and one stand-alone Bronze Show. The Trillium shows
        run under the rules of the Trillium Hunter Jumper Association (THJA) Trillium Circuit (Trillium
        Zone East). Our Bronze Shows are part of the Ottawa Valley Primary Show Circuit (OVPSC). The
        TZE and OVPSC host a joint banquet in the fall to celebrate competitors' accomplishments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="shows-feature">
        {SHOWS_BY_SERIES['hunter-jumper'].map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}

function DressageContent() {
  return (
    <div id="shows-dressage">
      <p className="section-lead mb-6 max-w-3xl">
        Four shows in the Westar Farms Dressage Series. Classes at Gold, Silver, Bronze (western style
        dressage), and Equestrian Skills Development (ESD) levels. Connected to the Ottawa Area Dressage
        Group (OADG) who sponsor high-point awards and the season-end banquet. The September show hosts
        the Ontario Dressage Silver Championships and OADG ESD Championships.
      </p>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          'Qualifier — North American Youth Championships (NAYC)',
          'National Dressage Pony Cup Classes',
          'Series Hi-Point Awards: Junior · Amateur · Open',
        ].map((pill) => (
          <span
            key={pill}
            className="text-xs font-medium px-3 py-1.5 rounded-full border"
            style={{ borderColor: '#1e3a5f40', color: '#1e3a5f', backgroundColor: '#1e3a5f0c' }}
          >
            {pill}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SHOWS_BY_SERIES.dressage.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}

function DevelopmentContent() {
  return (
    <div id="shows-development">
      <p className="section-lead mb-4 max-w-3xl">
        Development Shows are a fun, educational, and affordable introduction to horse showing. Classes
        focus on equitation (the rider's performance), with horse performance hunter classes and
        introductory jumper classes. At the Finale in September, competitors, coaches and families
        celebrate with a pizza party and series hi-point awards.
      </p>

      <div className="mb-8">
        <PlaceholderLink>Family Guide to Development Shows</PlaceholderLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SHOWS_BY_SERIES.development.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  )
}

export default function ShowsSection() {
  const [searchParams, setSearchParams] = useSearchParams()

  const getSeries = (): ShowSeries => {
    const s = searchParams.get('series')
    if (s === 'dressage' || s === 'development') return s
    return 'hunter-jumper'
  }

  const [activeTab, setActiveTab] = useState<ShowSeries>(getSeries)

  useEffect(() => {
    setActiveTab(getSeries())
  }, [searchParams])

  const handleTabClick = (tab: typeof TABS[number]) => {
    setActiveTab(tab.id)
    setSearchParams({ series: tab.id }, { replace: true })
  }

  return (
    <section
      id="shows"
      data-testid="section-shows"
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-brand-white)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <p className="section-label">Shows</p>
        <h2 className="section-heading mt-1">Our Show Series</h2>
        <hr className="section-rule" />
        <p className="section-lead mb-10">
          Westar Farms offers 3 separate show series in a friendly, welcoming atmosphere —
          from introductory Development Shows to national-level Dressage competition.
        </p>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-1 mb-10 border-b border-gray-200" role="tablist" aria-label="Show series">
          {TABS.map((tab) => {
            const meta = SERIES_META[tab.id]
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={tab.anchor}
                data-testid={`tab-${tab.id}`}
                onClick={() => handleTabClick(tab)}
                className="relative px-5 py-3 text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: isActive ? meta.color : 'var(--color-brand-gray)',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: isActive ? `2px solid ${meta.color}` : '2px solid transparent',
                  marginBottom: '-1px',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <div role="tabpanel">
          {activeTab === 'hunter-jumper' && <HunterJumperContent />}
          {activeTab === 'dressage' && <DressageContent />}
          {activeTab === 'development' && <DevelopmentContent />}
        </div>
      </div>
    </section>
  )
}
