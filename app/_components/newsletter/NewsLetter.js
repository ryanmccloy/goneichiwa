"use client";

import useNewsletterSubscription from "@/app/_lib/hooks/useNewsletterSubscription";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/app/_lib/schemas/newsletterSchema";

export default function NewsLetter() {
  const { subscribe, subscribeLoading } = useNewsletterSubscription();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data) => {
    await subscribe(data.email);
  };

  return (
    <section className="width-size section-styles negative-top-spacing">
      <SectionHeading>Sign Up For Our NewsLetter</SectionHeading>

      <div className="flex flex-col gap-60 lg:flex-row lg:gap-90 ">
        <p className="lg:flex-1">
          Join our newsletter and get exclusive travel tips, insider guides, and
          special discounts on our curated itineraries. Be the first to discover
          hidden gems, expert recommendations, and limited-time deals—delivered
          straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row lg:flex-col gap-30 items-center lg:flex-1 lg:items-start"
        >
          <input
            type="email"
            {...register("email")}
            className="bg-light-grey rounded-global px-6 py-2 w-full"
            placeholder="Email"
          ></input>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <Button isActive={!isSubmitting && !subscribeLoading}>
            {isSubmitting || subscribeLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
