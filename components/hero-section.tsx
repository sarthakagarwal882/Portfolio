"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { FloatingElements } from "@/components/ui/floating-elements";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <FloatingElements />
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 opacity-5"
          width="100%"
          height="100%"
        >
          {" "}
          <defs>
            <pattern
              id="circlePattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="20"
                cy="20"
                r="15"
                stroke="black"
                stroke-width="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circlePattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          <motion.div
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-40 w-40 rounded-full mx-auto mb-8 border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
              <img
                src="/sarthak.webp?height=300&width=300"
                alt="Sarthak Agarwal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-purple-600 font-medium mb-2">
                👋 Hello, I'm Sarthak Agarwal
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                Website Developer &
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Freelance Expert
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I help businesses transform their ideas into powerful digital
              solutions. Specializing in modern web technologies with{" "}
              <span className="text-purple-600 font-semibold">
                2+ years of experience
              </span>{" "}
              and{" "}
              <span className="text-purple-600 font-semibold">
                100+ resolved issues
              </span>
              .
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 interactive group"
            >
              <a
                href="#contact"
                className="flex items-center justify-center gap-2"
              >
                <p>Start Your Project</p>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <ArrowRight />
                </motion.div>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="interactive">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
              </a>
            </Button>
            <a
              href="https://drive.google.com/file/d/1r6hnju3OM7Mi3C0_SpOi4SMgw9nbB7rN/view?usp=drive_link"
              target="_blank"
              className="interactive flex items-center justify-center "
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a
              href="https://github.com/sarthakagarwal882"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors interactive"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sarthak-agarwal-ab6308245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors interactive"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:work.sarthak882@gmail.com"
              className="text-gray-600 hover:text-purple-600 transition-colors interactive"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 rounded-full border p-4 transform -translate-x-1/2"
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, y: [3, 15, 3], x: ["-50%", "-50%"] }}
          transition={{
            duration: 2,
            delay: 1.5,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <ArrowDown className="h-6 w-6 text-gray-600" />
        </motion.div>
      </div>
    </section>
  );
}
