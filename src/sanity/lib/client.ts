import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Read-only client for fetching published content into the website.
// A public dataset needs no token; published-only perspective hides drafts.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

/**
 * Fetch that never throws at build/runtime: if Sanity is unreachable or the
 * dataset isn't yet readable, it logs and returns the fallback so the site
 * still builds and renders (empty blog) instead of failing the deploy.
 */
export async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T,
): Promise<T> {
  try {
    return await client.fetch<T>(query, params);
  } catch (err) {
    console.warn(
      "[sanity] fetch failed, using fallback:",
      (err as Error)?.message,
    );
    return fallback;
  }
}
