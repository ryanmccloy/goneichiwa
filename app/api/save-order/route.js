import { stripe } from "@/app/_lib/stripe";
import { adminDb } from "@/app/_lib/firebase-admin";
import { Timestamp } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import generateOrderNumber from "@/app/_lib/helpers/generateOrderNumber";

export async function POST(req) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
    }

    // check if order already exists
    const existing = await adminDb.collection("orders").doc(sessionId).get();
    if (existing.exists) {
      return NextResponse.json({
        success: true,
        orderNumber: existing.data().orderNumber,
      });
    }

    // Server-side verification of Stripe session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const email =
      session.customer_details?.email || session.customer_email || null;
    const metadataItems = JSON.parse(session.metadata?.items || "[]");
    const userId = session.metadata?.uid || null;
    const orderNumber = generateOrderNumber();

    const orderData = {
      orderNumber,
      email,
      userId,
      items: metadataItems,
      totalAmount: session.amount_total / 100,
      currency: session.currency.toUpperCase(),
      createdAt: Timestamp.now(),
      sessionId,
      status: "fulfilled",
    };

    const docRef = adminDb.collection("orders").doc(sessionId);
    await docRef.set(orderData);

    return NextResponse.json({ success: true, orderNumber });
  } catch (err) {
    console.error("[save-order error]", err);
    return NextResponse.json(
      { error: "Failed to save order" },
      { status: 500 }
    );
  }
}
