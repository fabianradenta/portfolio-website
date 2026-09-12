import type { ReactNode } from "react";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  id?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  children,
}: SectionHeadingProps) {
  return (
    <div className="grid grid-cols-12 items-end gap-y-6 border-b border-line pb-8">
      <div className="col-span-12 md:col-span-7">
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          {eyebrow}
        </p>
        <h2
          id={id}
          className="mt-5 text-3xl font-semibold tracking-[-0.025em] text-ink md:text-[2.5rem]"
        >
          {title}
        </h2>
      </div>
      {lead && (
        <p className="col-span-12 max-w-md text-[14px] leading-relaxed text-muted md:col-span-5">
          {lead}
        </p>
      )}
      {children}
    </div>
  );
}
