"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

export default function ContactCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Bring Your Vision to Life?</h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today to discuss your project and how we can help you
            achieve your goals.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

