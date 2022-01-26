// Next
import Head from 'next/head'

// Components
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-body text-white pb-24">
      <Head>
        <title>Tom Young</title>
      </Head>
      <Navbar />
    </div>
  )
}
