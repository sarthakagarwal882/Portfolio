"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Cloud, Zap, Database, Palette } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCard } from "@/components/ui/animated-card"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Smartphone,
      title: "Mobile-Optimized Design",
      description: "Mobile-optimized applications that provide seamless user experience across all devices.",
      features: ["Progressive Web Apps", "Mobile Optimization", "Touch-friendly UI", "Offline Support"],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust backend systems with secure APIs, database design, and cloud integration.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Deployment"],
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup and deployment on AWS, Vercel, and other platforms.",
      features: ["AWS Deployment", "Docker Containers", "CI/CD Pipelines", "Performance Monitoring"],
      color: "from-teal-500 to-teal-700",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications with advanced optimization techniques.",
      features: ["Code Optimization", "Bundle Size Reduction", "Caching Strategies", "Performance Audits"],
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Palette,
      title: "UI/UX Enhancement",
      description: "Modern, user-friendly interfaces that convert visitors into customers.",
      features: ["Modern Design", "User Experience", "Accessibility", "Brand Consistency"],
      color: "from-pink-500 to-pink-700",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Services I Offer"
          subtitle="Comprehensive web development solutions to bring your ideas to life"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="group hover:shadow-xl">
              <div className="space-y-6">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
