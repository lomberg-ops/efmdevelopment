// Public Sanity project config. Project id + dataset are not secrets, so they
// carry sensible fallbacks to guarantee builds work even before env vars are
// set in the host. Override via NEXT_PUBLIC_SANITY_* when needed.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o6m7w1ml";
