import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contact } from '../data/siteContent'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/writing', label: 'Writing' },
]

export function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const [transitionState, setTransitionState] = useState('route-enter')

  useEffect(() => {
    setTransitionState('route-enter')
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    mainRef.current?.focus({ preventScroll: true })

    const timeoutId = window.setTimeout(() => {
      setTransitionState('route-idle')
    }, 320)

    return () => window.clearTimeout(timeoutId)
  }, [pathname])

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

      <main ref={mainRef} tabIndex={-1}>
        <div key={pathname} className={`route-shell ${transitionState}`}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
