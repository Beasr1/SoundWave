import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "@/libs/stripe";
import {
  upsertProductRecord,
  upsertPriceRecord,
  manageSubscriptionStatusChange,
} from "@/libs/supabaseAdmin";

const relevantEvents = new Set([
  "product.created",
  "product.updated",
  "price.created",
  "price.updated",
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
]);

export async function POST(request) {
  const body = await request.text();
  const sig = headers().get("Stripe-Signature");

  const webhookSecret =
    process.env.STRIPE_WEBHOOK_SECRET_LIVE ?? process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  //console.log("secret : ", webhookSecret);
  //console.log("sig : ", sig);

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    //console.log(event);//works
  } catch (error) {
    console.log("Error message route.js : ", error.message);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 }); //makes things clear
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case "product.created":
        case "product.updated":
          await upsertProductRecord(event.data.object);
          break;
        case "price.created":
        case "price.updated":
          await upsertPriceRecord(event.data.object);
          break;
        case "customer.subscription.created":
        case "customer.subscription.updated":
        case "customer.subscription.deleted":
          const subscription = event.data.object;
          await manageSubscriptionStatusChange(
            subscription.id,
            subscription.customer,
            event.type === "customer.subscription.created"
          );
          break;
        case "checkout.session.completed":
          const checkoutSession = event.data.object;
          if (checkoutSession.mode === "subscription") {
            const subscriptionId = checkoutSession.subscription;
            await manageSubscriptionStatusChange(
              subscriptionId,
              checkoutSession.customer,
              true
            );
          }
          break;
        case "payment_intent.succeeded":
        case "payment_intent.created":
          break;
        default:
          throw new Error("Unhandled relevant event!");
      }
    } catch (error) {
      console.log(error);
      return new NextResponse(`Webhook error`, { status: 400 });
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

/*
So for last 4 hours I have been trying to find the error which is not actually a error
payment intent successful trigger strip
I am getting requires action because of double authentication 
instead of directly changed and successful
*/
