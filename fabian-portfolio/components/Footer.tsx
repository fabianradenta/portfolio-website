"use client";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="max-w-6xl mx-auto px-6 pb-12" id="contact">
		<div className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

			<div className="relative z-10 text-center">
			<div className="flex justify-center items-center gap-3 mb-8">
				<span className="flex h-2 w-2 relative">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
				</span>
				<p className="text-sm md:text-base font-mono text-emerald-400 font-bold uppercase tracking-[0.2em]">
				I am available for new opportunities
				</p>
			</div>

			<h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-12 leading-[1.1]">
				Let&apos;s build something <br /> 
				<span className="text-zinc-500 italic">great</span> together.
			</h2>

			<div className="flex flex-col md:flex-row items-center justify-center gap-5">
				<a 
				href="mailto:radentafabian@gmail.com"
				className="group relative px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-2xl transition-all duration-500 overflow-hidden text-lg hover:border-white w-full md:w-auto"
				>
				<div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
				
				<span className="relative z-10 group-hover:text-black transition-colors duration-500 flex items-center justify-center gap-3">
					Initiate Connection 
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-x-1">
					<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
					</svg>
				</span>
				</a>
				<div className="flex items-center gap-3">
				<a 
					href="https://linkedin.com/in/fabian-radenta-bangun/" 
					target="_blank"
					rel="noopener noreferrer"
					className="p-5 bg-white/3 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
					title="LinkedIn"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
					<rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
					</svg>
				</a>
				<a 
					href="https://github.com/fabianradenta" 
					target="_blank"
					rel="noopener noreferrer"
					className="p-5 bg-white/3 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
					title="GitHub"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
					<path d="M9 18c-4.51 2-5-2-7-2"/>
					</svg>
				</a>
				</div>
			</div>
			</div>
		</div>
		<div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
			<p>© {currentYear} Fabian Radenta Bangun</p>

			<div className="flex items-center gap-8">
			<p>Bandung, Indonesia</p>
			<p className="hidden md:block">Built with Next.js & Tailwind</p>
			</div>
		</div>
		</footer>
	);
}