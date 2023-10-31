import HeroSection from '@/components/hero-section/heroSection'
import Navbar from '@/components/navbar/navbar'
import Products from '@/components/products/products'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      
      <HeroSection/>
      <Products/>
      
    </main>
  )
}
