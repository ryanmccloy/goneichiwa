import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getTravelGuides = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "travel-guides"));

    const guides = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return guides;
  } catch (err) {
    console.error("Failed to fetch travel guides", err);
  }
};
