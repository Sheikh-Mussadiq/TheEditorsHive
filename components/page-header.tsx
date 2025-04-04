"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-primary/10 via-background to-background border-b">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </motion.div>
      </div>
    </div>
  )
}

