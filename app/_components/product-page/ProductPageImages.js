"use client";

import Image from "next/image";
import Slider from "../ui/Slider";
import { useState } from "react";
import ImageSkeleton from "../skeletons/SkeletonImage";

export default function ProductPageImages({ images }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  return (
    <>
      <div className="lg:hidden">
        <Slider>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="relative min-w-[300px] aspect-[4/3] rounded-global"
              >
                <ImageSkeleton isLoaded={isLoaded} />
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 300px"
                  className={`rounded-global object-cover transition-opacity duration-500 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="hidden lg:flex flex-col gap-15  ">
        <div className="relative aspect-[4/3] w-full ">
          <ImageSkeleton isLoaded={isLoaded} />
          <Image
            src={images[activeImage].url}
            alt="alt"
            fill
            sizes="(min-width: 1024px) 60vw"
            priority={true}
            className={`rounded-global object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <div>
          <Slider>
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="relative aspect-[4/3] h-[75px] rounded-global cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <ImageSkeleton isLoaded={isLoaded} />
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 125px"
                    className={`rounded-global object-cover transition-opacity duration-500 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setIsLoaded(true)}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
