"use client"

import { useState } from "react"
import PortfolioFilter from "@/components/portfolio-filter"
import PortfolioGrid from "@/components/portfolio-grid"

// Define the project type for better type safety
export type Project = {
  title: string
  category: string
  videoId?: string
  image?: string
  isVideo: boolean
}

export default function PortfolioSection() {
  // Lift the filter state up to the parent component
  const [activeFilter, setActiveFilter] = useState("all")

  // Sample projects data with proper categories and YouTube video IDs
  const allProjects: Project[] = [
    {
      title: "Cinematic Travel Montage",
      category: "travel",
      videoId: "HEavaiixtkY",
      isVideo: true,
    },
    {
      title: "Urban Exploration",
      category: "documentary",
      videoId: "O86cRhpe35w",
      isVideo: true,
    },
    {
      title: "Nature Documentary",
      category: "documentary",
      videoId: "DVillsvghaY",
      isVideo: true,
    },
    {
      title: "Product Showcase",
      category: "commercial",
      videoId: "lWQRBbP0cGg",
      isVideo: true,
    },
    {
      title: "Fashion Promo",
      category: "commercial",
      videoId: "AWjf495zK-o",
      isVideo: true,
    },
    {
      title: "Event Highlights",
      category: "event",
      videoId: "Z5lNMChmBqM",
      isVideo: true,
    },
    {
      title: "Corporate Overview",
      category: "corporate",
      videoId: "8Bt1ZqDjhUg",
      isVideo: true,
    },
    {
      title: "Brand Story",
      category: "corporate",
      image: "/placeholder.svg?height=600&width=800&text=Brand",
      isVideo: false,
    },
    {
      title: "Social Media Campaign",
      category: "social",
      image: "/placeholder.svg?height=600&width=800&text=Social",
      isVideo: false,
    },
  ]

  // Filter projects based on the active filter
  const filteredProjects =
    activeFilter === "all" ? allProjects : allProjects.filter((project) => project.category === activeFilter)

  return (
    <>
      <PortfolioFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <PortfolioGrid projects={filteredProjects} />
    </>
  )
}

