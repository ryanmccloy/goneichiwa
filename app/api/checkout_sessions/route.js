import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/app/_lib/stripe";

export async function POST(req) {
  try {
    const body = await req.json();
    const { items, email, uid } = body;

    console.log("CHECKOUT SESSIONS", uid)

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in cart." }, { status: 400 });
    }

    const origin = headers().get("origin") || process.env.NEXT_PUBLIC_SITE_URL;

    const line_items = items.map((item) => {
      if (!item.stripePriceId) {
        throw new Error(`Missing stripePriceId for item: ${item.title}`);
      }

      return {
        price: item.stripePriceId,
        quantity: item.quantity,
      };
    });

    const metadata = {
      items: JSON.stringify(
        items.map((item) => ({
          id: item.id,
          title: item.title,
        }))
      ),
      uid,
    };

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      metadata,
      line_items,
      mode: "payment",
      customer_creation: "always",
      ...(email && { customer_email: email }),

      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart?canceled=true`,
      automatic_tax: { enabled: true },
      allow_promotion_codes: true,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[Stripe Checkout Error]:", err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
