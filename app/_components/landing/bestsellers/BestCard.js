"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../../ui/icons/RightArrow";
import ArrowLinkRight from "../../ui/ArrowLinkRight";
import { formatGuideIdRoute } from "@/app/_lib/helpers/formatGuideIdRoute";

export default function BestCard({ title, url, alt, lastCard }) {
  // Reference to the card container
  const ref = useRef(null);

  // Get the scroll position
  const { scrollYProgress } = useScroll({
    target: ref, // Track this element’s scroll position
    offset: ["start end", "end start"], // When the element enters & leaves the viewport
  });

  // Move the image slightly up/down
  const translateY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return !lastCard ? (
    <Link
      href={`/catalogue/${formatGuideIdRoute(title)}`}
      className="group min-w-[300px] rounded-global flex flex-col gap-15 snap-start"
    >
      <div
        className="relative h-[450px] w-full overflow-hidden rounded-global"
        ref={ref}
      >
        <motion.div
          style={{ translateY, scale: 1.1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={url}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 350px, 300px"
            style={{ objectFit: "cover" }}
            className="rounded-global"
            quality={70}
            aria-label={alt}
          />
        </motion.div>
      </div>

      <ArrowLinkRight>{title}</ArrowLinkRight>
    </Link>
  ) : (
    <Link
      className="min-w-[300px] group rounded-global flex flex-col gap-15"
      href="/catalogue"
    >
      <div
        className="relative h-[450px] flex justify-center items-center flex-col overflow-hidden rounded-global"
        ref={ref}
      >
        {/* ✅ Apply same scaling here */}
        <motion.div
          style={{ translateY, scale: 1.1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={url}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 350px, 300px"
            style={{ objectFit: "cover" }}
            className="rounded-global"
            quality={70}
          />
        </motion.div>

        <motion.div
          className={`absolute rounded-global inset-0 bg-off-black-40
         `}
        ></motion.div>

        <RightArrow color="white" size="10" />
      </div>
      <ArrowLinkRight>View All Guides</ArrowLinkRight>
    </Link>
  );
}
