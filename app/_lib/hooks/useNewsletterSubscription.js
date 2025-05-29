import { useState } from "react";
import { subscribeToNewsletter } from "../newsletter-service";
import toast from "react-hot-toast";

export default function useNewsletterSubscription() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const subscribe = async (email) => {
    setLoading(true);

    setSuccess(false);

    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setSuccess(true);
        toast.success("Successfully subscribed to our newsletter ✉️");
      }
    } catch (err) {
      console.error("[useNewsletterSubscription]", err);
      if (err?.message === "already_subscribed") {
        toast.error("You're already subscribed to our newsletter.");
      } else {
        toast.error(
          "Something went wrong. Please contact support@goneichiwa.com"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, success };
}
