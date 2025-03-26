import SignUpForm from "@/app/_components/auth/SignUpForm";

export const metadata = {
  title: "Sign Up",
};

export default function page() {
  return (
    <div className="sign-in-up-container">
      <SignUpForm />
    </div>
  );
}
