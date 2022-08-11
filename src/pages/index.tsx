import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tapass</title>
        <meta name="description" content="Tapass project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen text-3xl font-medium flex items-center justify-center">
        Hello world in tailwindcss
      </main>
    </div>
  )
}

export default Home
