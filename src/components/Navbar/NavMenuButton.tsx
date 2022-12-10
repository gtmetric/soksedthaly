type MobileMenuProps = {
  onClick: () => void
}

export const NavMenuButton = ({ onClick }: MobileMenuProps) => (
  <button
    data-collapse-toggle="mobile-menu"
    type="button"
    className="inline-flex items-center text-sm sm:hidden text-default focus:ring-default"
    aria-controls="mobile-menu"
    aria-expanded="false"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
)
