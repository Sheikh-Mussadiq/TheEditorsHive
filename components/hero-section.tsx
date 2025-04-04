"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";
const HeroVideo = "/videos/background.mp4";
import HeroVideoBG from "@/app/assets/background.mp4";

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HeroVideoBG} type="video/mp4" />
          {/* Fallback background for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/80 to-background"></div>
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-6 mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Creative Video Production
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Bring Your <span className="text-primary">Vision</span> to Life
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We create compelling visual stories that engage, inspire, and
              drive results for brands and businesses.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
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

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 justify-center mb-16"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background">
                <span className="text-xs font-medium">JD</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background">
                <span className="text-xs font-medium">MK</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background">
                <span className="text-xs font-medium">TS</span>
              </div>
            </div>
            <div className="text-sm">
              <span className="font-medium">Trusted by 100+ clients</span>
              <div className="flex text-yellow-500 justify-center">
                <span>★★★★★</span>
                <span className="text-muted-foreground ml-1">(4.9/5)</span>
              </div>
            </div>
          </motion.div>

          {/* Clients logos - now part of the normal flow with margin-top */}
          <motion.div variants={itemVariants} className="mt-auto">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Trusted by leading brands worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-24">
                  <img
                    src={`/placeholder.svg?height=40&width=120&text=LOGO ${i}`}
                    alt={`Client logo ${i}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
