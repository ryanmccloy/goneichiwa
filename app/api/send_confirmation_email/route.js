import { NextResponse } from "next/server";
import OrderConfirmationEmail from "@/emails/orderConfirmation";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const body = await req.json();

  const { to, orderNumber, orderDate, amount, items, downloadLinks } = body;

  if (!to) {
    return NextResponse.json(
      { message: "Missing recipient email." },
      { status: 400 }
    );
  }

  const { data, error } = await resend.emails.send({
    from: "Goneichiwa <contact@goneichiwa.com>",
    to,
    subject: "Your Goneichiwa Travel Guide is Ready!",
    react: OrderConfirmationEmail({
      orderNumber,
      orderDate,
      orderTotal: amount,
      items,
      downloadLinks,
    }),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}
