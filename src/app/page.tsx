import Reviews from "@/app/components/customer-reviews/reviews";
import HeroSection from "@/app/components/hero-section/heroSection";
import Navbar from "@/app/components/navbar/navbar";
import Products from "@/app/components/products/products";
import Services from "@/app/components/sevices/services";
import About from "@/app/components/web-about/web-about";
import SignIn from "@/app/components/login/signIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white  ">
      <HeroSection />
      <Products />
      <About />
      <Reviews />
      <Services />
      <SignIn />
    </main>
  );
}
