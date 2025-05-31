export async function subscribeToNewsletter(email) {
  try {
    const res = await fetch("/api/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "unknown_error");
    }

    return { success: true };
  } catch (error) {
    console.error("[subscribeToNewsletter] API error:", error);
    throw error;
  }
}

export async function unsubscribeFromNewsletter(email) {
  try {
    const res = await fetch("/api/newsletter/unsubscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "unknown_error");
    }

    return { success: true };
  } catch (error) {
    console.error("[unsubscribeFromNewsletter] API error:", error);
    throw error;
  }
}
