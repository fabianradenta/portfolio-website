import Navbar from "../components/Navbar";
import "./globals.css"
import Hero from "@/components/Hero";
import BentoAbout from "@/components/AboutBento";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-5xl mx-auto">
        <Hero />
        <div id="about" className="pt-20">
          <BentoAbout />
          <Resume />
        </div>
        <div id="projects" className="pt-20">
          <Projects />
        </div>
        <div id="others" className="pt-20">
          <TechStack />
        </div>
      </div>
      <Footer />
    </main>
  );
}