import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
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

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    setUser(user);

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        name: user.displayName || "",
        isAdmin: false,
        settings: { newsletter: false },
      });
    }

    return user;
  } catch (err) {
    console.error("[loginWithGoogle Error]:", err);
    throw err;
  }
};

export const loginWithEmail = async (email, password) => {
  const { setUser } = useAuthStore.getState();

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    setUser(res.user);
    return res.user;
  } catch (err) {
    console.error("[loginWithEmail Error]:", err);
    throw err;
  }
};

export const signUpWithEmail = async (email, password, name) => {
  const { setUser } = useAuthStore.getState();

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(res.user, { displayName: name });
    await sendVerificationEmail(res.user);
    await res.user.reload();

    setUser(res.user);
    return res.user;
  } catch (err) {
    console.error("[signUpWithEmail Error]:", err);
    throw err;
  }
};

export const createUserDoc = async (user, newsletter) => {
  const userRef = doc(db, "users", user.uid);

  try {
    const userData = {
      email: user.email,
      name: user.displayName || "",
      isAdmin: false,
      settings: { newsletter },
    };

    await setDoc(userRef, userData);
  } catch (err) {
    console.error("[createUserDoc Error]:", err);
    throw err;
  }
};

export const sendVerificationEmail = async (user) => {
  if (!user) {
    console.error("[sendVerificationEmail Error]: No user to verify.");
    throw new Error("No user to verify.");
  }

  try {
    await sendEmailVerification(user);
  } catch (err) {
    console.error("[sendVerificationEmail Error]:", err);
    throw err;
  }
};

export const sendResetPasswordEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.error("[sendResetPasswordEmail Error]:", err);
    throw err;
  }
};

export const logout = async () => {
  const { clearUser } = useAuthStore.getState();

  try {
    await signOut(auth);
    clearUser();
  } catch (err) {
    console.error("[logout Error]:", err);
    throw err;
  }
};
