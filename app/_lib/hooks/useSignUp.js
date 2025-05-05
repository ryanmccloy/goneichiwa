"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createUserDoc, signUpWithEmail } from "../auth-service";
import { useCartSync } from "./useCartSync";

export const useSignUp = () => {
  const router = useRouter();
  const { syncUserCartOnLogin } = useCartSync();

  const handleSubmit = async (
    email,
    password,
    name,
    newsletter = false,
    redirectTo
  ) => {
    try {
      const user = await signUpWithEmail(email, password, name);
      await createUserDoc(user, newsletter);
      await syncUserCartOnLogin(user.uid);
      toast.success(`Welcome ${user.email}!`);
      router.push(redirectTo);
    } catch (err) {
      const message =
        errorMap[err.code] || "Something went wrong. Please try again.";
      toast.error(message);
    }
  };

  const errorMap = {
    "auth/email-already-in-use": "Email is already in use.",
    "auth/invalid-email": "Invalid email address.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/network-request-failed": "Network error. Please try again.",
    "auth/operation-not-allowed":
      "Sign ups are currently disabled. Please contact support.",
  };

  return { handleSubmit };
};
