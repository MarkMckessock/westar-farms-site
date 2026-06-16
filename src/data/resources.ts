export interface Association {
  name: string
  shortName: string
  url: string  // placeholder — confirm with client
}

export const ASSOCIATIONS: Association[] = [
  { name: 'Equestrian Canada', shortName: 'EC', url: '#' },
  { name: 'Ontario Equestrian', shortName: 'OE', url: '#' },
  { name: 'Trillium Hunter Jumper Association', shortName: 'THJA', url: '#' },
  { name: 'Ontario Dressage', shortName: 'OD', url: '#' },
  { name: 'Ottawa Area Dressage Group', shortName: 'OADG', url: '#' },
]

export interface PrizeList {
  id: string
  title: string
  year: number
  series: 'hunter-jumper' | 'dressage' | 'dressage-esd' | 'development'
  url: string  // placeholder — client to provide PDF link
  image?: string
}

export const PRIZE_LISTS: PrizeList[] = [
  {
    id: 'tb-prize-list',
    title: 'Trillium Bronze Prize List',
    year: 2026,
    series: 'hunter-jumper',
    url: '#',
    image: '/images/prize-list-hj.jpg',
  },
  {
    id: 'dressage-prize-list',
    title: 'Dressage Series Prize List',
    year: 2026,
    series: 'dressage',
    url: '#',
    image: '/images/prize-list-dressage.jpg',
  },
  {
    id: 'esd-prize-list',
    title: 'ESD Dressage Series Prize List',
    year: 2026,
    series: 'dressage-esd',
    url: '#',
    image: '/images/prize-list-esd.jpg',
  },
  {
    id: 'development-prize-list',
    title: 'Development Shows Prize List',
    year: 2026,
    series: 'development',
    url: '#',
    image: '/images/prize-list-development.jpg',
  },
]

export interface MembershipRow {
  show: string
  ecLevel: string
  oePso: boolean
  thja: string
  od: boolean
  oadg: string
  horseRecording: boolean
}

export const MEMBERSHIP_REQUIREMENTS: MembershipRow[] = [
  { show: 'Trillium', ecLevel: 'Silver', oePso: true, thja: '✓', od: false, oadg: '—', horseRecording: true },
  { show: 'Bronze', ecLevel: 'Bronze', oePso: true, thja: 'Some classes', od: false, oadg: '—', horseRecording: false },
  { show: 'Dressage Gold', ecLevel: 'Gold', oePso: true, thja: 'n/a', od: true, oadg: 'For awards', horseRecording: true },
  { show: 'Dressage Silver', ecLevel: 'Silver', oePso: true, thja: 'n/a', od: true, oadg: 'For awards', horseRecording: true },
  { show: 'Dressage Bronze', ecLevel: 'Bronze', oePso: true, thja: 'n/a', od: true, oadg: '—', horseRecording: false },
  { show: 'ESD', ecLevel: '—', oePso: true, thja: 'n/a', od: false, oadg: '—', horseRecording: false },
  { show: 'Development', ecLevel: '—', oePso: true, thja: 'n/a', od: false, oadg: '—', horseRecording: false },
]
