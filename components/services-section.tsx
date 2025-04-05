"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Film,
  Edit,
  Palette,
  Megaphone,
  PenTool,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Film className="w-10 h-10" />,
      title: "YouTube Video Editing",
      description:
        "Maximize your YouTube channel's potential with our professional editing services. We understand the nuances of YouTube content, from engaging intros and seamless transitions to dynamic graphics and sound design. Our team ensures your videos are optimized for viewer retention and platform algorithms, helping you grow your audience and elevate your brand.",
    },
    {
      icon: <Edit className="w-10 h-10" />,
      title: "Reels Editing",
      description:
        "Capture attention and drive engagement with our fast-paced, trend-savvy Reels editing. We specialize in creating captivating short-form video content for Instagram, TikTok, and other platforms. Our team understands the power of quick cuts, trending audio, and eye-catching visuals, ensuring your Reels stand out in the crowded social media landscape.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Business Ads",
      description:
        "Elevate your brand and drive conversions with our expertly crafted business ad videos. We create compelling visual narratives that resonate with your target audience, delivering clear messaging and impactful calls to action. Our collaborative team ensures your ads are optimized for various platforms, maximizing your ROI and achieving your marketing goals.",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Event Videos",
      description:
        "Preserve your most memorable moments with our professional event video editing. From conferences and weddings to concerts and corporate events, we capture the essence of your event and create engaging videos that tell your story. Our team delivers polished, high-quality videos that you and your audience will cherish.",
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Content Creation",
      description:
        "Transform your ideas into compelling digital content that resonates with your audience. Our expert team crafts engaging stories across social media, websites, and marketing campaigns. We combine creative storytelling with strategic thinking to produce content that drives engagement, builds brand awareness, and connects with your target audience on a deeper level.",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Creative Direction",
      description:
        "Get strategic guidance and creative vision to elevate your video content to new heights. Our experienced creative directors work closely with you to understand your brand identity, target audience, and business objectives. We develop comprehensive creative strategies that ensure your content stands out, delivers your message effectively, and achieves measurable results.",
    },
  ];

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
            Our Services
          </h2>
          <p className="text-muted-foreground">
            From concept to final delivery, we offer comprehensive video
            production services tailored to your needs.
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
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
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
  );
}
