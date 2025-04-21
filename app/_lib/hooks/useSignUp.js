"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signUpWithEmail } from "../auth-service";

export const useSignUp = () => {
  const router = useRouter();

  const handleSubmit = async (email, password) => {
    try {
      const user = await signUpWithEmail(email, password);
      toast.success(`Welcome ${user.email}!`);
      router.push("/auth/account");
    } catch (err) {
      console.error("Error creating user account:", err);
      toast.error("Something went wrong");
    }
  };

  return { handleSubmit };
};
