import Image from "next/image";
import Link from "next/link";
import ArrowRightSimpleIcon from "../ui/icons/ArrowRightSimpleIcon";
import ArticleTag from "./ArticleTag";
import ComingSoonOverlay from "../catalogue/ComingSoonOverlay";

export default function ArticleCard({
  href,
  title,
  url,
  alt,
  tags,
  featured = false,
}) {
  return (
    <div
      className={`group rounded-global snap-start flex flex-col gap-15 ${
        featured ? "min-w-[300px]" : ""
      }`}
    >
      <div className="relative w-full h-[300px] ">
        <Image
          src={url}
          alt={alt}
          fill
          sizes="(max-width: 768px) 300px, 100vw"
          className="rounded-global object-cover"
        />

        <span className="absolute z-30 top-15 right-15">
          <ArrowRightSimpleIcon />
        </span>
        <ComingSoonOverlay />
      </div>

      <h5 className="uppercase">{title}</h5>

      <div className="flex gap-15 flex-wrap">
        {tags.map((tag) => {
          return <ArticleTag key={tag} tag={tag} />;
        })}
      </div>
    </div>
  );
}
