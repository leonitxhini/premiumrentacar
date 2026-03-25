import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Fleet from "@/components/sections/Fleet";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <Fleet />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
