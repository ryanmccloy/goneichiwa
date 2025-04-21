"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { loginWithGoogle } from "../auth-service";

export const useGoogleLogIn = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      toast.success(`Welcome ${user.displayName || user.email}!`);
      router.push("/auth/account");
    } catch (err) {
      toast.error("Google sign-in failed");
    }
  };

  return { handleGoogleLogin };
};
