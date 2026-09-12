"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { links, profile, resume, sections } from "@/data/site";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<string>("");
  const active = isHome ? activeId : "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActiveId(hit.target.id);
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );

    for (const section of sections) {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, [isHome]);

  // Prevent the page scrolling behind the open mobile panel.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ground/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6 md:px-10">
        <Link
          href="/"
          className="font-mono text-[13px] tracking-tight text-ink transition-colors hover:text-accent"
        >
          {profile.name.split(" ")[0]}
          <span className="text-faint">.</span>
        </Link>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={isHome ? `#${section.id}` : `/#${section.id}`}
                  aria-current={active === section.id ? "true" : undefined}
                  className={`text-[13px] transition-colors ${
                    active === section.id
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          {resume.available && (
            <a
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line-strong px-4 py-1.5 text-[12px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 text-ink md:hidden"
        >
          {open ? (
            <X size={18} strokeWidth={1.75} aria-hidden="true" />
          ) : (
            <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-ground md:hidden">
          <nav aria-label="Sections" className="mx-auto max-w-6xl px-6 py-4">
            <ul className="flex flex-col">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={isHome ? `#${section.id}` : `/#${section.id}`}
                    onClick={() => {
                      document.body.style.overflow = "";
                      setOpen(false);
                    }}
                    className="block py-3 text-lg text-ink"
                  >
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-6 border-t border-line pt-5 text-[13px] text-muted">
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {resume.available && (
                <a href={resume.href} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
