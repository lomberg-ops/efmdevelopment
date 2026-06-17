"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type ForestVideoProps = {
  /** Slug under /public/media, e.g. "forest-loop-1". */
  slug: string;
  /** Accessible description of the clip's content. */
  label: string;
  className?: string;
  /** Rounded framed look (default) vs flush edges. */
  rounded?: boolean;
};

const noopSubscribe = () => () => {};

/** True only after client hydration (server + first render: false). */
function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

/**
 * Whether this device should autoplay: desktop pointer, motion allowed,
 * and Save-Data off. Read via useSyncExternalStore so it stays correct on
 * resize / preference changes without setState-in-effect.
 */
function useCanAutoplay() {
  return useSyncExternalStore(
    (cb) => {
      const queries = [
        window.matchMedia("(min-width: 768px) and (pointer: fine)"),
        window.matchMedia("(prefers-reduced-motion: reduce)"),
      ];
      queries.forEach((q) => q.addEventListener("change", cb));
      return () => queries.forEach((q) => q.removeEventListener("change", cb));
    },
    () => {
      const desktop = window.matchMedia(
        "(min-width: 768px) and (pointer: fine)"
      ).matches;
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const nav = navigator as Navigator & {
        connection?: { saveData?: boolean };
      };
      const saveData = Boolean(nav.connection?.saveData);
      return desktop && !reduced && !saveData;
    },
    () => false
  );
}

/**
 * Forest ambience video.
 *
 * - Desktop + motion/data OK: autoplays muted & looping, with native controls
 *   and an always-visible pause/play button (WCAG 2.2.2).
 * - Mobile / reduced-motion / reduced-data: NOTHING auto-downloads — shows the
 *   poster with an obvious tap-to-play control; full native controls once playing.
 * - Explicit 1280x720 intrinsic size + 16:9 box prevents layout shift.
 */
export function ForestVideo({
  slug,
  label,
  className,
  rounded = true,
}: ForestVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mounted = useMounted();
  const canAutoplay = useCanAutoplay();
  const [userActivated, setUserActivated] = useState(false);
  const [playing, setPlaying] = useState(false);

  const activated = mounted && (canAutoplay || userActivated);

  // Kick off autoplay on capable devices. Calling play() is an external-system
  // side effect (not setState), so it belongs in an effect.
  useEffect(() => {
    if (!canAutoplay) return;
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      void v.play().catch(() => {});
    }
  }, [canAutoplay]);

  const handleToggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!userActivated && !canAutoplay) {
      // First activation on a poster-only (mobile/reduced) video: load + play.
      setUserActivated(true);
      v.muted = true;
      void v.play();
      return;
    }
    if (v.paused) void v.play();
    else v.pause();
  };

  return (
    <figure className={cn("group relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden bg-forest-900",
          rounded && "rounded-md",
          "shadow-card"
        )}
        style={{ aspectRatio: "16 / 9" }}
      >
        <video
          ref={videoRef}
          width={1280}
          height={720}
          poster={`/media/${slug}-poster.jpg`}
          autoPlay={canAutoplay}
          muted
          loop
          playsInline
          controls={activated}
          preload={canAutoplay ? "auto" : "none"}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
          aria-label={label}
        >
          {/* MP4 first: smallest and universally supported, so browsers pick it. */}
          <source src={`/media/${slug}.mp4`} type="video/mp4" />
          <source src={`/media/${slug}.webm`} type="video/webm" />
        </video>

        {/* Poster-state play button (mobile / reduced-motion, before activation) */}
        {mounted && !activated && (
          <button
            type="button"
            onClick={handleToggle}
            className="absolute inset-0 flex items-center justify-center bg-forest-950/25 transition-colors hover:bg-forest-950/35"
            aria-label={`Play video: ${label}`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-forest-800 shadow-lg transition-transform group-hover:scale-105">
              <PlayIcon className="ml-1 h-7 w-7" />
            </span>
          </button>
        )}

        {/* Always-visible pause/play toggle for the autoplaying case (WCAG 2.2.2) */}
        {activated && (
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/55 text-cream backdrop-blur-sm transition-colors hover:bg-forest-950/75"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? (
              <PauseIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="ml-0.5 h-5 w-5" />
            )}
          </button>
        )}
      </div>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}
