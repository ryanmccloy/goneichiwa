"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import Button from "@/app/_components/ui/Button";
import { useAuthStore } from "../_lib/stores/authStore";
import confetti from "canvas-confetti";
import confettiFire from "../_lib/helpers/confettiFire";

export default function Page() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const { user, loading: authLoading } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("download");

  useEffect(() => {
    confettiFire();
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      if (!sessionId) return setLoading(false);

      try {
        const res = await fetch(`/api/stripe-session?session_id=${sessionId}`);
        const data = await res.json();
        setEmail(data.customer_email || "");
        setDownloadUrl(data.download_url || "");
      } catch (err) {
        console.error("Error fetching Stripe session:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  if (loading || authLoading) {
    return (
      <section className="section-styles width-size text-center top-page-spacing">
        <p>Loading your order details...</p>
      </section>
    );
  }

  const isSignedIn = !!user;

  return (
    <section className="section-styles width-size text-center top-page-spacing">
      <div className="flex flex-col gap-90">
        <div className="flex flex-col gap-30 items-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500" />
          <h1 className="text-2xl font-bold">
            Thank you for your purchase! 🎉
          </h1>

          <p className="text-neutral-600 max-w-md">
            Your travel guide is on its way to your inbox
            {email && ` at ${email}`}.
          </p>

          {downloadUrl && (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button>Download Now</Button>
            </a>
          )}
        </div>

        <div className="flex flex-col gap-30">
          {isSignedIn ? (
            <div className="flex gap-15">
              <Link href="/account">
                <Button>Go to My Account</Button>
              </Link>
              <Link href="/">
                <Button variant="ghost">Return to Home</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-30 ">
              <p className="text-sm text-neutral-500 max-w-lg">
                Want easy access to your purchase? Create an account to download
                it again anytime.
              </p>

              <Button href="/sign-up">Create an Account</Button>

              <Button href="/">Return to Home</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
