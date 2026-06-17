import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded OG composition: full-bleed forest photo + dark forest gradient +
 * EFM Development wordmark and tagline. Not the bare logo.
 */
export default async function OpengraphImage() {
  const bg = await readFile(join(process.cwd(), "public/brand/og-bg.jpg"));
  const bgSrc = `data:image/jpeg;base64,${bg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(12,29,19,0.92), rgba(12,29,19,0.45), rgba(12,29,19,0.3))",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <span
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: "#f3f2e9",
                letterSpacing: -1,
              }}
            >
              EFM
            </span>
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#9bb6a3",
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              Development
            </span>
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#f3f2e9",
              marginTop: 18,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Added value from forest
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(243,242,233,0.85)",
              marginTop: 18,
            }}
          >
            New biomass-based value chains · Digital forest biosensors
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
