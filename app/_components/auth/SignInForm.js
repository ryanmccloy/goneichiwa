"use client";

import ArrowLinkLeft from "../ui/ArrowLinkLeft";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

export default function SignInForm({ handleToggle }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // HAND FORM SUBMIT LOGIC
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <ArrowLinkLeft>Back</ArrowLinkLeft>
        <span className="uppercase">
          Don&apos;t have an account?{" "}
          <span className="font-semibold cursor-pointer" onClick={handleToggle}>
            Sign Up
          </span>
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-30 mt-[30%] w-[400px] mx-auto"
      >
        <SectionHeading mb={false}>Sign In</SectionHeading>

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

        <div className="mt-30">
          <Button>Sign In</Button>
        </div>
      </form>
    </div>
  );
}
