import Image from "next/image";
import CardHeadings from "../../ui/CardHeadings";

export default function BestCard({ isActive, handleHover, title, url, alt }) {
  return (
    <div
      className={`hover:cursor-pointer  w-[calc((100%-120px)/6)] rounded-global ${
        isActive ? "flex-grow-1" : "flex-shrink-1"
      } transition-all duration-300 flex flex-col gap-15`}
      onMouseEnter={handleHover}
    >
      <div className="relative h-[450px]">
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
      </div>
      <CardHeadings>{title}</CardHeadings>
    </div>
  );
}
