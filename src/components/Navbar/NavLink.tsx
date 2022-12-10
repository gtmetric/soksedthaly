import Link from 'next/link'

type NavLinkProps = {
  href: string
  title: string
  onClick?: () => void
}

export const NavLink = ({ href, title, onClick }: NavLinkProps) => (
  <Link href={href} passHref>
    <a
      className="text-default text-base font-medium px-3 py-5 cursor-pointer active:bg-gray-primary sm:text-xl"
      onClick={onClick}
    >
      {title}
    </a>
  </Link>
)
