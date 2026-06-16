import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { NEWS_BY_TAB, type NewsItem, type NewsCategory } from '../data/news'

type NewsTab = 'upcoming' | 'clinics' | 'results'

const TABS: { id: NewsTab; label: string }[] = [
  { id: 'upcoming', label: 'Upcoming Events' },
  { id: 'clinics', label: 'Clinics' },
  { id: 'results', label: 'Results' },
]

const CATEGORY_STYLES: Record<NewsCategory, { bg: string; text: string }> = {
  Upcoming: { bg: 'rgba(203,46,46,0.1)', text: '#cb2e2e' },
  Clinics: { bg: 'rgba(30,58,95,0.1)', text: '#1e3a5f' },
  Results: { bg: 'rgba(74,124,89,0.1)', text: '#4a7c59' },
  Announcements: { bg: 'rgba(107,114,128,0.1)', text: '#6b7280' },
}

function NewsCard({ item }: { item: NewsItem }) {
  const style = CATEGORY_STYLES[item.category]
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
      {/* Card image */}
      <div className="aspect-video relative overflow-hidden" aria-hidden="true">
        {item.image ? (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--color-brand-light) 0%, #e8e4df 100%)' }}
          >
            <svg className="w-10 h-10 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)' }}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Category + date row */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: style.bg, color: style.text }}
          >
            {item.category}
          </span>
          {item.date && (
            <span className="text-xs" style={{ color: 'var(--color-brand-gray)' }}>
              {item.date}
            </span>
          )}
        </div>

        {/* Headline */}
        <h3
          className="mb-2 leading-snug"
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700 }}
        >
          {item.headline}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed flex-1 mb-4"
          style={{ color: 'var(--color-brand-gray)' }}
        >
          {item.excerpt}
        </p>

        {/* Read more */}
        <span
          className="inline-flex items-center gap-1 text-sm font-medium self-start"
          style={{ color: 'var(--color-brand-red)' }}
          aria-hidden="true"
        >
          Read more
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 1l7 7-7 7M1 8h14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </article>
  )
}

function EmptyState({ tab }: { tab: NewsTab }) {
  const messages: Record<NewsTab, string> = {
    upcoming: 'Stay tuned for upcoming event announcements.',
    clinics: 'Clinic schedule will be announced soon. Follow us on Facebook and Instagram to be the first to know.',
    results: 'Results from past shows will be posted here after each event.',
  }
  return (
    <div className="py-16 text-center">
      <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <svg className="w-6 h-6" style={{ color: 'var(--color-brand-gray)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-sm" style={{ color: 'var(--color-brand-gray)' }}>{messages[tab]}</p>
    </div>
  )
}

export default function NewsSection() {
  const [searchParams, setSearchParams] = useSearchParams()

  const getTab = (): NewsTab => {
    const t = searchParams.get('tab')
    return t === 'clinics' || t === 'results' ? t : 'upcoming'
  }

  const [activeTab, setActiveTab] = useState<NewsTab>(getTab)

  useEffect(() => {
    setActiveTab(getTab())
  }, [searchParams])

  const handleTabClick = (tab: typeof TABS[number]) => {
    setActiveTab(tab.id)
    setSearchParams({ tab: tab.id }, { replace: true })
  }

  const items = NEWS_BY_TAB[activeTab]

  return (
    <section
      id="news"
      data-testid="section-news"
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-brand-white)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">News</p>
        <h2 className="section-heading mt-1">News &amp; Updates</h2>
        <hr className="section-rule" />
        <p className="section-lead mb-10">
          Stay up to date with upcoming shows, clinic announcements, and results from the
          Westar Farms show season.
        </p>

        {/* Tab bar */}
        <div
          className="flex flex-wrap gap-1 mb-10 border-b border-gray-200"
          role="tablist"
          aria-label="News categories"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                data-testid={`news-tab-${tab.id}`}
                onClick={() => handleTabClick(tab)}
                className="px-5 py-3 text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: isActive ? 'var(--color-brand-red)' : 'var(--color-brand-gray)',
                  background: 'none',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: isActive ? '2px solid var(--color-brand-red)' : '2px solid transparent',
                  marginBottom: '-1px',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Cards */}
        <div role="tabpanel" id={`news-${activeTab}`}>
          {items.length === 0 ? (
            <EmptyState tab={activeTab} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
