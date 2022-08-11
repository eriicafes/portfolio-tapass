import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../sections/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tapass</title>
        <meta name="description" content="Tapass project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home
