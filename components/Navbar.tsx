import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Navbar = () => {
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
    <nav className="fixed w-full top-0 z-10 sm:bg-gray-900 sm:bg-opacity-90">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-4xl bg-gray-900 px-5 py-4 backdrop-filter backdrop-blur-sm bg-opacity-90 sm:bg-opacity-0 shadow-lg xl:max-w-6xl">
        <Link href="/" passHref>
          <a className="text-xl text-white font-semibold px-3 cursor-pointer md:text-2xl">
            Soksedtha Ly
          </a>
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg sm:hidden text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setNavChange(!navOpen)}
        >
          <span className="sr-only">Open main menu</span>
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
        <div className="hidden w-full sm:block sm:w-auto">
          <Link href="/about" passHref>
            <a className="text-gray-300 hover:text-white px-3 cursor-pointer md:text-lg">
              About
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a className="text-gray-300 hover:text-white px-3 cursor-pointer md:text-lg">
              Blog
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a className="text-gray-300 hover:text-white px-3 cursor-pointer md:text-lg">
              Contact
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`${
          navChange ? 'animate-fade-in-down' : 'animate-fade-out-up'
        } bg-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-90`}
      >
        <div
          className={`${
            navOpen ? '' : 'hidden'
          } sm:hidden container grid grid-flow-row grid-rows-3 text-white text-center py-2 pb-4`}
        >
          <Link href="/about" passHref>
            <a
              className="text-gray-300 hover:text-white cursor-pointer py-2"
              onClick={() => setNavChange(!navOpen)}
            >
              About
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a
              className="text-gray-300 hover:text-white cursor-pointer py-2"
              onClick={() => setNavChange(!navOpen)}
            >
              Blog
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a
              className="text-gray-300 hover:text-white cursor-pointer py-2"
              onClick={() => setNavChange(!navOpen)}
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
