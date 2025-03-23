import Image from "next/image";
import Link from "next/link";
import ArrowRightSimpleIcon from "../ui/icons/ArrowRightSimpleIcon";
import ArticleTag from "./ArticleTag";

export default function ArticleCard({ href, title, url, alt, tags }) {
  return (
    <Link
      href={href}
      className="group min-w-[300px] rounded-global snap-start flex flex-col gap-30"
    >
      <div className="relative w-full min-h-[275px] ">
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
      </div>

      <h5 className="uppercase">{title}</h5>

      <div className="flex gap-15 flex-wrap">
        {tags.map((tag) => {
          return <ArticleTag key={tag} tag={tag} />;
        })}
      </div>
    </Link>
  );
}
