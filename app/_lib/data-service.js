import {
  deleteUser,
  EmailAuthProvider,
  GoogleAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "./firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

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

/// ----- ACCOUNT FUNCTIONS ------ ///

export const getUserSettings = async (userId) => {
  if (!userId) throw new Error("No userId provided");

  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    return userData.settings || {};
  } else {
    console.error("Failed to get user settings. User document not found");
    return {};
  }
};

// reathenticating user depending on google sign up or email/password
export const reauthenticateUser = async (user, password = null) => {
  const providerId = user.providerData[0]?.providerId;

  if (providerId === "google.com") {
    const provider = new GoogleAuthProvider();
    await reauthenticateWithPopup(user, provider);
    return user;
  } else if (providerId === "password") {
    if (!password)
      throw new Error("Password is required for re-authentication");
    const cred = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, cred);
    return user;
  } else {
    throw new Error("Unsupported sign-in method.");
  }
};

// updating display name
export const updateUserName = async (user, name) => {
  if (!user?.uid) throw new Error("User not authenticated");

  try {
    // 1. Update Firebase Auth profile
    await updateProfile(user, { displayName: name });
    // 2. Update Firestore user document
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { name });
  } catch (err) {
    console.error("Failed to update username", err);
  }
};

// update account email address
export const updateUserEmail = async (user, newEmail, password) => {
  // handle errors please //////

  const providerId = user.providerData[0]?.providerId;

  if (providerId === "google.com") {
    throw new Error("Email updates must be done through your Google account.");
  }

  // 🛡️ Reload to get latest verified status
  await auth.currentUser.reload();
  const freshUserBefore = auth.currentUser;

  if (!freshUserBefore.emailVerified) {
    throw new Error("Please verify your current email before updating it.");
  }

  // 🔥 Reauthenticate
  await reauthenticateUser(freshUserBefore, password);

  // 🔥 Sign out and sign back in
  const email = freshUserBefore.email;
  await signOut(auth);

  await signInWithEmailAndPassword(auth, email, password); // Fresh sign-in = fresh token
  await auth.currentUser.reload();

  const fullyFreshUser = auth.currentUser;

  // 🔥 NOW update email safely
  await updateEmail(fullyFreshUser, newEmail);

  // 🔥 Send email verification to new email
  await sendEmailVerification(fullyFreshUser);

  await updateDoc(doc(db, "users", fullyFreshUser.uid), { email: newEmail });
};

// update account password
export const updateUserPassword = async (newPassword) => {
  try {
    await updatePassword(auth.currentUser, newPassword);
  } catch (err) {
    console.error("Error updating user password", err);
  }
};

// update newsletter subscription
export const updateNewsletterPreference = async (user, subscribed) => {
  try {
    await updateDoc(doc(db, "users", user.uid), {
      "settings.newsletter": subscribed,
    });
  } catch (err) {
    console.error("Error updating newsletter subscription", err);
  }
};

// delete user account
export const deleteUserAccount = async (user, password = null) => {
  if (!user) throw new Error("No user provided");

  try {
    // 1. Reauthenticate
    await reauthenticateUser(user, password);

    // 2. Delete Firestore user document
    await deleteDoc(doc(db, "users", user.uid));

    // 3. Delete Firebase Auth user
    await deleteUser(user); // use passed-in user object
  } catch (err) {
    console.error("Failed to delete user account", err);
  }
};
