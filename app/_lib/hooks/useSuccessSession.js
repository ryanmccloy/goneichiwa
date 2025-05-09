import { useEffect, useState } from "react";

export function useSuccessSession(sessionId) {
  const [email, setEmail] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) return setLoading(false);

    const fetchSession = async () => {
      try {
        const res = await fetch(`/api/stripe_session?session_id=${sessionId}`);
        const data = await res.json();
        setEmail(data.customer_email || "");
        setItems(JSON.parse(data.items || "[]"));
      } catch (err) {
        console.error("Error fetching Stripe session:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  return { email, items, loading };
}
