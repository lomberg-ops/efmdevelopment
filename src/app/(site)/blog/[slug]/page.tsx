import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { SanityImageSource } from "@sanity/image-url";

import { Container, Section } from "@/components/ui";
import { PortableTextBody } from "@/components/PortableText";
import { safeFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  author?: string;
  mainImage?: SanityImageSource & { alt?: string };
  body?: unknown;
};

function formatDate(value?: string) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = await safeFetch<{ slug: string }[]>(POST_SLUGS_QUERY, {}, []);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await safeFetch<Post | null>(POST_QUERY, { slug }, null);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await safeFetch<Post | null>(POST_QUERY, { slug }, null);
  if (!post) notFound();

  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <Link
          href="/blog"
          className="text-sm font-semibold text-forest-600 hover:text-forest-800"
        >
          ← Back to blog
        </Link>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-forest-900">
          {post.title}
        </h1>

        <p className="mt-4 text-sm font-medium text-forest-600">
          {formatDate(post.publishedAt)}
          {post.author ? ` · ${post.author}` : ""}
        </p>

        {post.mainImage ? (
          <div
            className="relative mt-8 overflow-hidden rounded-md"
            style={{ aspectRatio: "16 / 9" }}
          >
            <Image
              src={urlForImage(post.mainImage).width(1600).height(900).url()}
              alt={post.mainImage.alt || post.title}
              fill
              sizes="(min-width: 768px) 42rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        ) : null}

        <div className="mt-8">
          <PortableTextBody value={post.body} />
        </div>
      </Container>
    </Section>
  );
}
