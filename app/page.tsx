import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { WhyChooseMeSection } from "@/components/why-choose-me-section"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <WhyChooseMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </main>
  )
}
