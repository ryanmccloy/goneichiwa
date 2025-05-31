import { useState } from "react";
import { subscribeToNewsletter } from "../newsletter-service";
import toast from "react-hot-toast";
import { unsubscribeFromNewsletter } from "../newsletter-service";

export default function useNewsletterSubscription() {
  const [subscribeLoading, setSubscribeLoading] = useState(false);

  const subscribe = async (email) => {
    setSubscribeLoading(true);

    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        toast.success("Successfully subscribed to our newsletter ✉️");
      }
    } catch (err) {
      console.error("[useNewsletterSubscription]", err);
      if (err?.message === "already_subscribed") {
        toast("You're already subscribed to our newsletter ✉️");
      } else {
        toast.error(
          "Something went wrong. Please contact support@goneichiwa.com"
        );
      }
    } finally {
      setSubscribeLoading(false);
    }
  };

  const unsubscribe = async (email) => {
    try {
      const result = await unsubscribeFromNewsletter(email);
      if (result.success) {
        toast("Unsubscribed from our newsletter ✉️");
      }
    } catch (err) {
      console.error("[useNewsletterSubscription]", err);
      if (err?.message === "email_not_found") {
        toast.error("Newsletter subscription not found ✉️");
      } else {
        toast.error(
          "Something went wrong. Please contact support@goneichiwa.com"
        );
      }
    }
  };

  return { subscribe, unsubscribe, subscribeLoading };
}
