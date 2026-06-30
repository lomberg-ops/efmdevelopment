import type { StructureResolver } from "sanity/structure";

// Simple Studio sidebar: just the blog posts list.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([S.documentTypeListItem("post").title("Blog posts")]);
