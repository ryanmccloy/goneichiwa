"use client";

import { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

export default function AccountForm() {
  const [hasAccount, setHasAccount] = useState(true);

  const handleToggle = () => {
    setHasAccount((has) => !has);
  };
  return (
    <>
      {hasAccount ? (
        <SignUpForm handleToggle={handleToggle} />
      ) : (
        <SignInForm handleToggle={handleToggle} />
      )}
    </>
  );
}
