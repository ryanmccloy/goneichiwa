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
      router.push("/account");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email is already in use");
      } else {
        toast.error("Something went wrong");
      }

      console.error("Error creating user account:", err);
    }
  };

  return { handleSubmit };
};
