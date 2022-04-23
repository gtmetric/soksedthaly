import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Head from 'next/head'

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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
