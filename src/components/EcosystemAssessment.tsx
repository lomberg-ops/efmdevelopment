import Image from "next/image";
import { ecosystemIndicators } from "@/lib/content";

/**
 * LiDAR-derived ecosystem assessment.
 *
 * The figures are ILLUSTRATIVE SAMPLE OUTPUT taken from the client deck — not a
 * specific customer's verified result. A visible badge states this on the
 * visual itself (per client/legal direction). The numbers are also rendered as
 * accessible text rather than living only inside the image.
 */
export function EcosystemAssessment() {
  return (
    <div className="overflow-hidden rounded-md border border-forest-800/40 bg-forest-950 shadow-card">
      <div className="grid gap-0 md:grid-cols-2">
        {/* Point-cloud visual with illustrative badge */}
        <figure className="relative min-h-[260px]">
          <Image
            src="/images/tech/lidar-pointcloud.jpg"
            alt="Aerial LiDAR point-cloud scan of forest canopy used to derive structural and ecological indicator scores."
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute left-3 top-3 rounded-sm bg-forest-950/80 px-3 py-1.5 text-xs font-medium text-accent-soft backdrop-blur-sm">
            Illustrative example — figures shown are sample output
          </figcaption>
        </figure>

        {/* Indicator scores as accessible text */}
        <div className="p-8 sm:p-10">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-forest-300">
            LiDAR-derived ecosystem assessment
          </p>
          <ul className="mt-6 space-y-5">
            {ecosystemIndicators.map((ind) => (
              <li key={ind.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-cream/85">{ind.label}</span>
                  <span className="font-display text-lg font-semibold text-cream">
                    {ind.score}
                  </span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-forest-800">
                  <div
                    className="h-full rounded-full bg-accent-soft"
                    style={{ width: `${pct(ind.score)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-xs leading-relaxed text-forest-100/55">
            Scores derived from LiDAR-derived structural and ecological
            indicators. Values are illustrative and do not represent a specific
            site assessment.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Parse "87.5 / 100" -> 87.5 for the bar width. */
function pct(score: string): number {
  const n = parseFloat(score);
  return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : 0;
}
