import { loadStripe } from "@stripe/stripe-js";

let stripeProimse = null;
export const getStripe = () => {
  if (!stripeProimse) {
    //return promise
    stripeProimse = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
    );
  }

  return stripeProimse;
};
