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

    if (snapshot.empty) {
      return NextResponse.json({ error: "email_not_found" }, { status: 404 });
    }

    await snapshot.docs[0].ref.delete();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[API Newsletter Unsubscribe]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
