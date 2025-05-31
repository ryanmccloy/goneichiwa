import { adminDb } from "@/app/_lib/firebase-admin";
import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, destination, duration, message, consultationDate } =
      body;

    await adminDb.collection("consultation-requests").add({
      name,
      email,
      destination,
      duration,
      message,
      consultationDate,
      submittedAt: new Date(),
    });

    await resend.emails.send({
      from: "Consultation <noreply@goneichiwa.com>",
      to: "contact@goneichiwa.com",
      subject: "New Consultation Request",
      html: `
        <h3>New Consultation Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${consultationDate}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Consultation Form Error]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
