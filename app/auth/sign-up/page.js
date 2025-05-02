import SignUpForm from "@/app/_components/auth/SignUpForm";

export const metadata = {
  title: "Create Account | Goneichiwa",
  description:
    "Sign up to personalize your travel planning experience with Goneichiwa.",
};

export default function page() {
  return (
    <div className="sign-in-up-container">
      <SignUpForm />
    </div>
  );
}
