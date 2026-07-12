import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Products from "@/components/products/Products";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Products />

      <Services />

      <Contact />

      <Footer />
    </>
  );
}