"use client";

import Link from "next/link";

import ArrowLinkLeft from "@/app/_components/ui/ArrowLinkLeft";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Button from "@/app/_components/ui/Button";

export default function SignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // HAND FORM SUBMIT LOGIC
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

      <form onSubmit={handleSubmit} className=" sign-in-up-form">
        <SectionHeading mb={false}>Sign Up</SectionHeading>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          aria-label="Name"
          className="input-styles"
        />
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
        <label htmlFor="confirmEmail" className="sr-only">
          Confirm Email
        </label>
        <input
          type="email"
          name="confirmEmail"
          id="confirmEmail"
          placeholder="Confirm email"
          required
          aria-label="Confirm email"
          className="input-styles"
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
          autoComplete="new-password"
        />
        <label htmlFor="confirmPassword" className="sr-only">
          Confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          required
          aria-label="Confirm password"
          className="input-styles"
          autoComplete="new-password"
        />

        <div className="sign-in-up-button">
          <Button>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}
