"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { loginWithEmail } from "../auth-service";

export const useLogIn = () => {
  const router = useRouter();

  const handleSubmit = async (email, password) => {
    try {
      const user = await loginWithEmail(email, password);
      toast.success(`Welcome ${user.email}!`);
      router.push("/account");
    } catch (err) {
      console.error("Login error:", err);

      switch (err.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
          toast.error("Invalid email or password");
          break;
        case "auth/invalid-email":
          toast.error("Please enter a valid email");
          break;
        case "auth/too-many-requests":
          toast.error("Too many attempts. Try again later.");
          break;
        default:
          toast.error("Something went wrong. Try again.");
      }
    }
  };

  return { handleSubmit };
};
