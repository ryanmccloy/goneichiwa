"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

import Button from "@/app/_components/ui/Button";
import { useAuthStore } from "../_lib/stores/authStore";
import confettiFire from "../_lib/helpers/confettiFire";

import SuccessPageItem from "../_components/success/SuccessPageItem";
import { useSuccessSession } from "../_lib/hooks/useSuccessSession";
import useDownloadLinks from "../_lib/hooks/useDownloadLinks";
import { useCartStore } from "../_lib/stores/cartStore";

export default function Page() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { email, items: purchaseItems, loading } = useSuccessSession(sessionId);

  const clearCart = useCartStore((state) => state.clearCart);
  const { user, loading: authLoading } = useAuthStore();
  const isSignedIn = !!user;

  const { downloadLinks, loading: linksLoading } =
    useDownloadLinks(purchaseItems);

  useEffect(() => {
    if (!loading && !authLoading) {
      confettiFire();
    }
  }, [loading, authLoading]);

  useEffect(() => {
    if (!loading && purchaseItems.length > 0) {
      clearCart();
    }
  }, [loading, purchaseItems.length, clearCart]);

  if (loading || authLoading) {
    return (
      <section className="section-styles width-size text-center top-page-spacing">
        <p>Loading your order details...</p>
      </section>
    );
  }

  return (
    <section className="section-styles width-size text-center top-page-spacing negative-top-spacing ">
      <div className="flex flex-col gap-60">
        <div className="flex flex-col gap-30 items-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500" />
          <h1 className="text-2xl font-bold">
            Thank you for your purchase! 🎉
          </h1>

          <p className="text-neutral-600 max-w-md">
            Your travel guide is on its way to your inbox{" "}
            {email && (
              <>
                at <span className="font-semibold">{email}</span>.{" "}
              </>
            )}
            You can also download your guides below:
          </p>

          {purchaseItems && (
            <div className="flex flex-col justify-center gap-15 ">
              {purchaseItems.map((item) => (
                <SuccessPageItem
                  key={item.id}
                  title={item.title}
                  downloadUrl={downloadLinks[item.id]}
                  isLoading={linksLoading}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-30 items-center">
          {isSignedIn ? (
            <div className="flex flex-col md:flex-row gap-30 items-center">
              <Button href="/account">Go to My Account</Button>

              <Button href="/">Return to Home</Button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-30 ">
              <p className="text-sm text-neutral-500 max-w-lg">
                Want easy access to your purchase? Create an account to download
                it again anytime.
              </p>

              <div className="flex flex-col md:flex-row gap-30 items-center">
                <Button href="/sign-up">Create an Account</Button>

                <Button href="/">Return to Home</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
