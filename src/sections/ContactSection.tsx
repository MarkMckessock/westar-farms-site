import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const SUBJECTS = [
  'General Inquiry',
  'Show Entry Question',
  'Venue Rental',
  'Sponsorship',
  'Vendor Inquiry',
  'Show Ring Schooling',
  'Other',
]

function ContactInfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: 'rgba(203,46,46,0.1)' }}
        aria-hidden="true"
      >
        <div style={{ color: 'var(--color-brand-red)' }}>{icon}</div>
      </div>
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-wide mb-0.5"
          style={{ color: 'var(--color-brand-gray)' }}
        >
          {label}
        </p>
        <div className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-dark)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    try {
      // Replace 'YOUR_FORM_ID' with the actual Formspree form ID when available
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      setFormState(res.ok ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white transition-colors duration-150 outline-none focus:border-brand-red`
  const inputStyle = {
    fontFamily: 'var(--font-sans)',
    color: 'var(--color-brand-dark)',
  }

  return (
    <section
      id="contact"
      data-testid="section-contact"
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-brand-light)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            {formState === 'success' ? (
              <div
                className="rounded-2xl p-10 text-center"
                data-testid="contact-success"
                style={{ background: 'rgba(74,124,89,0.08)', border: '1px solid rgba(74,124,89,0.2)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(74,124,89,0.15)' }}
                  aria-hidden="true"
                >
                  <svg className="w-7 h-7" style={{ color: '#4a7c59' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#4a7c59' }}
                >
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-brand-gray)' }}>
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
                data-testid="contact-form"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ color: 'var(--color-brand-gray)' }}
                    >
                      Name <span style={{ color: 'var(--color-brand-red)' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ color: 'var(--color-brand-gray)' }}>
                      Email <span style={{ color: 'var(--color-brand-red)' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ color: 'var(--color-brand-gray)' }}
                    >
                      Phone <span className="font-normal normal-case" style={{ color: 'var(--color-brand-gray)' }}>(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="(613) 555-0100"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ color: 'var(--color-brand-gray)' }}
                    >
                      Subject <span style={{ color: 'var(--color-brand-red)' }}>*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={values.subject}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: 'none' }}
                    >
                      <option value="">Select a topic…</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                    style={{ color: 'var(--color-brand-gray)' }}
                  >
                    Message <span style={{ color: 'var(--color-brand-red)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-sm mb-4" style={{ color: 'var(--color-brand-red)' }}>
                    Something went wrong. Please try again or email us directly at{' '}
                    <a href="mailto:info@westarfarms.ca" className="underline">
                      info@westarfarms.ca
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="btn-primary w-full sm:w-auto justify-center"
                  style={formState === 'submitting' ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                >
                  {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info + map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5">
              <ContactInfoItem
                label="Address"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                <address className="not-italic">
                  8132 Fernbank Rd.<br />
                  Ashton, Ontario, K0A 1B0<br />
                  Canada
                </address>
              </ContactInfoItem>

              <ContactInfoItem
                label="Phone"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                <a href="tel:+16132530078" className="hover:underline" style={{ color: 'var(--color-brand-dark)' }}>
                  (613) 253-0078
                </a>
              </ContactInfoItem>

              <ContactInfoItem
                label="Email"
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                <a href="mailto:info@westarfarms.ca" className="hover:underline" style={{ color: 'var(--color-brand-dark)' }}>
                  info@westarfarms.ca
                </a>
              </ContactInfoItem>

              {/* Social */}
              <div className="flex gap-3 pt-1">
                <a
                  href="https://facebook.com/westarfarms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Westar Farms on Facebook"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/westarfarms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Westar Farms on Instagram"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              data-testid="map-embed"
            >
              <iframe
                title="Westar Farms location map"
                src="https://maps.google.com/maps?q=8132+Fernbank+Rd,+Ashton,+Ontario,+Canada&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="240"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
