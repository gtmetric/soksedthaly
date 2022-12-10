import { NavLink } from './NavLink'

type NavDropdownMenuProps = {
  show: boolean
  animation: 'animate-fade-in-down' | 'animate-fade-out-up'
  onClose: () => void
}

export const NavDropdownMenu = ({
  show,
  animation,
  onClose,
}: NavDropdownMenuProps) => (
  <div className={animation}>
    <div
      className={`${
        show ? '' : 'hidden'
      } sm:hidden bg-white container flex flex-col text-center`}
    >
      <NavLink href="/about" title="About" onClick={onClose} />
      <NavLink href="/blog" title="Blog" onClick={onClose} />
      <NavLink href="/contact" title="Contact" onClick={onClose} />
    </div>
  </div>
)
