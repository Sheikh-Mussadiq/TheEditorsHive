import { Film, Edit, Palette, Megaphone, PenTool, Lightbulb } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/service-card"
import ProcessStep from "@/components/process-step"
import FaqAccordion from "@/components/faq-accordion"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <PageHeader
        title="Our Services"
        description="From concept to final delivery, we offer comprehensive video production services tailored to your needs."
      />

      <main className="container px-4 py-12 mx-auto">
        <section className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive range of video production services ensures that we can handle your project from concept
              to completion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Film className="w-10 h-10" />}
              title="Commercial Production"
              description="High-quality commercials that capture attention and drive engagement with your brand."
            />
            <ServiceCard
              icon={<Edit className="w-10 h-10" />}
              title="Video Editing"
              description="Professional editing services to transform your raw footage into compelling stories."
            />
            <ServiceCard
              icon={<Palette className="w-10 h-10" />}
              title="Motion Graphics"
              description="Eye-catching animations and visual effects that enhance your video content."
            />
            <ServiceCard
              icon={<Megaphone className="w-10 h-10" />}
              title="Corporate Videos"
              description="Professional videos that communicate your company's message, values, and culture."
            />
            <ServiceCard
              icon={<PenTool className="w-10 h-10" />}
              title="Content Creation"
              description="Engaging content for social media, websites, and marketing campaigns."
            />
            <ServiceCard
              icon={<Lightbulb className="w-10 h-10" />}
              title="Creative Direction"
              description="Strategic guidance to ensure your video aligns with your brand and objectives."
            />
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure every project is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            <ProcessStep
              number="01"
              title="Discovery & Concept"
              description="We begin by understanding your goals, audience, and vision. Our team works with you to develop a concept that aligns with your objectives."
            />
            <ProcessStep
              number="02"
              title="Pre-Production"
              description="We handle all the planning details: scripting, storyboarding, location scouting, casting, and scheduling to ensure a smooth production process."
            />
            <ProcessStep
              number="03"
              title="Production"
              description="Our experienced crew captures high-quality footage using state-of-the-art equipment, ensuring every shot meets our exacting standards."
            />
            <ProcessStep
              number="04"
              title="Post-Production"
              description="Our editors, sound designers, and motion graphics artists work their magic, crafting a polished final product that tells your story."
            />
            <ProcessStep
              number="05"
              title="Review & Delivery"
              description="We collaborate with you on revisions to ensure the final product perfectly matches your vision before delivering in your required format."
            />
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Find answers to common inquiries below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion
              items={[
                {
                  question: "How long does a typical video production take?",
                  answer:
                    "The timeline varies depending on the complexity of the project. A simple corporate video might take 2-3 weeks, while a more complex commercial could take 4-8 weeks from concept to delivery.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "We customize our pricing based on your specific needs and project requirements. Factors that influence cost include production complexity, shooting days, location, talent, and post-production needs.",
                },
                {
                  question: "Do you handle projects of all sizes?",
                  answer:
                    "Yes, we work on projects of all scales, from short social media content to full-scale commercial productions. Our team adapts to meet the specific needs of each project.",
                },
                {
                  question: "Can you work with our existing brand guidelines?",
                  answer:
                    "Absolutely. We ensure all video content aligns perfectly with your established brand identity, voice, and guidelines.",
                },
                {
                  question: "What formats do you deliver the final videos in?",
                  answer:
                    "We can deliver your videos in any format required for your specific needs, whether for broadcast, web, social media, or internal use.",
                },
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

