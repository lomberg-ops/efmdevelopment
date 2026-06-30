import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";

import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const url = urlForImage(value).width(1600).url();
      return (
        <figure className="my-8">
          {/* CMS body image — plain img keeps natural aspect without metadata. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt={value.alt || ""}
            loading="lazy"
            className="w-full rounded-md"
          />
          {value.alt ? (
            <figcaption className="mt-2 text-sm text-forest-600">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl font-semibold text-forest-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-semibold text-forest-900">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-forest-300 pl-4 italic text-forest-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed text-forest-800/90">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="underline underline-offset-4 hover:text-forest-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-forest-800/90">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-forest-800/90">
        {children}
      </ol>
    ),
  },
};

export function PortableTextBody({ value }: { value: unknown }) {
  if (!value) return null;
  return (
    <PortableText
      value={value as Parameters<typeof PortableText>[0]["value"]}
      components={components}
    />
  );
}
