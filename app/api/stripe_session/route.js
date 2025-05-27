import { NextResponse } from "next/server";
import { stripe } from "@/app/_lib/stripe";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // console.log("STRIPE SESSION:", session);

    return NextResponse.json({
      customer_email:
        session.customer_email || session.customer_details?.email || "",
      items: session.metadata?.items || "[]", // stringified array
      amount_total: session.amount_total,
      created: session.created,
    });
  } catch (err) {
    console.error("[Stripe Session Fetch Error]:", err);
    return NextResponse.json(
      { error: "Failed to fetch session" },
      { status: 500 }
    );
  }
}
