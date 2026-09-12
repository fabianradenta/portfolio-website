import Image from "next/image";
import PhotoSlider from "@/components/PhotoSlider";
import type { Project } from "@/data/projects";

export interface ProjectMediaProps {
  project: Project;
  aspect: string; // e.g. "aspect-[16/10]"
  sizes: string;
  preload?: boolean; // adds <link rel=preload>, LCP images only
  radius?: string; // a tile inside a card can differ from a standalone one
  // "thumb" is too small for text, so it drops the caption, arrows and
  // indicators. A multi-photo project there still crossfades, just bare.
  variant?: "full" | "thumb";
  // The lead card draws its big number in the same corner, so it turns this off.
  showCaption?: boolean;
}

// Slider if the project has photos[], single image if it has image, otherwise
// a placeholder frame the same size.
export default function ProjectMedia({
  project,
  aspect,
  sizes,
  preload = false,
  radius = "rounded-tile",
  variant = "full",
  showCaption = true,
}: ProjectMediaProps) {
  const full = variant === "full";

  if (project.photos && project.photos.length > 1) {
    return (
      <PhotoSlider
        photos={project.photos}
        frameClassName={`${aspect} ${radius} border border-line bg-surface-raised`}
        sizes={sizes}
        caption={full && showCaption ? "mono" : "none"}
        controls={full}
        indicators={full ? "overlay" : "none"}
      />
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden border border-line bg-surface-raised ${radius} ${aspect}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.title} project visual`}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="grid-texture flex h-full w-full flex-col justify-between p-6"
        >
          {full && (
            <>
              <span className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                {project.category}
              </span>
              <span className="font-mono text-6xl leading-none text-white/12 select-none md:text-7xl">
                {project.number}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
