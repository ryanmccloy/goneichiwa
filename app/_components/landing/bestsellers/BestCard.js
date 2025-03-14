import Image from "next/image";
import CardHeadings from "../../ui/CardHeadings";

export default function BestCard({ isActive, handleHover, title, url, alt }) {
  return (
    <div
      className={`relative hover:cursor-pointer  w-[calc((100%-60px)/6)] rounded-global ${
        isActive ? "flex-grow-1" : "flex-shrink-1"
      } transition-all duration-300 flex flex-col gap-15`}
      onMouseEnter={handleHover}
    >
      <div className="relative h-[450px] flex justify-center">
        <Image
          src={url}
          alt={alt}
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-global"
          quality={70}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent transition-all duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <span
          className={`absolute -bottom-0 uppercase text-off-white transition-all duration-300 ${
            isActive ? "opacity-100 bottom-2" : "opacity-0"
          } `}
        >
          View Guide
        </span>
      </div>
      <CardHeadings>{title}</CardHeadings>
    </div>
  );
}
