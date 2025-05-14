import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function useSuccessSession(sessionId) {
  const [email, setEmail] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sessionId) return setLoading(false);

    const fetchSession = async () => {
      try {
        const res = await fetch(`/api/stripe_session?session_id=${sessionId}`);
        const data = await res.json();
        setEmail(data.customer_email || "");
        setItems(JSON.parse(data.items || "[]"));
      } catch (err) {
        setError(true);
        toast.error("Failed to get checkout session. Please contact support");
        console.error("Error fetching Stripe session:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  return { email, items, loading, error };
}
