"use client";

import Link from "next/link";
import Image from "next/image";
import TravelGuideCardIcons from "./TravelGuideCardIcons";
import ComingSoonOverlay from "./ComingSoonOverlay";
import { useState } from "react";
import ImageSkeleton from "../skeletons/SkeletonImage";

function TrendingCardDesktop({ guide, sizes = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const item = {
    id: guide.id,
    title: guide.title,
    price: guide.price,
    image: guide.coverImageUrl,
    quantity: 1,
  };
  return (
    <div className="hidden group relative rounded-global lg:flex flex-col justify-between p-15">
      {/* Image and Title wrapped in Link */}
      <Link
        href={`/catalogue/${guide.id}`}
        className="absolute inset-0 z-10 rounded-global"
      >
        <ImageSkeleton setIsLoaded={isLoaded} />
        <Image
          src={guide.coverImageUrl}
          alt={guide.coverImageAlt}
          sizes={`${sizes === "" ? "(min-width: 1024px) 40vw, 100vw" : sizes}`}
          fill
          className={`rounded-global object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        {/* Overlay */}
        {!guide.isActive && isLoaded && <ComingSoonOverlay />}
      </Link>

      <div className="z-20 bg-off-white rounded-global w-fit p-15 uppercase font-semibold">
        {guide.title}
      </div>

      <div className="self-end z-20">
        <TravelGuideCardIcons item={item} isActive={guide.isActive} />
      </div>
    </div>
  );
}

export default TrendingCardDesktop;
