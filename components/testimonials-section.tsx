"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Working with The Editors Hive was a game-changer for our brand. Their creative approach and attention to detail resulted in a commercial that exceeded our expectations and drove real results.",
      name: "Sarah Johnson",
      title: "Marketing Director, TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      quote:
        "The team at The Editors Hive took our vague concept and transformed it into a compelling visual story. Their professionalism and creativity made the entire process smooth and enjoyable.",
      name: "Michael Chen",
      title: "CEO, Startup Innovations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
    },
    {
      quote:
        "We've worked with many video production companies, but none have delivered the level of quality and service that The Editors Hive provides. They're now our go-to partner for all video content.",
      name: "Jessica Rodriguez",
      title: "Brand Manager, Global Retail",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear from some of our satisfied
            clients about their experience working with us.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-muted/50 to-transparent p-8 md:p-12 rounded-lg border border-muted"
          >
            <div className="absolute top-8 left-8 text-primary/20">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              <p className="text-xl md:text-2xl italic mb-8">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-2 mt-6"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
