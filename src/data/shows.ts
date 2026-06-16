export type ShowSeries = 'hunter-jumper' | 'dressage' | 'development'

export interface ShowEvent {
  id: string
  name: string
  shortName: string
  series: ShowSeries
  dateDisplay: string
  sortDate: string          // ISO date string for chronological sorting (start date)
  closingDate: string
  lateClosing?: string
  description?: string
  features?: string[]
  specialEvent?: string
  championship?: boolean
  prizeListLabel: string
  prizeListLabel2?: string
  entryLink?: string        // placeholder — client to provide
  familyGuideLink?: string
}

export const SHOWS: ShowEvent[] = [
  // ─── Hunter Jumper ───────────────────────────────────────────────────────────
  {
    id: 'spring-trillium-bronze',
    name: 'Spring Trillium Bronze Show',
    shortName: 'Spring TB',
    series: 'hunter-jumper',
    dateDisplay: 'May 30 – 31',
    sortDate: '2026-05-30',
    closingDate: 'May 21',
    features: [
      'All Trillium & Bronze core classes',
      'Vision Saddlery Hunter Derby',
      'Team Derby',
      'Nations Cup',
      'Twinkle Stars Leadline Class',
    ],
    prizeListLabel: 'Trillium Bronze Prize List',
  },
  {
    id: 'horse-lovers-weekend',
    name: "Horse Lovers' Weekend Trillium Bronze Show",
    shortName: "Horse Lovers' Weekend",
    series: 'hunter-jumper',
    dateDisplay: 'July 18 – 19',
    sortDate: '2026-07-18',
    closingDate: 'July 9',
    features: [
      'All Trillium & Bronze core classes',
      'Vision Saddlery Hunter Derby',
      'Costume Derby',
      'Twinkle Stars Leadline Class',
    ],
    prizeListLabel: 'Trillium Bronze Prize List',
  },
  {
    id: 'derby-day',
    name: 'Derby Day Bronze Show',
    shortName: 'Derby Day',
    series: 'hunter-jumper',
    dateDisplay: 'Sunday, September 6',
    sortDate: '2026-09-06',
    closingDate: 'August 27',
    features: [
      'All core Bronze divisions',
      'Vision Hunter Derby Finale — Open Derby & Modified Derby',
      'Open Hunter Classic',
      'Future Stars Costume Classic',
      'Open Jumper Derby',
      'Modified Jumper Derby',
      'Westar Bronze Equitation Ride-Off',
    ],
    prizeListLabel: 'Derby Day Prize List',
    prizeListLabel2: 'Trillium Bronze Prize List',
  },
  // ─── Dressage ────────────────────────────────────────────────────────────────
  {
    id: 'springfest-dressage',
    name: 'Springfest Dressage Show',
    shortName: 'Springfest',
    series: 'dressage',
    dateDisplay: 'May 9 – 10',
    sortDate: '2026-05-09',
    closingDate: 'April 30',
    lateClosing: 'May 4',
    description: 'Gold · Silver · Bronze · ESD',
    prizeListLabel: 'Dressage Show Prize List',
  },
  {
    id: 'summer-dressage',
    name: 'Summer Dressage Show',
    shortName: 'Summer Dressage',
    series: 'dressage',
    dateDisplay: 'July 11 – 12',
    sortDate: '2026-07-11',
    closingDate: 'July 2',
    lateClosing: 'July 5',
    description: 'Gold · Silver · Bronze · ESD',
    prizeListLabel: 'Dressage Show Prize List',
  },
  {
    id: 'summerfest-dressage',
    name: 'Summerfest Dressage',
    shortName: 'Summerfest',
    series: 'dressage',
    dateDisplay: 'August 8 – 9',
    sortDate: '2026-08-08',
    closingDate: 'July 30',
    lateClosing: 'August 2',
    description: 'Gold · Silver · Bronze · ESD',
    prizeListLabel: 'Dressage Show Prize List',
  },
  {
    id: 'summerset-dressage',
    name: 'Summerset Dressage',
    shortName: 'Summerset',
    series: 'dressage',
    dateDisplay: 'September 12 – 13',
    sortDate: '2026-09-12',
    closingDate: 'September 3',
    lateClosing: 'September 6',
    description: 'Gold · Silver · Bronze · ESD',
    championship: true,
    features: [
      'Ontario Dressage Silver Championships',
      'OADG ESD Championships',
      'Series Hi-Point Awards: Junior · Amateur · Open',
    ],
    prizeListLabel: 'Dressage Show Prize List',
  },
  // ─── Development ─────────────────────────────────────────────────────────────
  {
    id: 'development-1',
    name: 'Development Show 1',
    shortName: 'Development 1',
    series: 'development',
    dateDisplay: 'May 27',
    sortDate: '2026-05-27',
    closingDate: 'April 28',
    prizeListLabel: 'Development Show Prize List',
  },
  {
    id: 'development-2',
    name: 'Development Show 2',
    shortName: 'Development 2',
    series: 'development',
    dateDisplay: 'June 7',   // Note: PDF listed May 18 — likely a typo; date TBC with client
    sortDate: '2026-06-07',
    closingDate: 'June 2',
    specialEvent: 'Stick Horse Equitation',
    prizeListLabel: 'Development Show Prize List',
  },
  {
    id: 'development-3',
    name: 'Development Show 3',
    shortName: 'Development 3',
    series: 'development',
    dateDisplay: 'June 21',
    sortDate: '2026-06-21',
    closingDate: 'June 16',
    specialEvent: 'Carrot and Stick Obstacle Course',
    prizeListLabel: 'Development Show Prize List',
  },
  {
    id: 'development-4',
    name: 'Development Show 4',
    shortName: 'Development 4',
    series: 'development',
    dateDisplay: 'July 4',
    sortDate: '2026-07-04',
    closingDate: 'June 29',
    specialEvent: 'Costume Class',
    prizeListLabel: 'Development Show Prize List',
  },
  {
    id: 'development-5',
    name: 'Development Show 5',
    shortName: 'Development 5',
    series: 'development',
    dateDisplay: 'August 22',
    sortDate: '2026-08-22',
    closingDate: 'August 17',
    specialEvent: 'Twilight Leadline Class',
    prizeListLabel: 'Development Show Prize List',
  },
  {
    id: 'development-6',
    name: 'Development Show 6 — Finale',
    shortName: 'Finale',
    series: 'development',
    dateDisplay: 'September 19',
    sortDate: '2026-09-19',
    closingDate: 'September 14',
    specialEvent: 'Pizza Party & Series Hi-Point Awards',
    championship: true,
    prizeListLabel: 'Development Show Prize List',
  },
]

export const SHOWS_BY_SERIES = {
  'hunter-jumper': SHOWS.filter((s) => s.series === 'hunter-jumper'),
  dressage: SHOWS.filter((s) => s.series === 'dressage'),
  development: SHOWS.filter((s) => s.series === 'development'),
}

export const SHOWS_CHRONOLOGICAL = [...SHOWS].sort(
  (a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime()
)

export const SERIES_META = {
  'hunter-jumper': {
    label: 'Hunter Jumper',
    color: '#cb2e2e',
    bgClass: 'bg-series-hunter',
    textClass: 'text-series-hunter',
    borderClass: 'border-series-hunter',
  },
  dressage: {
    label: 'Dressage',
    color: '#1e3a5f',
    bgClass: 'bg-series-dressage',
    textClass: 'text-series-dressage',
    borderClass: 'border-series-dressage',
  },
  development: {
    label: 'Development',
    color: '#4a7c59',
    bgClass: 'bg-series-development',
    textClass: 'text-series-development',
    borderClass: 'border-series-development',
  },
} as const
