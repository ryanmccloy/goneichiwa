import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase-client";

export async function subscribeToNewsletter(email) {
  try {
    const q = query(
      collection(db, "newsletter-subscribers"),
      where("email", "==", email)
    );
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      throw new Error("already_subscribed");
    }

    await addDoc(collection(db, "newsletter-subscribers"), {
      email,
      subscribedAt: new Date(),
    });

    return { success: true };
  } catch (error) {
    console.error("[subscribeToNewsletter] Error:", error);
    throw error;
  }
}
