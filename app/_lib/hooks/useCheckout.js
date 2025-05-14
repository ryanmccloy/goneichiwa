import toast from "react-hot-toast";

export const useCheckout = () => {
  const handleCheckout = async ({ items, email, uid }) => {
    if (!items || items.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          email,
          uid,
        }),
      });

      const data = await res.json();

      if (res.ok && data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data?.error || "Unexpected checkout error.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      toast.error("Failed to start checkout. Please try again.");
    }
  };

  return { handleCheckout };
};
