import SignInForm from "@/app/_components/auth/SignInForm";

export const metadata = {
  title: "Sign In",
};

export default function page() {
  return (
    <div className="sign-in-up-container">
      <SignInForm />
    </div>
  );
}
