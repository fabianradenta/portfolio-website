import { profile } from "@/data/site";

export type Hobby = {
  label: string;
  image?: string;
  alt?: string; // falls back to label
};

// line under my name on the identity card
export const positioning = "Software Engineer · AI · Mobile · Web · Edge";

export const beyondCopy = "A few things I enjoy when I'm away from the screen.";

export type IdentitySlide = {
  label: string; // big line
  sublabel: string; // accent line under it
  image: string;
  alt: string;
};

// Identity card cycles between my portrait and the campus.
export const identity: IdentitySlide[] = [
  {
    label: profile.name,
    sublabel: positioning,
    image: "/images/beyond-the-code/fabian.jpeg",
    alt: "Portrait of Fabian Radenta Bangun",
  },
  {
    label: "Institut Teknologi Bandung",
    sublabel: "Informatics Engineering · AI Specialization",
    image: "/images/beyond-the-code/itb.jpeg",
    alt: "The courtyard between Aula Barat and Aula Timur at Institut Teknologi Bandung",
  },
];

// Things I do outside work. Mountaineering is in places[] too, but there it's
// the specific trips. No image set = empty frame with just the label.
export const hobbies: Hobby[] = [
  {
    label: "Coffee",
    image: "/images/beyond-the-code/coffee.jpg",
    alt: "A pour-over coffee brew in progress beside a bag of roasted beans",
  },
  {
    label: "Cooking",
    image: "/images/beyond-the-code/cooking.jpeg",
    alt: "Chicken frying in a wok",
  },
  {
    label: "Art",
    image: "/images/beyond-the-code/art.jpg",
    alt: "Paintings on show at a gallery exhibition",
  },
  {
    label: "Running",
    image: "/images/beyond-the-code/running.jpeg",
    alt: "Three runners with their finisher medals after a race",
  },
  {
    label: "Mountaineering",
    image: "/images/beyond-the-code/mountaineering.jpg",
    alt: "Two hikers descending a muddy jungle trail",
  },
  {
    label: "Weightlifting",
    image: "/images/beyond-the-code/weightlifting.jpeg",
    alt: "A toddler drinking from a sippy cup",
  },
];

export type Place = {
  title: string;
  location?: string; // e.g. "West Java · Indonesia". Skip it if unsure.
  image?: string;
  alt?: string;
};

// Places I've been. Photos go in public/images/beyond-the-code/.
// No photo yet is fine, the card just shows the name.
export const places = {
  label: "Places I've Been",
  items: [
    {
      title: "Mt. Patuha",
      image: "/images/beyond-the-code/patuha.jpeg",
      alt: "Fabian Radenta Bangun above the crater lake at Mt. Patuha",
    },
    {
      title: "Mt. Sibayak",
      image: "/images/beyond-the-code/sibayak.jpg",
      alt: "The welcome gate at the Gunung Sibayak trailhead at dusk",
    },
    {
      title: "Mt. Sagara",
      image: "/images/beyond-the-code/sagara.jpg",
      alt: "Four hikers at the summit, with a crater lake and a sea of cloud below",
    },
    {
      title: "Mt. Burangrang",
      image: "/images/beyond-the-code/burangrang.jpeg",
      alt: "Fabian Radenta Bangun at the Gn. Burangrang summit marker",
    },
    {
      title: "Mt. Malabar",
      image: "/images/beyond-the-code/malabar.jpeg",
      alt: "A group at the Puncak Junghuhn summit sign on Gunung Malabar",
    },
    {
      title: "Mt. Manglayang",
      image: "/images/beyond-the-code/manglayang.jpeg",
      alt: "Looking out over the Bandung city lights at dusk from Mt. Manglayang",
    },
    {
      title: "Mt. Pangradinan",
      image: "/images/beyond-the-code/pangradinan.jpeg",
      alt: "The Gunung Pangradinan summit sign at night, above the city lights",
    },
    {
      title: "Sentimok Hamlet",
      image: "/images/beyond-the-code/sentimok.jpeg",
      alt: "A group with local children at Sentimok Hamlet",
    },
    {
      title: "Cermin Beach",
      image: "/images/beyond-the-code/cermin.jpeg",
      alt: "Breakwater rocks on the shore at Cermin Beach",
    },
    {
      title: "Garut Beach",
      image: "/images/beyond-the-code/garut.jpeg",
      alt: "Waves breaking on the sand at Garut Beach",
    },
  ] as Place[],
};

export const baseOfOps = {
  label: "Base of Ops",
  note: "Usually somewhere between a laptop, a running route, and a good cup of coffee.",
};
