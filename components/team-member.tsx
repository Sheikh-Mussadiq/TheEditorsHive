"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-primary">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-primary">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-primary">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <h3 className="font-medium text-lg">{name}</h3>
      <p className="text-primary text-sm mb-2">{role}</p>
      <p className="text-sm text-muted-foreground">{bio}</p>
    </motion.div>
  )
}

