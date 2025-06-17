"use client"

import { motion } from "framer-motion"
import { Clock, Award, Users, Zap, Shield, Heart } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

export function WhyChooseMeSection() {
  const reasons = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality. Most projects delivered within agreed timelines.",
      stat: "95%",
      statLabel: "On-time delivery",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Clean, maintainable code following industry best practices and modern development standards.",
      stat: "100+",
      statLabel: "Issues resolved",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Regular communication and updates throughout the project lifecycle. Your success is my priority.",
      stat: "24/7",
      statLabel: "Support available",
    },
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description: "Using cutting-edge technologies to ensure your project is future-proof and scalable.",
      stat: "15+",
      statLabel: "Technologies mastered",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Security-first approach with robust authentication, data protection, and reliable hosting solutions.",
      stat: "100%",
      statLabel: "Secure deployments",
    },
    {
      icon: Heart,
      title: "Passionate Developer",
      description: "Genuinely passionate about creating amazing digital experiences that make a real difference.",
      stat: "2+",
      statLabel: "Years experience",
    },
  ]

  return (
    <section id="why-me" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 opacity-5" width="100%" height="100%">
          <pattern id="hexagons" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon points="30,5 50,20 50,40 30,55 10,40 10,20" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title="Why Choose Me?" subtitle="What makes me the right choice for your next project" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <reason.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{reason.stat}</div>
                    <div className="text-sm text-gray-500">{reason.statLabel}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. I'm here to turn your vision into
              reality.
            </p>
            <motion.a
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"              
            >
              Get Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
