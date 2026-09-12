// marqueeItems = the scrolling row up top, skillGroups = the table below.
// Both come from the skills section of my CV.

export const marqueeItems: string[] = [
  "PyTorch",
  "YOLO",
  "OpenCV",
  "ONNX Runtime",
  "Raspberry Pi",
  "Flutter",
  "Bluetooth Low Energy",
  "SQLite",
  "TypeScript",
  "Next.js",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "ROS",
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "ML & Computer Vision",
    items: [
      "PyTorch",
      "YOLO (v8, v10, v11)",
      "MobileNet",
      "OpenCV",
      "ONNX Runtime",
      "Object detection",
      "Edge deployment",
      "Model benchmarking",
    ],
  },
  {
    category: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "Bluetooth Low Energy",
      "SQLite",
      "Offline-first sync",
      "Android and iOS release builds",
    ],
  },
  {
    category: "Web",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Prisma",
      "Tailwind CSS",
      "REST API",
      "PHP",
    ],
  },
  {
    category: "Embedded & IoT",
    items: ["Raspberry Pi 4", "ESP32", "Arduino", "Revolution Pi"],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Dart", "C/C++", "SQL"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Streamlit"],
  },
];
