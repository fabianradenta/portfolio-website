"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BentoAbout() {
    const [currentHobby, setCurrentHobby] = useState(0);
    const hobbyPhotos = [
        {
            id: "mountain",
            label: "Mountaineering",
            bgClass: "bg-[url('/images/mountaineering.jpeg')]",
        },
        {
            id: "run",
            label: "Running",
            bgClass: "bg-[url('/images/running.jpeg')]", 
        },
        {
            id: "lift",
            label: "Weightlifting",
            bgClass: "bg-[url('/images/weightlifting.jpeg')]",
        },
        {
            id: "cooking",
            label: "Cooking",
            bgClass: "bg-[url('/images/cooking.jpeg')]",
        }
    ];

    const nextHobby = () => {
        setCurrentHobby((prev) => (prev + 1) % hobbyPhotos.length);
    };

    const prevHobby = () => {
        setCurrentHobby((prev) => (prev === 0 ? hobbyPhotos.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextHobby, 5000);
        return () => clearInterval(timer);
    }, [currentHobby]);

    const [currentAbout, setCurrentAbout] = useState(0);

    const aboutSlides = [
        {
            id: "persona",
            title: "Fabian Radenta Bangun",
            subtitle: "Informatics Student | AI Enthusiast | Developer",
            bgClass: "bg-[url('/images/fabian.jpeg')]",
        },
        {
            id: "foundation",
            title: "Institut Teknologi Bandung",
            subtitle: "Informatics Engineering",
            bgClass: "bg-[url('/images/itb.jpeg')]",
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentAbout((prev) => (prev + 1) % aboutSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mb-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[260px]">
                
                {/* LEFT: Beyond the Code */}
                    <div className="md:row-span-2 bg-[#121214] border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
                        <h2 className="text-3xl font-bold text-white mb-4">Beyond the Code</h2>
                        
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Long hours debugging and writing code require a proper outlet. <span className="text-white font-medium">Balance is key.</span>
                        </p>
                        
                        {/* IMAGES CONTAINER */}
                        <div className="flex-1 w-full min-h-[180px] rounded-2xl overflow-hidden relative group/slider mb-6 border border-white/5"> 
                            {hobbyPhotos.map((photo, index) => (
                                <div 
                                    key={photo.id}
                                    className={`absolute inset-0 transition-opacity duration-700 bg-cover bg-center ${
                                    currentHobby === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                    } ${photo.bgClass}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/20 to-transparent"></div>
                                    <div className="absolute bottom-3 left-4 text-[10px] font-mono text-white/70 uppercase tracking-widest">
                                        {photo.label}
                                    </div>
                                </div>
                            ))}

                            {/* LEFT AND RIGHT NAV BUTTON */}
                            <button 
                                onClick={prevHobby}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/40 hover:bg-black/80 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity backdrop-blur-sm"
                            >
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                            </button>
                            <button 
                                onClick={nextHobby}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/40 hover:bg-black/80 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity backdrop-blur-sm"
                            >
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                            </button>

                            {/* SLIDE INDICATOR */}
                            <div className="absolute top-3 left-0 right-0 flex justify-center gap-1.5 z-30">
                                {hobbyPhotos.map((_, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => setCurrentHobby(index)}
                                    className={`h-1 rounded-full transition-all duration-300 shadow-sm ${currentHobby === index ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
                                ></button>
                                ))}
                            </div>
                        </div>

                        <p className="text-zinc-400 leading-relaxed text-sm mt-auto">
                            Stepping away from the screen is how I keep my mind sharp for the next challenge.
                        </p>
                    </div>

                    {/* CENTER TOP: About Me Carousel (autoplay) */}
                    <div className="bg-[#121214] border border-white/5 rounded-3xl overflow-hidden relative group">
                        
                        {aboutSlides.map((slide, index) => (
                        <div 
                            key={slide.id}
                            className={`absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-1000 bg-cover bg-center ${
                            currentAbout === index ? "opacity-100 z-10" : "opacity-0 z-0"
                            } ${slide.bgClass}`}
                        >
                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            
                            <div className="relative z-20 text-center">
                                <p className="text-lg font-bold text-white leading-tight">{slide.title}</p>
                                <p className="text-xs text-zinc-400 mt-1">{slide.subtitle}</p>
                            </div>
                        </div>
                        ))}

                        {/* SLIDE INDICATOR */}
                        <div className="absolute bottom-0 left-0 right-0 flex z-30 h-1 bg-white/5">
                        {aboutSlides.map((_, index) => (
                            <div 
                            key={index} 
                            className={`flex-1 transition-colors duration-500 ${
                                currentAbout === index ? "bg-zinc-400" : "bg-transparent"
                            }`}
                            ></div>
                        ))}
                        </div>
                    </div>

                    {/* RIGHT: Kisamata  */}
                    <div className="md:row-span-2 bg-[#121214] border border-white/5 rounded-3xl p-8 flex flex-col group relative overflow-hidden transition-all duration-500">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-orange-500/20 group-hover:scale-110"></div>
                        
                        <h3 className="text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-2 relative z-10 font-bold">Current Venture</h3>
                        <h2 className="text-3xl font-bold text-white mb-6 relative z-10 tracking-tight transition-colors group-hover:text-orange-50">Kisamata</h2>
                        
                        {/* PHYSICAL CARD */}
                        <div className="w-full h-40 mb-6 relative flex items-center justify-center perspective-1000">
                            <div className="w-56 h-36 bg-gradient-to-br from-[#1a1a1f] to-[#09090b] border border-white/10 rounded-xl relative overflow-hidden shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.15)] group-hover:border-orange-500/30 group-hover:rotate-[2deg]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_ease-out_forwards]"></div>

                                {/* KISAMATA LOGO */}
                                <div className="absolute inset-0 flex items-center justify-center gap-2.5">
                                    <Image src="/images/white_icon.png" alt="Kisamata Card" width="40" height="40" />
                                </div>
                            </div>
                        </div>

                        {/* DESC TEXT */}
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8 relative z-10 flex-1 transition-colors group-hover:text-zinc-200">
                            I am currently stepping into entreprenurial arena. Building Kisamata and bridging deep engineering with real-world business mechanics to solve practical problems.
                        </p>
                        
                        {/* LINK BUTTON */}
                        <div className="mt-auto relative z-10">
                            <a 
                                href="https://kisamata.com"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full p-4 bg-[#121214] hover:bg-orange-900/20 border border-white/5 hover:border-orange-500/30 rounded-xl transition-all duration-300 group/btn"
                            >
                                <div className="flex flex-col">
                                    <span className="text-white font-medium text-sm">Visit Website</span>
                                    <span className="text-zinc-500 text-[10px] font-mono mt-0.5">kisamata.com</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover/btn:text-orange-400 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:bg-orange-500/10 transition-all">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* CENTER BOTTOM: Location */}
                    <div className="bg-[#121214] border border-white/5 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
                        
                        {/* GRID AND RADAR */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                        <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-white/5 rounded-full transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="absolute -right-8 -bottom-8 w-24 h-24 border border-white/10 rounded-full transition-transform duration-500 group-hover:scale-125"></div>
                        
                        {/* HEADER */}
                        <div className="flex justify-between items-start relative z-10">
                            <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Base of Ops</h3>
                            
                            {/* TIMEZONE BADGE */}
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider">WIB (UTC+7)</span>
                            </div>
                        </div>

                        {/* MAIN CONTENT */}
                        <div className="relative z-10 mt-auto pt-6">
                            <p className="text-2xl font-bold text-white tracking-tight mb-1">Bandung, Indonesia</p>
                        
                            {/* COORDINATE ON GANESHA */}
                            <p className="text-[10px] font-mono text-zinc-500 mb-4">6.8915° S, 107.6106° E</p>
                        
                            {/* DESC */}
                            <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-4 group-hover:text-zinc-300 transition-colors">
                                Far enough from the capital&apos;s noise, yet close enough to the mountains.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}