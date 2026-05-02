"use client";

export default function Projects() {
  const projectData = [
    {
      title: "River Plastic Waste Detection",
      category: "Edge AI / Computer Vision",
      image: "bg-[url('/images/final-project.jpg')]",
      tech: ["YOLOv8", "Python", "Raspberry Pi 4"],
      description: "On-premise Edge AI vision system utilizing YOLOv8 and Raspberry Pi 4 for real-time drone-based waste detection without server dependencies."
    },
    {
      title: "Linkin Purry",
      category: "Full-Stack Web",
      image: "bg-[url('/images/linkin-purry.png')]",
      tech: ["JavaScript", "PHP", "PostgreSQL"],
      description: "An academic project replicating LinkedIn's core functionalities. Built from scratch to learn client-server communication, state management, and PostgreSQL database design in a web environment."
    },
    {
      title: "AjarinDong Case Study",
      category: "UI/UX Design",
      image: "bg-[url('/images/ajarin-dong.png')]",
      tech: ["User Research", "Prototyping", "Figma"],
      description: "UI/UX case study for an educational application, executing processes from user research to high-fidelity prototyping."
    },
    {
      title: "SEKA - Interactive Mannequin",
      category: "Embedded Systems",
      image: "bg-[url('/images/seka-mannequine.jpeg')]",
      tech: ["Embedded C/C++", "Sensors", "Hardware"],
      description: "Interactive educational mannequin processing real-time inputs from 10 touch sensors to trigger context-aware audio responses for special needs education."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 mb-32">
      
      <div className="mb-14 pt-10 flex flex-col items-start">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></div>
          <p className="text-[11px] font-mono text-emerald-500 uppercase tracking-[0.2em]">The Showcase</p>
        </div>
        <h2 className="text-4xl font-bold text-white tracking-tight">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <div 
            key={index}
            className="group relative h-105 rounded-4xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl"
          >
            <div className={`absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:opacity-30 ${project.image}`}></div>
            <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-[#09090b]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em] mb-3">
                {project.category}
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-md text-[10px] font-mono text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>

            </div>

            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-100 group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-500">
              <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">Explore</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/80">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}