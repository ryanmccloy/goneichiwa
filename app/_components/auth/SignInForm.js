"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import ArrowLinkLeft from "@/app/_components/ui/ArrowLinkLeft";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Button from "@/app/_components/ui/Button";
import { useLogIn } from "@/app/_lib/hooks/useLogIn";
import { useGoogleLogIn } from "@/app/_lib/hooks/useGoogleLogIn";
import toast from "react-hot-toast";

// Schema
const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export default function SignInForm() {
  const { handleSubmit: handleEmailSignIn, handleForgotPassword } = useLogIn();
  const handleGoogleLogin = useGoogleLogIn();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await handleEmailSignIn(email, password);
    } catch (err) {
      console.error("[SignInForm onSubmit Error]:", err);
      toast.error("Unable to sign in. Please try again.");
    }
  };

  const handleForgotPasswordClick = async () => {
    const email = getValues("email");
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }
    await handleForgotPassword(email);
  };

  return (
    <div className="sign-in-up-container">
      <div className="sign-in-up-top-links">
        <ArrowLinkLeft>Back</ArrowLinkLeft>
        <span className="uppercase">
          Don&apos;t have an account?{" "}
          <Link href="/auth/sign-up" className="font-semibold cursor-pointer">
            Sign Up
          </Link>
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="sign-in-up-form">
        <SectionHeading mb={false}>Sign In</SectionHeading>

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="input-styles"
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="input-styles"
          autoComplete="current-password"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <button
          type="button"
          onClick={handleForgotPasswordClick}
          className="text-sm text-accent-blue underline cursor-pointer w-fit"
        >
          Forgot Password?
        </button>

        <div className="sign-in-up-button">
          <Button isActive={!isSubmitting}>
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </div>
      </form>

      {/* Google Sign In Button */}
      <div className="flex justify-center">
        <Button onClick={handleGoogleLogin} isActive={!isSubmitting}>
          {" "}
          {isSubmitting ? "Signing In..." : "Sign In With Google"}
        </Button>
      </div>
    </div>
  );
}
