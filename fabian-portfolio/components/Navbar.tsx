"use client";

import Link from "next/link";
import {useState, useEffect} from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "others"];
            for (const section of sections){
                const element = document.getElementById(section);
                if (element){
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150){
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="#home" className="text-xl font-bold tracking-tighter">
                    Fabian
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#home" className={`transition-colors ${activeSection === 'home' ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-300'}`}>
                        Home
                    </Link>
                    <Link href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-300'}`}>
                        About
                    </Link>
                    <Link href="#projects" className={`transition-colors ${activeSection === 'projects' ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-300'}`}>
                        Projects
                    </Link>
                    <Link href="#others" className={`transition-colors ${activeSection === 'others' ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-300'}`}>
                        Others
                    </Link>
                </div>
                <a href="mailto:radentafabian@gmail.com" className="px-5 py-2.5 text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors rounded-full">
                    Let&apos;s Talk
                </a>
            </div>
        </nav>
    );
}