import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: NextRequest, res: NextResponse) {
  const payload = await req.text();
  const response = JSON.parse(payload);
  const sig = req.headers.get("Stripe-Signature");
  const dateTime = new Date(response?.created * 1000).toLocaleDateString();
  const timeString = new Date(response?.created * 1000).toLocaleDateString();
  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const paymentInfo = {
        amount: session.amount_total,
        currency: session.currency,
        paymentMethod: session.payment_method_types[0],
        status: session.payment_status,
        created: session.created,
      };
      const redirectUrl = `/success?amount=${paymentInfo.amount}&currency=${paymentInfo.currency}&paymentMethod=${paymentInfo.paymentMethod}&status=${paymentInfo.status}&created=${paymentInfo.created}`;
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json({ status: "failed", error });
  }
}
