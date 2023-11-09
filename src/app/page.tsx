import Reviews from '@/components/customer-reviews/reviews'
import HeroSection from '@/components/hero-section/heroSection'
import Navbar from '@/components/navbar/navbar'
import Products from '@/components/products/products'
import Services from '@/components/sevices/services'
import About from '@/components/web-about/web-about'
import SignIn from '@/components/login/signIn'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white  ">
      
      <HeroSection />
      <Products/>
      <About/>
      <Reviews/>
      <Services/>
      <SignIn/>
      
      
      
    </main>
  )
}
