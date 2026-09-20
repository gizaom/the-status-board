import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  const secret = process.env.STRIPE_SECRET_KEY?.trim();
  const priceId = process.env.STRIPE_PRICE_ID?.trim();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

  if (!secret || !priceId) {
    return NextResponse.json(
      {
        configured: false,
        message:
          "Stripe is not configured. Set STRIPE_SECRET_KEY and STRIPE_PRICE_ID, or join the waitlist below.",
      },
      { status: 503 }
    );
  }

  try {
    const stripe = new Stripe(secret);
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/?checkout=success`,
      cancel_url: `${siteUrl}/#pricing`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Checkout session created without a URL." },
        { status: 500 }
      );
    }

    return NextResponse.json({ configured: true, url: session.url });
  } catch (err) {
    console.error("[checkout]", err);
    return NextResponse.json(
      {
        error:
          "Could not create Stripe Checkout session. Check STRIPE_SECRET_KEY and STRIPE_PRICE_ID.",
      },
      { status: 500 }
    );
  }
}
