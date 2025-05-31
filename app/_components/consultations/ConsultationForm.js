"use client";

import { consultationSchema } from "@/app/_lib/schemas/consultationSchema";
import Button from "../ui/Button";
import useConsultationRequest from "@/app/_lib/hooks/useConsultationRequest";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ConsultationForm() {
  const layoutSpacing = "flex flex-col gap-30 lg:flex-row";
  const baseInputStyles =
    "bg-light-grey rounded-global p-2 grow border transition-colors duration-200";

  const { sendConsultationRequest } = useConsultationRequest();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data) => {
    await sendConsultationRequest(data);
    reset();
  };

  const inputClass = (field) =>
    `${baseInputStyles} ${errors[field] ? "border-red-500" : "border-transparent"}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-30">
      <h4 className="uppercase text-regular">Request A Consultation</h4>

      <div className={layoutSpacing}>
        <input
          {...register("name")}
          placeholder="Name"
          className={inputClass("name")}
        />

        <input
          {...register("consultationDate")}
          placeholder="Requested date"
          className={inputClass("consultationDate")}
        />
      </div>

      <input
        {...register("email")}
        placeholder="Email"
        className={`${inputClass("email")} max-h-fit`}
      />

      <div className={layoutSpacing}>
        <input
          {...register("destination")}
          placeholder="Destination"
          className={inputClass("destination")}
        />

        <input
          {...register("duration")}
          placeholder="Trip duration"
          className={inputClass("duration")}
        />
      </div>

      <textarea
        {...register("message")}
        placeholder="Any questions or specific requests?..."
        className={`${inputClass("message")} min-h-[150px]`}
      />

      <span className="flex justify-center lg:justify-start mt-30">
        <Button isActive={!isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>
      </span>
    </form>
  );
}
