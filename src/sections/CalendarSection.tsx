import { SHOWS_CHRONOLOGICAL, SERIES_META, type ShowEvent } from '../data/shows'

const MONTHS = ['May', 'June', 'July', 'August', 'September']

function groupByMonth(shows: ShowEvent[]): Map<string, ShowEvent[]> {
  const map = new Map<string, ShowEvent[]>()
  for (const show of shows) {
    const month = new Date(show.sortDate).toLocaleString('en-US', {
      month: 'long',
      timeZone: 'UTC',
    })
    if (!map.has(month)) map.set(month, [])
    map.get(month)!.push(show)
  }
  return map
}

function CalendarRow({ show }: { show: ShowEvent }) {
  const meta = SERIES_META[show.series]
  return (
    <div
      className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0 group"
      aria-label={`${show.name}, ${show.dateDisplay}`}
    >
      {/* Series color indicator */}
      <div
        className="w-1 h-12 rounded-full flex-shrink-0"
        style={{ backgroundColor: meta.color }}
        aria-hidden="true"
      />

      {/* Date badge */}
      <div
        className="flex-shrink-0 w-16 text-center"
        aria-hidden="true"
      >
        <p
          className="text-2xl font-bold leading-none"
          style={{ fontFamily: 'var(--font-display)', color: meta.color }}
        >
          {new Date(show.sortDate + 'T00:00:00Z').getUTCDate()}
        </p>
        <p
          className="text-xs uppercase tracking-wide mt-0.5"
          style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)' }}
        >
          {new Date(show.sortDate + 'T00:00:00Z').toLocaleString('en-US', { weekday: 'short', timeZone: 'UTC' })}
        </p>
      </div>

      {/* Show info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <span
            className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: `${meta.color}15`, color: meta.color }}
          >
            {meta.label}
          </span>
          {show.championship && (
            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              Championship
            </span>
          )}
        </div>
        <p
          className="font-semibold truncate"
          style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem' }}
        >
          {show.name}
        </p>
        {show.specialEvent && (
          <p className="text-xs mt-0.5" style={{ color: 'var(--color-brand-gray)' }}>
            ✦ {show.specialEvent}
          </p>
        )}
      </div>

      {/* Date display (multi-day) */}
      <div className="hidden sm:block flex-shrink-0 text-right">
        <p
          className="text-sm font-medium"
          style={{ color: 'var(--color-brand-dark)', fontFamily: 'var(--font-sans)' }}
        >
          {show.dateDisplay}
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--color-brand-gray)' }}>
          Closes {show.closingDate}
        </p>
      </div>
    </div>
  )
}

export default function CalendarSection() {
  const grouped = groupByMonth(SHOWS_CHRONOLOGICAL)

  return (
    <section
      id="calendar"
      data-testid="section-calendar"
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-brand-light)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <p className="section-label">Calendar</p>
        <h2 className="section-heading mt-1">2026 Show Season</h2>
        <hr className="section-rule" />
        <p className="section-lead mb-12">
          All shows run April through September at Westar Farms, 8132 Fernbank Rd., Ashton, Ontario.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-10" aria-label="Series legend">
          {Object.entries(SERIES_META).map(([key, meta]) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: meta.color }}
                aria-hidden="true"
              />
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--color-brand-dark)', fontFamily: 'var(--font-sans)' }}
              >
                {meta.label}
              </span>
            </div>
          ))}
        </div>

        {/* Month groups */}
        <div className="space-y-10">
          {MONTHS.map((month) => {
            const shows = grouped.get(month)
            if (!shows || shows.length === 0) return null
            return (
              <div key={month}>
                <h3
                  className="text-sm font-semibold uppercase tracking-widest mb-4 pb-2 border-b-2 border-brand-red inline-block"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-brand-dark)' }}
                >
                  {month}
                </h3>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden px-4 sm:px-6">
                  {shows.map((show) => (
                    <CalendarRow key={show.id} show={show} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
