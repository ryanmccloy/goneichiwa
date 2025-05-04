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
                className="relative min-w-[300px] h-[300px] rounded-global"
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

      <div className="hidden lg:flex flex-col gap-15 h-[450px]  ">
        <div className="relative flex-grow ">
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
                  className="relative min-w-[125px] h-[75px] rounded-global"
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
