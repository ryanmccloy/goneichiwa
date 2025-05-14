import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "../stores/authStore";
import { auth } from "../firebase-client";

export default function useAuthListener() {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : clearUser();
    });

    return () => unsubscribe();
  }, [setUser, clearUser]);
}
