import { NextRequest, NextResponse } from "next/server";

/** In-memory stub for Phase A — not durable across deploys. */
const waitlistEntries: { email: string; at: string }[] = [];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim().toLowerCase()
      : "";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const entry = { email, at: new Date().toISOString() };
  waitlistEntries.push(entry);
  console.log("[waitlist]", entry);

  const webhook = process.env.WAITLIST_WEBHOOK_URL?.trim();
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "the-status-board", at: entry.at }),
      });
    } catch (err) {
      console.error("[waitlist] webhook forward failed", err);
      // Still accept locally — Phase A stub should not fail the user on webhook issues.
    }
  }

  return NextResponse.json({
    ok: true,
    message: webhook
      ? "You're on the list. We'll be in touch."
      : "You're on the list. (Waitlist stored in-memory for Phase A — set WAITLIST_WEBHOOK_URL for durable forwarding.)",
  });
}

export async function GET() {
  return NextResponse.json({
    count: waitlistEntries.length,
    note: "Phase A stub — in-memory only. Set WAITLIST_WEBHOOK_URL for durable capture.",
  });
}
