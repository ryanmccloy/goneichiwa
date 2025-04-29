"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { loginWithGoogle } from "../auth-service";
import { useCartSync } from "./useCartSync";

export const useGoogleLogIn = () => {
  const router = useRouter();
  const { syncUserCartOnLogin } = useCartSync();

  const errorMap = {
    "auth/popup-closed-by-user": "Sign in canceled. Please try again.",
    "auth/network-request-failed":
      "Network error. Please check your connection.",
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      await syncUserCartOnLogin(user.uid);
      toast.success(`Welcome ${user.displayName || user.email}!`);
      router.push("/account");
    } catch (err) {
      console.error("[handleGoogleLogin Error]:", err);
      const message =
        errorMap[err.code] || "Google sign-in failed. Please try again.";
      toast.error(message);
    }
  };

  return handleGoogleLogin;
};
