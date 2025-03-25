"use client";

import ArrowLinkLeft from "../ui/ArrowLinkLeft";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

export default function SignUpForm({ handleToggle }) {
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
          <span className="font-semibold cursor-pointer" onClick={handleToggle}>
            Sign In
          </span>
        </span>
      </div>

      <form onSubmit={handleSubmit} className="  sign-in-up-form">
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

        <div className="mt-30">
          <Button>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}
