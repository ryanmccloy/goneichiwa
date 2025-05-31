import { useState } from "react";
import toast from "react-hot-toast";

export default function useConsultationRequest() {
  const [loading, setLoading] = useState(false);

  const sendConsultationRequest = async (data) => {
    setLoading(true);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to send consultation request.");
      }

      toast.success(
        <div style={{ textAlign: "center", lineHeight: "1.6" }}>
          <div>Consultation request sent ✅</div>
          <div style={{ marginTop: "0.4rem" }}>We will be in contact soon!</div>
        </div>,
        {
          style: {
            padding: "16px 20px",
          },
        }
      );

      return { success: true };
    } catch (err) {
      console.error("[useConsultationRequest]", err);
      toast.error(
        "Something went wrong. Please contact support at contact@goneichiwa.com."
      );
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { sendConsultationRequest, loading };
}
