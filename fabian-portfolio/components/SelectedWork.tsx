import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectLinks from "@/components/ProjectLinks";
import {
  compactProjects,
  flagshipProjects,
  secondaryProjects,
  type Project,
} from "@/data/projects";

function TechList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <p className={`font-mono text-[11px] leading-relaxed text-faint ${className}`}>
      {items.join("  ·  ")}
    </p>
  );
}

function Eyebrow({ project }: { project: Project }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-[13px] text-accent">{project.number}</span>
      <span className="font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
        {project.category}
      </span>
    </div>
  );
}

// number tiles
function MetricTiles({ project }: { project: Project }) {
  if (!project.metric) return null;
  const metrics = [project.metric, project.secondaryMetric].filter(
    (m) => m !== undefined,
  );

  return (
    <dl className="flex flex-wrap gap-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-tile border border-line bg-surface-raised px-5 py-4"
        >
          <dd className="text-2xl leading-none font-semibold tracking-[-0.02em] text-ink">
            {metric.value}
          </dd>
          <dt className="mt-2 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
            {metric.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

// 01. Side by side rather than full width so 02 isn't pushed far below the fold.
function LeadProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group overflow-hidden rounded-card border border-line bg-surface p-3 md:p-4">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="relative">
              <ProjectMedia
                project={project}
                aspect="aspect-[16/10]"
                sizes="(min-width: 768px) 55vw, 100vw"
                showCaption={false}
                preload
              />
              {(project.image || project.photos) && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-4 left-5 font-mono text-5xl leading-none text-white/30 select-none md:text-6xl"
                >
                  {project.number}
                </span>
              )}
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-6 p-4 md:col-span-5 md:justify-center md:p-6">
            <div>
              <Eyebrow project={project} />
              <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.02em] text-ink md:text-[1.75rem]">
                {project.title}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <MetricTiles project={project} />

            <div>
              <TechList items={project.technologies} />
              <ProjectLinks
                links={project.links}
                title={project.title}
                className="mt-5"
              />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

// 02 and 03, alternating sides and uneven widths.
function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const mediaRight = index % 2 === 1;

  return (
    <Reveal>
      <article className="group grid grid-cols-12 items-center gap-y-8 md:gap-x-12">
        <div
          className={`col-span-12 ${
            mediaRight ? "md:order-2 md:col-span-6" : "md:col-span-7"
          }`}
        >
          <ProjectMedia
            project={project}
            aspect="aspect-[16/10]"
            sizes="(min-width: 768px) 55vw, 100vw"
            radius="rounded-card"
          />
        </div>

        <div
          className={`col-span-12 ${
            mediaRight ? "md:order-1 md:col-span-6" : "md:col-span-5"
          }`}
        >
          <Eyebrow project={project} />
          <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.02em] text-ink">
            {project.title}
          </h3>
          <p className="mt-5 text-[14px] leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-7">
            <MetricTiles project={project} />
          </div>
          <TechList items={project.technologies} className="mt-6" />
          <ProjectLinks links={project.links} title={project.title} className="mt-6" />
        </div>
      </article>
    </Reveal>
  );
}

// 04-06, smaller cards of different shapes.
function SecondaryProject({ project, index }: { project: Project; index: number }) {
  const isBand = index > 1;
  const span = isBand ? "md:col-span-12" : index === 0 ? "md:col-span-7" : "md:col-span-5";

  return (
    <Reveal className={`col-span-12 ${span}`} delay={index * 60}>
      <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface">
        {!isBand && (
          <div className="p-3 pb-0">
            <ProjectMedia
              project={project}
              aspect={index === 0 ? "aspect-[16/10]" : "aspect-[5/4]"}
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
        )}

        <div
          className={`flex flex-1 flex-col p-7 ${
            isBand ? "md:grid md:grid-cols-12 md:items-center md:gap-x-12 md:p-8" : ""
          }`}
        >
          <div className={isBand ? "md:col-span-5" : ""}>
            <Eyebrow project={project} />
            <h3 className="mt-3 text-xl leading-tight font-semibold tracking-[-0.01em] text-ink">
              {project.title}
            </h3>
          </div>

          <div className={isBand ? "mt-5 md:col-span-7 md:mt-0" : "mt-4 flex flex-1 flex-col"}>
            <p className="text-[14px] leading-relaxed text-muted">
              {project.description}
            </p>

            {project.award && (
              <ul className="mt-5 space-y-2">
                {project.award.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 font-mono text-[11px] text-muted"
                  >
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <TechList items={project.technologies} className="mt-auto pt-6" />
            <ProjectLinks links={project.links} title={project.title} className="mt-5" />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function SelectedWork() {
  const [lead, ...featured] = flagshipProjects;

  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeading
        eyebrow="Work"
        title="Selected Work"
        lead="A selection of systems, applications, and experiments I've built across AI, mobile, web, robotics, and embedded systems."
      />

      <div className="mt-14 md:mt-16">
        {lead && <LeadProject project={lead} />}
      </div>

      <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
        {featured.map((project, index) => (
          <FeaturedProject key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="mt-20 grid grid-cols-12 gap-6 md:mt-28">
        {secondaryProjects.map((project, index) => (
          <SecondaryProject key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="mt-20 md:mt-24">
        <h3 className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
          More Work
        </h3>
        <ul className="mt-6 overflow-hidden rounded-card border border-line bg-surface">
          {compactProjects.map((project, index) => (
            <li
              key={project.slug}
              className={`group grid grid-cols-12 items-start gap-y-4 px-6 py-6 transition-colors hover:bg-surface-raised md:gap-x-6 md:px-8 md:py-7 ${
                index > 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="col-span-12 font-mono text-[12px] text-accent md:col-span-1">
                {project.number}
              </span>
              <div className="col-span-12 md:col-span-2">
                <div className="w-28 md:w-full">
                  <ProjectMedia
                    project={project}
                    aspect="aspect-[4/3]"
                    sizes="(min-width: 768px) 12rem, 7rem"
                    variant="thumb"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h4 className="text-[15px] font-medium text-ink">{project.title}</h4>
                <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-muted">
                  {project.description}
                </p>
                <ProjectLinks
                  links={project.links}
                  title={project.title}
                  className="mt-4"
                />
              </div>
              <div className="col-span-12 md:col-span-5 md:text-right">
                <p className="font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
                  {project.category}
                </p>
                <TechList items={project.technologies} className="mt-2" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
