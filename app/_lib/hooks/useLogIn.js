"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { loginWithEmail, sendResetPasswordEmail } from "../auth-service";
import { useCartSync } from "./useCartSync";

export const useLogIn = () => {
  const router = useRouter();
  const { syncUserCartOnLogin } = useCartSync();

  const errorMap = {
    "auth/user-not-found": "Invalid email or password.",
    "auth/wrong-password": "Invalid email or password.",
    "auth/invalid-credential": "Invalid email or password.",
    "auth/invalid-email": "Please enter a valid email.",
    "auth/too-many-requests": "Too many attempts. Try again later.",
    "auth/network-request-failed":
      "Network error. Please check your connection.",
  };

  const handleSubmit = async (email, password, redirectTo="/account") => {
    try {
      const user = await loginWithEmail(email, password);
      await syncUserCartOnLogin(user.uid);
      toast.success(`Welcome ${user.email}!`);
      router.push(redirectTo);
    } catch (err) {
      const message =
        errorMap[err.code] || "Unable to sign in. Please try again.";
      toast.error(message);
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      await sendResetPasswordEmail(email);
      toast.success("Password reset email sent! Please check your inbox.");
    } catch (err) {
      const message =
        errorMap[err.code] || "Unable to send reset email. Please try again.";
      toast.error(message);
    }
  };

  return { handleSubmit, handleForgotPassword };
};
