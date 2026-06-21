export type NewsCategory = 'Upcoming' | 'Clinics' | 'Results' | 'Announcements'

export interface NewsItem {
  id: string
  category: NewsCategory
  date: string
  headline: string
  excerpt: string
  tab: 'upcoming' | 'clinics' | 'results'
  image?: string
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'season-preview-2026',
    category: 'Announcements',
    date: 'March 1, 2026',
    headline: '2026 Show Season Now Open',
    excerpt:
      'We are thrilled to announce the full 2026 Westar Farms show season. With Hunter Jumper, Dressage, and Development series running May through September, there is something for every rider. Prize lists and entry information are now available.',
    tab: 'upcoming',
    image: '/images/news-season-open.webp',
  },
  {
    id: 'spring-trillium-promo',
    category: 'Upcoming',
    date: 'April 20, 2026',
    headline: 'Spring Trillium Bronze Show — May 30–31',
    excerpt:
      "Our season opener features all Trillium and Bronze core classes plus the Vision Saddlery Hunter Derby. Entry closing May 21. Don't miss the Team Derby, Nations Cup, and the beloved Twinkle Stars Leadline Class.",
    tab: 'upcoming',
    image: '/images/news-hunter-jumper.webp',
  },
  {
    id: 'springfest-dressage-promo',
    category: 'Upcoming',
    date: 'April 15, 2026',
    headline: 'Springfest Dressage Show — May 9–10',
    excerpt:
      'The 2026 dressage season kicks off with Springfest, offering Gold, Silver, Bronze, and ESD classes. This show serves as a qualifier for the North American Youth Championships. Entry closing April 30.',
    tab: 'upcoming',
    image: '/images/news-dressage.webp',
  },
  {
    id: 'derby-day-promo',
    category: 'Upcoming',
    date: 'August 1, 2026',
    headline: 'Derby Day Bronze Show — September 6',
    excerpt:
      'The highlight of the Hunter Jumper season! Derby Day features the Vision Hunter Derby Finale, Open Hunter Classic, Future Stars Costume Classic, and much more. Entry closing August 27. Plan your season finale with us.',
    tab: 'upcoming',
    image: '/images/news-derby-day.webp',
  },
  {
    id: 'clinics-placeholder',
    category: 'Clinics',
    date: '',
    headline: 'Clinic Schedule Coming Soon',
    excerpt:
      'We host clinics throughout the season featuring respected clinicians in hunter-jumper, dressage, and equitation. Check back here for announcements, or follow us on Facebook and Instagram to be the first to know.',
    tab: 'clinics',
    image: '/images/news-clinic.webp',
  },
  {
    id: 'results-2025-season',
    category: 'Results',
    date: 'October 15, 2025',
    headline: '2025 Season Wrap — Series Champions Announced',
    excerpt:
      'Congratulations to all our 2025 Westar Farms series champions and high-point award winners. The TZE/OVPSC banquet celebrated another outstanding year of Hunter Jumper competition, while the OADG season-end banquet honored our Dressage champions.',
    tab: 'results',
    image: '/images/news-results-champions.webp',
  },
  {
    id: 'results-summerset-2025',
    category: 'Results',
    date: 'September 14, 2025',
    headline: 'Summerset Dressage — Ontario Silver Championships Results',
    excerpt:
      'Summerset Dressage wrapped our 2025 dressage season with the Ontario Dressage Silver Championships and OADG ESD Championships. Congratulations to all competitors who earned their championships titles at Westar Farms.',
    tab: 'results',
    image: '/images/news-results-dressage.webp',
  },
]

export const NEWS_BY_TAB = {
  upcoming: NEWS_ITEMS.filter((n) => n.tab === 'upcoming'),
  clinics: NEWS_ITEMS.filter((n) => n.tab === 'clinics'),
  results: NEWS_ITEMS.filter((n) => n.tab === 'results'),
}
