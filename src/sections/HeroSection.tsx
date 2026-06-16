import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        data-testid="section-home"
        className="relative min-h-screen flex flex-col"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
        }}
        aria-label="Westar Farms — hero"
      >
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.58)' }}
          aria-hidden="true"
        />

        {/* Bottom gradient for text readability */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-12">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Westar Farms"
            className="h-16 sm:h-20 lg:h-24 w-auto mx-auto mb-8 brightness-0 invert"
          />

          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-6" aria-hidden="true">
            <span className="block w-16 h-px bg-brand-red opacity-70" />
            <span className="block w-2 h-2 rounded-full bg-brand-red opacity-70" />
            <span className="block w-16 h-px bg-brand-red opacity-70" />
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            Westar Farms
          </h1>

          {/* Tagline */}
          <p
            className="uppercase tracking-widest mb-8 text-white/60"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', letterSpacing: '0.25em' }}
          >
            Live your love of horses
          </p>

          {/* Supporting copy */}
          <p
            className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
          >
            Serving the Ottawa equestrian community since 1984 — quality competitions,
            beautiful facilities, and a welcoming atmosphere for riders of all levels.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shows" className="btn-primary">
              View Our Shows
            </Link>
            <Link
              to="/contact"
              className="btn-ghost"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="relative flex justify-center pb-8 animate-bounce"
          aria-hidden="true"
        >
          <Link to="/shows" tabIndex={-1}>
            <svg
              className="w-6 h-6 text-white/40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* At-a-Glance stat strip */}
      <div data-testid="stat-strip" className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { stat: 'Est. 1984', label: 'Years of Experience' },
              { stat: '3 Show Series', label: 'Hunter Jumper · Dressage · Development' },
              { stat: 'Ottawa Area', label: 'Equestrian Venue' },
            ].map(({ stat, label }) => (
              <div key={stat} className="py-8 px-6 text-center">
                <p
                  className="text-white mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                  }}
                >
                  {stat}
                </p>
                <p
                  className="text-white/50"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
