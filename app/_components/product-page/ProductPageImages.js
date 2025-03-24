"use client";

import Image from "next/image";
import Slider from "../ui/Slider";
import { useState } from "react";

export default function ProductPageImages() {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const images = [
    {
      url: "/images/landing/seceda.webp",
      alt: "seceda",
    },
    {
      url: "/images/landing/hero.webp",
      alt: "seceda",
    },
    {
      url: "/images/landing/lofoten.webp",
      alt: "seceda",
    },
    {
      url: "/images/landing/tokyo.webp",
      alt: "seceda",
    },
    {
      url: "/images/landing/yosemite.webp",
      alt: "seceda",
    },
  ];

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
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 300px"
                  className="object-cover rounded-global"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="hidden lg:flex flex-col gap-15 h-[450px]  ">
        <div className="relative flex-grow ">
          <Image
            src={images[activeImage].url}
            alt="alt"
            fill
            sizes="(min-width: 1024px) 60vw"
            priority={true}
            className="object-cover rounded-global"
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
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 125px"
                    className="object-cover rounded-global"
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
