"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { useAuthStore } from "../_lib/stores/authStore";
import { useCartStore } from "../_lib/stores/cartStore";

import SuccessPageItem from "../_components/success/SuccessPageItem";

import confettiFire from "../_lib/helpers/confettiFire";

import { useSuccessSession } from "../_lib/hooks/useSuccessSession";
import useDownloadLinks from "../_lib/hooks/useDownloadLinks";
import { useSaveOrder } from "../_lib/hooks/useSaveOrder";
import SuccessPageButtons from "../_components/success/SuccessPageButtons";
import { useSendConfirmationEmail } from "../_lib/hooks/useSendConfirmationEmail";

export default function Page() {
  const hasFired = useRef(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const clearCart = useCartStore((state) => state.clearCart);
  const { user, loading: authLoading } = useAuthStore();
  const isSignedIn = !!user;

  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  // fetching the stripe session
  const {
    email,
    items: purchaseItems,
    amount,
    orderDate,
    loading: sessionIdLoading,
    error: stripeSessionError,
  } = useSuccessSession(sessionId);

  // fetching the guide download links
  const {
    downloadLinks,
    loading: linksLoading,
    error: downloadLinksError,
  } = useDownloadLinks(purchaseItems);

  // saving the order to firestore
  const {
    saveOrder,
    loading: saveOrderLoading,
    error: saveOrderError,
  } = useSaveOrder();

  // sending confirmation email
  const {
    sendConfirmationEmail,
    loading: confirmationEmailLoading,
    error: confirmationEmailError,
  } = useSendConfirmationEmail();

  // after successful save to firestore, returning the order number, clearing the cart,  and firing the confetti cannon
  useEffect(() => {
    if (!sessionId) return;

    saveOrder(sessionId).then(({ success, orderNumber }) => {
      if (success) {
        setOrderNumber(orderNumber);
        clearCart();
        confettiFire();
      }
    });
  }, [sessionId, saveOrder, clearCart]);

  // sending confirmation email after order has saved to firebase
  useEffect(() => {
    // all required data must be loaded and present
    const ready =
      email &&
      orderNumber &&
      orderDate &&
      amount &&
      purchaseItems.length > 0 &&
      Object.keys(downloadLinks).length > 0 &&
      !saveOrderLoading;

    if (!ready || hasFired.current) return;

    hasFired.current = true;

    sendConfirmationEmail(
      email,
      orderNumber,
      amount,
      orderDate,
      purchaseItems,
      downloadLinks
    );
  }, [
    email,
    amount,
    orderDate,
    purchaseItems,
    downloadLinks,
    orderNumber,
    linksLoading,
    saveOrderLoading,
    sendConfirmationEmail,
  ]);

  if (sessionIdLoading || linksLoading || saveOrderLoading) {
    return (
      <section className="section-styles width-size text-center top-page-spacing">
        <p>Loading your order details...</p>
      </section>
    );
  }

  return (
    <section className="section-styles width-size text-center top-page-spacing  ">
      <div className="flex flex-col gap-60">
        <div className="flex flex-col gap-30 items-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500" />
          <h1 className="text-2xl font-bold">
            Thank you for your purchase! 🎉
          </h1>
          <span className="font-semibold">
            {saveOrderError
              ? "We couldn't save your order. Please contact support."
              : `Order number: ${
                  saveOrderLoading ? "Generating..." : orderNumber
                }`}
          </span>

          <p className="text-neutral-600 max-w-md">
            Your travel guide is on its way to your inbox{" "}
            {email && (
              <>
                at <span className="font-semibold">{email}</span>.{" "}
              </>
            )}
            You can also download your guides below:
          </p>

          {downloadLinksError || stripeSessionError ? (
            <p className="text-sm text-red-500 mt-2">
              Something went wrong. Please check your email or contact support.
            </p>
          ) : (
            purchaseItems.length > 0 && (
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
            )
          )}
        </div>

        <SuccessPageButtons isSignedIn={isSignedIn} />
      </div>
    </section>
  );
}
