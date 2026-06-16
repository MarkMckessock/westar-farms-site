import { Link } from 'react-router-dom'

interface TeamMember {
  name: string
  role: string
  bio: string
  photo?: string
  photo2?: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Jeff & Bridget McKessock',
    role: 'Founders',
    bio: 'Jeff and Bridget started Westar Farms in 1984 and have been at their current home since 1988. Both bring extensive backgrounds as competitors — Bridget in hunter-jumper and Jeff in 3-day eventing and show jumping. After 40 years running a highly successful riding school and competition show barn, they now focus their efforts on hosting horse shows, events, and clinics.',
    photo: '/images/team-jeff-bridget.jpg',
    photo2: '/images/team-bridget.jpg',
  },
  {
    name: 'Kelsey & Dawn Butler',
    role: 'Show Office — Trillium, Bronze & Dressage',
    bio: 'Kelsey has managed the show office for the Trillium-Bronze and Dressage Shows for many years, and Dawn has been her right hand in welcoming competitors and keeping things running smoothly.',
  },
  {
    name: 'Tricia Turriff',
    role: 'Show Office — Development Shows',
    bio: 'Tricia runs the show office for the Development Shows and is a wonderful guide for first-time competitors and families navigating the show world.',
  },
]

const FACILITIES = [
  'Two sand show rings',
  'Sand warm-up ring',
  'Grass Grand Prix Ring',
  'Grass Hunter Derby Ring',
  'Grass warm-up ring',
  '40 top-quality ringside show stalls plus overflow stabling',
  '4 wash stalls',
  'Lunging ring',
  'Gardens and shade under the maple trees',
]

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      {/* Photo or placeholder banner */}
      <div className="aspect-[4/3] relative overflow-hidden" aria-hidden="true">
        {member.photo && member.photo2 ? (
          <div className="flex h-full">
            <img src={member.photo} alt="" loading="lazy" decoding="async" className="w-1/2 h-full object-cover object-top" />
            <img src={member.photo2} alt="" loading="lazy" decoding="async" className="w-1/2 h-full object-cover object-top" />
          </div>
        ) : member.photo ? (
          <img src={member.photo} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(203,46,46,0.06) 0%, rgba(203,46,46,0.02) 100%)' }}
          >
            <svg className="w-12 h-12" style={{ color: 'rgba(203,46,46,0.25)' }} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h4
          className="mb-0.5"
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700 }}
        >
          {member.name}
        </h4>
        <p
          className="text-xs font-semibold uppercase tracking-wide mb-3"
          style={{ color: 'var(--color-brand-red)' }}
        >
          {member.role}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-gray)' }}>
          {member.bio}
        </p>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <>
      {/* About */}
      <section
        id="about"
        data-testid="section-about"
        className="py-20 lg:py-28"
        style={{ background: 'var(--color-brand-white)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left: text */}
            <div className="lg:col-span-7">
              <p className="section-label">About Us</p>
              <h2 className="section-heading mt-1">About Westar Farms</h2>
              <hr className="section-rule" />

              <div
                className="space-y-4 leading-relaxed"
                style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
              >
                <p>
                  Westar Farms offers 3 different horse show series and numerous special events serving
                  the equestrian community of Ottawa and the surrounding areas. Our decades of experience
                  in the equestrian industry, and feedback from competitors and coaches, help us offer
                  the types of events that meet their needs.
                </p>
                <p>
                  Our focus is on producing high-quality competitions for riders of all levels, and we
                  love to include an element of fun.
                </p>
                <p>
                  We've been running Trillium and Bronze shows since 1988, expanding our show grounds
                  and facilities to meet the changing needs of today's human and equine athletes. The
                  Vision Hunter Derby Series gives riders an opportunity to compete in field hunter-style
                  classes, and Derby Day in September is a must-attend with numerous Feature Classes.
                </p>
                <p>
                  Dressage competition has grown from a few Silver shows to a series of four
                  Gold-Silver-Bronze-ESD shows, serving dressage riders of all levels. Series hi-point
                  awards, the Ontario Dressage Silver Championships, and ESD Championships in September
                  round out the season in style.
                </p>
                <p>
                  Development Shows are for riders and horses new to competition. Six shows make up the
                  series with fun special events at each show. At the Finale in September, competitors,
                  coaches, and families enjoy a pizza party and series hi-point awards.
                </p>
                <p>
                  Our show rings are available for schooling most of the summer. Discount days and
                  special events allow horse lovers to school in a relaxed atmosphere or try fun events
                  like Derby Cross or field hunter classes.
                </p>
                <p>
                  Westar Farms show facilities are available to rent for clinics or shows.
                </p>
              </div>
            </div>

            {/* Right: quick facts */}
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div
                className="rounded-2xl p-8"
                style={{ background: 'var(--color-brand-light)' }}
              >
                <h3
                  className="mb-6"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}
                >
                  At a Glance
                </h3>
                <dl className="space-y-4">
                  {[
                    { term: 'Founded', detail: '1984 by Jeff & Bridget McKessock' },
                    { term: 'Current Location', detail: '8132 Fernbank Rd., Ashton, Ontario' },
                    { term: 'Season', detail: 'May through September' },
                    { term: 'Show Series', detail: 'Hunter Jumper · Dressage · Development' },
                    { term: 'Association', detail: 'THJA · OE · OADG · Equestrian Canada' },
                  ].map(({ term, detail }) => (
                    <div key={term} className="flex flex-col gap-0.5">
                      <dt
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: 'var(--color-brand-red)' }}
                      >
                        {term}
                      </dt>
                      <dd
                        className="text-sm"
                        style={{ color: 'var(--color-brand-dark)', fontFamily: 'var(--font-sans)' }}
                      >
                        {detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Team */}
          <div id="about-team" className="mt-20">
            <p className="section-label">Our Team</p>
            <h3
              className="mt-1 mb-1"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}
            >
              The People Behind the Shows
            </h3>
            <hr className="section-rule" />
            <p className="section-lead mb-8">
              Our show ring managers, ring crew, officials, staff, and volunteers work together to
              produce enjoyable events where riders can test their skills in a safe and welcoming
              environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEAM.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section
        id="about-facilities"
        data-testid="section-facilities"
        className="py-20 lg:py-28"
        style={{ background: 'var(--color-brand-light)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">Facilities</p>
          <h2 className="section-heading mt-1">Our Facility</h2>
          <hr className="section-rule" />
          <p className="section-lead mb-10">
            Our beautiful facility features gardens and maple trees for shade, providing a welcoming
            setting for competitors throughout the season.
          </p>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            {/* List */}
            <ul className="space-y-3">
              {FACILITIES.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                    style={{ backgroundColor: 'var(--color-brand-red)', minWidth: '1.25rem' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-brand-dark)', fontFamily: 'var(--font-sans)' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Facility ring photo */}
            <div className="mt-10 lg:mt-0">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm">
                <img
                  src="/images/facility-ring.jpg"
                  alt="Westar Farms sand ring with jumps"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Ring Schooling + Venue Rental */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'var(--color-brand-white)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Schooling */}
            <div
              id="show-ring-schooling"
              data-testid="section-schooling"
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              style={{ background: 'var(--color-brand-light)' }}
            >
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src="/images/schooling.jpg"
                  alt="Instructor coaching riders in the show ring"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <p className="section-label">Schooling</p>
                <h3
                  className="mt-2 mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}
                >
                  Show Ring Schooling
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-brand-gray)' }}
                >
                  Our show rings are available for schooling most of the summer. Discount days and special
                  events allow horse lovers to come and school in a relaxed atmosphere or try a fun event
                  like Derby Cross or field hunter classes.
                </p>
                <Link to="/contact" className="btn-primary" style={{ fontSize: '0.875rem' }}>
                  Contact for Availability
                </Link>
              </div>
            </div>

            {/* Venue Rental */}
            <div
              id="about-venue-rental"
              data-testid="section-venue-rental"
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              style={{ background: 'var(--color-brand-white)' }}
            >
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src="/images/venue-grass-ring.jpg"
                  alt="Westar Farms grass show ring"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <p className="section-label">Venue</p>
                <h3
                  className="mt-2 mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}
                >
                  Venue Rental
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-brand-gray)' }}
                >
                  Westar Farms show facilities are available to rent for clinics or shows. Our
                  well-maintained rings, stabling, and amenities make it an excellent choice for your
                  event.
                </p>
                <Link to="/contact" className="btn-ghost" style={{ fontSize: '0.875rem' }}>
                  Inquire About Rental
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
