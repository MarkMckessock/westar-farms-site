# Westar Farms Website — Product Specification

**Version**: 1.0  
**Last updated**: 2026-06-16 (Phase 4 complete)  
**Status**: Source of truth — update this file when requirements change

---

## 1. Site Purpose & Audience

Westar Farms (8132 Fernbank Rd., Ashton, Ontario) is an equestrian facility operating since 1984 that runs three annual horse show series. The website serves:

- **Competitors & coaches** — find show dates, prize lists, entry links, competitor resources
- **New families** — discover Development Shows, understand what to expect
- **Sponsors & vendors** — learn about partnership opportunities
- **General horse community** — venue rental, show ring schooling, clinics

**Tagline**: *Live your love of horses*

---

## 2. Architecture — Single Page Application

The site is a single-page application where each "page" in the nav is an anchor section on a long scrolling page, except where noted. React Router provides navigation; clicking a nav item smooth-scrolls to the section and updates the URL hash.

### Route / Section Map
| URL Hash      | Section Component   | Notes                          |
|---------------|---------------------|--------------------------------|
| `#home`       | `<HeroSection>`     | Default / landing              |
| `#shows`      | `<ShowsSection>`    | With sub-tabs                  |
| `#calendar`   | `<CalendarSection>` |                                |
| `#news`       | `<NewsSection>`     |                                |
| `#partners`   | `<PartnersSection>` |                                |
| `#about`      | `<AboutSection>`    | With sub-sections              |
| `#contact`    | `<ContactSection>`  |                                |

---

## 3. Navigation

### Top Navigation Bar
Horizontal sticky nav. Transparent with white text over hero; transitions to solid white with dark text on scroll.

**Nav items (left to right):**
```
[Logo]   Home   Shows ▾   Calendar   News ▾   Partners ▾   About Us ▾   Contact
```

### Dropdown Menus

**Shows ▾**
- Trillium-Bronze Hunter Jumper → `#shows-hunterjumper`
- Dressage → `#shows-dressage`
- Development → `#shows-development`
- Feature Classes → `#shows-feature`
- Competitor Resources → `#competitor-resources`
- Show Ring Schooling → `#show-ring-schooling`

**News ▾**
- Upcoming Events (Promo) → `#news-upcoming`
- Clinics → `#news-clinics`
- Results → `#news-results`

**Partners ▾**
- Sponsors → `#partners-sponsors`
- How to Sponsor → `#partners-how-to-sponsor`
- Vendors → `#partners-vendors`
- Vendor Opportunities → `#partners-vendor-opportunities`

**About Us ▾**
- About Us → `#about`
- Facilities → `#about-facilities`
- Competitor Resources → `#competitor-resources`
- Show Ring Schooling → `#show-ring-schooling`
- Venue Rental → `#about-venue-rental`

### Mobile Navigation
- Hamburger icon (≡) at right of nav
- Full-width slide-in panel from right
- Dropdowns expand as accordions (tap to open)
- Close button at top right of panel

---

## 4. Section Specifications

### 4.1 Home / Hero (`#home`)

**Layout**: Full-viewport hero with photographic background, centered text overlay.

**Content**:
- Logo (white) centered above headline
- Headline: `Westar Farms`
- Subheadline: `Live your love of horses`
- Supporting copy: `Serving the Ottawa equestrian community since 1984 — quality competitions, beautiful facilities, and a welcoming atmosphere for riders of all levels.`
- CTA buttons (side by side): `View Our Shows` (→ `#shows`) | `Contact Us` (→ `#contact`)
- Scroll indicator arrow at bottom

**Visual**: Parallax-style or full-bleed photo of horses/riders at the show facility. Overlay: dark gradient from bottom (40% opacity black).

**Below hero — "At a Glance" stat strip** (3 columns):
| Stat | Label |
|------|-------|
| Est. 1984 | Years of Experience |
| 3 Show Series | Hunter Jumper · Dressage · Development |
| Ottawa's Premier | Equestrian Venue |

---

### 4.2 Shows (`#shows`)

**Layout**: Full-width section with section heading, intro paragraph, then three tabbed sub-sections.

**Intro**:
> Westar Farms offers 3 separate show series in a friendly, welcoming atmosphere — from introductory Development Shows to national-level Dressage competition.

**Tab 1: Hunter Jumper — Trillium & Bronze** (`#shows-hunterjumper`)

Intro copy:
> Westar offers two Trillium-Bronze shows and one stand-alone Bronze Show. The Trillium shows run under the rules of the Trillium Hunter Jumper Association (THJA) Trillium Circuit (Trillium Zone East). Our Bronze Shows are part of the Ottawa Valley Primary Show Circuit (OVPSC). The TZE and OVPSC host a joint banquet in the fall to celebrate competitors' accomplishments.

**Show Cards** (card grid, 3 columns desktop / 1 column mobile):

*Spring Trillium Bronze Show*
- Date: May 30–31
- Entry closing: May 21
- Features: All Trillium & Bronze core classes + Vision Saddlery Hunter Derby (Team Derby, Nations Cup, Twinkle Stars Leadline)
- Links: [Prize List] [Make an Entry / Book Stalls & Services]

*Horse Lovers' Weekend Trillium Bronze Show*
- Date: July 18–19
- Entry closing: July 9
- Features: All Trillium & Bronze core classes + Vision Saddlery Hunter Derby (Costume Derby, Twinkle Stars Leadline)
- Links: [Prize List] [Make an Entry / Book Stalls & Services]

*Derby Day Bronze Show*
- Date: Sunday, September 6
- Entry closing: August 27
- Features: All core Bronze divisions + Feature Classes:
  - Vision Hunter Derby Finale (Open Derby & Modified Derby)
  - Open Hunter Classic
  - Future Stars Costume Classic
  - Open Jumper Derby
  - Modified Jumper Derby
  - Westar Bronze Equitation Ride-Off
- Links: [Derby Day Prize List] [Trillium Bronze Prize List] [Make an Entry / Book Stalls & Services]

**Tab 2: Dressage** (`#shows-dressage`)

Intro copy:
> Four shows in the Westar Farms Dressage Series. Classes at Gold, Silver, Bronze (western style dressage), and Equestrian Skills Development (ESD) levels. Connected to the Ottawa Area Dressage Group (OADG) who sponsor high-point awards and the season-end banquet. The September show hosts the Ontario Dressage Silver Championships and OADG ESD Championships.

Notable features (callout pills):
- Qualifier — North American Youth Championships (NAYC)
- National Dressage Pony Cup classes
- Series Hi-Point Awards: Junior · Amateur · Open

**Show Cards**:

*Springfest Dressage Show*
- Date: May 9–10
- Closing: April 30 (Late: May 4)

*Summer Dressage Show*
- Date: July 11–12
- Closing: July 2 (Late: July 5)

*Summerfest Dressage*
- Date: August 8–9
- Closing: July 30 (Late: August 2)

*Summerset Dressage*
- Date: September 12–13
- Closing: September 3 (Late: September 6)
- Special: Ontario Dressage Silver Championships · OADG ESD Championships

Link: [Dressage Show Prize List] [Make an Entry / Book Stalls & Services]

**Tab 3: Development** (`#shows-development`)

Intro copy:
> Development Shows are a fun, educational, and affordable introduction to horse showing. Classes focus on equitation (the rider's performance), with horse performance hunter classes and introductory jumper classes. At the Finale in September, competitors, coaches and families celebrate with a pizza party and series hi-point awards.

Link: [Family Guide to Development Shows]

**Show Cards** (6 shows):

| Show | Date | Closing | Special Event |
|------|------|---------|---------------|
| Development 1 | May 27 | April 28 | — |
| Development 2 | May 18 | May 13 | Stick Horse Equitation |
| Development 3 | June 21 | June 16 | Carrot and Stick Obstacle Course |
| Development 4 | July 4 | June 29 | Costume Class |
| Development 5 | August 22 | August 17 | Twilight Leadline Class |
| Development 6 (Finale) | September 19 | September 14 | Pizza Party & Series Hi-Point Awards |

Link: [Development Show Prize List]

---

### 4.3 Calendar (`#calendar`)

**Layout**: Full-width section with a chronological list/grid of all show dates across all three series for the season.

**Visual**: Clean calendar-style cards, color-coded by series:
- Hunter Jumper: `brand-red`
- Dressage: deep navy accent (`#1e3a5f`)
- Development: sage green (`#4a7c59`)

Display all 13 show dates in a unified view. Each entry: Series pill + Show name + Date + "Learn More" link to the relevant shows sub-section.

---

### 4.4 News (`#news`)

**Layout**: Section heading + tab/filter row, then card grid (3 col desktop / 2 tablet / 1 mobile). Pagination if > 6 items.

**Sub-sections (tabs)**:

`#news-upcoming` — **Upcoming Events**
- News cards (image + category pill + date + headline + excerpt + Read More)
- Promote upcoming shows, special events, Derby Day
- Placeholder card: "Stay tuned for upcoming event announcements"

`#news-clinics` — **Clinics**
- Clinic announcement cards: date, clinician name, discipline, registration link
- Placeholder content until specific clinic details are provided

`#news-results` — **Results**
- Past show results: champion/reserve announcements, series standings
- Links to external results platforms if applicable

**Category tags** used across all news: `Upcoming`, `Clinics`, `Results`, `Announcements`

---

### 4.5 Partners (`#partners`)

**Layout**: Full-width section with sponsor logo grid + sub-sections.

`#partners-sponsors` — **Our Sponsors**
- Logo grid (responsive): 3 columns desktop, 2 tablet, 1 mobile
- Named sponsor: Vision Saddlery (title sponsor — Hunter Derby Series)
- Placeholder sponsor tiles for remaining sponsors

`#partners-how-to-sponsor` — **How to Sponsor**
- Copy: [TBD — awaiting client content]
- CTA: Contact form link / email

`#partners-vendors` — **Vendors**
- List of current vendors at shows
- [TBD — awaiting client content]

`#partners-vendor-opportunities` — **Vendor Opportunities**
- Description of vendor spots available at shows
- CTA to contact for vendor bookings

---

### 4.6 About Us (`#about`)

**Layout**: Three sub-sections.

`#about` — **About Westar Farms**

Heading: *About Westar Farms*

Copy:
> Westar Farms offers 3 different horse show series and numerous special events serving the equestrian community of Ottawa and the surrounding areas. Our decades of experience in the equestrian industry, and feedback from competitors and coaches, help us offer the types of events that meet their needs.
>
> Our focus is on producing high-quality competitions for riders of all levels, and we love to include an element of fun.
>
> We've been running Trillium and Bronze shows since 1988, expanding our show grounds and facilities to meet the changing needs of today's human and equine athletes. The Vision Hunter Derby Series gives riders an opportunity to compete in field hunter-style classes, and Derby Day in September is a must-attend with numerous Feature Classes.
>
> Dressage competition has grown from a few Silver shows to a series of four Gold-Silver-Bronze-ESD shows, serving dressage riders of all levels. Series hi-point awards, the Ontario Dressage Silver Championships, and ESD Championships in September round out the season in style.
>
> Development Shows are for riders and horses new to competition. Six shows make up the series with fun special events at each show. At the Finale in September, competitors, coaches, and families enjoy a pizza party and series hi-point awards.
>
> Our show rings are available for schooling most of the summer. Discount days and special events allow horse lovers to school in a relaxed atmosphere or try fun events like Derby Cross or field hunter classes.
>
> Westar Farms show facilities are available to rent for clinics or shows.

**Our Team** subsection:

*Jeff & Bridget McKessock — Founders*
> Jeff and Bridget McKessock started Westar Farms in 1984 and have been at their current home since 1988. They have built the show site over nearly four decades, adapting to the needs of the equestrian community. Both bring extensive backgrounds as competitors — Bridget in hunter-jumper and Jeff in 3-day eventing and show jumping. After 40 years running a highly successful riding school and competition show barn, they now focus their efforts on hosting horse shows, events, and clinics.

*Kelsey & Dawn Butler — Show Office (Trillium-Bronze & Dressage)*
> Kelsey has managed the show office for the Trillium-Bronze and Dressage Shows for many years, and Dawn has been her right hand in welcoming competitors and keeping things running smoothly.

*Tricia Turriff — Show Office (Development Shows)*
> Tricia runs the show office for the Development Shows and is a wonderful guide for first-time competitors and families navigating the show world.

*Supporting Team*
> Our show ring managers, ring crew, officials, staff, and volunteers work together to produce enjoyable events where riders can test their skills in a safe and welcoming environment.

---

`#about-facilities` — **Facilities**

Intro: *Our beautiful facility features gardens and maple trees for shade, providing a welcoming setting for competitors throughout the season.*

Facilities list:
- Two sand show rings (dimensions TBD)
- Sand warm-up ring (dimensions TBD)
- Grass Grand Prix Ring (dimensions TBD)
- Grass Hunter Derby Ring (dimensions TBD)
- Grass warm-up ring (dimensions TBD)
- 40 top-quality ringside show stalls plus overflow stabling
- 4 wash stalls
- Lunging ring
- Gardens and shade under the maple trees

**Facility Map**: Placeholder image / link to PDF map when available.

---

`#show-ring-schooling` — **Show Ring Schooling**
> Our show rings are available for schooling most of the summer. Discount days and special events allow horse lovers to come and school in a relaxed atmosphere or try a fun event like Derby Cross or field hunter classes.

[Contact for schooling availability]

`#about-venue-rental` — **Venue Rental**
> Westar Farms show facilities are available to rent for clinics or shows. Our well-maintained rings, stabling, and amenities make it an excellent choice for your event.

[Contact for rental inquiries]

---

### 4.7 Competitor Resources (`#competitor-resources`)

**Layout**: Resource hub with downloadable documents and links.

**Prize Lists** (card grid with cover image thumbnails):
- Trillium Bronze Prize List (2026)
- Dressage Series Prize List (2026)
- ESD Dressage Series Prize List (2026)
- Development Shows Prize List (2026)

**Sport Associations** (link button row):
- Equestrian Canada (EC)
- Ontario Equestrian (OE)
- THJA (Trillium Hunter Jumper Association)
- Ontario Dressage
- OADG (Ottawa Area Dressage Group)

**Membership Requirements Table**:

| Show | EC Level | OE / PSO | THJA | OD | OADG | Horse Recording |
|------|----------|----------|------|----|------|-----------------|
| Trillium | Silver | ✓ | ✓ | | | ✓ |
| Bronze | Bronze | ✓ | Some classes | | | |
| Dressage Gold | Gold | ✓ | n/a | ✓ | ✓ (awards) | ✓ |
| Dressage Silver | Silver | ✓ | n/a | ✓ | ✓ (awards) | ✓ |
| Dressage Bronze | Bronze | ✓ | n/a | ✓ | | |
| ESD | | ✓ | n/a | | | |
| Development | | ✓ | n/a | | | |

**Entry Links**:
- Trillium, Bronze and Development — entries, stalls, and service orders
- Dressage — entries, stalls, and service orders

**Other Resources**:
- Site Map [PDF]
- Arrivals and Departures [PDF]
- EC Safe Sport [external link]
- Family Guide to Development Shows [PDF]

---

### 4.8 Contact (`#contact`)

**Layout**: Two-column (form left, info right) on desktop; stacked on mobile.

**Left — Contact Form**:
Fields: Name, Email, Phone (optional), Subject (dropdown: General Inquiry / Show Entry Question / Venue Rental / Sponsorship / Vendor Inquiry / Other), Message
Submit button: "Send Message" (brand-red)
Note: form submits to a mailto link or Formspree (no backend); implement with Formspree endpoint placeholder.

**Right — Contact Info**:
- Address: 8132 Fernbank Rd., Ashton, Ontario, Canada
- Email: [email protected]
- Phone: (613) 253-0078
- Social: Facebook (`facebook.com/westarfarms/`), Instagram (`instagram.com/westarfarms/`) — icons + links
- Embedded Google Map (static image or iframe) showing farm location

---

### 4.9 Footer

**Layout**: Dark background (`brand-dark`), three columns + copyright row.

Column 1: Logo (white) + tagline
Column 2: Quick links (Home, Shows, Calendar, News, Partners, About, Contact)
Column 3: Contact info + social icons

Bottom row: `© 2026 Westar Farms. All rights reserved.`

---

## 5. Design Language Details

### Section Anatomy
Every major section follows this pattern:
```
[section background: brand-white or brand-light, alternating]
  [max-w-7xl mx-auto px-6 lg:px-8 py-20]
    [section-label: small caps, brand-red, tracking-widest]  ← optional
    [h2: Playfair Display, 2.5–3rem, brand-dark]
    [red rule: 4px height, 48px wide, brand-red, my-4]
    [lead paragraph: Inter, 1.125rem, brand-gray]
    [content]
```

### Show Cards
```
[rounded-2xl shadow-md overflow-hidden bg-white]
  [aspect-video image or colored header band with series color]
  [p-6]
    [series pill: small rounded badge in series color]
    [h3: show name, Playfair Display]
    [date: brand-red, Inter Medium]
    [description]
    [divider]
    [action links row]
```

### Prize List / Download Cards (Competitor Resources)
```
[rounded-xl overflow-hidden shadow-sm border border-gray-100]
  [aspect-[3/4] cover image thumbnail — show cover of PDF]
  [p-4]
    [h4: prize list name]
    [download icon + "Download PDF" link]
```

### News Cards
```
[rounded-xl overflow-hidden shadow-sm]
  [aspect-video featured image]
  [p-5]
    [category pill(s): small rounded, gray]
    [date: Inter sm, brand-gray]
    [h3: headline, Playfair Display]
    [excerpt: 2-3 lines, Inter, brand-gray]
    ["Read More →" text link, brand-red]
```

### Team Member Cards (About section)
```
[text-center p-6]
  [w-24 h-24 rounded-full mx-auto bg-brand-light]  ← photo or initials
  [h4: name, Playfair Display, mt-4]
  [role: Inter Medium, brand-red, text-sm]
  [bio: Inter, brand-gray, text-sm, mt-2]
```

### Resource Action Buttons (Competitor Resources)
Row of pill-style buttons for quick-access resources:
```
[Prize List] [Make an Entry] [Site Map] [Arrivals & Departures] [EC Safe Sport]
```
Style: `border border-brand-gray text-brand-dark px-4 py-2 rounded-full text-sm hover:border-brand-red hover:text-brand-red transition`

### Facilities List with Map
- Numbered facility items corresponding to a site map image
- Two-column layout: numbered list left, facility map image right
- Each item: number badge (brand-red circle) + facility name + dimensions

### Buttons
- Primary: `bg-brand-red text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition`
- Secondary/Ghost: `border-2 border-brand-red text-brand-red px-6 py-3 rounded-full font-medium hover:bg-brand-red hover:text-white transition`
- Text link: `text-brand-red underline-offset-4 hover:underline`

### Nav Dropdown
- Desktop: appears on hover after 150ms delay; white panel, `shadow-xl rounded-b-xl`; items in Inter 0.9rem; `brand-red` left border on hover
- Mobile: accordion, expands below parent item; same styling

---

## 6. Testing Requirements

### Responsive Breakpoints
All components must be designed and tested at three viewports:

| Breakpoint | Width | Tailwind prefix | Target device |
|------------|-------|-----------------|---------------|
| Mobile     | 375px | (default)       | iPhone SE / small phones |
| Tablet     | 768px | `md:`           | iPad portrait |
| Desktop    | 1280px| `lg:`/`xl:`     | Laptop / monitor |

**Mobile-first** — Tailwind styles written for mobile first, then overridden at `md:` and `lg:`.

### Mobile-Specific Layout Requirements
- Nav: hamburger menu at all widths < 1024px (`lg:` breakpoint)
- Hero headline: scales from 2rem (mobile) to 4.5rem (desktop)
- Show cards: single column on mobile, 2-col tablet, 3-col desktop
- Partner logos: 2-col mobile, 4-col desktop
- Membership requirements table: horizontally scrollable container on mobile (`overflow-x-auto`)
- Footer: stacked single column on mobile
- Contact form: full-width single column on mobile
- All tap targets minimum 44×44px on mobile

### Per-section Playwright tests must verify:
1. Section renders and is visible (not hidden by overflow)
2. Heading text matches spec
3. All CTA links/buttons are present and have correct `href` or click behavior
4. **Mobile (375px)**: hamburger nav visible, hero text readable, cards stack to 1 column, no horizontal overflow
5. **Tablet (768px)**: cards 2-col, nav still hamburger (< 1024px)
6. **Desktop (1280px)**: full nav visible, cards 3-col, dropdowns work on hover
7. No horizontal scroll at any breakpoint (assert `document.body.scrollWidth <= viewport.width`)
8. Nav dropdowns open on hover (desktop) / tap (mobile)
9. Smooth scroll to anchor works (test via URL hash navigation)
10. All tap targets ≥ 44px on mobile

### Vitest unit tests:
- Show data objects have required fields (name, date, closingDate, links)
- Calendar sorts shows chronologically
- Utility functions (date formatting, etc.)

---

## 7. Content Placeholders & TODOs

Items awaiting client input (render as visible yellow `TODO` banners in dev, omit in prod):

- [ ] Facility ring dimensions (all listed as `??`)
- [x] Phone number: (613) 253-0078 and email: [email protected]
- [ ] Facility Map PDF/image
- [ ] Prize List PDFs (link targets)
- [ ] Entry system URLs (ShoWorks or equivalent)
- [ ] Sponsor logos and names (beyond Vision Saddlery)
- [ ] News/blog content
- [ ] Venue rental pricing
- [ ] How to Sponsor copy
- [ ] Team member photos
- [ ] Hero and section photography (high-res event photos)
- [ ] Facebook and Instagram URLs

---

## 8. Implementation Phases

### Phase 1 — Foundation ✅ COMPLETE
- [x] Scaffold Vite 8 + React 19 + TypeScript project
- [x] Configure Tailwind v4 with custom design tokens via `@theme` in `src/index.css`
- [x] Set up Google Fonts (Playfair Display, Inter) in `index.html`
- [x] Logo asset copied to `public/logo.png`
- [x] `Navbar` component — sticky, transparent-on-hero/white-on-scroll, hover dropdowns (desktop), hamburger accordion (mobile <1024px)
- [x] `Footer` component — 3-column dark, social icons, quick links, contact info
- [x] Playwright configured with 3 projects: Mobile Chrome (375px), Tablet (768px), Desktop (1280px); `webServer` auto-starts dev server
- [x] Vitest configured with jsdom, `@testing-library/react`, scoped to `src/**/*.test.ts(x)`
- [x] 36/36 Playwright smoke tests pass; 5/5 Vitest unit tests pass

**Tech decisions recorded:**
- Tailwind v4 (not v3) — CSS `@theme` block replaces `tailwind.config.js`
- Playwright `reuseExistingServer: true` in dev; disable in CI
- Nav dropdowns use CSS opacity/translate transition (not display:none) for smooth animation
- Mobile nav breakpoint: `lg:` (1024px)

### Phase 2 — Core Pages ✅ COMPLETE
- [x] `HeroSection` — full-viewport dark hero with logo, headline, tagline, supporting copy, two CTAs, scroll indicator, stat strip (Est. 1984, 3 Show Series, Ottawa's Premier)
- [x] `ShowsSection` — hash-activated tabs (Hunter Jumper / Dressage / Development); `ShowCard` component with series color band, championship callout, feature list, closing dates, placeholder links; 3/4/6 cards per tab
- [x] `CalendarSection` — all 13 shows chronological, grouped by month (May–Sep), color-coded by series, legend, `CalendarRow` with date badge and closing date
- [x] `AboutSection` — about text + quick facts sidebar, team cards (Jeff & Bridget / Kelsey & Dawn / Tricia), facilities numbered list + ring photo, show ring schooling card with photo banner, venue rental card with photo banner
- [x] `src/data/shows.ts` — typed `ShowEvent[]` data source, `SHOWS_BY_SERIES`, `SHOWS_CHRONOLOGICAL`, `SERIES_META`
- [x] `tests/playwright/phase2.spec.ts` — 66 new tests (22 per viewport); 102/102 total pass

**Implementation notes:**
- Hero uses `public/images/hero.jpg` (`riders_walking_down_laneway.jpg`) with a 58% black overlay for text legibility
- Development Show 2 date in PDF (`May 18`) appears to be a typo (before Dev 1 `May 27`); tentatively set to `June 7` — **confirm with client**
- Tab switching updates URL hash via `history.replaceState`; hash navigation activates correct tab via `hashchange` listener
- Inline style conflict (border shorthand vs borderBottom) resolved by setting individual border-side properties on tab buttons

### Phase 3 — Supporting Sections ✅ COMPLETE
- [x] `NewsSection` — 3 hash-activated tabs (Upcoming, Clinics, Results); `NewsCard` with image placeholder, category pill, Playfair Display headline, excerpt; `EmptyState` for empty tabs; 4/1/2 cards per tab
- [x] `PartnersSection` — Featured sponsor (Vision Saddlery), 5 placeholder sponsor tiles, How to Sponsor CTA card, Vendor Opportunities card, placeholder vendors roster
- [x] `CompetitorResourcesSection` — 4 `PrizeListCard` tiles with colored gradient thumbnails + Download PDF links; 5 `ResourcePill` association links; 7-row membership requirements table with `overflow-x-auto` mobile wrapper and checkmark SVGs; Entry links card + Other resources card
- [x] `ContactSection` — Controlled form (Formspree placeholder `https://formspree.io/f/YOUR_FORM_ID`); FormState idle/submitting/success/error; 5 fields (Name, Email, Phone optional, Subject dropdown 7 options, Message); right col: address/phone/email/social icons + Google Maps iframe embed
- [x] `src/data/news.ts` — 7 `NewsItem[]` objects, `NEWS_BY_TAB` grouped export
- [x] `src/data/resources.ts` — `ASSOCIATIONS` (5), `PRIZE_LISTS` (4), `MEMBERSHIP_REQUIREMENTS` (7 rows); all external URLs `'#'` pending client input
- [x] All 8 sections wired in `src/App.tsx`
- [x] `tests/playwright/phase3.spec.ts` — 55 new tests (across 3 viewports); **177/177 total tests pass**

**Implementation notes:**
- Formspree form ID is a placeholder; replace `YOUR_FORM_ID` in `ContactSection.tsx` when client creates account
- Google Maps embed uses no-API-key query-param URL: `maps.google.com/maps?q=...&output=embed`
- Prize list PDF links are `'#'` placeholders pending client PDFs
- Entry system URLs (ShoWorks or equivalent) are `'#'` placeholders
- Sponsor logos beyond Vision Saddlery are placeholder tiles
- Strict mode: prize list card selectors use `{ exact: true }` to avoid partial matches; membership table uses `.first()` for multi-cell text matches; Dressage nav link scoped to `mainNav`

### Photo Integration ✅ COMPLETE
17 photos copied from `design_resources/photos/` to `public/images/` with generic names:

| File | Source | Used in |
|------|---------|---------|
| `hero.jpg` | `riders_walking_down_laneway.jpg` | Hero background (58% dark overlay) |
| `team-jeff-bridget.jpg` | `jeff_mckessock.jpg` | About: Jeff & Bridget team card — left photo |
| `team-bridget.jpg` | `bridget_mckessock.jpg` | About: Jeff & Bridget team card — right photo |
| `news-season-open.jpg` | `horse_show_photo_booth.jpg` | News: 2026 Season Open card |
| `news-hunter-jumper.jpg` | `girl_smiling_and_riding.jpg` | News: Spring Trillium card |
| `news-dressage.jpg` | `dressage_rider_3.jpg` | News: Springfest Dressage card |
| `news-derby-day.jpg` | `presenting_award_with_sponsor_signs.jpg` | News: Derby Day card |
| `news-clinic.jpg` | `jeff_mckessock_teaching.jpg` | News: Clinic Schedule card |
| `news-results-champions.jpg` | `girls_lined_up_getting_ribbons.jpg` | News: 2025 Season Wrap card |
| `news-results-dressage.jpg` | `ride_with_many_ribbons.jpg` | News: Summerset Dressage card |
| `prize-list-hj.jpg` | `horse_jumping_over_jump_2.jpg` | Competitor Resources: HJ prize list thumbnail |
| `prize-list-dressage.jpg` | `dressage_rider_4.jpg` | Competitor Resources: Dressage prize list thumbnail |
| `prize-list-esd.jpg` | `dressage_rider.jpg` | Competitor Resources: ESD prize list thumbnail |
| `prize-list-development.jpg` | `girl_smiling_with_ribbon.jpg` | Competitor Resources: Development prize list thumbnail |
| `facility-ring.jpg` | `facilities_sand_ring_3.jpg` | About: Facilities section (replaces map placeholder) |
| `schooling.jpg` | `stephanie_wark_teaching_4_riders_2.jpg` | About: Show Ring Schooling photo banner |
| `venue-grass-ring.jpg` | `174_june30_2025.jpg` | About: Venue Rental photo banner |
| `vendors.jpg` | `horse_show_vendors.jpg` | Partners: Vendors section photo banner |

**Note**: Images are uncompressed originals (5–30 MB each). Optimize with WebP conversion and responsive `srcset` before production deployment.

### Phase 4 — Polish & QA ✅ COMPLETE (2026-06-16)
- [x] Responsive QA across all breakpoints (Playwright: Mobile 375px, Tablet 768px, Desktop 1280px)
- [x] Playwright tests for all sections (225 tests passing)
- [x] Scroll spy — `useScrollSpy` hook with `requestAnimationFrame`; `aria-current="page"` on active nav item (desktop + mobile)
- [x] Skip-to-content link (`<a class="skip-to-content" href="#main-content">`) visible on keyboard focus; `<main id="main-content">`
- [x] Global `focus-visible` styles in `src/index.css` (2px brand-red outline)
- [x] Image lazy loading — `loading="lazy" decoding="async"` on all below-fold `<img>` tags
- [x] Accessibility — ARIA labels on nav, landmark roles (`<main>`, `<header>`, `<footer>`, `<nav>`), decorative images `alt=""`
- [x] GitHub Pages deployment — `.github/workflows/deploy.yml`, `public/.nojekyll`, `vite.config.ts` `base` via `VITE_BASE_URL` env var
- [x] TypeScript strict mode — fixed `vite.config.ts` (import from `vitest/config`), unused parameter prefixed `_href`
- [ ] Page performance audit (Lighthouse) — deferred; image optimization (WebP + srcset) recommended before production
- [ ] Accessibility color-contrast audit — deferred; visual QA recommended with browser DevTools

---

## 9. Out of Scope (v1)
- CMS or content management system
- User accounts / login
- Online payments
- Show results database
- Show entry system (links to external ShoWorks/etc.)
- Blog/news CMS (static placeholder content only)
