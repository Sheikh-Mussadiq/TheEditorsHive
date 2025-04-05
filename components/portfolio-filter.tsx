"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface PortfolioFilterProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export default function PortfolioFilter({ activeFilter, setActiveFilter }: PortfolioFilterProps) {
  const filters = [
    { id: "all", label: "All" },
    { id: "commercial", label: "Commercial" },
    { id: "corporate", label: "Corporate" },
    { id: "documentary", label: "Documentary" },
    { id: "travel", label: "Travel" },
    { id: "event", label: "Event" },
    { id: "social", label: "Social Media" },
  ]

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className="relative"
          >
            {filter.label}
            {activeFilter === filter.id && (
              <motion.div
                layoutId="activeFilterIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}

