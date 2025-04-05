"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import type { Project } from "@/components/portfolio-section"
import YouTubeEmbed from "@/components/youtube-embed"

interface PortfolioGridProps {
  projects: Project[]
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="group relative aspect-video rounded-lg overflow-hidden"
          >
            {project.isVideo ? (
              <div className="h-full">
                <YouTubeEmbed videoId={project.videoId!} title={project.title} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none">
                  <div className="mb-1">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-primary/80 text-primary-foreground">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 rounded text-xs bg-primary/80 text-primary-foreground">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-primary">
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

