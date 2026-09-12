import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-texture pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
        <p className="flex items-center gap-3 text-[15px] text-muted">
          <span aria-hidden="true" className="h-px w-7 bg-accent" />
          Hey, there!
        </p>

        <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4rem]">
          I&apos;m Fabian Radenta Bangun<span className="text-accent">.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/90 md:text-xl">
          Software Engineer building practical systems across AI, mobile, web, and
          edge computing.
        </p>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          Informatics Engineering graduate from Institut Teknologi Bandung, working
          from AI systems on constrained hardware through to mobile and web
          applications.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-4">
          <Link
            href="#work"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-ground transition-colors hover:bg-white"
          >
            View My Work
            <ArrowDownRight
              size={16}
              strokeWidth={2}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </Link>
          <Link
            href="#about"
            className="rounded-full border border-line-strong px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
