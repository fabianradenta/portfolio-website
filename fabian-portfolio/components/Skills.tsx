import SectionHeading from "@/components/SectionHeading";
import { marqueeItems, skillGroups } from "@/data/skills";

// Marquee is pure CSS: the row is rendered 3x in the track and the keyframes
// shift it by exactly a third, so it loops without a jump. The duplicate
// copies are aria-hidden, and reduced motion turns it into a scrollable row.
export default function Skills() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Skillset"
          title="My Skillset"
          lead="Tools and areas I've worked in directly, grouped by where they show up in my work."
        />
      </div>

      <div className="marquee-row mt-14 md:mt-16">
        <div className="marquee-viewport overflow-hidden">
          <div className="marquee-track" style={{ ["--marquee-duration" as string]: "70s" }}>
            {[0, 1, 2].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy > 0}>
                {marqueeItems.map((item) => (
                  <li
                    key={item}
                    className="flex shrink-0 items-center text-xl font-medium tracking-[-0.01em] whitespace-nowrap text-muted md:text-2xl"
                  >
                    {item}
                    <span aria-hidden="true" className="mx-6 text-accent md:mx-8">
                      ·
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-6xl px-6 md:mt-20 md:px-10">
        <dl className="grid grid-cols-1 gap-x-12 border-t border-line sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-12 gap-y-1 border-b border-line py-5 md:gap-x-6"
            >
              <dt className="col-span-12 font-mono text-[10px] tracking-[0.16em] text-faint uppercase md:col-span-5">
                {group.category}
              </dt>
              <dd className="col-span-12 text-[14px] leading-relaxed text-muted md:col-span-7">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
