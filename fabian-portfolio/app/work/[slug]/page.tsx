import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectLinks from "@/components/ProjectLinks";
import { caseStudyProjects, getProject } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/work/${project.slug}`,
    },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-y-4 border-t border-line py-10 md:gap-x-10">
      <h2 className="col-span-12 font-mono text-[11px] tracking-[0.16em] text-faint uppercase md:col-span-3">
        {label}
      </h2>
      <div className="col-span-12 md:col-span-8">{children}</div>
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.caseStudy) notFound();

  const { caseStudy } = project;
  const externalLinks = project.links?.filter((link) => link.kind !== "case-study");

  return (
    <main className="mx-auto w-full max-w-5xl px-6 pt-28 pb-20 md:px-10 md:pt-36 md:pb-28">
      <Link
        href="/#work"
        className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-faint uppercase transition-colors hover:text-ink"
      >
        <ArrowLeft
          size={13}
          strokeWidth={1.75}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        Selected Work
      </Link>

      <div className="mt-10 flex items-baseline gap-4">
        <span className="font-mono text-[13px] text-accent">{project.number}</span>
        <span className="font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
          {project.category}
        </span>
      </div>

      <h1 className="mt-5 max-w-3xl text-3xl leading-[1.12] font-medium tracking-[-0.02em] text-balance md:text-[2.75rem]">
        {project.title}
      </h1>

      <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-muted">
        {caseStudy.overview}
      </p>

      <div className="mt-12 md:mt-16">
        <ProjectMedia
          project={project}
          aspect="aspect-[16/9]"
          sizes="(min-width: 1024px) 64rem, 100vw"
          preload
        />
      </div>

      <div className="mt-16 md:mt-20">
        <Block label="Problem">
          <p className="text-[15px] leading-relaxed text-muted">{caseStudy.problem}</p>
        </Block>

        <Block label="Approach">
          <p className="text-[15px] leading-relaxed text-muted">{caseStudy.approach}</p>
        </Block>

        <Block label="Implementation">
          <ul className="space-y-3">
            {caseStudy.implementation.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[15px] leading-relaxed text-muted"
              >
                <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                {item}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Results">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {caseStudy.results.map((result) => (
              <div key={result.label}>
                <dd className="text-[1.75rem] leading-none font-medium tracking-[-0.02em] text-ink">
                  {result.value}
                </dd>
                <dt className="mt-2 text-[13px] leading-relaxed text-faint">
                  {result.label}
                </dt>
              </div>
            ))}
          </dl>
        </Block>

        <Block label="Stack">
          <p className="font-mono text-[12px] leading-relaxed text-faint">
            {project.technologies.join("  ·  ")}
          </p>
        </Block>

        {externalLinks && externalLinks.length > 0 && (
          <Block label="Links">
            <ProjectLinks links={externalLinks} title={project.title} />
          </Block>
        )}
      </div>
    </main>
  );
}
