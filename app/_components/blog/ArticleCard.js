"use client";

import Image from "next/image";
import ArticleTag from "./ArticleTag";
import ComingSoonOverlay from "../catalogue/ComingSoonOverlay";
import ImageSkeleton from "../skeletons/SkeletonImage";
import { useState } from "react";

export default function ArticleCard({
  title,
  url,
  alt,
  tags,
  featured = false,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      className={`group rounded-global snap-start flex flex-col gap-15 ${
        featured ? "min-w-[300px] flex-1" : ""
      } hover:cursor-not-allowed`}
    >
      <div className="relative w-full aspect-[4/3]">
        <ImageSkeleton isLoaded={isLoaded} />
        <Image
          src={url}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
          className={`rounded-global object-cover object-top transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Overlay */}
        <ComingSoonOverlay />
      </div>
      {/* </div> */}

      <h5 className="uppercase">{title}</h5>

      <div className="flex gap-15 flex-wrap">
        {tags.map((tag) => {
          return <ArticleTag key={tag} tag={tag} />;
        })}
      </div>
    </div>
  );
}
