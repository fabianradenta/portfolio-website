import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { linkLabels, type ProjectLink } from "@/data/projects";

export interface ProjectLinksProps {
  links?: ProjectLink[];
  title: string;
  className?: string;
}

// Skips links that aren't set, and labels each one for what it actually is.
export default function ProjectLinks({ links, title, className = "" }: ProjectLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      {links.map((link) => {
        const label = linkLabels[link.kind];
        const content = (
          <>
            {label}
            <ArrowUpRight
              size={14}
              strokeWidth={1.75}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </>
        );

        const classes =
          "group/link inline-flex items-center gap-2 border-b border-line-strong pb-1 text-[13px] text-ink transition-colors hover:border-accent hover:text-accent";

        return (
          <li key={`${link.kind}-${link.href}`}>
            {link.kind === "case-study" ? (
              <Link href={link.href} className={classes}>
                {content}
                <span className="sr-only"> for {title}</span>
              </Link>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
              >
                {content}
                <span className="sr-only"> for {title}</span>
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
