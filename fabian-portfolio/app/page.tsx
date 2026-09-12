import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import BeyondTheCode from "@/components/BeyondTheCode";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Experience />
      <BeyondTheCode />
      <Skills />
      <Contact />
    </main>
  );
}
