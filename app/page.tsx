import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Products from "./components/Products";
import About from "./components/About";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StatsBar from "./components/StatsBar";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <WhyChoose />
      <Products />
      <About />
      <Industries />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}