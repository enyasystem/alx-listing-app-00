import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="A small Airbnb-like listing page scaffold" />
      </Head>

      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Cozy Apartment" description="2 beds · 1 bath" />
          <Card title="Beach House" description="4 beds · 3 baths" />
          <Card title="City Studio" description="1 bed · 1 bath" />
        </section>

        <div className="mt-6">
          <Button onClick={() => alert('Book Now')} label="Book Now" />
        </div>
      </main>
    </>
  )
}
