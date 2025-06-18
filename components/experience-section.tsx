"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "PhotoGPT AI",
      logo: "/photogpt.jpeg/?height=60&width=60&text=LC",
      location: "Remote",
      duration: "December 2024 – May 2025",
      type: "Full-time",
      highlights: [
        "Developed and deployed a production-ready Live Video Call feature with real-time audio translation using React.js and AgoraRTC.",
        "Integrated secure Google and Apple OAuth login using Firebase Authentication.",
        "Built responsive web pages and ensured consistent cross-device UI through clean, maintainable frontend code.",
        "Improved UI/UX by identifying and fixing visual and functional bugs across the application.",
        "Collaborated closely with team members to align real-time features with user expectations and product goals.",
        "Gained hands-on experience with live video streaming, OAuth-based auth flows, and frontend performance optimization.",
      ],
      technologies: [
        "React.js",
        "TailwindCSS",
        "Supabase",
        "OAuth",
        "JWT",
        "AgoraRTC",
        "Firebase",
      ],
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Full-Stack Developer Intern",
      company: "LeeCognitek AI & Software Solutions Pvt Ltd",
      logo: "/leecognitek.jpeg?height=60&width=60&text=LC",
      location: "Remote",
      duration: "August 2024 – October 2024",
      type: "Internship",
      highlights: [
        "Developed and deployed a backend using Node.js, Express.js, and PostgreSQL, with Docker and AWS EC2 for hosting and deployment.",
        "Integrated Google OAuth with Passport.js and JWT for secure token and session-based authentication.",
        "Designed and implemented relational database schemas to support application logic and performance.",
        "Contributed to frontend tasks including integration testing and UI bug fixes.",
        "Successfully deployed a production-ready backend infrastructure with secure authentication mechanisms.",
        "Gained practical experience with Dockerized deployments and cloud infrastructure setup using AWS.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "AWS EC2",
        "OAuth",
        "JWT",
      ],
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Across The Globe, Bangalore",
      logo: "/banao.jpeg?height=60&width=60&text=ATG",
      location: "Remote",
      duration: "October 2023 – April 2024",
      type: "Internship",
      highlights: [
        "Optimized codebase and resolved over 100 UI/functionality issues for the HobbyCue social media app, significantly improving performance and user experience.",
        "Implemented Role-Based Access Control (RBAC) with 5 roles for Inkprint MIS, improving internal security and permissions handling.",
        "Led frontend development and API integration efforts, streamlining workflows and increasing system robustness.",
        "Collaborated with team members across different modules to ensure smooth feature rollouts and bug fixes.",
        "Contributed to both TypeScript and JavaScript-based projects using modern frameworks and state management tools.",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "JavaScript",
      ],
      color: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Professional Experience"
          subtitle="Building expertise through hands-on development and team leadership"
        />

        <div className="relative">
          {/* Enhanced Timeline line with animated gradient */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full">
            <div className="w-1 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400 rounded-full shadow-lg relative overflow-hidden">
              {/* Animated light effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-20 bg-white opacity-30 blur-sm"
                animate={{
                  top: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>

            {/* Decorative dots along the timeline */}
            {[0.2, 0.4, 0.6, 0.8].map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full shadow-md left-1/2 transform -translate-x-1/2"
                style={{ top: `${position * 100}%` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2 }}
              />
            ))}
          </div>

          <div className="space-y-16 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Enhanced Timeline dot with pulsing effect */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-white shadow-lg border-4 border-purple-400 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-purple-600" />
                  </motion.div>

                  {/* Pulsing ring effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-8 h-8 rounded-full border-4 border-purple-400 opacity-75"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                </div>

                {/* Experience card */}
                <motion.div
                  className={`md:w-5/12 ${
                    index % 2 === 0
                      ? "md:ml-auto md:pl-16"
                      : "md:mr-auto md:pr-16"
                  } ml-20 md:ml-0 relative`}
                  initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    {/* Header with gradient */}
                    <div
                      className={`bg-gradient-to-r ${exp.color} p-6 text-white`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="secondary"
                              className="bg-white/20 text-white border-white/30"
                            >
                              {exp.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-white/90 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="text-green-700 flex items-start gap-3 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.4,
                                  delay: 0.5 + achievementIndex * 0.1,
                                }}
                              >
                                <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.6 + techIndex * 0.05,
                            }}
                          >
                            <Badge
                              variant="outline"
                              className="border-purple-200 text-purple-700 hover:bg-purple-50"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connecting line from timeline to card */}
                <motion.div
                  className={`absolute top-4 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 hidden md:block ${
                    index % 2 === 0
                      ? "left-[calc(50%+4px)] w-[calc(8%-4px)]"
                      : "right-[calc(50%+4px)] w-[calc(8%-4px)]"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "8%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
