'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Images from '@/components/Images'
import Footer from '@/components/Footer'
import Info from '@/components/Info'
import Pricing from '@/components/Pricing'
import Form from '@/components/Form'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
      <Navbar />
      <Hero />
      <Images />
      <Info />
      <Pricing />
      <Form />

      <Footer />

    </main >
  )
}
