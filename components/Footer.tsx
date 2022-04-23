import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 opacity-90 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center py-6">
          <div>
            <Link href="#" passHref>
              <a className="text-gray-300 hover:text-white px-3 cursor-pointer">LinkedIn</a>
            </Link>
            <Link href="#" passHref>
              <a className="text-gray-300 hover:text-white px-3 cursor-pointer">GitHub</a>
            </Link>
            <Link href="#" passHref>
              <a className="text-gray-300 hover:text-white px-3 cursor-pointer">Contact</a>
            </Link>
          </div>
          <Link href="#" passHref>
            <a className="text-xl text-white font-bold cursor-pointer pr-2">
              Soksedtha Ly
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
