import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/Navbar/NavBar'
import About from './about'

const Home: NextPage = About
// const Home: NextPage = () => {
//   return (
//     <main className="text-center py-12 px-8">
//       <h1 className="text-3xl font-bold py-24">Home</h1>
//     </main>
//   )
// }

export default Home
