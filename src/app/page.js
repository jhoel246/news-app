import Image from 'next/image'
import Head from 'next/head'
import About from '@/pages/about'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>News App</title>
        <meta name='description' content='newsapp - the best app to read news' />
        <link rel="shortcut icon" href="./favicon.ico"/>
      </Head>

      <h1 className='text-yellow-500'>hola mundo</h1>
      <About/>
    </main>
  )
}
