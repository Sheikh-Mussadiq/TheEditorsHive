"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function PortfolioGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Brand Commercial",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800&text=Commercial",
    },
    {
      title: "Corporate Overview",
      category: "Corporate",
      image: "/placeholder.svg?height=600&width=800&text=Corporate",
    },
    {
      title: "Product Launch",
      category: "Marketing",
      image: "/placeholder.svg?height=600&width=800&text=Product",
    },
    {
      title: "Event Highlights",
      category: "Events",
      image: "/placeholder.svg?height=600&width=800&text=Event",
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      image: "/placeholder.svg?height=600&width=800&text=Social",
    },
    {
      title: "Documentary Short",
      category: "Documentary",
      image: "/placeholder.svg?height=600&width=800&text=Documentary",
    },
    {
      title: "Brand Story",
      category: "Corporate",
      image: "/placeholder.svg?height=600&width=800&text=Brand",
    },
    {
      title: "Product Demo",
      category: "Marketing",
      image: "/placeholder.svg?height=600&width=800&text=Demo",
    },
    {
      title: "Conference Recap",
      category: "Events",
      image: "/placeholder.svg?height=600&width=800&text=Conference",
    },
  ]

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
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group relative aspect-video rounded-lg overflow-hidden"
        >
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
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
            <Link href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-primary">
              View Project
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
              <Play className="w-5 h-5 text-white ml-0.5" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

