import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { useAuthStore } from "./stores/authStore";

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
};

export const signUpWithEmail = async (email, password) => {
  const { setUser } = useAuthStore.getState();
  const res = await createUserWithEmailAndPassword(auth, email, password);
  setUser(res.user);
  return res.user;
};

export const logout = async () => {
  const { clearUser } = useAuthStore.getState();
  await signOut(auth);
  clearUser();
};
