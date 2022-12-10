import Head from 'next/head'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/Navbar/NavBar'
import { Footer } from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Soksedtha Ly</title>
        <meta
          name="description"
          content="A Portfolio and Blog Site by Soksedtha Ly"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
