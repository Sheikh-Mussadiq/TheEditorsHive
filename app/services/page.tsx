import {
  Film,
  Edit,
  Palette,
  Megaphone,
  PenTool,
  Lightbulb,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import ServiceCard from "@/components/service-card";
import ProcessStep from "@/components/process-step";
import FaqAccordion from "@/components/faq-accordion";

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
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive range of video production services ensures that
              we can handle your project from concept to completion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Film className="w-10 h-10" />}
              title="YoutTube video Editing"
              description="Maximize your YouTube channel's potential with our professional editing services. We understand the nuances of YouTube content, from engaging intros and seamless transitions to dynamic graphics and sound design. Our team ensures your videos are optimized for viewer retention and platform algorithms, helping you grow your audience and elevate your brand."
            />
            <ServiceCard
              icon={<Edit className="w-10 h-10" />}
              title="Reels Editing"
              description="Capture attention and drive engagement with our fast-paced, trend-savvy Reels editing. We specialize in creating captivating short-form video content for Instagram, TikTok, and other platforms. Our team understands the power of quick cuts, trending audio, and eye-catching visuals, ensuring your Reels stand out in the crowded social media landscape."
            />
            <ServiceCard
              icon={<Palette className="w-10 h-10" />}
              title="Business Ads"
              description="Elevate your brand and drive conversions with our expertly crafted business ad videos. We create compelling visual narratives that resonate with your target audience, delivering clear messaging and impactful calls to action. Our collaborative team ensures your ads are optimized for various platforms, maximizing your ROI and achieving your marketing goals."
            />
            <ServiceCard
              icon={<Megaphone className="w-10 h-10" />}
              title="Event Videos"
              description="Preserve your most memorable moments with our professional event video editing. From conferences and weddings to concerts and corporate events, we capture the essence of your event and create engaging videos that tell your story. Our team delivers polished, high-quality videos that you and your audience will cherish."
            />
            <ServiceCard
              icon={<PenTool className="w-10 h-10" />}
              title="Content Creation"
              description="Transform your ideas into compelling digital content that resonates with your audience. Our expert team crafts engaging stories across social media, websites, and marketing campaigns. We combine creative storytelling with strategic thinking to produce content that drives engagement, builds brand awareness, and connects with your target audience on a deeper level."
            />
            <ServiceCard
              icon={<Lightbulb className="w-10 h-10" />}
              title="Creative Direction"
              description="Get strategic guidance and creative vision to elevate your video content to new heights. Our experienced creative directors work closely with you to understand your brand identity, target audience, and business objectives. We develop comprehensive creative strategies that ensure your content stands out, delivers your message effectively, and achieves measurable results."
            />
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure every project is
              delivered on time, within budget, and exceeds expectations.
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Find answers to common
              inquiries below.
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
  );
}
