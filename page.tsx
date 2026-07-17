import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Method from "@/components/sections/Method";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Method />
        <Services />
        <Differentials />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
