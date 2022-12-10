import { useEffect, useState } from 'react'
import { NavLogo } from './NavLogo'
import { NavMenuButton } from './NavMenuButton'
import { NavLink } from './NavLink'
import { NavDropdownMenu } from './NavDropdownMenu'

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [navChange, setNavChange] = useState(false)

  useEffect(() => {
    if (!navChange) {
      setTimeout(() => {
        setNavOpen(navChange)
      }, 450)
      return
    }
    setNavOpen(navChange)
  }, [navChange])

  return (
    <nav className="fixed w-full top-0">
      <div className="border-b-gray-primary border-b">
        <div className="container bg-white flex flex-wrap justify-between items-center mx-auto max-w-4xl px-5 py-4 sm:justify-start sm:px-10 sm:py-8 sm:max-w-screen-2xl">
          <NavLogo />

          <div className="hidden w-full space-x-4 sm:block sm:w-auto sm:pl-9">
            <NavLink href="/about" title="About" />
            <NavLink href="/blog" title="Blog" />
            <NavLink href="/contact" title="Contact" />
          </div>

          <NavMenuButton onClick={() => setNavChange(!navOpen)} />
        </div>
      </div>

      <NavDropdownMenu
        show={navOpen}
        animation={navChange ? 'animate-fade-in-down' : 'animate-fade-out-up'}
        onClose={() => setNavChange(!navOpen)}
      />
    </nav>
  )
}
