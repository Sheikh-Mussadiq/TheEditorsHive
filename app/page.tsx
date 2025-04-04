import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PortfolioPreview from "@/components/portfolio-preview"
import TestimonialsSection from "@/components/testimonials-section"
import ContactCta from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioPreview />
        <TestimonialsSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}

