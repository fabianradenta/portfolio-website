export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[#09090b] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_10%,#000_100%)]"></div>

      {/* Konten Utama */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hey, there! <br />
          I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Fabian Radenta Bangun.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Informatics Engineering student at ITB specializing in Artificial Intelligence. Building a strong foundation in software engineering and algorithms, and currently preparing to build my first real-world applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3.5 bg-zinc-50 text-black rounded-full font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            View Projects
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-zinc-700 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all"
          >
            About Me
          </a>
        </div>

      </div>
    </section>
  );
}