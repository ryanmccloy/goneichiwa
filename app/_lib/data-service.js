import { db, storage } from "./firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// fetching all travel guides
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

// fetching specific travel guide
export const getSpecificTravelGuide = async (destination) => {
  const docRef = doc(db, "travel-guides", destination);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...docSnap.data(),
      reviews: docSnap.data().reviews ?? [],
    };
  } else {
    // docSnap.data() will be undefined in this case
    console.error("Failed to fetch travel guide: No such document!");
  }
};

// fetching travel guide image url
export const getImageUrl = async (path) => {
  const fileRef = ref(storage, path);
  const url = await getDownloadURL(fileRef);
  return url;
};
