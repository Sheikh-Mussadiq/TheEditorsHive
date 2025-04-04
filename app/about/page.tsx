import Image from "next/image"
import { CheckCircle, Award, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <PageHeader
        title="About Us"
        description="We're a team of passionate filmmakers, editors, and visual storytellers dedicated to bringing your vision to life."
      />

      <main className="container px-4 py-12 mx-auto">
        <section className="grid gap-12 py-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2015, Visionary Films has been at the forefront of video production, combining technical
              expertise with creative storytelling to deliver exceptional content for our clients.
            </p>
            <p className="text-muted-foreground">
              What started as a small team of passionate filmmakers has grown into a full-service video agency, serving
              clients across industries and continents.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Quality First</h3>
                  <p className="text-sm text-muted-foreground">We never compromise on quality</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Award Winning</h3>
                  <p className="text-sm text-muted-foreground">Multiple industry awards</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Client Focused</h3>
                  <p className="text-sm text-muted-foreground">Your vision is our priority</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">On-time, every time</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=600&width=800" alt="Our team at work" fill className="object-cover" />
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals who make the magic happen. Our diverse team brings together expertise from
              various backgrounds to create compelling visual stories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Alex Morgan"
              role="Creative Director"
              image="/placeholder.svg?height=400&width=400"
              bio="With over 15 years in the industry, Alex leads our creative vision and ensures every project exceeds expectations."
            />
            <TeamMember
              name="Jamie Chen"
              role="Lead Cinematographer"
              image="/placeholder.svg?height=400&width=400"
              bio="Jamie's eye for composition and lighting has been featured in award-winning commercials and short films."
            />
            <TeamMember
              name="Taylor Reed"
              role="Senior Editor"
              image="/placeholder.svg?height=400&width=400"
              bio="Taylor transforms raw footage into compelling narratives with a keen sense of pacing and emotion."
            />
            <TeamMember
              name="Jordan Smith"
              role="Motion Graphics Designer"
              image="/placeholder.svg?height=400&width=400"
              bio="Jordan creates stunning visual effects and animations that elevate our productions to the next level."
            />
            <TeamMember
              name="Casey Williams"
              role="Production Manager"
              image="/placeholder.svg?height=400&width=400"
              bio="Casey ensures our projects run smoothly from concept to delivery, keeping everything on schedule and within budget."
            />
            <TeamMember
              name="Riley Johnson"
              role="Sound Designer"
              image="/placeholder.svg?height=400&width=400"
              bio="Riley crafts immersive soundscapes that complement our visuals and enhance the overall viewing experience."
            />
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every frame, every edit, and every project we deliver.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe the best work comes from true partnership with our clients and within our team.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries and explore new techniques to keep our work fresh and impactful.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

