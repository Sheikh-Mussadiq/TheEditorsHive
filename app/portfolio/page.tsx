import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import PortfolioFilter from "@/components/portfolio-filter"
import PortfolioGrid from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <PageHeader
        title="Our Portfolio"
        description="Explore our collection of work across various industries and styles."
      />

      <main className="container px-4 py-12 mx-auto">
        <section className="py-12">
          <PortfolioFilter />
          <PortfolioGrid />
        </section>
      </main>

      <Footer />
    </div>
  )
}

