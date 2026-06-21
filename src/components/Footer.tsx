import { Link } from 'react-router-dom'
import { asset } from '../utils/asset'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shows', href: '/shows' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'News', href: '/news' },
  { label: 'Partners', href: '/partners' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1: Logo + tagline */}
          <div>
            <img
              src={asset("/logo.png")}
              alt="Westar Farms"
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Live your love of horses.
              <br />
              Serving the Ottawa equestrian community since 1984.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4
              className="font-sans text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact + social */}
          <div>
            <h4
              className="font-sans text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact
            </h4>
            <address className="not-italic text-sm text-gray-400 space-y-1.5 leading-relaxed">
              <p>8132 Fernbank Rd.</p>
              <p>Ashton, Ontario, K0A 1B0</p>
              <p>
                <a href="tel:+16132530078" className="hover:text-white transition-colors">
                  (613) 253-0078
                </a>
              </p>
              <p>
                <a href="mailto:info@westarfarms.ca" className="hover:text-white transition-colors">
                  info@westarfarms.ca
                </a>
              </p>
            </address>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com/westarfarms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Westar Farms on Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-brand-red hover:text-brand-red transition-colors"
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
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-brand-red hover:text-brand-red transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Westar Farms. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            8132 Fernbank Rd., Ashton, Ontario
          </p>
        </div>
      </div>
    </footer>
  )
}
