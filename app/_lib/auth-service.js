import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { useAuthStore } from "./stores/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const loginWithGoogle = async () => {
  const { setUser } = useAuthStore.getState();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  setUser(user);

  // Check if Firestore user doc exists
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // If user doc doesn't exist (first signup), create it
    await setDoc(userRef, {
      email: user.email,
      name: user.displayName || "",
      isAdmin: false,
      settings: {
        newsletter: false, // default to false
      },
    });
  }

  return user;
};

export const loginWithEmail = async (email, password) => {
  const { setUser } = useAuthStore.getState();
  const res = await signInWithEmailAndPassword(auth, email, password);
  setUser(res.user);
  return res.user;
};

export const signUpWithEmail = async (email, password, name) => {
  const { setUser } = useAuthStore.getState();
  const res = await createUserWithEmailAndPassword(auth, email, password);

  // Set display name manually
  await updateProfile(res.user, { displayName: name });
  await res.user.reload(); //  pulls fresh data from Firebase

  setUser(res.user);
  return res.user;
};

export const createUserDoc = async (user, newsletter) => {
  const userRef = doc(db, "users", user.uid);

  const userData = {
    email: user.email,
    name: user.displayName || "",
    isAdmin: false,
    settings: {
      newsletter,
    },
  };

  await setDoc(userRef, userData);
};

export const logout = async () => {
  const { clearUser } = useAuthStore.getState();
  await signOut(auth);
  clearUser();
};
