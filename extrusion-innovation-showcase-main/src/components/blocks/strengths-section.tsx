"use client"

import React from "react"
import { motion } from "framer-motion"
import { Globe2, Users, Award, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

interface StrengthCardProps {
  icon: React.ReactNode
  title: string
  description: string
  stat: string
  statLabel: string
  index: number
}

const StrengthCard = ({ icon, title, description, stat, statLabel, index }: StrengthCardProps) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative w-full overflow-hidden",
        isEven ? "lg:translate-y-12" : ""
      )}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-primary/5 to-background opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Card Content */}
      <div className="relative bg-background/50 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-primary/50">
        {/* Top Pattern */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        {/* Icon Container */}
        <div className="relative p-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
          <div className="relative flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg transform group-hover:scale-150 transition-transform duration-500" />
              <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                {icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-xl transform group-hover:scale-150 transition-transform duration-500" />
            <div className="relative flex items-baseline gap-2">
              <span className="text-4xl font-bold bg-gradient-to-br from-primary to-primary-foreground bg-clip-text text-transparent">
                {stat}
              </span>
              <span className="text-sm text-muted-foreground">
                {statLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      </div>
    </motion.div>
  )
}

export const StrengthsSection = () => {
  const strengths = [
    {
      icon: <Globe2 className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />,
      title: "Global Presence",
      description: "Operating across 30+ countries, delivering innovative solutions to diverse markets worldwide.",
      stat: "30+",
      statLabel: "Countries Served",
    },
    {
      icon: <Users className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />,
      title: "Expert Team",
      description: "Our team of seasoned professionals brings decades of combined expertise in extrusion technology.",
      stat: "100+",
      statLabel: "Team Members",
    },
    {
      icon: <Award className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />,
      title: "Quality Excellence",
      description: "ISO 9001:2015 certified, ensuring world-class manufacturing standards and processes.",
      stat: "15+",
      statLabel: "Certifications",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />,
      title: "Innovation First",
      description: "Continuous R&D investment to develop cutting-edge extrusion solutions.",
      stat: "50+",
      statLabel: "Patents",
    },
  ]

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm md:text-base font-semibold text-primary">
            Our Strengths
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Why Industry Leaders Choose Us
          </h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-[800px] mx-auto">
            With over three decades of innovation and excellence, we've established ourselves as pioneers in extrusion technology,
            delivering solutions that transform manufacturing possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {strengths.map((strength, index) => (
            <StrengthCard
              key={strength.title}
              {...strength}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
