"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import ArrowLinkLeft from "@/app/_components/ui/ArrowLinkLeft";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Button from "@/app/_components/ui/Button";
import { useSignUp } from "@/app/_lib/hooks/useSignUp";
import { useGoogleLogIn } from "@/app/_lib/hooks/useGoogleLogIn";

// 1. Schema
const signUpSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    confirmEmail: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    newsletter: z.boolean().optional(),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUpForm() {
  const { handleSubmit: handleSignUpSubmit } = useSignUp();
  const handleGoogleLogin = useGoogleLogIn();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    const { email, password, name, newsletter } = data;
    await handleSignUpSubmit(email, password, name, newsletter);
  };

  return (
    <div className="sign-in-up-container">
      <div className="sign-in-up-top-links">
        <ArrowLinkLeft>Back</ArrowLinkLeft>
        <span className="uppercase">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="font-semibold cursor-pointer">
            Sign In
          </Link>
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="sign-in-up-form">
        <SectionHeading mb={false}>Sign Up</SectionHeading>

        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="input-styles"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}

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
          {...register("confirmEmail")}
          type="email"
          placeholder="Confirm Email"
          className="input-styles"
        />
        {errors.confirmEmail && (
          <p className="text-sm text-red-500">{errors.confirmEmail.message}</p>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="input-styles"
          autoComplete="new-password"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="input-styles"
          autoComplete="new-password"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}

        <label className="inline-flex items-center gap-15 text-sm">
          <input
            type="checkbox"
            {...register("newsletter")}
            className="accent-accent-blue"
          />
          Subscribe to our newsletter
        </label>

        <div className="sign-in-up-button">
          <Button isActive={!isSubmitting}>
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </div>
      </form>
      <div className="flex justify-center">
        <Button onClick={handleGoogleLogin}>Sign Up With Google</Button>
      </div>
    </div>
  );
}
