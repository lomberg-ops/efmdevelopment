import { Container, Section, Button, ArrowRight } from "@/components/ui";

export default function NotFound() {
  return (
    <Section tone="cream" className="flex min-h-[70vh] items-center pt-28">
      <Container className="text-center">
        <p className="font-display text-7xl font-bold text-forest-700 sm:text-8xl">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl">
          This page could not be found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-forest-800/75">
          The page you’re looking for may have moved or no longer exists. Let’s
          get you back to solid ground.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary">
            Back to home <ArrowRight />
          </Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </Section>
  );
}
