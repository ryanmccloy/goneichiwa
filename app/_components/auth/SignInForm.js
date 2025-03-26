"use client";

import Link from "next/link";

import ArrowLinkLeft from "@/app/_components/ui/ArrowLinkLeft";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Button from "@/app/_components/ui/Button";

export default function SignInForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // HAND FORM SUBMIT LOGIC
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

      <form onSubmit={handleSubmit} className=" sign-in-up-form">
        <SectionHeading mb={false}>Sign In</SectionHeading>

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          aria-label="Email"
          className="input-styles"
          autoComplete="email"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          aria-label="Password"
          className="input-styles"
          autoComplete="current-password"
        />

        <div className="sign-in-up-button">
          <Button>Sign In</Button>
        </div>
      </form>
    </div>
  );
}
