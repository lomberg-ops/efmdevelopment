import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";

import { Container, Section } from "@/components/ui";
import { safeFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { POSTS_QUERY } from "@/sanity/lib/queries";

// Re-fetch from Sanity at most once a minute, so new posts appear quickly.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "News, insights and updates from EFM Development.",
};

type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  author?: string;
  mainImage?: SanityImageSource & { alt?: string };
};

function formatDate(value?: string) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await safeFetch<PostListItem[]>(POSTS_QUERY, {}, []);

  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container>
        <header className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-forest-900">
            Blog
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-forest-800/80">
            News, insights and updates from EFM Development.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="mt-12 text-forest-700">
            No posts yet — please check back soon.
          </p>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post._id} className="group flex h-full flex-col">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex h-full flex-col"
                >
                  {post.mainImage ? (
                    <div
                      className="relative overflow-hidden rounded-md"
                      style={{ aspectRatio: "16 / 10" }}
                    >
                      <Image
                        src={urlForImage(post.mainImage)
                          .width(800)
                          .height(500)
                          .url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  ) : null}
                  <time className="mt-4 text-xs font-semibold uppercase tracking-wide text-forest-600">
                    {formatDate(post.publishedAt)}
                  </time>
                  <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-forest-900 group-hover:text-forest-700">
                    {post.title}
                  </h2>
                  {post.excerpt ? (
                    <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
                      {post.excerpt}
                    </p>
                  ) : null}
                </Link>
              </article>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
