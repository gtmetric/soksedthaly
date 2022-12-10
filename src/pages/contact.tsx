import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/Navbar/NavBar'

const Contact: NextPage = () => {
  return (
    <main className="text-center py-12 px-8">
      <h1 className="text-3xl font-bold py-24">Contact</h1>
      {/* <div className="flex justify-center items-center py-8">
        <div className="pr-12 w-96">
          <Image
            src="/assets/test.jpeg"
            alt="Test Image"
            width="334"
            height="334"
          />
        </div>
        <div className="text-left pl-12 sm:pl-4 w-96">
          <h1 className="text-xl font-bold py-2">Title</h1>
          <p className="text-lg py-2">Some description</p>
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <div className="text-left pr-12 w-96">
          <h1 className="text-xl font-bold py-2">Title</h1>
          <p className="text-lg py-2">Some description</p>
        </div>
        <div className="pl-12 w-96">
          <Image
            src="/assets/test.jpeg"
            alt="Test Image"
            width="334"
            height="334"
          />
        </div>
      </div> */}
    </main>
  )
}

export default Contact
