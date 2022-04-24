import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 opacity-90">
      <div className="container mx-auto max-w-4xl px-5 xl:max-w-6xl">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="https://www.linkedin.com/in/soksedtha-ly" passHref>
              <a
                className="text-gray-300 hover:text-white px-3 cursor-pointer md:text-lg"
                target="_blank"
              >
                LinkedIn
              </a>
            </Link>
            <Link href="https://github.com/gtmetric" passHref>
              <a
                className="text-gray-300 hover:text-white px-3 cursor-pointer md:text-lg"
                target="_blank"
              >
                GitHub
              </a>
            </Link>
          </div>
          <Link href="/contact" passHref>
            <a className="text-gray-300 hover:text-white px-3 cursor-pointer md:text-lg">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
