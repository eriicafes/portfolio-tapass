import type { NextPage } from 'next'
import Head from 'next/head'
import { Features } from '../sections/Features'
import { Footer } from '../sections/Footer'
import { Hero } from '../sections/Hero'
import { Info } from '../sections/Info'
import { Reviews } from '../sections/Reviews'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tapass</title>
        <meta name="description" content="Tapass project" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <main>
        <Hero />
        <Info />
        <Features />
        <Reviews />
        <Footer />
      </main>
    </div>
  )
}

export default Home
