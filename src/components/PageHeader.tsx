interface PageHeaderProps {
  label: string
  title: string
  subtitle?: string
  image?: string
}

export default function PageHeader({ label, title, subtitle, image }: PageHeaderProps) {
  return (
    <div
      className="relative flex items-end"
      style={{
        minHeight: '22rem',
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundColor: 'var(--color-brand-dark)',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: image
            ? 'linear-gradient(to bottom, rgba(10,8,6,0.55) 0%, rgba(10,8,6,0.75) 100%)'
            : 'linear-gradient(135deg, #1a1408 0%, #1a1a1a 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-36 w-full">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'var(--color-brand-red)', fontFamily: 'var(--font-sans)' }}
        >
          {label}
        </p>

        <div className="flex items-center gap-3 mb-5" aria-hidden="true">
          <span className="block h-px w-12 opacity-60" style={{ backgroundColor: 'var(--color-brand-red)' }} />
          <span className="block h-1 w-1 rounded-full opacity-60" style={{ backgroundColor: 'var(--color-brand-red)' }} />
        </div>

        <h1
          className="text-white"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-4 max-w-2xl"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
