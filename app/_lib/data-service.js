import { db, storage } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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

// fetching travel guides based on country
export const getTravelGuidesByCountry = async (country) => {
  const related = query(
    collection(db, "travel-guides"),
    where("country", "==", country)
  );

  const querySnapshot = await getDocs(related);
  const guides = [];
  querySnapshot.forEach((doc) => {
    guides.push({ id: doc.id, ...doc.data() });
  });
  return guides;
};

//fetching travel guides based on continent
export const getTravelGuidesByContinent = async (continent) => {
  const related = query(
    collection(db, "travel-guides"),
    where("continent", "==", continent)
  );

  const querySnapshot = await getDocs(related);
  const guides = [];
  querySnapshot.forEach((doc) => {
    guides.push({ id: doc.id, ...doc.data() });
  });
  return guides;
};

//fetching featured travel guides
export const getFeaturedTravelGuides = async () => {
  const related = query(
    collection(db, "travel-guides"),
    where("featured", "==", true)
  );

  const querySnapshot = await getDocs(related);
  const guides = [];
  querySnapshot.forEach((doc) => {
    guides.push({ id: doc.id, ...doc.data() });
  });
  return guides;
};

// fetching travel guide image url
export const getImageUrl = async (path) => {
  const fileRef = ref(storage, path);
  const url = await getDownloadURL(fileRef);
  return url;
};

// fetching promo code
export const getPromoCodeFromFirebase = async (code) => {
  const promoRef = doc(db, "promo-codes", code.toUpperCase());
  const promoSnap = await getDoc(promoRef);

  if (promoSnap.exists()) return promoSnap.data();
  return null;
};

// fetching user orders
export const getUserOrders = async (userId) => {
  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/// ----- ACCOUNT UPDATE FUNCTIONS ------ ///

// updating display name
export const updateUserName = async (name) => {
  await updateProfile(auth.currentUser, { displayName: name });
};

// update account email address
export const updateUserEmail = async (newEmail, currentPassword) => {
  const cred = EmailAuthProvider.credential(
    auth.currentUser.email,
    currentPassword
  );
  await reauthenticateWithCredential(auth.currentUser, cred);
  await updateEmail(auth.currentUser, newEmail);
};

// update account password
export const updateUserPassword = async (newPassword) => {
  await updatePassword(auth.currentUser, newPassword);
};

// update newsletter subscription
export const updateNewsletterPreference = async (uid, subscribed) => {
  await updateDoc(doc(db, "users", uid), {
    "settings.newsletter": subscribed,
  });
};

// delete user account
export const deleteUserAccount = async (uid) => {
  await deleteDoc(doc(db, "users", uid));
  await deleteUser(auth.currentUser);
};
