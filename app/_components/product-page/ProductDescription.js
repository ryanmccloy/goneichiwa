"use client";

import { useAddToCartWithFeedback } from "@/app/_lib/utils/useAddToCartWithFeedback";
import Button from "../ui/Button";
import TickIcon from "../ui/icons/TickIcon";
import ProductDestinationHeading from "../ui/ProductDestinationHeading";

export default function ProductDescription({ guide }) {
  const {
    title,
    description,
    country,
    continent,
    type,
    language,
    price,
    id,
    coverImage,
    isActive,
  } = guide;

  const item = {
    id,
    title,
    price,
    image: coverImage,
    quantity: 1,
  };

  const addToCartWithFeedback = useAddToCartWithFeedback();

  return (
    <div className="flex flex-col gap-30">
      <ProductDestinationHeading price={price}>
        {title}
      </ProductDestinationHeading>

      <div className="flex flex-col gap-15">
        <p>{description.intro}</p>

        <span>Perfect for: </span>
        <ul className="list-disc list-inside">
          {description.audience.map((entry) => {
            return <li key={entry}>{entry}</li>;
          })}
        </ul>
      </div>

      <div>
        <p>
          <span className="font-medium">Destination: </span>
          {title}, {country}, {continent}
        </p>
        <p>
          <span className="font-medium">Format: </span>
          {type}
        </p>
        <p>
          <span className="font-medium">Language: </span>
          {language}
        </p>
      </div>

      <ul className="">
        <span>
          <span className="icon-gap">📍</span>What&apos;s Included?
        </span>

        {description.includes.map((feature, index) => {
          return (
            <li key={index} className="flex items-center gap-[5px] mt-2">
              <TickIcon />
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center mt-30 lg:justify-start">
        <Button isActive={isActive} onClick={() => addToCartWithFeedback(item)}>
          {isActive ? "Add To Cart" : "Coming Soon"}
        </Button>
      </div>
    </div>
  );
}
