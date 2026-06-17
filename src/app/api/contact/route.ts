import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  message?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: Payload) {
  const fields: Record<string, string> = {};
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const organization =
    typeof body.organization === "string" ? body.organization.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 1 || name.length > 120) fields.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) fields.email = "Please enter a valid email address.";
  if (message.length < 1) fields.message = "Please enter a message.";
  if (message.length > 5000) fields.message = "Message is too long.";

  return { fields, data: { name, email, organization, message } };
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body.", code: "BAD_REQUEST" },
      { status: 400 }
    );
  }

  const { fields, data } = validate(body);
  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { error: "Please correct the highlighted fields.", code: "VALIDATION_ERROR", fields },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
  // {{TODO: confirm verified sending domain. Until then Resend's shared
  // onboarding sender is used, which only delivers to the account owner.}}
  const from = process.env.CONTACT_FROM_EMAIL ?? "EFM Website <onboarding@resend.dev>";

  // Graceful path when email isn't configured yet — never a silent fail or 500.
  if (!apiKey) {
    return NextResponse.json(
      {
        code: "EMAIL_NOT_CONFIGURED",
        error:
          "Our contact form isn’t connected to email yet. Please email us directly at " +
          site.contact.email +
          " and we’ll respond promptly.",
      },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Website enquiry from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Organisation: ${data.organization || "—"}`,
        "",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn’t send your message. Please try again shortly.", code: "SEND_FAILED" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again shortly.", code: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
