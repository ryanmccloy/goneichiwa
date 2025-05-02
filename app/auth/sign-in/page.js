import SignInForm from "@/app/_components/auth/SignInForm";

export const metadata = {
  title: "Sign In | Goneichiwa",
  description:
    "Access your Goneichiwa account to view guides, orders, and settings.",
};

export default function page() {
  return (
    <div className="sign-in-up-container">
      <SignInForm />
    </div>
  );
}
