import Button from "../_components/ui/Button";

function SuccessPageButtons({ isSignedIn }) {
  return (
    <div className="flex flex-col gap-30 items-center">
      {isSignedIn ? (
        <div className="flex flex-col md:flex-row gap-30 items-center">
          <Button href="/account">Go to My Account</Button>

          <Button href="/">Return to Home</Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-30 ">
          <p className="text-sm text-neutral-500 max-w-lg">
            Want easy access to your purchase? Create an account to download it
            again anytime.
          </p>

          <div className="flex flex-col md:flex-row gap-30 items-center">
            <Button href="/auth/sign-up">Create an Account</Button>

            <Button href="/">Return to Home</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuccessPageButtons;
