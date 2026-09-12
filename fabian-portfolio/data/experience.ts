export type Experience = {
  organization: string;
  role: string;
  period: string;
  location?: string;
  // one line about the org and the scope
  summary: string;
  // rendered as a plain list
  bullets?: string[];
  // awards, rendered with an accent dot
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    organization: "Mioto",
    role: "Software Engineer Intern — Mobile",
    period: "Jul 2025 – Sep 2025",
    location: "Jakarta, Indonesia",
    summary:
      "IoT company specializing in connected mobility. Sole mobile developer on a 3-person team.",
    bullets: [
      "Built the company's Flutter field-data collection app for Android and iOS, taking it from an empty repository to a client-facing demo within a 10-week internship.",
      "Engineered bidirectional Bluetooth Low Energy communication with GPS tracker hardware, covering device scanning, MTU negotiation, characteristic notifications, and a custom command and response protocol.",
      "Designed an offline-first SQLite data layer that buffers telemetry locally and syncs in batches of 400, keeping the app usable with no connectivity. A full device upload finished in under 5 minutes in internal testing.",
      "Integrated 11 REST endpoints with JWT authentication, secure token storage, request timeouts, and automatic logout on unauthorized responses.",
      "Shipped QR-based device-to-worker pairing, CSV export, and route playback with distance, duration, and average speed calculation.",
    ],
  },
  {
    organization: "HMIF ITB",
    role: "Head of Community Service",
    period: "May 2025 – Mar 2026",
    location: "Bandung, Indonesia",
    summary:
      "Led a 17-person division across three program lines and more than 50 direct beneficiaries.",
  },
  {
    organization: "Aksantara ITB",
    role: "Robotic Software Control",
    period: "Feb 2023 – Sep 2024",
    summary:
      "Worked on robotic software control for UAV systems and computer vision modules.",
    highlights: ["1st Place — VTOL Category, KRTI 2023", "Best Strategy Award"],
  },
];
