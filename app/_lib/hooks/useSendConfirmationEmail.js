import { useState } from "react";
import toast from "react-hot-toast";

export function useSendConfirmationEmail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendConfirmationEmail = async (
    email,
    orderNumber,
    amount,
    orderDate,
    items,
    downloadLinks
  ) => {
    if (!email) {
      console.error("No email passed into useSendConfirmationEmail");
      setLoading(false);
      setError(true);
      return;
    }

    const formattedAmount = `£${(amount / 100).toFixed(2)}`;
    const formattedDate = new Date(orderDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    try {
      const res = await fetch("/api/send_confirmation_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          orderNumber,
          amount: formattedAmount,
          orderDate: formattedDate,
          items,
          downloadLinks,
        }),
      });

      const data = await res.json();

      if (!res.ok)
        throw new Error(data.error || "Failed to send confirmation email");
    } catch (err) {
      setError(true);
      toast.error("Failed to send confirmation email. Please contact support");
      console.error("Error useSendConfirmationEmail:", err);
    } finally {
      setLoading(false);
    }
  };

  return { sendConfirmationEmail, loading, error };
}
