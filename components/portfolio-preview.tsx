"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import YouTubeEmbed from "@/components/youtube-embed"

export default function PortfolioPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const featuredProjects = [
    {
      title: "Cinematic Travel Montage",
      category: "Travel",
      videoId: "HEavaiixtkY",
    },
    {
      title: "Urban Exploration",
      category: "Documentary",
      videoId: "O86cRhpe35w",
    },
    {
      title: "Product Showcase",
      category: "Commercial",
      videoId: "lWQRBbP0cGg",
    },
    {
      title: "Fashion Promo",
      category: "Commercial",
      videoId: "AWjf495zK-o",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our collection of work across various industries and styles. Each project represents our
              commitment to quality and creativity.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <div className="h-full">
                <YouTubeEmbed videoId={project.videoId} title={project.title} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                  <div className="mb-1">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-primary/80 text-primary-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

