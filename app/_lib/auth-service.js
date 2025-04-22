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
import { doc, setDoc } from "firebase/firestore";

export const loginWithGoogle = async () => {
  const { setUser } = useAuthStore.getState();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  setUser(result.user);
  return result.user;
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

export const createUserDoc = async (user) => {
  const userRef = doc(db, "users", user.uid);

  const userData = {
    email: user.email,
    name: user.displayName || "",
    isAdmin: false,
  };

  await setDoc(userRef, userData);
};

export const logout = async () => {
  const { clearUser } = useAuthStore.getState();
  await signOut(auth);
  clearUser();
};
