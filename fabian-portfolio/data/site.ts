// Identity, links and config for the whole site.

export const profile = {
  name: "Fabian Radenta Bangun",
  role: "Software Engineer",
  location: "Based in Indonesia",
  timezone: "UTC+7",
  city: "Bandung, Indonesia",
} as const;

export const links = {
  email: "radentafabian@gmail.com",
  github: "https://github.com/fabianradenta",
  linkedin: "https://linkedin.com/in/fabian-radenta-bangun/",
} as const;

// Put the PDF in public/resume/ then set available to true.
// While it's false the link stays hidden so we never ship a 404.
export const resume = {
  available: true,
  href: "/resume/Fabian-Radenta-Bangun-Resume.pdf",
} as const;

// Base for canonical + OG urls. Only read in layout.tsx metadata, never on the
// client, so the Vercel var doesn't need a NEXT_PUBLIC_ prefix.
// Manual override wins, then Vercel's production domain (needs System Env Vars
// enabled in project settings), then localhost for dev.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const seo = {
  title: "Fabian Radenta Bangun — Software Engineer",
  description:
    "Software Engineer from Institut Teknologi Bandung building practical systems across AI, mobile, web, and edge computing.",
} as const;

export const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;
