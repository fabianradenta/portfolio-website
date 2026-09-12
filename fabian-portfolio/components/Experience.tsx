import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

// One flat list. The paid role stands out by having more to say, not by
// getting a different container.
export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        lead="Engineering roles and the organisations where I've led or built alongside a team."
      />

      <ol className="mt-12 md:mt-16">
        {experience.map((item, index) => (
          <li key={`${item.organization}-${item.role}`} className="border-b border-line">
            <Reveal delay={index * 60}>
              <div className="grid grid-cols-12 gap-y-4 py-8 md:gap-x-10 md:py-10">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
                    {item.period}
                  </p>
                  {item.location && (
                    <p className="mt-2 font-mono text-[11px] text-faint">
                      {item.location}
                    </p>
                  )}
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">
                      {item.organization}
                    </h3>
                    <p className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">
                      {item.role}
                    </p>
                  </div>

                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">
                    {item.summary}
                  </p>

                  {item.bullets && (
                    <ul className="mt-5 max-w-2xl space-y-3">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-[14px] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-px w-3 shrink-0 bg-line-strong"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.highlights && (
                    <ul className="mt-5 space-y-1.5">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2.5 font-mono text-[11px] text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 rounded-full bg-accent"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
