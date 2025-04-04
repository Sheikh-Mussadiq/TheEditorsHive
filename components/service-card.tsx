"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group p-6 rounded-lg bg-gradient-to-br from-muted/50 to-transparent border border-muted hover:border-primary/20 transition-all"
    >
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
        Learn more
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  )
}

