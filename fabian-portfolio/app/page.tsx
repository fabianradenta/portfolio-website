import Navbar from "../components/Navbar";
import "./globals.css"
import Hero from "@/components/Hero";
import BentoAbout from "@/components/AboutBento";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-5xl mx-auto">
        <Hero />  
        <section id="about" className="pt-20">
          <BentoAbout />
          <Resume />
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center border-t border-zinc-800/50 text-zinc-500">
          <h2>Projects Section (Coming Soon)</h2>
        </section>
        
        <section id="others" className="min-h-screen flex items-center justify-center border-t border-zinc-800/50 text-zinc-500">
          <h2>Others Section (Coming Soon)</h2>
        </section>
      </div>
    </main>
  );
}