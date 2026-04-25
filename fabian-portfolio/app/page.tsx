import Navbar from "../components/Navbar";
import "./globals.css"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="max-w-5xl mx-auto">
        <section id="home" className="min-h-screen flex items-center justify-center border-t border-zinc-800/50 text-zinc-500">
          <h2>Home Section (Coming Soon)</h2>
        </section>
        
        <section id="about" className="min-h-screen flex items-center justify-center border-t border-zinc-800/50 text-zinc-500">
          <h2>About Section (Coming Soon)</h2>
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