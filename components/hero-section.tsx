"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";

import heroBG from "@/app/assets/background.mp4";

import companyLogo1 from "@/app/assets/Black-and-White-Modern-Fitness-Club-Logo.png"; // Adjust the path as necessary
import companyLogo2 from "@/app/assets/Black-and-White-Modern-Gym-Center-Logo.png"; // Adjust the path as necessary
import companyLogo3 from "@/app/assets/Blue-Corporate-Illustrative-Flat-Investment-Group-Finance-Logo-1.png"; // Adjust the path as necessary
import companyLogo4 from "@/app/assets/Blue-Modern-W-Letter-Company-Business-Logo.png"; // Adjust the path as necessary
import companyLogo5 from "@/app/assets/White-and-Black-Real-Estate-Agent-Logo.png"; // Adjust the path as necessary
import companyLogo6 from "@/app/assets/White-and-Blue-Flat-Illustrative-Real-Estate-Agency-Logo-1.png"; // Adjust the path as necessary

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const logos = [
    { src: companyLogo1.src, alt: "Fitness Club Logo" },
    { src: companyLogo2.src, alt: "Gym Center Logo" },
    { src: companyLogo3.src, alt: "Investment Group Logo" },
    { src: companyLogo4.src, alt: "W Letter Company Logo" },
    { src: companyLogo5.src, alt: "Real Estate Agent Logo" },
    { src: companyLogo6.src, alt: "Real Estate Agency Logo" },
  ];

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

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35, // Increased duration for smoother animation
          ease: "linear",
        },
      },
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
          <source src={heroBG} type="video/mp4" />
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
              <span className="font-medium">Trusted by 1000+ clients</span>
              <div className="flex text-yellow-500 justify-center">
                <span>★★★★★</span>
                <span className="text-muted-foreground ml-1">(4.9/5)</span>
              </div>
            </div>
          </motion.div>

          {/* Clients logos section */}
          <motion.div
            variants={itemVariants}
            className="mt-auto overflow-hidden max-w-3xl mx-auto w-full"
          >
            <p className="text-center text-sm md:text-lg text-muted-foreground mb-6">
              Trusted by leading brands worldwide
            </p>
            <div className="relative w-full overflow-hidden">
              <div className="flex relative">
                <motion.div
                  className="flex gap-6 md:gap-8 shrink-0" // Increased gap for better spacing
                  variants={marqueeVariants}
                  animate="animate"
                >
                  {[...logos, ...logos, ...logos].map((logo, i) => (
                    <div key={i} className="h-14 w-24 md:h-20 md:w-28 shrink-0">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-full w-full object-contain opacity-70"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
