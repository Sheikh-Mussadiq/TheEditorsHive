"use client"

import { useRef } from "react"
import Link from "next/link"
import { Film, Edit, Palette, Megaphone, PenTool, Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Film className="w-10 h-10" />,
      title: "Commercial Production",
      description: "High-quality commercials that capture attention and drive engagement with your brand.",
    },
    {
      icon: <Edit className="w-10 h-10" />,
      title: "Video Editing",
      description: "Professional editing services to transform your raw footage into compelling stories.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Motion Graphics",
      description: "Eye-catching animations and visual effects that enhance your video content.",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Corporate Videos",
      description: "Professional videos that communicate your company's message, values, and culture.",
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Content Creation",
      description: "Engaging content for social media, websites, and marketing campaigns.",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Creative Direction",
      description: "Strategic guidance to ensure your video aligns with your brand and objectives.",
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
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            From concept to final delivery, we offer comprehensive video production services tailored to your needs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-lg bg-gradient-to-br from-muted/50 to-transparent border border-muted hover:border-primary/20 transition-all"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

