import ThemeToggle from "../components/ThemeToggle";
import Starbackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import ExperiencesSection from "../components/ExperiencesSection";
export const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <Starbackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
    </div>
  );
};
