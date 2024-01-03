import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ExpSection from "@/components/ExpSection"
import ProjectsSection from "@/components/ProjectsSection"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ExpSection />
      <ProjectsSection />
      <Contact />
    </main>
  )
}
