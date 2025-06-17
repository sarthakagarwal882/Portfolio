"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 bg-purple-100 rounded-full opacity-20 -z-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -z-10"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate Full-Stack Developer with expertise in modern web technologies and a track record of delivering scalable solutions."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a Software Engineer at Amdocs with proven expertise in
              full-stack development. I’ve previously contributed to companies
              like PhotoGPT AI and Across The Globe, where I built scalable web
              applications and led development initiatives across
              cross-functional teams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise spans across modern JavaScript frameworks, backend
              technologies, and cloud platforms. I'm passionate about creating
              efficient, user-friendly applications that solve real-world
              problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-purple-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-semibold text-white">
                      Education
                    </h3>
                  </div>
                </div>
                <div className="px-8 py-4 flex justify-around items-center">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">
                      B.Tech in Computer Science & Engineering
                    </h4>
                    <p className="text-gray-600">
                      Jawaharlal Nehru University, New Delhi
                    </p>
                    <p className="text-gray-500">2021 - 2025</p>
                  </div>

                  <div className="">
                    <img src="/jnu.webp" alt="JNU Logo" className="h-36" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
