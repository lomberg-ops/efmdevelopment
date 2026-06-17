"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "unconfigured"; message: string }
  | { kind: "error"; message: string };

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setStatus({ kind: "submitting" });

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ kind: "success" });
        form.reset();
        return;
      }
      if (res.status === 422 && json.fields) {
        setFieldErrors(json.fields as FieldErrors);
        setStatus({ kind: "idle" });
        return;
      }
      if (json.code === "EMAIL_NOT_CONFIGURED") {
        setStatus({
          kind: "unconfigured",
          message:
            json.error ??
            "Our contact form isn’t live yet. Please email us directly in the meantime.",
        });
        return;
      }
      setStatus({
        kind: "error",
        message:
          json.error ?? "Something went wrong. Please try again, or email us directly.",
      });
    } catch {
      setStatus({
        kind: "error",
        message:
          "We couldn’t reach the server. Please check your connection or email us directly.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-forest-200 bg-forest-100/60 p-8 text-forest-900"
      >
        <h3 className="font-display text-xl font-semibold">Thank you</h3>
        <p className="mt-2 text-forest-800/80">
          Your message has been sent. We’ll get back to you shortly.
        </p>
      </div>
    );
  }

  const submitting = status.kind === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field
        label="Name"
        name="name"
        type="text"
        required
        autoComplete="name"
        error={fieldErrors.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
        error={fieldErrors.email}
      />
      <Field
        label="Organisation"
        name="organization"
        type="text"
        autoComplete="organization"
        optional
      />
      <div>
        <Label htmlFor="message" required>
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={inputClass(Boolean(fieldErrors.message))}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {(status.kind === "error" || status.kind === "unconfigured") && (
        <div
          role="alert"
          className={cn(
            "rounded-md border p-4 text-sm",
            status.kind === "error"
              ? "border-red-200 bg-red-50 text-red-800"
              : "border-accent/40 bg-accent-soft/15 text-forest-900"
          )}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-sm bg-forest-700 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>

      <p className="text-xs leading-relaxed text-forest-800/60">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-forest-700">
          Privacy Notice
        </Link>
        .
      </p>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "mt-1.5 block w-full rounded-sm border bg-white px-4 py-3 text-forest-900 shadow-sm transition-colors placeholder:text-forest-800/40 focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-700/30",
    hasError ? "border-red-400" : "border-line"
  );
}

function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-forest-900"
    >
      {children}
      {required && <span className="text-forest-600"> *</span>}
    </label>
  );
}

function Field({
  label,
  name,
  type,
  required,
  optional,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
        {optional && (
          <span className="font-normal text-forest-800/50"> (optional)</span>
        )}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClass(Boolean(error))}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
