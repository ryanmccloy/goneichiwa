import { useCallback, useState } from "react";
import toast from "react-hot-toast";

export const useSaveOrder = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const saveOrder = useCallback(async (sessionId) => {
    try {
      const res = await fetch("/api/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to save order");
      return { success: true, orderNumber: data.orderNumber };
    } catch (err) {
      console.error("Error saving order:", err);
      toast.error("Failed to save your order. Please contact support.");
      setError(true);
      return { success: false, orderNumber: null };
    } finally {
      setLoading(false);
    }
  }, []);

  return { saveOrder, loading, error };
};
