import { links, profile, resume } from "@/data/site";

const socials = [
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "GitHub",
    href: links.github,
    icon: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
  },
];

const iconButton =
  "flex items-center justify-center rounded-2xl border border-line bg-surface/60 p-5 text-muted transition-all duration-300 hover:border-line-strong hover:bg-surface-raised hover:text-ink";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Very low-opacity wash, not a glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 text-center md:px-10 md:py-32">
        {/* Green reads as a status here rather than as a second brand colour. */}
        <p className="flex items-center justify-center gap-3">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase md:text-sm">
            I am available for new opportunities
          </span>
        </p>

        <h2 className="mx-auto mt-10 max-w-5xl text-4xl leading-[1.1] font-bold tracking-tighter text-balance md:text-7xl">
          Let&apos;s build something{" "}
          <span className="text-muted italic">great</span> together.
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${links.email}`}
            className="group relative w-full overflow-hidden rounded-2xl border border-line-strong px-10 py-5 text-lg font-bold text-ink transition-colors duration-500 hover:border-ink sm:w-auto"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0"
            />
            <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-500 group-hover:text-ground">
              Initiate Connection
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on ${social.label}`}
                className={iconButton}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {social.icon}
                </svg>
              </a>
            ))}

            {resume.available && (
              <a
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume as PDF"
                className={iconButton}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
