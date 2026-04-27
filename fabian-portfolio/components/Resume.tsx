export default function Resume() {
	const professionalExperiences = [
		{
			role: "Software Engineer",
			company: "Mioto",
			location: "Jakarta, Indonesia",
			date: "Jul 2025 — Sep 2025",
			description: [
				"Engineered a mobile application using Flutter and SQLite to process and store local telemetry logs, achieving 100% data retention in zero-connectivity areas.",
				"Implemented a custom data transmission protocol via Bluetooth Low Energy (BLE), optimizing payload size to eliminate microcontroller buffer overflows.",
				"Developed a Store-and-Forward synchronization mechanism using REST APIs for seamless backend data handoffs."
			],
		}
	];

	const otherExperiences = [
		{
			role: "Robotic Software Control",
			organization: "Aksantara (ITB UAV Research and Development Team)",
			date: "2022 — 2023",
			description: [
				"National Champion (1st Place VTOL & Best Strategy) at KRTI 2023.",
				"Engineered the computer vision system utilizing OpenCV and developed real-time automated visual processing."
			]
		},
		{
			role: "Head of Community Service",
			organization: "HMIF ITB (Informatics Student Union)",
			date: "May 2025 — Mar 2026",
			description: [
				"Directed a team of 8 staff to orchestrate major social impact initiatives and educational outreach.",
				"Pioneered a comprehensive rural assessment framework for long-term village empowerment.",
				"Designed a foundational logic curriculum delivering computational thinking concepts to local children."
			]
		}
	];

	return (
		<div className="max-w-5xl mx-auto px-6 mb-32" id="resume">
			<div className="flex items-center gap-6 mb-16 pt-10">
				<h2 className="text-3xl font-bold text-white tracking-tight">Milestones</h2>
				<div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
				
				{/* Professional */}
				<div>
					<h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-3">
						<span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
						Professional Experience
					</h3>
					
					<div className="space-y-12 border-l border-white/5 ml-1 pl-6 relative">
						{professionalExperiences.map((exp, index) => (
							<div key={index} className="relative group">
								<div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-[#121214] border-2 border-zinc-700 rounded-full group-hover:border-orange-500 transition-colors duration-300"></div>
								
								<div className="flex flex-col mb-4">
									<h4 className="text-xl font-bold text-white tracking-tight">{exp.role}</h4>
									<p className="text-orange-400 font-medium mt-1">{exp.company}</p>
									<p className="text-[11px] font-mono text-zinc-500 mt-2 uppercase tracking-wider">
										{exp.date} <span className="mx-2 opacity-50">|</span> {exp.location}
									</p>
								</div>
								
								<ul className="mt-4 space-y-3">
									{exp.description.map((item, i) => (
										<li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-3">
											<span className="text-orange-500/40 mt-1 text-[10px]">▹</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Others */}
				<div>
					<h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-3">
						<span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
						Other Experiences
					</h3>
					
					<div className="space-y-12 border-l border-white/5 ml-1 pl-6 relative">
						{otherExperiences.map((item, index) => (
							<div key={index} className="relative group">
								<div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-[#121214] border-2 border-zinc-700 rounded-full group-hover:border-blue-500 transition-colors duration-300"></div>
								
								<div className="flex flex-col mb-4">
									<h4 className="text-xl font-bold text-white tracking-tight">{item.role}</h4>
									<p className="text-blue-400 font-medium mt-1">{item.organization}</p>
									<p className="text-[11px] font-mono text-zinc-500 mt-2 uppercase tracking-wider">{item.date}</p>
								</div>

								<ul className="mt-4 space-y-3">
									{item.description.map((desc, i) => (
										<li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-3">
											<span className="text-blue-500/40 mt-1 text-[10px]">▹</span>
											<span>{desc}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

			</div>
		</div>
	);
}