import { useCallback } from "react";

export const useSaveOrder = () => {
  const saveOrder = useCallback(async (sessionId) => {
    try {
      const res = await fetch("/api/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to save order");
      return true;
    } catch (err) {
      console.error("Error saving order:", err);
      return false;
    }
  }, []);

  return { saveOrder };
};
