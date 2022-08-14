import type { NextPage } from 'next'
import Head from 'next/head'
import { Features } from '../sections/Features'
import { Hero } from '../sections/Hero'
import { Info } from '../sections/Info'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tapass</title>
        <meta name="description" content="Tapass project" />
        <link rel="icon" href="/favicon.ico" />

        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Hero />
        <Info />
        <Features />
        <div className="h-[400px] bg-white"></div>
        <div className="h-[400px] bg-product-darkBlue"></div>
      </main>
    </div>
  )
}

export default Home
