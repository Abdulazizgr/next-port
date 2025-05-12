import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import { ModeToggle } from "@/components/theme-toggle";
import Services from "@/components/Services";
import ResumePage from "@/components/Resume";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import { ContactSection } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ResumePage />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
