"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Redux", icon: "🔄" },
        { name: "JavaScript", icon: "🟨" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Prisma ORM", icon: "🔺" },
        { name: "RESTful APIs", icon: "🔗" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Microsoft Azure", icon: "🔷" },
        { name: "Docker", icon: "🐳" },
        { name: "Vercel", icon: "▲" },
        { name: "Git/GitHub", icon: "🐙" },
        { name: "CI/CD", icon: "🔄" },
      ],
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", icon: "🎨" },
        { name: "VS Code", icon: "💻" },
        { name: "Postman", icon: "📮" },
        { name: "Responsive Design", icon: "📱" },
        { name: "UI/UX", icon: "✨" },
        { name: "Agile", icon: "🏃" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies I use to build amazing digital experiences" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto" />
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group interactive"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-gray-800">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
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
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-6 py-3 rounded-full">
            <span className="animate-pulse">🚀</span>
            <span className="font-medium">Always learning and staying updated with latest technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
