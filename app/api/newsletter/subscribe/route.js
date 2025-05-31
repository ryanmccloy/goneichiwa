import { NextResponse } from "next/server";
import { adminDb } from "@/app/_lib/firebase-admin";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const snapshot = await adminDb
      .collection("newsletter-subscribers")
      .where("email", "==", email)
      .get();

    if (!snapshot.empty) {
      return NextResponse.json(
        { error: "already_subscribed" },
        { status: 409 }
      );
    }

    await adminDb.collection("newsletter-subscribers").add({
      email,
      subscribedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[API Newsletter Subscribe]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
