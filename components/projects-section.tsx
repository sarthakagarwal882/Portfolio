"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  const projects = [
    {
      title: "HobbyCue",
      image: "/hobbycue.webp?text=HobbyCue",
      description:
        "A community-driven platform and marketplace for hobbyists to connect with coaches, venues, suppliers, workshops, and events—locally and online.",
      technologies: ["TypeScript", "Next.js", "Redux"],
      liveUrl: "https://hobbycue.com/",
      category: "Optimization",
    },
    {
      title: "Faceon",
      image: "/faceon.webp",
      description:
        "A telemedicine app enabling global users to consult with verified Korean plastic surgeons and dentists via free video sessions. Features include guided photo uploads, multilingual support (including AI‑based Arabic translation), and remote appointment booking.",
      technologies: ["React.js", "Redux", "Tailwind CSS"],
      liveUrl: "https://app.faceonkorea.com/",
      category: "Enterprise",
    },
    {
      title: "Linkiss",
      image: "/linkiss.webp?height=200&width=350&text=Linkiss",
      description:
        "A telemedicine platform that enables reliable cosmetic consultations and services worldwide by combining AI-enhanced tools with verified medical professionals and seamless global access.",

      technologies: ["React.js", "Tailwind CSS", "Firebase", "React Router"],
      liveUrl: "https://www.linkiss.io/",
      category: "Utility",
    },
    {
      title: "Cosmi",
      image: "/cosmi.webp?height=200&width=350&text=Cosmi",
      description:
        "An AI-powered skincare advisor that analyzes a selfie in under 3 minutes to assess hydration, acne, wrinkles, and texture. Provides personalized skincare routines, tailored product recommendations, and monthly progress tracking via voice-assistant dermatology.",

      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      liveUrl: "https://cosmi.skin/",
      category: "Productivity",
    },
    {
      title: "Official College Website",
      image: "/soe.webp?height=200&width=350&text=JNU+Website",
      description:
        "Developed the official website for the School of Engineering at JNU, including faculty dashboards, course listings, and student resources. Used Dockerized backend and role-based content management system.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma ORM",
        "Docker",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
      ],
      liveUrl: "https://soe-jnu.vercel.app/",
      category: "Educational",
    },

    {
      title: "Inkprint MIS",
      image: "/inkprint.webp?height=200&width=350&text=Inkprint+MIS",
      description:
        "An internal business management system for print operations, offering job estimation, inventory tracking, invoicing, shipping, and role-based access control.",

      technologies: ["Next.js", "Redux", "Tailwind CSS"],
      liveUrl: "https://inkprintmis.in/",
      category: "Enterprise",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications showcasing my expertise in full-stack development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[18.5rem] object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div
                    className="flex items-center justify-start gap-2 mb-2"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-purple-50 text-purple-700 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 interactive"
                  >
                    Live Demo
                  </Button>
                </div> */}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-purple-200 text-purple-700 hover:bg-purple-50 interactive"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
