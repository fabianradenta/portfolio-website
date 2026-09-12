import Reveal from "@/components/Reveal";
import PhotoSlider from "@/components/PhotoSlider";
import { baseOfOps, beyondCopy, hobbies, identity, places } from "@/data/about";
import { profile } from "@/data/site";

const CARD = "rounded-3xl border border-line bg-surface";

// 3-col bento on 260px rows: tall cards left and right, two stacked in the
// middle. Auto-placement handles it, so DOM order is also the mobile order.
// The heading lives inside the first card, no SectionHeading above the grid.
export default function BeyondTheCode() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24">
      <Reveal>
        <div className="grid grid-cols-1 gap-5 md:auto-rows-[minmax(260px,auto)] md:grid-cols-3">
          {/* Beyond the Code — the main personal card. */}
          <div className={`${CARD} group relative flex flex-col p-8 md:row-span-2`}>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-ink">
              Beyond the Code
            </h2>
            <p className="mt-4 mb-6 text-sm leading-relaxed text-muted">{beyondCopy}</p>

            <div className="flex min-h-[180px] flex-1 flex-col">
              <PhotoSlider
                photos={hobbies}
                frameClassName="flex-1 min-h-[240px] rounded-2xl border border-line bg-surface-raised md:min-h-[180px]"
                indicators="overlay"
              />
            </div>
          </div>

          {/* Identity — the portrait and the degree behind it, alternating. The
              slider draws the card's own frame, so there is no CARD wrapper. */}
          <div className="relative min-h-[340px] md:min-h-0">
            <PhotoSlider
              photos={identity}
              frameClassName="h-full rounded-3xl border border-line bg-surface-raised"
              sizes="(min-width: 768px) 33vw, 100vw"
              caption="title"
              indicators="line"
              controls={false}
              interval={6000}
            />
          </div>

          {/* Places I've Been — a visual journal, so the photo runs edge to edge
              and the location is set underneath it rather than stamped on it.
              That placement is what keeps it from reading as a second copy of
              the Beyond the Code carousel. */}
          <div
            className={`${CARD} group relative flex flex-col overflow-hidden md:row-span-2`}
          >
            <p className="px-8 pt-8 pb-6 font-mono text-[10px] font-bold tracking-[0.18em] text-accent uppercase">
              {places.label}
            </p>

            <div className="flex flex-1 flex-col">
              <PhotoSlider
                photos={places.items.map((place) => ({
                  label: place.title,
                  sublabel: place.location,
                  image: place.image,
                  alt: place.alt,
                }))}
                frameClassName="flex-1 min-h-[260px] bg-surface-raised md:min-h-[200px]"
                sizes="(min-width: 768px) 33vw, 100vw"
                caption="journal"
                belowClassName="px-8 pt-6 pb-8"
                indicators="below"
                controls={false}
                interval={7000}
              />
            </div>
          </div>

          {/* Base of Ops. */}
          <div className={`${CARD} group relative overflow-hidden p-7`}>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full border border-line transition-transform duration-700 group-hover:scale-110"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full border border-line-strong transition-transform duration-500 group-hover:scale-125"
            />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                  {baseOfOps.label}
                </p>
                <span className="flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
                  />
                  <span className="font-mono text-[9px] tracking-wider whitespace-nowrap text-emerald-400 uppercase">
                    WIB ({profile.timezone})
                  </span>
                </span>
              </div>

              <div>
                <p className="text-2xl font-bold tracking-[-0.01em] text-ink">
                  {profile.city}
                </p>
                <p className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-muted">
                  {baseOfOps.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
