// All projects live here, not in the JSX.
// tier picks the layout: flagship, secondary, or the compact "More Work" list.
// image is optional - without one the layout draws a placeholder the same size.
// Use photos[] instead when a project has more than one shot to show.

export type ProjectTier = "flagship" | "secondary" | "compact";

export type ProjectLinkKind = "case-study" | "github" | "demo" | "deck";

export type ProjectLink = {
  kind: ProjectLinkKind;
  href: string;
};

export type ProjectPhoto = {
  label: string; // caption on the image, keep it short
  image: string;
  alt?: string; // when the caption doesn't describe the photo
};

export type Metric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  overview: string;
  problem: string;
  approach: string;
  implementation: string[];
  results: Metric[];
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  tier: ProjectTier;
  image?: string;
  imageAlt?: string;
  photos?: ProjectPhoto[]; // crossfades. overrides image.
  metric?: Metric;
  secondaryMetric?: Metric;
  award?: string[];
  links?: ProjectLink[];
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "selective-tiling",
    title: "Selective Tiling for Small Object Detection on Edge Devices",
    category: "Edge AI · Computer Vision",
    description:
      "Undergraduate final project exploring selective tiling for small-object detection on edge devices, using a lightweight gate classifier to reduce unnecessary inference on 4K drone imagery.",
    technologies: ["Raspberry Pi 4", "MobileNetV2", "YOLO11n", "ONNX Runtime"],
    tier: "flagship",
    photos: [
      {
        label: "Tiled drone frame",
        image: "/images/projects/final-project-1.jpg",
        alt: "Drone imagery from the selective tiling small-object detection final project",
      },
      {
        label: "Final project defence",
        image: "/images/projects/final-project-2.jpg",
        alt: "Fabian Radenta Bangun presenting the selective tiling final project at its defence",
      },
      {
        label: "Graduation",
        image: "/images/projects/final-project-3.png",
        alt: "Fabian Radenta Bangun wearing the Institut Teknologi Bandung graduation sash",
      },
    ],
    metric: { value: "51.6%", label: "faster inference" },
    secondaryMetric: { value: "20.8s → 9.6s", label: "per image" },
    links: [{ kind: "case-study", href: "/work/selective-tiling" }],
    caseStudy: {
      overview:
        "Undergraduate final project exploring selective tiling for small-object detection on edge devices, using a lightweight gate classifier to reduce unnecessary inference on 4K drone imagery.",
      problem:
        "Small-object detection on 4K drone imagery depends on tiling the frame so objects survive the detector's input resolution. The cost is that the detector then runs on every tile, and most tiles hold nothing worth detecting. On a Raspberry Pi 4 that came to 20.8 seconds per image.",
      approach:
        "A MobileNetV2 gate classifier runs ahead of the detector and decides which tiles are worth passing on. Tiles the gate rejects never reach YOLO11n, so inference cost follows the number of tiles that actually contain something rather than the size of the frame. The tradeoff to watch is accuracy: a gate that is too aggressive drops real detections.",
      implementation: [
        "MobileNetV2 gate classifier in front of a YOLO11n detector.",
        "Both models executed through ONNX Runtime on a Raspberry Pi 4.",
        "Evaluated against full tiling as the baseline, on per-image inference time and small-object AP.",
      ],
      results: [
        { value: "51.6%", label: "reduction in per-image inference time" },
        { value: "20.8s → 9.6s", label: "per image on Raspberry Pi 4" },
        { value: "0.310 vs 0.308", label: "small-object AP against full tiling" },
        { value: "91.9%", label: "gate classifier validation accuracy" },
      ],
    },
  },
  {
    number: "02",
    slug: "mioto",
    title: "Mioto People Mobility",
    category: "Flutter · BLE · Offline-First",
    description:
      "Built a cross-platform field-data collection application as the sole mobile developer on a 3-person product team, taking the app from an empty repository to a client-facing demo in 10 weeks.",
    technologies: ["Flutter", "BLE", "SQLite", "REST API", "JWT", "Android / iOS"],
    tier: "flagship",
    image: "/images/projects/people-mobility.png",
    imageAlt:
      "Mioto People Mobility app screens: sync dashboard, splash screen, and route analysis",
    metric: { value: "<5 min", label: "full device upload" },
    secondaryMetric: { value: "10 weeks", label: "to client-facing demo" },
    links: [{ kind: "case-study", href: "/work/mioto" }],
    caseStudy: {
      overview:
        "A cross-platform field-data collection application, built as the sole mobile developer on a 3-person product team and taken from an empty repository to a client-facing demo in 10 weeks.",
      problem:
        "The app collects data in the field, where network coverage is not something the product can assume. It also reads from GPS tracker hardware over BLE rather than from a network service, so the phone has to be the system of record until a connection is available.",
      approach:
        "Offline-first: writes land in local SQLite first, and synchronization is a separate concern that runs when connectivity allows. Telemetry moves in batches rather than per record, which is what keeps a full device upload inside a few minutes instead of a few hundred round trips.",
      implementation: [
        "Flutter application shipped as Android and iOS release builds.",
        "BLE integration with GPS tracker hardware, including QR device-worker pairing.",
        "Local SQLite storage backing an offline-first synchronization path.",
        "11 REST endpoints behind JWT authentication.",
      ],
      results: [
        { value: "<5 min", label: "for a full device upload" },
        { value: "400 records", label: "per synchronization batch" },
        { value: "11", label: "REST endpoints integrated" },
        { value: "10 weeks", label: "from empty repository to client-facing demo" },
      ],
    },
  },
  {
    number: "03",
    slug: "flagrail",
    title: "Flagrail",
    category: "Full-Stack · Software Engineering",
    description:
      "A self-built multi-tenant feature flag management platform with deterministic rollout evaluation, targeting rules, audit logging, and automated tests.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vitest"],
    tier: "flagship",
    image: "/images/projects/flagrail.png",
    imageAlt:
      "Flagrail project dashboard listing feature flags with their rollout and targeting rules",
    metric: { value: "~5,000", label: "lines of TypeScript" },
    secondaryMetric: { value: "18", label: "unit tests" },
    links: [
      { kind: "case-study", href: "/work/flagrail" },
      { kind: "github", href: "https://github.com/fabianradenta/flagrail" },
    ],
    caseStudy: {
      overview:
        "A self-built multi-tenant feature flag management platform with deterministic rollout evaluation, targeting rules, audit logging, and automated tests.",
      problem:
        "A percentage rollout is only useful if it is stable. If evaluation is random per request, a user flips between variants as they move through the product. Multi-tenancy raises the second problem: one tenant's flags and API keys must not be reachable from another.",
      approach:
        "Rollout bucketing is derived from a SHA-256 hash rather than a random draw, so the same subject always resolves to the same bucket for a given flag. Access is split between JWT sessions in HTTP-only cookies for the dashboard and hashed API keys for programmatic evaluation, and every change is written to an audit log.",
      implementation: [
        "Next.js and TypeScript on a 9-model PostgreSQL schema through Prisma.",
        "SHA-256 deterministic bucketing for percentage rollouts and targeting rules.",
        "JWT sessions in HTTP-only cookies; hashed API keys for machine access.",
        "Audit logging over flag and environment changes.",
      ],
      results: [
        { value: "~5,000", label: "lines of TypeScript" },
        { value: "9", label: "model PostgreSQL schema" },
        { value: "18", label: "Vitest unit tests" },
      ],
    },
  },
  {
    number: "04",
    slug: "travel-trip",
    title: "Travel Trip",
    category: "Web · Cloud · CI/CD",
    description:
      "A static website product for open-trip operators with scheduled rebuilds, typed content collections, and feature-gated commercial tiers.",
    technologies: ["Astro", "TypeScript", "Cloudflare Workers", "GitHub Actions", "Zod"],
    tier: "secondary",
    image: "/images/projects/travel-trip.png",
    imageAlt: "Homepage of an open-trip operator site built on Travel Trip",
    links: [{ kind: "demo", href: "https://travel-trip.radentafabian.workers.dev" }],
  },
  {
    number: "05",
    slug: "autonomous-vtol",
    title: "Autonomous VTOL System",
    category: "ROS · Computer Vision · UAV",
    description:
      "Worked on robotic software control for an autonomous VTOL UAV, adapting and extending team OpenCV vision modules for target detection.",
    technologies: ["ROS", "OpenCV"],
    tier: "secondary",
    photos: [
      {
        label: "Team VTOL UAV",
        image: "/images/projects/VTOL-1.jpg",
        alt: "Fabian Radenta Bangun seated beside the team's VTOL UAV",
      },
      {
        label: "KRTI 2023",
        image: "/images/projects/VTOL-2.JPG",
        alt: "Fabian Radenta Bangun holding the KRTI 2023 first-place board for the VTOL category",
      },
    ],
    award: ["1st Place — VTOL Category, KRTI 2023", "Best Strategy Award"],
  },
  {
    number: "06",
    slug: "gan-query-expansion",
    title: "Information Retrieval System with GAN Query Expansion",
    category: "AI · Information Retrieval",
    description:
      "Built an information retrieval system combining TF-IDF, cosine similarity, and GAN-based query expansion, with caching and staged query validation.",
    technologies: ["Python", "Streamlit"],
    tier: "secondary",
    links: [{ kind: "github", href: "https://github.com/Ariel-HS/Tubes_STBI" }],
  },
  {
    number: "07",
    slug: "linkinpurry",
    title: "LinkinPurry",
    category: "Full-Stack",
    description:
      "A job portal platform built with native PHP MVC and PostgreSQL, including server-side CRUD, application workflows, API endpoints, and Docker-based development.",
    technologies: ["PHP", "PostgreSQL", "Docker"],
    tier: "compact",
    image: "/images/projects/linkin-purry.png",
    imageAlt: "LinkinPurry sign-in page",
    links: [
      {
        kind: "github",
        href: "https://github.com/Labpro-21/if3110-tubes-2024-k02-21/",
      },
    ],
  },
  {
    number: "08",
    slug: "dobot-sorting",
    title: "Dobot Sorting Automation System",
    category: "Industrial Robotics",
    description:
      "Built a robotic sorting system using Revolution Pi with remote HMI control and local-network communication for real-time target-zone execution.",
    technologies: ["Revolution Pi"],
    tier: "compact",
    photos: [
      {
        label: "Sorting rig",
        image: "/images/projects/dobot-1.jpg",
        alt: "The sorting rig: a conveyor belt, robotic arm, and coloured blocks inside an aluminium frame",
      },
      {
        label: "Colour detection",
        image: "/images/projects/dobot-2.jpg",
        alt: "Webcam feed on the Revolution Pi detecting coloured blocks, their angles, and the target zone",
      },
    ],
  },
  {
    number: "09",
    slug: "seka",
    title: "SEKA",
    category: "Embedded Systems · C/C++",
    description:
      "A commissioned interactive educational mannequin prototype designed for body-safety awareness for students with special needs, built using ESP32, 10 touch sensors, DFPlayer Mini, and local audio playback.",
    technologies: ["ESP32", "C/C++", "DFPlayer Mini"],
    tier: "compact",
    image: "/images/projects/seka-mannequine.jpeg",
    imageAlt: "The SEKA interactive educational mannequin prototype",
  },
  {
    number: "10",
    slug: "ajarindong",
    title: "AjarinDong",
    category: "UI/UX · Mobile",
    description:
      "Designed a mobile learning application concept through user flows, wireframes, high-fidelity interfaces, user research, and usability testing.",
    technologies: ["Figma"],
    tier: "compact",
    image: "/images/projects/ajarin-dong.png",
    imageAlt:
      "AjarinDong high-fidelity screens: login, teacher detail, and chat list",
    links: [
      {
        kind: "deck",
        href: "https://drive.google.com/file/d/1jKxQ6OSoGbpeWT3SfRR4u5qf3W0x-WPs/view",
      },
    ],
  },
];

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const secondaryProjects = projects.filter((p) => p.tier === "secondary");
export const compactProjects = projects.filter((p) => p.tier === "compact");

export const caseStudyProjects = projects.filter((p) => p.caseStudy);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const linkLabels: Record<ProjectLinkKind, string> = {
  "case-study": "Case Study",
  github: "GitHub",
  demo: "Live Demo",
  deck: "Deck",
};
