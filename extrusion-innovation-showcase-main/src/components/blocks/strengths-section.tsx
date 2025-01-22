"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe2, Users, Award, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

interface StrengthCardProps {
  icon: React.ReactNode
  title: string
  description: string
  stat: string
  statLabel: string
  delay?: number
}

const StrengthCard = ({ icon, title, description, stat, statLabel, delay = 0 }: StrengthCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    {/* Enhanced gradient and blur effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
    <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/5 to-background rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-card/50 backdrop-blur-sm hover:bg-card/30 transition-colors p-6 sm:p-8 rounded-2xl border border-border/50 hover:border-border h-full">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl transform group-hover:scale-150 transition-transform duration-500" />
          <div className="relative bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
            {icon}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="pt-4 space-y-1">
          <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary-foreground bg-clip-text text-transparent">
            {stat}
          </div>
          <div className="text-sm text-muted-foreground">
            {statLabel}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export const StrengthsSection = () => {
  const strengths = [
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Presence",
      description: "Operating across 30+ countries, delivering innovative solutions to diverse markets worldwide.",
      stat: "30+",
      statLabel: "Countries Served",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Our team of seasoned professionals brings decades of combined expertise in extrusion technology.",
      stat: "100+",
      statLabel: "Team Members",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Excellence",
      description: "ISO 9001:2015 certified, ensuring world-class manufacturing standards and processes.",
      stat: "15+",
      statLabel: "Certifications",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
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
          className="space-y-4 text-center mb-12 md:mb-16"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {strengths.map((strength, index) => (
            <StrengthCard
              key={strength.title}
              {...strength}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
