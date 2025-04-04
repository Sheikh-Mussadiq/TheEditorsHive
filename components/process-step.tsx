"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex gap-6"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

