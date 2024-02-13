'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Images from '@/components/Images'
import Footer from '@/components/Footer'
import Info from '@/components/Info'
import Pricing from '@/components/Pricing'
import Form from '@/components/Form'
import Table from '@/components/Table'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
      <Navbar />
      <Hero />
      <Images />
      <Info />
      {/* <Table /> */}
      <Pricing />
      <Form />
      <Footer />
    </main >
  )
}
