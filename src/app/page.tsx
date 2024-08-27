import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Feature from "@/app/components/features";
import Stats from "@/app/components/stats";
import AdvancedFeatures from "@/app/components/advancedFeatures";
import Testimonials from "@/app/components/testimonials";
import CTA from "@/app/components/cta";
import FAQ from "@/app/components/faq";
import TestimonialCarousel from "@/app/components/testimonialsCarousel";
import SimpleCTA from "@/app/components/simpleCTA";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Stats />
      <AdvancedFeatures />
      <Testimonials />
      <CTA />
      <FAQ />
      <TestimonialCarousel />
      <SimpleCTA />
      <Footer />
    </div>
  );
}
