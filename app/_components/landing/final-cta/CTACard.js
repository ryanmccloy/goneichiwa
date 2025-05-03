"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import ArrowLinkRight from "../../ui/ArrowLinkRight";
import ImageSkeleton from "../../skeletons/SkeletonImage";

export default function CTACard({ title, url, alt, href }) {
  const [isLoaded, setIsLoaded] = useState(false);
  // Reference to the card container
  const ref = useRef(null);

  // Get the scroll position
  const { scrollYProgress } = useScroll({
    target: ref, // Track this element’s scroll position
    offset: ["start end", "end start"], // When the element enters & leaves the viewport
  });

  // Move the image slightly up/down
  const translateY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <Link href={href} className="group flex flex-col gap-30 flex-1" ref={ref}>
      <ArrowLinkRight>{title}</ArrowLinkRight>

      <div className="relative h-[450px] w-full overflow-hidden rounded-global">
        <motion.div
          style={{ translateY, scale: 1.1 }}
          className="absolute inset-0 w-full h-full"
        >
          <ImageSkeleton />
          <Image
            src={url}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`rounded-global object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            quality={70}
            aria-label={alt}
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      </div>
    </Link>
  );
}
