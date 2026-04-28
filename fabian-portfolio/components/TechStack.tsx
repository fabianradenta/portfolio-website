"use client";

export default function TechStack() {
  const hardwareAndAI = [
    "C/C++", "Python", "Raspberry Pi 4", "YOLOv8", "OpenCV", "ESP32", "RevPi Connect", "Arduino"
  ];
  
  const softwareAndWeb = [
    "Flutter", "Node.js", "React.js", "Next.js", "MySQL", "PostgreSQL", "JavaScript", "Dart", "SQLite", "Express.js", "PHP", "Git", "Docker"
  ];

  const track1 = [...hardwareAndAI, ...hardwareAndAI, ...hardwareAndAI];
  const track2 = [...softwareAndWeb, ...softwareAndWeb, ...softwareAndWeb];

  return (
    <div className="max-w-6xl mx-auto px-6 mb-32" id="techstack"> 
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shadow-[0_0_10px_rgba(113,113,122,0.5)]"></div>
          <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Tech Stack</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          My Skillset
        </h2>
      </div>

      <div 
        className="relative w-full overflow-hidden flex flex-col gap-6 py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        
        {/* TRACK 1: RIGHT - LEFT */}
        <div className="relative flex items-center py-2 conveyor-row">
          <div className="flex w-max animate-conveyor-left">
            {track1.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center mx-3 px-6 py-3 bg-[#121214] border border-white/5 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
                <span className="text-sm font-mono text-zinc-300 whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TRACK 2: LEFT - RIGHT */}
        <div className="relative flex items-center py-2 conveyor-row">
          <div className="flex w-max animate-conveyor-right">
            {track2.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center mx-3 px-6 py-3 bg-[#121214] border border-white/5 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                <span className="text-sm font-mono text-zinc-300 whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Pure CSS Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes conveyor-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes conveyor-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-conveyor-left {
          animation: conveyor-left 30s linear infinite;
        }
        .animate-conveyor-right {
          animation: conveyor-right 30s linear infinite;
        }
        /* Pause animation */
        .conveyor-row:hover .animate-conveyor-left,
        .conveyor-row:hover .animate-conveyor-right {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}