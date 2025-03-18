import { motion } from "framer-motion";

import Image from "next/image";
import CardHeadings from "../../ui/CardHeadings";
import RightArrow from "./RightArrow";

export default function BestCard({
  isActive,
  setIsActive,
  handleHover,
  index,
  title,
  url,
  alt,
  lastCard,
}) {
  return !lastCard ? (
    <motion.div
      className="group min-w-[300px] rounded-global flex flex-col gap-15"
      onMouseEnter={() => setIsActive(index)}
      onMouseLeave={() => setIsActive(null)}
    >
      <div className="relative h-[450px] flex justify-center">
        <Image
          src={url}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-global"
          quality={70}
          sizes=""
          aria-label={alt}
        />
        {/* Darker Overlay When Active */}
        <motion.div
          className="absolute rounded-b-sm inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent transition-all duration-300"
          animate={{ opacity: isActive ? 1 : 0 }}
          aria-hidden="true"
        />

        <motion.span
          className="absolute bottom-0 uppercase text-off-white"
          animate={{
            opacity: isActive ? 1 : 0,
            translateY: isActive ? "-8px" : "0px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label={`View guide for ${title}`}
        >
          View Guide
        </motion.span>
      </div>
      <CardHeadings>
        <div className="flex gap-15 items-center">
          <span>{title}</span>
          <span className="group-hover:ml-2 transition-all duration-300">
            <RightArrow />
          </span>
        </div>
      </CardHeadings>
    </motion.div>
  ) : (
    <motion.div
      className="min-w-[300px] rounded-global flex flex-col gap-15"
      onMouseEnter={() => setIsActive(index)}
      onMouseLeave={() => setIsActive(null)}
    >
      <div className="relative h-[450px] flex justify-center items-center flex-col">
        <Image
          src={url}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-global"
          quality={70}
          sizes=""
        />

        <motion.div
          className={`absolute rounded-sm inset-0  ${
            isActive ? "bg-off-black-60" : "bg-off-black-40"
          } transition-all duration-300`}
        ></motion.div>

        <RightArrow color="white" size="10" />
      </div>
      <CardHeadings>{title}</CardHeadings>
    </motion.div>
  );
}
