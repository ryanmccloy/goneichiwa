"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import RightArrow from "../../ui/icons/RightArrow";
import ArrowLinkRight from "../../ui/ArrowLinkRight";
import ComingSoonOverlay from "../../catalogue/ComingSoonOverlay";
import ImageSkeleton from "../../skeletons/SkeletonImage";

export default function BestCard({ id, title, url, alt, lastCard, isActive }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return !lastCard ? (
    <Link
      href={`/catalogue/${id}`}
      className="group min-w-[300px] rounded-global flex flex-col gap-15 snap-start"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-global">
        <ImageSkeleton isLoaded={isLoaded} />
        <Image
          src={url}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 350px, 300px"
          style={{ objectFit: "cover" }}
          className={`rounded-global object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          quality={70}
          aria-label={alt}
          onLoad={() => setIsLoaded(true)}
        />

        {!isActive && isLoaded && <ComingSoonOverlay />}
      </div>

      <ArrowLinkRight>{title}</ArrowLinkRight>
    </Link>
  ) : (
    <Link
      className="min-w-[300px] group rounded-global flex flex-col gap-15"
      href="/catalogue"
    >
      <div className="relative aspect-[3/4] flex justify-center items-center flex-col overflow-hidden rounded-global">
        <ImageSkeleton isLoaded={isLoaded} />
        <Image
          src={url}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 350px, 300px"
          style={{ objectFit: "cover" }}
          className={`rounded-global transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          quality={70}
          onLoad={() => setIsLoaded(true)}
        />

        {isLoaded && (
          <div
            className={`absolute rounded-global inset-0 bg-off-black-40
         `}
          ></div>
        )}

        <RightArrow color="white" size="10" />
      </div>
      <ArrowLinkRight>View All Guides</ArrowLinkRight>
    </Link>
  );
}
