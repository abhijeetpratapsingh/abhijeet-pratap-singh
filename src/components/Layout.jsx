import { NavLink, Outlet } from 'react-router-dom'
import { contact } from '../data/siteContent'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/writing', label: 'Writing' },
]

export function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-main">
          <NavLink className="brand" to="/">
            <span className="brand-mark" />
            <span>Abhijeet Pratap Singh</span>
          </NavLink>

          <a className="header-contact" href={`mailto:${contact.email}`}>
            Drop a mail
          </a>
        </div>

        <nav className="site-nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to={link.to}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
