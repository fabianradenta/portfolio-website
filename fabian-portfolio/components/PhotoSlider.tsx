"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Shared shape so hobbies, identity slides, project photos and places can all
// be fed in without this component importing any data module.
export type SliderPhoto = {
  label: string; // caption, and the alt text unless alt is set
  sublabel?: string; // second line, only for the title and journal captions
  image?: string;
  alt?: string;
};

// Caption style and where it sits:
//   none    - image only, for frames too small for text
//   mono    - small uppercase label on the image
//   title   - heading + accent line on the image
//   journal - heading + second line below the image
export type SliderCaption = "none" | "mono" | "title" | "journal";

export interface PhotoSliderProps {
  photos: SliderPhoto[];
  interval?: number; // ms between slides
  // Whole frame styling, passed in so radius/border utilities never clash.
  // Pass flex-1 + min-h instead of an aspect ratio to let a grid set the height.
  frameClassName?: string;
  sizes?: string;
  // "line" is the thin bar at the bottom of the frame. Decorative, not clickable,
  // so cards using it normally set controls={false} as well.
  indicators?: "below" | "overlay" | "line" | "none";
  caption?: SliderCaption;
  belowClassName?: string; // padding for the block under the frame
  controls?: boolean;
}

function Indicators({
  photos,
  index,
  onSelect,
  variant,
}: {
  photos: SliderPhoto[];
  index: number;
  onSelect: (next: number) => void;
  variant: "below" | "overlay";
}) {
  return (
    <ul
      className={
        variant === "overlay"
          ? "absolute top-3 right-0 left-0 z-20 flex justify-center gap-1.5"
          : "mt-5 flex items-center gap-2"
      }
    >
      {photos.map((photo, i) => (
        <li key={`${photo.label}-${i}`}>
          <button
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show ${photo.label}`}
            aria-current={i === index}
            className={
              variant === "overlay"
                ? `h-1 rounded-full transition-all duration-300 ${
                    i === index ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`
                : `h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-accent" : "w-3 bg-line-strong hover:bg-muted"
                  }`
            }
          />
        </li>
      ))}
    </ul>
  );
}

// Crossfade slider, no library. Slides sit on top of each other and toggle
// opacity, so the box never reflows. Autoplay pauses on hover and focus, and
// is skipped entirely for prefers-reduced-motion.
export default function PhotoSlider({
  photos,
  interval = 4000,
  frameClassName = "aspect-[16/10] rounded-tile border border-line bg-surface-raised sm:aspect-[2/1]",
  sizes = "(min-width: 768px) 60vw, 100vw",
  indicators = "below",
  caption = "mono",
  belowClassName = "",
  controls = true,
}: PhotoSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  const go = useCallback(
    (next: number) => setIndex((next + photos.length) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    reducedMotion.current =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current || photos.length < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % photos.length), interval);
    return () => clearInterval(timer);
  }, [paused, interval, photos.length]);

  if (photos.length === 0) return null;

  const active = photos[index];
  const hasBelow = caption === "journal" || indicators === "below";

  return (
    <div
      className="group/slider relative flex h-full flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={`relative w-full overflow-hidden ${frameClassName}`}>
        {photos.map((photo, i) => (
          <div
            key={`${photo.label}-${i}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {photo.image ? (
              <Image
                src={photo.image}
                alt={photo.alt ?? photo.label}
                fill
                sizes={sizes}
                className="object-cover"
              />
            ) : (
              <div className="grid-texture flex h-full w-full items-end p-6">
                <span className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
                  {photo.label}
                </span>
              </div>
            )}
          </div>
        ))}

        {caption === "mono" && (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ground/90 to-transparent"
            />
            <p
              aria-live="polite"
              className="absolute bottom-4 left-5 font-mono text-[11px] tracking-[0.16em] text-ink uppercase"
            >
              {active.label}
            </p>
          </>
        )}

        {caption === "title" && (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-ground via-ground/60 to-transparent"
            />
            <div aria-live="polite" className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-lg font-semibold tracking-[-0.01em] text-ink">
                {active.label}
              </p>
              {active.sublabel && (
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.01em] text-accent">
                  {active.sublabel}
                </p>
              )}
            </div>
          </>
        )}

        {controls && (
          <div className="absolute inset-y-0 right-4 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover/slider:opacity-100 focus-within:opacity-100">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous photo"
              className="rounded-full border border-line bg-ground/70 p-2 text-muted backdrop-blur-sm transition-colors hover:text-ink"
            >
              <ChevronLeft size={15} strokeWidth={1.75} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next photo"
              className="rounded-full border border-line bg-ground/70 p-2 text-muted backdrop-blur-sm transition-colors hover:text-ink"
            >
              <ChevronRight size={15} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        )}

        {indicators === "overlay" && (
          <Indicators
            photos={photos}
            index={index}
            onSelect={setIndex}
            variant="overlay"
          />
        )}

        {indicators === "line" && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-20 flex h-1 bg-line"
          >
            {photos.map((photo, i) => (
              <div
                key={`${photo.label}-${i}`}
                className={`flex-1 transition-colors duration-500 ${
                  i === index ? "bg-muted" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {hasBelow && (
        <div className={`shrink-0 ${belowClassName}`}>
          {caption === "journal" && (
            <div aria-live="polite">
              <p className="text-xl leading-tight font-semibold tracking-[-0.01em] text-ink">
                {active.label}
              </p>
              <p className="mt-2 min-h-4 font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                {active.sublabel}
              </p>
            </div>
          )}

          {indicators === "below" && (
            <Indicators
              photos={photos}
              index={index}
              onSelect={setIndex}
              variant="below"
            />
          )}
        </div>
      )}
    </div>
  );
}
