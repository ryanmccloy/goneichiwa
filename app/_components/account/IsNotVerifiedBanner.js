import { useAccountActions } from "@/app/_lib/hooks/useAccountActions";

function IsNotVerifiedBanner({ isVerified }) {
  const { resendVerificationEmail } = useAccountActions();

  if (isVerified) return null;

  return (
    <div>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-15 mb-15 flex flex-col gap-15">
        <p className="font-bold">Email Not Verified</p>
        <p className="text-sm">
          Please verify your email to update your email address or
          password.{" "}
        </p>
        <button
          className="underline w-fit cursor-pointer"
          onClick={resendVerificationEmail}
          type="button"
        >
          Resend Verification Email
        </button>
      </div>
    </div>
  );
}

export default IsNotVerifiedBanner;
