import { profile } from "@/data/site";

// No links here on purpose. Contact sits right above and the navbar already
// carries the socials.
export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
      <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-[14px] text-ink">{profile.name}</p>
          <p className="mt-1 font-mono text-[11px] text-faint">{profile.city}</p>
        </div>
        <div className="flex flex-col gap-1 font-mono text-[11px] text-faint sm:items-end">
          <p className="tracking-[0.12em] uppercase">Built with Next.js &amp; Tailwind</p>
          <p>© 2026 {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
