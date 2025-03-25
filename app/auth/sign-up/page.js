"use client";

import Link from "next/link";

import ArrowLinkLeft from "@/app/_components/ui/ArrowLinkLeft";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import Button from "@/app/_components/ui/Button";

export default function page() {
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

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          aria-label="Email"
          className="input-styles"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          aria-label="Password"
          className="input-styles"
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          required
          aria-label="Confirm password"
          className="input-styles"
        />

        <div className="mt-30 flex justify-center ">
          <Button>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}
