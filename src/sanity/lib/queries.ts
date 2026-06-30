import { groq } from "next-sanity";

// Published posts, newest first — list view.
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  author,
  mainImage
}`;

// A single post by slug — detail view.
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  author,
  mainImage,
  body
}`;

// Slugs only — for generateStaticParams.
export const POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`;
