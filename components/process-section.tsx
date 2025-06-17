"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code, Rocket, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery & Planning",
      description:
        "We discuss your requirements, goals, and vision to create a detailed project roadmap.",
      duration: "1-2 days",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Lightbulb,
      title: "Design & Architecture",
      description:
        "I create wireframes, design mockups, and plan the technical architecture for your project.",
      duration: "2-3 days",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Code,
      title: "Development & Testing",
      description:
        "Clean, efficient code development with regular updates and thorough testing throughout.",
      duration: "1-4 weeks",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description:
        "Deployment to production with ongoing support and maintenance to ensure smooth operation.",
      duration: "Ongoing",
      color: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 opacity-5"
          width="100%"
          height="100%"
        >
          <pattern
            id="workflow"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="40" cy="40" r="2" fill="currentColor" />
            <circle
              cx="40"
              cy="40"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#workflow)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="My Development Process"
          subtitle="A proven methodology that ensures project success from concept to launch"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 z-0" />
              )}

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative z-10 group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${step.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      <span>⏱️</span>
                      {step.duration}
                    </div>
                  </div>
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
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project requirements and create a timeline that
              works for you.
            </p>
            <motion.a
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 interactive flex items-center justify-center w-[60%] mx-auto"
              type="button"
              href={`mailto:work.sarthak882@gmail.com`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5 mr-2 bg-transparent" />
              Send Me an Email
            </motion.a>{" "}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
